// Composant pour injecter des donnees structurees JSON-LD (Schema.org)
// Utilise sur toutes les pages pour ameliorer les rich snippets Google

type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// --- Schemas reutilisables ---

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OBD-Diagnostic.fr',
    url: 'https://obd-diagnostic.fr',
    logo: 'https://obd-diagnostic.fr/icon-512.png',
    description:
      'Plateforme gratuite de diagnostic automobile. Comprenez la signification des codes OBD2, identifiez les causes de vos voyants moteur et trouvez les solutions adaptees.',
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OBD-Diagnostic.fr',
    url: 'https://obd-diagnostic.fr',
    description:
      'Comprenez la signification de chaque code OBD2, identifiez la cause de votre voyant moteur et decouvrez les solutions adaptees.',
    inLanguage: 'fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://obd-diagnostic.fr/code/{search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OBD-Diagnostic.fr',
      url: 'https://obd-diagnostic.fr',
    },
    ...(image ? { image } : {}),
    inLanguage: 'fr',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
