import { Metadata } from 'next';
import Link from 'next/link';
import obdCodes from '@/data/obd_codes.json';
import { getPopularCodeData, popularCodesList } from '@/data/popular_codes_data';

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
  const description = popularData
    ? `${obdCode.description}. ${popularData.introduction.slice(0, 150)}...`
    : `Signification du code OBD ${obdCode.code} : ${obdCode.description}. ${obdCode.explication}`;

  return {
    title: `Code OBD ${obdCode.code} – ${obdCode.description} | Diagnostic Auto`,
    description,
    keywords: [
      `code ${obdCode.code}`,
      obdCode.code,
      'diagnostic OBD',
      'voyant moteur',
      'code défaut',
      'réparation auto',
      obdCode.description,
    ],
    alternates: {
      canonical: `https://obd-diagnostic.fr/code/${obdCode.code}`,
    },
    openGraph: {
      title: `Code OBD ${obdCode.code} – ${obdCode.description}`,
      description,
      url: `https://obd-diagnostic.fr/code/${obdCode.code}`,
      type: 'article',
      siteName: 'OBD-Diagnostic.fr',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Code OBD ${obdCode.code} – ${obdCode.description}`,
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

    return (
      <div className="min-h-screen bg-carbon-950 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-carbon-400">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
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
              Code OBD {obdCode.code} – {obdCode.description}
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
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5 hover:border-mechanic-600/50 transition-all">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="text-white font-semibold mb-2">Ancel AD310</h3>
                <p className="text-carbon-400 text-sm mb-3">Lecteur OBD2 simple et efficace pour lire et effacer les codes (≈25€)</p>
                <a href="#" className="text-mechanic-500 hover:text-mechanic-400 text-sm font-medium">Voir sur Amazon →</a>
              </div>
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5 hover:border-mechanic-600/50 transition-all">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="text-white font-semibold mb-2">Autel MaxiDiag</h3>
                <p className="text-carbon-400 text-sm mb-3">Valise diagnostic avancée avec données en temps réel (≈80€)</p>
                <a href="#" className="text-mechanic-500 hover:text-mechanic-400 text-sm font-medium">Voir sur Amazon →</a>
              </div>
              <div className="bg-carbon-950 border border-carbon-700 rounded-lg p-5 hover:border-mechanic-600/50 transition-all">
                <div className="text-2xl mb-3">📲</div>
                <h3 className="text-white font-semibold mb-2">iCar Pro Bluetooth</h3>
                <p className="text-carbon-400 text-sm mb-3">Interface Bluetooth compatible smartphone iOS/Android (≈30€)</p>
                <a href="#" className="text-mechanic-500 hover:text-mechanic-400 text-sm font-medium">Voir sur Amazon →</a>
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
  return (
    <div className="min-h-screen bg-carbon-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-carbon-400">
            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-mono">Code {obdCode.code}</h1>
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
