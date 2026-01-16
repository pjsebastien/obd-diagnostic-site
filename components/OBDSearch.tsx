'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface OBDCode {
  code: string;
  description: string;
  descriptionEn: string;
  explication: string;
  popular: boolean;
}

interface OBDSearchProps {
  codes: OBDCode[];
}

export default function OBDSearch({ codes }: OBDSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<OBDCode[]>([]);
  const [selectedCode, setSelectedCode] = useState<OBDCode | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Recherche dans les codes
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setSelectedCode(null);
      return;
    }

    setIsSearching(true);
    const searchQuery = query.toUpperCase().trim();

    // Recherche par code exact d'abord, puis par correspondance partielle
    const exactMatch = codes.filter(c => c.code === searchQuery);
    const partialMatches = codes.filter(c =>
      c.code !== searchQuery && (
        c.code.includes(searchQuery) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.descriptionEn.toLowerCase().includes(query.toLowerCase())
      )
    );

    const allResults = [...exactMatch, ...partialMatches].slice(0, 10);
    setResults(allResults);

    // Si correspondance exacte, sélectionner automatiquement
    if (exactMatch.length === 1) {
      setSelectedCode(exactMatch[0]);
    } else {
      setSelectedCode(null);
    }

    setIsSearching(false);
  }, [query, codes]);

  // Gestion du clic sur un résultat
  const handleSelectCode = (code: OBDCode) => {
    setSelectedCode(code);
    setQuery(code.code);
    setResults([]);
  };

  // Fermer les résultats quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        if (results.length > 0 && !selectedCode) {
          setResults([]);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [results, selectedCode]);

  // Déterminer la couleur du badge selon le type de code
  const getCodeColor = (code: string) => {
    const prefix = code.charAt(0);
    switch (prefix) {
      case 'P': return 'bg-mechanic-600 text-white';
      case 'B': return 'bg-steel-600 text-white';
      case 'C': return 'bg-warning-600 text-white';
      case 'U': return 'bg-green-600 text-white';
      default: return 'bg-carbon-600 text-white';
    }
  };

  // Déterminer le type de code
  const getCodeType = (code: string) => {
    const prefix = code.charAt(0);
    switch (prefix) {
      case 'P': return 'Groupe motopropulseur';
      case 'B': return 'Carrosserie';
      case 'C': return 'Châssis';
      case 'U': return 'Réseau';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Champ de recherche */}
      <div className="relative" ref={inputRef}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Entrez un code OBD (ex: P0420, P0171, C0035...)"
            className="w-full px-6 py-4 pl-14 text-lg bg-carbon-900 border-2 border-carbon-700 rounded-xl text-white placeholder-carbon-500 focus:border-mechanic-500 focus:outline-none transition-colors"
            aria-label="Rechercher un code OBD"
          />
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {isSearching && (
            <div className="absolute right-5 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-mechanic-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Liste des résultats de recherche */}
        {results.length > 0 && !selectedCode && (
          <div className="absolute z-50 w-full mt-2 bg-carbon-900 border border-carbon-700 rounded-xl shadow-2xl overflow-hidden">
            <ul className="divide-y divide-carbon-800">
              {results.map((code) => (
                <li key={code.code}>
                  <button
                    onClick={() => handleSelectCode(code)}
                    className="w-full px-4 py-3 text-left hover:bg-carbon-800 transition-colors flex items-center gap-3"
                  >
                    <span className={`px-2 py-1 rounded font-mono font-bold text-sm ${getCodeColor(code.code)}`}>
                      {code.code}
                    </span>
                    <span className="text-carbon-300 text-sm truncate flex-1">
                      {code.description}
                    </span>
                    {code.popular && (
                      <span className="text-xs bg-mechanic-900 text-mechanic-400 px-2 py-0.5 rounded">
                        Fréquent
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Affichage du code sélectionné */}
      {selectedCode && (
        <div className="mt-6 bg-carbon-900 border border-carbon-700 rounded-2xl overflow-hidden animate-fade-in">
          {/* En-tête du résultat */}
          <div className="bg-carbon-800/50 px-6 py-4 border-b border-carbon-700">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className={`px-4 py-2 rounded-lg font-mono font-bold text-xl ${getCodeColor(selectedCode.code)}`}>
                  {selectedCode.code}
                </span>
                <div>
                  <span className="text-carbon-400 text-sm">{getCodeType(selectedCode.code)}</span>
                  {selectedCode.popular && (
                    <span className="ml-2 text-xs bg-mechanic-900 text-mechanic-400 px-2 py-0.5 rounded">
                      Code fréquent
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={`/code/${selectedCode.code.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-mechanic-400 hover:text-mechanic-300 text-sm font-medium transition-colors"
              >
                Voir la fiche complète
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Corps du résultat */}
          <div className="p-6">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {selectedCode.description}
              </h3>
              <p className="text-carbon-400 text-sm">
                {selectedCode.descriptionEn}
              </p>
            </div>

            {/* Explication simplifiée */}
            <div className="bg-carbon-950/50 rounded-xl p-5 border border-carbon-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-steel-900/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-steel-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Explication simplifiée</h4>
                  <p className="text-carbon-300 text-sm leading-relaxed">
                    {selectedCode.explication}
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton vers la page détaillée */}
            <div className="mt-6 flex justify-center">
              <Link
                href={`/code/${selectedCode.code.toLowerCase()}`}
                className="inline-flex items-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Voir la fiche détaillée du code {selectedCode.code}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Message si pas de résultats */}
      {query.length >= 2 && results.length === 0 && !selectedCode && !isSearching && (
        <div className="mt-4 text-center text-carbon-400 py-8">
          <svg className="w-12 h-12 mx-auto mb-3 text-carbon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Aucun code trouvé pour &quot;{query}&quot;</p>
          <p className="text-sm mt-2">Vérifiez l&apos;orthographe ou essayez un autre code</p>
        </div>
      )}
    </div>
  );
}
