import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact – Posez vos questions sur le diagnostic OBD2',
  description:
    "Contactez l'équipe OBD-Diagnostic.fr pour toute question sur les codes OBD2, le diagnostic automobile ou le fonctionnement du site.",
  alternates: {
    canonical: 'https://obd-diagnostic.fr/contact',
  },
  openGraph: {
    title: 'Contact – OBD-Diagnostic.fr',
    description:
      "Contactez-nous pour toute question sur les codes OBD2 et le diagnostic automobile.",
    url: 'https://obd-diagnostic.fr/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://obd-diagnostic.fr/' },
    { name: 'Contact', url: 'https://obd-diagnostic.fr/contact' },
  ];

  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

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
            <li className="text-white font-medium">Contact</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-carbon-300 leading-relaxed">
            Une question, une suggestion ou un problème ? N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Informations latérales */}
          <div className="space-y-6">
            {/* Délai de réponse */}
            <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                Délai de réponse
              </h3>
              <p className="text-carbon-300 text-sm">
                Nous nous engageons à répondre à votre demande dans un délai de{' '}
                <strong className="text-white">48 heures ouvrées</strong>.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                Avant de nous écrire
              </h3>
              <p className="text-carbon-300 text-sm mb-3">
                Consultez nos pages d&apos;aide pour trouver rapidement une réponse :
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/codes-obd"
                    className="text-mechanic-500 hover:text-mechanic-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Liste des codes OBD2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-mechanic-500 hover:text-mechanic-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Guides et tutoriels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className="text-mechanic-500 hover:text-mechanic-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    À propos du site
                  </Link>
                </li>
              </ul>
            </div>

            {/* Autres moyens */}
            <div className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                Bon à savoir
              </h3>
              <p className="text-carbon-300 text-sm">
                Pour toute question urgente concernant un problème mécanique, nous vous recommandons de consulter un
                professionnel qualifié.
              </p>
            </div>
          </div>
        </div>

        {/* Retour */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
