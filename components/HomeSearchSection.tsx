'use client';

import OBDSearch from './OBDSearch';

interface OBDCode {
  code: string;
  description: string;
  descriptionEn: string;
  explication: string;
  popular: boolean;
}

interface HomeSearchSectionProps {
  codes: OBDCode[];
}

export default function HomeSearchSection({ codes }: HomeSearchSectionProps) {
  return (
    <section id="recherche" className="py-16 sm:py-20 bg-carbon-950" aria-labelledby="search-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h2 id="search-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Rechercher un <span className="text-mechanic-500">code OBD</span>
          </h2>
          <p className="text-carbon-400 max-w-2xl mx-auto">
            Entrez le code erreur affiché par votre lecteur OBD pour obtenir sa signification et des explications détaillées.
          </p>
        </div>

        {/* Composant de recherche */}
        <OBDSearch codes={codes} />

        {/* Codes populaires */}
        <div className="mt-12">
          <h3 className="text-center text-carbon-500 text-sm font-medium mb-4">Codes fréquemment recherchés</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['P0420', 'P0171', 'P0300', 'P0100', 'P0128', 'P0440', 'P0500', 'U0100'].map((code) => (
              <button
                key={code}
                onClick={() => {
                  const input = document.querySelector('input[aria-label="Rechercher un code OBD"]') as HTMLInputElement;
                  if (input) {
                    input.value = code;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    // Trigger React onChange
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
                    if (nativeInputValueSetter) {
                      nativeInputValueSetter.call(input, code);
                      input.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                  }
                }}
                className="px-3 py-1.5 bg-carbon-900 border border-carbon-700 rounded-lg text-carbon-400 text-sm font-mono hover:border-mechanic-600 hover:text-mechanic-400 transition-colors"
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
