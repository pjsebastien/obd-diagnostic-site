import { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides OBD2 et Diagnostic Auto | OBD-Diagnostic.fr',
  description:
    'Découvrez nos guides complets pour comprendre et utiliser les codes OBD2 : lecture, diagnostic, effacement, et solutions. Devenez autonome dans l\'entretien de votre véhicule.',
  alternates: {
    canonical: 'https://obd-diagnostic.fr/guides',
  },
  openGraph: {
    title: 'Guides OBD2 et Diagnostic Auto | OBD-Diagnostic.fr',
    description:
      'Découvrez nos guides complets pour comprendre et utiliser les codes OBD2 : lecture, diagnostic, effacement, et solutions.',
    url: 'https://obd-diagnostic.fr/guides',
    type: 'website',
  },
};

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

export default function GuidesPage() {
  const featuredGuides = guides.filter((guide) => guide.featured);
  const allGuidesByCategory = {
    diagnostic: guides.filter((g) => g.category === 'diagnostic'),
    outils: guides.filter((g) => g.category === 'outils'),
    codes: guides.filter((g) => g.category === 'codes'),
    entretien: guides.filter((g) => g.category === 'entretien'),
  };

  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <li className="text-white font-medium">Guides</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Guides <span className="text-mechanic-500">OBD2</span>
          </h1>
          <p className="text-carbon-300 text-lg max-w-3xl mx-auto">
            Apprenez à diagnostiquer, comprendre et résoudre les problèmes de votre véhicule grâce à nos guides
            détaillés et pratiques. De la lecture des codes OBD2 aux réparations courantes.
          </p>
        </div>

        {/* Guides à la une */}
        {featuredGuides.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-mechanic-500">⭐</span>
              Guides à la une
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-xl p-6 hover:border-mechanic-500/50 transition-all duration-300 shadow-lg hover:shadow-mechanic-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        categoryColors[guide.category]
                      }`}
                    >
                      {categoryLabels[guide.category]}
                    </span>
                    <span className="text-carbon-400 text-sm">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mechanic-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-carbon-300 text-sm mb-4 line-clamp-3">{guide.description}</p>
                  <div className="flex items-center justify-between text-carbon-400 text-xs">
                    <span>{guide.publishedDate}</span>
                    <span className="text-mechanic-500 group-hover:text-mechanic-400 font-semibold">
                      Lire le guide →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tous les guides par catégorie */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Tous les guides</h2>
          <div className="space-y-12">
            {Object.entries(allGuidesByCategory).map(([category, categoryGuides]) => {
              if (categoryGuides.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        categoryColors[category as keyof typeof categoryColors]
                      }`}
                    >
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="group bg-carbon-900/50 border border-carbon-800 rounded-lg p-6 hover:border-mechanic-500/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-carbon-400 text-sm">{guide.readTime}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-mechanic-400 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-carbon-300 text-sm mb-4 line-clamp-2">{guide.description}</p>
                        <div className="flex items-center justify-between text-carbon-400 text-xs">
                          <span>{guide.publishedDate}</span>
                          <span className="text-mechanic-500 group-hover:text-mechanic-400 font-medium">
                            Lire →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Besoin d&apos;aide pour un code spécifique ?</h2>
          <p className="text-carbon-300 mb-6">
            Consultez notre base de données complète de codes OBD2 pour trouver la signification et les solutions à votre
            problème.
          </p>
          <Link
            href="/codes-obd"
            className="inline-flex items-center gap-2 bg-mechanic-500 hover:bg-mechanic-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Rechercher un code OBD
          </Link>
        </div>
      </div>
    </div>
  );
}
