import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';
import obdCodes from '@/data/obd_codes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://obd-diagnostic.fr';
  const currentDate = new Date();

  // Pages principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/codes-obd`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Pages de codes OBD - tous les codes
  const codePages: MetadataRoute.Sitemap = obdCodes.map((codeObj) => ({
    url: `${baseUrl}/code/${codeObj.code}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pages de guides
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => {
    // Parse la date de publication pour lastModified
    const publishedDate = new Date(guide.publishedDate);

    return {
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: publishedDate,
      changeFrequency: 'monthly' as const,
      priority: guide.featured ? 0.8 : 0.7,
    };
  });

  return [...staticPages, ...codePages, ...guidePages];
}
