import { Metadata } from 'next';
import Link from 'next/link';
import obdCodes from '@/data/obd_codes.json';
import { popularCodesList } from '@/data/popular_codes_data';

export const metadata: Metadata = {
  title: 'Codes défauts OBD2 – Liste complète et signification des codes | OBD Diagnostic',
  description:
    "Découvrez la liste complète des codes OBD2 génériques (P0xxx) et leur signification. Explications, structure des codes et accès rapide à chaque fiche détaillée.",
  keywords: [
    'codes OBD2',
    'codes défauts',
    'DTC',
    'diagnostic automobile',
    'codes P0',
    'liste codes OBD',
    'signification codes moteur',
  ],
  alternates: {
    canonical: 'https://obd-diagnostic.fr/codes-obd',
  },
  openGraph: {
    title: 'Codes défauts OBD2 – Liste complète et signification',
    description:
      "Découvrez la liste complète des codes OBD2 génériques et leur signification. Accédez rapidement à chaque fiche détaillée.",
    url: 'https://obd-diagnostic.fr/codes-obd',
    type: 'website',
  },
};

// Filtrer uniquement les codes P (Powertrain)
const pCodes = obdCodes
  .filter((code) => code.code.startsWith('P'))
  .sort((a, b) => a.code.localeCompare(b.code));

// Grouper les codes par plages
interface CodeRange {
  id: string;
  title: string;
  subtitle: string;
  rangeStart: number;
  rangeEnd: number;
  codes: typeof obdCodes;
}

const codeRanges: CodeRange[] = [
  {
    id: 'P0000-P0099',
    title: 'P0000 à P0099',
    subtitle: 'Système de contrôle carburant et air',
    rangeStart: 0,
    rangeEnd: 99,
    codes: [],
  },
  {
    id: 'P0100-P0199',
    title: 'P0100 à P0199',
    subtitle: 'Système d\'injection et débitmètre d\'air',
    rangeStart: 100,
    rangeEnd: 199,
    codes: [],
  },
  {
    id: 'P0200-P0299',
    title: 'P0200 à P0299',
    subtitle: 'Injecteurs et circuit d\'injection',
    rangeStart: 200,
    rangeEnd: 299,
    codes: [],
  },
  {
    id: 'P0300-P0399',
    title: 'P0300 à P0399',
    subtitle: 'Système d\'allumage et ratés de combustion',
    rangeStart: 300,
    rangeEnd: 399,
    codes: [],
  },
  {
    id: 'P0400-P0499',
    title: 'P0400 à P0499',
    subtitle: 'Système de contrôle des émissions et EGR',
    rangeStart: 400,
    rangeEnd: 499,
    codes: [],
  },
  {
    id: 'P0500-P0599',
    title: 'P0500 à P0599',
    subtitle: 'Régulateur de vitesse et capteurs de vitesse',
    rangeStart: 500,
    rangeEnd: 599,
    codes: [],
  },
  {
    id: 'P0600-P0699',
    title: 'P0600 à P0699',
    subtitle: 'Calculateur moteur et communication',
    rangeStart: 600,
    rangeEnd: 699,
    codes: [],
  },
  {
    id: 'P0700-P0999',
    title: 'P0700 à P0999',
    subtitle: 'Transmission et boîte de vitesses',
    rangeStart: 700,
    rangeEnd: 999,
    codes: [],
  },
];

// Remplir les plages avec les codes correspondants
codeRanges.forEach((range) => {
  range.codes = pCodes.filter((code) => {
    const codeNum = parseInt(code.code.substring(1));
    return codeNum >= range.rangeStart && codeNum <= range.rangeEnd;
  });
});

// Codes populaires pour la section
const popularCodesWithDesc = popularCodesList.map((code) => {
  const codeData = obdCodes.find((c) => c.code === code);
  return codeData;
}).filter(Boolean);

export default function CodesOBDPage() {
  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            <li className="text-white font-medium">Codes OBD2</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Liste complète des codes défauts OBD2 moteur
          </h1>
          <p className="text-lg text-carbon-300 leading-relaxed max-w-4xl">
            Découvrez la signification de chaque <strong className="text-white">code défaut moteur (DTC)</strong>{' '}
            générique, commun à toutes les marques automobiles : Peugeot, Renault, Volkswagen, Audi, BMW, etc. Ces
            codes permettent d&apos;identifier les pannes détectées par le système OBD2 de votre véhicule, qu&apos;il
            s&apos;agisse d&apos;un voyant moteur, d&apos;un capteur défectueux ou d&apos;un problème d&apos;injection.
          </p>
        </div>

        {/* 🔹 Comprendre un code OBD */}
        <section className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">📖</span>
            Comment lire un code défaut OBD2
          </h2>
          <p className="text-carbon-300 mb-6">
            Un code OBD2 se compose d&apos;une <strong className="text-white">lettre</strong> et de{' '}
            <strong className="text-white">quatre chiffres</strong>. Voici leur signification :
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-carbon-900 border-b border-carbon-700">
                  <th className="px-6 py-4 text-white font-semibold">Symbole</th>
                  <th className="px-6 py-4 text-white font-semibold">Signification</th>
                  <th className="px-6 py-4 text-white font-semibold">Exemples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-carbon-800">
                  <td className="px-6 py-4 text-mechanic-500 font-bold font-mono text-xl">P</td>
                  <td className="px-6 py-4 text-carbon-200">
                    <strong className="text-white">Powertrain</strong> – Moteur et boîte de vitesses
                  </td>
                  <td className="px-6 py-4 text-carbon-400 text-sm">P0300, P0420, P0171</td>
                </tr>
                <tr className="border-b border-carbon-800">
                  <td className="px-6 py-4 text-warning-500 font-bold font-mono text-xl">C</td>
                  <td className="px-6 py-4 text-carbon-200">
                    <strong className="text-white">Chassis</strong> – Freins, direction, suspension
                  </td>
                  <td className="px-6 py-4 text-carbon-400 text-sm">C0035, C1234</td>
                </tr>
                <tr className="border-b border-carbon-800">
                  <td className="px-6 py-4 text-steel-400 font-bold font-mono text-xl">B</td>
                  <td className="px-6 py-4 text-carbon-200">
                    <strong className="text-white">Body</strong> – Carrosserie et confort
                  </td>
                  <td className="px-6 py-4 text-carbon-400 text-sm">B1200, B0001</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-green-500 font-bold font-mono text-xl">U</td>
                  <td className="px-6 py-4 text-carbon-200">
                    <strong className="text-white">Network</strong> – Réseaux de communication électroniques
                  </td>
                  <td className="px-6 py-4 text-carbon-400 text-sm">U0100, U0155</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span>
              Structure détaillée d&apos;un code
            </h3>
            <p className="text-carbon-300 leading-relaxed mb-4">
              Le <strong className="text-white">premier chiffre</strong> (0 ou 1) indique s&apos;il s&apos;agit
              d&apos;un <strong className="text-white">code générique</strong> (valable pour toutes les marques) ou
              d&apos;un <strong className="text-white">code constructeur</strong> (spécifique à une marque).
            </p>
            <p className="text-carbon-300 leading-relaxed">
              Les <strong className="text-white">trois derniers chiffres</strong> précisent le système concerné :
              injection, allumage, émissions, capteurs, etc.
            </p>
          </div>
        </section>

        {/* 🔹 Navigation rapide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-2xl">🔗</span>
            Navigation rapide par plages
          </h2>
          <div className="flex flex-wrap gap-3">
            {codeRanges.map((range) => (
              <a
                key={range.id}
                href={`#${range.id}`}
                className="inline-flex items-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
              >
                {range.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* 🔹 Codes populaires */}
        <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            Les codes OBD les plus fréquents
          </h2>
          <p className="text-carbon-300 mb-6">
            Voici les codes défauts les plus courants rencontrés sur les véhicules modernes :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {popularCodesWithDesc.map((code) => (
              <Link
                key={code?.code}
                href={`/code/${code?.code}`}
                className="flex items-start gap-4 bg-carbon-950 hover:bg-carbon-900 border border-carbon-800 hover:border-mechanic-600/50 rounded-lg p-5 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mechanic-600/20 flex items-center justify-center">
                  <span className="text-mechanic-500 font-bold font-mono">{code?.code.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold font-mono mb-1 group-hover:text-mechanic-400 transition-colors">
                    {code?.code}
                  </h3>
                  <p className="text-carbon-400 text-sm">{code?.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-carbon-600 group-hover:text-mechanic-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* 🔹 Tableaux par plages */}
        {codeRanges.map((range) => (
          <section key={range.id} id={range.id} className="mb-12 scroll-mt-8">
            <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-2">{range.title}</h2>
              <p className="text-carbon-400 mb-6">{range.subtitle}</p>

              {range.codes.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-carbon-950 border-b-2 border-carbon-700">
                        <th className="px-6 py-4 text-white font-semibold w-32">Code</th>
                        <th className="px-6 py-4 text-white font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {range.codes.slice(0, 50).map((code, index) => (
                        <tr
                          key={code.code}
                          className={`border-b border-carbon-800 hover:bg-carbon-900 transition-colors ${
                            index % 2 === 0 ? 'bg-carbon-950' : 'bg-carbon-900/30'
                          }`}
                        >
                          <td className="px-6 py-3">
                            <Link
                              href={`/code/${code.code}`}
                              className="text-mechanic-500 hover:text-mechanic-400 font-mono font-bold transition-colors"
                            >
                              {code.code}
                            </Link>
                          </td>
                          <td className="px-6 py-3 text-carbon-300">{code.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {range.codes.length > 50 && (
                    <div className="mt-4 text-center">
                      <p className="text-carbon-500 text-sm">
                        Affichage des 50 premiers codes sur {range.codes.length} disponibles dans cette plage
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-carbon-500">Aucun code disponible dans cette plage pour le moment.</p>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* 🔹 FAQ */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">❓</span>
            Questions fréquentes sur les codes OBD2
          </h2>
          <div className="space-y-6">
            <div className="border-b border-carbon-800 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Que signifie un code P0xxx ?</h3>
              <p className="text-carbon-300 leading-relaxed">
                Les codes commençant par <strong className="text-white">&quot;P0&quot;</strong> sont des codes
                génériques relatifs au <strong className="text-white">moteur et à la transmission</strong> (Powertrain).
                Ils sont identiques pour toutes les marques automobiles et permettent d&apos;identifier les problèmes de
                fonctionnement du groupe motopropulseur.
              </p>
            </div>

            <div className="border-b border-carbon-800 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quelle est la différence entre un code générique et un code constructeur ?
              </h3>
              <p className="text-carbon-300 leading-relaxed">
                Un <strong className="text-white">code générique</strong> (premier chiffre = 0) est commun à tous les
                véhicules respectant la norme OBD2. Un <strong className="text-white">code constructeur</strong>{' '}
                (premier chiffre = 1) est spécifique à une marque ou un modèle de véhicule et nécessite souvent une
                documentation spécialisée.
              </p>
            </div>

            <div className="border-b border-carbon-800 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Comment effacer un code OBD ?</h3>
              <p className="text-carbon-300 leading-relaxed">
                Vous pouvez utiliser une <strong className="text-white">valise de diagnostic OBD2</strong> ou un{' '}
                <strong className="text-white">lecteur Bluetooth</strong> pour effacer les codes après réparation.{' '}
                <strong className="text-warning-500">Attention :</strong> si le problème persiste, le code réapparaîtra
                après quelques cycles de conduite. Il est essentiel de réparer la cause avant d&apos;effacer le code.
              </p>
            </div>

            <div className="border-b border-carbon-800 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Puis-je rouler avec un voyant moteur allumé ?
              </h3>
              <p className="text-carbon-300 leading-relaxed">
                Cela dépend du code. Un voyant <strong className="text-white">fixe</strong> indique généralement un
                problème mineur ou modéré (vous pouvez rouler prudemment jusqu&apos;au garage). Un voyant{' '}
                <strong className="text-warning-500">clignotant</strong> indique un problème grave (ratés d&apos;allumage
                sévères) et vous devez vous arrêter rapidement pour éviter d&apos;endommager le catalyseur.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Combien coûte un diagnostic OBD2 en garage ?
              </h3>
              <p className="text-carbon-300 leading-relaxed">
                Un diagnostic complet en garage coûte généralement entre{' '}
                <strong className="text-white">50€ et 100€</strong>. Cependant, vous pouvez réaliser un pré-diagnostic
                vous-même avec un lecteur OBD2 à partir de 20-30€, ce qui vous permet d&apos;identifier le code avant de
                consulter un professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <div className="text-center">
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
