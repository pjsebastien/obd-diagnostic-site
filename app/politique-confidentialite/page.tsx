import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | OBD-Diagnostic.fr',
  description:
    'Politique de confidentialité d\'OBD-Diagnostic.fr - Comment nous collectons, utilisons et protégeons vos données personnelles.',
  alternates: {
    canonical: 'https://obd-diagnostic.fr/politique-confidentialite',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
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
            <li className="text-white font-medium">Politique de confidentialité</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Politique de confidentialité</h1>
          <p className="text-carbon-400 text-sm">Dernière mise à jour : Janvier 2026</p>
          <p className="text-carbon-300 mt-4">
            OBD-Diagnostic.fr s&apos;engage à protéger votre vie privée. Cette politique décrit comment nous collectons,
            utilisons et protégeons vos données personnelles.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Notre engagement</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                <strong className="text-white">OBD-Diagnostic.fr</strong> respecte votre vie privée et s&apos;engage à
                protéger vos données personnelles conformément au{' '}
                <strong className="text-white">Règlement Général sur la Protection des Données (RGPD)</strong> et à la loi
                Informatique et Libertés.
              </p>
              <p>
                Notre site est conçu pour <strong className="text-white">minimiser la collecte de données</strong>. Nous
                ne collectons que les informations strictement nécessaires au fonctionnement du service.
              </p>
            </div>
          </section>

          {/* Responsable */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Responsable du traitement</h2>
            <div className="space-y-3 text-carbon-200">
              <p>
                <strong className="text-white">Responsable :</strong> Sébastien P. - OBD-Diagnostic.fr
              </p>
              <p>
                <strong className="text-white">Contact :</strong>{' '}
                <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400">
                  Formulaire de contact
                </Link>
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Données personnelles collectées</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  Données de navigation (Analytics)
                </h3>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 space-y-2 text-carbon-200">
                  <p>
                    <strong className="text-white">Type de données :</strong> Données techniques anonymisées
                  </p>
                  <p>
                    <strong className="text-white">Exemples :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-carbon-300">
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Type de navigateur et appareil</li>
                    <li>Pays et langue du navigateur</li>
                    <li>Codes OBD recherchés (sans identification)</li>
                  </ul>
                  <p className="mt-3">
                    <strong className="text-white">Finalité :</strong> Améliorer l&apos;expérience utilisateur et le
                    contenu du site
                  </p>
                  <p>
                    <strong className="text-white">Durée de conservation :</strong> 13 mois maximum
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">📧</span>
                  Données de contact (Formulaire)
                </h3>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 space-y-2 text-carbon-200">
                  <p>
                    <strong className="text-white">Type de données :</strong> Informations que vous nous transmettez
                    volontairement
                  </p>
                  <p>
                    <strong className="text-white">Exemples :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-carbon-300">
                    <li>Nom ou pseudonyme</li>
                    <li>Adresse e-mail</li>
                    <li>Message (objet de votre demande)</li>
                  </ul>
                  <p className="mt-3">
                    <strong className="text-white">Finalité :</strong> Répondre à vos questions et demandes
                  </p>
                  <p>
                    <strong className="text-white">Durée de conservation :</strong> 3 ans à compter du dernier contact
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">🍪</span>
                  Cookies
                </h3>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4 space-y-2 text-carbon-200">
                  <p>
                    Notre site utilise des <strong className="text-white">cookies strictement nécessaires</strong> au
                    fonctionnement (stockage de préférences) et éventuellement des cookies d&apos;analyse de
                    l&apos;audience.
                  </p>
                  <p className="mt-3">
                    Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être informé de leur dépôt. La
                    suppression des cookies peut affecter certaines fonctionnalités du site.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Base légale */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Base légale du traitement</h2>
            <div className="space-y-3 text-carbon-200">
              <p>Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-white">Votre consentement</strong> : lorsque vous nous contactez ou acceptez
                  les cookies d&apos;analyse
                </li>
                <li>
                  <strong className="text-white">Notre intérêt légitime</strong> : amélioration du site et analyse de
                  l&apos;audience (données anonymisées)
                </li>
              </ul>
            </div>
          </section>

          {/* Utilisation */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Utilisation des données</h2>
            <div className="space-y-4 text-carbon-200">
              <p>Vos données personnelles sont utilisées exclusivement pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Améliorer le contenu et les fonctionnalités du site</li>
                <li>Analyser l&apos;utilisation du site (statistiques anonymes)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
              <p className="mt-4">
                <strong className="text-warning-500">Nous ne vendons jamais vos données</strong> à des tiers et ne les
                utilisons pas à des fins publicitaires ciblées.
              </p>
            </div>
          </section>

          {/* Destinataires */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Destinataires des données</h2>
            <div className="space-y-4 text-carbon-200">
              <p>Vos données peuvent être transmises à :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-white">Personnel autorisé</strong> : pour traiter vos demandes de contact
                </li>
                <li>
                  <strong className="text-white">Prestataires techniques</strong> : hébergement du site, service
                  d&apos;analyse d&apos;audience (ex: Google Analytics, Plausible, Matomo)
                </li>
                <li>
                  <strong className="text-white">Autorités légales</strong> : sur demande et dans le cadre légal
                </li>
              </ul>
              <p className="mt-4">
                Ces prestataires sont soumis à des obligations contractuelles strictes de confidentialité et de sécurité.
              </p>
            </div>
          </section>

          {/* Vos droits */}
          <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Vos droits</h2>
            <div className="space-y-4 text-carbon-200">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">✅ Droit d&apos;accès</h3>
                  <p className="text-sm text-carbon-300">
                    Obtenir une copie des données personnelles vous concernant
                  </p>
                </div>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">✏️ Droit de rectification</h3>
                  <p className="text-sm text-carbon-300">Corriger des données inexactes ou incomplètes</p>
                </div>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">🗑️ Droit à l&apos;effacement</h3>
                  <p className="text-sm text-carbon-300">Demander la suppression de vos données</p>
                </div>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">⛔ Droit d&apos;opposition</h3>
                  <p className="text-sm text-carbon-300">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">📦 Droit à la portabilité</h3>
                  <p className="text-sm text-carbon-300">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">🛑 Droit de limitation</h3>
                  <p className="text-sm text-carbon-300">Limiter le traitement de vos données</p>
                </div>
              </div>
              <p className="mt-6">
                Pour exercer vos droits, contactez-nous via notre{' '}
                <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400 font-semibold">
                  formulaire de contact
                </Link>
                . Nous vous répondrons dans un délai d&apos;un mois maximum.
              </p>
              <p className="text-sm text-carbon-400 mt-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la{' '}
                <a
                  href="https://www.cnil.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mechanic-500 hover:text-mechanic-400"
                >
                  CNIL
                </a>
                .
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Sécurité des données</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Nous mettons en œuvre des <strong className="text-white">mesures techniques et organisationnelles</strong>{' '}
                appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Protocole HTTPS (chiffrement SSL/TLS)</li>
                <li>Hébergement sécurisé</li>
                <li>Limitation des accès aux données</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </div>
          </section>

          {/* Modifications */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Modifications de la politique</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Cette politique de confidentialité peut être modifiée à tout moment pour refléter les évolutions
                réglementaires ou les changements de nos pratiques. La date de dernière mise à jour est indiquée en haut
                de cette page.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous
                protégeons vos données.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact et questions</h2>
            <p className="text-carbon-200">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous
              via notre{' '}
              <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400 font-semibold">
                formulaire de contact
              </Link>
              .
            </p>
          </section>
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
