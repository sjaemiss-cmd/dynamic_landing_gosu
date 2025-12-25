import { MetadataRoute } from 'next';
import { locationData, intentData } from '@/data/seoData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.gosudriving.com';

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/speed',
        '/phobia',
        '/skill',
        '/practice',
        '/cost',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // 2. Location Main Pages
    const locationRoutes = locationData.map((location) => ({
        url: `${baseUrl}/locations/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }));

    // 3. Intent Detail Pages
    const intentRoutes = locationData.flatMap((location) =>
        intentData.map((intent) => ({
            url: `${baseUrl}/locations/${location.slug}/${intent}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        }))
    );

    return [...staticRoutes, ...locationRoutes, ...intentRoutes];
}
