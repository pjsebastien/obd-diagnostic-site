import { Metadata } from 'next';
import Link from 'next/link';
import obdCodes from '@/data/obd_codes.json';
import { popularCodesList } from '@/data/popular_codes_data';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Codes défauts OBD2 – Liste complète P, B, C, U et signification',
  description:
    "Liste complète des codes défauts OBD2 : codes moteur (P), carrosserie (B), châssis (C) et réseau (U). Signification, explications et fiches détaillées pour chaque code.",
  keywords: [
    'codes OBD2',
    'codes défauts',
    'DTC',
    'diagnostic automobile',
    'codes P0',
    'codes B',
    'codes C',
    'codes U',
    'liste codes OBD',
    'signification codes moteur',
  ],
  alternates: {
    canonical: 'https://obd-diagnostic.fr/codes-obd',
  },
  openGraph: {
    title: 'Codes défauts OBD2 – Liste complète P, B, C, U et signification',
    description:
      "Liste complète des codes défauts OBD2 : moteur (P), carrosserie (B), châssis (C) et réseau (U). Accédez rapidement à chaque fiche détaillée.",
    url: 'https://obd-diagnostic.fr/codes-obd',
    type: 'website',
  },
};

// ── Groupement de TOUS les codes par type et plages ──

interface CodeRange {
  id: string;
  title: string;
  subtitle: string;
  prefix: string;
  rangeStart: number;
  rangeEnd: number;
  codes: typeof obdCodes;
}

// Codes P (Powertrain)
const pRanges: CodeRange[] = [
  { id: 'P0000-P0099', title: 'P0000 à P0099', subtitle: 'Système de contrôle carburant et air', prefix: 'P', rangeStart: 0, rangeEnd: 99, codes: [] },
  { id: 'P0100-P0199', title: 'P0100 à P0199', subtitle: "Système d'injection et débitmètre d'air", prefix: 'P', rangeStart: 100, rangeEnd: 199, codes: [] },
  { id: 'P0200-P0299', title: 'P0200 à P0299', subtitle: "Injecteurs et circuit d'injection", prefix: 'P', rangeStart: 200, rangeEnd: 299, codes: [] },
  { id: 'P0300-P0399', title: 'P0300 à P0399', subtitle: "Système d'allumage et ratés de combustion", prefix: 'P', rangeStart: 300, rangeEnd: 399, codes: [] },
  { id: 'P0400-P0499', title: 'P0400 à P0499', subtitle: 'Système de contrôle des émissions et EGR', prefix: 'P', rangeStart: 400, rangeEnd: 499, codes: [] },
  { id: 'P0500-P0599', title: 'P0500 à P0599', subtitle: 'Régulateur de vitesse et capteurs de vitesse', prefix: 'P', rangeStart: 500, rangeEnd: 599, codes: [] },
  { id: 'P0600-P0699', title: 'P0600 à P0699', subtitle: 'Calculateur moteur et communication', prefix: 'P', rangeStart: 600, rangeEnd: 699, codes: [] },
  { id: 'P0700-P0999', title: 'P0700 à P0999', subtitle: 'Transmission et boîte de vitesses', prefix: 'P', rangeStart: 700, rangeEnd: 999, codes: [] },
];

// Codes B (Body / Carrosserie)
const bRanges: CodeRange[] = [
  { id: 'B0000-B0999', title: 'B0000 à B0999', subtitle: 'Carrosserie – Codes génériques SAE', prefix: 'B', rangeStart: 0, rangeEnd: 999, codes: [] },
  { id: 'B1000-B1499', title: 'B1000 à B1499', subtitle: 'Carrosserie – Codes constructeur (série 1)', prefix: 'B', rangeStart: 1000, rangeEnd: 1499, codes: [] },
  { id: 'B1500-B1999', title: 'B1500 à B1999', subtitle: 'Carrosserie – Codes constructeur (série 2)', prefix: 'B', rangeStart: 1500, rangeEnd: 1999, codes: [] },
  { id: 'B2000-B2999', title: 'B2000 à B2999', subtitle: 'Carrosserie – Codes génériques SAE (série 2)', prefix: 'B', rangeStart: 2000, rangeEnd: 2999, codes: [] },
  { id: 'B3000-B3999', title: 'B3000 à B3999', subtitle: 'Carrosserie – Codes réservés', prefix: 'B', rangeStart: 3000, rangeEnd: 3999, codes: [] },
];

// Codes C (Chassis)
const cRanges: CodeRange[] = [
  { id: 'C0000-C0999', title: 'C0000 à C0999', subtitle: 'Châssis – Codes génériques SAE', prefix: 'C', rangeStart: 0, rangeEnd: 999, codes: [] },
  { id: 'C1000-C1999', title: 'C1000 à C1999', subtitle: 'Châssis – Codes constructeur', prefix: 'C', rangeStart: 1000, rangeEnd: 1999, codes: [] },
  { id: 'C2000-C2999', title: 'C2000 à C2999', subtitle: 'Châssis – Codes génériques SAE (série 2)', prefix: 'C', rangeStart: 2000, rangeEnd: 2999, codes: [] },
  { id: 'C3000-C3999', title: 'C3000 à C3999', subtitle: 'Châssis – Codes réservés', prefix: 'C', rangeStart: 3000, rangeEnd: 3999, codes: [] },
];

// Codes U (Network / Réseau)
const uRanges: CodeRange[] = [
  { id: 'U0000-U0999', title: 'U0000 à U0999', subtitle: 'Réseau – Codes génériques SAE', prefix: 'U', rangeStart: 0, rangeEnd: 999, codes: [] },
  { id: 'U1000-U1999', title: 'U1000 à U1999', subtitle: 'Réseau – Codes constructeur', prefix: 'U', rangeStart: 1000, rangeEnd: 1999, codes: [] },
  { id: 'U2000-U2999', title: 'U2000 à U2999', subtitle: 'Réseau – Codes génériques SAE (série 2)', prefix: 'U', rangeStart: 2000, rangeEnd: 2999, codes: [] },
  { id: 'U3000-U3999', title: 'U3000 à U3999', subtitle: 'Réseau – Codes réservés', prefix: 'U', rangeStart: 3000, rangeEnd: 3999, codes: [] },
];

const allRanges = [...pRanges, ...bRanges, ...cRanges, ...uRanges];

// Remplir les plages avec les codes correspondants
allRanges.forEach((range) => {
  range.codes = obdCodes
    .filter((code) => {
      if (!code.code.startsWith(range.prefix)) return false;
      const codeNum = parseInt(code.code.substring(1));
      return codeNum >= range.rangeStart && codeNum <= range.rangeEnd;
    })
    .sort((a, b) => a.code.localeCompare(b.code));
});

// Ne garder que les plages non-vides
const pRangesFilled = pRanges.filter((r) => r.codes.length > 0);
const bRangesFilled = bRanges.filter((r) => r.codes.length > 0);
const cRangesFilled = cRanges.filter((r) => r.codes.length > 0);
const uRangesFilled = uRanges.filter((r) => r.codes.length > 0);

// Compteurs par type
const totalP = pRanges.reduce((acc, r) => acc + r.codes.length, 0);
const totalB = bRanges.reduce((acc, r) => acc + r.codes.length, 0);
const totalC = cRanges.reduce((acc, r) => acc + r.codes.length, 0);
const totalU = uRanges.reduce((acc, r) => acc + r.codes.length, 0);

// Codes populaires
const popularCodesWithDesc = popularCodesList.map((code) => {
  const codeData = obdCodes.find((c) => c.code === code);
  return codeData;
}).filter(Boolean);

// FAQ data pour le schema
const faqItems = [
  {
    question: 'Que signifie un code P0xxx ?',
    answer: 'Les codes commençant par "P0" sont des codes génériques relatifs au moteur et à la transmission (Powertrain). Ils sont identiques pour toutes les marques automobiles et permettent d\'identifier les problèmes de fonctionnement du groupe motopropulseur.',
  },
  {
    question: 'Quelle est la différence entre un code générique et un code constructeur ?',
    answer: 'Un code générique (premier chiffre = 0) est commun à tous les véhicules respectant la norme OBD2. Un code constructeur (premier chiffre = 1) est spécifique à une marque ou un modèle de véhicule et nécessite souvent une documentation spécialisée.',
  },
  {
    question: 'Comment effacer un code OBD ?',
    answer: 'Vous pouvez utiliser une valise de diagnostic OBD2 ou un lecteur Bluetooth pour effacer les codes après réparation. Attention : si le problème persiste, le code réapparaîtra après quelques cycles de conduite. Il est essentiel de réparer la cause avant d\'effacer le code.',
  },
  {
    question: 'Puis-je rouler avec un voyant moteur allumé ?',
    answer: 'Cela dépend du code. Un voyant fixe indique généralement un problème mineur ou modéré (vous pouvez rouler prudemment jusqu\'au garage). Un voyant clignotant indique un problème grave (ratés d\'allumage sévères) et vous devez vous arrêter rapidement pour éviter d\'endommager le catalyseur.',
  },
  {
    question: 'Combien coûte un diagnostic OBD2 en garage ?',
    answer: 'Un diagnostic complet en garage coûte généralement entre 50€ et 100€. Cependant, vous pouvez réaliser un pré-diagnostic vous-même avec un lecteur OBD2 à partir de 20-30€, ce qui vous permet d\'identifier le code avant de consulter un professionnel.',
  },
];

function CodeRangeTable({ range }: { range: CodeRange }) {
  return (
    <section key={range.id} id={range.id} className="mb-12 scroll-mt-8">
      <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{range.title}</h3>
        <p className="text-carbon-400 mb-4">{range.subtitle} — <span className="text-carbon-300 font-medium">{range.codes.length} codes</span></p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-carbon-950 border-b-2 border-carbon-700">
                <th className="px-6 py-4 text-white font-semibold w-32">Code</th>
                <th className="px-6 py-4 text-white font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {range.codes.map((code, index) => (
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
        </div>
      </div>
    </section>
  );
}

export default function CodesOBDPage() {
  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://obd-diagnostic.fr/' },
    { name: 'Codes OBD2', url: 'https://obd-diagnostic.fr/codes-obd' },
  ];

  return (
    <div className="min-h-screen bg-carbon-950 py-12">
      {/* Données structurées */}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(faqItems)} />

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
            Liste complète des codes défauts OBD2
          </h1>
          <p className="text-lg text-carbon-300 leading-relaxed max-w-4xl">
            Découvrez la signification de chaque <strong className="text-white">code défaut OBD2 (DTC)</strong> :
            codes moteur (P), carrosserie (B), châssis (C) et réseau (U). Ces
            codes permettent d&apos;identifier les pannes détectées par le système OBD2 de votre véhicule, qu&apos;il
            s&apos;agisse d&apos;un voyant moteur, d&apos;un capteur défectueux ou d&apos;un problème d&apos;injection.
          </p>

          {/* Compteurs par type */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-carbon-900 border border-carbon-800 rounded-lg p-4 text-center">
              <span className="text-mechanic-500 font-mono font-bold text-2xl">P</span>
              <p className="text-carbon-400 text-sm mt-1">Moteur</p>
              <p className="text-white font-bold text-lg">{totalP} codes</p>
            </div>
            <div className="bg-carbon-900 border border-carbon-800 rounded-lg p-4 text-center">
              <span className="text-steel-400 font-mono font-bold text-2xl">B</span>
              <p className="text-carbon-400 text-sm mt-1">Carrosserie</p>
              <p className="text-white font-bold text-lg">{totalB} codes</p>
            </div>
            <div className="bg-carbon-900 border border-carbon-800 rounded-lg p-4 text-center">
              <span className="text-warning-500 font-mono font-bold text-2xl">C</span>
              <p className="text-carbon-400 text-sm mt-1">Châssis</p>
              <p className="text-white font-bold text-lg">{totalC} codes</p>
            </div>
            <div className="bg-carbon-900 border border-carbon-800 rounded-lg p-4 text-center">
              <span className="text-green-500 font-mono font-bold text-2xl">U</span>
              <p className="text-carbon-400 text-sm mt-1">Réseau</p>
              <p className="text-white font-bold text-lg">{totalU} codes</p>
            </div>
          </div>
        </div>

        {/* Comprendre un code OBD */}
        <section className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
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
            <h3 className="text-white font-semibold mb-3">
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

        {/* Navigation rapide par type */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Navigation rapide par type de code
          </h2>
          <div className="space-y-4">
            {/* P codes */}
            {pRangesFilled.length > 0 && (
              <div>
                <h3 className="text-mechanic-500 font-bold font-mono mb-2">Codes P — Moteur</h3>
                <div className="flex flex-wrap gap-2">
                  {pRangesFilled.map((range) => (
                    <a
                      key={range.id}
                      href={`#${range.id}`}
                      className="inline-flex items-center gap-1 bg-mechanic-600 hover:bg-mechanic-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
                    >
                      {range.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {/* B codes */}
            {bRangesFilled.length > 0 && (
              <div>
                <h3 className="text-steel-400 font-bold font-mono mb-2">Codes B — Carrosserie</h3>
                <div className="flex flex-wrap gap-2">
                  {bRangesFilled.map((range) => (
                    <a
                      key={range.id}
                      href={`#${range.id}`}
                      className="inline-flex items-center gap-1 bg-steel-600 hover:bg-steel-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      {range.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {/* C codes */}
            {cRangesFilled.length > 0 && (
              <div>
                <h3 className="text-warning-500 font-bold font-mono mb-2">Codes C — Châssis</h3>
                <div className="flex flex-wrap gap-2">
                  {cRangesFilled.map((range) => (
                    <a
                      key={range.id}
                      href={`#${range.id}`}
                      className="inline-flex items-center gap-1 bg-warning-600 hover:bg-warning-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      {range.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {/* U codes */}
            {uRangesFilled.length > 0 && (
              <div>
                <h3 className="text-green-500 font-bold font-mono mb-2">Codes U — Réseau</h3>
                <div className="flex flex-wrap gap-2">
                  {uRangesFilled.map((range) => (
                    <a
                      key={range.id}
                      href={`#${range.id}`}
                      className="inline-flex items-center gap-1 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      {range.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Codes populaires */}
        <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
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

        {/* ══ CODES P — Moteur ══ */}
        {pRangesFilled.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-mechanic-600/50 pb-4">
              <span className="text-mechanic-500 font-mono">P</span>
              Codes Powertrain — Moteur et transmission
            </h2>
            {pRangesFilled.map((range) => (
              <CodeRangeTable key={range.id} range={range} />
            ))}
          </div>
        )}

        {/* ══ CODES B — Carrosserie ══ */}
        {bRangesFilled.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-steel-600/50 pb-4">
              <span className="text-steel-400 font-mono">B</span>
              Codes Body — Carrosserie et confort
            </h2>
            {bRangesFilled.map((range) => (
              <CodeRangeTable key={range.id} range={range} />
            ))}
          </div>
        )}

        {/* ══ CODES C — Châssis ══ */}
        {cRangesFilled.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-warning-600/50 pb-4">
              <span className="text-warning-500 font-mono">C</span>
              Codes Chassis — Freins, direction et suspension
            </h2>
            {cRangesFilled.map((range) => (
              <CodeRangeTable key={range.id} range={range} />
            ))}
          </div>
        )}

        {/* ══ CODES U — Réseau ══ */}
        {uRangesFilled.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-green-600/50 pb-4">
              <span className="text-green-500 font-mono">U</span>
              Codes Network — Communication et réseau
            </h2>
            {uRangesFilled.map((range) => (
              <CodeRangeTable key={range.id} range={range} />
            ))}
          </div>
        )}

        {/* FAQ */}
        <section className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions fréquentes sur les codes OBD2
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className={index < faqItems.length - 1 ? 'border-b border-carbon-800 pb-6' : ''}>
                <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-carbon-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
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
