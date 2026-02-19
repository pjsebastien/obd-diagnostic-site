import { Metadata } from 'next';
import Link from 'next/link';
import obdCodes from '@/data/obd_codes.json';
import { getPopularCodeData, popularCodesList } from '@/data/popular_codes_data';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

interface OBDCode {
  code: string;
  description: string;
  descriptionEn: string;
  explication: string;
  popular: boolean;
}

interface PageProps {
  params: {
    code: string;
  };
}

// Générer les paramètres statiques uniquement pour les codes populaires
export async function generateStaticParams() {
  return popularCodesList.map((code) => ({
    code: code,
  }));
}

// Fonction pour récupérer le code OBD
function getOBDCode(code: string): OBDCode | undefined {
  return obdCodes.find(
    (item) => item.code.toUpperCase() === code.toUpperCase()
  ) as OBDCode | undefined;
}

// Génération des métadonnées SEO dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const obdCode = getOBDCode(params.code);

  if (!obdCode) {
    return {
      title: 'Code non reconnu | OBD-Diagnostic.fr',
      description: 'Le code OBD recherché n\'existe pas dans notre base de données.',
    };
  }

  const popularData = getPopularCodeData(params.code);
  const seoTitle = popularData
    ? `Code erreur ${obdCode.code} : causes, solutions et coût de réparation`
    : `Code erreur ${obdCode.code} : signification et diagnostic OBD2`;

  // Meta description optimisee : redigee pour le clic, pas le contenu brut du JSON
  const description = popularData
    ? `Code ${obdCode.code} : ${popularData.symptoms.slice(0, 2).join(', ')}. Découvrez les causes, solutions et coût de réparation estimé.`
    : `Code erreur ${obdCode.code} - ${obdCode.explication.slice(0, 120)}. Signification, causes possibles et solutions OBD2.`;

  return {
    title: seoTitle,
    description,
    keywords: [
      `code erreur ${obdCode.code}`,
      obdCode.code,
      'diagnostic OBD',
      'voyant moteur',
      'code défaut',
      'réparation auto',
    ],
    alternates: {
      canonical: `https://obd-diagnostic.fr/code/${obdCode.code}`,
    },
    openGraph: {
      title: seoTitle,
      description,
      url: `https://obd-diagnostic.fr/code/${obdCode.code}`,
      type: 'article',
      siteName: 'OBD-Diagnostic.fr',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
    },
  };
}

export default function CodePage({ params }: PageProps) {
  const obdCode = getOBDCode(params.code);
  const popularData = getPopularCodeData(params.code);

  // Si le code n'existe pas
  if (!obdCode) {
    return (
      <div className="min-h-screen bg-carbon-950 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-warning-500/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-warning-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Code non reconnu</h1>
            <p className="text-carbon-400 text-lg mb-8">
              Le code <span className="font-mono font-bold text-white">{params.code.toUpperCase()}</span> n&apos;existe pas dans notre base de données.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
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

  // Déterminer le type de code et sa couleur
  const codeType = obdCode.code.charAt(0).toUpperCase();
  const codeTypeInfo: { [key: string]: { label: string; color: string; bgColor: string } } = {
    P: { label: 'Groupe motopropulseur', color: 'text-mechanic-500', bgColor: 'bg-mechanic-500/20' },
    B: { label: 'Carrosserie', color: 'text-steel-400', bgColor: 'bg-steel-500/20' },
    C: { label: 'Châssis', color: 'text-warning-500', bgColor: 'bg-warning-500/20' },
    U: { label: 'Réseau', color: 'text-green-500', bgColor: 'bg-green-500/20' },
  };
  const typeInfo = codeTypeInfo[codeType] || { label: 'Inconnu', color: 'text-carbon-400', bgColor: 'bg-carbon-700/20' };

  // Couleurs de gravité
  const severityColors = {
    success: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-500' },
    warning: { bg: 'bg-warning-500/10', border: 'border-warning-500/30', text: 'text-warning-500' },
    danger: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-500' },
  };

  // Si c'est une page populaire avec données enrichies
  if (popularData) {
    const severityColor = severityColors[popularData.severity.color as keyof typeof severityColors];

    const breadcrumbItems = [
      { name: 'Accueil', url: 'https://obd-diagnostic.fr' },
      { name: 'Codes OBD', url: 'https://obd-diagnostic.fr/codes-obd' },
      { name: `Code ${obdCode.code}`, url: `https://obd-diagnostic.fr/code/${obdCode.code}` },
    ];

    return (
      <div className="min-h-screen bg-carbon-950 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Donnees structurees : Breadcrumb + FAQ */}
          <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
          <JsonLd data={faqSchema(popularData.faq)} />

          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-carbon-400">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
              <li><Link href="/codes-obd" className="hover:text-white transition-colors">Codes OBD</Link></li>
              <li><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
              <li className="text-white font-medium">Code {obdCode.code}</li>
            </ol>
          </nav>

          {/* En-tête */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-2 ${typeInfo.bgColor} border border-current/30 rounded-full px-4 py-2 text-sm font-medium ${typeInfo.color}`}>
                <span className="w-2 h-2 bg-current rounded-full" />
                {typeInfo.label}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Code erreur {obdCode.code} : causes, solutions et coût de réparation
            </h1>
          </div>

          {/* 🔹 Introduction */}
          <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-8 shadow-xl">
            <p className="text-lg text-carbon-200 leading-relaxed">{popularData.introduction}</p>
          </div>

          {/* 🔹 Bloc résumé visuel */}
          <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📋</span>
              Résumé du code {obdCode.code}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                <div className="text-carbon-400 text-sm mb-1">Code</div>
                <div className="text-white font-mono font-bold text-xl">{obdCode.code}</div>
              </div>
              <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                <div className="text-carbon-400 text-sm mb-1">Gravité</div>
                <div className={`${severityColor.text} font-bold text-lg flex items-center gap-2`}>
                  <span className="text-2xl">{popularData.severity.icon}</span>
                  {popularData.severity.label}
                </div>
              </div>
              <div className="md:col-span-2 bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                <div className="text-carbon-400 text-sm mb-2">Symptômes fréquents</div>
                <div className="text-carbon-200">{popularData.symptoms.slice(0, 3).join(' • ')}</div>
              </div>
            </div>
          </div>

          {/* 🔹 Qu'est-ce que le code ? */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Qu&apos;est-ce que le code {obdCode.code} ?
            </h2>
            <p className="text-carbon-200 leading-relaxed mb-4">{obdCode.description}</p>
            <p className="text-carbon-300 leading-relaxed">{obdCode.explication}</p>
          </div>

          {/* 🔹 Gravité et risques */}
          <div className={`${severityColor.bg} border ${severityColor.border} rounded-xl p-8 mb-8`}>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">{popularData.severity.icon}</span>
              Gravité et risques
            </h2>
            <div className={`inline-flex items-center gap-3 ${severityColor.bg} border ${severityColor.border} rounded-full px-6 py-3 mb-4`}>
              <span className="text-2xl">{popularData.severity.icon}</span>
              <span className={`${severityColor.text} font-bold text-xl`}>Niveau de gravité : {popularData.severity.label}</span>
            </div>
            <p className="text-carbon-200 leading-relaxed">{popularData.riskExplanation}</p>
          </div>

          {/* 🔹 Symptômes */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🚗</span>
              Symptômes associés
            </h2>
            <ul className="space-y-3">
              {popularData.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-3 text-carbon-200">
                  <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Causes les plus fréquentes */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔍</span>
              Causes les plus fréquentes
            </h2>
            <ul className="space-y-3">
              {popularData.causes.map((cause, index) => (
                <li key={index} className="flex items-start gap-3 text-carbon-200">
                  <svg className="w-6 h-6 text-warning-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Solutions recommandées */}
          <div className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🔧</span>
              Solutions recommandées
            </h2>
            <ul className="space-y-3 mb-6">
              {popularData.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-carbon-200">
                  <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
            <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
              <p className="text-carbon-400 text-sm">
                <strong className="text-white">💡 Conseil :</strong> Si le voyant moteur revient après effacement du code, il est conseillé de consulter un professionnel pour un diagnostic complet et éviter des réparations inutiles.
              </p>
            </div>
          </div>

          {/* 🔹 Coût de réparation */}
          {popularData.repairCosts && (
            <div className="bg-gradient-to-br from-carbon-900 via-carbon-950 to-carbon-900 border border-mechanic-800/30 rounded-2xl p-8 mb-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Coût de réparation du code {obdCode.code}
              </h2>
              <p className="text-carbon-400 mb-8">Estimation basée sur les tarifs moyens constatés en France (pièces + main d&apos;œuvre)</p>

              {/* Grande barre visuelle de coût */}
              <div className="relative bg-carbon-950 border border-carbon-800 rounded-2xl p-6 mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
                  <div>
                    <div className="text-carbon-500 text-xs uppercase tracking-wider mb-1">Fourchette estimée</div>
                    <div className="text-white font-bold text-4xl sm:text-5xl tracking-tight">
                      {popularData.repairCosts.minimum}€ <span className="text-carbon-600 text-2xl">–</span> {popularData.repairCosts.maximum}€
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-carbon-500 text-xs uppercase tracking-wider mb-1">Coût moyen constaté</div>
                    <div className="text-mechanic-400 font-bold text-3xl sm:text-4xl">~{popularData.repairCosts.average}€</div>
                  </div>
                </div>
                {/* Barre gradient avec marqueur */}
                <div className="relative mt-2 mb-1">
                  <div className="h-3 bg-gradient-to-r from-green-500 via-yellow-500 via-60% to-red-500 rounded-full opacity-80" />
                  <div
                    className="absolute top-[-6px] w-5 h-5 bg-white rounded-full border-2 border-mechanic-500 shadow-lg shadow-mechanic-500/50 transition-all"
                    style={{ left: `${Math.min(95, Math.max(5, ((popularData.repairCosts.average - popularData.repairCosts.minimum) / (popularData.repairCosts.maximum - popularData.repairCosts.minimum)) * 100))}%`, transform: 'translateX(-50%)' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-carbon-600 mt-2">
                  <span>Économique</span>
                  <span>Moyen</span>
                  <span>Élevé</span>
                </div>
              </div>

              {/* Trois cartes Min / Moyen / Max */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="relative overflow-hidden bg-green-500/5 border border-green-500/20 rounded-xl p-5 text-center group hover:border-green-500/40 transition-all">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400" />
                  <div className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">Scénario optimiste</div>
                  <div className="text-white font-bold text-3xl mb-1">{popularData.repairCosts.minimum}€</div>
                  <div className="text-carbon-500 text-xs">Réparation simple ou DIY</div>
                </div>
                <div className="relative overflow-hidden bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-5 text-center group hover:border-yellow-500/40 transition-all">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400" />
                  <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-2">Coût moyen</div>
                  <div className="text-white font-bold text-3xl mb-1">{popularData.repairCosts.average}€</div>
                  <div className="text-carbon-500 text-xs">Cas le plus fréquent en garage</div>
                </div>
                <div className="relative overflow-hidden bg-red-500/5 border border-red-500/20 rounded-xl p-5 text-center group hover:border-red-500/40 transition-all">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
                  <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">Scénario coûteux</div>
                  <div className="text-white font-bold text-3xl mb-1">{popularData.repairCosts.maximum}€</div>
                  <div className="text-carbon-500 text-xs">Remplacement complet + garage</div>
                </div>
              </div>

              {/* Détail pièces + main d'œuvre */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Pièces détachées */}
                <div className="bg-carbon-950 border border-carbon-800 rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Pièces détachées
                  </h3>
                  <div className="space-y-3">
                    {popularData.repairCosts.parts.map((part, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-carbon-800/50 last:border-0">
                        <span className="text-carbon-300 text-sm">{part.name}</span>
                        <span className="text-white font-semibold text-sm whitespace-nowrap ml-3">{part.priceMin}€ – {part.priceMax}€</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main d'œuvre */}
                <div className="bg-carbon-950 border border-carbon-800 rounded-xl p-6">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-mechanic-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Main d&apos;œuvre
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-carbon-800/50">
                      <span className="text-carbon-300 text-sm">Temps estimé</span>
                      <span className="text-white font-semibold text-sm">{popularData.repairCosts.laborTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-carbon-800/50">
                      <span className="text-carbon-300 text-sm">Taux horaire moyen</span>
                      <span className="text-white font-semibold text-sm">{popularData.repairCosts.laborRate}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-carbon-900 rounded-lg">
                    <p className="text-carbon-400 text-xs leading-relaxed">
                      Les tarifs varient selon la région, le type de garage (concessionnaire, indépendant, centre auto) et la complexité du véhicule.
                    </p>
                  </div>
                </div>
              </div>

              {/* DIY vs Professionnel */}
              <div className="bg-carbon-950 border border-carbon-800 rounded-xl p-6 mb-8">
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  Faire soi-même (DIY) vs Professionnel
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* DIY */}
                  <div className={`rounded-xl p-5 border ${popularData.repairCosts.diy.possible ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{popularData.repairCosts.diy.possible ? '✅' : '❌'}</span>
                      <span className="text-white font-semibold">Réparation DIY</span>
                    </div>
                    {popularData.repairCosts.diy.possible ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-carbon-400 text-sm">Difficulté</span>
                          <span className="text-white text-sm font-medium">{popularData.repairCosts.diy.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-carbon-400 text-sm">Économie estimée</span>
                          <span className="text-green-400 text-sm font-bold">{popularData.repairCosts.diy.savings}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-carbon-400 text-sm">Temps nécessaire</span>
                          <span className="text-white text-sm font-medium">{popularData.repairCosts.diy.timeNeeded}</span>
                        </div>
                        <div className="pt-3 border-t border-carbon-800/50">
                          <div className="text-carbon-400 text-xs mb-2">Outils nécessaires :</div>
                          <div className="flex flex-wrap gap-1.5">
                            {popularData.repairCosts.diy.tools.map((tool, i) => (
                              <span key={i} className="inline-flex items-center bg-carbon-900 border border-carbon-700 rounded-md px-2 py-0.5 text-xs text-carbon-300">{tool}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-carbon-400 text-sm">Cette réparation nécessite un équipement professionnel et des compétences avancées. Nous recommandons de passer par un garage.</p>
                    )}
                  </div>

                  {/* Professionnel */}
                  <div className="bg-mechanic-500/5 border border-mechanic-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🔧</span>
                      <span className="text-white font-semibold">Garage professionnel</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-carbon-400 text-sm">Diagnostic</span>
                        <span className="text-white text-sm font-medium">40€ – 100€</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-carbon-400 text-sm">Pièces + pose</span>
                        <span className="text-white text-sm font-medium">{popularData.repairCosts.minimum}€ – {popularData.repairCosts.maximum}€</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-carbon-400 text-sm">Garantie pièces</span>
                        <span className="text-white text-sm font-medium">1 – 2 ans</span>
                      </div>
                      <div className="pt-3 border-t border-carbon-800/50">
                        <div className="text-carbon-400 text-xs mb-2">Où faire réparer :</div>
                        <div className="space-y-1.5 text-xs text-carbon-300">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-mechanic-500 rounded-full" />Garage indépendant (meilleur rapport qualité/prix)</div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-warning-500 rounded-full" />Centre auto (Norauto, Feu Vert, Midas...)</div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" />Concessionnaire (plus cher, pièces d&apos;origine)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Astuces pour économiser */}
              <div className="bg-gradient-to-r from-mechanic-950/50 to-carbon-950 border border-mechanic-800/30 rounded-xl p-6 mb-4">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Astuces pour réduire la facture
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {popularData.repairCosts.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-carbon-300 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avertissement */}
              <div className="bg-warning-500/5 border border-warning-500/20 rounded-lg p-4">
                <p className="text-carbon-400 text-sm flex items-start gap-2">
                  <span className="text-warning-500 flex-shrink-0">⚠️</span>
                  <span>{popularData.repairCosts.warningNote}</span>
                </p>
              </div>
            </div>
          )}

          {/* 🔹 Outils utiles pour diagnostiquer */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Outils utiles pour diagnostiquer ce code
            </h2>
            <p className="text-carbon-400 mb-6">
              Pour diagnostiquer et analyser le code {obdCode.code}, voici quelques outils OBD2 recommandés :
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="text-white font-semibold mb-2">Lecteur OBD2 basique</h3>
                <p className="text-carbon-400 text-sm mb-2">Lecteur OBD2 simple et efficace pour lire et effacer les codes défauts.</p>
                <p className="text-mechanic-500 text-sm font-medium">Budget : environ 25€</p>
              </div>
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="text-white font-semibold mb-2">Valise diagnostic avancée</h3>
                <p className="text-carbon-400 text-sm mb-2">Valise avec données en temps réel, graphiques et fonctions avancées.</p>
                <p className="text-mechanic-500 text-sm font-medium">Budget : environ 80€</p>
              </div>
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5">
                <div className="text-2xl mb-3">📲</div>
                <h3 className="text-white font-semibold mb-2">Interface Bluetooth OBD2</h3>
                <p className="text-carbon-400 text-sm mb-2">Interface Bluetooth compatible smartphone iOS/Android avec application dédiée.</p>
                <p className="text-mechanic-500 text-sm font-medium">Budget : environ 30€</p>
              </div>
            </div>
          </div>

          {/* 🔹 FAQ */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">❓</span>
              Questions fréquentes sur le code {obdCode.code}
            </h2>
            <div className="space-y-6">
              {popularData.faq.map((item, index) => (
                <div key={index} className="border-b border-carbon-800 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-carbon-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Codes liés */}
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🔗</span>
              Codes OBD liés
            </h2>
            <p className="text-carbon-400 mb-4">Autres codes fréquents pouvant être associés :</p>
            <div className="flex flex-wrap gap-3">
              {popularData.relatedCodes.map((relatedCode) => (
                <Link
                  key={relatedCode}
                  href={`/code/${relatedCode}`}
                  className="inline-flex items-center gap-2 bg-carbon-950 hover:bg-carbon-800 border border-carbon-700 hover:border-mechanic-600/50 rounded-lg px-4 py-2 text-white font-mono transition-all"
                >
                  {relatedCode}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Bouton retour */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Rechercher un autre code
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Page simple pour les codes non populaires
  const simpleBreadcrumbItems = [
    { name: 'Accueil', url: 'https://obd-diagnostic.fr' },
    { name: 'Codes OBD', url: 'https://obd-diagnostic.fr/codes-obd' },
    { name: `Code ${obdCode.code}`, url: `https://obd-diagnostic.fr/code/${obdCode.code}` },
  ];

  // Codes proches (meme plage de 100) pour le maillage interne
  const codeNum = parseInt(obdCode.code.substring(1));
  const rangeStart = Math.floor(codeNum / 100) * 100;
  const nearbyCodesList = obdCodes
    .filter((c) => {
      const n = parseInt(c.code.substring(1));
      return c.code.charAt(0) === obdCode.code.charAt(0) && n >= rangeStart && n < rangeStart + 100 && c.code !== obdCode.code;
    })
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-carbon-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Donnees structurees : Breadcrumb */}
        <JsonLd data={breadcrumbSchema(simpleBreadcrumbItems)} />

        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-carbon-400">
            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
            <li><Link href="/codes-obd" className="hover:text-white transition-colors">Codes OBD</Link></li>
            <li><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
            <li className="text-white font-medium">Code {obdCode.code}</li>
          </ol>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-2 ${typeInfo.bgColor} border border-current/30 rounded-full px-4 py-2 text-sm font-medium ${typeInfo.color}`}>
              <span className="w-2 h-2 bg-current rounded-full" />
              {typeInfo.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Code erreur {obdCode.code} : signification et diagnostic OBD2</h1>
          <p className="text-xl sm:text-2xl text-carbon-300">{obdCode.description}</p>
        </div>

        <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-steel-600/30 to-steel-800/30 flex items-center justify-center text-3xl">⚙️</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Description du code</h2>
              <p className="text-carbon-400">Ce code OBD indique un dysfonctionnement détecté par le système de diagnostic embarqué.</p>
            </div>
          </div>
          <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Explication</h3>
            <p className="text-carbon-300 leading-relaxed">{obdCode.explication}</p>
          </div>
          {obdCode.descriptionEn && (
            <div className="mt-6 pt-6 border-t border-carbon-800">
              <h3 className="text-sm font-semibold text-carbon-400 mb-2">Description en anglais</h3>
              <p className="text-carbon-300 italic">{obdCode.descriptionEn}</p>
            </div>
          )}
        </div>

        <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Que faire maintenant ?</h2>
          <ul className="space-y-3 text-carbon-300">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Notez ce code et consultez un professionnel pour un diagnostic complet</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Ne pas effacer le code avant d&apos;avoir résolu le problème sous-jacent</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mechanic-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Vérifiez si d&apos;autres codes sont présents pour un diagnostic plus précis</span>
            </li>
          </ul>
        </div>

        {/* Codes proches pour le maillage interne */}
        {nearbyCodesList.length > 0 && (
          <div className="bg-carbon-900/30 border border-carbon-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Codes OBD proches</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCodesList.map((nearCode) => (
                <Link
                  key={nearCode.code}
                  href={`/code/${nearCode.code}`}
                  className="inline-flex items-center gap-2 bg-carbon-950 hover:bg-carbon-800 border border-carbon-700 hover:border-mechanic-600/50 rounded-lg px-4 py-2 text-white font-mono text-sm transition-all"
                >
                  {nearCode.code}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link href="/codes-obd" className="inline-flex items-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voir tous les codes OBD
          </Link>
        </div>
      </div>
    </div>
  );
}
