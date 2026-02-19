import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page non trouvée | OBD-Diagnostic.fr',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-carbon-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icone */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-warning-500/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-warning-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Texte */}
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-carbon-300 mb-6">Page non trouvée</h2>
          <p className="text-carbon-400 text-lg mb-8 max-w-xl mx-auto">
            La page que vous recherchez n&apos;existe pas, a été déplacée ou est temporairement indisponible.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/codes-obd"
              className="inline-flex items-center justify-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Rechercher un code OBD
            </Link>
          </div>

          {/* Suggestions */}
          <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8 text-left">
            <h3 className="text-white font-bold mb-4">Pages utiles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/codes-obd"
                className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 hover:border-mechanic-600/50 transition-all group"
              >
                <h4 className="text-white font-semibold mb-1 group-hover:text-mechanic-400 transition-colors">
                  Codes OBD2
                </h4>
                <p className="text-carbon-400 text-sm">Liste complète des codes défauts</p>
              </Link>
              <Link
                href="/guides"
                className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 hover:border-mechanic-600/50 transition-all group"
              >
                <h4 className="text-white font-semibold mb-1 group-hover:text-mechanic-400 transition-colors">
                  Guides
                </h4>
                <p className="text-carbon-400 text-sm">Guides pratiques de diagnostic</p>
              </Link>
              <Link
                href="/contact"
                className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 hover:border-mechanic-600/50 transition-all group"
              >
                <h4 className="text-white font-semibold mb-1 group-hover:text-mechanic-400 transition-colors">
                  Contact
                </h4>
                <p className="text-carbon-400 text-sm">Signalez un problème</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
