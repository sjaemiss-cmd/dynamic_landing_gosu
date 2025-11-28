const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://gosudriving.com/company/pass_review.php?re_use_type=&re_certifi_type=&sd_idx=11&br_idx=4';

const agent = new https.Agent({
    rejectUnauthorized: false
});

https.get(url, { agent }, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        try {
            const $ = cheerio.load(data);
            const reviews = [];
            const seenImages = new Set();

            $('li:has(a[href*="javascript:open_popup"])').each((index, element) => {
                const $li = $(element);
                const $link = $li.find('a[href*="javascript:open_popup"]');

                if ($link.length === 0) return;

                const linkText = $link.text().trim();

                if (!linkText.includes('[도봉운전면허시험장점]')) {
                    return;
                }

                const $img = $link.find('img');
                const imgSrc = $img.attr('src');

                if (!imgSrc || seenImages.has(imgSrc)) {
                    return;
                }

                const $h1 = $link.find('h1');
                const nameText = $h1.length ? $h1.text().trim() : linkText;
                const nameMatch = nameText.match(/\[도봉운전면허시험장점\]\s*(.+)/);
                const name = nameMatch ? nameMatch[1].trim() : '익명';

                let date = '';
                const $date = $link.find('.date');
                if ($date.length) {
                    date = $date.text().trim();
                } else {
                    const dateMatch = $li.text().match(/(\d{4}-\d{2}-\d{2})/);
                    if (dateMatch) {
                        date = dateMatch[1];
                    }
                }

                let reviewText = $link.find('.summary').text().trim();

                if (!reviewText) {
                    reviewText = $li.text()
                        .replace(linkText, '')
                        .replace(date, '')
                        .replace(/\[도봉운전면허시험장점\]/g, '')
                        .trim();
                }

                reviewText = reviewText
                    .replace(/\[도봉운전면허시험장점\]/g, '')
                    .replace(name, '')
                    .replace(/^\s*-\s*/, '')
                    .trim();

                if (imgSrc && reviewText) {
                    seenImages.add(imgSrc);

                    const imageUrl = imgSrc.startsWith('http')
                        ? imgSrc
                        : `https://gosudriving.com${imgSrc.startsWith('/') ? '' : '/'}${imgSrc}`;

                    reviews.push({
                        id: reviews.length,
                        image: imageUrl,
                        text: reviewText.substring(0, 300),
                        name: name,
                        date: date || new Date().toISOString().split('T')[0],
                    });
                }
            });

            const sortedReviews = reviews
                .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                })
                .slice(0, 8);

            sortedReviews.forEach((review, index) => {
                review.id = index;
            });

            fs.writeFileSync('reviews.json', JSON.stringify(sortedReviews, null, 2));
            console.log('Reviews saved to reviews.json');

        } catch (e) {
            console.error('Error parsing:', e);
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
