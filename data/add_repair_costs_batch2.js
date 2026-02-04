const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'popular_codes_data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// For multi-line entries: find "relatedCodes: [...]" followed by newline + "  }," or "  }"
// For single-line entries: find "relatedCodes: [...]" followed by " }," on the same line

const repairs = {
  // ===== P0133 - Sonde lambda reponse lente =====
  P0133: {
    find: "relatedCodes: ['P0130', 'P0131', 'P0132', 'P0134', 'P0420']",
    repair: `,
    repairCosts: {
      minimum: 60,
      average: 150,
      maximum: 350,
      parts: [
        { name: 'Sonde lambda amont', priceMin: 40, priceMax: 120 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Additif nettoyant sonde lambda', priceMin: 15, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '1h - 2h',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Decapeur thermique']
      },
      tips: [
        'Essayer un additif nettoyant sonde lambda (15-25 euros) avant de remplacer, efficace dans 30% des cas',
        'Toujours demonter la sonde moteur chaud pour eviter de casser le filetage grippe',
        'Privilegier les marques Bosch, NGK ou Denso pour une duree de vie optimale',
        'Appliquer de la pate cuivre anti-grippage sur le filetage de la nouvelle sonde'
      ],
      warningNote: 'Ne pas confondre reponse lente (P0133) avec sonde morte (P0134). Tester le temps de reponse avec une valise avant de remplacer la sonde pour confirmer le diagnostic.'
    }`
  },

  // ===== P0134 - Sonde lambda amont inactive =====
  P0134: {
    find: "relatedCodes: ['P0130', 'P0131', 'P0132', 'P0133', 'P0135']",
    repair: `,
    repairCosts: {
      minimum: 50,
      average: 140,
      maximum: 300,
      parts: [
        { name: 'Sonde lambda amont', priceMin: 40, priceMax: 120 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Decapeur thermique']
      },
      tips: [
        'Toujours verifier le fusible rechauffage sonde en premier (2-5 euros, resout 15% des cas)',
        'Tester la resistance du rechauffage sonde avant de la remplacer (3-15 ohms = OK)',
        'Une sonde figee a 0.45V est morte : le remplacement est inevitable',
        'Demonter la sonde moteur chaud facilite enormement le devissage'
      ],
      warningNote: 'Sans sonde lambda fonctionnelle, le moteur tourne en boucle ouverte avec 15-25% de surconsommation. Reparer avant le controle technique.'
    }`
  },

  // ===== P0135 - Rechauffage sonde lambda amont =====
  P0135: {
    find: "relatedCodes: ['P0130', 'P0134', 'P0141', 'P0155', 'P0161']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Sonde lambda amont', priceMin: 40, priceMax: 120 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Relais rechauffage sonde', priceMin: 10, priceMax: 30 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '30min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Verifier le fusible en premier : c est la cause dans 40% des cas (2-5 euros)',
        'Mesurer la resistance du rechauffage sonde debranchee : infini = sonde HS',
        'Si le fusible grille immediatement apres remplacement, chercher un court-circuit cablage',
        'Les symptomes disparaissent une fois le moteur chaud, probleme surtout a froid'
      ],
      warningNote: 'Le rechauffage defaillant cause une surconsommation de 20-30% les 5 premieres minutes de chaque trajet. Impact important en usage urbain avec demarrages frequents.'
    }`
  },

  // ===== P0136 - Sonde lambda aval banc 1 =====
  P0136: {
    find: "relatedCodes: ['P0140', 'P0141', 'P0156', 'P0420', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 45,
      average: 120,
      maximum: 280,
      parts: [
        { name: 'Sonde lambda aval', priceMin: 35, priceMax: 100 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Nettoyant contact electrique', priceMin: 5, priceMax: 12 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'La sonde aval n impacte pas le fonctionnement moteur, pas d urgence mecanique',
        'Si vous avez P0136 ET P0420, remplacer d abord la sonde aval (20% de faux P0420)',
        'La sonde aval est moins chere que la sonde amont car moins sollicitee',
        'Nettoyer le connecteur peut suffire si la corrosion est legere'
      ],
      warningNote: 'Aucun impact sur les performances moteur. Reparation necessaire uniquement pour le controle technique et la surveillance du catalyseur.'
    }`
  },

  // ===== P0137 - Sonde lambda aval signal bas =====
  P0137: {
    find: "relatedCodes: ['P0136', 'P0138', 'P0140', 'P0131', 'P0420']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Sonde lambda aval', priceMin: 35, priceMax: 100 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Gaine thermoretractable', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'Verifier le cablage en priorite : un court-circuit masse est la cause dans 45% des cas',
        'Debrancher la sonde et mesurer : si la tension passe a 0.45V, la sonde est HS',
        'Inspecter visuellement le faisceau pour des fils denudes touchant le chassis',
        'Aucun impact sur la consommation ou les performances, pas d urgence'
      ],
      warningNote: 'Code mineur sans impact moteur. Le court-circuit masse du cablage est la cause la plus frequente : inspecter le faisceau avant de remplacer la sonde.'
    }`
  },

  // ===== P0138 - Sonde lambda aval signal haut =====
  P0138: {
    find: "relatedCodes: ['P0136', 'P0137', 'P0140', 'P0132', 'P0420']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Sonde lambda aval', priceMin: 35, priceMax: 100 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Gaine thermoretractable', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'Court-circuit vers 12V est la cause principale (35% des cas) : verifier le cablage',
        'Debrancher la sonde : si la tension chute, la sonde est HS ; si elle reste haute, probleme cablage',
        'Verifier que le fil signal ne touche pas le fil rechauffage 12V',
        'Nettoyer le connecteur si infiltration d eau ou d huile detectee'
      ],
      warningNote: 'Aucun impact sur les performances moteur. Si le P0420 est aussi present, remplacer la sonde aval en premier pour eliminer un faux positif.'
    }`
  },

  // ===== P0140 - Sonde lambda aval inactive =====
  P0140: {
    find: "relatedCodes: ['P0136', 'P0137', 'P0138', 'P0134', 'P0420']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 120,
      maximum: 280,
      parts: [
        { name: 'Sonde lambda aval', priceMin: 35, priceMax: 100 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '30min - 1h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Tester le fusible en premier : gratuit et resout 20% des cas',
        'Sonde figee a 0.45V = sonde morte, remplacement obligatoire',
        'Le moteur fonctionne parfaitement sans sonde aval, pas d urgence mecanique',
        'Verifier si le fusible est commun avec la sonde amont avant de le remplacer'
      ],
      warningNote: 'Aucun impact sur les performances ou la consommation. La sonde aval sert uniquement a surveiller le catalyseur. Reparer avant le CT.'
    }`
  },

  // ===== P0150 - Sonde O2 amont banc 2 =====
  P0150: {
    find: "relatedCodes: ['P0130', 'P0151', 'P0152', 'P0153', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 50,
      average: 180,
      maximum: 400,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 30 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '40-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Cle a pipe jeu complet']
      },
      tips: [
        'L acces au banc 2 est souvent plus difficile que le banc 1 (arriere moteur sur V6 transversal)',
        'Demander un devis specifique main d oeuvre banc 2 car les prix varient selon le modele',
        'Reparer P0150 en premier si P0430 est present : 60% des P0430 disparaissent apres',
        'Verifier le connecteur avant de remplacer la sonde (corrosion frequente banc 2)'
      ],
      warningNote: 'Surconsommation de 10-20% tant que la sonde n est pas reparee. Le catalyseur banc 2 risque d etre endommage par un melange non optimise.'
    }`
  },

  // ===== P0151 - Sonde O2 amont banc 2 signal bas =====
  P0151: {
    find: "relatedCodes: ['P0150', 'P0152', 'P0171', 'P0174', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 50,
      average: 180,
      maximum: 400,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Joint collecteur admission', priceMin: 10, priceMax: 30 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Spray detecteur fuite']
      },
      tips: [
        'Un court-circuit masse du fil signal est la cause dans 35% des cas',
        'Provoquer un melange riche (spray demarrage) : si la tension monte, la sonde est OK',
        'Verifier qu il n y a pas de fuite d air sur l admission banc 2 (spray eau savonneuse)',
        'Si le probleme est un vrai melange pauvre, chercher la cause cote alimentation carburant'
      ],
      warningNote: 'L ECU enrichit le melange banc 2 par securite, causant surconsommation et risque d encrassement catalyseur. Diagnostic sous 2-4 semaines.'
    }`
  },

  // ===== P0152 - Sonde O2 amont banc 2 signal haut =====
  P0152: {
    find: "relatedCodes: ['P0150', 'P0151', 'P0172', 'P0175', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 50,
      average: 190,
      maximum: 420,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Regulateur pression carburant', priceMin: 40, priceMax: 120 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Manometre pression carburant']
      },
      tips: [
        'Debrancher la sonde : si la tension chute, le probleme vient de la sonde ou du cablage',
        'Verifier la pression carburant (2.5-4 bars) : une pression excessive cause un melange riche reel',
        'Un court-circuit vers 12V est la cause la plus frequente (30% des cas)',
        'Si le P0175 est aussi present, chercher un injecteur qui fuit sur le banc 2'
      ],
      warningNote: 'L ECU appauvrit le melange banc 2 pour compenser. Risque de surchauffe et de rates d allumage si le melange devient trop pauvre. Diagnostic urgent sous 1-2 semaines.'
    }`
  },

  // ===== P0153 - Sonde O2 amont banc 2 reponse lente =====
  P0153: {
    find: "relatedCodes: ['P0150', 'P0151', 'P0152', 'P0133', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 55,
      average: 170,
      maximum: 380,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Additif nettoyant sonde lambda', priceMin: 15, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Decapeur thermique']
      },
      tips: [
        'Si le vehicule a plus de 150 000 km, le remplacement de la sonde est la solution logique',
        'Essayer un additif nettoyant (15-25 euros) avant le remplacement si la sonde a moins de 120 000 km',
        'Remplacer les deux sondes amont (banc 1 et 2) simultanement economise sur la main d oeuvre',
        'La degradation est progressive : la sonde finira par mourir completement (P0154)'
      ],
      warningNote: 'Surconsommation de 5-15% et emissions polluantes elevees. Remplacer dans les 2-3 mois ou avant le controle technique.'
    }`
  },

  // ===== P0154 - Sonde O2 amont banc 2 inactive =====
  P0154: {
    find: "relatedCodes: ['P0150', 'P0153', 'P0134', 'P0155', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 50,
      average: 180,
      maximum: 400,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Decapeur thermique']
      },
      tips: [
        'Verifier le fusible rechauffage sonde en premier (gratuit, resout 20% des cas)',
        'Si la sonde est figee a 0.45V meme en accelerant, elle est morte',
        'Privilegier une sonde OEM ou marque reputee (Bosch, Denso) pour le banc 2 difficile d acces',
        'Profiter de l intervention pour verifier aussi la sonde aval banc 2'
      ],
      warningNote: 'Le moteur tourne en boucle ouverte sur le banc 2 avec 10-20% de surconsommation. Risque d endommager le catalyseur banc 2 si non repare.'
    }`
  },

  // ===== P0155 - Rechauffage sonde O2 amont banc 2 =====
  P0155: {
    find: "relatedCodes: ['P0135', 'P0150', 'P0154', 'P0141', 'P0161']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 150,
      maximum: 350,
      parts: [
        { name: 'Sonde lambda amont banc 2', priceMin: 40, priceMax: 120 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Relais rechauffage sonde', priceMin: 10, priceMax: 30 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 }
      ],
      laborTime: '45min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Fusible grille = cause dans 40% des cas, verifier en premier (2-5 euros)',
        'Mesurer la resistance du rechauffage : 2-14 ohms = OK, infini = sonde HS',
        'Les symptomes ne se manifestent qu a froid (5-10 min) puis tout redevient normal',
        'Impact important en usage urbain avec beaucoup de demarrages courts'
      ],
      warningNote: 'Surconsommation de 20-30% les 5-10 premieres minutes apres chaque demarrage a froid. Sur usage urbain, cela represente 10-15% de surconsommation globale.'
    }`
  },

  // ===== P0156 - Sonde O2 aval banc 2 =====
  P0156: {
    find: "relatedCodes: ['P0136', 'P0150', 'P0157', 'P0158', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 120,
      maximum: 280,
      parts: [
        { name: 'Sonde lambda aval banc 2', priceMin: 35, priceMax: 100 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Nettoyant contact electrique', priceMin: 5, priceMax: 12 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'La sonde aval ne regule pas le melange : zero impact sur les performances',
        'Verifier le fusible en premier : resout 25% des cas pour quelques euros',
        'La sonde aval banc 2 est souvent plus accessible que la sonde amont',
        'Reparer seulement si le CT approche ou si le voyant moteur vous gene'
      ],
      warningNote: 'Aucun impact sur le fonctionnement moteur ni la consommation. Reparation utile pour le controle technique et la surveillance du catalyseur banc 2.'
    }`
  },

  // ===== P0157 - Sonde O2 aval banc 2 signal bas =====
  P0157: {
    find: "relatedCodes: ['P0137', 'P0151', 'P0156', 'P0158', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 120,
      maximum: 280,
      parts: [
        { name: 'Sonde lambda aval banc 2', priceMin: 35, priceMax: 100 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Gaine thermoretractable', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'Court-circuit masse du fil signal = 40% des cas, inspecter le cablage sous le vehicule',
        'Zero impact sur les performances moteur, pas d urgence mecanique',
        'Si reparation cablage, bien isoler avec gaine thermoretractable et eloigner de l echappement',
        'La sonde aval dure plus longtemps que l amont : si HS sous 120 000 km, suspecter le cablage'
      ],
      warningNote: 'Code mineur sans impact moteur. La cause la plus frequente est un fil denude touchant le chassis ou l echappement. Inspecter le faisceau en premier.'
    }`
  },

  // ===== P0158 - Sonde O2 aval banc 2 signal haut =====
  P0158: {
    find: "relatedCodes: ['P0138', 'P0152', 'P0156', 'P0157', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 120,
      maximum: 280,
      parts: [
        { name: 'Sonde lambda aval banc 2', priceMin: 35, priceMax: 100 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Gaine thermoretractable', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'Court-circuit vers 12V = cause principale (35%), verifier l isolation du cablage',
        'Debrancher la sonde moteur tournant : si la tension chute, la sonde ou le cablage est HS',
        'Verifier que le fil signal ne touche pas le fil de rechauffage 12V',
        'Si P0430 present aussi, remplacer la sonde aval en premier (elimine 10% de faux positifs)'
      ],
      warningNote: 'Aucun impact mecanique. Si le catalyseur est reellement defaillant (10% des cas), un test emissions en garage confirmera.'
    }`
  },

  // ===== P0160 - Sonde O2 aval banc 2 inactive =====
  P0160: {
    find: "relatedCodes: ['P0140', 'P0154', 'P0156', 'P0157', 'P0430']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 110,
      maximum: 260,
      parts: [
        { name: 'Sonde lambda aval banc 2', priceMin: 35, priceMax: 100 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Connecteur electrique sonde', priceMin: 10, priceMax: 25 },
        { name: 'Pate anti-grippage cuivre', priceMin: 5, priceMax: 10 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '45min - 1h30',
        tools: ['Cle a sonde lambda 22mm', 'Multimetre', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Fusible grille = 25% des cas, verifier en premier (2-5 euros)',
        'Sonde figee a 0.45V = sonde morte, pas de solution autre que le remplacement',
        'Zero impact moteur : vous pouvez rouler indefiniment mais le voyant restera allume',
        'Privilegier une sonde aftermarket de qualite (Bosch, NGK) pour economiser 30-40%'
      ],
      warningNote: 'Aucun impact sur le fonctionnement moteur. Reparation necessaire pour le CT et pour retrouver la surveillance du catalyseur banc 2.'
    }`
  },

  // ===== P0161 - Rechauffage sonde O2 aval banc 2 =====
  P0161: {
    find: "relatedCodes: ['P0141', 'P0155', 'P0156', 'P0160', 'P0135']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 110,
      maximum: 260,
      parts: [
        { name: 'Sonde lambda aval banc 2', priceMin: 35, priceMax: 100 },
        { name: 'Fusible rechauffage sonde', priceMin: 2, priceMax: 5 },
        { name: 'Relais rechauffage sonde', priceMin: 10, priceMax: 30 },
        { name: 'Faisceau cablage reparation', priceMin: 15, priceMax: 40 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '30min - 1h30',
        tools: ['Multimetre', 'Cle a sonde lambda 22mm', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Fusible grille = cause dans 40% des cas, verification gratuite en 5 minutes',
        'Tester la resistance du rechauffage : 2-14 ohms = OK, infini = sonde HS',
        'Impact pratiquement nul car la sonde aval ne regule pas le melange',
        'Reparation la moins urgente de tous les codes sonde lambda'
      ],
      warningNote: 'Impact quasi nul sur le fonctionnement. Le rechauffage retarde seulement le monitoring catalyseur de quelques minutes apres chaque demarrage.'
    }`
  },

  // ===== P0171 - Melange pauvre banc 1 =====
  P0171: {
    find: "relatedCodes: ['P0172', 'P0174', 'P0175', 'P0100', 'P0101']",
    repair: `,
    repairCosts: {
      minimum: 10,
      average: 150,
      maximum: 600,
      parts: [
        { name: 'Debitmetre MAF', priceMin: 120, priceMax: 400 },
        { name: 'Durite admission', priceMin: 15, priceMax: 50 },
        { name: 'Filtre a carburant', priceMin: 15, priceMax: 45 },
        { name: 'Spray nettoyant MAF', priceMin: 10, priceMax: 15 },
        { name: 'Vanne PCV', priceMin: 15, priceMax: 40 }
      ],
      laborTime: '30min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '1h - 3h',
        tools: ['Valise OBD2', 'Spray nettoyant MAF', 'Spray detecteur fuite', 'Multimetre', 'Manometre pression carburant']
      },
      tips: [
        'Commencer par nettoyer le debitmetre MAF avec un spray specifique (10-15 euros) : resout 25% des cas',
        'Inspecter les durites apres le MAF : une fissure coute 15-30 euros a reparer',
        'Un test fumigene en garage (50-80 euros) localise les prises d air rapidement',
        'Dans 40-50% des cas, la reparation coute moins de 50 euros'
      ],
      warningNote: 'Un melange pauvre prolonge peut endommager les soupapes et le catalyseur par surchauffe. Diagnostic et reparation dans les 2-4 semaines.'
    }`
  },

  // ===== P0200 - Circuit injecteurs general =====
  P0200: {
    find: "relatedCodes: ['P0201', 'P0202', 'P0300', 'P0100']",
    repair: `,
    repairCosts: {
      minimum: 5,
      average: 200,
      maximum: 600,
      parts: [
        { name: 'Fusible/relais injection', priceMin: 5, priceMax: 30 },
        { name: 'Faisceau cablage injecteurs', priceMin: 50, priceMax: 200 },
        { name: 'Connecteur rampe injection', priceMin: 15, priceMax: 40 },
        { name: 'Masse electrique (nettoyage)', priceMin: 0, priceMax: 10 }
      ],
      laborTime: '1h - 3h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '40-60%',
        timeNeeded: '1h - 3h',
        tools: ['Multimetre', 'Valise OBD2', 'Cle a pipe jeu complet', 'Nettoyant contact electrique', 'Schema electrique']
      },
      tips: [
        'Verifier le fusible et le relais d injection en premier (5-30 euros, rapide)',
        'Nettoyer les masses electriques du moteur (gratuit, resout 20% des cas)',
        'Un faisceau cablage injecteurs peut etre repare localement sans le remplacer entierement',
        'Si le probleme vient de l ECU, faire diagnostiquer par un specialiste avant tout remplacement'
      ],
      warningNote: 'P0200 compromet l injection complete. Calages possibles et rates severes. Diagnostic urgent sous 24-48h pour eviter d endommager le catalyseur.'
    }`
  },

  // ===== P0201 - Injecteur cylindre 1 =====
  P0201: {
    find: "relatedCodes: ['P0200', 'P0301', 'P0202']",
    repair: `,
    repairCosts: {
      minimum: 25,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Injecteur cylindre 1', priceMin: 25, priceMax: 120 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 },
        { name: 'Nettoyant injecteurs', priceMin: 10, priceMax: 20 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a pipe', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Tester la resistance de l injecteur (12-16 ohms) avant de le remplacer',
        'Permuter l injecteur cyl 1 avec un autre cylindre : si le code suit, l injecteur est HS',
        'Nettoyer le connecteur avec un spray contact resout 25% des cas',
        'Les injecteurs aftermarket de qualite sont souvent 40% moins chers que l origine'
      ],
      warningNote: 'Un cylindre non alimente provoque des vibrations et des imbrules vers le catalyseur. Reparation sous 1-2 semaines.'
    }`
  },

  // ===== P0202 - Injecteur cylindre 2 =====
  P0202: {
    find: "relatedCodes: ['P0200', 'P0302', 'P0201']",
    repair: `,
    repairCosts: {
      minimum: 25,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Injecteur cylindre 2', priceMin: 25, priceMax: 120 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 },
        { name: 'Nettoyant injecteurs', priceMin: 10, priceMax: 20 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a pipe', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Procedure identique au P0201 mais sur le cylindre 2',
        'Permuter avec un autre injecteur pour confirmer que c est bien la piece defaillante',
        'Mesurer la resistance : 12-16 ohms = OK, infini ou 0 = injecteur HS',
        'Toujours remplacer le joint O-ring lors du remontage de l injecteur'
      ],
      warningNote: 'Vibrations et surconsommation tant que l injecteur n est pas repare. Le catalyseur risque des dommages par imbrules non brules.'
    }`
  },

  // ===== P0203 - Injecteur cylindre 3 =====
  P0203: {
    find: "relatedCodes: ['P0200', 'P0303']",
    repair: `,
    repairCosts: {
      minimum: 25,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Injecteur cylindre 3', priceMin: 25, priceMax: 120 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a pipe', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Procedure identique aux autres codes injecteurs (P0201-P0208)',
        'Tester la resistance et permuter avant de remplacer',
        'Le connecteur oxyde est la cause dans 25% des cas',
        'Un nettoyage ultrason des injecteurs (80-150 euros les 4) peut eviter un remplacement'
      ],
      warningNote: 'Rate cylindre 3 avec vibrations et surconsommation. Reparation sous 1-2 semaines pour proteger le catalyseur.'
    }`
  },

  // ===== P0204 - Injecteur cylindre 4 =====
  P0204: {
    find: "relatedCodes: ['P0200', 'P0304']",
    repair: `,
    repairCosts: {
      minimum: 25,
      average: 130,
      maximum: 300,
      parts: [
        { name: 'Injecteur cylindre 4', priceMin: 25, priceMax: 120 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '45min - 1h30',
        tools: ['Multimetre', 'Cle a pipe', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Meme procedure que P0201 : resistance, permutation, remplacement',
        'L injecteur 4 est souvent plus accessible que les autres sur les 4 cylindres',
        'Verifier le connecteur et le cablage avant d acheter un injecteur neuf',
        'Un injecteur aftermarket de qualite coute 25-60 euros contre 45-120 euros en origine'
      ],
      warningNote: 'Vibrations et rates d allumage cylindre 4. Reparer sous 1-2 semaines pour eviter d endommager le catalyseur.'
    }`
  },

  // ===== P0205 - Injecteur cylindre 5 =====
  P0205: {
    find: "relatedCodes: ['P0200', 'P0305']",
    repair: `,
    repairCosts: {
      minimum: 30,
      average: 150,
      maximum: 350,
      parts: [
        { name: 'Injecteur cylindre 5', priceMin: 30, priceMax: 140 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '40-60%',
        timeNeeded: '1h - 2h',
        tools: ['Multimetre', 'Cle a pipe jeu complet', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Concerne les moteurs V6/V8 : l acces peut etre plus complexe',
        'Tester la resistance de l injecteur et permuter avec un autre cylindre pour confirmer',
        'Les injecteurs de moteurs V6/V8 sont parfois plus chers que ceux des 4 cylindres',
        'Profiter de l intervention pour controler les autres injecteurs du meme banc'
      ],
      warningNote: 'Vibrations sur moteur V6/V8. Le cylindre 5 non alimente cause un desequilibre moteur. Reparation sous 1-2 semaines.'
    }`
  },

  // ===== P0206 - Injecteur cylindre 6 =====
  P0206: {
    find: "relatedCodes: ['P0200', 'P0306']",
    repair: `,
    repairCosts: {
      minimum: 30,
      average: 150,
      maximum: 350,
      parts: [
        { name: 'Injecteur cylindre 6', priceMin: 30, priceMax: 140 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 15 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 8 }
      ],
      laborTime: '30min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '40-60%',
        timeNeeded: '1h - 2h',
        tools: ['Multimetre', 'Cle a pipe jeu complet', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Procedure identique aux autres codes injecteurs sur moteur V6/V8',
        'L acces au cylindre 6 depend de la configuration moteur (V6, ligne 6)',
        'Permuter avec un injecteur adjacent pour confirmer le diagnostic',
        'Un nettoyage professionnel aux ultrasons peut sauver un injecteur partiellement bouche'
      ],
      warningNote: 'Rate allumage cylindre 6. Vibrations et surconsommation. Reparation sous 1-2 semaines.'
    }`
  },

  // ===== P0207 - Injecteur cylindre 7 =====
  P0207: {
    find: "relatedCodes: ['P0200', 'P0307']",
    repair: `,
    repairCosts: {
      minimum: 35,
      average: 170,
      maximum: 400,
      parts: [
        { name: 'Injecteur cylindre 7', priceMin: 35, priceMax: 160 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 20 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 10 }
      ],
      laborTime: '45min - 2h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Multimetre', 'Cle a pipe jeu complet', 'Tournevis long', 'Valise OBD2']
      },
      tips: [
        'Concerne uniquement les moteurs V8/V10 : accessibilite parfois complexe',
        'Les injecteurs V8 sont generalement plus chers que ceux des 4 cylindres',
        'Tester la resistance et permuter avant remplacement pour confirmer',
        'Demander un devis specifique pour l acces au cylindre 7 selon votre modele'
      ],
      warningNote: 'Moteur V8/V10 uniquement. Le cylindre 7 non alimente cause vibrations et desequilibre. Reparation sous 1-2 semaines.'
    }`
  },

  // ===== P0208 - Injecteur cylindre 8 =====
  P0208: {
    find: "relatedCodes: ['P0200', 'P0308']",
    repair: `,
    repairCosts: {
      minimum: 35,
      average: 170,
      maximum: 400,
      parts: [
        { name: 'Injecteur cylindre 8', priceMin: 35, priceMax: 160 },
        { name: 'Connecteur injecteur', priceMin: 5, priceMax: 20 },
        { name: 'Joint injecteur (O-ring)', priceMin: 3, priceMax: 10 }
      ],
      laborTime: '45min - 2h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '35-55%',
        timeNeeded: '1h - 2h30',
        tools: ['Multimetre', 'Cle a pipe jeu complet', 'Tournevis long', 'Valise OBD2']
      },
      tips: [
        'Dernier cylindre du V8 : l acces peut etre difficile selon la configuration',
        'Meme procedure de diagnostic que les autres codes injecteurs',
        'Les injecteurs de V8 sont parfois specifiques au banc (gauche/droite)',
        'Profiter de l intervention pour inspecter tous les injecteurs du banc 2'
      ],
      warningNote: 'Moteur V8 uniquement. Vibrations et rates d allumage. Reparation sous 1-2 semaines pour proteger le catalyseur.'
    }`
  },

  // ===== P0400 - Debit EGR insuffisant (compact) =====
  P0400: {
    find: "relatedCodes: ['P0401', 'P0402', 'P0403', 'P0404']",
    repair: `,
    repairCosts: {
      minimum: 15,
      average: 150,
      maximum: 500,
      parts: [
        { name: 'Vanne EGR', priceMin: 120, priceMax: 350 },
        { name: 'Joint vanne EGR', priceMin: 5, priceMax: 15 },
        { name: 'Spray nettoyant EGR', priceMin: 10, priceMax: 20 },
        { name: 'Capteur position EGR', priceMin: 30, priceMax: 90 },
        { name: 'Electrovanne pilotage EGR', priceMin: 25, priceMax: 80 }
      ],
      laborTime: '1h - 2h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '1h - 3h',
        tools: ['Cle a pipe jeu complet', 'Spray nettoyant EGR', 'Brosse laiton', 'Valise OBD2']
      },
      tips: [
        'Tenter le nettoyage de la vanne EGR en premier : resout 60-70% des cas pour moins de 20 euros',
        'Demonter la vanne et la tremper dans du nettoyant frein pendant 1-2h puis brosser',
        'Utiliser regulierement un additif decalaminant pour prevenir l encrassement futur',
        'Ne jamais supprimer l EGR : echec CT garanti et amende possible'
      ],
      warningNote: 'Pas d urgence mecanique mais echec controle technique assure pour emissions NOx elevees. Reparer avant le CT.'
    }`
  },

  // ===== P0401 - Debit EGR insuffisant =====
  P0401: {
    find: "relatedCodes: ['P0400', 'P0402', 'P0403', 'P0404', 'P0405']",
    repair: `,
    repairCosts: {
      minimum: 15,
      average: 160,
      maximum: 550,
      parts: [
        { name: 'Vanne EGR', priceMin: 120, priceMax: 350 },
        { name: 'Joint vanne EGR', priceMin: 5, priceMax: 15 },
        { name: 'Spray nettoyant EGR', priceMin: 10, priceMax: 20 },
        { name: 'Capteur pression differentielle DPFE', priceMin: 40, priceMax: 120 },
        { name: 'Durites depression EGR', priceMin: 10, priceMax: 30 }
      ],
      laborTime: '1h - 3h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '2h - 3h',
        tools: ['Cle a pipe jeu complet', 'Spray nettoyant EGR', 'Brosse laiton', 'Valise OBD2', 'Tournevis']
      },
      tips: [
        'Le nettoyage DIY de la vanne EGR resout le probleme dans 70-80% des cas',
        'Des tutoriels video existent pour la plupart des modeles de vehicules',
        'Toujours remplacer le joint de la vanne EGR lors du remontage (5-15 euros)',
        'Utiliser un additif decalaminant tous les 10 000 km pour prevenir l encrassement'
      ],
      warningNote: 'Pas d urgence mecanique mais refus controle technique assure pour emissions NOx excessives. Reparer avant le CT obligatoirement.'
    }`
  },

  // ===== P0402 - Debit EGR excessif =====
  P0402: {
    find: "relatedCodes: ['P0400', 'P0401', 'P0404']",
    repair: `,
    repairCosts: {
      minimum: 80,
      average: 250,
      maximum: 500,
      parts: [
        { name: 'Vanne EGR', priceMin: 120, priceMax: 350 },
        { name: 'Electrovanne pilotage EGR', priceMin: 25, priceMax: 80 },
        { name: 'Joint vanne EGR', priceMin: 5, priceMax: 15 },
        { name: 'Capteur position EGR', priceMin: 30, priceMax: 90 }
      ],
      laborTime: '1h - 2h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '40-60%',
        timeNeeded: '1h30 - 3h',
        tools: ['Cle a pipe jeu complet', 'Spray nettoyant EGR', 'Multimetre', 'Valise OBD2']
      },
      tips: [
        'Contrairement au P0400/P0401, le nettoyage seul suffit rarement car la vanne est bloquee ouverte',
        'Verifier si l electrovanne de pilotage n est pas HS avant de remplacer la vanne EGR',
        'Un remplacement est souvent necessaire car une vanne bloquee ouverte est mecaniquement HS',
        'Le calage au ralenti est le symptome principal : reparer en urgence si conduite difficile'
      ],
      warningNote: 'Debit EGR excessif provoque calages frequents et ralenti tres instable. Reparation URGENTE sous 1-7 jours si conduite impossible.'
    }`
  },

  // ===== P0403 - Circuit electrovanne EGR =====
  P0403: {
    find: "relatedCodes: ['P0400', 'P0404']",
    repair: `,
    repairCosts: {
      minimum: 25,
      average: 100,
      maximum: 250,
      parts: [
        { name: 'Electrovanne EGR', priceMin: 25, priceMax: 80 },
        { name: 'Connecteur electrovanne', priceMin: 5, priceMax: 15 },
        { name: 'Faisceau cablage reparation', priceMin: 10, priceMax: 30 },
        { name: 'Nettoyant contact electrique', priceMin: 5, priceMax: 12 }
      ],
      laborTime: '30min - 1h30',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '30min - 1h',
        tools: ['Multimetre', 'Cle a pipe', 'Nettoyant contact electrique', 'Valise OBD2']
      },
      tips: [
        'Tester la resistance de l electrovanne au multimetre (20-50 ohms typique)',
        'Nettoyer le connecteur avec du spray contact en premier (gratuit ou 8 euros)',
        'L electrovanne EGR est generalement une piece peu couteuse et facile a remplacer',
        'La vanne peut fonctionner partiellement malgre l electrovanne HS (vacuum residuel)'
      ],
      warningNote: 'Defaut electrique avec impact faible a court terme. Reparation recommandee avant le controle technique. La vanne EGR peut rester partiellement fonctionnelle.'
    }`
  },

  // ===== P0404 - Capteur position vanne EGR =====
  P0404: {
    find: "relatedCodes: ['P0400', 'P0401', 'P0403']",
    repair: `,
    repairCosts: {
      minimum: 40,
      average: 130,
      maximum: 400,
      parts: [
        { name: 'Capteur position EGR', priceMin: 30, priceMax: 90 },
        { name: 'Vanne EGR complete (si capteur integre)', priceMin: 120, priceMax: 350 },
        { name: 'Connecteur capteur', priceMin: 5, priceMax: 15 },
        { name: 'Nettoyant contact electrique', priceMin: 5, priceMax: 12 }
      ],
      laborTime: '30min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '45min - 2h',
        tools: ['Multimetre', 'Cle a pipe', 'Tournevis', 'Valise OBD2']
      },
      tips: [
        'Verifier si le capteur est remplacable separement ou integre a la vanne EGR',
        'Nettoyer la vanne EGR : une vanne grippee peut fausser le signal du capteur',
        'Un capteur seul coute 30-90 euros vs 120-350 euros pour la vanne complete',
        'Tester la resistance variable du capteur pour confirmer le diagnostic'
      ],
      warningNote: 'L ECU ne peut plus piloter la vanne EGR correctement. Fonctionnement degrade mais roulable. Echec CT probable. Reparation sous 1-2 mois.'
    }`
  },
};

let modifiedCount = 0;
let notFoundCodes = [];

for (const [code, data] of Object.entries(repairs)) {
  const findStr = data.find;
  const idx = content.indexOf(findStr);

  if (idx === -1) {
    notFoundCodes.push(code);
    console.log(`NOT FOUND: ${code} - looking for: "${findStr.substring(0, 60)}..."`);
    continue;
  }

  // Check if this code already has repairCosts
  // Look for repairCosts within the next 50 chars after the relatedCodes line
  const afterRelated = content.substring(idx + findStr.length, idx + findStr.length + 100);
  if (afterRelated.includes('repairCosts:')) {
    console.log(`SKIP (already has repairCosts): ${code}`);
    continue;
  }

  // Replace the relatedCodes line with relatedCodes + repairCosts
  content = content.replace(findStr, findStr + data.repair);
  modifiedCount++;
  console.log(`OK: ${code}`);
}

console.log(`\nTotal modified: ${modifiedCount}/33`);
if (notFoundCodes.length > 0) {
  console.log(`Not found: ${notFoundCodes.join(', ')}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('File written successfully.');
