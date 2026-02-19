import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'À propos - Notre mission',
  description:
    'Découvrez OBD-Diagnostic.fr, votre plateforme gratuite pour comprendre et diagnostiquer les codes erreurs OBD2 de votre véhicule. Mission, valeurs et engagement.',
  alternates: {
    canonical: 'https://obd-diagnostic.fr/a-propos',
  },
  openGraph: {
    title: 'À propos - Notre mission | OBD-Diagnostic.fr',
    description:
      'Découvrez OBD-Diagnostic.fr, votre plateforme gratuite pour comprendre et diagnostiquer les codes erreurs OBD2 de votre véhicule.',
    url: 'https://obd-diagnostic.fr/a-propos',
    type: 'website',
  },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      <JsonLd data={breadcrumbSchema([
        { name: 'Accueil', url: 'https://obd-diagnostic.fr/' },
        { name: 'À propos', url: 'https://obd-diagnostic.fr/a-propos' },
      ])} />

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
            <li className="text-white font-medium">À propos</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">À propos d&apos;OBD-Diagnostic.fr</h1>
          <p className="text-xl text-carbon-300 leading-relaxed">
            Votre plateforme gratuite pour comprendre et diagnostiquer les codes erreurs de votre véhicule.
          </p>
        </div>

        {/* Mission */}
        <section className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Notre mission
          </h2>
          <p className="text-carbon-200 leading-relaxed mb-4">
            <strong className="text-white">OBD-Diagnostic.fr</strong> a pour mission de{' '}
            <strong className="text-white">démocratiser l&apos;accès au diagnostic automobile</strong>. Nous croyons que
            chaque automobiliste devrait pouvoir comprendre les codes erreurs de son véhicule sans avoir besoin de
            connaissances techniques avancées.
          </p>
          <p className="text-carbon-200 leading-relaxed">
            Grâce à notre base de données exhaustive et nos explications pédagogiques, nous vous aidons à{' '}
            <strong className="text-white">identifier rapidement</strong> la signification d&apos;un code OBD2,
            comprendre sa gravité et connaître les solutions possibles.
          </p>
        </section>

        {/* Pourquoi nous */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Pourquoi OBD-Diagnostic.fr ?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mechanic-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">100% Gratuit et sans inscription</h3>
                <p className="text-carbon-300">
                  Tous nos services sont gratuits et accessibles sans création de compte. Pas de publicités intrusives,
                  pas d&apos;abonnement caché.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mechanic-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Base de données exhaustive</h3>
                <p className="text-carbon-300">
                  Plus de 5000 codes OBD2 répertoriés avec leurs descriptions en français. Nous couvrons les codes
                  génériques (P, B, C, U) communs à toutes les marques.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mechanic-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Informations pédagogiques</h3>
                <p className="text-carbon-300">
                  Chaque code est accompagné d&apos;explications claires, des causes possibles, des solutions
                  recommandées et du niveau de gravité. Pas de jargon technique incompréhensible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mechanic-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Accessible 24/7</h3>
                <p className="text-carbon-300">
                  Notre plateforme est disponible à tout moment, où que vous soyez. Consultez les codes depuis votre
                  smartphone, tablette ou ordinateur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Transparence</h3>
              <p className="text-carbon-300 text-sm">
                Nous fournissons des informations honnêtes et vérifiées. Aucun intérêt commercial ne guide nos
                explications.
              </p>
            </div>
            <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Accessibilité</h3>
              <p className="text-carbon-300 text-sm">
                L&apos;information doit être accessible à tous, gratuitement et sans barrière technique.
              </p>
            </div>
            <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Pédagogie</h3>
              <p className="text-carbon-300 text-sm">
                Nous vulgarisons les concepts techniques pour les rendre compréhensibles par tous les automobilistes.
              </p>
            </div>
            <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
              <h3 className="text-white font-bold mb-3">Indépendance</h3>
              <p className="text-carbon-300 text-sm">
                Nous ne sommes affiliés à aucun constructeur automobile ni garage. Nos conseils sont objectifs.
              </p>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">👥</span>
            Pour qui ?
          </h2>
          <p className="text-carbon-200 mb-6">OBD-Diagnostic.fr s&apos;adresse à tous les automobilistes :</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-carbon-200">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong className="text-white">Particuliers</strong> souhaitant comprendre leur voyant moteur avant de se
                rendre au garage
              </span>
            </li>
            <li className="flex items-start gap-3 text-carbon-200">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong className="text-white">Bricoleurs</strong> réalisant eux-mêmes le diagnostic et la réparation de
                leur véhicule
              </span>
            </li>
            <li className="flex items-start gap-3 text-carbon-200">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong className="text-white">Étudiants</strong> en mécanique automobile souhaitant approfondir leurs
                connaissances
              </span>
            </li>
            <li className="flex items-start gap-3 text-carbon-200">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong className="text-white">Professionnels</strong> cherchant une référence rapide sur un code OBD2
              </span>
            </li>
          </ul>
        </section>

        {/* Engagement */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">🤝</span>
            Notre engagement
          </h2>
          <p className="text-carbon-200 leading-relaxed mb-4">
            Nous nous engageons à maintenir et enrichir notre base de données pour vous offrir les informations les plus
            complètes et à jour possible. Notre plateforme continuera d&apos;évoluer pour mieux répondre à vos besoins.
          </p>
          <p className="text-carbon-200 leading-relaxed">
            Si vous avez des suggestions, des questions ou souhaitez signaler une erreur, n&apos;hésitez pas à{' '}
            <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400 font-semibold">
              nous contacter
            </Link>
            .
          </p>
        </section>

        {/* Sources */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nos sources
          </h2>
          <p className="text-carbon-200 leading-relaxed mb-4">
            Les informations présentes sur <strong className="text-white">OBD-Diagnostic.fr</strong> sont
            issues de sources fiables et reconnues dans le domaine automobile :
          </p>
          <ul className="space-y-2 text-carbon-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-mechanic-500 mt-1">&#8226;</span>
              <span>Normes internationales <strong className="text-white">ISO 15031-6</strong> et <strong className="text-white">SAE J2012</strong> (définition des codes DTC)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mechanic-500 mt-1">&#8226;</span>
              <span>Documentation technique constructeurs (manuels d&apos;atelier)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mechanic-500 mt-1">&#8226;</span>
              <span>Retours d&apos;expérience de professionnels de la mécanique automobile</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mechanic-500 mt-1">&#8226;</span>
              <span>Bases de données publiques OBD2 et forums spécialisés</span>
            </li>
          </ul>
        </section>

        {/* Ressources utiles */}
        <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Explorez nos ressources
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/codes-obd"
              className="bg-carbon-950 border border-carbon-800 hover:border-mechanic-600/50 rounded-lg p-5 transition-all group"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-mechanic-400 transition-colors">Codes OBD2</h3>
              <p className="text-carbon-400 text-sm">Liste complète des codes P, B, C, U avec leurs significations.</p>
            </Link>
            <Link
              href="/guides"
              className="bg-carbon-950 border border-carbon-800 hover:border-mechanic-600/50 rounded-lg p-5 transition-all group"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-mechanic-400 transition-colors">Guides pratiques</h3>
              <p className="text-carbon-400 text-sm">Tutoriels détaillés pour le diagnostic et la réparation.</p>
            </Link>
            <Link
              href="/contact"
              className="bg-carbon-950 border border-carbon-800 hover:border-mechanic-600/50 rounded-lg p-5 transition-all group"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-mechanic-400 transition-colors">Contact</h3>
              <p className="text-carbon-400 text-sm">Une question ? Contactez notre équipe.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
          >
            Commencer le diagnostic
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
