import TrustSection from '@/components/TrustSection';
import OBDSearchBox from '@/components/OBDSearchBox';
import obdCodes from '@/data/obd_codes.json';

// Icônes pour la section "Pourquoi nous choisir"
const benefits = [
  {
    title: 'Gain de temps',
    description:
      'Identifiez rapidement la signification de vos codes erreurs sans attendre un rendez-vous chez le garagiste.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Économies',
    description:
      'Évitez les diagnostics payants inutiles et comprenez le problème avant de vous rendre en atelier.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Compréhension claire',
    description:
      'Des explications simples et accessibles, même pour les non-initiés à la mécanique automobile.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

// Étapes du diagnostic OBD
const steps = [
  {
    step: '01',
    title: 'Branchez votre lecteur OBD',
    description: 'Connectez votre valise OBD2 ou lecteur Bluetooth au port diagnostic de votre véhicule.',
  },
  {
    step: '02',
    title: 'Relevez le code erreur',
    description: 'Notez le code affiché par votre appareil (ex: P0300, P0420, C1234...).',
  },
  {
    step: '03',
    title: 'Recherchez sur notre site',
    description: 'Entrez le code dans notre moteur de recherche pour obtenir sa signification complète.',
  },
  {
    step: '04',
    title: 'Comprenez et agissez',
    description: 'Découvrez les causes possibles, la gravité du problème et les solutions recommandées.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Motif de fond décoratif */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-steel-900/50 border border-steel-700/50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-steel-300 text-sm font-medium">Base de données de {obdCodes.length}+ codes OBD2</span>
              </div>

              {/* H1 SEO */}
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                OBD Diagnostic
                <br />
                <span className="text-gradient">Comprenez et analysez</span>
                <br />
                les codes erreurs de votre voiture
              </h1>

              {/* Sous-titre */}
              <p className="text-lg sm:text-xl text-carbon-300 mb-8 max-w-xl">
                Découvrez la signification de chaque code OBD, identifiez la cause d&apos;une panne et trouvez les
                solutions adaptées. Diagnostic automobile simplifié pour tous.
              </p>

              {/* Outil de recherche OBD */}
              <div className="mb-8">
                <OBDSearchBox />
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#comprendre-obd"
                  className="inline-flex items-center justify-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700"
                >
                  En savoir plus
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-10 border-t border-carbon-800">
                <div>
                  <p className="text-3xl font-bold text-white">5000+</p>
                  <p className="text-carbon-400 text-sm">Codes OBD référencés</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-carbon-400 text-sm">Gratuit et indépendant</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-carbon-400 text-sm">Accessible en ligne</p>
                </div>
              </div>
            </div>

            {/* Illustration visuelle */}
            <div className="hidden lg:flex justify-center animate-slide-up">
              <div className="relative">
                {/* Cercle décoratif */}
                <div className="absolute -inset-4 bg-gradient-to-br from-steel-600/20 to-mechanic-600/20 rounded-full blur-3xl" />

                {/* Icône principale - Tableau de bord */}
                <div className="relative bg-carbon-900/80 border border-carbon-700 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Indicateurs simulés */}
                    <div className="bg-carbon-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <p className="text-xs text-carbon-400">Moteur</p>
                    </div>
                    <div className="bg-carbon-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-warning-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-warning-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                        </svg>
                      </div>
                      <p className="text-xs text-carbon-400">Alerte</p>
                    </div>
                    <div className="bg-carbon-800 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-steel-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-carbon-400">Données</p>
                    </div>
                  </div>

                  {/* Code erreur simulé */}
                  <div className="bg-carbon-950 rounded-lg p-4 border border-carbon-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-mechanic-500 rounded-full animate-pulse" />
                      <span className="text-carbon-400 text-sm">Code détecté</span>
                    </div>
                    <p className="text-2xl font-mono font-bold text-white">P0300</p>
                    <p className="text-sm text-carbon-400 mt-1">Ratés d&apos;allumage aléatoires détectés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-carbon-950" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z" />
          </svg>
        </div>
      </section>

      {/* Section explicative SEO */}
      <section id="comprendre-obd" className="py-16 sm:py-24 bg-carbon-950" aria-labelledby="obd-explanation-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div>
              <h2 id="obd-explanation-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Qu&apos;est-ce qu&apos;un <span className="text-mechanic-500">diagnostic OBD</span> ?
              </h2>

              <div className="space-y-4 text-carbon-300">
                <p>
                  Le <strong className="text-white">diagnostic OBD</strong> (On-Board Diagnostics) est un système
                  électronique standardisé présent dans tous les véhicules depuis 1996 en Europe. Il permet de
                  surveiller en temps réel le fonctionnement du moteur et des systèmes antipollution.
                </p>

                <p>
                  Lorsqu&apos;un <strong className="text-white">voyant moteur</strong> s&apos;allume sur votre tableau de bord,
                  le calculateur de votre voiture enregistre un <strong className="text-white">code erreur OBD2</strong>{' '}
                  (aussi appelé code défaut ou DTC). Ce code alphanumérique identifie précisément la nature du problème
                  détecté.
                </p>

                <p>
                  Grâce à un <strong className="text-white">lecteur OBD</strong> (valise de diagnostic, interface
                  Bluetooth ou WiFi), vous pouvez lire ces codes et comprendre ce qui ne va pas avec votre véhicule,
                  qu&apos;il soit <strong className="text-white">essence, diesel ou hybride</strong>.
                </p>
              </div>

              {/* Liste des types de codes */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-carbon-900/50 border border-carbon-800 rounded-lg p-4">
                  <span className="text-mechanic-500 font-mono font-bold text-lg">P0XXX</span>
                  <p className="text-carbon-400 text-sm mt-1">Codes groupe motopropulseur</p>
                </div>
                <div className="bg-carbon-900/50 border border-carbon-800 rounded-lg p-4">
                  <span className="text-steel-400 font-mono font-bold text-lg">B0XXX</span>
                  <p className="text-carbon-400 text-sm mt-1">Codes carrosserie</p>
                </div>
                <div className="bg-carbon-900/50 border border-carbon-800 rounded-lg p-4">
                  <span className="text-warning-500 font-mono font-bold text-lg">C0XXX</span>
                  <p className="text-carbon-400 text-sm mt-1">Codes châssis</p>
                </div>
                <div className="bg-carbon-900/50 border border-carbon-800 rounded-lg p-4">
                  <span className="text-green-500 font-mono font-bold text-lg">U0XXX</span>
                  <p className="text-carbon-400 text-sm mt-1">Codes réseau</p>
                </div>
              </div>
            </div>

            {/* Illustration des étapes */}
            <div className="bg-carbon-900/30 border border-carbon-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Comment utiliser notre outil ?</h3>

              <ol className="space-y-6">
                {steps.map((item, index) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-steel-600 to-steel-800 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div className={index < steps.length - 1 ? 'pb-6 border-l-2 border-carbon-700 -ml-6 pl-10' : ''}>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-carbon-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section E-E-A-T */}
      <TrustSection />

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 sm:py-24 bg-carbon-950" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pourquoi utiliser <span className="text-mechanic-500">OBD-Diagnostic.fr</span> ?
            </h2>
            <p className="text-carbon-400 max-w-2xl mx-auto text-lg">
              Notre plateforme vous accompagne dans la compréhension de votre véhicule, sans jargon technique
              incompréhensible.
            </p>
          </div>

          {/* Grille des avantages */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group text-center bg-gradient-to-b from-carbon-900/50 to-carbon-950 border border-carbon-800 rounded-2xl p-8 hover:border-mechanic-600/50 transition-all duration-300"
              >
                {/* Icône */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-steel-700/30 to-steel-900/30 flex items-center justify-center mb-6 text-steel-400 group-hover:text-mechanic-400 transition-colors duration-300">
                  {benefit.icon}
                </div>

                {/* Contenu */}
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-carbon-400">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-16 sm:py-24 hero-gradient" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à comprendre votre <span className="text-mechanic-500">voyant moteur</span> ?
          </h2>
          <p className="text-carbon-300 text-lg mb-8 max-w-2xl mx-auto">
            Notre base de données contient plus de 5000 codes OBD2 avec leurs significations, causes possibles et
            solutions recommandées. Commencez votre diagnostic dès maintenant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#hero-heading"
              className="inline-flex items-center justify-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
              aria-label="Rechercher un code OBD"
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
            </a>
          </div>

          {/* Badges de confiance */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-carbon-400">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">100% Gratuit</span>
            </div>
            <div className="flex items-center gap-2 text-carbon-400">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Sans inscription</span>
            </div>
            <div className="flex items-center gap-2 text-carbon-400">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Données vérifiées</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
