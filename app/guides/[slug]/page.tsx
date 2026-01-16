import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug, getAllGuideSlugs } from '@/data/guides';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: 'Guide non trouvé | OBD-Diagnostic.fr',
    };
  }

  return {
    title: `${guide.title} | OBD-Diagnostic.fr`,
    description: guide.description,
    keywords: guide.seoKeywords.join(', '),
    alternates: {
      canonical: `https://obd-diagnostic.fr/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | OBD-Diagnostic.fr`,
      description: guide.description,
      url: `https://obd-diagnostic.fr/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedDate,
      authors: [guide.author],
    },
  };
}

const categoryLabels = {
  diagnostic: 'Diagnostic',
  outils: 'Outils',
  codes: 'Codes OBD',
  entretien: 'Entretien',
};

const categoryColors = {
  diagnostic: 'bg-mechanic-500/10 text-mechanic-400 border-mechanic-500/20',
  outils: 'bg-steel-500/10 text-steel-400 border-steel-500/20',
  codes: 'bg-warning-500/10 text-warning-400 border-warning-500/20',
  entretien: 'bg-carbon-500/10 text-carbon-300 border-carbon-500/20',
};

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = guides.filter((g) => guide.content.relatedGuides.includes(g.slug));

  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-carbon-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/guides" className="hover:text-white transition-colors">
                Guides
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-white font-medium">{guide.title}</li>
          </ol>
        </nav>

        {/* En-tête du guide */}
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[guide.category]}`}>
                {categoryLabels[guide.category]}
              </span>
              <span className="text-carbon-400 text-sm">{guide.readTime}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{guide.title}</h1>
            <p className="text-carbon-300 text-lg mb-4">{guide.description}</p>
            <div className="flex items-center gap-4 text-carbon-400 text-sm">
              <span>Par {guide.author}</span>
              <span>•</span>
              <time dateTime={guide.publishedDate}>{guide.publishedDate}</time>
            </div>
          </header>

          {/* Introduction */}
          <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-8 shadow-xl">
            <p className="text-carbon-200 text-lg leading-relaxed">{guide.content.introduction}</p>
          </div>

          {/* Sommaire */}
          <nav className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6 mb-8">
            <h2 className="text-white font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              Sommaire
            </h2>
            <ol className="space-y-2">
              {guide.content.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-carbon-300 hover:text-mechanic-400 transition-colors text-sm"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
              {guide.content.faq && (
                <li>
                  <a
                    href="#faq"
                    className="text-carbon-300 hover:text-mechanic-400 transition-colors text-sm"
                  >
                    {guide.content.sections.length + 1}. Questions fréquentes
                  </a>
                </li>
              )}
            </ol>
          </nav>

          {/* Sections du guide */}
          <div className="space-y-8 mb-12">
            {guide.content.sections.map((section, sectionIndex) => (
              <section
                key={sectionIndex}
                id={`section-${sectionIndex}`}
                className="scroll-mt-8 bg-carbon-900/50 border border-carbon-800 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {sectionIndex + 1}. {section.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-carbon-200 mb-6 leading-relaxed whitespace-pre-line">{section.content}</p>
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
                          <h3 className="text-lg font-bold text-white mb-3">{subsection.title}</h3>
                          <p className="text-carbon-200 leading-relaxed whitespace-pre-line">{subsection.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ */}
          {guide.content.faq && guide.content.faq.length > 0 && (
            <section id="faq" className="scroll-mt-8 mb-12">
              <div className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-mechanic-500">❓</span>
                  Questions fréquentes
                </h2>
                <div className="space-y-6">
                  {guide.content.faq.map((item, index) => (
                    <div key={index} className="bg-carbon-950/50 border border-carbon-800 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-3">{item.question}</h3>
                      <p className="text-carbon-200 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Codes OBD liés */}
          {guide.content.relatedCodes && guide.content.relatedCodes.length > 0 && (
            <section className="mb-12">
              <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
                <h2 className="text-xl font-bold text-white mb-4">Codes OBD liés</h2>
                <div className="flex flex-wrap gap-3">
                  {guide.content.relatedCodes.map((code) => (
                    <Link
                      key={code}
                      href={`/code/${code}`}
                      className="bg-carbon-950 border border-carbon-700 hover:border-mechanic-500 text-white px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200"
                    >
                      {code}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{guide.content.cta.text}</h2>
            <Link
              href={guide.content.cta.link}
              className="inline-flex items-center gap-2 bg-mechanic-500 hover:bg-mechanic-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Voir les codes OBD
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Guides liés */}
          {relatedGuides.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Guides connexes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides/${relatedGuide.slug}`}
                    className="group bg-carbon-900/50 border border-carbon-800 rounded-lg p-6 hover:border-mechanic-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full border ${
                          categoryColors[relatedGuide.category]
                        }`}
                      >
                        {categoryLabels[relatedGuide.category]}
                      </span>
                      <span className="text-carbon-400 text-sm">{relatedGuide.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mechanic-400 transition-colors">
                      {relatedGuide.title}
                    </h3>
                    <p className="text-carbon-300 text-sm line-clamp-2">{relatedGuide.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Navigation retour */}
        <div className="text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux guides
          </Link>
        </div>
      </div>
    </div>
  );
}
