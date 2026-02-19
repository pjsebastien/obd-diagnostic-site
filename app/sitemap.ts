import { MetadataRoute } from 'next';
import { guides } from '@/data/guides';
import obdCodes from '@/data/obd_codes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://obd-diagnostic.fr';

  // Date fixe basee sur la derniere mise a jour reelle du contenu
  // A mettre a jour MANUELLEMENT a chaque modification du contenu
  const lastContentUpdate = '2026-02-06T00:00:00.000Z';

  // Pages principales (mentions-legales et politique-confidentialite sont noindex -> hors sitemap)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/codes-obd`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Pages de codes OBD - priorite differenciee populaires vs non-populaires
  const codePages: MetadataRoute.Sitemap = obdCodes.map((codeObj) => ({
    url: `${baseUrl}/code/${codeObj.code}`,
    lastModified: lastContentUpdate,
    changeFrequency: 'monthly' as const,
    priority: codeObj.popular ? 0.8 : 0.6,
  }));

  // Pages de guides avec dates de publication reelles
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => {
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
