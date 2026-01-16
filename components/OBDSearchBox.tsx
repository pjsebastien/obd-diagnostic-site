'use client';

import { useState } from 'react';
import Link from 'next/link';
import obdCodes from '@/data/obd_codes.json';

interface OBDCode {
  code: string;
  description: string;
  descriptionEn: string;
  explication: string;
  popular: boolean;
}

export default function OBDSearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<OBDCode | null | 'not-found'>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);

    if (value.trim().length === 0) {
      setShowResult(false);
      setSearchResult(null);
      return;
    }

    // Normaliser le code saisi (en majuscules, sans espaces)
    const normalizedValue = value.trim().toUpperCase();

    // Chercher dans le JSON
    const found = obdCodes.find(
      (item) => item.code.toUpperCase() === normalizedValue
    );

    if (found) {
      setSearchResult(found as OBDCode);
      setShowResult(true);
    } else {
      setSearchResult('not-found');
      setShowResult(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Champ de recherche */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-carbon-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Entrez un code OBD (ex: P0420, P0171...)"
          className="w-full pl-12 pr-4 py-4 bg-carbon-900 border border-carbon-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:ring-2 focus:ring-mechanic-500 focus:border-transparent transition-all duration-300"
          aria-label="Rechercher un code OBD"
        />
      </div>

      {/* Résultat de recherche */}
      {showResult && (
        <div className="mt-4 animate-fade-in">
          {searchResult === 'not-found' ? (
            // Code non trouvé
            <div className="bg-carbon-900 border border-warning-500/50 rounded-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-warning-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-warning-500 font-semibold mb-1">Code non reconnu</h3>
                <p className="text-carbon-400 text-sm">
                  Vérifiez la saisie de votre code OBD. Assurez-vous qu&apos;il commence par P, B, C ou U suivi de chiffres (ex: P0420).
                </p>
              </div>
            </div>
          ) : (
            // Code trouvé
            <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-mechanic-600/30 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                {/* Icône */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-steel-600/30 to-steel-800/30 flex items-center justify-center text-2xl">
                  ⚙️
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-mono mb-1">
                        {searchResult?.code}
                      </h3>
                      <p className="text-carbon-300">
                        {searchResult?.description}
                      </p>
                    </div>
                  </div>

                  {/* Bouton vers la fiche complète */}
                  <div className="mt-4 pt-4 border-t border-carbon-800">
                    <Link
                      href={`/code/${searchResult?.code}`}
                      className="inline-flex items-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
                    >
                      Voir la fiche complète
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
