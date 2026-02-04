// Donnees enrichies pour les codes OBD populaires
// Ces donnees completent le fichier obd_codes.json avec des informations detaillees

export interface RepairCostData {
  minimum: number;
  average: number;
  maximum: number;
  parts: { name: string; priceMin: number; priceMax: number }[];
  laborTime: string;
  laborRate: string;
  diy: {
    possible: boolean;
    difficulty: 'Facile' | 'Moyen' | 'Difficile' | 'Expert';
    savings: string;
    timeNeeded: string;
    tools: string[];
  };
  tips: string[];
  warningNote: string;
}

export interface PopularCodeData {
  code: string;
  severity: {
    level: 1 | 2 | 3;
    label: string;
    color: string;
    icon: string;
  };
  symptoms: string[];
  causes: string[];
  solutions: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedCodes: string[];
  introduction: string;
  riskExplanation: string;
  repairCosts?: RepairCostData;
}

export const popularCodesData: Record<string, PopularCodeData> = {
  P0420: {
    code: 'P0420',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0420 signale que l'efficacite du catalyseur est tombee en dessous du seuil acceptable sur le banc 1. Ce defaut est detecte par les sondes lambda situees avant et apres le catalyseur, qui comparent leurs valeurs pour evaluer le rendement de conversion des gaz d'echappement. Quand l'ECU constate que les deux sondes donnent des valeurs trop similaires, cela indique que le catalyseur ne fait plus correctement son travail de depollution. Ce code est tres frequent sur les vehicules de plus de 150 000 km et necessite une attention particuliere avant le controle technique.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Legere perte de performance moteur, surtout lors des accelerations',
      'Augmentation de la consommation de carburant (environ 5-10% supplementaire)',
      'Odeur inhabituelle d\'oeufs pourris ou de soufre a l\'echappement',
      'Bruit metallique anormal provenant du catalyseur (signe de nid d\'abeilles casse)',
      'Temperature elevee sous le vehicule au niveau du catalyseur'
    ],
    causes: [
      'Usure naturelle du catalyseur apres 150 000 - 200 000 km (cause la plus frequente)',
      'Sonde lambda amont ou aval defectueuse donnant des mesures incorrectes',
      'Fuite au niveau du collecteur d\'echappement faussant les mesures',
      'Utilisation prolongee de carburant de mauvaise qualite ou plombe',
      'Passages repetes de rates d\'allumage ayant endommage le catalyseur',
      'Court-circuits ou sur-richesse moteur ayant surchauffe le catalyseur',
      'Additifs pour huile moteur ayant colmate le catalyseur'
    ],
    solutions: [
      'Effectuer un diagnostic OBD complet pour verifier les valeurs des sondes lambda',
      'Tester la resistance et le signal des sondes lambda amont et aval (50-150 euros)',
      'Nettoyer le catalyseur avec un additif specifique si l\'usure est legere (20-40 euros)',
      'Remplacer les sondes lambda si leurs valeurs sont aberrantes (80-200 euros par sonde)',
      'Remplacer le catalyseur si le nid d\'abeilles est colmate ou casse (400-1500 euros)',
      'Verifier et reparer les fuites d\'echappement en amont du catalyseur (50-200 euros)',
      'Faire un controle anti-pollution pour confirmer le bon fonctionnement apres reparation'
    ],
    riskExplanation: "Ne pas reparer un code P0420 entraine systematiquement un refus au controle technique pour pollution excessive. Le vehicule continuera de fonctionner mais consommera plus de carburant et emettra des gaz polluants bien au-dessus des normes. A moyen terme, un catalyseur defaillant peut endommager les sondes lambda et augmenter les couts de reparation. Il est recommande d'intervenir dans les 2-3 mois suivant l'apparition du code pour eviter une contre-visite couteuse.",
    faq: [
      {
        question: 'Puis-je rouler avec un code P0420 sans danger pour le moteur?',
        answer: 'Oui, vous pouvez continuer a rouler normalement car le moteur n\'est pas endommage. Le seul risque immediat est de consommer legerement plus de carburant (5-10% supplementaire) et d\'emettre plus de polluants. Cependant, vous ne passerez pas le controle technique tant que ce code sera present, donc il faut prevoir la reparation avant l\'echeance de votre CT.'
      },
      {
        question: 'Combien coute la reparation d\'un P0420 et combien de temps cela prend?',
        answer: 'Le cout varie enormement selon la cause reelle. Si c\'est juste une sonde lambda defectueuse, comptez 80-200 euros et 1h de main d\'oeuvre. Si le catalyseur doit etre remplace, le cout grimpe entre 400 euros (catalyseur universel) et 1500 euros (catalyseur d\'origine constructeur) avec 2-3h de travail. Avant de remplacer le catalyseur, faites toujours tester les sondes lambda car c\'est souvent la vraie cause du probleme.'
      },
      {
        question: 'Un additif nettoyant catalyseur peut-il vraiment resoudre le P0420?',
        answer: 'Les additifs nettoyants peuvent fonctionner si le catalyseur est legerement encrasse mais pas encore use mecaniquement. Sur un vehicule de moins de 120 000 km, il y a 30-40% de chances que ca fonctionne apres 2-3 pleins traites. Sur un vehicule de plus de 200 000 km avec catalyseur use, l\'additif ne servira a rien. C\'est une solution a 20-40 euros qui vaut la peine d\'essayer avant d\'envisager un remplacement a 400-1500 euros.'
      },
      {
        question: 'Comment savoir si c\'est le catalyseur ou les sondes lambda qui sont en cause?',
        answer: 'Un mecanicien equipe d\'une valise diagnostique peut observer les tensions des sondes lambda en temps reel. La sonde amont doit osciller rapidement entre 0,1V et 0,9V, tandis que la sonde aval doit rester relativement stable autour de 0,45V. Si les deux sondes oscillent de la meme facon, le catalyseur est defaillant. Si la sonde aval est bloquee a 0V ou 5V, c\'est elle qui est morte. Ce diagnostic prend 15-20 minutes et evite de remplacer le catalyseur inutilement.'
      },
      {
        question: 'Le code P0420 peut-il disparaitre tout seul apres effacement?',
        answer: 'Effacer le code avec une valise OBD le fera disparaitre temporairement, mais il reviendra apres 50-100 km si le probleme n\'est pas resolu. L\'ECU a besoin de plusieurs cycles de conduite pour valider le bon fonctionnement du catalyseur. Si le code revient systematiquement, c\'est qu\'il y a bien un probleme reel qui necessite une reparation. N\'essayez pas de passer le controle technique juste apres avoir efface le code, car les testeurs detectent si les autotests ne sont pas complets.'
      }
    ],
    relatedCodes: ['P0421', 'P0430', 'P0431', 'P0171', 'P0174'],
    repairCosts: {
      minimum: 80,
      average: 450,
      maximum: 1500,
      parts: [
        { name: 'Sonde lambda amont', priceMin: 40, priceMax: 120 },
        { name: 'Sonde lambda aval', priceMin: 40, priceMax: 100 },
        { name: 'Catalyseur universel', priceMin: 150, priceMax: 400 },
        { name: 'Catalyseur origine constructeur', priceMin: 500, priceMax: 1200 },
        { name: 'Additif nettoyant catalyseur', priceMin: 15, priceMax: 35 }
      ],
      laborTime: '1h - 3h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Difficile' as const,
        savings: '40-60%',
        timeNeeded: '2h - 4h',
        tools: ['Cle a molette', 'Cle dynamometrique', 'Valise OBD2', 'Degrippant WD-40', 'Pont elevateur recommande']
      },
      tips: [
        'Essayer un additif nettoyant catalyseur avant remplacement (20-35 euros)',
        'Faire tester les sondes lambda en premier (souvent la vraie cause)',
        'Comparer les prix entre garage independant et centre auto',
        'Verifier si le catalyseur est encore sous garantie constructeur (souvent 5 ans)'
      ],
      warningNote: 'Ne remplacez jamais le catalyseur sans avoir fait tester les sondes lambda au prealable. Dans 30-40% des cas, une sonde defectueuse est la vraie cause du code P0420, ce qui evite une depense de 400-1500 euros.'
    }
  },
  P0300: {
    code: 'P0300',
    severity: { level: 3, label: 'Modere a Grave', color: 'danger', icon: '🔴' },
    introduction: "Le code P0300 indique des rates d'allumage aleatoires detectes sur plusieurs cylindres du moteur. Contrairement aux codes P0301-P0308 qui ciblent un cylindre precis, le P0300 signale un probleme diffus affectant l'ensemble de la combustion. Ces rates se produisent quand le melange air-carburant ne s'enflamme pas correctement, entrainant des a-coups moteur et une perte de puissance. Si le voyant moteur clignote au lieu de rester fixe, c'est un signal d'urgence indiquant que les rates sont si severes qu'ils risquent d'endommager le catalyseur en le surchauffant avec du carburant imbrue.",
    symptoms: [
      'Voyant moteur clignotant rapidement (cas d\'urgence necessitant arret immediat)',
      'Voyant moteur fixe orange (rates moderees, intervention rapide recommandee)',
      'Ralenti tres instable avec tremblements et vibrations dans l\'habitacle',
      'Perte de puissance notable surtout lors des accelerations et en cote',
      'A-coups et secousses a l\'acceleration ou vitesse constante',
      'Consommation de carburant augmentee de 15-30%',
      'Odeur forte de carburant imbrue a l\'echappement'
    ],
    causes: [
      'Bougies d\'allumage usees ou encrassees (cause la plus frequente, 40% des cas)',
      'Bobines d\'allumage defaillantes ne delivrant plus assez de tension',
      'Cables de bougies abimes avec fuites de courant vers la masse',
      'Injecteurs encrasses ou defaillants delivrant mal le carburant',
      'Compression faible due a des segments ou soupapes uses',
      'Melange air-carburant incorrect (trop pauvre ou trop riche)',
      'Probleme d\'allumage electronique ou de calage distribution'
    ],
    solutions: [
      'Verifier et remplacer les bougies d\'allumage si plus de 60 000 km (40-120 euros kit complet)',
      'Tester les bobines d\'allumage une par une avec un multimetre (100-300 euros si remplacement)',
      'Controler l\'etat et la resistance des cables de bougies (30-80 euros le jeu)',
      'Effectuer un nettoyage complet des injecteurs avec additif ou ultrasons (80-200 euros)',
      'Mesurer la compression de chaque cylindre pour detecter une usure interne (diagnostic 50-100 euros)',
      'Verifier le debit d\'air et l\'etancheite du circuit d\'admission',
      'Faire un diagnostic approfondi avec valise OBD pour identifier le cylindre le plus touche'
    ],
    riskExplanation: "Les rates d'allumage sont un probleme a traiter en urgence. Si le voyant clignote, arreter le vehicule immediatement car le catalyseur est en train de surchauffer dangereusement et peut fondre (reparation 800-2000 euros). Meme avec voyant fixe, continuer a rouler avec des rates endommage progressivement le catalyseur, les sondes lambda et peut meme deteriorer le moteur si la compression est en cause. Delai maximum recommande: 1 semaine pour diagnostic et reparation. Ne jamais ignorer un P0300.",
    faq: [
      {
        question: 'Quelle est la difference entre voyant moteur fixe et clignotant pour un P0300?',
        answer: 'Un voyant fixe indique des rates d\'allumage moderees qui necessitent une reparation rapide mais permettent de continuer a rouler prudemment jusqu\'au garage. Un voyant clignotant signale des rates severes qui endommagent activement le catalyseur a chaque instant: il faut s\'arreter immediatement et faire remorquer le vehicule. Le clignotement est un signal d\'urgence absolue. En general, le seuil est depasse quand plus de 10-15% des combustions ratent.'
      },
      {
        question: 'Combien coute la reparation d\'un code P0300 en moyenne?',
        answer: 'Le cout varie enormement selon la cause. Dans 40% des cas, c\'est juste les bougies usees: 40-120 euros de pieces plus 30-60 euros de main d\'oeuvre. Si ce sont les bobines: 100-300 euros par bobine defectueuse. Pour un nettoyage d\'injecteurs complet: 150-250 euros. Dans le pire des cas (compression faible necessitant refection moteur): plusieurs milliers d\'euros. Avant toute reparation couteuse, commencer par remplacer les bougies et tester les bobines, ca resout 70% des P0300.'
      },
      {
        question: 'Peut-on diagnostiquer soi-meme la cause d\'un P0300?',
        answer: 'Oui partiellement. Commencez par demonter et inspecter les bougies: si elles sont noires ou ont plus de 60 000 km, c\'est probablement la cause. Verifiez ensuite les cables de bougies (pas de fissures ni traces noires). Avec un multimetre basique, vous pouvez tester la resistance des bobines (doit etre conforme aux specs constructeur, souvent 0,5-2 ohms). Si tout ca est OK, il faut une valise OBD pour aller plus loin et identifier precisement quels cylindres ratent le plus.'
      },
      {
        question: 'Le P0300 peut-il etre cause par du mauvais carburant?',
        answer: 'Oui absolument. Un carburant de mauvaise qualite, contamine par de l\'eau ou avec un indice d\'octane trop faible peut provoquer des rates d\'allumage. Si le P0300 apparait juste apres un plein dans une station inhabituelle, essayez d\'abord de diluer le mauvais carburant en refaisant un plein dans une station de confiance et en ajoutant un additif nettoyant. Dans 20-30% des cas, le code disparait apres 100-150 km avec du bon carburant. Si ca persiste, le probleme est mecanique.'
      },
      {
        question: 'Faut-il absolument faire remorquer le vehicule si le voyant clignote?',
        answer: 'Oui, c\'est tres fortement recommande. Continuer a rouler avec un voyant clignotant fait fondre l\'interieur du catalyseur (nid d\'abeilles ceramique) en quelques kilometres a peine. Un catalyseur neuf coute 400-2000 euros selon le modele. Si vous devez absolument bouger le vehicule sans remorquage, roulez au ralenti sur moins de 500 metres et evitez absolument toute acceleration. Mais honnetement, le remorquage (80-150 euros) est bien moins cher qu\'un catalyseur detruit.'
      }
    ],
    relatedCodes: ['P0301', 'P0302', 'P0303', 'P0304', 'P0305', 'P0306', 'P0420'],
    repairCosts: {
      minimum: 40,
      average: 200,
      maximum: 800,
      parts: [
        { name: 'Jeu de bougies d\'allumage (4 cyl)', priceMin: 20, priceMax: 80 },
        { name: 'Bobine d\'allumage individuelle', priceMin: 30, priceMax: 120 },
        { name: 'Cables de bougies (jeu complet)', priceMin: 25, priceMax: 70 },
        { name: 'Injecteur (unite)', priceMin: 60, priceMax: 200 },
        { name: 'Kit nettoyant injecteurs', priceMin: 10, priceMax: 25 }
      ],
      laborTime: '30min - 2h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Moyen' as const,
        savings: '50-70%',
        timeNeeded: '1h - 2h',
        tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Jauge d\'epaisseur', 'Cle dynamometrique']
      },
      tips: [
        'Commencer par remplacer les bougies (resolution dans 40% des cas pour 20-80 euros)',
        'Permuter les bobines entre cylindres pour identifier la bobine defectueuse',
        'Utiliser un additif nettoyant injecteurs avant de les remplacer (10-25 euros)',
        'Toujours remplacer toutes les bougies en meme temps pour un allumage homogene'
      ],
      warningNote: 'Si le voyant moteur CLIGNOTE, arretez le vehicule immediatement. Les rates severes detruisent le catalyseur en quelques minutes, entrainant une reparation a 400-2000 euros. Un remorquage a 80-150 euros coute bien moins cher.'
    }
  },
  P0171: {
    code: 'P0171',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0171 signale un melange air-carburant trop pauvre sur le banc 1 du moteur (cote gauche ou tous les cylindres sur un moteur en ligne). L'ECU detecte que malgre ses corrections, il y a trop d'air ou pas assez de carburant dans la combustion. Le calculateur essaie de compenser en injectant plus de carburant (enrichissement), mais quand cette correction depasse 25-30%, il enregistre le defaut P0171. Ce code est tres courant et peut avoir de nombreuses causes, allant d'une simple fuite d'air a un debitmetre d'air massique (MAF) defaillant. Un diagnostic methodique est essentiel pour identifier la vraie source du probleme.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Ralenti instable ou irregulier, parfois le moteur cale au ralenti',
      'Hesitations et manque de reprise lors des accelerations',
      'Difficultes au demarrage a froid, besoin de plusieurs tentatives',
      'Consommation de carburant legerement augmentee',
      'Odeur inhabituelle a l\'echappement (melange pauvre)',
      'Perte de puissance legere mais perceptible en charge'
    ],
    causes: [
      'Fuite d\'air apres le debitmetre (durites fendues, colliers desserres) - 30% des cas',
      'Debitmetre d\'air massique (MAF) encrasse ou defaillant - 25% des cas',
      'Sonde lambda amont donnant des valeurs incorrectes - 15% des cas',
      'Pression de carburant insuffisante (pompe faible, filtre bouche, regulateur HS)',
      'Injecteurs partiellement bouches ne delivrant pas assez de carburant',
      'Vanne PCV (reniflard carter) bloquee provoquant une fuite d\'air parasite',
      'Prise d\'air au niveau du collecteur d\'admission ou des joints de culasse'
    ],
    solutions: [
      'Inspecter visuellement toutes les durites apres le MAF pour detecter fissures et fuites',
      'Nettoyer le debitmetre MAF avec spray specifique MAF cleaner (10-15 euros)',
      'Tester la pression de carburant avec manometre (doit etre 3-4 bars selon modele)',
      'Remplacer le filtre a carburant s\'il a plus de 60 000 km (20-50 euros)',
      'Verifier et nettoyer la vanne PCV et les durites de depression (15-40 euros)',
      'Tester la sonde lambda avec valise OBD pour verifier ses oscillations',
      'Faire un test fumigene pour localiser precisement les prises d\'air (diagnostic pro 50-80 euros)'
    ],
    riskExplanation: "Rouler avec un melange trop pauvre n'endommage generalement pas le moteur a court terme, mais provoque une combustion trop chaude qui peut a la longue abimer les soupapes et les segments. Le plus gros risque est une usure prematuree du catalyseur soumis a des temperatures excessives. La consommation peut aussi augmenter car l'ECU enrichit en permanence pour compenser. Il est recommande de diagnostiquer et reparer dans les 2-4 semaines pour eviter des dommages couteux au systeme d'echappement.",
    faq: [
      {
        question: 'Le debitmetre MAF est-il vraiment la cause la plus frequente du P0171?',
        answer: 'Le MAF est effectivement une cause tres frequente (environ 25% des cas) mais pas la premiere. Dans 30% des cas, c\'est plutot une simple fuite d\'air dans une durite apres le debitmetre. Avant de remplacer le MAF (150-400 euros), commencez toujours par inspecter toutes les durites, colliers et connexions. Ensuite, nettoyez le MAF avec un spray specifique a 10-15 euros. Si le probleme persiste apres ca, alors oui le MAF est probablement HS et merite d\'etre remplace.'
      },
      {
        question: 'Comment localiser une fuite d\'air qui cause un P0171?',
        answer: 'Plusieurs methodes existent. La plus simple: au ralenti moteur tournant, vaporisez du liquide de frein ou du WD-40 autour des durites et connexions apres le MAF. Si le ralenti change brusquement, vous avez trouve la fuite. Methode pro: test fumigene en injectant de la fumee dans le circuit d\'admission, les fuites deviennent visibles (garage facture 50-80 euros). Vous pouvez aussi ecouter attentivement au ralenti avec un stethoscope automobile pour detecter un sifflement caracteristique.'
      },
      {
        question: 'Peut-on continuer a rouler normalement avec un code P0171?',
        answer: 'Oui, vous pouvez continuer a rouler sans danger immediat pour le moteur. Le P0171 n\'est pas un code d\'urgence comme le P0300. Cependant, le vehicule peut avoir des hesitations desagreables, une legere perte de puissance et une consommation legerement augmentee. Sur le long terme (plusieurs mois), le catalyseur risque d\'etre endommage par des temperatures trop elevees. Planifiez une reparation dans les 2-4 semaines pour eviter des complications.'
      },
      {
        question: 'Quel est le cout moyen pour reparer un P0171?',
        answer: 'Le cout varie enormement selon la cause. Si c\'est juste une durite fendue: 10-30 euros de piece. Nettoyage MAF: 10-15 euros de spray plus 30 min de temps. Remplacement MAF: 150-400 euros selon la marque. Filtre a carburant: 20-50 euros plus main d\'oeuvre. Pompe a carburant: 200-600 euros installation comprise. Commencez toujours par les verifications gratuites ou peu couteuses (inspection visuelle, nettoyage MAF) avant d\'envisager des pieces cheres. Dans 40-50% des cas, la reparation coute moins de 50 euros.'
      },
      {
        question: 'Le P0171 peut-il venir d\'un filtre a air encrasse?',
        answer: 'Non, un filtre a air tres sale provoque plutot un melange RICHE (P0172) car il reduit le debit d\'air. Le P0171 signale trop d\'air ou pas assez de carburant, donc c\'est l\'inverse. Neanmoins, verifiez quand meme votre filtre a air car un filtre en bon etat facilite le diagnostic en eliminant une variable. Si votre filtre a plus de 30 000 km ou est visiblement sale, remplacez-le (15-40 euros), mais ne vous attendez pas a ce que ca resolue un P0171.'
      }
    ],
    relatedCodes: ['P0172', 'P0174', 'P0175', 'P0100', 'P0101']
  },
  P0401: {
    code: 'P0401',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0401 indique un debit insuffisant du systeme EGR (Exhaust Gas Recirculation - Recirculation des Gaz d'Echappement). L'EGR fait recirculer une partie des gaz d'echappement dans l'admission pour reduire les temperatures de combustion et donc les emissions d'oxydes d'azote (NOx). Quand l'ECU detecte que le debit d'EGR est inferieur a ce qui est attendu, il enregistre le P0401. Ce defaut est tres frequent sur les moteurs diesel et essence modernes, generalement cause par l'encrassement de la vanne EGR ou des conduits par la suie et les residus de combustion. Bien que n'affectant pas directement les performances moteur, ce code necessite une intervention avant le controle technique.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Legere perte de performance a bas regime (rare)',
      'Ralenti legerement instable a froid (sur certains modeles)',
      'Consommation de carburant tres legerement augmentee (1-2%)',
      'Aucun symptome notable dans la majorite des cas',
      'Fumee noire a l\'echappement si l\'EGR est completement bloquee (diesel)'
    ],
    causes: [
      'Vanne EGR completement encrassee par la suie et les depots carbones (60% des cas)',
      'Conduits et passages EGR obstrus par accumulation de residus',
      'Capteur de position de vanne EGR defectueux donnant de fausses mesures',
      'Capteur de pression differentielle EGR (DPFE) HS',
      'Fuite de vide dans le systeme de commande de l\'EGR (moteurs a depression)',
      'Electrovannes de pilotage EGR bloquees ou defaillantes',
      'Clapet ou papillon EGR grippe en position fermee'
    ],
    solutions: [
      'Demonter et nettoyer la vanne EGR avec nettoyant frein ou four (gratuit si DIY, 80-150 euros au garage)',
      'Nettoyer les conduits et le collecteur d\'admission avec produit decalaminant (100-200 euros)',
      'Remplacer la vanne EGR si le nettoyage ne suffit pas (150-500 euros selon modele)',
      'Tester et remplacer le capteur de position ou de pression EGR si necessaire (50-120 euros)',
      'Verifier les durites de depression et reparer les fuites eventuelles',
      'Effectuer un decalaminage moteur complet pour prevention (300-600 euros)',
      'Utiliser regulierement un additif decalaminant dans le carburant (prevention 15-30 euros)'
    ],
    riskExplanation: "Le code P0401 n'est pas une urgence mecanique et n'endommage pas le moteur a court ou moyen terme. Le principal risque est de ne pas passer le controle technique car les emissions de NOx seront trop elevees. Sur le long terme, un systeme EGR non fonctionnel peut entrainer des temperatures de combustion plus elevees, augmentant legerement l'usure moteur et la consommation. Il est recommande de reparer dans les 2-3 mois, obligatoirement avant le prochain controle technique.",
    faq: [
      {
        question: 'Peut-on nettoyer soi-meme la vanne EGR pour economiser?',
        answer: 'Oui absolument, c\'est une operation accessible a un bricoleur moyen. Comptez 2-3h de travail. Il faut demonter la vanne EGR (souvent 2-4 boulons), la tremper dans du nettoyant frein ou decapant four pendant 1-2h, puis brosser energiquement. Attention aux joints qui doivent etre remplaces (5-15 euros). Le nettoyage DIY coute moins de 20 euros contre 80-150 euros au garage. Des tutos video detailles existent pour la plupart des modeles. La seule difficulte est l\'acces parfois complique sur certains moteurs.'
      },
      {
        question: 'Combien de temps peut-on rouler avec un P0401 sans risque?',
        answer: 'Vous pouvez rouler indefiniment avec un P0401 sans endommager le moteur. Ce code n\'affecte quasiment pas les performances ni la fiabilite mecanique. Le seul delai imperatif est celui du controle technique: vous devez absolument reparer avant le CT car les emissions de NOx depasseront les normes et entraineront un refus automatique. Si votre CT est dans 6 mois, vous avez le temps de planifier sereinement la reparation. Si c\'est dans 1 mois, il faut s\'en occuper rapidement.'
      },
      {
        question: 'Faut-il remplacer la vanne EGR ou suffit-il de la nettoyer?',
        answer: 'Dans 70-80% des cas, un bon nettoyage suffit amplement et resout definitivement le P0401. La vanne EGR ne s\'use pas vraiment, elle s\'encrasse juste progressivement. Tentez toujours le nettoyage d\'abord (gratuit si DIY, 80-150 euros au garage). Si le code revient apres 500-1000 km, alors la vanne est peut-etre mecaniquement grippee ou le capteur est mort, et la un remplacement devient necessaire (150-500 euros). Ne remplacez jamais sans avoir essaye le nettoyage d\'abord.'
      },
      {
        question: 'Les additifs decalaminants peuvent-ils resoudre un P0401?',
        answer: 'Les additifs decalaminants (type Bardahl, Wynn\'s, etc.) peuvent aider sur un encrassement leger, mais ne resolvent generalement pas un P0401 deja declare. Ils sont plus efficaces en prevention pour eviter l\'encrassement de l\'EGR. Si vous avez deja le code, il faut un nettoyage mecanique. Cependant, apres avoir nettoye la vanne, utiliser regulierement ces additifs (tous les 10 000 km) peut prolonger significativement la duree avant le prochain encrassement. Cout: 15-30 euros par traitement.'
      },
      {
        question: 'Le P0401 est-il plus frequent sur diesel ou essence?',
        answer: 'Le P0401 est beaucoup plus frequent sur les moteurs diesel, surtout les modeles sans FAP ou avec trajets courts. Les diesels produisent plus de suie qui encrasse rapidement l\'EGR. Sur essence, le probleme existe aussi mais se manifeste generalement apres 150 000-200 000 km. Sur diesel, c\'est souvent des 80 000-120 000 km, voire moins si utilisation urbaine predominante. Les diesels recents avec FAP sont encore plus touches car le systeme EGR est tres sollicite.'
      }
    ],
    relatedCodes: ['P0400', 'P0402', 'P0403', 'P0404', 'P0405']
  },
  P0100: {
    code: 'P0100',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0100 indique un dysfonctionnement general du circuit du debitmetre d'air massique (MAF - Mass Air Flow). Le MAF est un capteur crucial qui mesure la quantite d'air entrant dans le moteur pour permettre a l'ECU de calculer la quantite de carburant a injecter. Quand ce capteur tombe en panne ou fournit des valeurs aberrantes, l'ECU ne peut plus determiner le bon rapport air-carburant, ce qui affecte directement les performances et la consommation du moteur. Ce code est different du P0101 qui indique une plage de mesure incorrecte - le P0100 signale plutot un probleme electrique ou une panne totale du capteur.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Demarrage difficile, besoin de plusieurs tentatives surtout a froid',
      'Ralenti tres instable, moteur qui broute ou cale',
      'Forte perte de puissance lors des accelerations',
      'Consommation de carburant tres elevee (augmentation de 20-40%)',
      'Fumee noire a l\'echappement due au melange trop riche',
      'Mode degrade active, limitation de la vitesse maximale'
    ],
    causes: [
      'Capteur MAF completement defaillant ou en court-circuit (40% des cas)',
      'Connecteur electrique du MAF oxyde, corrodé ou debranche',
      'Fil electrique coupe ou endommage dans le faisceau du MAF',
      'Court-circuit a la masse dans le cablage du capteur',
      'Probleme d\'alimentation electrique du capteur (5V de reference)',
      'ECU defaillant ne recevant plus le signal du MAF (rare)',
      'Eau ou huile ayant penetre dans le boitier du capteur MAF'
    ],
    solutions: [
      'Verifier le connecteur du MAF: nettoyer contacts, verifier absence d\'oxydation (gratuit)',
      'Tester la continuite des fils avec multimetre entre MAF et ECU (diagnostic DIY)',
      'Mesurer la tension d\'alimentation du MAF: doit etre 5V moteur contact (diagnostic)',
      'Nettoyer le fil chaud du MAF avec spray MAF cleaner specifique (10-15 euros)',
      'Remplacer le capteur MAF si test de resistance hors specifications (120-400 euros)',
      'Verifier l\'absence d\'entree d\'air parasite apres le MAF',
      'Controler que le filtre a air n\'est pas encrasse ou huile (10-40 euros si remplacement)'
    ],
    riskExplanation: "Rouler avec un MAF defaillant force l'ECU a fonctionner en mode degrade avec des valeurs preprogrammees approximatives. Le melange sera trop riche, causant une surconsommation importante et un encrassement rapide des bougies, injecteurs et catalyseur. Le catalyseur peut etre endommage en quelques semaines par l'exces de carburant imbrue. De plus, le mode degrade limite souvent la puissance et la vitesse maximale pour protection moteur. Reparation recommandee sous 1 semaine maximum.",
    faq: [
      {
        question: 'Comment tester si mon capteur MAF est completement mort?',
        answer: 'Demarrez le moteur et debranchez doucement le connecteur du MAF pendant que le moteur tourne. Si le moteur ne change absolument pas de comportement (ralenti identique, aucune reaction), c\'est que le MAF etait deja hors service et l\'ECU fonctionnait deja en mode degrade. Si au contraire le moteur cale ou change nettement de regime, c\'est que le MAF fonctionne encore partiellement. Vous pouvez aussi mesurer la tension de sortie du MAF avec un multimetre: elle doit varier entre 0,5V et 4,5V selon le regime moteur.'
      },
      {
        question: 'Un nettoyage du MAF peut-il resoudre un code P0100?',
        answer: 'Le P0100 indique generalement un probleme electrique ou une panne totale plutot qu\'un simple encrassement. Un nettoyage ne coutant que 10-15 euros, ca vaut toujours le coup d\'essayer, mais les chances de succes sont faibles (10-20% maximum). Le P0100 necessite souvent le remplacement du capteur. En revanche, si vous aviez un P0101 (plage incorrecte), la le nettoyage reussirait dans 60-70% des cas. Verifiez d\'abord le connecteur et le cablage avant d\'acheter un nouveau MAF.'
      },
      {
        question: 'Combien coute le remplacement d\'un capteur MAF?',
        answer: 'Le prix varie enormement selon la marque et le modele. Piece d\'origine constructeur: 200-400 euros. Equivalent de qualite (Bosch, Siemens): 120-250 euros. Generique pas cher: 40-80 euros mais qualite aleatoire. Main d\'oeuvre: 30-60 euros pour 20-30 minutes de travail car c\'est tres facile a remplacer (2 vis et 1 connecteur). Total garage: 150-450 euros selon les choix. En DIY avec piece de qualite moyenne: 120-200 euros. Attention aux MAF trop bon marche qui peuvent tomber en panne apres quelques mois.'
      },
      {
        question: 'Peut-on rouler longtemps sans MAF fonctionnel?',
        answer: 'Techniquement oui, l\'ECU passera en mode degrade et utilisera des valeurs fixes basees sur la position du papillon et le regime moteur. Mais c\'est tres deconseille car la surconsommation peut atteindre 30-40%, le catalyseur s\'encrasse rapidement, et les performances sont tres degradees. Certains vehicules limitent meme la vitesse a 90-100 km/h en mode degrade. Vous pouvez rouler quelques jours le temps de commander la piece, mais pas des semaines ou des mois. Le catalyseur couterait bien plus cher a remplacer (400-1500 euros).'
      },
      {
        question: 'Pourquoi mon MAF est-il tombe en panne prematurément?',
        answer: 'Les causes principales de panne prematuree sont: filtre a air de mauvaise qualite laissant passer de la poussiere qui abime le fil chaud, filtre a air huile (type KN) dont l\'huile contamine le capteur, entree d\'eau dans l\'admission lors de franchissement de gues, vapeurs d\'huile excessives dues a un reniflard PCV bouche, ou simplement un MAF generique de mauvaise qualite. Pour prolonger la vie du MAF: utilisez toujours un filtre a air de qualite, changez-le regulierement (tous les 30 000 km), evitez les filtres huiles, et reparez rapidement toute fuite d\'huile moteur.'
      }
    ],
    relatedCodes: ['P0101', 'P0102', 'P0103', 'P0104', 'P0171', 'P0174'],
    repairCosts: {
      minimum: 15,
      average: 180,
      maximum: 450,
      parts: [
        { name: 'Spray nettoyant MAF', priceMin: 8, priceMax: 15 },
        { name: 'Debitmetre MAF neuf (adaptable)', priceMin: 60, priceMax: 200 },
        { name: 'Debitmetre MAF neuf (origine)', priceMin: 150, priceMax: 400 },
        { name: 'Connecteur MAF (si endommage)', priceMin: 15, priceMax: 40 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '20min - 45min',
        tools: ['Tournevis Torx T20/T25', 'Spray nettoyant MAF specifique', 'Valise OBD2', 'Multimetre']
      },
      tips: [
        'Toujours essayer le nettoyage du MAF avant remplacement (8-15 euros, succes dans 40% des cas)',
        'Ne JAMAIS toucher le fil chaud du MAF avec les doigts ou un chiffon',
        'Utiliser uniquement du spray nettoyant MAF specifique (pas de WD-40 ni nettoyant frein)',
        'Verifier l\'etat du filtre a air en meme temps (un filtre sale encrasse le MAF)'
      ],
      warningNote: 'Le nettoyage du MAF avec un produit inadapte (WD-40, nettoyant frein, acetone) detruit definitivement le capteur. Utilisez exclusivement un spray nettoyant MAF specifique (CRC MAF Cleaner, Wurth). Cout du spray: 8-15 euros vs 60-400 euros pour un MAF neuf.'
    }
  },
  P0101: {
    code: 'P0101',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0101 signale que le debitmetre d'air massique (MAF) fournit des valeurs en dehors de la plage attendue par l'ECU. Contrairement au P0100 qui indique une panne totale du circuit, le P0101 signifie que le capteur fonctionne encore mais donne des mesures incorrectes ou incoherentes avec les autres parametres moteur (regime, position papillon, temperature). C'est l'un des codes les plus frequents sur les vehicules de plus de 100 000 km. Le MAF encrasse progressivement son fil chaud avec la poussiere et les residus, faussant ses mesures jusqu'a depasser les seuils de tolerance de l'ECU.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Hesitations lors des accelerations, manque de reprise',
      'Ralenti instable ou irregulier, parfois trop eleve (1200-1500 rpm)',
      'Consommation de carburant augmentee de 10-25%',
      'Legere perte de puissance surtout a haut regime',
      'Demarrage parfois difficile necessitant plusieurs essais',
      'Fumee noire legere a l\'echappement si melange trop riche'
    ],
    causes: [
      'Fil chaud du MAF encrasse par poussiere et residus d\'huile (60% des cas)',
      'Filtre a air de mauvaise qualite laissant passer trop de particules',
      'Filtre a air sature ou endommage permettant entree de salete',
      'Fuite d\'air en aval du MAF faussant les mesures',
      'MAF vieillissant donnant des valeurs derivees (apres 150 000 km)',
      'Modification du systeme d\'admission non recalibree',
      'Filtre a air huile dont l\'huile a contamine le fil du MAF'
    ],
    solutions: [
      'Nettoyer le fil chaud du MAF avec spray MAF cleaner specifique (10-15 euros) - succes dans 60-70% des cas',
      'Remplacer le filtre a air s\'il a plus de 30 000 km ou est encrasse (15-40 euros)',
      'Inspecter durites et colliers en aval du MAF pour detecter fuites d\'air',
      'Effacer le code et faire un essai routier de 50 km pour voir si code revient',
      'Remplacer le capteur MAF si nettoyage inefficace apres 100 km (120-400 euros)',
      'Verifier absence d\'huile sur filtre a air (passer a filtre papier standard)',
      'Faire recalibrer l\'ECU apres remplacement du MAF pour apprentissage optimal'
    ],
    riskExplanation: "Le P0101 n'est pas une urgence immediate mais ne doit pas etre ignore. Un MAF donnant de mauvaises valeurs fait fonctionner le moteur avec un melange incorrect, augmentant la consommation et polluant davantage. Sur le long terme (quelques mois), cela peut encrasser les injecteurs, les bougies et endommager le catalyseur. L'ECU peut aussi basculer progressivement en mode degrade. Un simple nettoyage a 15 euros resout souvent le probleme, donc intervention recommandee sous 2-3 semaines.",
    faq: [
      {
        question: 'Le nettoyage du MAF fonctionne-t-il vraiment pour un P0101?',
        answer: 'Oui, le nettoyage au spray MAF cleaner resout le P0101 dans environ 60-70% des cas, surtout si le vehicule a entre 80 000 et 150 000 km. L\'operation prend 15 minutes: demonter le MAF (2 vis), vaporiser le spray sur le fil chaud sans frotter, laisser secher 10 minutes, remonter. Important: utilisez uniquement du spray MAF cleaner specifique, jamais de nettoyant frein ou carbu qui detruiraient le capteur. Si le code revient apres 100-150 km, c\'est que le MAF est trop use et doit etre remplace.'
      },
      {
        question: 'Quelle est la difference entre P0100 et P0101?',
        answer: 'Le P0100 indique un probleme electrique ou une panne complete du circuit MAF (pas de signal, court-circuit, connecteur debranche). Le P0101 signale que le capteur fonctionne et envoie un signal, mais que les valeurs sont en dehors de la plage normale. En gros: P0100 = MAF mort ou debranche, P0101 = MAF vivant mais qui mesure mal. Le P0101 se resout souvent par nettoyage (10-15 euros), le P0100 necessite presque toujours un remplacement (120-400 euros) ou reparation cablage.'
      },
      {
        question: 'Mon filtre a air KN huile peut-il causer un P0101?',
        answer: 'Oui absolument, c\'est meme une cause tres frequente. L\'huile du filtre KN (ou autre marque similaire) peut migrer vers le fil chaud du MAF et le contaminer, faussant completement ses mesures. Si vous utilisez un filtre huile et avez un P0101, c\'est probablement la cause. Solution: repassez a un filtre papier standard, nettoyez soigneusement le MAF au spray specifique, et le code devrait disparaitre. Les filtres huiles sont performants mais incompatibles avec les MAF modernes a fil chaud fragile.'
      },
      {
        question: 'Faut-il effacer le code P0101 apres nettoyage du MAF?',
        answer: 'Oui, c\'est fortement recommande. Apres avoir nettoye le MAF et remis le filtre a air propre, effacez le code avec une valise OBD. Ensuite faites un trajet d\'au moins 30-50 km melangeant ville, route et autoroute pour permettre a l\'ECU de reapprendre les nouvelles valeurs correctes du MAF. Si le code ne revient pas apres 100-150 km, c\'est gagne. S\'il revient apres 20-30 km, c\'est que le nettoyage n\'a pas suffi et le MAF doit etre remplace.'
      },
      {
        question: 'Combien de temps dure un debitmetre MAF en general?',
        answer: 'Un MAF de qualite dure generalement 150 000-250 000 km s\'il est bien entretenu (changements reguliers de filtre a air). Sur vehicules essence, ca peut aller jusqu\'a 300 000 km. Les MAF generiques bas de gamme tombent parfois en panne des 60 000-80 000 km. Pour prolonger sa vie: changez le filtre a air tous les 30 000 km maximum, n\'utilisez jamais de filtre huile, evitez de rouler sur chemins poussiéreux sans filtre adapte, et nettoyez preventiveme nt le MAF tous les 80 000-100 000 km.'
      }
    ],
    relatedCodes: ['P0100', 'P0102', 'P0103', 'P0104', 'P0171', 'P0174'],
    repairCosts: {
      minimum: 15,
      average: 200,
      maximum: 450,
      parts: [
        { name: 'Spray nettoyant MAF', priceMin: 8, priceMax: 15 },
        { name: 'Filtre a air moteur', priceMin: 10, priceMax: 30 },
        { name: 'Debitmetre MAF neuf (adaptable)', priceMin: 60, priceMax: 200 },
        { name: 'Debitmetre MAF neuf (origine)', priceMin: 150, priceMax: 400 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '20min - 45min',
        tools: ['Tournevis Torx T20/T25', 'Spray nettoyant MAF', 'Valise OBD2', 'Multimetre']
      },
      tips: [
        'Verifier les prises d\'air (durites fissures) qui faussent la mesure du MAF',
        'Un filtre a air sale est souvent la cause cachee du P0101 (10-30 euros)',
        'Nettoyer le MAF avec spray specifique avant de le remplacer',
        'Comparer les valeurs MAF en temps reel avec la valise OBD (debit g/s a comparer aux specs constructeur)'
      ],
      warningNote: 'Le P0101 indique une plage de mesure incorrecte, pas forcement un MAF defectueux. Dans 30% des cas, une fuite d\'air apres le MAF ou un filtre a air colmate sont la vraie cause. Diagnostiquez ces elements avant de commander un MAF neuf a 60-400 euros.'
    }
  },
  P0102: {
    code: 'P0102',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0102 indique que le signal du debitmetre d'air massique (MAF) est anormalement bas, en dessous du seuil minimum attendu par l'ECU. Ce code signifie que le capteur MAF rapporte un debit d'air bien inferieur a ce qui est physiquement possible compte tenu du regime moteur et de la position du papillon. Cela peut etre du a un capteur defaillant donnant des valeurs trop faibles, un probleme electrique avec la tension d'alimentation, ou plus rarement un probleme mecanique bloquant reellement le flux d'air. L'ECU interprete ce signal bas comme un debit d'air insuffisant et reduit l'injection de carburant en consequence, creant un melange trop pauvre.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Demarrage tres difficile, plusieurs tentatives necessaires',
      'Ralenti tres instable pouvant entrainer le calage du moteur',
      'Forte perte de puissance, vehicule ne depasse pas 3000 rpm',
      'Hesitations severes lors des accelerations',
      'Mode degrade souvent active avec limitation de regime',
      'Consommation parfois reduite mais performances tres degradees'
    ],
    causes: [
      'Capteur MAF defaillant donnant un signal anormalement faible (50% des cas)',
      'Tension d\'alimentation du MAF insuffisante (probleme circuit 5V)',
      'Connecteur MAF oxyde ou mal enfiche causant une resistance electrique',
      'Fil de signal MAF endommage ou en mauvais contact',
      'Court-circuit partiel a la masse sur le circuit du MAF',
      'Obstruction physique dans le conduit d\'admission bloquant l\'air',
      'Filtre a air completement bouche empechant passage d\'air (rare mais possible)'
    ],
    solutions: [
      'Verifier la tension d\'alimentation du MAF avec multimetre: doit etre 5V constant (diagnostic)',
      'Inspecter et nettoyer le connecteur du MAF, verifier bon enclenchement',
      'Tester la continuite du fil de signal entre MAF et ECU',
      'Nettoyer le capteur MAF au spray specifique (10-15 euros) - peu de chances mais essayer',
      'Remplacer le capteur MAF s\'il est defectueux (120-400 euros)',
      'Verifier l\'absence d\'obstruction dans le conduit d\'admission',
      'Remplacer le filtre a air s\'il est completement sature (15-40 euros)'
    ],
    riskExplanation: "Le P0102 cree un melange trop pauvre qui peut endommager le moteur s'il n'est pas repare rapidement. La combustion trop chaude peut abimer soupapes, pistons et segments en quelques semaines. Le vehicule est difficilement utilisable avec des performances tres degradees et risque de caler frequemment. Le mode degrade est souvent active, limitant severement la vitesse et la puissance. Intervention urgente recommandee sous 2-3 jours maximum pour eviter dommages moteur et usage impossible du vehicule.",
    faq: [
      {
        question: 'Quelle est la difference entre P0102 (signal bas) et P0103 (signal haut)?',
        answer: 'Le P0102 signale que le MAF rapporte trop PEU d\'air (signal trop bas), ce qui fait que l\'ECU injecte trop peu de carburant, creant un melange pauvre. Le P0103 c\'est l\'inverse: le MAF rapporte trop d\'air (signal trop haut), l\'ECU injecte trop de carburant, creant un melange riche. Les symptomes sont opposes: P0102 = manque de puissance severe et calage, P0103 = surconsommation et fumee noire. Les deux necessitent souvent le remplacement du MAF.'
      },
      {
        question: 'Peut-on rouler avec un code P0102?',
        answer: 'Tres difficilement. Le P0102 rend le vehicule quasi inutilisable: demarrage tres difficile, ralenti instable avec calages frequents, impossibilite de depasser 3000-4000 rpm, forte perte de puissance. Vous pouvez eventuellement rentrer chez vous ou aller au garage en roulant tres doucement, mais le vehicule n\'est pas utilisable normalement. De plus, le melange trop pauvre genere des temperatures de combustion excessives qui peuvent endommager le moteur en quelques jours. Reparation urgente indispensable.'
      },
      {
        question: 'Comment diagnostiquer la cause d\'un P0102?',
        answer: 'Commencez par mesurer la tension d\'alimentation du MAF: moteur contact, elle doit etre exactement 5V (ou 12V selon modele). Si elle est inferieure, le probleme est dans le circuit electrique, pas le capteur. Ensuite, verifiez le connecteur: oxydation, broches tordues, eau infiltree. Testez la tension de sortie du MAF au ralenti: elle doit etre environ 0,8-1,2V. Si elle est en dessous de 0,3V, le MAF est mort. Verifiez aussi qu\'il n\'y a pas d\'obstruction physique dans le conduit d\'admission.'
      },
      {
        question: 'Un filtre a air bouche peut-il vraiment causer un P0102?',
        answer: 'Oui mais c\'est assez rare. Il faudrait un filtre COMPLETEMENT sature, quasiment hermetique, ce qui arrive seulement dans des conditions extremes (roulage prolonge en zone tres poussier euse avec filtre jamais change). Dans ce cas, le MAF mesure reellement un debit d\'air tres faible car l\'air ne passe plus. Mais dans 95% des cas de P0102, c\'est le capteur lui-meme ou son circuit electrique qui est en cause, pas une obstruction physique. Verifiez quand meme le filtre, ca prend 2 minutes.'
      },
      {
        question: 'Le P0102 necessite-t-il toujours le remplacement du MAF?',
        answer: 'Dans environ 70-80% des cas oui. Le P0102 indique generalement un capteur defaillant qui sous-estime systematiquement le debit d\'air. Avant de le remplacer, verifiez systematiquement: tension d\'alimentation correcte (5V), connecteur propre et bien enfiche, absence de corrosion, continuite des fils. Si tout ca est OK et que le capteur donne toujours un signal trop faible (moins de 0,5V au ralenti), le remplacement est necessaire. Un nettoyage peut etre tente mais reussit rarement pour un P0102.'
      }
    ],
    relatedCodes: ['P0100', 'P0101', 'P0103', 'P0104', 'P0171'],
    repairCosts: {
      minimum: 10,
      average: 170,
      maximum: 400,
      parts: [
        { name: 'Filtre a air moteur', priceMin: 10, priceMax: 30 },
        { name: 'Spray nettoyant MAF', priceMin: 8, priceMax: 15 },
        { name: 'Debitmetre MAF neuf (adaptable)', priceMin: 60, priceMax: 200 },
        { name: 'Connecteur et cablage MAF', priceMin: 15, priceMax: 50 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '20min - 45min',
        tools: ['Tournevis Torx T20/T25', 'Spray nettoyant MAF', 'Valise OBD2', 'Multimetre']
      },
      tips: [
        'Le P0102 (signal bas) est souvent du a un filtre a air tres colmate (10-30 euros)',
        'Verifier que le connecteur du MAF est bien enfiche et sans corrosion',
        'Tester la tension d\'alimentation du MAF (doit etre 5V reference)',
        'Un MAF encrasse donne souvent un signal bas avant de tomber en panne completement'
      ],
      warningNote: 'Un signal MAF trop bas fait tourner le moteur en melange pauvre, ce qui surchauffe les soupapes et le catalyseur a long terme. Ne roulez pas plus de 2 semaines avec ce code sans intervenir. Commencez par le filtre a air et le nettoyage du MAF.'
    }
  },
  P0103: {
    code: 'P0103',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0103 signale que le signal du debitmetre d'air massique (MAF) est anormalement eleve, au-dessus du seuil maximum attendu. Le capteur rapporte un debit d'air bien superieur a ce qui est physiquement possible compte tenu du regime moteur et de la position du papillon. L'ECU interprete ce signal eleve comme un afflux massif d'air et augmente l'injection de carburant en consequence, creant un melange beaucoup trop riche. Cela resulte en surconsommation importante, fumee noire, encrassement du moteur et mauvaises performances. Ce code est moins frequent que le P0101 ou P0102 mais tout aussi problematique.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Surconsommation de carburant extreme (30-50% d\'augmentation)',
      'Fumee noire epaisse a l\'echappement, surtout a l\'acceleration',
      'Ralenti instable et irregulier, souvent trop eleve',
      'Odeur forte de carburant imbrue',
      'Bougies qui s\'encrassent rapidement (noires de suie)',
      'Perte de puissance malgre l\'exces de carburant injecte'
    ],
    causes: [
      'Capteur MAF defaillant donnant un signal anormalement fort (60% des cas)',
      'Court-circuit dans le cablage du MAF causant signal parasite',
      'Fuite d\'air importante en aval du MAF non mesuree par le capteur',
      'Connecteur MAF cree un faux contact intermittent',
      'Interferences electromagnetiques sur le circuit du MAF',
      'MAF contamine par huile ou residus creant fausses lectures',
      'Probleme de masse electrique affectant le signal du capteur'
    ],
    solutions: [
      'Verifier l\'absence de fuites d\'air en aval du MAF (durites, colliers)',
      'Inspecter le cablage du MAF pour court-circuits ou dommages',
      'Nettoyer le capteur MAF au spray specifique (10-15 euros) - faible chance de succes',
      'Verifier la qualite de la masse electrique du MAF',
      'Tester le signal de sortie du MAF: doit etre 0,8-1,5V au ralenti, pas plus de 4,5V',
      'Remplacer le capteur MAF s\'il donne des valeurs aberrantes (120-400 euros)',
      'Verifier l\'absence d\'huile ou contamination sur l\'element sensible du MAF'
    ],
    riskExplanation: "Le P0103 cree un melange extremement riche qui cause une surconsommation massive et encrasse rapidement tout le systeme: bougies, injecteurs, soupapes, catalyseur. Le catalyseur peut etre endommage en quelques semaines par l'exces de carburant imbrue qui le surchauffe. Les bougies s'encrassent et doivent etre remplacees frequemment. La surconsommation peut atteindre 30-50%, rendant le vehicule tres couteux a utiliser. Reparation recommandee sous 1 semaine pour eviter dommages couteux au catalyseur (400-1500 euros) et surconsommation prolongee.",
    faq: [
      {
        question: 'Pourquoi mon vehicule consomme-t-il autant avec un P0103?',
        answer: 'Le P0103 fait croire a l\'ECU qu\'enormement d\'air entre dans le moteur. Pour compenser, l\'ECU injecte massivement du carburant pour maintenir le bon rapport air-carburant. Sauf que le MAF ment: il n\'y a pas tant d\'air que ca. Resultat: melange ultra-riche avec exces de carburant. Cet exces peut augmenter la consommation de 30-50%, soit passer de 7L/100km a 10-11L/100km. Sur un plein, ca represente facilement 15-20 euros de carburant gaspille. Sans compter que tout ce carburant imbrue encrasse le moteur et le catalyseur.'
      },
      {
        question: 'Une fuite d\'air peut-elle causer un P0103?',
        answer: 'Oui, mais attention c\'est contre-intuitif. Si la fuite d\'air est EN AVAL du MAF (apres lui), l\'air supplementaire n\'est pas mesure par le capteur. Donc l\'ECU voit peu d\'air (mesure du MAF) mais en realite beaucoup d\'air entre (fuite). L\'ECU cree alors un melange pauvre. Ca causerait plutot un P0171 (melange pauvre). Pour avoir un P0103, il faudrait une situation bizarre ou le MAF lui-meme lit trop d\'air. Donc non, une simple fuite d\'air ne cause generalement pas un P0103. C\'est presque toujours le capteur MAF lui-meme qui est defaillant.'
      },
      {
        question: 'Comment verifier si mon MAF donne un signal trop eleve?',
        answer: 'Avec une valise OBD ou un multimetre, lisez le signal du MAF au ralenti moteur chaud. Normal: 0,8-1,5V environ. Si vous voyez 3-4V au ralenti, c\'est anormal ement haut, confirmant le P0103. Accelerez legerement: le signal doit monter progressivement. S\'il saute brutalement a 4,5-5V ou reste colle a 4,5V, le MAF est defectueux. Vous pouvez aussi observer les grammes/seconde d\'air sur une valise: au ralenti, ca doit etre 2-4 g/s. Si vous voyez 10-15 g/s au ralenti, c\'est anormalement eleve.'
      },
      {
        question: 'Mes bougies sont noires depuis le P0103, est-ce normal?',
        answer: 'Oui absolument. Le melange ultra-riche cause par le P0103 depose une epaisse couche de suie noire sur les bougies. Si vous les demontez, elles seront completement noires et humides de carburant. Ces bougies encrassees ratent parfois l\'allumage, aggravant les symptomes. Apres avoir repare le P0103 (souvent remplacement du MAF), il faudra probablement nettoyer ou remplacer les bougies (40-120 euros le kit). C\'est normal et inevitable avec un melange aussi riche pendant plusieurs jours ou semaines.'
      },
      {
        question: 'Le P0103 peut-il disparaitre tout seul?',
        answer: 'Tres rarement. Si c\'est un faux contact intermittent dans le connecteur du MAF, le code peut aller et venir. Mais dans la vaste majorite des cas, le P0103 indique un MAF reellement defaillant qui donne systematiquement des valeurs trop elevees. Le probleme ne se resout pas seul. Effacer le code le fera disparaitre temporairement mais il reviendra apres quelques kilometres de conduite. La seule solution durable est de reparer la cause: generalement remplacer le MAF ou reparer le cablage.'
      }
    ],
    relatedCodes: ['P0100', 'P0101', 'P0102', 'P0104', 'P0172', 'P0175'],
    repairCosts: {
      minimum: 10,
      average: 180,
      maximum: 450,
      parts: [
        { name: 'Spray nettoyant MAF', priceMin: 8, priceMax: 15 },
        { name: 'Debitmetre MAF neuf (adaptable)', priceMin: 60, priceMax: 200 },
        { name: 'Debitmetre MAF neuf (origine)', priceMin: 150, priceMax: 400 },
        { name: 'Connecteur MAF avec pigtail', priceMin: 15, priceMax: 45 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '20min - 45min',
        tools: ['Tournevis Torx T20/T25', 'Spray nettoyant MAF', 'Valise OBD2', 'Multimetre']
      },
      tips: [
        'Le P0103 (signal haut) peut indiquer un court-circuit dans le cablage du MAF',
        'Verifier l\'absence de rongeur ayant abime les fils du connecteur MAF',
        'Un MAF donnant un signal trop haut provoque un melange trop riche (surconsommation)',
        'Tester en debranchant le MAF: si le moteur tourne mieux, le MAF est en cause'
      ],
      warningNote: 'Un signal MAF trop haut fait tourner le moteur en sur-richesse, ce qui noie les bougies et encrasse le catalyseur. Le carburant imbrue dilue aussi l\'huile moteur. Intervenir dans les 2 semaines maximum pour eviter des degats couteux.'
    }
  },
  P0104: {
    code: 'P0104',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0104 indique un signal intermittent ou instable du debitmetre d'air massique (MAF). Contrairement au P0100 (panne totale), P0101 (valeur incorrecte), P0102 (signal bas) ou P0103 (signal haut), le P0104 signale que le capteur fonctionne mais envoie des donnees erratiques qui fluctuent anormalement ou disparaissent par intermittence. Ce comportement est typique d'un connecteur defaillant, d'un fil qui se touche par moment, ou d'un capteur en fin de vie qui fonctionne par a-coups. L'ECU ne peut pas se fier a ces donnees instables et bascule souvent en mode degrade.",
    symptoms: [
      'Voyant moteur qui s\'allume et s\'eteint de facon aleatoire',
      'Performances du moteur qui varient sans raison apparente',
      'Passages intermittents en mode degrade avec limitation de puissance',
      'Ralenti instable qui varie irregulierement',
      'A-coups et hesitations imprevisibles lors de la conduite',
      'Consommation variable selon que le MAF fonctionne ou non',
      'Demarrage parfois difficile, parfois normal'
    ],
    causes: [
      'Connecteur du MAF oxyde ou mal enfiche causant contacts intermittents (40% des cas)',
      'Fil electrique du MAF endommage avec contact intermittent',
      'Soudures internes du capteur MAF qui se fissurent avec les vibrations',
      'Capteur MAF en fin de vie fonctionnant de facon erratique',
      'Interferences electromagnetiques intermittentes sur le circuit',
      'Probleme de masse electrique instable',
      'Corrosion dans le connecteur creant resistance variable'
    ],
    solutions: [
      'Inspecter minutieusement le connecteur du MAF: nettoyer, graisser contacts, verifier enclenchement',
      'Secouer legerement le faisceau du MAF moteur tournant pour reproduire le defaut',
      'Tester la continuite des fils en bougeant le cablage pour detecter coupure intermittente',
      'Mesurer la resistance de contact du connecteur: doit etre inferieure a 0,1 ohm',
      'Nettoyer le capteur MAF au spray specifique (10-15 euros) - peu efficace pour P0104',
      'Remplacer le connecteur du MAF si corrosion importante (20-40 euros)',
      'Remplacer le capteur MAF si tests electriques OK mais signal toujours instable (120-400 euros)'
    ],
    riskExplanation: "Le P0104 cree une conduite imprevisible car le moteur passe aleatoirement entre fonctionnement normal et mode degrade. Cette instabilite est dangereuse car le vehicule peut subitement perdre de la puissance en pleine acceleration (depassement, insertion sur autoroute). L'ECU ne sachant pas sur quelles valeurs se baser, la gestion moteur est sous-optimale en permanence, causant surconsommation et encrassement. Bien que moins urgent qu'un P0100 ou P0102, le P0104 doit etre repare sous 1-2 semaines pour des raisons de securite et de fiabilite.",
    faq: [
      {
        question: 'Pourquoi le voyant moteur s\'allume et s\'eteint avec un P0104?',
        answer: 'Le P0104 est par nature un defaut intermittent. Quand le signal du MAF fonctionne normalement, l\'ECU efface temporairement le code et eteint le voyant. Puis le signal redevient instable, le code revient et le voyant se rallume. C\'est typique d\'un mauvais contact qui se fait et se defait selon les vibrations, la temperature, l\'humidite. Ce comportement on-off est caracteristique du P0104 et aide a le differencier des autres codes MAF qui restent fixes.'
      },
      {
        question: 'Comment reproduire un defaut intermittent P0104 pour le diagnostiquer?',
        answer: 'Moteur tournant au ralenti, secouez doucement le connecteur du MAF et le faisceau electrique. Si le ralenti change ou que le moteur cale, vous avez trouve le probleme. Tapotez legerement sur le boitier du MAF: s\'il reagit, c\'est que les soudures internes sont fissurees. Vaporisez de l\'eau sur le connecteur: si ca aggrave, c\'est de la corrosion. Faites rouler le vehicule sur route cabossee: si le defaut apparait aux vibrations, c\'est mecanique (connecteur ou soudures).'
      },
      {
        question: 'Un simple nettoyage du connecteur peut-il resoudre un P0104?',
        answer: 'Oui tres souvent. Le P0104 est dans 40% des cas cause par un connecteur oxyde ou corrodé. Demontez le connecteur, nettoyez les broches avec bombe contact electrique ou papier de verre fin, appliquez graisse dielectrique, remontez fermement. Cout: moins de 10 euros. Cette simple operation resout le P0104 dans environ 50% des cas. Si le code revient apres ca, le probleme est soit dans le cablage soit dans le capteur lui-meme.'
      },
      {
        question: 'Le P0104 peut-il evoluer vers un P0100 (panne complete)?',
        answer: 'Oui absolument. Le P0104 est souvent un signe avant-coureur d\'une panne totale du MAF. Un capteur qui fonctionne par intermittence finit generalement par tomber completement en panne dans les semaines ou mois suivants. Un connecteur corrode peut evoluer vers court-circuit complet. C\'est pourquoi il ne faut pas ignorer un P0104 meme s\'il semble mineur. Reparez-le rapidement avant qu\'il ne devienne un P0100 vous laissant en rade avec un vehicule quasi inutilisable.'
      },
      {
        question: 'Faut-il remplacer le MAF ou peut-on juste changer le connecteur?',
        answer: 'Commencez toujours par le connecteur. Achetez un nouveau connecteur MAF avec ses fils (20-40 euros) et remplacez-le. Si le P0104 persiste apres ca et que vous avez verifie le cablage jusqu\'a l\'ECU, alors oui le MAF lui-meme est en cause et doit etre remplace (120-400 euros). Mais ne remplacez pas betement le MAF sans avoir teste le connecteur d\'abord, ca serait gaspiller 150-400 euros alors que 20 euros de connecteur auraient suffi.'
      }
    ],
    relatedCodes: ['P0100', 'P0101', 'P0102', 'P0103', 'P0171', 'P0174'],
    repairCosts: {
      minimum: 10,
      average: 180,
      maximum: 450,
      parts: [
        { name: 'Spray nettoyant MAF', priceMin: 8, priceMax: 15 },
        { name: 'Debitmetre MAF neuf (adaptable)', priceMin: 60, priceMax: 200 },
        { name: 'Debitmetre MAF neuf (origine)', priceMin: 150, priceMax: 400 },
        { name: 'Filtre a air moteur', priceMin: 10, priceMax: 30 }
      ],
      laborTime: '30min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '20min - 45min',
        tools: ['Tournevis Torx T20/T25', 'Spray nettoyant MAF', 'Valise OBD2', 'Multimetre']
      },
      tips: [
        'Le P0104 signale un signal intermittent: verifier les connexions electriques en priorite',
        'Bouger delicatement le connecteur MAF moteur tournant pour detecter un faux contact',
        'Les vibrations moteur peuvent desserrer le connecteur MAF avec le temps',
        'Nettoyer les contacts du connecteur avec du nettoyant contact electrique (5-10 euros)'
      ],
      warningNote: 'Un signal MAF intermittent rend le comportement moteur imprevisible. Le vehicule peut caler sans prevenir ou avoir des a-coups dangereux en conduite. Reparez ce defaut rapidement, surtout avant de prendre l\'autoroute.'
    }
  },
  P0105: {
    code: 'P0105',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0105 indique un dysfonctionnement du circuit du capteur MAP (Manifold Absolute Pressure). Le capteur MAP mesure la pression absolue dans le collecteur d'admission pour que l'ECU calcule la charge moteur et ajuste l'injection de carburant. Contrairement au MAF qui mesure le debit d'air directement, le MAP deduit la quantite d'air en mesurant la depression dans le collecteur. Le P0105 signale un probleme electrique general du circuit MAP: pas de signal, tension incorrecte, court-circuit, ou connecteur debranche. C'est different du P0106 (plage incorrecte), P0107 (signal bas) ou P0108 (signal haut).",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Demarrage difficile necessitant plusieurs tentatives',
      'Ralenti tres instable, moteur qui broute',
      'Perte de puissance notable surtout en acceleration',
      'Mode degrade souvent active limitant regime et vitesse',
      'Consommation de carburant augmentee de 15-30%',
      'Calage du moteur lors des decelerations ou au ralenti'
    ],
    causes: [
      'Connecteur du capteur MAP debranche, oxyde ou endommage (35% des cas)',
      'Capteur MAP completement defaillant ou en court-circuit',
      'Fil electrique coupe ou endommage entre MAP et ECU',
      'Court-circuit a la masse ou au 5V dans le cablage',
      'Probleme d\'alimentation 5V du capteur MAP',
      'Durite de prise de pression MAP bouchee ou debranchee',
      'ECU defaillant ne recevant plus le signal MAP (rare)'
    ],
    solutions: [
      'Verifier que le connecteur du MAP est bien enfiche et propre (gratuit)',
      'Tester la tension d\'alimentation du MAP: doit etre 5V moteur contact',
      'Mesurer la tension de sortie du MAP: environ 1V au ralenti, 4-4,5V pleins gaz',
      'Verifier que la durite de prise de pression MAP est branchee et non bouchee',
      'Tester la continuite des fils entre capteur MAP et ECU',
      'Nettoyer le capteur MAP avec nettoyant electronique (10-15 euros)',
      'Remplacer le capteur MAP si tests electriques OK mais pas de signal (50-150 euros)'
    ],
    riskExplanation: "Sans signal MAP fonctionnel, l'ECU ne peut pas determiner la charge moteur correctement et bascule en mode degrade avec des valeurs fixes preprogrammees. Le melange air-carburant sera approximatif, causant surconsommation, perte de puissance et encrassement du moteur. Le vehicule reste utilisable en mode degrade mais avec performances tres reduites. A moyen terme, le catalyseur peut etre endommage par un melange incorrect. Reparation recommandee sous 1 semaine pour retrouver performances normales et eviter dommages au catalyseur.",
    faq: [
      {
        question: 'Quelle est la difference entre un capteur MAP et un capteur MAF?',
        answer: 'Le MAF (Mass Air Flow) mesure directement le debit d\'air qui entre dans le moteur avec un fil chaud. Le MAP (Manifold Absolute Pressure) mesure la pression dans le collecteur d\'admission pour deduire indirectement la quantite d\'air. Certains vehicules ont un MAF, d\'autres un MAP, certains ont les deux. Le MAP est plus simple et moins fragile que le MAF, mais moins precis. Sur vehicules turbo, le MAP est quasi systematique pour mesurer la pression de suralimentation.'
      },
      {
        question: 'Ou se trouve le capteur MAP sur le moteur?',
        answer: 'Le capteur MAP est generalement visse ou clippe directement sur le collecteur d\'admission, ou relie au collecteur par une petite durite en caoutchouc. Cherchez un petit boitier cylindrique ou rectangulaire avec un connecteur electrique a 3 fils, situe sur ou pres du collecteur d\'admission. Sur moteurs turbo, il peut y avoir plusieurs MAP: un pour la pression atmospherique, un autre pour la pression de suralimentation. Le manuel du vehicule indique l\'emplacement precis.'
      },
      {
        question: 'Comment tester si mon capteur MAP fonctionne?',
        answer: 'Moteur contact sans demarrer, mesurez la tension de sortie du MAP avec un multimetre: elle doit etre environ 4-4,5V (pression atmospherique). Demarrez le moteur au ralenti: la tension doit chuter a environ 1-1,5V (depression dans le collecteur). Accelerez brusquement: la tension doit monter rapidement vers 4-4,5V puis redescendre. Si la tension ne change pas ou reste bloquee, le MAP est mort. Verifiez aussi que vous avez bien 5V d\'alimentation et une bonne masse.'
      },
      {
        question: 'Une durite MAP bouchee peut-elle causer un P0105?',
        answer: 'Non pas vraiment. Une durite bouchee causerait plutot un P0106 (plage incorrecte) car le capteur mesurerait une pression constante au lieu de la vraie pression variable du collecteur. Le P0105 indique plutot un probleme electrique: pas de signal du tout, tension incorrecte, court-circuit. Neanmoins, verifiez quand meme la durite car c\'est rapide et gratuit. Mais si elle est OK, le probleme est electrique: connecteur, cablage ou capteur lui-meme.'
      },
      {
        question: 'Combien coute le remplacement d\'un capteur MAP?',
        answer: 'Un capteur MAP coute entre 30-80 euros en pieces generiques de qualite, et 80-150 euros en origine constructeur. Le remplacement est tres simple: 1 connecteur et 1-2 vis, 10 minutes de travail. Total garage: 50-200 euros selon origine piece et taux horaire. En DIY: 30-80 euros. C\'est beaucoup moins cher qu\'un MAF (120-400 euros) car le MAP est technologiquement plus simple. Verifiez toujours le connecteur et le cablage avant d\'acheter un nouveau capteur.'
      }
    ],
    relatedCodes: ['P0106', 'P0107', 'P0108', 'P0100', 'P0171', 'P0172'],
    repairCosts: {
      minimum: 15,
      average: 130,
      maximum: 350,
      parts: [
        { name: 'Capteur MAP (adaptable)', priceMin: 20, priceMax: 80 },
        { name: 'Capteur MAP (origine)', priceMin: 60, priceMax: 200 },
        { name: 'Durite de depression MAP', priceMin: 5, priceMax: 20 },
        { name: 'Connecteur capteur MAP', priceMin: 10, priceMax: 30 }
      ],
      laborTime: '20min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '15min - 40min',
        tools: ['Tournevis cruciforme', 'Multimetre', 'Valise OBD2', 'Pompe a vide manuelle']
      },
      tips: [
        'Verifier la durite de depression du MAP en premier (souvent fendue ou debranchee)',
        'Le capteur MAP est generalement tres facile a remplacer (1-2 vis)',
        'Tester la tension de sortie du MAP avec un multimetre (0,5V au ralenti, 4,5V pleine charge)',
        'Comparer les prix: un MAP adaptable a 20-80 euros fonctionne aussi bien que l\'origine dans la plupart des cas'
      ],
      warningNote: 'Le capteur MAP est souvent confondu avec le MAF. Le MAP mesure la pression dans le collecteur d\'admission (depression), pas le debit d\'air. Assurez-vous de commander la bonne piece. Certains vehicules ont les deux capteurs (MAP et MAF).'
    }
  },
  P0106: {
    code: 'P0106',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0106 indique que le signal du capteur MAP (Manifold Absolute Pressure) est en dehors de la plage attendue par l'ECU. Contrairement au P0105 (panne totale du circuit), le P0106 signale que le capteur fonctionne et envoie un signal, mais que les valeurs mesurees sont incoherentes avec les autres parametres moteur comme le regime, la position du papillon ou le MAF. Le capteur MAP peut etre encrasse, la durite de prise de pression bouchee, ou le capteur vieillissant donne des lectures derivees. C'est l'equivalent pour le MAP du code P0101 pour le MAF.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Hesitations lors des accelerations',
      'Ralenti instable ou irregulier',
      'Legere perte de puissance',
      'Consommation de carburant augmentee de 10-20%',
      'Demarrage parfois difficile',
      'Melange air-carburant incorrect (trop riche ou trop pauvre)'
    ],
    causes: [
      'Durite de prise de pression MAP bouchee, pincee ou percee (40% des cas)',
      'Capteur MAP encrasse donnant des lectures incorrectes',
      'Fuite de vide dans le collecteur d\'admission faussant les mesures',
      'Capteur MAP vieillissant avec derive de calibration',
      'Prise de pression MAP obstruee par huile ou residus',
      'Capteur MAP defaillant mais pas completement mort',
      'Filtre dans la durite MAP bouche (si present)'
    ],
    solutions: [
      'Inspecter et nettoyer la durite de prise de pression MAP',
      'Souffler dans la durite MAP pour verifier qu\'elle n\'est pas bouchee',
      'Nettoyer le capteur MAP avec nettoyant electronique (10-15 euros)',
      'Verifier l\'absence de fuites de vide au niveau du collecteur d\'admission',
      'Comparer les valeurs MAP avec un manometre de depression (diagnostic)',
      'Remplacer la durite MAP si percee ou deterioree (5-15 euros)',
      'Remplacer le capteur MAP si nettoyage inefficace (50-150 euros)'
    ],
    riskExplanation: "Le P0106 cree un melange air-carburant incorrect car l'ECU se base sur de mauvaises informations de charge moteur. Selon que le MAP surestime ou sous-estime la pression, le melange sera trop riche ou trop pauvre. Cela cause surconsommation, perte de puissance et encrassement progressif du moteur et du catalyseur. Le vehicule reste utilisable mais les performances sont degradees. A moyen terme, le catalyseur peut etre endommage. Reparation recommandee sous 2-3 semaines.",
    faq: [
      {
        question: 'Comment savoir si c\'est la durite MAP ou le capteur qui est en cause?',
        answer: 'Demontez la durite MAP du capteur et soufflez dedans: l\'air doit passer facilement jusqu\'au collecteur. Si c\'est bouche, vous avez trouve la cause (gratuit a reparer). Si la durite est OK, nettoyez le capteur MAP au spray electronique. Si le code persiste apres ca, comparez les valeurs MAP avec un manometre de depression reel. Si les valeurs sont differentes, le capteur est defaillant et doit etre remplace. Dans 40% des cas, c\'est juste la durite bouchee.'
      },
      {
        question: 'Pourquoi la durite MAP se bouche-t-elle?',
        answer: 'La durite MAP prend la pression directement dans le collecteur d\'admission ou il y a des vapeurs d\'huile (reniflard carter), des residus de combustion (EGR) et parfois de la condensation. Avec le temps, ces residus s\'accumulent dans la petite durite et finissent par la boucher partiellement ou totalement. C\'est particulierement frequent sur diesels avec EGR ou sur moteurs consommant de l\'huile. Une durite neuve coute 5-15 euros et se change en 5 minutes. Pensez aussi a nettoyer la prise de pression sur le collecteur.'
      },
      {
        question: 'Le P0106 peut-il etre cause par une fuite de vide?',
        answer: 'Oui absolument. Si le collecteur d\'admission a une fuite de vide (durite fendue, joint defaillant), le capteur MAP mesurera une pression differente de la pression reelle dans les cylindres. L\'ECU detectera que les valeurs MAP sont incoherentes avec les autres parametres (position papillon, regime, MAF si present) et declenchera un P0106. Pour tester: faites un test fumigene ou vaporisez du WD-40 autour du collecteur au ralenti. Si le ralenti change, vous avez une fuite.'
      },
      {
        question: 'Un capteur MAP peut-il deriver progressivement avec l\'age?',
        answer: 'Oui c\'est courant. Le capteur MAP contient un element piezoelectrique qui peut vieillir et perdre sa calibration. Apres 150 000-200 000 km, le capteur peut donner des valeurs derivees de 5-10% par rapport au reel. L\'ECU va compenser au debut, mais quand l\'erreur depasse un certain seuil, il declenche le P0106. C\'est moins brutal qu\'une panne totale (P0105) mais tout aussi problematique. La seule solution est le remplacement du capteur (50-150 euros).'
      },
      {
        question: 'Faut-il remplacer le capteur MAP ou peut-on juste nettoyer?',
        answer: 'Commencez toujours par nettoyer. Demontez le capteur MAP, nettoyez-le au spray electronique ou nettoyant frein, verifiez la durite, remontez. Cout: 10 euros maximum. Ca resout le P0106 dans environ 40-50% des cas. Si le code revient apres 50-100 km, c\'est que le capteur est reellement defaillant et doit etre remplace (50-150 euros). Ne remplacez jamais sans avoir d\'abord nettoye, verifie la durite et teste les fuites de vide. C\'est du gachis de remplacer un capteur alors qu\'une durite a 5 euros etait la vraie cause.'
      }
    ],
    relatedCodes: ['P0105', 'P0107', 'P0108', 'P0171', 'P0172', 'P0174'],
    repairCosts: {
      minimum: 10,
      average: 120,
      maximum: 300,
      parts: [
        { name: 'Capteur MAP (adaptable)', priceMin: 20, priceMax: 80 },
        { name: 'Capteur MAP (origine)', priceMin: 60, priceMax: 200 },
        { name: 'Durite de depression', priceMin: 5, priceMax: 20 },
        { name: 'Nettoyant contact electrique', priceMin: 5, priceMax: 12 }
      ],
      laborTime: '20min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '15min - 40min',
        tools: ['Tournevis cruciforme', 'Multimetre', 'Valise OBD2', 'Pompe a vide manuelle']
      },
      tips: [
        'Le P0106 indique une plage incorrecte: verifier d\'abord les fuites de depression',
        'Une durite de depression fendue coute 5-20 euros et resout souvent le probleme',
        'Nettoyer le port de depression du capteur MAP (calamine frequente sur diesel)',
        'Tester le capteur avec une pompe a vide manuelle pour verifier la coherence du signal'
      ],
      warningNote: 'Le P0106 peut etre cause par une simple fuite de depression et non par le capteur lui-meme. Avant de remplacer le MAP (20-200 euros), inspectez toutes les durites de depression et les raccords. Une fuite coute 5-20 euros a reparer.'
    }
  },
  P0107: {
    code: 'P0107',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0107 signale que le signal du capteur MAP est anormalement bas, indiquant une pression d'admission trop faible. Le capteur MAP mesure la pression absolue dans le collecteur: au ralenti avec forte depression, la tension est basse (environ 1V). A pleins gaz sans depression, la tension est haute (4-4,5V). Le P0107 signifie que la tension reste bloquee en dessous du seuil minimum attendu, meme quand le moteur devrait etre en charge. Cela peut indiquer un court-circuit du capteur, une fuite de vide extreme, ou une durite MAP debranchee laissant le capteur mesurer la pression atmospherique au lieu de celle du collecteur.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Melange tres riche avec fumee noire a l\'echappement',
      'Surconsommation de carburant importante (20-40%)',
      'Ralenti instable et irregulier',
      'Bougies qui s\'encrassent rapidement',
      'Demarrage difficile avec odeur forte de carburant',
      'Perte de puissance due au melange trop riche'
    ],
    causes: [
      'Durite de prise de pression MAP debranchee ou percee (50% des cas)',
      'Court-circuit a la masse dans le cablage du capteur MAP',
      'Connecteur MAP oxyde causant mauvais contact',
      'Capteur MAP defaillant donnant signal anormalement bas',
      'Fuite de vide massive faisant croire a depression extreme',
      'Prise de pression MAP sur collecteur obstruee',
      'Fil de signal MAP endommage avec resistance elevee'
    ],
    solutions: [
      'Verifier que la durite MAP est bien branchee des deux cotes (gratuit - souvent la cause)',
      'Inspecter la durite MAP pour fuites ou percages',
      'Verifier le connecteur MAP: nettoyer, verifier bon contact',
      'Mesurer la tension de sortie MAP au ralenti: doit etre 1-1,5V, pas 0V',
      'Tester la continuite du fil de signal entre MAP et ECU',
      'Remplacer la durite MAP si percee ou deterioree (5-15 euros)',
      'Remplacer le capteur MAP si tests OK mais signal toujours bas (50-150 euros)'
    ],
    riskExplanation: "Le P0107 fait croire a l'ECU que le moteur est constamment sous forte charge (pleins gaz, forte depression), donc il injecte massivement du carburant. Le melange ultra-riche cause une surconsommation extreme (30-40% de plus), encrasse rapidement bougies et injecteurs, et peut endommager le catalyseur en quelques semaines par exces de carburant imbrue. Les bougies encrassees provoquent ensuite des rates d'allumage, aggravant les dommages. Reparation urgente recommandee sous 1 semaine pour eviter catalyseur detruit (400-1500 euros).",
    faq: [
      {
        question: 'Pourquoi mon vehicule fume noir avec un P0107?',
        answer: 'Le P0107 indique une pression MAP anormalement basse. L\'ECU interprete ca comme une forte charge moteur (acceleration, montee) et injecte beaucoup de carburant. Sauf que c\'est faux: le moteur n\'est pas en charge. Resultat: melange ultra-riche avec exces enorme de carburant qui ne brule pas completement. Ce carburant imbrue sort en fumee noire epaisse. C\'est le meme principe qu\'un vieux diesel qui fume: trop de carburant, pas assez d\'air (ou ECU qui croit qu\'il y a beaucoup d\'air).'
      },
      {
        question: 'Une durite MAP debranchee peut-elle vraiment causer un P0107?',
        answer: 'Oui c\'est meme la cause la plus frequente du P0107 (environ 50% des cas). Si la durite MAP est debranchee du capteur, le capteur mesure la pression atmospherique (environ 1 bar) au lieu de la depression du collecteur (0,3-0,5 bar au ralenti). Le signal sera donc trop BAS (pas de depression mesuree). C\'est contre-intuitif mais logique. Avant toute reparation couteuse, verifiez que la durite MAP est bien branchee fermement des deux cotes. C\'est gratuit et ca resout 50% des P0107.'
      },
      {
        question: 'Comment differencier un P0107 (signal bas) d\'un P0108 (signal haut)?',
        answer: 'Le P0107 (signal MAP trop bas) cree un melange RICHE car l\'ECU croit que le moteur est en forte charge et injecte massivement: fumee noire, surconsommation, bougies encrassees. Le P0108 (signal MAP trop haut) cree un melange PAUVRE car l\'ECU croit que le moteur est au ralenti et injecte peu: perte de puissance, calage, combustion trop chaude. Les symptomes sont opposes. P0107 = trop de carburant, P0108 = pas assez de carburant.'
      },
      {
        question: 'Mes bougies sont-elles abimees par le P0107?',
        answer: 'Oui probablement. Le melange ultra-riche du P0107 depose enormement de suie noire sur les bougies. Apres quelques jours ou semaines de P0107, les bougies seront completement noires et encrassees, provoquant des rates d\'allumage. Apres avoir repare le P0107, il faudra presque certainement nettoyer ou remplacer les bougies (40-120 euros le kit). Si vous les nettoyez vous-meme, c\'est gratuit mais fastidieux. C\'est un dommage collateral normal du P0107, pas la peine de s\'inquieter.'
      },
      {
        question: 'Le P0107 peut-il se resoudre en rebranchant juste la durite?',
        answer: 'Oui absolument dans 50% des cas. La durite MAP peut se debrancher toute seule suite a des vibrations, manipulation moteur, ou simplement parce que le collier est use. Si c\'est la cause, rebrancher fermement la durite et effacer le code avec une valise OBD resout instantanement le probleme. Le code ne reviendra pas. Cout: 0 euro, 2 minutes de travail. C\'est pourquoi il faut TOUJOURS verifier la durite avant d\'acheter un nouveau capteur MAP a 50-150 euros. Ne soyez pas celui qui depense 150 euros alors que 30 secondes de verification auraient suffi.'
      }
    ],
    relatedCodes: ['P0105', 'P0106', 'P0108', 'P0172', 'P0175'],
    repairCosts: {
      minimum: 10,
      average: 110,
      maximum: 280,
      parts: [
        { name: 'Capteur MAP (adaptable)', priceMin: 20, priceMax: 80 },
        { name: 'Capteur MAP (origine)', priceMin: 60, priceMax: 200 },
        { name: 'Connecteur capteur MAP', priceMin: 10, priceMax: 30 }
      ],
      laborTime: '20min - 1h',
      laborRate: '50-90 euros/h selon garage',
      diy: {
        possible: true,
        difficulty: 'Facile' as const,
        savings: '60-80%',
        timeNeeded: '15min - 40min',
        tools: ['Tournevis cruciforme', 'Multimetre', 'Valise OBD2', 'Nettoyant contact']
      },
      tips: [
        'Le P0107 (signal bas) indique souvent un court-circuit a la masse dans le cablage',
        'Verifier l\'etat du connecteur MAP (corrosion, broches pliees)',
        'Mesurer la tension de reference 5V sur le connecteur MAP debranche',
        'Si la tension de reference est absente, le probleme vient du calculateur ou du cablage, pas du capteur'
      ],
      warningNote: 'Un signal MAP bloque en position basse fait tourner le moteur en sur-richesse permanente. Le vehicule consomme excessivement et les bougies se noient rapidement. Ne roulez pas plus d\'une semaine avec ce code pour eviter d\'endommager le catalyseur.'
    }
  },
  P0108: {
    code: 'P0108',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0108 signale que le signal du capteur MAP est anormalement eleve, indiquant une pression d'admission trop forte. Normalement, au ralenti avec forte depression, le signal MAP est bas (1V). A pleins gaz, il monte vers 4-4,5V. Le P0108 signifie que la tension reste bloquee au maximum meme au ralenti, faisant croire a l'ECU que le moteur est constamment a pleine charge. Cela peut etre du a un court-circuit vers le 5V d'alimentation, un capteur defaillant, ou sur vehicules turbo, une surpression reelle causee par un turbo emballe ou wastegate bloquee.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Melange tres pauvre avec perte de puissance severe',
      'Demarrage tres difficile, moteur qui cale facilement',
      'Ralenti instable ou impossible a maintenir',
      'Hesitations majeures a l\'acceleration',
      'Consommation parfois legerement reduite mais performances tres degradees',
      'Sur turbo: possibilite de surpression reelle dangereuse'
    ],
    causes: [
      'Court-circuit vers le 5V dans le cablage du capteur MAP (30% des cas)',
      'Capteur MAP defaillant donnant signal maximum constant',
      'Connecteur MAP cree court-circuit entre signal et alimentation',
      'Sur turbo: wastegate bloquee causant surpression reelle',
      'Sur turbo: turbo emballe donnant pression excessive',
      'Probleme de masse electrique faisant deriver le signal',
      'Eau ou humidite dans le connecteur MAP causant court-circuit'
    ],
    solutions: [
      'Sur turbo: verifier la pression de suralimentation reelle avec manometre - URGENT si excessive',
      'Inspecter le connecteur MAP pour court-circuit ou humidite',
      'Tester la resistance entre fil signal et fil 5V: doit etre infinie (circuit ouvert)',
      'Mesurer la tension de sortie MAP au ralenti: ne doit PAS etre bloquee a 4,5-5V',
      'Verifier le cablage pour frottement contre pieces chaudes causant fusion d\'isolant',
      'Sur turbo: tester wastegate et regulateur de pression turbo',
      'Remplacer le capteur MAP si tests electriques OK mais signal toujours haut (50-150 euros)'
    ],
    riskExplanation: "Le P0108 cree un melange extremement pauvre car l'ECU croit que beaucoup d'air entre et injecte peu de carburant. Le vehicule est difficilement utilisable avec calages frequents et perte de puissance severe. Sur vehicules turbo, si la surpression est REELLE (turbo emballe), c'est URGENT car le moteur peut etre detruit en minutes par detonation. Meme si c'est juste un faux signal, le melange pauvre genere des temperatures excessives endommagant soupapes et catalyseur. Reparation urgente sous 2-3 jours, IMMEDIATE sur turbo avec suspicion de surpression reelle.",
    faq: [
      {
        question: 'Comment savoir si la surpression est reelle ou si c\'est juste un faux signal?',
        answer: 'Sur vehicule turbo, c\'est CRUCIAL de determiner ca rapidement. Installez un manometre de pression turbo et observez la pression reelle au ralenti et en acceleration. Si la pression est normale (environ 1 bar au ralenti, 1,5-2 bars en charge selon vehicule) mais le code persiste, c\'est un faux signal electrique. Si la pression depasse 2,5 bars ou continue de monter sans limite, c\'est une URGENCE: wastegate bloquee ou turbo emballe. Arretez immediatement le vehicule et faites remorquer. Le moteur peut exploser.'
      },
      {
        question: 'Un P0108 sur moteur atmospherique est-il moins grave que sur turbo?',
        answer: 'Sur moteur atmospherique (sans turbo), le P0108 est forcement un faux signal electrique car la pression ne peut pas physiquement depasser 1 bar (pression atmospherique). C\'est donc un probleme de capteur ou cablage, pas de surpression reelle. Moins dangereux qu\'un turbo emballe, mais quand meme problematique car le melange pauvre rend le vehicule difficilement utilisable. Sur turbo, la surpression peut etre REELLE et DANGEREUSE. Donc oui, P0108 sur atmospherique est objectivement moins grave.'
      },
      {
        question: 'Pourquoi le moteur cale-t-il avec un P0108?',
        answer: 'Le P0108 fait croire a l\'ECU que le moteur aspire enormement d\'air (pleine charge). Pour compenser, l\'ECU injecte... ben non justement, il n\'injecte PAS assez car il croit qu\'il y a deja beaucoup d\'air. Resultat: melange ultra-pauvre avec quasi pas de carburant. Le moteur tourne tres mal, hesite, perd toute sa puissance et cale facilement au ralenti car le melange est trop pauvre pour maintenir la combustion. C\'est l\'inverse du P0107 qui inonde le moteur de carburant.'
      },
      {
        question: 'Un court-circuit peut-il causer un P0108?',
        answer: 'Oui c\'est meme une cause tres frequente (30% des cas). Le capteur MAP a 3 fils: masse, 5V alimentation, signal. Si le fil signal touche le fil 5V a cause d\'isolant fondu, de connecteur corrode ou de frottement, le signal sera constant a 5V quel que soit la pression reelle. L\'ECU voit 5V = pression maximale = P0108. Pour tester: mesurez la resistance entre fil signal et fil 5V, connecteur debranche: elle doit etre infinie. Si elle est nulle ou faible, vous avez un court-circuit quelque part dans le cablage.'
      },
      {
        question: 'Combien coute la reparation d\'un P0108?',
        answer: 'Ca depend de la cause. Court-circuit dans cablage: reparation du fil 20-50 euros de main d\'oeuvre. Connecteur corrode: nouveau connecteur 20-40 euros. Capteur MAP HS: 50-150 euros de capteur plus 30-50 euros de main d\'oeuvre. Sur turbo, si c\'est la wastegate bloquee: 200-600 euros selon si reparable ou remplacement complet. Si turbo completement casse: 800-2500 euros. Commencez toujours par verifier le cablage et le connecteur (gratuit) avant d\'envisager pieces couteuses.'
      }
    ],
    relatedCodes: ['P0105', 'P0106', 'P0107', 'P0171', 'P0174', 'P0234']
  },
  P0115: {
    code: 'P0115',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0115 indique un dysfonctionnement du circuit du capteur de temperature liquide de refroidissement moteur (ECT - Engine Coolant Temperature). Ce capteur est crucial car il informe l'ECU de la temperature reelle du moteur, permettant d'ajuster l'enrichissement a froid, le ralenti, les ventilateurs et bien d'autres parametres. Le P0115 signale un probleme electrique general: pas de signal, court-circuit, ou valeurs aberrantes. L'ECU ne sachant plus la vraie temperature, utilise une valeur par defaut (souvent 80-90°C) qui empeche le bon fonctionnement a froid et peut causer surchauffe non detectee.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Demarrage tres difficile a froid avec moteur qui broute',
      'Consommation excessive surtout a froid (melange trop riche ou trop pauvre)',
      'Ventilateurs qui ne se declenchent pas ou tournent en permanence',
      'Jauge de temperature bloquee a froid ou au maximum',
      'Ralenti instable a froid qui ne s\'ameliore pas avec rechauffement',
      'Fumee blanche ou noire a froid selon si l\'ECU suppose chaud ou froid'
    ],
    causes: [
      'Connecteur du capteur ECT debranche, oxyde ou corrodé (40% des cas)',
      'Capteur ECT defaillant en court-circuit ou circuit ouvert',
      'Fil electrique du capteur ECT coupe ou endommage',
      'Court-circuit a la masse dans le cablage ECT',
      'Niveau de liquide de refroidissement trop bas laissant capteur a l\'air',
      'Corrosion dans le connecteur creant resistance elevee',
      'Capteur ECT mal visse avec mauvais contact thermique'
    ],
    solutions: [
      'Verifier que le connecteur ECT est bien branche et propre (gratuit - frequent)',
      'Verifier le niveau de liquide de refroidissement: doit couvrir le capteur',
      'Mesurer la resistance du capteur ECT a froid: environ 2000-3000 ohms a 20°C',
      'Mesurer la resistance a chaud: environ 200-400 ohms a 80-90°C',
      'Tester la continuite des fils entre capteur ECT et ECU',
      'Remplacer le liquide de refroidissement s\'il est contamine (30-60 euros)',
      'Remplacer le capteur ECT si resistance incorrecte (15-50 euros - piece pas chere)'
    ],
    riskExplanation: "Sans information de temperature fiable, l'ECU fonctionne avec valeur par defaut fixe. A froid, le melange sera incorrect causant demarrage difficile, consommation excessive et encrassement. Plus grave: si le moteur surchauffe reellement, l'ECU ne le detectera pas et ne declenchera pas les ventilateurs, risquant une surchauffe severe endommageant joint de culasse, culasse ou meme le bloc moteur (reparation 1000-3000 euros). Reparation urgente sous 1 semaine, surtout en ete ou si vehicule utilise pour longs trajets.",
    faq: [
      {
        question: 'Ou se trouve le capteur de temperature moteur (ECT)?',
        answer: 'Le capteur ECT est generalement visse dans le bloc moteur ou la culasse, au contact direct du liquide de refroidissement. Cherchez un petit capteur avec connecteur electrique a 2 fils, situe pres du thermostat, sur le boitier d\'eau ou sur la durite superieure du radiateur. Ne confondez pas avec la sonde de temperature pour tableau de bord (souvent separee). Le capteur ECT envoie le signal a l\'ECU pour gestion moteur. Consultez le manuel pour emplacement exact.'
      },
      {
        question: 'Comment tester un capteur de temperature moteur?',
        answer: 'Demontez le capteur ECT (attention liquide de refroidissement va couler). Avec un multimetre en mode ohmmetre, mesurez la resistance entre les 2 bornes. A froid (20°C): 2000-3000 ohms environ. Plongez le capteur dans eau bouillante (100°C): resistance doit chuter a 100-200 ohms. Si resistance ne varie pas, reste a zero, ou reste infinie, le capteur est mort. Les valeurs exactes varient selon modele mais le principe est identique: resistance elevee a froid, basse a chaud.'
      },
      {
        question: 'Un niveau de liquide de refroidissement bas peut-il causer un P0115?',
        answer: 'Oui absolument. Si le niveau est trop bas, le capteur ECT peut se retrouver a l\'air au lieu d\'etre immerge dans le liquide. Il mesure alors la temperature de l\'air dans le vase d\'expansion (beaucoup plus froide que le liquide) et donne des valeurs totalement fausses. L\'ECU detecte cette incoherence et declenche le P0115. Avant toute autre reparation, verifiez TOUJOURS le niveau de liquide de refroidissement. C\'est gratuit et ca evite de remplacer un capteur qui n\'est pas en cause.'
      },
      {
        question: 'Pourquoi mon vehicule consomme-t-il plus avec un P0115?',
        answer: 'Sans information de temperature fiable, l\'ECU utilise une valeur par defaut. S\'il suppose que le moteur est froid alors qu\'il est chaud, il va enrichir le melange inutilement, causant surconsommation de 20-30%. Inverse: s\'il suppose chaud alors que froid, le melange sera trop pauvre, causant demarrage difficile mais consommation parfois reduite. Le probleme c\'est que ces valeurs par defaut sont toujours incorrectes, donc performances degradees et consommation anormale dans les deux cas.'
      },
      {
        question: 'Le capteur de temperature est-il cher a remplacer?',
        answer: 'Non c\'est une piece bon marche. Un capteur ECT coute entre 15-50 euros selon marque et modele. Le remplacement est simple: vidanger partiellement le liquide de refroidissement, devisser l\'ancien capteur (souvent 1 cle de 19 ou 22), visser le nouveau avec un peu de pate d\'etancheite, rebrancher le connecteur, refaire le niveau. Total garage: 50-120 euros. En DIY: 20-50 euros de capteur plus liquide. C\'est une des reparations les moins cheres pour un code defaut moteur.'
      }
    ],
    relatedCodes: ['P0116', 'P0117', 'P0118', 'P0125', 'P0128']
  },
  P0116: {
    code: 'P0116',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0116 signale que le signal du capteur de temperature du liquide de refroidissement (ECT) est hors de la plage attendue par rapport aux conditions de fonctionnement du moteur. Contrairement au P0115 qui detecte une panne electrique du capteur, le P0116 indique que le capteur fonctionne mais que les valeurs ne sont pas coherentes avec la temperature reelle du moteur. Cela peut indiquer un thermostat defectueux qui empeche le moteur de monter en temperature normalement, ou un capteur qui derive et donne des valeurs incorrectes. Ce code affecte directement la gestion du melange air-carburant car l'ECU se base sur la temperature moteur pour ajuster l'enrichissement au demarrage.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Demarrage difficile a froid avec moteur qui cale dans les premieres minutes',
      'Ralenti instable et irregulier pendant la phase de chauffe',
      'Surconsommation de carburant importante (15-25% de plus que la normale)',
      'Temperature moteur affichee incorrecte au tableau de bord (trop basse ou trop haute)',
      'Chauffage habitacle inefficace ou air froid meme moteur chaud',
      'Fumee noire a l\'echappement causee par melange trop riche'
    ],
    causes: [
      'Thermostat bloque en position ouverte empechant montee en temperature (55% des cas)',
      'Capteur ECT qui derive et donne des valeurs incorrectes avec l\'age (25% des cas)',
      'Niveau de liquide de refroidissement trop bas creant bulles d\'air (10% des cas)',
      'Fuite de liquide de refroidissement au niveau du radiateur ou durites (5% des cas)',
      'Ventilateur de refroidissement coince en marche forcee (3% des cas)',
      'Probleme de circulation du liquide (pompe a eau defaillante ou circuit bouche)',
      'Connecteur electrique corrode faussant le signal du capteur ECT'
    ],
    solutions: [
      'Verifier avec valise diagnostic la temperature ECT au demarrage et apres 10 min',
      'Tester le thermostat: demarrer a froid et surveiller montee temperature (devrait atteindre 90C en 5-8 min)',
      'Remplacer le thermostat si temperature monte lentement ou reste sous 80C (30-80 euros)',
      'Verifier niveau et etat du liquide de refroidissement, completer si necessaire (10-30 euros)',
      'Remplacer le capteur ECT s\'il derive (valeurs incoherentes) (15-50 euros)',
      'Controler fonctionnement ventilateur: il ne doit demarrer qu\'a 90-95C',
      'Purger le circuit de refroidissement pour eliminer bulles d\'air (gratuit DIY ou 30-60 euros garage)'
    ],
    riskExplanation: "Un code P0116 non traite provoque une surconsommation importante de carburant car l'ECU enrichit excessivement le melange en pensant que le moteur est froid. Le catalyseur peut etre endommage par ce melange trop riche. Si le probleme vient d'une vraie surchauffe cachee par un capteur defectueux, le moteur risque une casse grave (joint de culasse). Intervention recommandee sous 2-4 semaines maximum.",
    faq: [
      {
        question: 'Comment differencier P0115 et P0116 sur le capteur ECT?',
        answer: 'Le P0115 indique un probleme electrique (circuit ouvert, court-circuit, pas de signal), tandis que le P0116 signale que le capteur fonctionne mais donne des valeurs incoherentes. Avec P0115 la temperature affichee est souvent figee a -40C ou 140C. Avec P0116 la temperature affichee evolue mais pas comme elle devrait (trop lente a monter, reste bloquee a 60C, monte puis redescend anormalement). Le P0116 pointe souvent vers un thermostat bloque ouvert plutot que vers le capteur lui-meme.'
      },
      {
        question: 'Le thermostat est-il souvent la cause du P0116?',
        answer: 'Oui c\'est la cause numero 1 (55% des cas). Un thermostat bloque en position ouverte fait circuler le liquide en permanence dans le radiateur, empechant le moteur d\'atteindre sa temperature de fonctionnement optimale (90-95C). Le moteur reste entre 60-75C ce qui est trop froid. L\'ECU detecte cette anomalie car la temperature devrait monter plus vite. Un thermostat coute 30-80 euros et se change en 1-2h. C\'est souvent la premiere chose a verifier avant de remplacer le capteur ECT.'
      },
      {
        question: 'Puis-je rouler avec ce code sans endommager le moteur?',
        answer: 'Oui vous pouvez rouler temporairement mais avec precautions. Si le moteur ne chauffe pas assez (thermostat defaillant), il n\'y a pas de danger immediat mais vous consommerez 15-25% de carburant en plus et userez prematurement le catalyseur. Par contre si le capteur indique faussement une temperature basse alors que le moteur surchauffe reellement, la vous risquez une casse grave du joint de culasse. Verifiez donc que la jauge de temperature au tableau de bord et le ventilateur fonctionnent normalement. Si vous constatez des signes de surchauffe (vapeur, odeur), arretez immediatement.'
      },
      {
        question: 'Comment verifier si mon thermostat fonctionne correctement?',
        answer: 'Demarrez le moteur a froid et surveillez la montee en temperature au tableau de bord. Un thermostat sain doit permettre d\'atteindre 90C en 5-8 minutes de fonctionnement. Si apres 15 minutes la temperature est encore sous 80C, le thermostat est probablement bloque ouvert. Autre test: touchez (prudemment) la durite superieure du radiateur apres 5 min. Elle doit rester froide au debut, puis devenir chaude d\'un coup quand le thermostat s\'ouvre vers 90C. Si elle est tiede des le debut, le thermostat est HS.'
      },
      {
        question: 'Quel est le cout total de la reparation?',
        answer: 'Si c\'est le thermostat: 30-80 euros piece + 50-100 euros main d\'oeuvre = 80-180 euros total garage. En DIY: 30-80 euros uniquement. Si c\'est le capteur ECT: 15-50 euros piece + 30-60 euros main d\'oeuvre = 45-110 euros total. Si c\'est juste un manque de liquide: 10-30 euros de liquide de refroidissement. La reparation est donc relativement abordable. Le diagnostic avec valise OBD permet de cibler rapidement la cause et d\'eviter de remplacer des pieces inutilement.'
      }
    ],
    relatedCodes: ['P0115', 'P0117', 'P0118', 'P0125', 'P0128']
  },
  P0117: {
    code: 'P0117',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0117 indique que le signal du capteur de temperature du liquide de refroidissement (ECT) est anormalement bas, en dessous du seuil minimum acceptable. Concretement, le capteur envoie une tension qui correspond a une temperature extremement froide (souvent -40C a -20C) alors que ce n'est pas physiquement possible. Ce code apparait generalement en cas de court-circuit du fil de signal a la masse, ou d'un capteur en panne qui presente une resistance trop faible. Contrairement au P0118 qui signale un signal trop haut, le P0117 fait croire a l'ECU que le moteur est glace, ce qui declenche un enrichissement massif du melange et provoque surconsommation et pollution.",
    symptoms: [
      'Voyant moteur allume au demarrage ou pendant la conduite',
      'Jauge de temperature au tableau de bord bloquee completement en bas (-40C affiche)',
      'Demarrage tres difficile surtout par temps froid avec calages repetes',
      'Surconsommation de carburant extreme (30-50% supplementaire) avec fumee noire',
      'Ralenti tres haut au demarrage (1500-2000 rpm) qui ne redescend jamais',
      'Moteur qui tourne tres riche avec forte odeur d\'essence a l\'echappement',
      'Performances degradees avec hesitations et a-coups a l\'acceleration'
    ],
    causes: [
      'Court-circuit du fil de signal du capteur ECT a la masse (50% des cas)',
      'Capteur ECT en panne interne presentant une resistance quasi nulle (30% des cas)',
      'Connecteur du capteur corrode ou rempli d\'eau creant court-circuit (10% des cas)',
      'Fil de signal endommage ou denude touchant la carrosserie ou le bloc moteur (5% des cas)',
      'Faux contact dans le faisceau electrique du capteur (3% des cas)',
      'Capteur mal monte touchant la masse du bloc moteur (rare)',
      'Probleme dans l\'ECU lui-meme sur l\'entree du capteur (tres rare, moins de 1%)'
    ],
    solutions: [
      'Debrancher le capteur ECT et mesurer sa resistance a temperature ambiante (devrait etre 2000-3000 ohms a 20C)',
      'Verifier continuite et absence de court-circuit du cablage avec multimetre',
      'Nettoyer le connecteur du capteur avec bombe contact electrique (10-15 euros)',
      'Remplacer le capteur ECT s\'il presente resistance anormale ou court-circuit (15-50 euros)',
      'Reparer ou remplacer le faisceau electrique si fil endommage (30-100 euros)',
      'Verifier que le capteur est bien isole du bloc moteur (joint torique present)',
      'Effacer les codes defaut apres reparation et verifier disparition du code'
    ],
    riskExplanation: "Un code P0117 provoque un enrichissement excessif permanent du melange air-carburant, causant surconsommation extreme et emission de fumee noire polluante. Le catalyseur peut etre rapidement endommage par l'exces de carburant imbrue qui le surchauffe. Les bougies d'allumage s'encrassent rapidement causant des rates d'allumage. L'huile moteur se dilue avec du carburant, reduisant ses proprietes lubrifiantes. Reparation recommandee sous 1-2 semaines maximum.",
    faq: [
      {
        question: 'Comment tester le capteur ECT pour confirmer qu\'il est HS?',
        answer: 'Debranchez le connecteur du capteur. Avec un multimetre en mode ohmmetre, mesurez la resistance entre les deux bornes du capteur. A temperature ambiante (20C), vous devriez lire 2000-3000 ohms selon les modeles. Si vous lisez moins de 100 ohms, le capteur est en court-circuit interne. Si vous lisez infinite (OL), il est en circuit ouvert. Un capteur sain voit sa resistance diminuer quand la temperature augmente: testez en plongeant le capteur dans eau chaude, la resistance devrait baisser progressivement.'
      },
      {
        question: 'Le code peut-il venir d\'un probleme de cablage plutot que du capteur?',
        answer: 'Oui absolument, dans 50% des cas de P0117 c\'est le cablage qui est en cause. Le fil de signal est souvent pres du bloc moteur ou de pieces chaudes et peut fondre, se denuer et toucher la masse. Verifiez visuellement tout le faisceau du capteur jusqu\'a l\'ECU. Mesurez aussi la resistance entre la broche signal du capteur (debranche) et la masse du vehicule: vous devez lire infinite. Si vous lisez continuite (0 ohm), il y a un court-circuit quelque part dans le faisceau. Reparation: isoler le fil endommage ou remplacer la section de faisceau.'
      },
      {
        question: 'Pourquoi l\'ECU enrichit-il autant le melange avec ce code?',
        answer: 'L\'ECU recoit un signal lui indiquant -40C, ce qui pour lui signifie moteur glace necessitant beaucoup plus de carburant pour demarrer et tourner. A froid, un moteur a besoin d\'un melange tres riche car l\'essence s\'evapore mal. L\'ECU augmente donc l\'injection de 30-50% et maintient le ralenti eleve. Mais si en realite le moteur est chaud et que seul le capteur est defectueux, ce melange ultra-riche provoque fumee noire, surconsommation, encrassement bougies et catalyseur. C\'est pourquoi ce code doit etre traite rapidement.'
      },
      {
        question: 'Puis-je temporairement debrancher le capteur pour voir si ca change quelque chose?',
        answer: 'Oui c\'est un test diagnostique valide. Si vous debranchez completement le capteur ECT, l\'ECU detectera un circuit ouvert et basculera en mode degrade avec valeur de temperature par defaut (souvent 80C). Vous devriez voir le ralenti redevenir normal et la surconsommation disparaitre. Si les symptomes s\'ameliorent capteur debranche, ca confirme que le capteur ou son cablage est en cause. Attention: ne roulez pas longtemps capteur debranche car l\'ECU n\'a plus d\'info temperature et ne peut pas proteger le moteur contre surchauffe.'
      },
      {
        question: 'Combien coute la reparation de ce code defaut?',
        answer: 'Si c\'est juste le capteur: 15-50 euros piece + 30-60 euros main d\'oeuvre = 45-110 euros total garage. En DIY: 15-50 euros seulement. Si c\'est le connecteur corrode: nettoyage gratuit ou 10-15 euros de bombe contact. Si c\'est le faisceau endommage: 30-100 euros selon longueur a remplacer + 50-150 euros main d\'oeuvre = 80-250 euros total. Dans 80% des cas c\'est juste le capteur a changer, donc budget previsionnel 50-120 euros. C\'est une reparation simple et abordable.'
      }
    ],
    relatedCodes: ['P0115', 'P0116', 'P0118', 'P0125', 'P0128']
  },
  P0118: {
    code: 'P0118',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0118 signale que le signal du capteur de temperature du liquide de refroidissement (ECT) est anormalement eleve, au-dessus du seuil maximum acceptable. Le capteur envoie une tension correspondant a une temperature extremement haute (souvent 140C ou plus) alors que ce n'est pas la realite. Ce code apparait typiquement en cas de circuit ouvert du fil de signal, ou d'un capteur defaillant avec resistance infinie. A l'oppose du P0117 qui indique signal trop bas, le P0118 fait croire a l'ECU que le moteur est bouillant, ce qui declenche un appauvrissement excessif du melange et peut provoquer surchauffe reelle, cliquetis et dommages moteur.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Jauge de temperature bloquee completement en haut (140C+ affiche)',
      'Demarrage difficile avec moteur qui tousse et cale a chaud',
      'Ralenti tres bas et instable voir moteur qui cale au ralenti',
      'Ventilateur de refroidissement qui tourne en permanence des le demarrage',
      'Perte de puissance notable avec hesitations a l\'acceleration',
      'Cliquetis moteur (bruit de cognement metallique) surtout en charge'
    ],
    causes: [
      'Circuit ouvert du fil de signal du capteur ECT (coupure, connecteur debranche) (50% des cas)',
      'Capteur ECT en panne avec resistance infinie (circuit ouvert interne) (30% des cas)',
      'Connecteur du capteur mal enfiche ou corrode perdant le contact (10% des cas)',
      'Fil de signal coupe ou casse dans le faisceau electrique (5% des cas)',
      'Mauvaise masse du capteur ECT ou de l\'ECU (3% des cas)',
      'Infiltration d\'eau dans le connecteur ayant corrode les broches',
      'Capteur ECT monte sans joint torique creant fuite et probleme electrique'
    ],
    solutions: [
      'Verifier que le connecteur du capteur ECT est bien enfiche et propre',
      'Mesurer resistance du capteur: debranche, il doit afficher 2000-3000 ohms a 20C, pas infini',
      'Verifier continuite du cablage entre capteur et ECU avec multimetre',
      'Nettoyer ou remplacer le connecteur si corrode ou endommage (5-20 euros)',
      'Remplacer le capteur ECT s\'il affiche resistance infinie (15-50 euros)',
      'Reparer le faisceau electrique si coupure detectee (30-100 euros)',
      'Verifier masse du capteur et nettoyer point de masse si oxyde'
    ],
    riskExplanation: "Un code P0118 fait basculer l'ECU en mode degrade avec un melange trop pauvre, ce qui provoque surchauffe moteur, cliquetis (pre-detonation destructrice) et risque de casse du joint de culasse ou fusion pistons. Le ventilateur tournant en permanence use prematurement son moteur electrique et vide la batterie. L'absence d'info temperature empeche l'ECU de proteger le moteur. Intervention urgente recommandee sous 1 semaine maximum.",
    faq: [
      {
        question: 'Pourquoi le ventilateur tourne-t-il en permanence avec ce code?',
        answer: 'Quand l\'ECU recoit un signal lui indiquant 140C ou plus, il considere que le moteur est en surchauffe critique et active le ventilateur de refroidissement en mode forcage maximum pour tenter de refroidir. C\'est une securite pour proteger le moteur. Le probleme c\'est que le moteur n\'est pas reellement en surchauffe, c\'est juste le capteur qui donne une fausse information. Le ventilateur tournant inutilement en permanence use son moteur electrique prematurement et peut vider la batterie si le vehicule roule peu. Une fois le capteur ou son cablage repare, le ventilateur reprendra son fonctionnement normal.'
      },
      {
        question: 'Comment differencier vraie surchauffe et faux signal du capteur?',
        answer: 'Si c\'est un faux signal (P0118), la jauge temperature saute instantanement a fond au demarrage a froid, ce qui est physiquement impossible. Le moteur demarre normalement et ne vapore pas. Si c\'est une vraie surchauffe, la temperature monte progressivement pendant la conduite, vous voyez de la vapeur sous le capot, sentez odeur de liquide brule, et le moteur perd de la puissance. Autre test: touchez prudemment la durite superieure du radiateur. Si elle est froide ou tiede alors que jauge affiche 140C, c\'est un faux signal du capteur.'
      },
      {
        question: 'Le code peut-il apparaitre juste a cause d\'un connecteur debranche?',
        answer: 'Oui absolument, c\'est meme une cause tres frequente (10% des cas). Si le connecteur du capteur ECT est mal enfiche, debranche accidentellement, ou si les clips de verrouillage sont casses, le circuit devient ouvert et l\'ECU lit une resistance infinie = temperature maximale. Avant de remplacer quoi que ce soit, verifiez toujours que le connecteur est bien enfonce a fond et que les clips tiennent bien. Un simple reenclenchement du connecteur peut suffire a resoudre le probleme. Si le connecteur est use, remplacez-le pour 5-20 euros.'
      },
      {
        question: 'Est-ce dangereux de continuer a rouler avec ce code?',
        answer: 'Oui c\'est potentiellement dangereux. L\'ECU appauvrit excessivement le melange en croyant que le moteur est bouillant, ce qui peut provoquer une vraie surchauffe et du cliquetis (pre-detonation qui martele les pistons et peut casser le moteur). De plus, sans info temperature fiable, l\'ECU ne peut pas proteger le moteur si une vraie surchauffe survient. Vous risquez donc de ne pas etre alerte a temps et de crever le joint de culasse. Enfin, le ventilateur tournant en permanence peut vider votre batterie. Faites reparer rapidement, sous 1 semaine maximum.'
      },
      {
        question: 'Quel est le cout de reparation pour ce code P0118?',
        answer: 'Si c\'est juste le connecteur mal enfiche: gratuit (reenclenchement). Si c\'est le connecteur corrode: 5-20 euros de nouveau connecteur. Si c\'est le capteur: 15-50 euros piece + 30-60 euros main d\'oeuvre = 45-110 euros total garage, ou 15-50 euros DIY. Si c\'est le cablage coupe: 30-100 euros selon longueur + 50-150 euros main d\'oeuvre = 80-250 euros total. Dans 80% des cas c\'est le capteur ou le connecteur, donc budget previsionnel: 50-130 euros. C\'est une reparation abordable qui evite des degats moteur couteux.'
      }
    ],
    relatedCodes: ['P0115', 'P0116', 'P0117', 'P0125', 'P0128']
  },
  P0119: {
    code: 'P0119',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0119 indique un signal intermittent ou erratique du capteur de temperature du liquide de refroidissement (ECT). Contrairement aux codes P0117 et P0118 qui signalent un signal constamment trop bas ou trop haut, le P0119 detecte des variations anormales et rapides du signal qui ne correspondent pas au comportement thermique reel d'un moteur. Un moteur chauffe progressivement et la temperature ne peut pas varier de 50 degres en quelques secondes. Ce code apparait en cas de faux contact intermittent dans le connecteur ou le faisceau, ou d'un capteur en fin de vie qui donne des valeurs instables. Ces variations perturbent gravement la gestion moteur car l'ECU ne sait plus si le moteur est chaud ou froid.",
    symptoms: [
      'Voyant moteur qui s\'allume et s\'eteint par intermittence',
      'Jauge de temperature au tableau de bord qui oscille anormalement (70C puis 120C puis 80C)',
      'Ralenti qui monte et descend de facon erratique (600 rpm puis 1200 rpm)',
      'A-coups a l\'acceleration et hesitations moteur impredictibles',
      'Surconsommation variable selon que l\'ECU croit le moteur froid ou chaud',
      'Demarrage parfois facile, parfois difficile sans raison apparente',
      'Ventilateur qui demarre et s\'arrete de facon anarchique'
    ],
    causes: [
      'Faux contact intermittent dans le connecteur du capteur ECT (40% des cas)',
      'Capteur ECT en fin de vie donnant valeurs instables (30% des cas)',
      'Fil de signal partiellement coupe ou endommage creant contact intermittent (15% des cas)',
      'Connecteur corrode avec oxydation variable selon humidite et vibrations (10% des cas)',
      'Mauvaise masse du capteur ou de l\'ECU creant parasites (3% des cas)',
      'Vibrations moteur causant deconnexions momentanees du connecteur mal clipse',
      'Interference electromagnetique sur le fil de signal (bougies, alternateur)'
    ],
    solutions: [
      'Nettoyer a fond le connecteur du capteur avec bombe contact electronique (10-15 euros)',
      'Verifier que le connecteur est bien verrouille et ne bouge pas avec vibrations moteur',
      'Inspecter visuellement le faisceau electrique du capteur sur toute sa longueur',
      'Remplacer le capteur ECT s\'il est ancien (plus de 10 ans) ou donne valeurs erratiques (15-50 euros)',
      'Remplacer le connecteur s\'il est use, fondu ou corrode (5-20 euros)',
      'Reparer le faisceau si coupure partielle ou denudage detecte (30-80 euros)',
      'Verifier et nettoyer les masses du moteur et de l\'ECU'
    ],
    riskExplanation: "Un signal ECT intermittent perturbe completement la gestion moteur qui oscille entre mode froid enrichi et mode chaud appauvri. Cela provoque surconsommation, encrassement des bougies, usure prematuree du catalyseur par richesse variable, et risque de cliquetis quand le melange s'appauvrit brutalement. Le moteur ne fonctionne jamais dans ses parametres optimaux. A long terme, ces dysfonctionnements peuvent endommager soupapes et pistons. Reparation recommandee sous 2-3 semaines.",
    faq: [
      {
        question: 'Comment un signal intermittent peut-il perturber autant le moteur?',
        answer: 'L\'ECU se base sur la temperature moteur pour ajuster des dizaines de parametres: enrichissement carburant, avance allumage, ralenti, ouverture papillon, ventilateur, etc. Quand le signal ECT oscille entre 60C et 120C en quelques secondes, l\'ECU modifie constamment tous ces parametres en pensant que le moteur refroidit puis rechauffe. Resultat: le ralenti monte-descend, le melange devient riche puis pauvre, l\'allumage avance puis recule. Le moteur ne fonctionne jamais de facon stable et optimale. C\'est comme conduire avec quelqu\'un qui accelere et freine en permanence sans raison.'
      },
      {
        question: 'Le probleme peut-il venir des vibrations moteur sur le connecteur?',
        answer: 'Oui c\'est une cause frequente (40% des cas). Le connecteur du capteur ECT est monte directement sur le bloc moteur qui vibre en permanence. Si les clips de verrouillage du connecteur sont uses ou casses, le connecteur peut bouger legerement avec les vibrations, creant des micro-deconnexions. Chaque micro-coupure cree un signal erratique. Verifiez que le connecteur est bien clipse a fond et ne bouge pas si vous le tirez doucement. Si les clips sont uses, remplacez le connecteur pour 5-20 euros. Un connecteur bien verrouille ne doit pas pouvoir bouger du tout.'
      },
      {
        question: 'Dois-je remplacer le capteur ou d\'abord nettoyer le connecteur?',
        answer: 'Commencez toujours par nettoyer le connecteur avec une bombe contact electronique (10-15 euros). L\'oxydation et la crasse sur les broches causent 40% des P0119. Debranchez le connecteur, vaporisez les deux cotes, brossez doucement avec brosse a dent, laissez secher, rebranchez fermement. Effacez les codes et testez quelques jours. Si le code revient, alors remplacez le capteur (15-50 euros). Beaucoup de gens remplacent directement le capteur alors qu\'un simple nettoyage aurait suffi. Economisez argent et temps en diagnostiquant methodiquement.'
      },
      {
        question: 'Le code peut-il etre cause par des interferences electromagnetiques?',
        answer: 'Oui mais c\'est plus rare (moins de 5% des cas). Le fil de signal du capteur ECT transporte une tension tres faible (0-5V) et peut capter des parasites electromagn etiques emis par bougies d\'allumage, alternateur, ou demarreur. Si le fil n\'est pas bien blinde ou passe trop pres de ces composants, il peut capter des pics de tension qui perturbent le signal. Verifiez que le faisceau du capteur est bien fixe loin des cables haute tension des bougies et que le blindage n\'est pas endommage. Un mauvais blindage necessite remplacement du faisceau.'
      },
      {
        question: 'Combien coute la reparation de ce code intermittent?',
        answer: 'Si c\'est juste nettoyage connecteur: 10-15 euros de bombe contact (DIY) ou 30-50 euros garage. Si c\'est remplacement connecteur: 5-20 euros piece + 20-40 euros main d\'oeuvre = 25-60 euros total. Si c\'est remplacement capteur: 15-50 euros piece + 30-60 euros MO = 45-110 euros total. Si c\'est reparation faisceau: 30-80 euros + 50-100 euros MO = 80-180 euros total. Dans 70% des cas un nettoyage connecteur ou remplacement capteur suffit, donc budget previsionnel: 50-120 euros. Commencez par le moins cher (nettoyage) avant de remplacer des pieces.'
      }
    ],
    relatedCodes: ['P0115', 'P0116', 'P0117', 'P0118', 'P0125']
  },
  P0120: {
    code: 'P0120',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0120 indique un dysfonctionnement du circuit du capteur de position du papillon des gaz (TPS - Throttle Position Sensor). Ce capteur informe l'ECU de la position exacte du papillon (accelerateur) pour ajuster l'injection et l'allumage en consequence. Le P0120 est un code generique qui signale un probleme electrique sur ce circuit: signal hors plage, incohérent avec d'autres capteurs, ou circuit ouvert/court-circuite. Ce capteur est critique car il indique a l'ECU l'intention du conducteur (acceleration, deceleration, ralenti). Un TPS defaillant provoque des a-coups severes, ralenti instable, et perte de puissance car l'ECU ne sait plus comment adapter le melange air-carburant.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'A-coups violents a l\'acceleration comme si moteur hesitait',
      'Ralenti tres instable oscillant entre 500 et 1500 rpm',
      'Perte de puissance notable surtout a bas regime',
      'Acceleration qui ne repond plus ou repond avec retard important',
      'Moteur qui cale au ralenti ou lors de decelerations brutales',
      'Mode degrade active limitant regime moteur a 3000 rpm'
    ],
    causes: [
      'Capteur TPS use ou defaillant donnant valeurs incorrectes (45% des cas)',
      'Connecteur du TPS corrode ou mal enfiche (20% des cas)',
      'Faisceau electrique endommage ou coupe entre TPS et ECU (15% des cas)',
      'Mauvaise masse du capteur TPS ou de l\'ECU (10% des cas)',
      'Corps de papillon encrasse bloquant mecaniquement le papillon (5% des cas)',
      'Reglage incorrect du TPS apres remplacement ou intervention (3% des cas)',
      'Court-circuit dans le circuit du TPS (rare, 2% des cas)'
    ],
    solutions: [
      'Verifier avec valise diagnostic les valeurs du TPS: 0.5V papillon ferme, 4.5V papillon ouvert',
      'Nettoyer le connecteur du TPS et verifier qu\'il est bien verrouille',
      'Tester tension d\'alimentation du TPS: doit recevoir 5V reference de l\'ECU',
      'Verifier continuite et absence court-circuit du cablage avec multimetre',
      'Nettoyer le corps de papillon a la bombe nettoyant carburateur (10-20 euros)',
      'Remplacer le capteur TPS s\'il donne valeurs hors plage (40-120 euros)',
      'Recalibrer le TPS avec valise diagnostic apres installation ou nettoyage'
    ],
    riskExplanation: "Un capteur TPS defaillant empeche l'ECU de connaitre la demande du conducteur, ce qui rend la conduite dangereuse avec accelerations imprevisibles ou absence de reponse. Le mode degrade peut se declencher et limiter severement les performances. A long terme, le melange air-carburant mal adapte provoque encrassement moteur, usure prematuree catalyseur et consommation excessive. Intervention recommandee sous 1-2 semaines pour retrouver une conduite normale et securisée.",
    faq: [
      {
        question: 'Comment fonctionne le capteur de position papillon TPS?',
        answer: 'Le TPS est un potentiometre (resistance variable) monte sur l\'axe du papillon des gaz. Quand vous appuyez sur l\'accelerateur, le papillon s\'ouvre et fait tourner l\'axe du TPS. La resistance change, faisant varier la tension de sortie entre 0.5V (papillon ferme, ralenti) et 4.5V (papillon grand ouvert, pleine charge). L\'ECU lit cette tension en temps reel et sait exactement combien vous accelerez. Il ajuste alors instantanement injection carburant et avance allumage. Un TPS use donne des valeurs erronees ou instables, trompant l\'ECU qui n\'adapte plus correctement le melange.'
      },
      {
        question: 'Puis-je tester le TPS moi-meme avec un multimetre?',
        answer: 'Oui c\'est faisable. Mettez contact sans demarrer. Trouvez le fil de signal du TPS (souvent fil du milieu sur connecteur 3 broches). Mesurez tension entre signal et masse: papillon ferme doit afficher 0.5-0.9V, papillon ouvert 4.0-4.8V. Ouvrez progressivement le papillon a la main, la tension doit monter lineairement sans a-coups ni sauts. Si vous voyez des sauts de tension, des zones mortes, ou valeurs hors plage, le TPS est defectueux. Si les valeurs sont bonnes mais le code persiste, verifiez le cablage et les masses.'
      },
      {
        question: 'Un corps de papillon sale peut-il causer ce code?',
        answer: 'Oui indirectement dans 5% des cas. Un corps de papillon tres encrasse (depot noir de calamine) peut empecher le papillon de se fermer completement au ralenti ou de s\'ouvrir librement. Le TPS lit alors une position qui ne correspond pas a ce que l\'ECU attend. Par exemple: papillon physiquement bloque a 10% d\'ouverture mais TPS indique 5%. L\'ECU detecte cette incoherence et declenche P0120. Avant de remplacer le TPS, nettoyez toujours le corps de papillon avec bombe nettoyante pour voir si ca resout le probleme. Cout: 10-20 euros de produit.'
      },
      {
        question: 'Faut-il recalibrer le TPS apres remplacement?',
        answer: 'Ca depend du vehicule. Sur certains modeles le TPS est auto-calibrant: vous mettez contact, attendez 30 secondes sans toucher accelerateur, et l\'ECU apprend automatiquement les valeurs ralenti/pleine charge. Sur d\'autres modeles il faut une valise diagnostic pour forcer la procedure d\'apprentissage. Consultez la procedure specifique a votre vehicule. Sans calibration correcte, meme un TPS neuf peut donner des valeurs decalees et generer P0120. Un garage facturera 30-50 euros pour cette calibration si vous ne pouvez pas la faire vous-meme.'
      },
      {
        question: 'Quel est le cout de reparation d\'un code P0120?',
        answer: 'Si c\'est juste nettoyage corps papillon et connecteur: 10-30 euros DIY ou 40-80 euros garage. Si c\'est remplacement TPS: 40-120 euros piece + 50-100 euros main d\'oeuvre + calibration = 90-220 euros total garage, ou 40-120 euros DIY si vous faites calibration vous-meme. Si c\'est reparation cablage: 30-100 euros + 50-150 euros MO = 80-250 euros total. Budget previsionnel moyen: 100-200 euros garage. Le TPS est accessible sur la plupart des vehicules, donc reparation relativement simple.'
      }
    ],
    relatedCodes: ['P0121', 'P0122', 'P0123', 'P0220', 'P0222']
  },
  P0121: {
    code: 'P0121',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0121 signale un probleme de plage ou performance du capteur de position papillon (TPS). Contrairement au P0120 qui indique un probleme electrique general, le P0121 specifie que le signal du TPS ne correspond pas aux attentes de l'ECU en termes de coherence avec d'autres capteurs (MAP, MAF, regime moteur). Par exemple: le TPS indique papillon a 50% ouvert, mais le debit d'air mesure par le MAF est trop faible pour cette ouverture. L'ECU detecte cette incoherence et conclut que le TPS derive ou est mal calibre. Ce code peut aussi apparaitre si le TPS repond trop lentement aux mouvements du papillon, indiquant une usure mecanique du potentiometre.",
    symptoms: [
      'Voyant moteur allume pendant conduite',
      'Hesitations et a-coups lors des accelerations progressives',
      'Reponse a l\'accelerateur qui semble en retard ou imprecise',
      'Ralenti instable surtout apres deceleration',
      'Difficulte a maintenir vitesse constante, moteur qui brout e',
      'Consommation de carburant legerement augmentee',
      'Regime moteur qui monte en dents de scie au lieu de progressivement'
    ],
    causes: [
      'Capteur TPS use avec pistes resistives usees donnant signal erratique (50% des cas)',
      'Decalibrage du TPS suite a nettoyage corps papillon ou intervention (20% des cas)',
      'Corps de papillon encrasse causant ouverture incoherente avec signal TPS (15% des cas)',
      'Fuite d\'air apres papillon faussant correlation TPS/MAP/MAF (10% des cas)',
      'Reglage mecanique incorrect du TPS apres montage (3% des cas)',
      'Defaut intermittent du cablage donnant signal instable (rare)',
      'Probleme du papillon motorise (drive-by-wire) repondant mal aux ordres'
    ],
    solutions: [
      'Comparer avec valise diagnostic les valeurs TPS vs MAP vs MAF pour identifier incohérence',
      'Nettoyer le corps de papillon et verifier que papillon se ferme completement (10-20 euros)',
      'Recalibrer le TPS avec procedure d\'apprentissage specifique au vehicule',
      'Verifier absence de fuites d\'air sur durites entre papillon et collecteur admission',
      'Tester reponse du TPS: ouvrir papillon doucement et voir si signal suit lineairement',
      'Remplacer le TPS si usure des pistes resistives detectee (40-120 euros)',
      'Verifier et ajuster le reglage mecanique du TPS si vis de reglage presente'
    ],
    riskExplanation: "Un TPS mal calibre ou use perturbe l'optimisation du melange air-carburant sur toute la plage de fonctionnement. Le moteur fonctionne en permanence avec parametres sous-optimaux: surconsommation, performances reduites, emissions polluantes excessives. L'usure du catalyseur s'accelere. La conduite devient imprecise et fatigante avec reponse accelerateur imprevisible. Bien que non dangereux immediatement, ce defaut reduit agrément et economie. Reparation recommandee sous 1 mois.",
    faq: [
      {
        question: 'Quelle difference entre P0120 et P0121 sur le capteur TPS?',
        answer: 'Le P0120 indique un probleme electrique global: circuit ouvert, court-circuit, signal hors des limites absolues (moins de 0.3V ou plus de 4.9V). C\'est un defaut franc. Le P0121 est plus subtil: le signal electrique est valide (entre 0.5V et 4.5V) mais les valeurs ne correspondent pas a ce que l\'ECU attend en comparant avec autres capteurs. Par exemple: TPS dit 30% ouvert, mais debit air du MAF correspond a 15% ouvert. Il y a incoherence dans la correlation des capteurs. P0121 pointe souvent vers TPS use, mal calibre, ou corps papillon sale.'
      },
      {
        question: 'Comment recalibrer le TPS apres nettoyage du papillon?',
        answer: 'Procedure generique (verifiez specifique a votre modele): 1) Nettoyez corps papillon et assurez fermeture complete papillon. 2) Mettez contact sans demarrer. 3) Attendez 30-60 secondes sans toucher accelerateur pour que ECU memorise position ralenti. 4) Appuyez progressivement accelerateur a fond et maintenez 10 secondes pour ECU memorise pleine ouverture. 5) Relache z lentement. 6) Coupez contact, attendez 10 secondes, redemarrez. L\'ECU a reappris les positions extreme s. Effacez codes defaut. Si ca ne fonctionne pas, utilisez valise diagnostic pour forcer apprentissage.'
      },
      {
        question: 'Le nettoyage du corps de papillon peut-il causer ce code?',
        answer: 'Oui c\'est frequen t (20% des cas de P0121). Un papillon tres encrasse est souvent partiellement bloque en position legerement ouverte. L\'ECU a adapte ses parametres a cette situation anormale. Quand vous nettoyez le papillon, il se ferme soudainement completement, changeant le debit d\'air au ralenti. Le TPS indique alors une position differente de ce que l\'ECU a memorise. Il faut donc toujours recalibrer le TPS apres nettoyage papillon. Si vous oubliez, le ralenti sera trop bas (600-700 rpm instable) et P0121 apparaitra. La recalibration resout le probleme sans rien changer.'
      },
      {
        question: 'Une fuite d\'air peut-elle generer un code TPS?',
        answer: 'Oui indirectement (10% des cas). Une fuite d\'air apres le papillon (durite percee, joint collecteur, regulateur pression turbo) fait entrer de l\'air non mesure dans le moteur. Le papillon est peu ouvert (TPS dit 10%) mais le moteur recoit beaucoup d\'air comme si papillon etait a 25%. L\'ECU detecte cette incoherence entre position TPS et debit air reel (mesure par MAP ou MAF). Il declenche alors P0121 pensant que le TPS derive. Avant de remplacer le TPS, cherchez systematiquement les fuites d\'air avec fumigene ou en ecoutant sifflements moteur tournant.'
      },
      {
        question: 'Combien coute la reparation d\'un P0121?',
        answer: 'Si c\'est juste recalibration TPS: gratuit DIY ou 30-50 euros garage. Si c\'est nettoyage papillon + recalibration: 10-20 euros produit DIY ou 60-100 euros garage. Si c\'est remplacement TPS: 40-120 euros piece + 50-100 euros MO = 90-220 euros total. Si c\'est reparation fuite air: 20-80 euros selon piece + 40-120 euros MO = 60-200 euros total. Dans 70% des cas une recalibration ou nettoyage suffis ent, donc essayez ca avant de remplacer des pieces. Budget previsionnel: 50-150 euros.'
      }
    ],
    relatedCodes: ['P0120', 'P0122', 'P0123', 'P0171', 'P0174']
  },
  P0122: {
    code: 'P0122',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0122 indique que le signal du capteur de position papillon (TPS) est anormalement bas, en dessous du seuil minimum acceptable. Le TPS envoie une tension trop faible (typiquement moins de 0.2V) alors que le papillon est cense etre ferme au ralenti (0.5V) ou ouvert en acceleration (jusqu'a 4.5V). Ce code signale generalement un court-circuit du fil de signal a la masse, un capteur TPS defaillant, ou un connecteur corrode. Contrairement au P0123 qui indique signal trop haut, le P0122 fait croire a l'ECU que le papillon est ferme alors qu'il ne l'est peut-etre pas, perturbant completement la gestion du melange air-carburant et l'avance allumage.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Ralenti tres eleve (1500-2000 rpm) qui ne descend pas',
      'Moteur qui accelere tout seul sans toucher la pedale',
      'Perte de puissance lors des accelerations',
      'A-coups et hesitations moteur en conduite',
      'Mode degrade active limitant les performances',
      'Impossibilite de regler ralenti correctement'
    ],
    causes: [
      'Court-circuit du fil de signal TPS a la masse (45% des cas)',
      'Capteur TPS defaillant avec resistance interne trop faible (30% des cas)',
      'Connecteur TPS corrode ou rempli d\'eau creant court-circuit (15% des cas)',
      'Fil de signal endommage touchant masse moteur ou carrosserie (5% des cas)',
      'Mauvais reglage mecanique du TPS (position incorrecte) (3% des cas)',
      'TPS mal monte avec vis de fixation desserrees causant rotation capteur',
      'Probleme dans l\'ECU sur entree TPS (tres rare, moins de 1%)'
    ],
    solutions: [
      'Verifier tension TPS papillon ferme: devrait etre 0.5-0.9V, pas moins de 0.2V',
      'Tester resistance cablage entre signal TPS et masse: doit afficher infinite',
      'Nettoyer connecteur TPS avec bombe contact electronique (10-15 euros)',
      'Verifier serrage vis fixation TPS et reglage position capteur',
      'Remplacer le capteur TPS s\'il presente court-circuit interne (40-120 euros)',
      'Reparer faisceau electrique si fil endommage touche masse (30-100 euros)',
      'Recalibrer TPS apres reparation avec procedure apprentissage'
    ],
    riskExplanation: "Un signal TPS trop bas perturbe gravementla gestion moteur: l'ECU croit que vous n'accelerez pas alors que le papillon peut etre ouvert, provoquant melange inadapte et risque de surchauffe moteur. Le ralenti tres eleve use prematurement embrayage et boite. Le mode degrade limite les performances et rend la conduite dangereuse avec reponse accelerateur imprevisible. Intervention recommandee sous 1 semaine maximum.",
    faq: [
      {
        question: 'Pourquoi le ralenti est-il si eleve avec ce code?',
        answer: 'Quand l\'ECU recoit un signal TPS trop bas (moins de 0.2V), il pense que le papillon est completement ferme. Pour eviter que le moteur cale, il active le ralenti accelere de secours (fast idle) comme au demarrage a froid. Il maintient donc ralenti entre 1500-2000 rpm. Mais si en realite le papillon n\'est pas completement ferme ou que vous accelerez, l\'ECU n\'adapte pas l\'injection en consequence. C\'est dangereux car le moteur peut accelerer tout seul. Une fois le TPS repare et recalibre, le ralenti reviendra a la normale (700-900 rpm).'
      },
      {
        question: 'Comment tester si c\'est un court-circuit du cablage?',
        answer: 'Debranchez le connecteur du TPS. Mettez contact sans demarrer. Mesurez la tension sur le fil de signal cote faisceau (pas cote capteur): vous devriez lire 5V car c\'est la tension de reference fournie par l\'ECU. Si vous lisez moins de 1V, il y a un court-circuit du fil vers la masse quelque part dans le faisceau. Ensuite, moteur eteint, mesurez resistance entre le fil signal et la masse du vehicule: doit afficher infinite (OL). Si vous lisez continuite (moins de 100 ohms), le fil touche la masse. Cherchez fil denude ou connecteur corrode.'
      },
      {
        question: 'Le reglage mecanique du TPS peut-il etre en cause?',
        answer: 'Oui dans 3% des cas. Sur certains vehicules le TPS se fixe avec vis oblongues (trous ovales) permettant rotation du capteur pour ajuster position de reference. Si les vis se desserrent ou si le TPS a ete mal regle lors montage, le capteur peut indiquer fermeture complete alors que le papillon est legerement ouvert. Verifiez que les vis sont bien serrees. Pour regler: papillon completement ferme (pedale accelerateur relachee), tension TPS doit etre 0.5-0.9V. Si elle est trop basse, desserrez vis, tournez legerement TPS jusqu\'a obtenir 0.7V, resserrez.'
      },
      {
        question: 'Le moteur peut-il accelerer tout seul avec P0122?',
        answer: 'Oui c\'est possible et dangereux. Si le signal TPS est coince a 0V (court-circuit), l\'ECU croit que vous n\'accelerez jamais. Mais si vous ouvrez physiquement le papillon avec pedale, l\'air entre dans moteur sans que ECU augmente injection proportionnellement. Le moteur devient incontrôlable: soit il cale, soit il accelere de facon incoherente selon comment l\'ECU tente de compenser. C\'est particulierement dangereux en conduite car reponse pedale devient totalement imprevisible. Si vous constatez ce phenomene, roulez tres prudemment et faites reparer en urgence sous 24-48h.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0122?',
        answer: 'Si c\'est juste nettoyage connecteur: 10-15 euros bombe contact DIY ou 30-50 euros garage. Si c\'est reglage mecanique TPS: gratuit DIY ou 30-50 euros garage. Si c\'est remplacement TPS: 40-120 euros piece + 50-100 euros MO + recalibration = 90-220 euros total. Si c\'est reparation faisceau: 30-100 euros + 50-150 euros MO = 80-250 euros total. Dans 75% des cas c\'est le capteur TPS a remplacer, donc budget previsionnel: 100-200 euros. Reparation relativement simple et rapide (1-2h).'
      }
    ],
    relatedCodes: ['P0120', 'P0121', 'P0123', 'P0220', 'P0222']
  },
  P0123: {
    code: 'P0123',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0123 signale que le signal du capteur de position papillon (TPS) est anormalement eleve, au-dessus du seuil maximum acceptable. Le TPS envoie une tension trop forte (typiquement plus de 4.8V) meme quand le papillon est au ralenti ou peu ouvert. Ce code indique generalement un circuit ouvert du fil de signal, un capteur TPS en panne, ou un probleme d'alimentation 5V. Contrairement au P0122 qui signale signal trop bas, le P0123 fait croire a l'ECU que le papillon est grand ouvert en permanence, provoquant injection excessive de carburant, ralenti instable et difficultes de conduite severes.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Demarrage tres difficile ou impossible',
      'Ralenti instable et tres bas (400-600 rpm) avec calages frequents',
      'Surconsommation de carburant avec fumee noire a l\'echappement',
      'Moteur qui broute et n\'accelere pas normalement',
      'Mode degrade avec limitation regime a 2500-3000 rpm',
      'Bougies d\'allumage qui s\'encrassent rapidement'
    ],
    causes: [
      'Circuit ouvert du fil de signal TPS (coupure, connecteur debranche) (45% des cas)',
      'Capteur TPS defaillant avec resistance infinie (circuit ouvert interne) (30% des cas)',
      'Connecteur TPS mal enfiche ou broches corrodees perdant contact (15% des cas)',
      'Fil de signal coupe dans le faisceau electrique (5% des cas)',
      'Probleme alimentation 5V du TPS (regulateur HS dans ECU) (3% des cas)',
      'Mauvaise masse du capteur TPS ou de l\'ECU',
      'Eau infiltree dans connecteur ayant corrode contacts'
    ],
    solutions: [
      'Verifier que connecteur TPS est bien enfiche et clips verrouilles',
      'Mesurer resistance TPS debranche: doit varier 1000-5000 ohms, pas infini',
      'Tester alimentation 5V sur broche reference TPS contact mis',
      'Verifier continuite fil signal entre TPS et ECU avec multimetre',
      'Nettoyer ou remplacer connecteur si corrode (5-20 euros)',
      'Remplacer capteur TPS si circuit ouvert interne detecte (40-120 euros)',
      'Reparer faisceau si coupure identifiee (30-100 euros)'
    ],
    riskExplanation: "Un signal TPS trop haut fait croire a l'ECU que vous accelerez a fond en permanence, declenchant injection excessive massive. Resultat: noyage moteur, surconsommation extreme (40-60% de plus), encrassement rapide bougies et catalyseur, fumee noire polluante. Le demarrage devient impossible (trop de carburant). Le mode degrade limite les performances et rend conduite tres dangereuse. Intervention urgente sous 48h recommandee.",
    faq: [
      {
        question: 'Pourquoi le moteur est-il si difficile a demarrer avec P0123?',
        answer: 'L\'ECU recoit un signal lui indiquant papillon grand ouvert (4.8V+), donc il injecte massivement du carburant comme si vous acceleriez a fond. Mais au demarrage le papillon est ferme, donc le moteur recoit enormement trop de carburant et se noie. C\'est comme si vous mainteniez accelerateur a fond en demarrant: ca noie le moteur. Les bougies se retrouvent trempees d\'essence et ne peuvent plus faire etincelle. Solution temporaire: pedale accelerateur a fond en demarrant pour ouvrir papillon et appauvrir melange, mais faites reparer rapidement car ca endommage catalyseur.'
      },
      {
        question: 'Comment differencier P0122 (signal bas) et P0123 (signal haut)?',
        answer: 'Avec P0122 (signal trop bas), le ralenti est tres eleve (1500-2000 rpm) car ECU croit papillon ferme et active fast idle. Avec P0123 (signal trop haut), le ralenti est tres bas et instable (400-600 rpm) avec calages car ECU croit papillon ouvert et injecte trop de carburant. Testez avec multimetre contact mis moteur eteint: P0122 affiche moins de 0.2V, P0123 affiche plus de 4.8V (ou aucune tension si circuit ouvert). P0123 cause aussi fumee noire alors que P0122 non.'
      },
      {
        question: 'Le connecteur simplement debranche peut-il causer ce code?',
        answer: 'Oui absolument, c\'est tres frequent (15% des cas). Si le connecteur TPS est accidentellement debranche, mal enfiche, ou si les clips de verrouillage sont casses, le circuit devient ouvert et l\'ECU lit tension maximale ou nulle (interprete comme >4.8V). Avant tout remplacement, verifiez systematiquement que connecteur est bien clipse a fond avec un clic audible. Inspectez aussi les broches du connecteur: si elles sont corrodees ou poussees vers l\'arriere, elles ne font plus contact. Un simple reconnecteur ou nettoyage peut suffire a resoudre le probleme.'
      },
      {
        question: 'Pourquoi y a-t-il autant de fumee noire avec ce code?',
        answer: 'L\'ECU injecte 40-60% de carburant en plus car il croit que vous accelerez a fond en permanence. Cette quantite enorme de carburant ne peut pas bruler completement dans les cylindres faute d\'assez d\'air. Le carburant imbrue sort a l\'echappement et brule partiellement dans le catalyseur et silencieux, creant epaisse fumee noire. Ce melange ultra-riche noie aussi les bougies qui s\'encrassent de calamine noire. Le catalyseur surchauffe dangereusement et peut fondre. C\'est pourquoi vous devez reparer en urgence sous 48h pour eviter destruction catalyseur (800-1500 euros de remplacement).'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0123?',
        answer: 'Si c\'est juste reconnexion connecteur: gratuit. Si c\'est nettoyage connecteur: 10-15 euros bombe DIY ou 30-50 euros garage. Si c\'est remplacement connecteur: 5-20 euros + 20-40 euros MO = 25-60 euros total. Si c\'est remplacement TPS: 40-120 euros piece + 50-100 euros MO + recalibration = 90-220 euros total. Si c\'est reparation faisceau: 30-100 euros + 50-150 euros MO = 80-250 euros total. Dans 75% des cas c\'est TPS ou connecteur, donc budget previsionnel: 60-150 euros. Simple et rapide (1-2h).'
      }
    ],
    relatedCodes: ['P0120', 'P0121', 'P0122', 'P0220', 'P0223']
  },
  P0125: {
    code: 'P0125',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0125 indique que le liquide de refroidissement moteur n'atteint pas la temperature de fonctionnement optimale dans le delai attendu par l'ECU. Typiquement, un moteur devrait atteindre 80-90C dans les 5-10 minutes suivant le demarrage. Si ce n'est pas le cas, l'ECU declenche P0125. La cause la plus frequente est un thermostat bloque en position ouverte qui fait circuler le liquide en permanence dans le radiateur, empechant montee en temperature. Bien que ce code soit considere mineur, il entraine surconsommation de carburant (10-20%), usure moteur acceleree car huile trop froide, et impossibilite de passer controle technique dans certains pays.",
    symptoms: [
      'Voyant moteur allume apres 10-15 minutes de conduite',
      'Jauge temperature qui monte lentement et reste sous 80C meme apres 20 minutes',
      'Chauffage habitacle peu efficace ou air tiede au lieu de chaud',
      'Surconsommation de carburant notable (10-20% de plus que la normale)',
      'Regime ralenti legerement eleve pendant phase chauffe (1000-1200 rpm)',
      'Leger manque de puissance moteur pas completement chaud',
      'Condensation persistante dans echappement meme apres conduite prolongee'
    ],
    causes: [
      'Thermostat bloque en position ouverte (80% des cas de loin la cause numero 1)',
      'Capteur temperature ECT qui derive donnant valeurs trop basses (10% des cas)',
      'Niveau liquide refroidissement trop bas avec bulles air (5% des cas)',
      'Thermostat incorrect (temperature ouverture trop basse installee) (3% des cas)',
      'Fuite legere liquide refroidissement empechant montee pression/temperature',
      'Ventilateur coince en marche forcee refroidissant trop le moteur (rare)',
      'Conditions extremes: roulage par grand froid (-20C) avec courts trajets'
    ],
    solutions: [
      'Verifier temperature ECT avec valise diagnostic: devrait atteindre 85-95C apres 10 min',
      'Tester thermostat: toucher durite superieure radiateur, doit rester froide 5 min puis chauffer brusquement',
      'Remplacer le thermostat s\'il est bloque ouvert (30-80 euros piece tres courante)',
      'Verifier niveau liquide refroidissement et completer si necessaire (10-30 euros)',
      'Purger circuit refroidissement pour eliminer bulles air (gratuit DIY)',
      'Verifier que ventilateur ne tourne pas en permanence (devrait demarrer qu\'a 90C+)',
      'Controler absence fuites sur durites, radiateur, pompe eau'
    ],
    riskExplanation: "Bien que P0125 soit mineur (moteur fonctionne), rouler en permanence avec moteur trop froid entraine surconsommation (gaspillage argent), usure acceleree moteur (huile froide lubrifie mal), encrassement plus rapide (combustion incomplete), et emission polluants excessifs. A terme, les depots de calamine s'accumulent sur pistons et soupapes. Le catalyseur met plus longtemps a atteindre temperature efficace. Reparation recommandee sous 1-2 mois, surtout avant hiver ou controle technique.",
    faq: [
      {
        question: 'Comment etre sur que c\'est le thermostat qui est en cause?',
        answer: 'Test simple: demarrez moteur a froid. Touchez prudemment la durite superieure du radiateur (celle du haut). Elle doit rester completement froide pendant 5-8 minutes, puis devenir tres chaude d\'un seul coup quand thermostat s\'ouvre a 80-90C. Si elle est deja tiede apres 2-3 minutes, le thermostat est bloque ouvert et fait circuler le liquide trop tot. Si apres 15 minutes elle est encore froide, thermostat est bloque ferme (surchauffe, code P0217). Thermostat ouvert = P0125. C\'est le test le plus fiable sans equipement.'
      },
      {
        question: 'Un thermostat bloque ouvert peut-il endommager le moteur?',
        answer: 'Pas directement a court terme (pas de surchauffe), mais a moyen-long terme oui. Un moteur qui ne chauffe pas assez (reste a 60-70C au lieu de 85-95C) fonctionne avec huile trop froide et visqueuse qui lubrifie mal, usant prematurement coussinets et segments. L\'essence ne s\'evapore pas completement, diluant l\'huile et creant depots calamine. Les joints toriques durcissent avec temperature inadaptee. L\'usure moteur s\'accelere de 20-30%. De plus vous gaspillez 10-20% de carburant. Pour un thermostat a 30-80 euros, ca ne vaut pas le coup de temporiser.'
      },
      {
        question: 'Pourquoi le code n\'apparait-il pas immediatement au demarrage?',
        answer: 'L\'ECU laisse 10-15 minutes au moteur pour atteindre temperature normale avant de declencher P0125. Il sait qu\'a froid c\'est normal d\'etre sous 80C. Il surveille la vitesse de montee en temperature: avec thermostat sain, temperature monte rapidement (5-10C par minute). Avec thermostat bloque ouvert, temperature monte tres lentement (2-3C par minute) et plafonne vers 60-70C. Apres 10-15 minutes, si l\'ECU constate que temperature est toujours insuffisante, il allume le voyant et enregistre P0125. C\'est un code a declenchement differe, pas immediat.'
      },
      {
        question: 'Puis-je rouler normalement avec ce code en attendant reparation?',
        answer: 'Oui vous pouvez rouler sans danger immediat pour moteur (pas de surchauffe). Mais vous allez consommer 10-20% de carburant en plus, polluer davantage, user prematurement le moteur, et n\'avoir que chauffage tiede en hiver. Si vous avez controle technique bientot, vous risquez un refus car emissions polluantes trop elevees et code defaut present. Si c\'est l\'hiver, le probleme sera pire (moteur chauffera encore moins). Donc planifiez reparation sous 1-2 mois. Le thermostat coute 30-80 euros et se change en 1h, c\'est une reparation tres abordable.'
      },
      {
        question: 'Combien coute le remplacement d\'un thermostat?',
        answer: 'Piece: 30-80 euros selon vehicule (piece tres courante). Main d\'oeuvre: 50-100 euros (1-2h selon accessibilite). Liquide refroidissement si vidange necessaire: 10-30 euros. Total garage: 90-210 euros. En DIY: 40-110 euros (thermostat + liquide). C\'est une reparation simple: vidanger partiellement liquide, deboiter durites, retirer ancien thermostat, nettoyer surfaces, poser nouveau avec joint neuf, remonter durites, remplir liquide, purger air, tester. Niveau DIY: intermediaire. Attention: toujours remplacer le joint du thermostat, ne jamais reutiliser ancien joint.'
      }
    ],
    relatedCodes: ['P0115', 'P0116', 'P0117', 'P0118', 'P0128']
  },
  P0128: {
    code: 'P0128',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0128 signale que la temperature du liquide de refroidissement est inferieure au seuil de regulation du thermostat. C'est tres similaire au P0125, mais le P0128 est plus specifique: il indique que le thermostat ne regule pas correctement la temperature, laissant le moteur fonctionner trop froid (typiquement sous 75C au lieu de 85-95C). La cause quasi-exclusive est un thermostat bloque en position partiellement ou totalement ouverte. Ce code entraine les memes consequences que P0125: surconsommation, usure acceleree, chauffage inefficace, mais avec une nuance diagnostique pointant directement vers le thermostat plutot que vers un probleme de capteur.",
    symptoms: [
      'Voyant moteur allume apres quelques minutes de conduite',
      'Temperature moteur qui stabilise anormalement bas (60-75C au lieu de 85-95C)',
      'Chauffage habitacle tres peu efficace, air tiede meme apres 20 minutes',
      'Surconsommation carburant legere mais persistante (10-15% de plus)',
      'Ralenti legerement eleve en permanence comme si moteur restait en phase chauffe',
      'Performances legerement reduites, moteur manque de pêche',
      'Pas de surchauffe mais temperature n\'atteint jamais zone normale'
    ],
    causes: [
      'Thermostat bloque en position ouverte ou partiellement ouverte (85% des cas)',
      'Thermostat de temperature ouverture incorrecte monte (ex: 71C au lieu de 88C) (10% des cas)',
      'Thermostat de mauvaise qualite qui ne se ferme pas completement (3% des cas)',
      'Capteur temperature thermostat (sur thermostats pilotes electroniquement) defaillant',
      'Fuite interne dans thermostat permettant circulation liquide meme ferme (rare)',
      'Probleme sur thermostats pilotes: ECU n\'envoie pas signal chauffage resistance',
      'Niveau liquide refroidissement trop bas avec bulles air (rare pour ce code specifique)'
    ],
    solutions: [
      'Confirmer temperature reelle avec valise diagnostic: lire valeur ECT en roulant',
      'Tester thermostat classique: durite radiateur doit rester froide puis chauffer brusquement a 85-90C',
      'Remplacer thermostat par modele OEM avec temperature ouverture correcte (30-90 euros)',
      'Verifier reference thermostat: doit correspondre a specs vehicule (temperature gravee sur thermostat)',
      'Pour thermostats pilotes electroniques: tester resistance chauffage et connecteur',
      'Toujours utiliser piece origine ou qualite equivalente, eviter premiers prix',
      'Purger circuit apres remplacement et verifier absence fuite'
    ],
    riskExplanation: "Le P0128 est un code mineur mais qui signale dysfonctionnement permanent du systeme de refroidissement. Rouler avec moteur systematiquement trop froid accelere l'usure generale de 20-30% car tous les composants fonctionnent hors temperature optimale. Surconsommation chronique de carburant represente gaspillage financier. En hiver, impossibilite de degivrer et chauffer correctement est probleme securite. Reparation simple et peu couteuse (thermostat) donc a faire sous 1-2 mois, avant hiver si possible.",
    faq: [
      {
        question: 'Quelle difference entre P0125 et P0128?',
        answer: 'Les deux codes indiquent temperature trop basse mais avec nuance: P0125 dit "temperature insuffisante atteinte trop lentement" (probleme montee en temperature), ce qui peut venir thermostat OU capteur ECT defectueux. P0128 dit "temperature sous seuil de regulation thermostat" (probleme regulation), ce qui pointe specifiquement vers le thermostat lui-meme. En pratique, P0128 = quasi-certitude que thermostat est bloque ouvert. P0125 = peut-etre thermostat, peut-etre capteur ECT. Donc P0128 est diagnostic plus precis facilitant reparation.'
      },
      {
        question: 'Comment verifier que le nouveau thermostat a la bonne temperature?',
        answer: 'Regardez gravure sur le thermostat: vous devriez voir chiffre comme "82C", "88C" ou "92C" indiquant temperature d\'ouverture. Consultez manuel technique vehicule ou documentation constructeur pour connaitre temperature OEM. Un thermostat 71C ouvert trop tot, 92C trop tard. La plupart vehicules utilisent 82-88C. IMPORTANT: n\'achetez pas thermostat "universel" bas de gamme. Prenez piece origine (constructeur) ou equivalence qualite (Wahler, Mahle, Vernet). Un thermostat premier prix a 15 euros sera defaillant en 6 mois. Investissez 50-90 euros dans qualite.'
      },
      {
        question: 'Qu\'est-ce qu\'un thermostat pilote electroniquement?',
        answer: 'Sur vehicules recents (apres 2010), certains thermostats ont resistance electrique chauffante pilotee par ECU. L\'ECU peut faire ouvrir thermostat plus tot ou plus tard selon conditions (economie, performance, froid). Si resistance ou son cablage est HS, thermostat reste bloque position par defaut (souvent ouvert) et genere P0128. Test: mesurer resistance entre broches connecteur (doit faire 10-30 ohms). Verifier que ECU envoie bien commande (12V par intermittence). Remplacement: 80-150 euros piece + 50-100 euros MO car plus complexe.'
      },
      {
        question: 'Le code peut-il disparaitre tout seul par temps chaud?',
        answer: 'Oui c\'est possible et c\'est meme un indice confirmant thermostat bloque ouvert. En ete avec temperature exterieure 30C+, le moteur chauffe plus facilement meme avec thermostat ouvert et peut atteindre 75-80C, juste assez pour ne pas declencher P0128. Mais des que temperature exterieure baisse (automne, hiver), le probleme reapparait car moteur ne peut plus compenser. Si P0128 apparait en hiver et disparait en ete, c\'est quasi-certitude d\'un thermostat bloque ouvert. Ne vous fiez pas a disparition estivale, le probleme existe toujours.'
      },
      {
        question: 'Quel est le cout de reparation pour un P0128?',
        answer: 'Thermostat mecanique classique: 30-80 euros piece qualite + 50-100 euros MO + 10-20 euros liquide = 90-200 euros total garage. DIY: 40-100 euros. Thermostat pilote electronique: 80-150 euros piece + 50-100 euros MO = 130-250 euros total. Delai intervention: 1-2h. C\'est reparation courante et abordable. Attention: toujours changer joint thermostat (souvent fourni avec), ne jamais reutiliser ancien. Purger correctement air apres intervention pour eviter bulles et P0125/P0128 persistants. Budget moyen previsionnel: 120-180 euros garage.'
      }
    ],
    relatedCodes: ['P0125', 'P0115', 'P0116', 'P0217', 'P0219']
  },
  P0130: {
    code: 'P0130',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0130 indique un dysfonctionnement general du circuit de la sonde lambda amont banc 1 (sonde O2 avant catalyseur cote cylindres 1-3). Cette sonde mesure la teneur en oxygene des gaz d'echappement pour que l'ECU ajuste le melange air-carburant en temps reel. Le P0130 est un code generique signalant probleme electrique: circuit ouvert, court-circuit, signal hors plage, ou absence totale de signal. Sans info sonde O2, l'ECU bascule en boucle ouverte avec melange prédéfini peu precis, entrainant surconsommation (15-25%), perte performances, et emissions polluantes excessives refusees au controle technique.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Surconsommation de carburant notable (15-25% de plus)',
      'Ralenti legerement instable ou irregulier',
      'Perte de puissance legere surtout a haut regime',
      'Odeur forte d\'essence a l\'echappement (melange trop riche)',
      'Fumee noire ou grise a l\'acceleration',
      'Refus au controle technique pour emissions polluantes trop elevees'
    ],
    causes: [
      'Sonde lambda amont usee ou morte (plus de 150 000 km) (50% des cas)',
      'Faisceau electrique sonde endommage par chaleur echappement (20% des cas)',
      'Connecteur sonde corrode ou infiltration eau/huile (15% des cas)',
      'Court-circuit fil de signal a la masse ou au 12V (8% des cas)',
      'Sonde lambda contaminee par additifs huile moteur ou essence plombee (5% des cas)',
      'Fuite echappement avant sonde faussant mesure oxygene (rare)',
      'Probleme alimentation rechauffage sonde (fusible, relais)'
    ],
    solutions: [
      'Lire valeurs sonde O2 avec valise diagnostic: doit osciller 0.1-0.9V en boucle fermee',
      'Verifier resistance rechauffage sonde: doit afficher 3-15 ohms selon modele',
      'Controler continuite et isolation cablage sonde avec multimetre',
      'Nettoyer connecteur sonde avec bombe contact (10-15 euros)',
      'Remplacer sonde lambda amont si morte ou usee (40-120 euros piece)',
      'Reparer faisceau si fil fondu ou coupe (30-100 euros)',
      'Verifier absence fuite echappement avant sonde avec fumigene'
    ],
    riskExplanation: "Sans sonde O2 fonctionnelle, l'ECU ne peut plus ajuster finement le melange et fonctionne en mode degrade avec melange approximatif. Resultat: surconsommation 15-25%, usure prematuree catalyseur par melange trop riche ou trop pauvre, emissions polluantes trop elevees (refus controle technique garanti), et perte performances. A terme le catalyseur peut etre detruit necessitant remplacement couteux (800-1500 euros). Reparation recommandee sous 1 mois.",
    faq: [
      {
        question: 'Quelle difference entre sonde lambda amont et aval?',
        answer: 'La sonde amont (avant catalyseur) mesure oxygene dans gaz sortant moteur. L\'ECU utilise cette info pour ajuster injection carburant en temps reel (boucle fermee). C\'est la sonde critique pour consommation et performances. La sonde aval (apres catalyseur) mesure efficacite catalyseur. Si amont et aval donnent memes valeurs, catalyseur ne fonctionne plus (code P0420). Donc P0130 = probleme sonde critique pour melange. P0140 = probleme sonde de controle catalyseur. Priorite: toujours reparer sonde amont en premier.'
      },
      {
        question: 'Comment tester si la sonde lambda est morte?',
        answer: 'Moteur chaud au ralenti, branchez valise OBD et affichez valeur sonde O2 amont banc 1 en direct. Accelerez brievement a 3000 rpm puis relâchez. Une sonde saine doit osciller rapidement entre 0.1V (pauvre) et 0.9V (riche) plusieurs fois par seconde. Si elle reste figee a 0.45V ou ne bouge plus, elle est morte. Si elle oscille lentement (1 fois toutes les 3-5 secondes), elle est en fin de vie. Si tension sort de plage 0-1V ou affiche valeurs aberrantes, probleme electrique cablage. Test simple: sonde qui ne reagit plus = morte.'
      },
      {
        question: 'La sonde lambda a-t-elle une duree de vie limitee?',
        answer: 'Oui absolument. Une sonde lambda amont dure typiquement 100 000 - 150 000 km ou 8-12 ans selon conditions usage. Elle s\'use car element ceramique se degrade avec cycles thermiques (20C a 800C repetitifs) et contamination progressive par residus combustion. Signes usure: temps reponse qui ralentit, oscillations moins franches, derive tension. Vers 150 000 km il est conseille de la remplacer preventivem ent meme sans code defaut, car performances se degradent progressivement avant panne totale. Une sonde usee fait consommer 10-15% de plus sans declencher code.'
      },
      {
        question: 'Pourquoi le cablage sonde est-il souvent endommage?',
        answer: 'Le faisceau sonde lambda passe pres du collecteur echappement qui chauffe a 600-800C. La gaine isolante des fils peut fondre, craquer, ou bruler avec temps et chaleur. Les fils se denudent et peuvent toucher masse (court-circuit). L\'huile moteur ou liquide refroidissement coulant sur faisceau accelere degradation. Les vibrations moteur fatiguent aussi les fils qui cassent. C\'est pourquoi 20% des P0130 viennent du cablage pas de la sonde. Avant de remplacer sonde (40-120 euros), inspectez toujours visuellement le faisceau sur toute longueur depuis sonde jusqu\'au connecteur.'
      },
      {
        question: 'Combien coute le remplacement d\'une sonde lambda amont?',
        answer: 'Sonde lambda amont: 40-120 euros selon vehicule (origine plus cher, aftermarket acceptable). Main d\'oeuvre: 30-80 euros (30 min a 1h selon accessibilite). Total garage: 70-200 euros. DIY: 40-120 euros seulement. Achat: privilegiez marques connues (Bosch, NGK, Denso) pas premiers prix chinois. Installation: moteur chaud la sonde se devisse mieux (filetage pas grippe). Appliquez pate cuivre anti-grippage sur filetage nouveau. Attention: ne touchez jamais element ceramique sonde avec doigts gras, ca la tue. Budget previsionnel moyen: 100-150 euros garage.'
      }
    ],
    relatedCodes: ['P0131', 'P0132', 'P0133', 'P0134', 'P0171']
  },
  P0131: {
    code: 'P0131',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0131 signale que le signal de la sonde lambda amont banc 1 est anormalement bas, restant en permanence sous 0.45V (souvent 0.1-0.2V). Une sonde O2 saine oscille entre 0.1V (melange pauvre) et 0.9V (melange riche). Un signal coince en bas indique soit melange reellement tres pauvre, soit probleme electrique (court-circuit masse, sonde defaillante). L'ECU recevant signal pauvre constant enrichit massivement le melange, provoquant surconsommation, fumee noire, encrassement bougies et catalyseur. Ce code est plus specifique que P0130 et pointe vers signal bas anormal.",
    symptoms: [
      'Voyant moteur allume',
      'Surconsommation carburant importante (20-35% de plus)',
      'Fumee noire epaisse a l\'echappement surtout en acceleration',
      'Odeur tres forte d\'essence non brûlee',
      'Ralenti irregulier avec ratés occasionnels',
      'Bougies qui s\'encrassent rapidement de calamine noire',
      'Perte de puissance avec moteur qui broute'
    ],
    causes: [
      'Court-circuit du fil signal sonde O2 a la masse (40% des cas)',
      'Sonde lambda defaillante coincee en signal bas (30% des cas)',
      'Vraie fuite d\'air admission apres debitmetre causant melange pauvre reel (15% des cas)',
      'Connecteur sonde corrode creant court-circuit intermittent (10% des cas)',
      'Fil signal endommage touchant echappement ou bloc moteur (3% des cas)',
      'Sonde contaminee par additifs donnant lectures faussees',
      'Fuite echappement avant sonde aspirant air exterieur'
    ],
    solutions: [
      'Verifier avec valise diagnostic valeur sonde: si figee 0.1-0.2V, probleme confirme',
      'Tester resistance fil signal sonde vers masse vehicule: doit afficher infinite',
      'Inspecter visuellement cablage sonde, chercher fils denudes ou fondus',
      'Debrancher sonde: si tension passe a 0.45V, sonde HS; si reste 0.1V, court-circuit cablage',
      'Chercher fuites air admission avec fumigene (durites percees, joints collecteur)',
      'Remplacer sonde lambda si defaillante (40-120 euros)',
      'Reparer faisceau si court-circuit detecte (30-100 euros)'
    ],
    riskExplanation: "L'ECU recevant signal pauvre permanent enrichit massivement pour compenser, injectant 30-40% de carburant en plus. Ce melange ultra-riche provoque fumee noire polluante, encrassement rapide bougies et catalyseur, dilution huile moteur par essence, et risque destruction catalyseur par surchauffe. La surconsommation extreme vide le portefeuille. Refus controle technique garanti. Intervention urgente sous 2 semaines avant dommages couteux.",
    faq: [
      {
        question: 'Comment savoir si c\'est vraiment un melange pauvre ou faux signal?',
        answer: 'Test simple: si vous avez fumee noire et forte odeur essence avec P0131, c\'est faux signal (ECU sur-enrichit car croit melange pauvre). Si vous avez ralenti instable, moteur tousse, manque puissance, mais pas de fumee noire, c\'est vrai melange pauvre (fuite air admission). Autre test: debranchez sonde O2. Si tension passe a 0.45V (valeur par defaut), la sonde etait en court-circuit. Si tension reste a 0.1V, c\'est le cablage en court-circuit. Si symptomes s\'ameliorent sonde debranchee, sonde est fautive.'
      },
      {
        question: 'Pourquoi l\'ECU enrichit-il autant avec signal bas?',
        answer: 'La sonde O2 indiquant 0.1V signifie pour l\'ECU "trop d\'oxygene dans echappement donc melange pauvre, pas assez de carburant". L\'ECU augmente donc injection pour enrichir. Mais si c\'est faux signal (sonde ou cablage HS), le melange n\'est pas pauvre en realite. L\'enrichissement cree alors melange ultra-riche avec fumee noire. C\'est boucle regulation qui fonctionne a l\'envers. Plus l\'ECU enrichit, plus le melange devient riche, mais sonde continue dire "pauvre" car elle est coincee. ECU injecte jusqu\'a limites max (30-40% de plus).'
      },
      {
        question: 'Une fuite air admission peut-elle causer P0131?',
        answer: 'Oui dans 15% des cas c\'est vrai melange pauvre pas faux signal. Une durite admission percee, joint collecteur poreux, ou prise vide cassee aspire air non mesure par debitmetre. Le melange devient reellement pauvre. La sonde O2 mesure correctement "trop d\'oxygene" et envoie signal bas. L\'ECU enrichit pour compenser. Mais si fuite est grosse, ECU ne peut compenser assez et P0131 apparait. Difference avec faux signal: pas de fumee noire, moteur tousse et manque puissance. Cherchez fuites avec fumigene moteur tournant, vous entendrez sifflement aspiration.'
      },
      {
        question: 'Le fil de signal peut-il toucher la masse accidentellement?',
        answer: 'Oui c\'est cause frequente (40% cas). Le fil signal sonde O2 passe pres echappement tres chaud et peut perdre sa gaine isolante. Le fil cuivre denude touche alors masse (echappement, bloc moteur, carrosserie) creant court-circuit permanent. Signal tombe a 0V = melange pauvre pour ECU. Inspectez tout le faisceau depuis sonde jusqu\'au connecteur ECU. Cherchez zones ou gaine fondue, craquee, abrasee. Si fil touche masse meme sur 2mm, court-circuit. Reparation: isoler section endommagee avec gaine thermoretractable ou remplacer section faisceau.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0131?',
        answer: 'Si c\'est sonde lambda: 40-120 euros piece + 30-80 euros MO = 70-200 euros total. Si c\'est cablage court-circuite: 30-100 euros reparation + 50-100 euros MO = 80-200 euros total. Si c\'est fuite air admission: 20-80 euros selon piece (durite, joint) + 40-120 euros MO = 60-200 euros total. Budget previsionnel moyen: 100-180 euros. Diagnostic essentiel pour cibler cause avant remplacer pieces inutilement. Une valise OBD + tests multimetre permettent identifier rapidement si sonde, cablage ou vraie fuite air.'
      }
    ],
    relatedCodes: ['P0130', 'P0132', 'P0133', 'P0171', 'P0174']
  },
  P0132: {
    code: 'P0132',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0132 indique que le signal de la sonde lambda amont banc 1 est anormalement eleve, restant en permanence au-dessus de 0.8V (souvent 0.9V fixe). Une sonde O2 normale oscille entre 0.1-0.9V. Un signal coince haut signale soit melange reellement tres riche, soit probleme electrique (court-circuit 12V, sonde defaillante). L'ECU recevant signal riche constant appauvrit drastiquement le melange pour compenser, provoquant ralenti instable, pertes puissance, hesitations, surchauffe et risque cliquetis. Ce code est specifique pointant vers signal haut anormal contrairement au P0130 generique.",
    symptoms: [
      'Voyant moteur allume',
      'Ralenti tres bas et instable (500-600 rpm) avec calages frequents',
      'Hesitations severes et trous a l\'acceleration',
      'Perte de puissance notable surtout en reprise',
      'Cliquetis moteur (cognements metalliques) en charge',
      'Demarrage difficile avec moteur qui tousse',
      'Surchauffe moteur possible si melange trop pauvre'
    ],
    causes: [
      'Court-circuit du fil signal sonde O2 au 12V (35% des cas)',
      'Sonde lambda defaillante coincee en signal haut (30% des cas)',
      'Vraie richesse excessive melange due injecteurs fuyards (20% des cas)',
      'Connecteur sonde infiltre carburant ou huile faussant signal (8% des cas)',
      'Capteur pression MAP defaillant sur-estimant charge moteur (5% des cas)',
      'Regulateur pression essence HS causant surpression injection',
      'Sonde contaminee par additifs silicone donnant fausses lectures'
    ],
    solutions: [
      'Verifier valeur sonde O2 avec valise: si figee 0.9V, probleme confirme',
      'Tester resistance fil signal sonde vers 12V: doit afficher infinite',
      'Debrancher sonde: si tension passe 0.45V, sonde HS; si reste 0.9V, court-circuit cablage',
      'Controler pression rampe injection: doit etre 3-4 bars selon vehicule, pas 5-6 bars',
      'Inspecter bougies: si tres noires huileuses, vraie richesse (injecteurs fuyards)',
      'Remplacer sonde lambda si defaillante (40-120 euros)',
      'Reparer court-circuit cablage ou remplacer pieces defectueuses causant richesse'
    ],
    riskExplanation: "L'ECU recevant signal riche permanent appauvrit excessivement le melange, provoquant surchauffe moteur, cliquetis destructeur (pre-detonation martelant pistons), risque fusion soupapes d'echappement, et combustion incomplete. Le moteur fonctionne en mode survie. Sans correction rapide, risque casse moteur par surchauffe ou cliquetis severe. Les pertes de puissance rendent conduite dangereuse. Intervention urgente sous 1 semaine avant degats irreversibles.",
    faq: [
      {
        question: 'Comment savoir si c\'est faux signal ou vraie richesse melange?',
        answer: 'Inspectez bougies d\'allumage: si electrodes tres noires grasses huileuses, c\'est vraie richesse (trop de carburant injecte par injecteurs fuyards ou pression trop haute). Si bougies normales beiges claires, c\'est faux signal (sonde ou cablage HS). Autre test: debranchez sonde O2. Si ralenti s\'ameliore et hesitations disparaissent, sonde donnait faux signal. Si symptomes persistent sonde debranchee, c\'est vraie richesse qu\'il faut corriger (injecteurs, regulateur pression). Enfin, mesurez pression rampe injection: si superieure 4 bars, surpression cause richesse.'
      },
      {
        question: 'Pourquoi l\'ECU appauvrit-il le melange avec signal haut?',
        answer: 'La sonde O2 a 0.9V signifie pour ECU "pas assez d\'oxygene dans echappement donc melange trop riche, trop de carburant". L\'ECU reduit injection pour appauvrir. Mais si c\'est faux signal, melange n\'est pas riche. L\'appauvrissement cree melange ultra-pauvre dangereux: surchauffe, cliquetis, perte puissance. C\'est boucle regulation inversee. Plus ECU appauvrit, plus melange devient pauvre, mais sonde continue dire "riche". ECU appauvrit jusqu\'aux limites securite puis declenche P0132 et mode degrade.'
      },
      {
        question: 'Un court-circuit au 12V est-il frequent sur sonde O2?',
        answer: 'Moins frequent que court-circuit masse (35% vs 40%) mais possible. Le fil rechauffage sonde est alimente en 12V permanent. Si isolation fil signal craque, les deux fils peuvent se toucher: signal monte a 12V (interprete comme 0.9V max par ECU). Aussi, eau infiltree dans connecteur peut creer pont entre 12V rechauffage et signal. Autre cause: faisceau passe pres alternateur ou demarreur et capte parasites 12V. Test: mesurez tension signal sonde moteur eteint contact coupe: doit etre 0V. Si vous lisez 12V ou tension parasite, court-circuit vers alimentation.'
      },
      {
        question: 'Des injecteurs fuyards peuvent-ils causer P0132?',
        answer: 'Oui dans 20% cas c\'est vraie richesse pas faux signal. Injecteurs uses ou encrasses fuient carburant en permanence meme fermes. Le melange devient reellement tres riche. Sonde O2 mesure correctement "pas assez oxygene" et envoie 0.9V. C\'est info correcte mais ECU ne peut corriger car injecteurs fuient mecaniquement. Test: demontez bougies apres conduite, si trempees essence noires, injecteurs fuient. Autre test: coupez contact, demontez rampe injection, mettez contact (ne demarrez pas): si essence goutte des injecteurs, ils fuient. Remplacement: 60-150 euros par injecteur ou nettoyage ultrasons 20-40 euros/injecteur.'
      },
      {
        question: 'Quel est le cout de reparation pour un P0132?',
        answer: 'Si sonde lambda HS: 40-120 euros piece + 30-80 euros MO = 70-200 euros. Si cablage court-circuite: 30-100 euros + 50-100 euros MO = 80-200 euros. Si injecteurs fuyards: nettoyage 80-160 euros (4 injecteurs) ou remplacement 240-600 euros. Si regulateur pression: 50-150 euros piece + 80-150 euros MO = 130-300 euros. Budget previsionnel selon cause: 100-300 euros. Diagnostic crucial car causes tres variees. Commencez par tests simples (valeur sonde, etat bougies, pression rampe) avant remplacer pieces.'
      }
    ],
    relatedCodes: ['P0130', 'P0131', 'P0133', 'P0172', 'P0175']
  },
  P0133: {
    code: 'P0133',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0133 signale que la sonde lambda amont banc 1 repond trop lentement aux variations de richesse du melange. Une sonde O2 saine oscille rapidement (plusieurs fois par seconde) entre 0.1V et 0.9V. Une sonde usee ou contaminee met plusieurs secondes a reag ir, rendant regulation melange imprecise et molle. L'ECU detecte ce temps reponse trop long et declenche P0133. Bien que le moteur fonctionne, les performances se degradent progressivement: surconsommation 10-15%, ralenti moins stable, reponse accelerateur moins franche. C'est signe usure normale sonde approchant fin de vie (120 000-180 000 km).",
    symptoms: [
      'Voyant moteur allume',
      'Surconsommation carburant moderee (10-15% de plus)',
      'Ralenti legerement moins stable qu\'avant',
      'Reponse accelerateur moins immediate, moteur moins vif',
      'Leger manque de puissance surtout en reprise',
      'Emissions polluantes legerement augmentees',
      'Performances generales du moteur moins precises'
    ],
    causes: [
      'Sonde lambda vieillissante en fin de vie (100 000-180 000 km) (70% des cas)',
      'Sonde contaminee par additifs huile moteur ou essence mauvaise qualite (15% des cas)',
      'Element ceramique sonde encrasse par depots calamine (8% des cas)',
      'Rechauffage sonde defaillant (resistance HS), sonde reste trop froide (5% des cas)',
      'Fuite echappement avant sonde refroidissant gaz et ralentissant reaction',
      'Vraie richesse ou pauvrete melange rendant oscillations moins franches',
      'Connecteur sonde partiellement corrode augmentant resistance electrique'
    ],
    solutions: [
      'Verifier temps reponse sonde avec valise: accelerer 3000 rpm, doit reagir en moins 1 seconde',
      'Tester resistance rechauffage sonde: doit afficher 3-15 ohms, pas 50+ ohms (coupe)',
      'Essayer additif nettoyant sonde lambda dans reservoir (15-25 euros, efficacite 30%)',
      'Verifier absence fuite echappement avant sonde (diminue temperature gaz)',
      'Controler qualite oscillations sonde: doivent etre franches 0.1-0.9V pas molles 0.3-0.7V',
      'Remplacer sonde lambda si usee au-dela 150 000 km (40-120 euros)',
      'Nettoyer connecteur sonde et verifier bon contact electrique'
    ],
    riskExplanation: "Une sonde O2 lente degrade progressivement performances et economie sans casser le moteur immediatement. Surconsommation 10-15% represente gaspillage financier chronique. Regulation melange imprecise use prematurement catalyseur et bougies. Emissions polluantes augmentent risquant refus controle technique. La sonde continuera se degrader jusqu'a panne totale (P0130/P0134). Bien que non urgent, remplacement recommande sous 2-3 mois ou avant controle technique.",
    faq: [
      {
        question: 'Comment une sonde lambda vieillit-elle et perd reactiv ite?',
        answer: 'L\'element ceramique zircone de la sonde subit 100 000+ cycles thermiques (20C a 800C). Les chocs thermiques repetitifs micro-fissurent ceramique. Les residus combustion (suie, plomb, soufre, additifs) se deposent sur element et bouchent pores. La couche catalyseur platine s\'use. Tout ca ralentit reaction chimique produisant tension. Une sonde neuve reagit en 0.3-0.5 secondes. A 150 000 km elle met 1-2 secondes. A 200 000 km elle est morte (4-5 secondes ou figee). C\'est usure normale inevitable comme plaquettes freins.'
      },
      {
        question: 'Les additifs nettoyant sonde lambda fonctionnent-ils?',
        answer: 'Efficacite limitee (30% cas). Les additifs essence dissolvent depots legers calamine/suie surface sonde. Ca peut ameliorer reactivite si encrassement recent et leger. Mais si sonde a 180 000 km avec ceramique micro-fissure, aucun additif ne la rajeunira. Test: versez 1 flacon additif (15-25 euros) dans reservoir, roulez 200 km, effacez code P0133. Si code revient sous 100 km, sonde est trop usee. Si code ne revient pas, additif a fonctionne. Dans tous cas, sonde au-dela 150 000 km merite remplacement preventif.'
      },
      {
        question: 'Pourquoi le temps de reponse sonde est-il important?',
        answer: 'L\'ECU ajuste injection carburant en boucle fermee basee sur retour sonde O2. Si sonde reagit vite (0.5s), regulation est precise et melange optimal. Si sonde reagit lentement (2-3s), l\'ECU injecte trop puis pas assez puis trop dans cycle lent imprecis. C\'est comme conduire avec 3 secondes retard entre action volant et reponse roues: impossible etre precis. Resultat: surconsommation, emissions variables, performances molles. Une sonde rapide permet economie optimale et depollution efficace. Temps reponse < 1 seconde = sonde OK.'
      },
      {
        question: 'Une fuite echappement peut-elle ralentir la sonde?',
        answer: 'Oui dans 5% cas. Fuite echappement avant sonde aspire air exterieur froid qui refroidit gaz d\'echappement. La sonde O2 doit etre a 300C+ pour fonctionner correctement. Si gaz arrivent a 200C cause fuite, reaction chimique sonde ralentit fortement. De plus air aspire fausse mesure oxygene. Cherchez fuites: joint collecteur poreux, fissure tubulure echappement, boulon casse. Fuite fait bruit "taptap" metallique au ralenti. Reparation fuite: 30-100 euros selon localisation. Une fois fuite reparee, verifiez si P0133 persiste. Si oui, sonde est reellement usee.'
      },
      {
        question: 'Quel est le cout de remplacement sonde lambda?',
        answer: 'Sonde lambda amont (avant catalyseur): 40-120 euros selon vehicule et marque. Privilegiez marques serieuses (Bosch, NGK, Denso, NTK) pas premiers prix 25 euros qui durent 6 mois. Main d\'oeuvre: 30-80 euros (30 min a 1h). Total garage: 70-200 euros. DIY: 40-120 euros seulement. Duree vie sonde neuve qualite: 100 000-150 000 km. Donc sur vehicule 200 000 km vous remplacerez sonde 1-2 fois. Budget previsionnel moyen: 100-150 euros garage. Installation: moteur chaud pour devissage facile, pate cuivre anti-grippage sur filetage.'
      }
    ],
    relatedCodes: ['P0130', 'P0131', 'P0132', 'P0134', 'P0420']
  },
  P0134: {
    code: 'P0134',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0134 signale absence complete d'activite de la sonde lambda amont banc 1. Contrairement au P0133 (reponse lente) ou P0131/P0132 (signal fixe haut/bas), le P0134 indique que la sonde ne donne aucun signal variable, restant figee a environ 0.45V (point mort). La sonde est morte, ne reagit plus du tout aux variations richesse melange. Sans oscillations sonde O2, l'ECU ne peut reguler melange en boucle fermee et bascule en mode degradé avec melange préprogrammé approximatif. Resultat: surconsommation 15-25%, emissions elevees, refus controle technique garanti.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Surconsommation carburant significative (15-25% de plus)',
      'Ralenti legerement irregulier ou instable',
      'Reponse accelerateur moins lineaire et precise',
      'Leger manque de puissance en acceleration',
      'Emissions polluantes nettement au-dessus des normes',
      'Odeur essence plus forte a l\'echappement'
    ],
    causes: [
      'Sonde lambda amont completement morte (plus de 180 000 km) (60% des cas)',
      'Fusible ou relais rechauffage sonde grille (15% des cas)',
      'Resistance rechauffage sonde coupee (circuit ouvert) (12% des cas)',
      'Connecteur sonde totalement corrode ou debranche (8% des cas)',
      'Faisceau electrique coupe entre sonde et ECU (3% des cas)',
      'Sonde fortement contaminee par plomb ou silicone (element empoisonne)',
      'Probleme alimentation 12V generale vers sonde (rare)'
    ],
    solutions: [
      'Verifier avec valise que sonde reste figee 0.45V meme en accelerant (morte confirmee)',
      'Tester resistance rechauffage sonde: doit afficher 3-15 ohms, pas infinite',
      'Controler fusible rechauffage sonde (souvent 10-15A dans boitier fusibles moteur)',
      'Verifier presence 12V sur fil alimentation rechauffage contact mis',
      'Inspecter connecteur sonde et nettoyer contacts si corrosion legere',
      'Remplacer sonde lambda amont si morte (40-120 euros piece)',
      'Remplacer fusible si grille ou reparer cablage si coupe'
    ],
    riskExplanation: "Sans regulation sonde O2, l'ECU fonctionne aveugle en boucle ouverte avec melange fixe inadapte aux conditions reelles. Surconsommation chronique 15-25% represente gaspillage financier important. Emissions polluantes excessives garantissent refus controle technique. L'usure catalyseur s'accelere car melange non optimise. Les performances moteur se degradent progressivement. Bien que non dangereux immediatement, reparation recommandee sous 1 mois avant controle technique.",
    faq: [
      {
        question: 'Pourquoi la sonde reste-t-elle figee a 0.45V?',
        answer: '0.45V est valeur "point mort" entre 0.1V (pauvre) et 0.9V (riche). Quand sonde est morte ou non alimentee, elle ne genere plus tension variable et reste a mi-tension par defaut. C\'est comme un interrupteur bloque en position milieu. Une sonde vivante oscille constamment. Une sonde morte = signal plat horizontal a 0.45V. L\'ECU attend oscillations pour regler melange. Sans oscillations, il detecte sonde inactive et declenche P0134 puis bascule en boucle ouverte (melange fixe). Testez: accelerez a 3000 rpm, si signal ne bouge pas, sonde est morte.'
      },
      {
        question: 'Le rechauffage sonde est-il essentiel au fonctionnement?',
        answer: 'Oui absolument. Une sonde lambda ne fonctionne qu\'a 300-400C minimum. Sans rechauffage electrique, elle mettrait 5-10 minutes a atteindre temperature (chauffe par gaz echappement). Pendant ce temps, melange est approximatif et emissions polluent. Le rechauffage (resistance 3-15 ohms alimentee 12V) porte sonde a temperature en 30-60 secondes. Si fusible rechauffage grille ou resistance est coupee, sonde reste froide et inactive. Test: mesurez resistance rechauffage sonde debranchee. Infinite = resistance coupee = sonde HS. 3-15 ohms = resistance OK.'
      },
      {
        question: 'Une sonde peut-elle mourir brutalement ou progressivement?',
        answer: 'Les deux sont possibles. Mort progressive (80% cas): vers 150 000 km sonde ralentit (P0133), vers 180 000 km elle oscille faiblement, puis meurt completement (P0134). Mort brutale (20% cas): contamination soudaine par plomb/silicone empoisonne element ceramique en quelques pleins. Choc thermique (passage gue profond moteur chaud) fissure ceramique instantanement. Court-circuit electrique brule element. Dans tous cas, une sonde morte ne se repare pas, elle se remplace. Pas de truc magique, aucun additif ne ressuscitera sonde morte.'
      },
      {
        question: 'Comment verifier si c\'est la sonde ou le fusible rechauffage?',
        answer: 'Procedure: 1) Localisez fusible rechauffage sonde O2 dans boitier fusibles moteur (consultez manuel, souvent 10-15A). 2) Controlez visuellement fusible, remplacez si grille (2 euros). 3) Si fusible OK, mesurez resistance rechauffage sonde debranchee: 3-15 ohms = OK, infinite = sonde HS. 4) Mesurez tension alimentation rechauffage contact mis: doit afficher 12V. Si 12V present mais resistance infinite, sonde HS. Si pas de 12V, probleme cablage ou relais. Statistiques: 60% sonde morte, 15% fusible, 25% cablage/connecteur.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0134?',
        answer: 'Si c\'est juste fusible grille: 2-5 euros fusible, remplacement gratuit DIY ou 20-30 euros garage. Si c\'est sonde morte: 40-120 euros piece (Bosch, NGK, Denso) + 30-80 euros MO = 70-200 euros total garage, ou 40-120 euros DIY. Si c\'est cablage coupe: 30-100 euros reparation + 50-100 euros MO = 80-200 euros. Budget previsionnel moyen: 100-150 euros garage. Conseil: testez d\'abord fusible (gratuit), puis resistance sonde (5 min multimetre), pour cibler cause avant acheter piece. Ne remplacez pas sonde sans diagnostic, 15% des cas c\'est juste fusible.'
      }
    ],
    relatedCodes: ['P0130', 'P0131', 'P0132', 'P0133', 'P0135']
  },
  P0135: {
    code: 'P0135',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0135 signale specifiquement un dysfonctionnement du circuit de rechauffage de la sonde lambda amont banc 1. La resistance electrique chauffante de la sonde (alimentee en 12V) ne fonctionne plus: circuit ouvert, court-circuit, ou fusible grille. Sans rechauffage, la sonde met 5-10 minutes a atteindre temperature operationnelle (300C+) au lieu de 30-60 secondes. Pendant ce temps le melange air-carburant n'est pas regule precisement, provoquant surconsommation et emissions polluantes excessives surtout a froid. Ce code pointe specifiquement vers probleme electrique rechauffage, pas vers element ceramique sonde.",
    symptoms: [
      'Voyant moteur allume quelques minutes apres demarrage a froid',
      'Ralenti instable et irregulier pendant premieres 5-10 minutes',
      'Surconsommation importante les 5 premieres minutes puis normale apres',
      'Fumee noire ou odeur essence forte pendant phase chauffe',
      'Hesitations moteur jusqu\'a ce qu\'il soit completement chaud',
      'Emissions polluantes elevees au controle pollution a froid',
      'Code disparait parfois si trajets toujours longs (sonde finit par chauffer)'
    ],
    causes: [
      'Fusible rechauffage sonde grille (40% des cas, check facile)',
      'Resistance rechauffage sonde coupee ou court-circuitee (35% des cas)',
      'Connecteur sonde corrode sur broches rechauffage (15% des cas)',
      'Faisceau electrique rechauffage coupe ou endommage (5% des cas)',
      'Relais rechauffage sonde defaillant (3% des cas)',
      'Mauvaise masse circuit rechauffage sonde',
      'Probleme ECU sur sortie commande rechauffage (tres rare)'
    ],
    solutions: [
      'Localiser et controler fusible rechauffage sonde O2 (souvent 10-15A boitier moteur)',
      'Mesurer resistance rechauffage sonde debranchee: doit afficher 3-15 ohms selon modele',
      'Verifier presence 12V sur fil alimentation rechauffage contact mis',
      'Nettoyer connecteur sonde si broches corrodees (10-15 euros bombe contact)',
      'Tester continuite cablage rechauffage entre connecteur et fusible',
      'Remplacer fusible si grille (2-5 euros) ou sonde si resistance HS (40-120 euros)',
      'Verifier et nettoyer point masse circuit rechauffage si oxyde'
    ],
    riskExplanation: "Sans rechauffage, la sonde lambda met 5-10 minutes a devenir operationnelle. Pendant ce temps l'ECU fonctionne en boucle ouverte avec melange enrichi par defaut provoquant surconsommation 30-50% a froid et emissions polluantes excessives. Sur trajets courts quotidiens (moins 10 min), la sonde n'atteint jamais temperature et le moteur pollue en permanence. A long terme usure prematuree catalyseur et bougies. Reparation recommandee sous 1 mois, critique si trajets courts frequents.",
    faq: [
      {
        question: 'Quelle difference entre P0134 (inactivite sonde) et P0135 (rechauffage)?',
        answer: 'P0134 = sonde ne donne aucun signal meme chaude, element ceramique mort. P0135 = element ceramique OK mais rechauffage HS, sonde fonctionne une fois chaude par gaz echappement. Test simple: P0134 persiste meme apres 20 min conduite (sonde toujours morte). P0135 disparait souvent apres 10-15 min conduite car sonde finit par chauffer naturellement. Si code apparait surtout sur trajets courts et disparait sur longs trajets, c\'est P0135 (rechauffage). Donc P0135 est moins grave car sonde fonctionne finalement, juste trop tard.'
      },
      {
        question: 'Le fusible rechauffage sonde grille-t-il souvent?',
        answer: 'Oui c\'est cause numero 1 de P0135 (40% cas) car resistance rechauffage tire 1-2A en permanence. Facteurs aggravants: resistance sonde qui vieillit tire plus courant, vibrations desserrant porte-fusible creant mauvais contact et echauffement, corrosion contacts fusible. Fusible 10-15A finit par se fatiguer et griller apres 100 000-150 000 km. Bon reflexe: avant tout remplacement sonde, verifiez fusible rechauffage (2 euros, 30 secondes). Si fusible OK et que vous remplacez sonde, montez fusible neuf preventivem ent.'
      },
      {
        question: 'La resistance rechauffage peut-elle griller sans griller le fusible?',
        answer: 'Oui (35% cas P0135). La resistance chauffante bobinee dans sonde peut se couper (circuit ouvert) suite chocs thermiques repetitifs ou vieillissement. Elle ne tire alors plus de courant donc fusible ne grille pas, mais sonde ne chauffe plus. Test: fusible OK mais mesurez resistance rechauffage sonde debranchee. Si infinite (OL) au lieu 3-15 ohms, resistance coupee = sonde HS. Autre possibilite: resistance en court-circuit interne (0.1 ohm), la fusible grille immediatement. Dans les deux cas, sonde complete a remplacer, resistance non reparable.'
      },
      {
        question: 'Pourquoi code apparait-il surtout en hiver ou sur trajets courts?',
        answer: 'En hiver, temperature exterieure basse (-5C a +10C) refroidit echappement. Gaz sortent plus froids, sonde chauffe plus lentement. Sur trajets courts (moins 10 min), vous arretez avant que sonde atteigne 300C naturellement. Donc sans rechauffage electrique, sonde reste inactive tout le trajet. En ete ou sur longs trajets, gaz echappement sont plus chauds, sonde atteint finalement 300C meme sans rechauffage et code disparait. Si P0135 apparait surtout matin froid et disparait apres 15 min autoroute, diagnostic confirme: rechauffage HS mais sonde OK.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0135?',
        answer: 'Si c\'est fusible: 2-5 euros piece, gratuit DIY ou 20-30 euros garage. Si c\'est connecteur corrode: nettoyage 10-15 euros bombe DIY ou 30-50 euros garage. Si c\'est relais: 15-40 euros piece + 30-50 euros MO = 45-90 euros. Si c\'est resistance sonde HS: remplacement sonde complete 40-120 euros piece + 30-80 euros MO = 70-200 euros total. Budget previsionnel: commencez par fusible (quasi gratuit), puis tests multimetre (resistance, 12V), avant acheter sonde. Dans 55% cas c\'est fusible ou connecteur (moins 50 euros), 45% cas sonde complete a remplacer (100-150 euros).'
      }
    ],
    relatedCodes: ['P0130', 'P0134', 'P0141', 'P0155', 'P0161']
  },
  P0136: {
    code: 'P0136',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0136 signale un dysfonctionnement du circuit de la sonde lambda aval banc 1 (sonde O2 apres catalyseur cote cylindres 1-3). Contrairement a la sonde amont (critique pour melange), la sonde aval sert uniquement a surveiller efficacite du catalyseur. Elle doit afficher signal relativement stable (0.6-0.8V) si catalyseur fonctionne correctement. Le P0136 indique probleme electrique sonde aval: circuit ouvert, court-circuit, signal hors plage. Ce code n'affecte pas directement performances ou consommation moteur car sonde aval est juste monitoring. Cependant il empeche detection future defaillance catalyseur.",
    symptoms: [
      'Voyant moteur allume',
      'Aucun impact sur consommation carburant (sonde aval = monitoring seul)',
      'Aucun impact sur performances moteur',
      'Aucun impact sur ralenti ou conduite',
      'Impossibilite pour ECU de detecter defaillance catalyseur (code P0420 ne pourra apparaitre)',
      'Refus potentiel au controle technique dans certains pays',
      'Code peut coexister avec P0420 si catalyseur aussi defaillant'
    ],
    causes: [
      'Sonde lambda aval usee ou morte (plus de 180 000 km) (50% des cas)',
      'Faisceau electrique sonde aval endommage par chaleur echappement (20% des cas)',
      'Connecteur sonde aval corrode ou infiltration eau (15% des cas)',
      'Court-circuit fil signal sonde aval a masse ou 12V (10% des cas)',
      'Sonde contaminee par additifs ou essence mauvaise qualite (3% des cas)',
      'Fuite echappement apres catalyseur faussant mesure',
      'Probleme alimentation rechauffage sonde aval (fusible, cablage)'
    ],
    solutions: [
      'Verifier valeur sonde O2 aval avec valise: doit afficher 0.6-0.8V stable si catalyseur OK',
      'Tester resistance rechauffage sonde aval: doit afficher 3-15 ohms',
      'Controler continuite et isolation cablage sonde aval',
      'Nettoyer connecteur sonde aval avec bombe contact (10-15 euros)',
      'Remplacer sonde lambda aval si morte ou usee (35-100 euros, moins cher qu\'amont)',
      'Reparer faisceau si endommage (30-100 euros)',
      'Verifier absence fuite echappement apres catalyseur'
    ],
    riskExplanation: "Le P0136 est considere mineur car la sonde aval n'impacte pas fonctionnement moteur, juste surveillance catalyseur. Vous pouvez rouler indefiniment sans reparer. Seul risque: si catalyseur tombe en panne ulterieurement, l'ECU ne pourra pas le detecter (P0420 n'apparaitra pas) et vous roulerez avec catalyseur mort sans le savoir, augmentant pollution. Reparation recommandee sous 2-3 mois ou avant controle technique selon reglementation locale.",
    faq: [
      {
        question: 'La sonde aval est-elle vraiment necessaire au fonctionnement moteur?',
        answer: 'Non, sonde aval ne sert QUE a surveiller efficacite catalyseur, elle n\'intervient pas dans regulation melange. L\'ECU compare sonde amont (qui oscille) et sonde aval (qui doit rester stable). Si les deux oscillent pareil, catalyseur ne fonctionne plus (P0420). Si vous roulez avec P0136 (sonde aval HS), le moteur fonctionne parfaitement normal: zero impact consommation, performances, ralenti. Juste l\'ECU ne peut plus surveiller catalyseur. C\'est comme rouler sans jauge essence: ca fonctionne, mais vous ne savez plus si vous avez du carburant.'
      },
      {
        question: 'Dois-je reparer P0136 en priorite ou P0420 si j\'ai les deux?',
        answer: 'Si vous avez P0136 ET P0420 simultanement, reparez dans cet ordre: 1) Remplacez sonde aval (P0136). 2) Effacez codes. 3) Roulez 50-100 km. 4) Verifiez si P0420 revient. Dans 20% cas le P0420 etait fausse alerte causee par sonde aval HS donnant mauvaises valeurs. Le catalyseur est OK mais sonde aval disait qu\'il etait mort. Remplacement sonde aval = 35-100 euros. Remplacement catalyseur = 800-1500 euros. Donc testez d\'abord sonde avant condamner catalyseur. Si P0420 persiste apres sonde neuve, alors oui catalyseur HS.'
      },
      {
        question: 'La sonde aval dure-t-elle aussi longtemps que la sonde amont?',
        answer: 'Generalement OUI voire plus longtemps. La sonde aval travaille dans gaz echappement plus froids (apres catalyseur qui absorbe chaleur) et plus propres (apres catalyseur qui filtre polluants). Moins de stress thermique et chimique = duree vie legerement superieure. Sonde amont: 100 000-150 000 km. Sonde aval: 150 000-200 000 km. De plus sonde aval est souvent moins chere (35-100 euros vs 40-120 euros amont) car moins sollicitee. Priorite toujours a sonde amont qui impacte consommation.'
      },
      {
        question: 'Puis-je passer le controle technique avec P0136?',
        answer: 'Ca depend du pays et de la reglementation. En France depuis 2019, presence d\'un code defaut OBD actif (voyant allume) = refus controle technique automatique, meme si c\'est code mineur comme P0136. Dans d\'autres pays, seuls codes affectant emissions sont verifies. Renseignez-vous sur reglementation locale. Si refus CT pour P0136, reparation obligatoire avant contre-visite. Cout reparation sonde aval (60-150 euros garage) vs cout contre-visite (30-50 euros) + tracas, autant reparer directement. Si pas de CT imminent, pas d\'urgence.'
      },
      {
        question: 'Quel est le cout de remplacement sonde lambda aval?',
        answer: 'Sonde lambda aval: 35-100 euros piece (moins cher que amont car moins sollicitee). Main d\'oeuvre: 30-80 euros (30 min a 1h, parfois plus accessible que amont). Total garage: 65-180 euros. DIY: 35-100 euros seulement. Achat: marques connues (Bosch, NGK, Denso) recommandees. Astuce: certains vehicules ont sonde aval "universelle" compatible = moins cher. Budget previsionnel moyen: 90-130 euros garage. Moins urgent que sonde amont, mais reparation simple et abordable si CT proche.'
      }
    ],
    relatedCodes: ['P0140', 'P0141', 'P0156', 'P0420', 'P0430']
  },
  P0137: {
    code: 'P0137',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0137 indique que le signal de la sonde lambda aval banc 1 est anormalement bas, en permanence sous 0.2V. La sonde aval (apres catalyseur) doit normalement afficher 0.6-0.8V relativement stable si catalyseur fonctionne. Un signal bas constant indique soit court-circuit fil signal a la masse, soit sonde defaillante, soit vraiment beaucoup trop d'oxygene apres catalyseur (ce qui serait etrange). Comme la sonde aval ne sert qu'a surveiller catalyseur et n'impacte pas regulation melange, ce code est considere mineur sans effet sur performances ou consommation moteur.",
    symptoms: [
      'Voyant moteur allume',
      'Aucun impact consommation carburant',
      'Aucun impact performances ou conduite',
      'Aucun symptome ressenti au volant',
      'Impossibilite ECU detecter defaillance catalyseur si elle survient',
      'Code P0420 peut apparaitre simultanement si catalyseur aussi HS',
      'Refus controle technique selon pays'
    ],
    causes: [
      'Court-circuit fil signal sonde aval a la masse (45% des cas)',
      'Sonde lambda aval defaillante coincee en signal bas (30% des cas)',
      'Connecteur sonde aval corrode creant court-circuit (15% des cas)',
      'Fil signal sonde aval endommage touchant echappement ou carrosserie (5% des cas)',
      'Catalyseur reellement defaillant laissant passer trop oxygene (3% des cas)',
      'Fuite echappement entre catalyseur et sonde aspirant air exterieur',
      'Sonde contaminee donnant fausses lectures basses'
    ],
    solutions: [
      'Verifier valeur sonde O2 aval avec valise: si figee 0.1-0.2V, probleme confirme',
      'Tester resistance fil signal sonde aval vers masse: doit afficher infinite',
      'Inspecter visuellement cablage sonde aval, chercher fils denudes',
      'Debrancher sonde: si tension passe 0.45V, sonde HS; si reste 0.1V, court-circuit cablage',
      'Verifier absence fuite echappement apres catalyseur avec fumigene',
      'Remplacer sonde lambda aval si defaillante (35-100 euros)',
      'Reparer faisceau si court-circuit detecte (30-100 euros)'
    ],
    riskExplanation: "Le P0137 n'affecte pas fonctionnement moteur car sonde aval est juste monitoring catalyseur, pas regulation melange. Aucun impact consommation, performances, ralenti. Seul risque theorique: si catalyseur tombe en panne plus tard, l'ECU ne pourra le detecter et vous continuerez rouler avec catalyseur mort sans le savoir. Pollution augmentee mais aucun symptome mecanique. Reparation recommandee sous 2-3 mois ou avant controle technique si requis par reglementation.",
    faq: [
      {
        question: 'Comment differencier P0137 (signal bas sonde aval) de P0131 (signal bas sonde amont)?',
        answer: 'P0131 (sonde amont signal bas) provoque fumee noire, surconsommation 20-35%, ralenti instable car ECU sur-enrichit pensant melange pauvre. P0137 (sonde aval signal bas) = zero symptome ressenti car sonde aval ne controle pas melange, juste surveille catalyseur. Test definitif: valise OBD indique precisement quelle sonde (amont = "Sensor 1", aval = "Sensor 2" sur Banc 1). Localisation physique: amont = avant catalyseur (dans tubulure echappement chaude), aval = apres catalyseur (plus bas, dans tube echappement refroidi).'
      },
      {
        question: 'Un court-circuit masse est-il la cause la plus frequente?',
        answer: 'Oui (45% cas P0137). Le fil signal sonde aval passe sous vehicule pres echappement et peut perdre gaine isolante avec chaleur, vibrations, projections sel/eau. Le fil cuivre denude touche alors echappement, carrosserie, ou berceau moteur (toutes masses) creant court-circuit. Signal tombe a 0V. Test: inspectez visuellement tout faisceau sonde aval depuis sonde jusqu\'au connecteur ECU. Cherchez gaine fondue, craquee, abrasee, fils apparents. Mesurez resistance fil signal (sonde debranchee) vers masse vehicule: doit afficher infinite. Si continuite, court-circuit. Reparation: isoler section avec gaine ou remplacer faisceau.'
      },
      {
        question: 'La sonde aval peut-elle etre coincee en signal bas comme la sonde amont?',
        answer: 'Oui (30% cas) mais c\'est moins frequent que pour sonde amont car sonde aval travaille dans conditions moins extremes. Element ceramique peut quand meme se degrader, se fissurer, ou etre contamine. Une sonde aval coincee en signal bas donne perpetuellement 0.1-0.2V au lieu 0.6-0.8V attendu. Test: debranchez sonde aval et mesurez sa resistance entre broches signal et masse. Doit afficher variable selon temperature. Si bloquee a valeur fixe ou court-circuit interne (moins 10 ohms), sonde HS. Remplacement: 35-100 euros piece + 30-80 euros MO = 65-180 euros garage.'
      },
      {
        question: 'Une fuite echappement peut-elle causer signal bas sonde aval?',
        answer: 'Oui dans 5% cas. Une fuite echappement entre catalyseur et sonde aval aspire air frais exterieur qui se melange aux gaz. Air frais = 21% oxygene. Gaz post-catalyseur = 1-3% oxygene. Le melange donne lecture faussement elevee en oxygene. La sonde interprete ca comme melange tres pauvre et envoie signal bas (0.1-0.2V). Mais moteur fonctionne normalement car c\'est faux signal. Cherchez fuites: joint bride catalyseur poreux, fissure tube echappement, boulon casse. Fuite fait "taptap" ou sifflement au ralenti. Reparation fuite: 30-150 euros selon localisation. Une fois reparee, P0137 disparaitra.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0137?',
        answer: 'Si court-circuit cablage: 30-100 euros reparation fil + 50-100 euros MO = 80-200 euros. Si sonde aval HS: 35-100 euros piece + 30-80 euros MO = 65-180 euros. Si fuite echappement: 30-150 euros selon piece + 50-150 euros MO = 80-300 euros. Budget previsionnel moyen: 100-180 euros garage. Diagnostic important pour cibler cause. Dans 75% cas c\'est sonde ou cablage (moins 200 euros). Astuce: testez d\'abord fusible rechauffage (gratuit), puis resistance sonde (5 min), puis cherchez court-circuit cablage, avant acheter piece.'
      }
    ],
    relatedCodes: ['P0136', 'P0138', 'P0140', 'P0131', 'P0420']
  },
  P0138: {
    code: 'P0138',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0138 signale que le signal de la sonde lambda aval banc 1 est anormalement eleve, en permanence au-dessus de 0.9V. La sonde aval (apres catalyseur) devrait normalement afficher 0.6-0.8V stable. Un signal haut fixe indique soit court-circuit fil signal vers 12V, soit sonde defaillante, soit catalyseur reellement defaillant laissant passer melange trop riche (peu probable). Comme sonde aval sert uniquement monitoring catalyseur sans impacter regulation melange moteur, ce code est considere mineur sans consequence performances ou consommation.",
    symptoms: [
      'Voyant moteur allume',
      'Aucun impact consommation carburant',
      'Aucun impact performances moteur',
      'Aucun symptome perceptible conduite',
      'Impossibilite ECU surveiller correctement efficacite catalyseur',
      'Code P0420 (catalyseur inefficace) peut coexister',
      'Refus controle technique selon reglementation pays'
    ],
    causes: [
      'Court-circuit fil signal sonde aval vers 12V (35% des cas)',
      'Sonde lambda aval defaillante coincee signal haut (30% des cas)',
      'Connecteur sonde aval infiltre eau/huile faussant signal (15% des cas)',
      'Catalyseur reellement defaillant laissant passer melange riche (12% des cas)',
      'Fil signal captant parasites electriques 12V (alternateur, demarreur) (5% des cas)',
      'Sonde contaminee par silicone additifs donnant fausses lectures',
      'Probleme isolation electrique entre fils rechauffage et signal'
    ],
    solutions: [
      'Verifier valeur sonde O2 aval avec valise: si figee 0.9V, probleme confirme',
      'Tester resistance fil signal sonde vers 12V: doit afficher infinite',
      'Debrancher sonde: si tension passe 0.45V, sonde HS; si reste 0.9V, court-circuit cablage',
      'Inspecter connecteur sonde, chercher infiltration eau/huile, nettoyer',
      'Verifier que fil signal est bien isole du fil rechauffage 12V',
      'Remplacer sonde lambda aval si defaillante (35-100 euros)',
      'Reparer court-circuit cablage si detecte (30-100 euros)'
    ],
    riskExplanation: "Le P0138 n'impacte pas fonctionnement moteur car sonde aval ne controle que monitoring catalyseur, pas melange. Zero consequence consommation, performances, ralenti. Seul inconvenient: l'ECU ne peut plus detecter defaillance catalyseur si elle survient ulterieurement. Vous continueriez rouler avec catalyseur mort sans le savoir, augmentant pollution atmospherique. Bien que non urgent mecaniquement, reparation recommandee sous 2-3 mois ou avant controle technique si requis.",
    faq: [
      {
        question: 'Comment savoir si c\'est faux signal ou catalyseur reellement defaillant?',
        answer: 'Test: comparez sonde amont et sonde aval avec valise OBD. Si sonde amont oscille normalement 0.1-0.9V (moteur OK) mais sonde aval reste figee 0.9V, c\'est faux signal sonde aval (court-circuit ou sonde HS). Si sonde amont ET sonde aval oscillent pareil, catalyseur ne fait plus son travail (P0420 apparaitra aussi). Un catalyseur mort laisse passer melange riche non converti, sonde aval detecte "pas assez oxygene" donc affiche 0.9V. Mais si seulement P0138 sans P0420, c\'est quasi-certain faux signal. Catalyseur + sonde simultanement HS = rare (moins 12% cas).'
      },
      {
        question: 'Le fil rechauffage 12V peut-il toucher le fil signal?',
        answer: 'Oui c\'est cause frequente (35% cas). La sonde aval a 4 fils: 2 pour rechauffage (12V et masse), 2 pour signal (signal et masse). Si isolation craque, fil rechauffage 12V peut toucher fil signal, elevant signal a 12V (interprete 0.9V max par ECU). Surtout avec vibrations echappement et chaleur degradant gaines isolantes. Test: moteur eteint contact coupe, mesurez tension fil signal sonde debranchee. Doit afficher 0V. Si vous lisez 12V ou tension parasite, court-circuit vers alimentation. Inspectez connecteur et faisceau, cherchez fils qui se touchent. Reparation: isoler correctement ou remplacer connecteur (10-30 euros).'
      },
      {
        question: 'La sonde aval peut-elle s\'user et se coincer en signal haut?',
        answer: 'Oui (30% cas) bien que moins frequent que sonde amont. Element ceramique peut se degrader, fissurer, contaminer. Contamination silicone (joints, lubrifiants) est cause classique: silicone se depose sur element platine empoisonnant reaction chimique. Sonde devient "aveugle" et affiche valeur aleatoire souvent haute. Test: remplacez sonde aval par sonde neuve qualite (Bosch, NGK). Si P0138 disparait, ancienne sonde etait HS. Si P0138 persiste, probleme cablage ou catalyseur. Cout test: 35-100 euros sonde. Si vous gardez ancienne sonde testee OK, echangez/revendez pour recuperer 20-30 euros.'
      },
      {
        question: 'Dois-je remplacer sonde aval meme si moteur fonctionne parfaitement?',
        answer: 'Ca depend de vos prioritetes. Mecaniquement: NON, moteur fonctionne parfait sans sonde aval car elle ne controle pas melange. Legalement: PEUT-ETRE, selon reglementation controle technique votre pays (en France oui depuis 2019, voyant allume = refus). Ecologiquement: OUI, sans sonde aval fonctionnelle l\'ECU ne peut detecter panne catalyseur future, vous risquez rouler avec catalyseur mort polluant excessivement sans le savoir. Financierement: reparation abordable 65-180 euros garage vs contre-visite + tracas. Conseil: si CT dans moins 3 mois, reparez. Sinon, pas urgent.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0138?',
        answer: 'Si court-circuit cablage vers 12V: 30-100 euros reparation + 50-100 euros MO = 80-200 euros. Si sonde aval coincee signal haut: 35-100 euros piece + 30-80 euros MO = 65-180 euros. Si connecteur infiltre eau: nettoyage 10-20 euros DIY ou 30-50 euros garage, ou remplacement connecteur 15-35 euros. Si catalyseur aussi HS (rare avec P0138 seul): 800-1500 euros. Budget previsionnel moyen: 100-180 euros garage. Procedure diagnostic: 1) Testez court-circuit cablage (gratuit multimetre), 2) Nettoyez connecteur (10 euros), 3) Si persiste, remplacez sonde (65-180 euros).'
      }
    ],
    relatedCodes: ['P0136', 'P0137', 'P0140', 'P0132', 'P0420']
  },
  P0140: {
    code: 'P0140',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0140 indique absence complete d'activite de la sonde lambda aval banc 1. La sonde ne donne aucun signal variable, restant figee autour de 0.45V (point mort). La sonde aval (apres catalyseur) sert uniquement a surveiller efficacite catalyseur en comparant son signal avec sonde amont. Sans activite sonde aval, l'ECU ne peut plus monitorer catalyseur mais le moteur fonctionne parfaitement car regulation melange se fait avec sonde amont uniquement. Code considere mineur sans impact performances, consommation ou conduite. Principalement problematique pour controle technique selon pays.",
    symptoms: [
      'Voyant moteur allume',
      'Aucun impact consommation carburant',
      'Aucun impact performances moteur',
      'Aucun symptome conduite perceptible',
      'Impossibilite ECU detecter future defaillance catalyseur',
      'Code P0420 ne pourra plus apparaitre si catalyseur tombe en panne',
      'Refus controle technique selon reglementation pays'
    ],
    causes: [
      'Sonde lambda aval completement morte (plus 200 000 km) (55% des cas)',
      'Fusible rechauffage sonde aval grille (20% des cas)',
      'Resistance rechauffage sonde aval coupee (circuit ouvert) (15% des cas)',
      'Connecteur sonde aval totalement corrode ou debranche (5% des cas)',
      'Faisceau electrique sonde aval coupe (3% des cas)',
      'Sonde aval fortement contaminee element empoisonne (rare)',
      'Probleme alimentation 12V generale vers sonde aval'
    ],
    solutions: [
      'Verifier avec valise que sonde aval reste figee 0.45V meme en accelerant (morte)',
      'Tester resistance rechauffage sonde aval: doit afficher 3-15 ohms, pas infinite',
      'Controler fusible rechauffage sonde aval (10-15A selon vehicule)',
      'Verifier presence 12V alimentation rechauffage contact mis',
      'Inspecter connecteur sonde aval, nettoyer si corrosion legere',
      'Remplacer sonde lambda aval si morte (35-100 euros)',
      'Remplacer fusible si grille (2-5 euros) ou reparer cablage si coupe'
    ],
    riskExplanation: "Le P0140 n'affecte absolument pas fonctionnement moteur car sonde aval ne sert qu'a monitoring catalyseur, pas regulation melange. Zero impact mecanique. Seul inconvenient: si catalyseur tombe en panne dans futur, l'ECU ne pourra le detecter (P0420 n'apparaitra jamais) et vous roulerez indefiniment avec catalyseur mort polluant excessivement sans le savoir. Bien que non urgent mecaniquement, reparation recommandee sous 2-3 mois ou avant controle technique si requis par reglementation.",
    faq: [
      {
        question: 'Quelle difference entre P0134 (sonde amont inactive) et P0140 (sonde aval inactive)?',
        answer: 'P0134 (sonde amont morte) = SERIEUX car sonde amont controle melange, sans elle surconsommation 15-25%, emissions elevees, performances degradees. P0140 (sonde aval morte) = MINEUR car sonde aval ne fait que surveiller catalyseur, zero impact moteur. Avec P0134 vous le sentirez (consomme plus, moins performant). Avec P0140 vous ne sentirez rien. Priorite absolue: toujours reparer sonde amont en premier. Sonde aval peut attendre si budget limite, moteur fonctionne parfait sans elle.'
      },
      {
        question: 'Le fusible rechauffage sonde aval est-il le meme que sonde amont?',
        answer: 'Ca depend du vehicule. Certains ont fusible commun pour toutes sondes O2 (1 fusible 15-20A). D\'autres ont fusible separate par sonde (2-4 fusibles 10A). Consultez schema electrique ou manuel vehicule pour localiser fusible(s) sonde O2. Si fusible commun et qu\'il grille, TOUTES sondes sont HS (P0134 + P0140 simultanement). Si fusibles separes et fusible aval seul grille, seul P0140 apparait. Test gratuit: localisez et controlez visuellement fusible sonde aval. Si grille, remplacez (2-5 euros). Si P0140 disparait, probleme resolu pour quasi-gratuit. Toujours tester fusible AVANT acheter sonde.'
      },
      {
        question: 'Puis-je rouler indefiniment avec P0140 sans reparer?',
        answer: 'Techniquement OUI, mecaniquement aucun probleme. Le moteur fonctionne parfait, consomme normal, performances normales. Sonde aval n\'intervient pas dans fonctionnement. Seuls inconvenients: 1) Voyant moteur toujours allume (gene psychologique, cache futurs codes). 2) Impossibilite detecter panne catalyseur si elle survient (vous roulerez avec catalyseur mort sans savoir, pollution excessive). 3) Refus controle technique dans pays avec reglementation stricte (France, Allemagne, etc.). Si pas de CT imminent et que voyant ne vous derange pas, vous pouvez reporter indefiniment. Mais reparation simple abordable (65-150 euros), autant faire.'
      },
      {
        question: 'Pourquoi la sonde aval dure-t-elle plus longtemps que la sonde amont?',
        answer: 'Sonde aval travaille conditions moins severes: gaz echappement refroidis (400-500C vs 600-800C amont), gaz plus propres apres filtration catalyseur (moins residus agressifs). Donc element ceramique subit moins stress thermique et chimique. Duree vie typique: sonde amont 100 000-150 000 km, sonde aval 150 000-200 000 km. De plus, sonde aval ne travaille qu\'en surveillance pas regulation active, donc moins sollicitee. Si P0140 apparait sous 150 000 km, suspectez fusible ou cablage plutot que sonde usee. Au-dela 180 000 km, usure normale sonde est probable.'
      },
      {
        question: 'Quel est le cout de remplacement sonde lambda aval?',
        answer: 'Sonde lambda aval: 35-100 euros piece (moins cher que amont). Main d\'oeuvre: 30-80 euros (accessibilite variable). Total garage: 65-180 euros. DIY: 35-100 euros seulement. Si c\'est juste fusible: 2-5 euros. Si connecteur corrode: nettoyage 10-15 euros ou nouveau connecteur 15-30 euros. Budget previsionnel moyen garage: 90-140 euros. Conseil: diagnostic systematique avant achat. Testez: 1) Fusible (gratuit), 2) Presence 12V rechauffage (5 min), 3) Resistance rechauffage sonde (5 min multimetre). Dans 20% cas c\'est fusible (quasi gratuit), 80% cas sonde morte (65-180 euros).'
      }
    ],
    relatedCodes: ['P0136', 'P0137', 'P0138', 'P0134', 'P0420']
  },

  // === CODES SONDES OXYGENE (O2) BANC 2 - P0150-P0161 ===

  P0150: {
    code: 'P0150',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0150 indique un dysfonctionnement du circuit de la sonde a oxygene (O2 ou lambda) amont du banc 2. Sur les moteurs V6 ou V8, le banc 2 est le cote oppose au cylindre numero 1 (generalement cote droit ou arriere selon orientation moteur). La sonde amont (pre-catalyseur) est critique car elle mesure richesse melange air-carburant en temps reel et permet a l'ECU d'ajuster injection pour obtenir combustion optimale. Le P0150 est un code generique signalant anomalie electrique du circuit: tension hors plage, absence signal, court-circuit ou coupure. Ce code affecte directement gestion melange banc 2, causant surconsommation et emissions elevees.",
    symptoms: [
      'Voyant moteur allume en permanence sur tableau de bord',
      'Surconsommation carburant notable (10-20% augmentation cote banc 2)',
      'Ralenti legerement instable ou irregulier, surtout a froid',
      'Perte legere de performances notamment lors accelerations franches',
      'Emissions polluantes elevees (echec controle technique pollution)',
      'Odeur forte essence brule non consomme a l\'echappement',
      'Hesitations moteur lors transitions charge (acceleration/deceleration)'
    ],
    causes: [
      'Connecteur electrique sonde O2 corrode ou debranche (30% des cas)',
      'Fuite echappement avant catalyseur faussant lecture sonde (25% des cas)',
      'Sonde lambda usee ne generant plus signal correct (20% des cas)',
      'Cablage endommage par chaleur echappement (court-circuit ou coupure) (15% des cas)',
      'Fusible sonde oxygene grille coupant alimentation rechauffage (5% des cas)',
      'Probleme ECU ou masse electrique defectueuse (3% des cas)',
      'Contamination sonde par additifs essence ou huile brulee (2% des cas)'
    ],
    solutions: [
      'Scanner codes avec valise et observer donnees temps reel sonde O2 banc 2',
      'Inspecter visuellement connecteur sonde: nettoyer si oxyde, remplacer si endommage (10-30 euros)',
      'Verifier presence tension alimentation rechauffage sonde (12V contact) avec multimetre',
      'Controler resistance electrique rechauffage sonde (doit etre 2-14 ohms selon modele)',
      'Inspecter echappement banc 2 avant catalyseur: reparer fuites si presentes (30-150 euros)',
      'Remplacer sonde lambda amont banc 2 si defectueuse (40-120 euros piece + 40-100 euros MO)',
      'Verifier fusible circuit sonde O2 et remplacer si grille (2-5 euros)'
    ],
    riskExplanation: "Un code P0150 non traite entraine surconsommation carburant importante (10-20% plus) car ECU fonctionne boucle ouverte sans retour precis sonde O2. Les emissions polluantes augmentent drastiquement (NOx et HC), causant refus controle technique. Le catalyseur banc 2 risque encrassement premature par melange trop riche non optimise. A moyen terme, bougies encrassees et perte performances. Intervention recommandee sous 3-6 semaines maximum.",
    faq: [
      {
        question: 'Quelle est la difference entre banc 1 et banc 2 sur un moteur V?',
        answer: 'Sur moteur V (V6, V8, V10), banc 1 = rangee cylindres contenant cylindre numero 1 (habituellement cote conducteur sur vehicules europeens, cote passager sur americains). Banc 2 = rangee opposee. Chaque banc a son collecteur echappement distinct donc ses propres sondes O2 (1 amont + 1 aval par banc). P0130-P0140 = banc 1, P0150-P0161 = banc 2. Sur moteur en ligne (L4, L6), un seul banc donc seulement codes P0130-P0140 possibles. Identifier banc correct crucial pour diagnostic: remplacer sonde banc 1 alors que P0150 indique banc 2 ne resoudra rien.'
      },
      {
        question: 'Puis-je rouler avec P0150 ou dois-je reparer immediatement?',
        answer: 'Vous pouvez rouler quelques semaines sans danger mecanique immediat. Le moteur fonctionne en boucle ouverte sur banc 2 (injection basee sur tables precalculees, pas retour sonde). Consequences court terme: surconsommation 10-20%, emissions elevees. Consequences moyen terme si non repare: encrassement catalyseur, bougies, performances degradees. Aucun risque casse moteur mais progression problemes. Delai raisonnable reparation: 3-6 semaines. Si controle technique imminent, reparer AVANT car echec pollution garanti. Si long trajet prevu, reparer avant pour eviter surconsommation importante.'
      },
      {
        question: 'Comment tester si la sonde O2 banc 2 est morte ou si c\'est probleme electrique?',
        answer: 'Test systematique avec multimetre et valise OBD: 1) Controler fusible sonde O2 (verification visuelle, gratuit). 2) Mesurer tension alimentation rechauffage: doit avoir 12V contact mis sur fil + rechauffage. 3) Mesurer resistance rechauffage sonde: debrancher connecteur, mesurer entre broches rechauffage, doit lire 2-14 ohms (valeur exacte selon modele). Si pas 12V, probleme cablage/fusible. Si resistance infinie, rechauffage sonde coupe (sonde HS). Si resistance OK et 12V present, probleme element sensing sonde. 4) Valise OBD donnees temps reel: observer tension sonde moteur chaud. Doit osciller 0.1-0.9V rapidement (plusieurs fois par seconde). Si figee 0.45V, sonde morte. Si OK, probleme intermittent ou connecteur.'
      },
      {
        question: 'Pourquoi P0150 apparait-il souvent avec P0420 ou P0430?',
        answer: 'Sonde O2 amont defaillante (P0150) empeche regulation correcte melange air-carburant banc 2. ECU injecte donc quantites non optimales (souvent trop riche pour securite). Melange trop riche sature catalyseur banc 2 en imbrules (HC, CO), l\'empechant fonctionner efficacement. Sonde aval detecte alors que catalyseur ne convertit plus correctement, declenchant P0430 (efficacite catalyseur banc 2). Donc: P0150 (cause racine) → melange incorrect → surcharge catalyseur → P0430 (consequence). Reparation: TOUJOURS corriger P0150 en premier, rouler 50-100 km, puis reevaluer P0430. Dans 60% cas, P0430 disparait apres correction P0150. Si P0430 persiste apres, catalyseur reellement HS.'
      },
      {
        question: 'Le cout de remplacement sonde O2 banc 2 est-il different du banc 1?',
        answer: 'Prix piece identique ou similaire (40-120 euros sonde lambda universelle ou OEM). MAIS main d\'oeuvre peut varier significativement selon accessibilite banc 2. Sur certains vehicules (ex: V6 transversal), banc 2 = arriere moteur contre cloison, acces difficile necessite demonter berceau ou composants. MO peut aller 40 euros (acces facile) a 150 euros (acces complexe). Total reparation: 80-270 euros garage selon accessibilite. Sur vehicules acces facile banc 2 (berlines V8 longitudinal), cout identique banc 1 ou 2. Conseil: demander devis MO specifique banc 2 avant intervention, prix tres variable selon modele vehicule.'
      }
    ],
    relatedCodes: ['P0130', 'P0151', 'P0152', 'P0153', 'P0430']
  },

  P0151: {
    code: 'P0151',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0151 signale que tension signal sonde oxygene amont banc 2 reste anormalement basse (proche 0V). En fonctionnement normal melange pauvre, sonde devrait lire 0.1-0.3V, mais avec P0151 elle reste figee sous 0.2V meme quand melange devrait etre riche. Cela indique soit court-circuit masse du fil signal, soit sonde qui ne genere plus tension adequate (element sensing defaillant), soit veritable melange extremement pauvre cote banc 2 (fuite air non mesuree, injecteurs bouches). L'ECU detectant signal perpetuellement bas ne peut plus ajuster injection correctement, il compense en enrichissant melange banc 2 pour securite moteur.",
    symptoms: [
      'Voyant moteur allume de facon permanente',
      'Ralenti instable ou irregulier cote banc 2 (vibrations perceptibles)',
      'Hesitations ou a-coups lors accelerations, manque reprises',
      'Surconsommation carburant moderee (melange enrichi compensatoire)',
      'Fumee noire echappement banc 2 si ECU sur-enrichit excessivement',
      'Odeur essence non brulee a echappement',
      'Difficultes demarrage a froid avec ralenti instable premiers instants'
    ],
    causes: [
      'Court-circuit a la masse du fil signal sonde O2 (frotte contre chassis/echappement) (35% des cas)',
      'Sonde lambda element sensing defaillant ne generant plus tension (30% des cas)',
      'Fuite air non mesuree banc 2 apres debitmetre (admission fissure, joint collecteur) (20% des cas)',
      'Injecteurs banc 2 bouches ou defaillants creant melange reel pauvre (8% des cas)',
      'Connecteur sonde O2 infiltre d\'eau causant court-circuit (5% des cas)',
      'Probleme pression carburant insuffisante appauvrissant melange (1.5% des cas)',
      'Sonde contaminee par silicone joint RTV mal applique a echappement (0.5% des cas)'
    ],
    solutions: [
      'Lire donnees temps reel sonde O2 banc 2 avec valise: si figee 0-0.2V constamment = anormal',
      'Inspecter fil signal sonde O2: rechercher frottements, isolant endommage contre echappement/chassis',
      'Tester continuite fil signal entre sonde et ECU: debrancher sonde, mesurer resistance (doit etre <1 ohm)',
      'Verifier absence court-circuit masse: mesurer resistance fil signal vers masse (doit etre >10K ohms)',
      'Provoquer melange riche temporaire (spray starter devant admission): si tension monte, sonde OK, melange reel pauvre',
      'Remplacer sonde O2 amont banc 2 si tests indiquent defaillance (40-120 euros + 40-100 MO)',
      'Rechercher fuites air admission banc 2: spray eau savonneuse sur joints, durites (observer variation ralenti)'
    ],
    riskExplanation: "Le P0151 pousse ECU a enrichir excessivement banc 2 par securite, causant surconsommation et emissions polluantes elevees. Si cause reelle est fuite air (melange pauvre reel), sur-enrichissement ECU ne suffit pas et moteur tourne mal avec risque surchauffe locale banc 2. Catalyseur banc 2 peut etre endommage par melange trop riche non brule. Bougies s'encrassent rapidement. Intervention recommandee sous 2-4 semaines maximum.",
    faq: [
      {
        question: 'Comment differencier P0151 (signal bas) de P0171 (melange pauvre banc 1)?',
        answer: 'P0151 = probleme SIGNAL sonde O2 banc 2 (electrique: cablage, sonde HS, court-circuit). P0171 = probleme MELANGE reel banc 1 (mecanique: fuite air, injecteur, pression carburant). Avec P0151, sonde ne fonctionne pas correctement mais melange peut etre bon. Avec P0171, sonde fonctionne bien et detecte reel melange pauvre. Test: provoquer melange riche temporaire (spray starter admission). Si tension sonde monte avec spray, sonde OK et P0151 faux (c\'est reel melange pauvre = P0174 plutot). Si tension reste basse malgre spray, sonde ou cablage HS (P0151 confirme).'
      },
      {
        question: 'La sonde O2 peut-elle etre simplement sale plutot que morte?',
        answer: 'OUI possible mais rare. Contamination sonde O2 par: silicone (joint RTV echappement mal applique), plomb (essence plombee dans pays autorisant encore), phosphore (huile brulee excessive consommation huile), additifs essence. Symptomes contamination: reponse lente, signal faible mais pas completement mort. Tentative nettoyage sonde: la chauffer rouge vif au chalumeau propane 30-60 secondes pour bruler depots (risque: casser ceramique fragile). Taux succes nettoyage: 30% seulement. Si sonde >150 000 km, contamination severe ou P0151 persiste apres nettoyage, remplacement inevitable. Prix sonde neuve (40-120 euros) vs risque temps perdu nettoyage rate: generalement remplacement plus rentable.'
      },
      {
        question: 'Pourquoi la sonde banc 2 tombe-t-elle en panne plus rapidement que banc 1?',
        answer: 'Normalement duree vie similaire (120 000-180 000 km). Si banc 2 defaille prematuremment, chercher causes specifiques banc 2: 1) Fuite echappement banc 2 exposant sonde air froid (choc thermique repetitif). 2) Injecteur banc 2 fuyant noyant sonde essence liquide. 3) Consommation huile cylindres banc 2 (segments uses) contaminant sonde phosphore. 4) Acces banc 2 souvent difficile donc maintenance (bougies, etc.) negligee, provoquant ratees allumage abimant sonde. 5) Position banc 2 sur certains vehicules (cote droit) plus exposee projections route (eau, sel) deteriorant connecteur. Si P0151 apparait <100 000 km, investiguer cause racine avant remplacer sonde sinon nouvelle sonde mourra aussi vite.'
      },
      {
        question: 'Puis-je remplacer sonde O2 banc 2 moi-meme ou faut-il garage?',
        answer: 'Difficulte DIY variable selon accessibilite banc 2 sur votre modele. Moteur V6/V8 longitudinal (RWD): acces correct, DIY possible avec outils basiques (cle sonde O2 27mm ou cle plate 22mm). Moteur V6 transversal (FWD): banc 2 souvent arriere moteur contre cloison, acces difficile voire impossible sans demontage composants (berceau, support moteur). Avant acheter piece, verifier accessibilite votre vehicule: regarder sous capot, reperer ligne echappement banc 2, localiser sonde amont (15-30 cm apres collecteur). Si visible et atteignable, DIY OK (economie 40-100 euros MO). Si invisible ou bloquee, garage recommande. Attention: sonde serree par chaleur (couple 40-50 Nm), demonter moteur froid difficile, chauffer avant avec decapeur thermique aide.'
      },
      {
        question: 'Quel est le delai pour remplacer une sonde O2 amont avec P0151?',
        answer: 'Urgence moderee, pas urgence absolue. Vous pouvez rouler 2-4 semaines sans danger immediat. ECU compense en enrichissant melange banc 2, donc moteur fonctionne mais: 1) Surconsommation 10-15%. 2) Emissions polluantes elevees. 3) Risque encrassement catalyseur si prolonge >1 mois. 4) Performances legerement degradees. Si controle technique imminent: reparer AVANT (echec pollution garanti). Si budget serre: reparer dans 4 semaines max. Si acces banc 2 difficile/cher: grouper avec autre entretien necessitant demontage (ex: distribution si imminente). Ne PAS rouler indefiniment: risque destruction catalyseur (remplacement catalyseur 400-1500 euros vs sonde 80-220 euros).'
      }
    ],
    relatedCodes: ['P0150', 'P0152', 'P0171', 'P0174', 'P0430']
  },

  P0152: {
    code: 'P0152',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0152 indique que tension signal sonde oxygene amont banc 2 reste anormalement elevee (proche 1V en permanence). En fonctionnement normal melange riche, sonde devrait lire 0.7-0.9V, mais avec P0152 elle reste bloquee >0.9V meme quand melange devrait etre pauvre. Cela signale soit court-circuit du fil signal vers 12V, soit sonde defectueuse lisant toujours riche, soit veritable melange extremement riche cote banc 2 (injecteur coince ouvert, pression carburant excessive, fuite regulateur pression). L'ECU recevant signal perpetuellement haut interprete melange trop riche et appauvrit drastiquement, risquant reel appauvrissement dangereux.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Ralenti instable eleve ou irregulier (ECU appauvrit melange)',
      'Calages moteur possibles notamment deceleration ou ralenti',
      'Demarrage difficile a froid necessitant plusieurs tentatives',
      'Hesitations et trous acceleration (melange appauvri insuffisant)',
      'Consommation carburant variable selon reponse ECU compensation',
      'Possibles ratees allumage si melange devient trop pauvre'
    ],
    causes: [
      'Court-circuit fil signal sonde O2 vers fil 12V (frottement cablage) (30% des cas)',
      'Sonde lambda defectueuse lisant toujours signal riche (element sensing HS) (25% des cas)',
      'Injecteur banc 2 coince ouvert fuyant essence excessivement (20% des cas)',
      'Pression carburant trop elevee (regulateur pression bloque/HS) (12% des cas)',
      'Connecteur sonde corrode creant resistance faussant lecture (8% des cas)',
      'Fuite regulateur pression dans collecteur admission (enrichissement) (3% des cas)',
      'Capteur MAF defaillant sur-evaluant debit air (ECU enrichit a tort) (2% des cas)'
    ],
    solutions: [
      'Lire donnees temps reel sonde O2 banc 2: si bloquee 0.9-1.0V constamment = anormal',
      'Debrancher connecteur sonde et observer donnees ECU: si tension chute brusquement = sonde/cablage HS',
      'Verifier resistance fil signal vers 12V: debrancher sonde, mesurer signal vers batterie+ (doit >10K ohms)',
      'Inspecter cablage sonde: rechercher frottement contre faisceaux 12V pouvant creer court-circuit',
      'Tester pression carburant banc 2 au ralenti: doit etre 2.5-4.0 bars selon vehicule (pas >4.5 bars)',
      'Provoquer melange pauvre temporaire (accelerations franches): si tension reste haute, sonde/cablage HS',
      'Remplacer sonde O2 amont banc 2 si defectueuse (40-120 euros + 40-100 MO garage)'
    ],
    riskExplanation: "Le P0152 force ECU a appauvrir melange banc 2 pour compenser signal faussement riche. Si cause reelle n'est pas melange riche mais sonde/cablage defectueux, moteur tournera melange trop pauvre, risquant surchauffe cylindres banc 2, ratees allumage et dommages pistons/soupapes. Si cause reelle est injecteur fuyant (melange reel riche), sous-compensation ECU insuffisante laissera melange trop riche, noyant bougies, encrassant catalyseur. Diagnostic urgent dans 1-2 semaines maximum.",
    faq: [
      {
        question: 'Comment savoir si P0152 vient sonde HS ou injecteur fuyant reel?',
        answer: 'Test decisif: debrancher connecteur sonde O2 moteur tournant et observer donnees ECU temps reel. Si tension signal chute immediatement vers 0V apres debranchement = probleme sonde ou cablage (signal faussement haut). Si apres debranchement ECU lit tension intermediaire ou si melange reel change (ralenti change), melange etait reellement riche (injecteur fuyant probable). Test complementaire: controler pression carburant (manometre rail). Si pression excessive (>4.5 bars ralenti), regulateur pression HS enrichit tout. Si pression normale, tester injecteurs un par un: debrancher connecteurs injecteurs banc 2 un par un, observer si ralenti ameliore (injecteur fuyant identifie).'
      },
      {
        question: 'Quelle est la difference entre P0152 (signal haut) et P0172 (melange riche)?',
        answer: 'P0152 = probleme SIGNAL sonde O2 banc 2 (electrique: sonde HS, cablage court-circuite). Sonde dit "riche" mais melange peut etre normal ou pauvre. P0172 = probleme MELANGE reel banc 1 (mecanique: injecteur, pression, MAF). Sonde fonctionne bien et detecte reel melange trop riche. P0152 + P0172 SIMULTANEMENT sur meme banc = probablement melange reel riche (injecteur fuyant, pression excessive). P0152 SEUL = probablement sonde/cablage defectueux. Test: provoquer melange pauvre (acceleration franche WOT). Si tension reste haute malgre acceleration, P0152 confirme (sonde bloquee). Si tension descend normalement, melange etait reellement riche.'
      },
      {
        question: 'Un court-circuit vers 12V peut-il endommager la sonde O2 ou l\'ECU?',
        answer: 'NON generalement. Fil signal sonde O2 est haute impedance (>10K ohms vers ECU). Court-circuit accidentel vers 12V ne genere courant excessif (moins 1mA) donc pas risque endommagement ECU ou sonde. Entree ECU protegee par resistances limitation. Seul probleme: signal fausse lecture donc mauvaise gestion melange. MAIS: si court-circuit concerne fil rechauffage sonde (pas fil signal), alors OUI risque. Rechauffage tire 1-2 amperes. Court-circuit rechauffage vers batterie directe peut griller fusible ou endommager ECU si rechauffage commande par ECU. Donc crucial identifier QUEL fil court-circuite: signal (pas grave electroniquement) ou rechauffage (risque fusible/ECU).'
      },
      {
        question: 'Puis-je nettoyer une sonde O2 qui lit toujours signal haut?',
        answer: 'Tentative possible mais taux succes faible pour P0152. Sonde lisant perpetuellement haut indique generalement element sensing ceramique fissure ou electrode platine degradee (pas simple encrassement). Nettoyage chalumeau (chauffer rouge 30-60 sec) peut eliminer depots surface mais ne repare pas fissure interne. Si P0152 cause par encrassement severe (silicone, plomb, huile), nettoyage peut fonctionner (20% succes). Procedure: demonter sonde, chauffer element ceramique au chalumeau propane jusqu\'a rouge vif 45 sec, laisser refroidir naturellement, reinstaller, effacer code, tester. Si code revient sous 50 km, nettoyage echoue, remplacement necessaire. Vu taux echec eleve (80%) et prix sonde correct (40-120 euros), remplacement direct souvent plus rentable temps/argent.'
      },
      {
        question: 'Combien coute le diagnostic et remplacement sonde O2 banc 2?',
        answer: 'Diagnostic garage: 40-80 euros (30-60 min technicien + valise pro). Sonde O2 amont banc 2: 40-120 euros piece (universelle 40-70 euros, OEM constructeur 80-120 euros). Main d\'oeuvre remplacement: 40-100 euros (variable accessibilite banc 2). Total garage complet (diagnostic + piece + MO): 120-300 euros. DIY si acces facile: 40-120 euros piece seulement (economie 80-180 euros). Outil special recommande: cle sonde lambda 22 ou 27mm (15-25 euros, reutilisable). Budget moyen previsionnel garage: 150-200 euros. Si accessibilite banc 2 difficile (moteur transversal V6): MO peut grimper 120-150 euros (necessitant demonter composants), total 200-350 euros.'
      }
    ],
    relatedCodes: ['P0150', 'P0151', 'P0172', 'P0175', 'P0430']
  },

  P0153: {
    code: 'P0153',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0153 signale que la sonde oxygene amont banc 2 repond trop lentement aux changements richesse melange air-carburant. En fonctionnement normal, sonde O2 doit osciller rapidement entre 0.1V (pauvre) et 0.9V (riche) plusieurs fois par seconde lorsque moteur en boucle fermee. Le P0153 indique temps reponse sonde trop long: elle met plusieurs secondes passer de pauvre a riche ou inverse, au lieu millisecondes attendues. Cause principale: vieillissement naturel element ceramique sonde (>150 000 km) qui perd sensibilite. Consequence: ECU recoit information retard, ajuste injection avec latence, degradant optimisation melange, augmentant consommation et emissions.",
    symptoms: [
      'Voyant moteur allume de facon permanente',
      'Surconsommation carburant moderee (5-15% augmentation)',
      'Ralenti legerement instable ou fluctuant',
      'Hesitations legeres lors transitions charge (acceleration/deceleration)',
      'Emissions polluantes elevees (HC et NOx)',
      'Performances globalement normales mais manque finesse reponse moteur',
      'Demarrage et conduite normaux (symptomes subtils contrairement codes sonde morte)'
    ],
    causes: [
      'Vieillissement naturel sonde O2 apres 150 000-200 000 km (60% des cas)',
      'Contamination progressive sonde par additifs essence, huile brulee (20% des cas)',
      'Fuite echappement banc 2 avant sonde exposant element air froid (10% des cas)',
      'Connexion electrique connecteur corrode augmentant resistance signal (5% des cas)',
      'Depots carbone sur element ceramique sonde ralentissant reponse (3% des cas)',
      'Thermostat moteur bloque ouvert (temperature moteur basse, sonde moins reactive) (1.5% des cas)',
      'Liquide refroidissement contamine circulant dans echappement (joint culasse fuyant) (0.5% cas)'
    ],
    solutions: [
      'Valise diagnostic donnees temps reel: observer oscillations sonde O2 ralenti moteur chaud (doit osciller >1 Hz)',
      'Provoquer changement melange brusque (acceleration WOT puis deceleration): mesurer temps reponse sonde',
      'Verifier kilometrage vehicule: si >150 000 km et P0153, usure normale sonde (remplacement logique)',
      'Inspecter ligne echappement banc 2 avant catalyseur: reparer fuites si presentes (30-150 euros)',
      'Nettoyer connecteur sonde avec nettoyant contact electronique si oxyde (5-10 euros)',
      'Tentative nettoyage sonde au chalumeau (chauffer rouge 30 sec) si budget limite (gratuit, succes 25%)',
      'Remplacer sonde O2 amont banc 2 (solution definitive) (40-120 euros piece + 40-100 MO)'
    ],
    riskExplanation: "Le P0153 provoque surconsommation moderee (5-15%) et emissions polluantes elevees car ECU ne peut optimiser melange temps reel efficacement. Contrairement sonde morte (P0150), moteur reste conduisible normalement mais inefficacement. A moyen terme (6-12 mois non traite), catalyseur banc 2 s'encrasse prematuremment par melange non optimise. Reponse ralentie sonde ne cause pas dommage mecanique immediat. Intervention recommandee sous 2-3 mois ou avant controle technique.",
    faq: [
      {
        question: 'Quelle est la duree de vie normale d\'une sonde lambda avant P0153?',
        answer: 'Duree vie sonde O2 amont: 120 000-180 000 km en moyenne (8-12 ans). Sonde lambda subit vieillissement naturel inevitable: element ceramique zircone perd progressivement sensibilite, reponse ralentit. P0153 apparaissant vers 150 000-180 000 km = usure normale attendue, remplacement justifie. Si P0153 apparait <100 000 km = anormal, chercher cause prematuree: contamination (essence additivee excessive, consommation huile), fuites echappement (chocs thermiques), qualite sonde inferieure. Sondes OEM constructeur durent generalement plus longtemps (150 000-200 000 km) que sondes aftermarket economiques (100 000-150 000 km). Donc kilometrage crucial evaluer si remplacement logique ou investigation supplementaire necessaire.'
      },
      {
        question: 'La reponse lente de la sonde va-t-elle empirer progressivement?',
        answer: 'OUI, degradation progressive irreversible. Vieillissement sonde lambda = processus continu: element ceramique subit cycles thermiques repetes (20C-800C des milliers fois), electrodes platine s\'oxydent lentement, micro-fissures se forment. Initialement reponse ralentit legerement (ECU compense, pas code). Puis ralentissement depasse seuils tolerance ECU (P0153 apparait). Si non remplacee, reponse continue ralentir jusqu\'a sonde quasi figee (codes P0150, P0134). Delai evolution P0153 → sonde morte: 6-24 mois selon usage vehicule (conduite urbaine vieillit plus vite que autoroute). Donc remplacement des P0153 recommande eviter degradation jusqu\'a panne complete necessitant boucle ouverte permanente.'
      },
      {
        question: 'Puis-je ameliorer la reponse de la sonde sans la remplacer?',
        answer: 'Tentatives possibles taux succes limite: 1) Nettoyage thermique: demonter sonde, chauffer element ceramique chalumeau propane rouge vif 30-60 sec pour bruler depots carbone. Succes 25% si P0153 cause encrassement leger. 2) Nettoyage chimique: tremper element dans nettoyant carburateur 15 min (ATTENTION: peut detruire sonde si trop agressif). Succes 15%. 3) Additif nettoyant systeme echappement (type CataClean) - efficacite douteuse pour sonde (5% succes). 4) Correction fuites echappement ameliore environnement sonde (pas sonde elle-meme). Conclusion: tentatives OK si budget tres limite ou P0153 recent <120 000 km. Si >150 000 km ou tentatives echouees, remplacement seule solution durable fiable.'
      },
      {
        question: 'Dois-je remplacer les deux sondes amont (banc 1 et 2) simultanement?',
        answer: 'PAS obligatoire mais parfois judicieux. Si P0153 sur banc 2 et vehicule >150 000 km, sonde banc 1 probablement age similaire (meme usure). Remplacer simultanement evite rappel garage 6-12 mois plus tard pour banc 1 (economie MO cumulee). Cout: 2 sondes (80-240 euros) + MO combinee (60-120 euros si acces facile simultane) = 140-360 euros. Vs remplacements separes: (40-120 + 40-100) x2 = 160-440 euros. Economie: 20-80 euros + tranquillite esprit. Remplacer deux simultanement pertinent SI: 1) Vehicule >150 000 km (usure similaire). 2) Acces banc 2 difficile (profiter intervention). 3) Budget permet. Si budget serre ou <120 000 km, remplacer seulement banc 2 (P0153), surveiller banc 1.'
      },
      {
        question: 'Un additif moteur peut-il causer ou aggraver P0153?',
        answer: 'OUI certains additifs dangereux pour sondes O2. Additifs a EVITER: 1) Additifs anti-friction contenant silicone (RTV) - silicone brule se depose sur sonde, l\'isole thermiquement, ralentit reponse. 2) Additifs nettoyant huile contenant phosphore - phosphore contamine element ceramique, degradation irreversible. 3) Octane boosters contenant MMT (manganese) - depots manganese isolent sonde. 4) Essences additionnees excessivement (supermarche discount) - additifs inconnus risque contamination. Additifs SAFE pour sondes: nettoyants injection type Techron (polyether amine), additifs cetane diesel sans metal. Si P0153 apparait peu apres utilisation additif, contamination possible cause. Remplacement sonde inevitable, dommage irreversible. Conseil: eviter additifs moteur non specifie compatible sondes O2.'
      }
    ],
    relatedCodes: ['P0150', 'P0151', 'P0152', 'P0133', 'P0430']
  },

  P0154: {
    code: 'P0154',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0154 indique absence complete activite sonde oxygene amont banc 2. En fonctionnement normal moteur chaud boucle fermee, sonde O2 doit osciller activement entre 0.1V et 0.9V plusieurs fois par seconde. Le P0154 signale que tension sonde reste figee valeur fixe (typiquement 0.45V tension reference) sans aucune oscillation, meme apres plusieurs minutes fonctionnement moteur chaud. Cela indique sonde morte ne generant plus signal variation: element sensing ceramique fissure, electrodes platine usees, ou circuit electrique completement coupe. L'ECU ne recevant aucun retour sonde, fonctionne boucle ouverte permanente sur banc 2 avec tables injection precalculees grossieres.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Surconsommation carburant notable banc 2 (10-20% augmentation globale)',
      'Ralenti instable ou irregulier notamment a chaud',
      'Performances moteur legerement degradees (manque reactivite)',
      'Emissions polluantes elevees HC et NOx (echec controle technique)',
      'Fumee noire possible echappement si ECU enrichit excessivement par securite',
      'Pas d\'oscillation visible donnees temps reel sonde O2 banc 2 (figee 0.45V typiquement)'
    ],
    causes: [
      'Sonde lambda morte usure naturelle element ceramique (kilometrage >150 000 km) (55% cas)',
      'Fusible circuit rechauffage sonde grille (sonde ne chauffe jamais temperature fonctionnement) (20% cas)',
      'Fil alimentation rechauffage sonde coupe (circuit ouvert, pas courant rechauffage) (12% cas)',
      'Connecteur electrique sonde corrode ou debranche (pas signal vers ECU) (8% cas)',
      'Contamination severe sonde par silicone/plomb/phosphore (element isole, inactif) (3% cas)',
      'Court-circuit interne sonde (element sensing court-circuite, tension figee) (1.5% cas)',
      'Probleme ECU ou masse electrique defectueuse (rare) (0.5% cas)'
    ],
    solutions: [
      'Valise diagnostic temps reel: observer tension sonde O2 banc 2 moteur chaud (si figee 0.4-0.5V = mort)',
      'Provoquer variations melange (acceleration puis deceleration): si tension bouge pas = sonde morte confirmee',
      'Verifier fusible circuit sonde O2: localiser fusible (15-20A souvent), tester continuite (2-5 euros si grille)',
      'Controler presence 12V alimentation rechauffage sonde contact mis (multimetre entre fil + rechauffage et masse)',
      'Mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre broches rechauffage (doit lire 2-14 ohms)',
      'Inspecter connecteur sonde: nettoyer si oxyde, remplacer broches si corrodees (10-30 euros connecteur)',
      'Remplacer sonde O2 amont banc 2 si morte (solution finale) (40-120 euros piece + 40-100 MO garage)'
    ],
    riskExplanation: "Le P0154 force moteur fonctionner boucle ouverte permanente banc 2, causant surconsommation importante (10-20%) et emissions polluantes tres elevees (echec controle technique garanti). Sans retour sonde, ECU enrichit melange par securite, noyant catalyseur banc 2 imbrules, risquant destruction prematuree catalyseur (400-1500 euros remplacement). Bougies s'encrassent rapidement par melange trop riche. Pas risque mecanique immediat mais cout croissant si non traite. Intervention recommandee sous 4-8 semaines maximum.",
    faq: [
      {
        question: 'Quelle difference entre P0154 (pas d\'activite) et P0150 (dysfonctionnement circuit)?',
        answer: 'P0150 = code generique "probleme circuit sonde O2" (peut etre cablage, connecteur, sonde, fusible - diagnostic large). P0154 = code specifique "sonde ne genere AUCUNE activite" (sonde quasi certainement morte ou fusible grille - diagnostic cible). P0150 peut etre probleme intermittent (connecteur oxyde, faux contact). P0154 = probleme permanent (sonde morte figee 0.45V). Test: si donnees temps reel montrent tension figee immobile = P0154 (sonde morte). Si tension absente ou erratique = P0150 (probleme electrique). P0154 presque toujours necessite remplacement sonde. P0150 parfois resolu nettoyant connecteur ou reparant cablage. P0154 diagnostic plus clair: sonde HS ou fusible HS.'
      },
      {
        question: 'Comment verifier si c\'est le fusible ou la sonde qui est morte?',
        answer: 'Test systematique gratuit 5 min: 1) Localiser fusible sonde O2 (consulter manuel, generalement boite fusibles moteur, 15-20A). 2) Inspecter visuellement fusible: si filament metallique coupe = fusible grille (remplacer 2-5 euros, probleme resolu). 3) Si fusible intact, mesurer tension alimentation rechauffage sonde: contact mis, multimetre entre fil + rechauffage (generalement gris ou blanc) et masse, doit lire 12V. 4) Si 12V present, mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre entre broches rechauffage (blanches souvent), doit lire 2-14 ohms. Si resistance infinie = rechauffage sonde coupe (sonde HS). Si resistance OK = element sensing sonde mort (sonde HS). Donc: fusible grille (5% cas, 2-5 euros) vs sonde morte (95% cas, 80-220 euros garage).'
      },
      {
        question: 'Une sonde O2 peut-elle mourir subitement ou progressivement?',
        answer: 'Les DEUX scenarios possibles: 1) Mort progressive (75% cas): usure naturelle >150 000 km, reponse ralentit progressivement (P0153 d\'abord), puis oscillations diminuent, finalement sonde fige completement (P0154). Transition 6-18 mois. 2) Mort subite (25% cas): contamination severe soudaine (essence plombee accidentelle, huile brulee massive fuite turbo), choc thermique brutal (fuite echappement projetant eau froide sur sonde chaude 800C), court-circuit interne aleatoire. Mort subite produit souvent AVANT P0153, directement P0154. Si P0154 apparait sans P0153 prealable ET kilometrage modere (<120 000 km), suspecter cause externe (contamination, choc) plutot qu\'usure. Si P0154 suit P0153 progressif ET >150 000 km, usure normale attendue.'
      },
      {
        question: 'Puis-je rouler indefiniment avec P0154 ou moteur va casser?',
        answer: 'Moteur NE cassera PAS mecaniquement a cause P0154. Vous pouvez techniquement rouler indefiniment (des annees) avec sonde morte. ECU fonctionne boucle ouverte avec tables fixes, vehicule conduisable. MAIS consequences: 1) Surconsommation permanente 10-20% (cout carburant additionnel significatif long terme). 2) Emissions polluantes tres elevees (illegale plupart pays, echec controle technique). 3) Encrassement progressif catalyseur banc 2 par melange trop riche, catalyseur mourra prematuremment 1-3 ans (remplacement 400-1500 euros vs sonde 80-220 euros). 4) Bougies encrassees necessitant remplacements frequents. 5) Performances degradees legerement. Donc: pas urgence mecanique immediate mais economiquement stupide reporter indefiniment. Reparer sous 2 mois evite couts secondaires bien superieurs.'
      },
      {
        question: 'Quel type de sonde O2 acheter: universelle, OEM ou aftermarket?',
        answer: 'Trois options: 1) Sonde OEM constructeur (80-150 euros): qualite garantie, duree vie maximale (150 000-200 000 km), connecteur plug-and-play. Recommande si vehicule <8 ans ou budget permet. 2) Sonde aftermarket marque reputee Bosch/Denso/NTK (50-100 euros): qualite correcte, duree vie bonne (120 000-180 000 km), connecteur compatible souvent. Bon compromis qualite/prix. 3) Sonde universelle generique (30-60 euros): necessite parfois epissure fils (pas plug-and-play), qualite variable, duree vie reduite (80 000-150 000 km). Economique mais risque. Conseil: banc 2 acces souvent difficile, privilegier qualite (OEM ou Bosch) eviter rappel garage 5 ans plus tard. Economiser 40 euros piece pour repayer 80 euros MO banc 2 plus tard = mauvais calcul. Si acces banc 2 facile DIY, universelle acceptable.'
      }
    ],
    relatedCodes: ['P0150', 'P0153', 'P0134', 'P0155', 'P0430']
  },

  P0155: {
    code: 'P0155',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0155 signale dysfonctionnement circuit rechauffage sonde oxygene amont banc 2. Sonde O2 incorpore resistance chauffante 12V permettant atteindre temperature fonctionnement (300-400C) rapidement apres demarrage, independamment temperature gaz echappement. Rechauffage crucial pour boucle fermee rapide (<1-2 min vs 5-8 min sans). Le P0155 indique circuit rechauffage non fonctionnel: fusible grille, resistance chauffage coupee, cablage endommage ou commande ECU defaillante. Sans rechauffage, sonde met 5-10 minutes atteindre temperature, retardant boucle fermee, causant surconsommation et emissions elevees phase demarrage froid prolongee.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Surconsommation carburant notable premiers 5-10 min apres demarrage froid',
      'Ralenti instable ou irregulier pendant phase chauffe moteur',
      'Emissions polluantes elevees au demarrage (fumee noire possible)',
      'Delai prolonge avant boucle fermee (vehicule reste boucle ouverte plusieurs minutes)',
      'Performances normales une fois moteur chaud (sonde fonctionne passivement chaleur echappement)',
      'Code souvent accompagne message "Sonde O2 pas prete" valise diagnostic'
    ],
    causes: [
      'Fusible circuit rechauffage sonde O2 grille (surintensie, court-circuit) (40% des cas)',
      'Resistance chauffage sonde coupee usure normale >150 000 km (35% des cas)',
      'Cablage alimentation rechauffage coupe ou endommage (chaleur, frottement) (12% des cas)',
      'Connecteur sonde corrode empechant passage courant rechauffage (8% des cas)',
      'Relais commande rechauffage sonde defectueux (si vehicule en utilise un) (3% des cas)',
      'Masse electrique sonde mauvaise (corrosion point masse echappement) (1.5% des cas)',
      'Commande ECU rechauffage HS (transistor sortie grille dans ECU) (0.5% des cas)'
    ],
    solutions: [
      'Localiser fusible rechauffage sonde O2 (boite fusibles moteur, 15-20A typique): controler visuellement',
      'Remplacer fusible si grille (2-5 euros) puis tester: si re-grille immediatement = court-circuit cablage',
      'Mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre broches rechauffage (doit 2-14 ohms)',
      'Si resistance infinie = rechauffage sonde coupe (sonde HS, remplacer 40-120 euros + 40-100 MO)',
      'Verifier presence 12V alimentation: contact mis, voltmetre fil + rechauffage vers masse (doit 12V)',
      'Si pas 12V, tracer cablage rechercher coupure entre fusible et sonde (reparer ou remplacer faisceau)',
      'Inspecter connecteur sonde: nettoyer bornes si oxydees, remplacer si trop corrode (10-30 euros)'
    ],
    riskExplanation: "Le P0155 prolonge phase boucle ouverte apres chaque demarrage froid, causant surconsommation significative (20-30% premiers 5-10 km chaque trajet). Sur usage urbain avec multiples demarrages quotidiens, surconsommation cumulee atteint 10-15% globale. Emissions polluantes tres elevees demarrages (echec controle technique certain pays). Catalyseur banc 2 subit contrainte excessive (melange trop riche phase froide prolongee). Pas risque mecanique immediat mais impact economique environnemental fort. Intervention recommandee sous 4-8 semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre P0155 (rechauffage) et P0150 (circuit sonde)?',
        answer: 'P0150 = probleme element sensing sonde (mesure O2 gaz echappement) ou son signal vers ECU. Affecte fonction detection melange riche/pauvre. Moteur fonctionne mal chaud comme froid. P0155 = probleme circuit rechauffage sonde (resistance 12V interne). N\'affecte PAS capacite sonde mesurer O2 mais retarde seulement mise temperature. Moteur fonctionne MAL a froid (5-10 min) puis NORMAL une fois chaud. Test: si surconsommation/ralenti instable seulement a froid puis normal moteur chaud = P0155 probable. Si problemes persistent moteur chaud = P0150. P0155 permet conduite normale une fois chaud. P0150 cause problemes permanents.'
      },
      {
        question: 'Puis-je rouler avec P0155 ou dois-je reparer immediatement?',
        answer: 'Vous pouvez rouler sans danger mecanique immediat. Sonde fonctionne passivement une fois chaude par gaz echappement (sans rechauffage actif). Seul probleme: delai 5-10 min atteindre temperature vs 1-2 min avec rechauffage. Consequences: 1) Surconsommation premiers kilometres chaque trajet (20-30% phase froide). 2) Emissions elevees demarrages. 3) Ralenti instable a froid. 4) Impact economique cumule si trajets courts urbains repetes (peut atteindre 10-15% surconsommation globale). Urgence reparation: FAIBLE si trajets longs autoroutiers (moteur chauffe vite anyway). MODEREE si usage urbain court repete (surconsommation cumulee significative). Delai raisonnable: 4-8 semaines. Avant controle technique: reparer absolument.'
      },
      {
        question: 'Le fusible rechauffage qui grille repete indique-t-il un court-circuit?',
        answer: 'OUI probablement. Fusible grillant immediatement apres remplacement = court-circuit franc quelque part circuit rechauffage. Causes: 1) Cablage rechauffage frotte contre masse (echappement chaud, chassis) creant court-circuit (60% cas fusible repete). 2) Resistance rechauffage sonde interne court-circuitee (court-circuit interne sonde) (30% cas). 3) Connecteur sonde broches touchant masse (corrosion, deformation) (10% cas). Diagnostic: debrancher connecteur sonde, remplacer fusible. Si fusible tient = probleme sonde (court-circuit interne, remplacer sonde). Si fusible grille quand meme = court-circuit cablage entre fusible et connecteur (tracer fil + rechauffage, rechercher isolant endommage frottant masse). NE PAS mettre fusible plus gros (risque incendie cablage).'
      },
      {
        question: 'Combien consomme le rechauffage de la sonde O2 en courant?',
        answer: 'Rechauffage sonde O2 typique: 12V, resistance 4-12 ohms. Courant = V/R = 12V / 8 ohms (moyen) = 1.5 ampere. Puissance = V×I = 12×1.5 = 18 watts. Rechauffage fonctionne environ 60-120 secondes apres demarrage froid jusqu\'a sonde atteint 300C, puis ECU coupe rechauffage (chaleur echappement suffit maintenir temperature). Consommation electrique totale: 1.5A × 90 sec = 0.0375 Ah (negligeable batterie 50-70 Ah). Impact alternateur minimal. Donc rechauffage pas probleme consommation electrique vehicule. Fusible 15-20A suffit largement (marge securite). Si fusible grille, c\'est court-circuit anormal (3-5A+ tirees), pas consommation normale rechauffage.'
      },
      {
        question: 'Dois-je remplacer la sonde entiere ou seulement reparer le rechauffage?',
        answer: 'Rechauffage resistance INTEGREE sonde O2, impossible remplacer separement. Si resistance rechauffage coupee (mesure infinie ohmmetre), sonde entiere doit etre remplacee. Seules reparations possibles P0155 SANS remplacer sonde: 1) Fusible grille (remplacer fusible 2-5 euros). 2) Cablage coupe entre fusible et sonde (reparer/remplacer section cablage 20-80 euros). 3) Connecteur corrode (nettoyer ou remplacer connecteur 10-30 euros). Si tests montrent resistance rechauffage sonde infinie ou court-circuitee, remplacement sonde complete inevitable (40-120 euros piece + 40-100 MO). Aucune possibilite reparer rechauffage sonde en place (element scelle ceramique). Budget prevoir: tests diagnostic gratuit-20 euros. Si sonde HS: 80-220 euros total garage.'
      }
    ],
    relatedCodes: ['P0135', 'P0150', 'P0154', 'P0141', 'P0161']
  },

  P0156: {
    code: 'P0156',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0156 signale dysfonctionnement circuit sonde oxygene aval banc 2 (post-catalyseur). Contrairement sonde amont qui regule activement melange air-carburant, sonde aval sert UNIQUEMENT a surveiller efficacite catalyseur. Elle ne participe PAS gestion moteur. Le P0156 indique probleme electrique circuit sonde aval: connecteur corrode, cablage endommage, fusible grille, ou sonde elle-meme defaillante. Impact vehicule: quasi NUL sur fonctionnement moteur, consommation, performances. Seule consequence: impossibilite detecter panne catalyseur future (code P0430 n'apparaitrait jamais si catalyseur tombe en panne). Severite MINEURE car aucun effet immediat conduite.",
    symptoms: [
      'Voyant moteur allume en permanence (seul symptome visible)',
      'Aucun impact performances moteur (fonctionne parfaitement normal)',
      'Aucune surconsommation carburant (consommation identique)',
      'Aucun ralenti instable (ralenti parfait)',
      'Aucune hesitation acceleration (conduite normale)',
      'Impossible detecter panne catalyseur banc 2 si elle survient ulterieurement',
      'Donnees temps reel sonde aval banc 2 absentes ou figees valise diagnostic'
    ],
    causes: [
      'Connecteur electrique sonde aval corrode ou debranche (35% des cas)',
      'Fusible circuit sonde O2 grille coupant alimentation rechauffage (25% des cas)',
      'Sonde lambda aval usee ne generant plus signal (kilometrage >180 000 km) (20% cas)',
      'Cablage sonde endommage par chaleur echappement ou frottement (12% des cas)',
      'Fil signal ou rechauffage coupe (circuit ouvert) (5% des cas)',
      'Masse electrique sonde defectueuse (corrosion point masse) (2% des cas)',
      'Probleme ECU lecture sonde aval (rare, <1% des cas)'
    ],
    solutions: [
      'Valise diagnostic: verifier presence signal sonde aval banc 2 (doit lire tension stable 0.6-0.8V)',
      'Inspecter visuellement connecteur sonde aval: nettoyer contacts si oxydes (5-10 euros nettoyant)',
      'Verifier fusible sonde O2: localiser boite fusibles, controler continuite (remplacer si grille 2-5 euros)',
      'Mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre broches (doit 2-14 ohms)',
      'Controler presence 12V alimentation rechauffage contact mis (voltmetre fil + vers masse)',
      'Tester continuite cablage entre sonde et ECU si fusible OK et 12V present',
      'Remplacer sonde aval banc 2 si tests confirment sonde HS (35-100 euros piece + 30-80 MO)'
    ],
    riskExplanation: "Le P0156 n'affecte absolument pas fonctionnement moteur car sonde aval ne sert qu'a monitoring catalyseur, pas regulation melange. Zero impact mecanique, zero surconsommation, zero perte performances. Seul inconvenient: si catalyseur banc 2 tombe en panne dans futur, ECU ne pourra le detecter (code P0430 n'apparaitra pas) et vous roulerez avec catalyseur mort sans le savoir, polluant excessivement. Bien que non urgent mecaniquement, reparation recommandee sous 2-3 mois ou avant controle technique si requis reglementation.",
    faq: [
      {
        question: 'Puis-je rouler indefiniment avec P0156 sans probleme?',
        answer: 'OUI techniquement possible sans consequence mecanique immediate. Sonde aval banc 2 ne participe pas gestion moteur donc son absence aucun impact fonctionnement, consommation, performances. Vehicule roule parfaitement normal. Seuls problemes: 1) Voyant moteur allume permanent (cache futurs codes erreur, gene psychologique). 2) Impossibilite detecter panne catalyseur banc 2 si elle survient (vous roulerez catalyseur mort sans savoir, pollution excessive illegale). 3) Refus controle technique pays reglementation stricte (France, Allemagne exigent toutes sondes operationnelles). Si pas CT imminent et voyant ne derange pas, peut reporter plusieurs mois sans consequence. Mais reparation abordable (65-180 euros) donc autant faire pour tranquillite.'
      },
      {
        question: 'Quelle difference entre sonde amont (P0150) et sonde aval (P0156) banc 2?',
        answer: 'Sonde AMONT banc 2 (P0150) = CRITIQUE, regule melange air-carburant temps reel. Sans elle: surconsommation 10-20%, ralenti instable, emissions elevees, performances degradees. Reparation URGENTE. Sonde AVAL banc 2 (P0156) = MONITORING seul, surveille efficacite catalyseur. Sans elle: ZERO impact moteur, tout fonctionne normal. Reparation NON urgente. Position: sonde amont = 15-30 cm apres collecteur echappement AVANT catalyseur. Sonde aval = apres catalyseur (50-80 cm collecteur). Prix: amont 40-120 euros, aval 35-100 euros (moins cher, conditions moins severes). Priorite absolue: toujours reparer sonde amont avant sonde aval si budget limite.'
      },
      {
        question: 'Le fusible sonde O2 est-il commun aux 4 sondes ou separe?',
        answer: 'Variable selon vehicule. Configurations communes: 1) Fusible UNIQUE 20-25A pour toutes sondes O2 (4 sondes: amont+aval banc 1+2). Si grille, toutes sondes HS simultane (codes P0130+P0136+P0150+P0156 ensemble). 2) Fusible PAR BANC: 1 fusible 15A banc 1 (P0130+P0136), 1 fusible banc 2 (P0150+P0156). 3) Fusible PAR SONDE: 4 fusibles 10A separes (rare, vehicules haut gamme). Consulter schema electrique manuel vehicule pour identifier. Test rapide: si SEUL P0156 present = fusible probablement separe ou sonde HS. Si P0150+P0156 simultanes = fusible commun banc 2 probable. Si P0130+P0136+P0150+P0156 tous ensemble = fusible global toutes sondes grille. Verifier fusible AVANT acheter sonde (5 min gratuit vs 65-180 euros sonde inutile).'
      },
      {
        question: 'Comment tester si la sonde aval banc 2 est vraiment morte?',
        answer: 'Tests systematiques avec valise OBD + multimetre: 1) Donnees temps reel: observer tension sonde aval banc 2 moteur chaud ralenti. Doit afficher tension stable 0.6-0.8V (sonde aval oscille peu car gaz post-catalyseur stables). Si tension figee 0.45V ou absente = sonde morte probable. 2) Test richesse: provoquer melange riche temporaire (acceleration plein gaz). Tension doit monter legerement 0.75-0.85V. Si reste figee = sonde morte. 3) Fusible: verifier visuellement (filament coupe = grille). 4) Rechauffage: mesurer resistance broches rechauffage (2-14 ohms normal, infini = coupe). 5) Alimentation: mesurer 12V contact mis sur fil + rechauffage. Si fusible OK, 12V present, resistance OK mais tension signal figee = element sensing mort, remplacer sonde inevitable.'
      },
      {
        question: 'Combien coute le remplacement de la sonde aval banc 2?',
        answer: 'Sonde aval banc 2: 35-100 euros piece (moins cher que amont car conditions moins severes). Main oeuvre: 30-80 euros (accessibilite variable banc 2). Total garage: 65-180 euros. DIY: 35-100 euros piece seulement. Si juste fusible: 2-5 euros. Si connecteur corrode: nettoyage 5-10 euros gratuit DIY. Budget previsionnel moyen garage: 90-150 euros. Accessibilite banc 2 variable: facile moteurs V8 longitudinal RWD (DIY possible), difficile V6 transversal FWD (banc 2 arriere moteur, acces bloque). Outil special: cle sonde lambda 22mm (15-25 euros reutilisable). Economie DIY vs garage: 30-80 euros. Si acces difficile ou inexperience mecanique, garage recommande (eviter casser sonde bloquee rouille, arrondir ecrous, endommager filetage echappement).'
      }
    ],
    relatedCodes: ['P0136', 'P0150', 'P0157', 'P0158', 'P0430']
  },

  P0157: {
    code: 'P0157',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0157 indique que tension signal sonde oxygene aval banc 2 reste anormalement basse (inferieure 0.4V en permanence). Rappel: sonde aval sert uniquement monitoring catalyseur, pas regulation melange. En fonctionnement normal avec catalyseur sain, sonde aval doit lire tension relativement stable 0.6-0.8V (gaz post-catalyseur equilibres). Le P0157 signale tension perpetuellement basse <0.4V, indiquant soit court-circuit masse fil signal, soit sonde defectueuse, soit (rare) catalyseur surperformant creant gaz extremement pauvres. Impact vehicule: NUL sur fonctionnement moteur. Severite mineure car pas effet conduite.",
    symptoms: [
      'Voyant moteur allume (unique symptome perceptible)',
      'Fonctionnement moteur totalement normal (aucun changement)',
      'Consommation carburant identique (pas surconsommation)',
      'Performances inchangees (acceleration normale)',
      'Ralenti stable parfait (aucune instabilite)',
      'Emissions reelles probablement normales (sonde aval pas regulation)',
      'Donnees valise: tension sonde aval banc 2 figee <0.4V'
    ],
    causes: [
      'Court-circuit masse du fil signal sonde aval (frotte chassis/echappement) (40% des cas)',
      'Sonde lambda aval element sensing defaillant ne generant plus tension adequate (30% cas)',
      'Connecteur sonde infiltre eau creant court-circuit partiel (15% des cas)',
      'Cablage signal endommage expose creat fuite courant vers masse (10% des cas)',
      'Sonde contaminee par silicone/additifs donnant lectures basses (3% des cas)',
      'Fuite echappement massive entre catalyseur et sonde (apport air fausse lecture) (1.5% cas)',
      'Probleme masse electrique ECU faussant reference tension (0.5% des cas)'
    ],
    solutions: [
      'Valise diagnostic temps reel: observer tension sonde aval banc 2 (si figee 0.1-0.3V = anormal)',
      'Inspecter fil signal sonde: rechercher frottement contre echappement chaud ou chassis (isolant fondu)',
      'Tester continuite fil signal: debrancher sonde, mesurer resistance signal vers ECU (doit <5 ohms)',
      'Verifier absence court-circuit masse: mesurer resistance fil signal vers masse vehicule (doit >10K ohms)',
      'Provoquer melange riche temporaire (accel WOT): si tension monte legerement, sonde OK (probleme cablage)',
      'Si tension reste basse malgre test, remplacer sonde aval banc 2 (35-100 euros + 30-80 MO)',
      'Inspecter connecteur: nettoyer contacts si humidite/corrosion (secher, spray contact 5-10 euros)'
    ],
    riskExplanation: "Le P0157 n'a AUCUN impact fonctionnement moteur car sonde aval ne regule rien. Moteur fonctionne parfaitement avec melange correct gere par sonde amont. Zero surconsommation, zero probleme conduite. Seul inconvenient: monitoring efficacite catalyseur banc 2 impossible. Si catalyseur defaille ulterieurement, vous ne le saurez pas (code P0430 n'apparaitra jamais). Consequence: pollution excessive non detectee. Pas urgence mecanique mais reparation recommandee sous 2-3 mois ou avant controle technique.",
    faq: [
      {
        question: 'Comment differencier P0157 (sonde aval signal bas) de P0151 (sonde amont signal bas)?',
        answer: 'P0151 (amont signal bas) = SERIEUX, affecte regulation melange, cause surconsommation 10-15%, ralenti instable, performances degradees. Reparation urgente 2-4 semaines. P0157 (aval signal bas) = MINEUR, aucun impact moteur, tout fonctionne normal, pas surconsommation, pas ralenti instable. Reparation non urgente (2-3 mois OK). Position physique: amont = 15-30 cm collecteur AVANT catalyseur (environnement severe 700C, sonde critique). Aval = APRES catalyseur 50-80 cm collecteur (environnement doux 400C, sonde monitoring seul). Symptomes: P0151 vous le sentez (conduite affectee). P0157 vous ne sentez rien (seul voyant allume). Cout similaire reparation (65-180 euros) mais urgence tres differente.'
      },
      {
        question: 'Un court-circuit du fil signal peut-il se reparer ou faut-il changer le faisceau?',
        answer: 'Court-circuit fil signal PEUT se reparer localement si zone endommagee accessible. Procedure: 1) Localiser point court-circuit: inspecter visuellement cablage sonde, rechercher isolant fondu/frotte contre echappement chaud ou chassis. 2) Si trouve (souvent 20-40 cm sonde ou passage sangle echappement), couper section endommagee. 3) Epissurer avec fil equivalent (0.5-0.75mm2 blinde si possible), gaine thermoretractable isoler, eloigner echappement. 4) Fixer proprement colliers eviter frottement futur. Cout DIY: 5-15 euros materiel. Garage: 30-80 euros MO. Remplacement faisceau complet (si court-circuit inaccessible ou multiples points): 80-200 euros faisceau + 60-150 euros MO = 140-350 euros. Donc reparation locale economique si accessible. Si inaccessible ou doute, remplacer sonde directement souvent plus simple (sonde 35-100 euros vs faisceau 140-350 euros).'
      },
      {
        question: 'La sonde aval dure-t-elle plus longtemps que la sonde amont?',
        answer: 'OUI significativement plus longtemps. Sonde amont banc 2: duree vie 120 000-180 000 km (conditions severes: 600-800C, gaz agressifs imbrules). Sonde aval banc 2: duree vie 150 000-250 000 km (conditions douces: 400-500C, gaz propres post-catalyseur). Donc sonde aval dure 25-40% plus longtemps. Raison: catalyseur filtre particules agressives, refroidit gaz, element ceramique sonde aval subit moins stress thermique chimique. Si P0157 apparait <120 000 km, cause probablement PAS usure sonde mais probleme externe (court-circuit cablage, connecteur corrode, contamination). Au-dela 180 000 km, usure sonde devient probable. Priorite remplacement budget limite: toujours sonde AMONT avant sonde AVAL (amont critique fonctionnement, aval monitoring seul).'
      },
      {
        question: 'Dois-je reparer P0157 avant le controle technique?',
        answer: 'DEPEND pays reglementation. France: controle technique 2024 verifie codes erreur emission (OBD). P0157 = code emission (sonde O2 surveillance antipollution). Voyant moteur allume = REFUS controle immediat. Donc OUI reparer obligatoire avant CT France. Allemagne: meme reglementation stricte OBD, P0157 = echec. Belgique/Suisse: idem verification OBD complete. Pays moins stricts (certains US states): controle emission visuel echappement seulement, pas lecture OBD = P0157 peut passer. Verifier reglementation locale specifique. Si CT imminent pays strict: reparer avant (cout reparation 65-180 euros vs contre-visite 20-40 euros + temps perdu). Si pas CT avant 6-12 mois: peut attendre si budget serre (aucune urgence mecanique).'
      },
      {
        question: 'Quel est le cout minimum pour resoudre P0157?',
        answer: 'Cout MINIMUM absolu: 0-15 euros si cause simple. Scenarios economiques: 1) Court-circuit cablage localise accessible = reparation DIY gratuit (gaine thermoretractable 5 euros, fil 3 euros). 2) Connecteur oxyde = nettoyage DIY gratuit (spray contact 8 euros). 3) Faux contact = resserrer connexion gratuit. 4) Masse defectueuse = nettoyer point masse gratuit. Si vraiment sonde HS: sonde universelle low-cost 35-50 euros + DIY installation gratuit = 35-50 euros total. Garage economique: diagnostic 30 euros + sonde aftermarket 45 euros + MO 40 euros = 115 euros. Garage premium: diagnostic 60 euros + sonde OEM 85 euros + MO 70 euros = 215 euros. Strategie budget minimum: 1) Tester fusible (gratuit). 2) Nettoyer connecteur (8 euros). 3) Verifier cablage court-circuit (gratuit). 4) Si tout OK, remplacer sonde universelle DIY (35-50 euros). Total max budget serre: 35-60 euros.'
      }
    ],
    relatedCodes: ['P0137', 'P0151', 'P0156', 'P0158', 'P0430']
  },

  P0158: {
    code: 'P0158',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0158 signale que tension signal sonde oxygene aval banc 2 reste anormalement elevee (superieure 0.9V en permanence). Sonde aval post-catalyseur surveille uniquement efficacite catalyseur, ne participe PAS regulation melange moteur. En fonctionnement normal, sonde aval lit tension stable 0.6-0.8V (gaz equilibres apres catalyse). Le P0158 indique tension bloquee >0.9V perpetuellement, signalant soit court-circuit fil signal vers 12V, soit sonde defectueuse lisant toujours riche, soit (rare) catalyseur defaillant laissant passer imbrules excessifs. Impact vehicule: AUCUN sur fonctionnement, consommation, performances. Severite mineure.",
    symptoms: [
      'Voyant moteur allume en permanence (seul symptome visible)',
      'Aucun changement fonctionnement moteur (marche parfait)',
      'Consommation carburant normale inchangee',
      'Performances normales (acceleration identique)',
      'Ralenti stable (aucune irregularite)',
      'Conduite totalement normale (imperceptible pour conducteur)',
      'Valise diagnostic: tension sonde aval banc 2 figee >0.9V'
    ],
    causes: [
      'Court-circuit fil signal sonde vers fil 12V (frottement cablage) (35% des cas)',
      'Sonde lambda aval defectueuse lisant perpetuellement signal riche (30% des cas)',
      'Connecteur sonde corrode creant resistance faussant lecture haute (15% des cas)',
      'Catalyseur banc 2 reellement defaillant (laisse passer imbrules, lecture haute legitime) (10% cas)',
      'Fuite injecteur banc 2 creant melange reel riche (sonde lit correctement mais P0175 absent) (5% cas)',
      'Cablage endommage exposition chaleur excessive (isolation fondue) (4% des cas)',
      'Probleme reference tension ECU (rare, <1% des cas)'
    ],
    solutions: [
      'Valise temps reel: observer tension sonde aval banc 2 (si bloquee 0.9-1.0V permanent = anormal)',
      'Debrancher connecteur sonde moteur tournant: si tension chute immediatement = sonde/cablage HS',
      'Verifier resistance fil signal vers 12V: debrancher sonde, mesurer entre signal et batterie+ (>10K ohms)',
      'Inspecter cablage sonde: rechercher frottement contre faisceaux 12V pouvant creer court-circuit',
      'Provoquer melange pauvre (acceleration franche): si tension reste haute = sonde/cablage defectueux',
      'Comparer sonde aval banc 1 (P0138): si aussi haute = probleme systeme general (pression carburant?)',
      'Remplacer sonde aval banc 2 si tests confirment defaillance (35-100 euros + 30-80 MO)'
    ],
    riskExplanation: "Le P0158 n'impacte absolument PAS fonctionnement moteur car sonde aval ne regule pas melange, seulement monitoring catalyseur. Zero effet conduite, consommation, performances. Moteur fonctionne parfait avec regulation sonde amont. Seul inconvenient: impossibilite surveiller sante catalyseur banc 2. Si catalyseur defaille reellement (cause 10% P0158), vous ne detecterez pas degradation progressive. Pas urgence mecanique mais diagnostic recommande sous 2-3 mois determiner si vraie panne catalyseur ou simple sonde HS.",
    faq: [
      {
        question: 'Comment savoir si P0158 vient de la sonde ou d\'un catalyseur vraiment defaillant?',
        answer: 'Test decisif differentier sonde HS vs catalyseur HS: 1) Comparer sondes amont/aval banc 2 valise temps reel. Sonde amont doit osciller 0.1-0.9V rapidement. Sonde aval doit rester stable 0.6-0.8V. Si amont oscille normal MAIS aval bloquee haute >0.9V = catalyseur laisse passer imbrules (vraie panne catalyseur probable). Si amont lit anormal aussi = probleme systeme injection (pas catalyseur). 2) Test acceleration: accelerer franchement WOT. Si sonde aval descend legerement = sonde fonctionne (cablage peut-etre HS). Si reste bloquee haute = sonde morte. 3) Si doute persiste: test gaz echappement emissions HC CO. HC>100 ppm CO>0.5% = catalyseur defaillant confirme. HC<50 ppm CO<0.3% = catalyseur OK, sonde HS. Remplacer sonde d\'abord (35-100 euros) avant condamner catalyseur (400-1500 euros).'
      },
      {
        question: 'Le P0158 peut-il indiquer un melange trop riche reel sur le banc 2?',
        answer: 'Possible mais RARE car sonde aval lit APRES catalyseur. Si melange banc 2 vraiment trop riche, codes attendus: P0152 (sonde amont banc 2 signal haut) + P0175 (melange riche banc 2) + P0158 (sonde aval banc 2 signal haut) SIMULTANEMENT. Si SEUL P0158 present SANS P0152/P0175 = probleme localise sonde aval ou cablage, PAS melange riche reel. Test confirmation: observer sonde amont banc 2 valise temps reel. Si oscille normalement 0.1-0.9V = melange correct, P0158 = sonde aval HS. Si amont aussi bloquee haute = melange reel riche (chercher cause: injecteur fuyant, pression carburant excessive, MAF defectueux). Donc P0158 isole seul = 95% sonde/cablage aval HS. P0158 + autres codes banc 2 = investiguer systeme injection.'
      },
      {
        question: 'Puis-je simplement effacer le code P0158 sans reparer?',
        answer: 'Code peut etre efface mais reviendra systematiquement si cause persiste. Delai reapparition: 1-50 km selon severite (court-circuit franc = 1-5 km, sonde limite = 20-50 km). Effacer code NE repare rien, masque seulement symptome temporairement. Scenarios: 1) Code intermittent (faux contact connecteur) = peut disparaitre 100-500 km puis revenir. Nettoyer connecteur peut aider. 2) Code permanent (sonde HS, court-circuit) = revient sous 10 km garanti. Effacement inutile. 3) Avant controle technique: effacer code veille CT inutile, ECU doit completer "readiness monitors" (20-100 km conduite), code reapparait avant. CT lira code meme efface recent. Solution: reparer cause racine (65-180 euros) plutot que effacer repetitivement (economie temps nerfs argent long terme). Effacement OK seulement apres reparation pour confirmer correction.'
      },
      {
        question: 'La sonde aval banc 2 est-elle identique a la sonde aval banc 1?',
        answer: 'Souvent OUI pieces identiques interchangeables mais PAS toujours. Depends vehicule: 1) Moteurs V symetriques (V8 classique): sondes aval banc 1 et 2 generalement identiques (meme reference piece, meme connecteur, meme longueur cable). 2) Moteurs V asymetriques ou transversaux: sondes peuvent differer longueur cable (banc 2 arriere moteur = cable plus long). Reference piece differente mais specs electriques identiques. 3) Certains vehicules: une sonde aval universelle 4 fils, autre sonde specifique 5 fils (titane vs zircone). Avant commander: verifier reference OEM banc 2 specifique ou comparer physiquement si possible. Sondes universelles aftermarket souvent compatibles deux bancs (longueur cable ajustable). Cout: identique 35-100 euros que banc 1 ou 2. Si deja remplace sonde aval banc 1 recemment, noter reference utilisee (probablement compatible banc 2).'
      },
      {
        question: 'Combien de temps puis-je rouler avec P0158 avant dommages?',
        answer: 'Indefiniment sans AUCUN dommage mecanique. P0158 = sonde aval HS, aucun role regulation moteur. Vehicule fonctionne parfait sans elle des annees. Pas surconsommation, pas usure prematuree, pas casse moteur. Seule limite: 1) Controle technique (echec si requis par reglementation pays). 2) Masquage futurs codes (voyant deja allume cache nouveaux problemes). 3) Impossibilite detecter degradation catalyseur banc 2 (rouleriez catalyseur mort sans savoir = pollution illegale). Donc: pas URGENCE reparer mais RECOMMANDE reparer sous 2-3 mois pour: 1) Retrouver surveillance catalyseur fonctionnelle. 2) Eteindre voyant liberer diagnostic futurs problemes. 3) Passer controle technique. 4) Tranquillite esprit. Budget 65-180 euros reparation vs economie nulle reporter indefiniment (aucun gain attendre). Autant reparer rapidement.'
      }
    ],
    relatedCodes: ['P0138', 'P0152', 'P0156', 'P0157', 'P0430']
  },

  P0160: {
    code: 'P0160',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0160 signale absence d'activite sonde oxygene aval banc 2 (post-catalyseur). Contrairement sonde amont qui oscille rapidement 0.1-0.9V pour reguler melange, sonde aval doit afficher tension relativement stable 0.6-0.8V prouvant catalyseur convertit correctement. Le P0160 indique sonde aval reste figee valeur fixe (typiquement 0.45V tension reference) sans variation, meme durant changements regime moteur. Cela signale sonde morte: element ceramique fissure, electrodes usees, fusible grille, ou cablage coupe. Impact vehicule: NUL sur fonctionnement car sonde aval sert uniquement monitoring catalyseur, pas regulation. Severite mineure.",
    symptoms: [
      'Voyant moteur allume permanent (unique symptome perceptible)',
      'Fonctionnement moteur totalement normal (aucune difference)',
      'Consommation carburant identique (pas augmentation)',
      'Performances inchangees (acceleration normale)',
      'Ralenti parfaitement stable (aucune instabilite)',
      'Aucun symptome conduite (imperceptible pour conducteur)',
      'Valise diagnostic: tension sonde aval banc 2 figee 0.4-0.5V immobile'
    ],
    causes: [
      'Sonde lambda aval morte usure naturelle (kilometrage >180 000 km) (50% des cas)',
      'Fusible circuit sonde O2 grille (sonde ne chauffe jamais temperature fonctionnement) (25% cas)',
      'Fil alimentation rechauffage coupe (circuit ouvert, pas courant) (12% des cas)',
      'Connecteur electrique debranche ou corrode severe (pas signal vers ECU) (8% des cas)',
      'Contamination extreme sonde par silicone/plomb (element isole inactive) (3% des cas)',
      'Court-circuit interne sonde (element sensing court-circuite, figee 0.45V) (1.5% cas)',
      'Probleme masse electrique ou ECU (rare, <0.5% des cas)'
    ],
    solutions: [
      'Valise temps reel: observer tension sonde aval banc 2 moteur chaud (figee 0.4-0.5V = morte)',
      'Provoquer variations melange (accel puis decel): si tension bouge zero = sonde morte confirmee',
      'Verifier fusible sonde O2: localiser boite fusibles (15-20A typique), tester continuite (2-5 euros)',
      'Mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre broches (doit 2-14 ohms)',
      'Controler presence 12V alimentation rechauffage contact mis (voltmetre fil + vers masse)',
      'Inspecter connecteur: nettoyer oxydation ou remplacer si corrode (10-30 euros)',
      'Remplacer sonde aval banc 2 si morte (solution finale) (35-100 euros piece + 30-80 MO)'
    ],
    riskExplanation: "Le P0160 n'a AUCUN impact fonctionnement moteur car sonde aval ne participe pas regulation melange, uniquement surveillance catalyseur. Zero surconsommation, zero probleme conduite, zero usure prematuree. Moteur fonctionne parfait indefiniment avec sonde aval morte. Seul inconvenient: impossibilite detecter defaillance catalyseur banc 2 si elle survient (code P0430 n'apparaitrait jamais). Consequence: pollution excessive non detectee illegale. Pas urgence mecanique mais reparation recommandee sous 2-3 mois ou avant controle technique.",
    faq: [
      {
        question: 'Quelle difference entre P0160 (sonde aval inactive) et P0154 (sonde amont inactive) banc 2?',
        answer: 'P0154 (amont inactive) = SERIEUX, affecte regulation melange, surconsommation 10-20%, ralenti instable, emissions elevees. Reparation URGENTE 4-8 semaines. P0160 (aval inactive) = MINEUR, aucun impact moteur, tout fonctionne parfait, zero surconsommation. Reparation NON urgente (2-3 mois OK). Role: amont = regule melange temps reel (critique). Aval = surveille catalyseur (monitoring seul). Position: amont 15-30 cm collecteur AVANT catalyseur. Aval APRES catalyseur 50-80 cm collecteur. Symptomes conducteur: P0154 ressenti (conduite affectee). P0160 imperceptible (seul voyant). Cout reparation similaire (65-180 euros) mais urgence tres differente. Priorite absolue budget limite: toujours reparer amont AVANT aval.'
      },
      {
        question: 'Le fusible qui alimente la sonde aval est-il le meme que la sonde amont?',
        answer: 'DEPENDS configuration vehicule. Trois scenarios: 1) Fusible UNIQUE pour toutes sondes O2 (4 sondes): si grille, P0130+P0134+P0150+P0154+P0136+P0140+P0156+P0160 tous simultanement. Rare mais existe. 2) Fusible par BANC (plus courant): banc 2 = 1 fusible pour amont+aval banc 2. Si grille, P0150+P0154+P0156+P0160 ensemble. 3) Fusible par TYPE: 1 fusible sondes amont (banc 1+2), 1 fusible sondes aval (banc 1+2). Si fusible aval grille, P0136+P0140+P0156+P0160 simultanement. Test identification: quels codes presents? P0160 SEUL = soit sonde morte soit fusible dedié aval seule. P0156+P0160 ensemble = fusible commun aval probable ou fusible banc 2. Consulter schema electrique manuel verifier. Verifier fusible systematiquement AVANT acheter sonde (5 min gratuit vs 65-180 euros reparation inutile).'
      },
      {
        question: 'Comment verifier si c\'est le fusible, le cablage ou la sonde qui est en cause?',
        answer: 'Diagnostic systematique 15 min gratuit: ETAPE 1 Fusible: localiser fusible sonde O2 (manuel vehicule, boite fusibles moteur, 15-20A). Inspecter visuellement filament. Si coupe = remplacer (2-5 euros), probleme resolu 25% cas. ETAPE 2 Alimentation: fusible OK, mesurer tension fil + rechauffage sonde (contact mis, voltmetre vers masse). Doit 12V. Si zero = cablage coupe entre fusible et sonde (reparer 20-80 euros). ETAPE 3 Rechauffage sonde: debrancher connecteur, mesurer resistance broches rechauffage (ohmmetre). Doit 2-14 ohms. Si infini = rechauffage sonde coupe, sonde HS (remplacer 35-100 euros). ETAPE 4 Element sensing: si rechauffage OK et 12V present mais tension signal figee 0.45V = element sensing mort, sonde HS. Donc: fusible (25%, 2-5 euros), cablage (15%, 20-80 euros), sonde (60%, 65-180 euros garage).'
      },
      {
        question: 'Puis-je rouler plusieurs annees avec P0160 sans consequences?',
        answer: 'OUI absolument SANS consequence mecanique. P0160 = sonde aval morte, zero role regulation moteur. Vehicule fonctionne identique avec ou sans sonde aval. Pas surconsommation, pas usure, pas casse. Limitations pratiques: 1) Controle technique: echec pays verification OBD (France, Allemagne, etc.). Obligation reparer avant CT. 2) Voyant moteur allume permanent: cache futurs codes erreur (impossibilite diagnostic nouveaux problemes tant que voyant deja allume). 3) Surveillance catalyseur impossible: si catalyseur banc 2 defaille, vous ne detecterez pas (code P0430 jamais declenche). Roulerez catalyseur mort polluant excessif illegalement sans savoir. 4) Tranquillite esprit: voyant permanent psychologiquement penible. Donc techniquement possible rouler indefiniment mais pragmatiquement recommande reparer sous 2-3 mois (cout modeste 65-180 euros, retrouve monitoring complet vehicule).'
      },
      {
        question: 'Quel type de sonde aval acheter: universelle ou OEM constructeur?',
        answer: 'Trois options qualite/prix: 1) Sonde OEM constructeur (70-120 euros): qualite maximale, duree vie 180 000-250 000 km, connecteur plug-and-play exact, garantie compatibilite. Recommande si vehicule recent <8 ans ou budget permet. 2) Sonde aftermarket marque Bosch/Denso/NTK (45-80 euros): qualite bonne, duree vie 150 000-200 000 km, connecteur souvent compatible, bon compromis. Recommande usage general. 3) Sonde universelle generique (30-55 euros): necessite parfois epissure fils, qualite variable, duree vie 100 000-180 000 km. Economique mais risque. Conseil: sonde AVAL travaille conditions douces (vs amont), qualite moins critique. Aftermarket Bosch acceptable banc 2 aval (economie 25-40 euros vs OEM). Si budget tres serre et competence epissure fils, universelle acceptable (economie max). Si acces difficile banc 2 (V6 transversal), privilegier qualite eviter rappel garage 5 ans plus tard.'
      }
    ],
    relatedCodes: ['P0140', 'P0154', 'P0156', 'P0157', 'P0430']
  },

  P0161: {
    code: 'P0161',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0161 signale dysfonctionnement circuit rechauffage sonde oxygene aval banc 2 (post-catalyseur). Rappel: sonde aval surveille uniquement efficacite catalyseur, ne regule PAS melange moteur. Toute sonde O2 moderne incorpore resistance chauffante 12V permettant atteindre rapidement temperature fonctionnement 300-400C apres demarrage, independamment chaleur gaz echappement. Le P0161 indique circuit rechauffage non fonctionnel: fusible grille, resistance chauffage coupee, cablage endommage, ou commande ECU defaillante. Sans rechauffage, sonde aval met 10-15 minutes devenir operationnelle. Impact vehicule: quasi NUL car sonde aval ne regule rien. Severite mineure.",
    symptoms: [
      'Voyant moteur allume permanent (seul symptome visible)',
      'Aucun impact fonctionnement moteur (marche parfait)',
      'Consommation carburant normale (inchangee)',
      'Performances normales (acceleration identique)',
      'Ralenti stable (aucune irregularite)',
      'Delai prolonge monitoring catalyseur apres demarrage froid (10-15 min vs 2-3 min)',
      'Message valise parfois "Sonde O2 banc 2 sensor 2 pas prete"'
    ],
    causes: [
      'Fusible circuit rechauffage sonde O2 grille (surintensie ou court-circuit) (40% des cas)',
      'Resistance chauffage sonde coupee usure normale (kilometrage >200 000 km) (30% cas)',
      'Cablage alimentation rechauffage coupe ou endommage (12% des cas)',
      'Connecteur sonde corrode empechant passage courant rechauffage (10% des cas)',
      'Relais commande rechauffage defectueux si vehicule en utilise (5% des cas)',
      'Masse electrique sonde mauvaise (corrosion point masse echappement) (2% des cas)',
      'Commande ECU sortie rechauffage grille (transistor HS dans ECU) (1% cas)'
    ],
    solutions: [
      'Localiser fusible rechauffage sonde O2: boite fusibles moteur, 15-20A typique (controler visuellement)',
      'Remplacer fusible si grille (2-5 euros): si re-grille immediatement = court-circuit cablage',
      'Mesurer resistance rechauffage sonde: debrancher connecteur, ohmmetre broches (doit 2-14 ohms)',
      'Si resistance infinie = rechauffage coupe, sonde HS (remplacer 35-100 euros piece + 30-80 MO)',
      'Verifier presence 12V alimentation rechauffage: contact mis, voltmetre fil + vers masse',
      'Si pas 12V, tracer cablage rechercher coupure entre fusible et sonde (reparer faisceau)',
      'Inspecter connecteur: nettoyer bornes oxydees, remplacer si corrode (10-30 euros)'
    ],
    riskExplanation: "Le P0161 n'a AUCUN impact fonctionnement moteur car sonde aval ne participe pas regulation melange, uniquement monitoring catalyseur. Rechauffage defaillant retarde seulement mise temperature sonde aval (10-15 min vs 2-3 min). Consequence: monitoring catalyseur retarde premiers kilometres chaque demarrage froid. Zero surconsommation, zero probleme conduite, zero usure. Pas urgence mecanique. Reparation recommandee sous 2-3 mois ou avant controle technique si requis reglementation pays.",
    faq: [
      {
        question: 'Quelle difference entre P0161 (rechauffage aval) et P0155 (rechauffage amont) banc 2?',
        answer: 'P0155 (rechauffage amont HS) = impact MODERE, retarde boucle fermee 5-10 min apres chaque demarrage, cause surconsommation 10-15% premiers kilometres (impact cumule significatif usage urbain trajets courts repetes). P0161 (rechauffage aval HS) = impact MINIMAL, retarde seulement monitoring catalyseur sans effet regulation melange. Zero surconsommation, zero probleme conduite. Role: amont = regulation melange (retard boucle fermee problematique). Aval = monitoring seul (retard sans consequence). Urgence reparation: P0155 = moderee 4-8 semaines (surconso cumulee). P0161 = faible 2-3 mois (aucun cout additionnel). Cout reparation similaire (65-180 euros) mais impact tres different. Priorite budget limite: reparer P0155 avant P0161.'
      },
      {
        question: 'Le fusible rechauffage sonde aval est-il separe de la sonde amont?',
        answer: 'DEPENDS vehicule. Configurations communes: 1) Fusible UNIQUE toutes sondes O2 (20-25A): alimente rechauffage 4 sondes (amont+aval banc 1+2). Si grille, toutes sondes perdent rechauffage simultane (codes P0135+P0141+P0155+P0161 ensemble). 2) Fusible par BANC: fusible banc 2 (15-20A) alimente amont+aval banc 2. Si grille, P0155+P0161 simultanement. 3) Fusible par POSITION (rare): fusible sondes amont (banc 1+2), fusible sondes aval (banc 1+2). Si fusible aval grille, P0141+P0161 ensemble. Test identification: regarder codes presents. P0161 SEUL = fusible dedié aval possible ou sonde HS. P0155+P0161 = fusible commun banc 2 probable. P0135+P0141+P0155+P0161 tous = fusible global toutes sondes. Consulter schema electrique manuel pour confirmer. Toujours tester fusible AVANT acheter sonde (5 min gratuit vs 65-180 euros).'
      },
      {
        question: 'Puis-je rouler indefiniment avec P0161 sans jamais reparer?',
        answer: 'OUI techniquement sans consequence mecanique. P0161 = rechauffage sonde aval HS. Sonde aval chauffe passivement par gaz echappement (atteint temperature fonctionnement 10-15 min vs 2-3 min avec rechauffage). Une fois chaude, fonctionne normal. Impact: retard monitoring catalyseur premiers kilometres apres demarrage froid uniquement. Zero effet regulation moteur (sonde aval ne regule rien). Zero surconsommation, zero usure, zero casse. Limitations: 1) Controle technique: echec si verification OBD complete (France, Allemagne = echec garanti). 2) Voyant allume permanent masque futurs codes. 3) Monitoring catalyseur retarde systematiquement (detection panne catalyseur moins reactive). Donc rouler indefiniment possible mais illogique: reparation modeste (65-180 euros), supprime voyant, restaure monitoring complet, permet CT. Economie nulle reporter indefiniment vs tranquillite faire.'
      },
      {
        question: 'Comment tester si le probleme vient du fusible, cablage ou sonde?',
        answer: 'Tests systematiques 10-15 min: ETAPE 1 Fusible: localiser fusible rechauffage O2 (manuel vehicule, 15-20A boite fusibles moteur). Inspection visuelle filament. Si coupe = remplacer (2-5 euros), tester. Si re-grille = court-circuit cablage (passer etape 2). Si tient = passer etape 3. ETAPE 2 Cablage: fusible OK, mesurer tension fil + rechauffage sonde (contact mis, voltmetre vers masse). Doit 12V. Si zero volt = cablage coupe entre fusible et sonde (tracer faisceau, reparer section endommagee 20-80 euros ou remplacer faisceau). Si 12V present = passer etape 3. ETAPE 3 Resistance sonde: debrancher connecteur sonde, mesurer resistance broches rechauffage (ohmmetre). Doit 2-14 ohms selon modele. Si infini = resistance rechauffage coupee, sonde HS (remplacer sonde complete 35-100 euros + MO). Si 2-14 ohms = resistance OK, probleme commande ECU (rare, 1%). Statistiques: fusible 40%, cablage 12%, sonde 47%, ECU 1%.'
      },
      {
        question: 'Combien coute minimum reparer P0161?',
        answer: 'Cout MINIMUM: 2-80 euros selon cause. Scenarios economiques: 1) Fusible grille = 2-5 euros fusible (solution 40% cas, DIY 5 min). 2) Connecteur oxyde = nettoyage gratuit spray contact 8 euros (solution 10% cas). 3) Cablage coupe accessible = reparation DIY 10-20 euros materiel (gaine, fil). 4) Masse corrode = nettoyer point masse gratuit. Si sonde HS inevitable (47% cas): sonde universelle low-cost 35-55 euros + installation DIY gratuit = 35-55 euros. Garage economique: diagnostic 25 euros + sonde aftermarket 50 euros + MO 35 euros = 110 euros. Garage standard: diagnostic 40 euros + sonde OEM 75 euros + MO 55 euros = 170 euros. Strategie budget minimum: 1) Tester fusible gratuit. 2) Nettoyer connecteur (8 euros). 3) Mesurer resistance rechauffage gratuit (multimetre). 4) Si sonde HS, acheter universelle + DIY (35-55 euros). Budget minimum absolu: 2-60 euros. Budget realiste garage: 110-180 euros.'
      }
    ],
    relatedCodes: ['P0141', 'P0155', 'P0156', 'P0160', 'P0135']
  },

  // Groupe ajouté: Codes injecteurs P0200-P0208 (9 codes)
  P0200: {
    code: 'P0200',
    severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' },
    introduction: "Code P0200 indique defaut circuit injecteurs GENERAL affectant ensemble systeme injection. Contrairement codes P0201-P0208 (injecteur specifique), P0200 signale probleme global: alimentation electrique injecteurs, masse commune, ECU commande injection, ou cablage faisceau principal. Symptomes severite variable selon etendue panne. Diagnostic urgent car injection compromet fonctionnement moteur.",
    symptoms: ['Voyant moteur allume', 'Ralenti instable voire calage', 'Demarrage difficile ou impossible', 'Perte puissance significative', 'Consommation anormale', 'Fumee echappement'],
    causes: ['Fusible/relais pompe injection defaillant (30%)', 'Cablage faisceau injecteurs endommage (25%)', 'Masse commune injecteurs corrodee (20%)', 'ECU sortie commande injecteurs HS (15%)', 'Connecteur rampe injection oxyde (10%)'],
    solutions: ['Verifier fusible/relais injection', 'Tester alimentation 12V rampe injecteurs', 'Controler masse commune injecteurs', 'Inspecter faisceau cablage', 'Diagnostic ECU professionnel si electronique'],
    riskExplanation: "P0200 compromet injection complete. Rouler deconseille: calage possible, ratés severes, catalyseur endommage imbrules. Diagnostic urgent sous 24-48h.",
    faq: [
      {question: 'Difference P0200 vs P0201-P0208?', answer: 'P0200 = probleme GLOBAL tous injecteurs (alimentation, ECU, masse). P0201-P0208 = injecteur SPECIFIQUE cylindre identifie. P0200 necessite diagnostic systeme complet, pas remplacement injecteur individuel.'},
      {question: 'Cout reparation P0200?', answer: 'Variable 50-600 euros: fusible 5 euros, masse 0 euros (nettoyage), cablage 50-200 euros, ECU 300-600 euros. Diagnostic pro 40-80 euros indispensable identifier cause exacte.'}
    ],
    relatedCodes: ['P0201', 'P0202', 'P0300', 'P0100']
  },

  P0201: {
    code: 'P0201',
    severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' },
    introduction: "Code P0201 signale defaut circuit injecteur cylindre 1. ECU detecte resistance anormale, court-circuit, ou commande inop érante injecteur cyl 1. Symptomes: rate allumage cylindre 1, ralenti irregulier, perte puissance. Causes: injecteur HS, cablage coupe, connecteur oxyde.",
    symptoms: ['Voyant moteur', 'Rate cylindre 1 (vibrations)', 'Ralenti instable', 'Perte puissance legere', 'Surconsommation', 'Fumee noire possible'],
    causes: ['Injecteur cyl 1 bobine coupee (40%)', 'Connecteur injecteur 1 corrode (25%)', 'Cablage commande injecteur 1 coupe (20%)', 'ECU sortie cyl 1 HS (10%)', 'Injecteur bouche mecaniquement (5%)'],
    solutions: ['Mesurer resistance injecteur cyl 1: doit 12-16 ohms', 'Tester alimentation et commande valise', 'Nettoyer connecteur injecteur', 'Permuter injecteur cyl 1 avec autre (test)', 'Remplacer injecteur si HS (25-80 euros)'],
    riskExplanation: "P0201 = cylindre 1 non alimente. Rouler possible court terme mais: vibrations, surconsommation, catalyseur risque (imbrules). Reparation sous 1-2 semaines.",
    faq: [
      {question: 'Comment identifier injecteur HS vs cablage?', answer: 'Test resistance: debrancher injecteur cyl 1, mesurer resistance. 12-16 ohms = injecteur OK, chercher cablage. Infini ou 0 ohm = injecteur HS. Permuter avec autre cylindre: si code suit injecteur = injecteur HS. Si code reste cyl 1 = cablage/ECU.'},
      {question: 'Cout reparer P0201?', answer: 'Injecteur neuf OEM: 45-120 euros. Aftermarket: 25-60 euros. MO: 30-80 euros. Nettoyage connecteur: gratuit. Cablage reparation: 20-60 euros. Total 25-200 euros selon cause.'}
    ],
    relatedCodes: ['P0200', 'P0301', 'P0202']
  },

  P0202: { code: 'P0202', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut circuit injecteur cylindre 2 - logique identique P0201 mais cylindre 2.", symptoms: ['Rate cylindre 2', 'Ralenti instable', 'Perte puissance'], causes: ['Injecteur cyl 2 HS (40%)', 'Connecteur oxyde (25%)', 'Cablage coupe (20%)'], solutions: ['Test resistance injecteur 2', 'Permuter injecteur', 'Remplacer si HS'], riskExplanation: "Meme risques P0201: vibrations, surconsommation, catalyseur menace.", faq: [{question: 'Reparation identique P0201?', answer: 'OUI procedures identiques, cout similaire 25-200 euros'}], relatedCodes: ['P0200', 'P0302', 'P0201'] },
  P0203: { code: 'P0203', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 3.", symptoms: ['Rate cyl 3', 'Ralenti irregulier'], causes: ['Injecteur 3 HS (40%)', 'Connecteur (25%)', 'Cablage (20%)'], solutions: ['Test resistance', 'Permutation', 'Remplacement'], riskExplanation: "Vibrations, surconsommation.", faq: [{question: 'Identique P0201?', answer: 'OUI'}], relatedCodes: ['P0200', 'P0303'] },
  P0204: { code: 'P0204', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 4.", symptoms: ['Rate cyl 4'], causes: ['Injecteur 4 HS (40%)'], solutions: ['Test', 'Remplacement'], riskExplanation: "Vibrations.", faq: [{question: 'Procedure?', answer: 'Identique P0201'}], relatedCodes: ['P0200', 'P0304'] },
  P0205: { code: 'P0205', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 5.", symptoms: ['Rate cyl 5'], causes: ['Injecteur 5 HS'], solutions: ['Test resistance', 'Remplacement'], riskExplanation: "Vibrations.", faq: [{question: 'Cout?', answer: '25-200 euros'}], relatedCodes: ['P0200', 'P0305'] },
  P0206: { code: 'P0206', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 6.", symptoms: ['Rate cyl 6'], causes: ['Injecteur 6 HS'], solutions: ['Test', 'Remplacement'], riskExplanation: "Vibrations.", faq: [{question: 'Procedure?', answer: 'Identique autres'}], relatedCodes: ['P0200', 'P0306'] },
  P0207: { code: 'P0207', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 7 (moteurs V8).", symptoms: ['Rate cyl 7'], causes: ['Injecteur 7 HS'], solutions: ['Test', 'Remplacement'], riskExplanation: "Vibrations.", faq: [{question: 'Moteur V8 uniquement?', answer: 'OUI V8/V10'}], relatedCodes: ['P0200', 'P0307'] },
  P0208: { code: 'P0208', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Defaut injecteur cylindre 8 (moteurs V8).", symptoms: ['Rate cyl 8'], causes: ['Injecteur 8 HS'], solutions: ['Test', 'Remplacement'], riskExplanation: "Vibrations.", faq: [{question: 'V8?', answer: 'OUI'}], relatedCodes: ['P0200', 'P0308'] },

  // Groupe: Ratés allumage P0301-P0308 (8 codes)
  P0301: { code: 'P0301', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate allumage detecte cylindre 1. ECU compte combustions ratees cyl 1 via regime vilebrequin. Causes: bougie HS, bobine defectueuse, injecteur, compression faible, soupape.", symptoms: ['Voyant moteur clignotant si rate severe', 'Vibrations ralenti', 'Perte puissance', 'Consommation elevee', 'Fumee'], causes: ['Bougie cyl 1 usee/encrassee (35%)', 'Bobine allumage cyl 1 HS (25%)', 'Injecteur cyl 1 defaillant (15%)', 'Compression faible cyl 1 (15%)', 'Soupape/segment (10%)'], solutions: ['Remplacer bougie cyl 1 (5-15 euros)', 'Tester bobine allumage cyl 1', 'Verifier compression cyl 1 (compressiometre)', 'Permuter bobine avec autre cylindre (test)', 'Controler injecteur cyl 1'], riskExplanation: "Rate allumage = imbrules vers catalyseur. Voyant CLIGNOTANT = URGENCE (catalyseur destruction rapide). Arreter conduite si clignotant. Fixe: reparer sous 1 semaine.", faq: [{question: 'Voyant clignotant vs fixe?', answer: 'CLIGNOTANT = rates SEVERES >10%, ARRETER moteur immediatement (catalyseur destruction <30 min conduite). FIXE = rates legers <5%, reparer sous 1 semaine. Ne JAMAIS ignorer clignotant.'}, {question: 'Cout P0301?', answer: 'Bougie: 5-15 euros. Bobine: 40-120 euros. Compression faible: 500-2000 euros (segments, soupapes). Diagnostic 40 euros. 80% cas: bougie ou bobine = 45-135 euros total.'}], relatedCodes: ['P0300', 'P0201', 'P0420'], repairCosts: { minimum: 15, average: 90, maximum: 600, parts: [{ name: 'Bougie d\'allumage cylindre 1', priceMin: 5, priceMax: 15 }, { name: 'Bobine d\'allumage individuelle', priceMin: 30, priceMax: 120 }, { name: 'Injecteur cylindre 1', priceMin: 60, priceMax: 200 }, { name: 'Joint de culasse (si compression faible)', priceMin: 80, priceMax: 250 }], laborTime: '30min - 1h30', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Facile' as const, savings: '60-80%', timeNeeded: '30min - 1h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Compressiometre', 'Cle a cliquet'] }, tips: ['Permuter la bobine du cylindre 1 avec un autre cylindre pour identifier si la bobine est en cause (gratuit)', 'Remplacer la bougie en premier (5-15 euros, resolution dans 35% des cas)', 'Verifier l\'ecartement de la bougie avec une jauge (souvent neglige)', 'Acheter les bougies en lot de 4 pour un meilleur prix unitaire'], warningNote: 'Si le voyant moteur clignote, ne roulez pas. Les rates d\'allumage severes detruisent le catalyseur en moins de 30 minutes de conduite. Le cout du remorquage (80-150 euros) est derisoire face au remplacement du catalyseur (400-1500 euros).' } },
  P0302: { code: 'P0302', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate allumage cylindre 2.", symptoms: ['Clignotant si severe', 'Vibrations'], causes: ['Bougie 2 (35%)', 'Bobine 2 (25%)'], solutions: ['Bougie', 'Bobine', 'Compression'], riskExplanation: "Catalyseur menace si clignotant.", faq: [{question: 'Procedure?', answer: 'Identique P0301'}], relatedCodes: ['P0300', 'P0202'], repairCosts: { minimum: 15, average: 90, maximum: 600, parts: [{ name: 'Bougie d\'allumage cylindre 2', priceMin: 5, priceMax: 15 }, { name: 'Bobine d\'allumage individuelle', priceMin: 30, priceMax: 120 }, { name: 'Injecteur cylindre 2', priceMin: 60, priceMax: 200 }], laborTime: '30min - 1h30', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Facile' as const, savings: '60-80%', timeNeeded: '30min - 1h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Cle a cliquet'] }, tips: ['Permuter la bobine du cylindre 2 avec un autre pour isoler la panne', 'Remplacer la bougie en priorite (35% des cas)', 'Verifier le connecteur electrique de la bobine (corrosion frequente)', 'Profiter du demontage pour inspecter toutes les bougies'], warningNote: 'Meme procedure que P0301. Si le voyant clignote, arretez le moteur immediatement pour proteger le catalyseur. Ne jamais ignorer un voyant clignotant.' } },
  P0303: { code: 'P0303', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 3.", symptoms: ['Vibrations'], causes: ['Bougie/bobine 3'], solutions: ['Remplacement'], riskExplanation: "Catalyseur.", faq: [{question: 'Cout?', answer: '45-135 euros'}], relatedCodes: ['P0300', 'P0203'], repairCosts: { minimum: 15, average: 90, maximum: 600, parts: [{ name: 'Bougie d\'allumage cylindre 3', priceMin: 5, priceMax: 15 }, { name: 'Bobine d\'allumage individuelle', priceMin: 30, priceMax: 120 }, { name: 'Injecteur cylindre 3', priceMin: 60, priceMax: 200 }], laborTime: '30min - 1h30', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Facile' as const, savings: '60-80%', timeNeeded: '30min - 1h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Cle a cliquet'] }, tips: ['Le cylindre 3 est souvent plus accessible que les autres sur moteur en ligne', 'Permuter la bobine avec un autre cylindre pour confirmer le diagnostic', 'Remplacer toutes les bougies en meme temps (economie sur la main d\'oeuvre)', 'Verifier l\'etat du fil de bougie si vehicule equipe de cables HT'], warningNote: 'Un rate d\'allumage persistant sur le cylindre 3 peut indiquer un probleme de compression. Si bougie et bobine neuves ne resolvent pas le probleme, faire un test de compression (50-80 euros en garage).' } },
  P0304: { code: 'P0304', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 4.", symptoms: ['Vibrations'], causes: ['Bougie/bobine'], solutions: ['Test'], riskExplanation: "Catalyseur.", faq: [{question: 'Procedure?', answer: 'P0301'}], relatedCodes: ['P0300', 'P0204'], repairCosts: { minimum: 15, average: 90, maximum: 600, parts: [{ name: 'Bougie d\'allumage cylindre 4', priceMin: 5, priceMax: 15 }, { name: 'Bobine d\'allumage individuelle', priceMin: 30, priceMax: 120 }, { name: 'Injecteur cylindre 4', priceMin: 60, priceMax: 200 }], laborTime: '30min - 1h30', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Facile' as const, savings: '60-80%', timeNeeded: '30min - 1h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Cle a cliquet'] }, tips: ['Le cylindre 4 est souvent le plus eloigne cote distribution, verifier l\'accessibilite', 'Permuter bobine et bougie avec un autre cylindre pour isoler la cause', 'Un rate sur le cylindre 4 seul est rarement du au carburant', 'Verifier le serrage du connecteur d\'injecteur (vibrations moteur peuvent le desserrer)'], warningNote: 'Sur les moteurs 4 cylindres, le cylindre 4 est souvent moins accessible. Prevoyez des rallonges pour la cle a bougie. Si le rate persiste apres changement bougie et bobine, faites un test de compression avant de remplacer l\'injecteur.' } },
  P0305: { code: 'P0305', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 5.", symptoms: ['Vibrations'], causes: ['Bougie 5'], solutions: ['Remplacement'], riskExplanation: "Catalyseur.", faq: [{question: 'V6/V8?', answer: 'V6 minimum'}], relatedCodes: ['P0300', 'P0205'], repairCosts: { minimum: 15, average: 100, maximum: 700, parts: [{ name: 'Bougie d\'allumage cylindre 5', priceMin: 5, priceMax: 20 }, { name: 'Bobine d\'allumage individuelle', priceMin: 35, priceMax: 150 }, { name: 'Injecteur cylindre 5', priceMin: 70, priceMax: 250 }], laborTime: '30min - 2h', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Moyen' as const, savings: '50-70%', timeNeeded: '1h - 2h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Rallonge de cle', 'Lampe frontale'] }, tips: ['Le cylindre 5 concerne les moteurs V6/V8, l\'acces peut etre plus difficile', 'Sur les V6, le cylindre 5 est souvent cote tablier de bord (acces limite)', 'Remplacer toutes les bougies du banc concerne en meme temps', 'Verifier les guides de bougies (tubes de puits) pour eviter les infiltrations d\'huile'], warningNote: 'Sur les moteurs V6/V8, le cylindre 5 est souvent difficile d\'acces cote cloison pare-feu. Certains modeles necessitent la depose partielle du collecteur d\'admission. Evaluez l\'accessibilite avant de tenter la reparation en DIY.' } },
  P0306: { code: 'P0306', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 6.", symptoms: ['Vibrations'], causes: ['Bougie 6'], solutions: ['Test'], riskExplanation: "Catalyseur.", faq: [{question: 'Cout?', answer: '45-135 euros'}], relatedCodes: ['P0300', 'P0206'], repairCosts: { minimum: 15, average: 100, maximum: 700, parts: [{ name: 'Bougie d\'allumage cylindre 6', priceMin: 5, priceMax: 20 }, { name: 'Bobine d\'allumage individuelle', priceMin: 35, priceMax: 150 }, { name: 'Injecteur cylindre 6', priceMin: 70, priceMax: 250 }], laborTime: '30min - 2h', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Moyen' as const, savings: '50-70%', timeNeeded: '1h - 2h', tools: ['Cle a bougie (16 ou 21mm)', 'Multimetre', 'Valise OBD2', 'Rallonge flexible', 'Lampe frontale'] }, tips: ['Sur moteur V6, le cylindre 6 est generalement le plus accessible du banc 2', 'Comparer le prix des bobines entre equipementiers (Bosch, Valeo, NGK)', 'Profiter de l\'intervention pour nettoyer les puits de bougies', 'Verifier l\'absence de traces d\'huile dans les puits de bougies (signe de joints de cache-culbuteurs uses)'], warningNote: 'Sur les moteurs V6, un rate sur le cylindre 6 peut aussi etre lie a un probleme de distribution cote banc 2. Si bougie et bobine neuves ne resolvent pas le probleme, faire verifier le calage de distribution.' } },
  P0307: { code: 'P0307', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 7 (V8).", symptoms: ['Vibrations'], causes: ['Bougie 7'], solutions: ['Remplacement'], riskExplanation: "Catalyseur.", faq: [{question: 'V8?', answer: 'OUI'}], relatedCodes: ['P0300', 'P0207'], repairCosts: { minimum: 20, average: 120, maximum: 800, parts: [{ name: 'Bougie d\'allumage cylindre 7', priceMin: 8, priceMax: 25 }, { name: 'Bobine d\'allumage individuelle V8', priceMin: 40, priceMax: 160 }, { name: 'Injecteur cylindre 7', priceMin: 80, priceMax: 280 }], laborTime: '30min - 2h', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Moyen' as const, savings: '50-70%', timeNeeded: '1h - 2h30', tools: ['Cle a bougie longue', 'Multimetre', 'Valise OBD2', 'Rallonge flexible', 'Lampe frontale'] }, tips: ['Les moteurs V8 ont des bougies plus couteuses (iridium/platine souvent requises)', 'Remplacer les 8 bougies en meme temps pour un allumage equilibre', 'Les bobines V8 sont souvent specifiques par banc, verifier la reference exacte', 'Verifier le faisceau electrique du banc 2 (exposition chaleur echappement)'], warningNote: 'Les moteurs V8 sont moins courants en France. Les pieces peuvent etre plus cheres et moins disponibles. Commander les pieces a l\'avance et verifier la compatibilite exacte avec le numero de moteur.' } },
  P0308: { code: 'P0308', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Rate cylindre 8 (V8).", symptoms: ['Vibrations'], causes: ['Bougie 8'], solutions: ['Remplacement'], riskExplanation: "Catalyseur.", faq: [{question: 'V8?', answer: 'OUI'}], relatedCodes: ['P0300', 'P0208'], repairCosts: { minimum: 20, average: 120, maximum: 800, parts: [{ name: 'Bougie d\'allumage cylindre 8', priceMin: 8, priceMax: 25 }, { name: 'Bobine d\'allumage individuelle V8', priceMin: 40, priceMax: 160 }, { name: 'Injecteur cylindre 8', priceMin: 80, priceMax: 280 }], laborTime: '30min - 2h', laborRate: '50-90 euros/h selon garage', diy: { possible: true, difficulty: 'Moyen' as const, savings: '50-70%', timeNeeded: '1h - 2h30', tools: ['Cle a bougie longue', 'Multimetre', 'Valise OBD2', 'Rallonge flexible', 'Lampe frontale'] }, tips: ['Le cylindre 8 est le dernier du banc, souvent le plus difficile d\'acces', 'Sur certains V8 americains, prevoir la depose du collecteur d\'admission', 'Les bougies iridium durent plus longtemps et sont recommandees pour les V8', 'Faire un diagnostic complet des 8 cylindres si le rate est intermittent'], warningNote: 'Le cylindre 8 est souvent le moins accessible du moteur V8. Sur certains modeles, la main d\'oeuvre peut etre significativement plus elevee. Demander un devis detaille avant intervention en garage.' } },

  // Groupe: EGR P0400-P0410 (7 codes)
  P0400: { code: 'P0400', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Debit vanne EGR insuffisant. ECU detecte recyclage gaz echappement inadequat. EGR reduit NOx en reintroduisant gaz echappement admission. P0400 = vanne bloquee, tuyaux obstrues, ou capteur position EGR HS.", symptoms: ['Voyant moteur', 'Ralenti instable', 'Detonations acceleration', 'Surconsommation legere', 'Echec controle technique (NOx eleves)'], causes: ['Vanne EGR encrassee bloquee (45%)', 'Tuyaux EGR obstrues calamine (25%)', 'Capteur position EGR defaillant (15%)', 'Fuite circuit EGR (10%)', 'Electrovanne pilotage EGR HS (5%)'], solutions: ['Nettoyer vanne EGR (30-80 euros garage ou DIY spray 15 euros)', 'Deboucher tuyaux EGR (spray/mecanique)', 'Tester capteur position EGR (resistance)', 'Verifier electrovanne pilotage', 'Remplacer vanne si bloquee irreversible (120-350 euros)'], riskExplanation: "P0400 = NOx eleves (pollution). Controle technique: echec garanti. Moteur: detonations possibles (usure). Reparation non urgente mecanique mais obligatoire CT. Delai: 1-3 mois avant CT.", faq: [{question: 'Peut-on rouler sans EGR?', answer: 'OUI techniquement moteur fonctionne. MAIS: 1) Controle technique echec (NOx hors normes). 2) Detonations possibles degradent moteur long terme. 3) ILLEGAL supprimer EGR (amende selon pays). 4) Surconsommation possible 3-8%. Reparer EGR recommande fortement.'}, {question: 'Nettoyer EGR soi-meme?', answer: 'OUI possible DIY. Procedure: 1) Localiser vanne EGR (manuel vehicule). 2) Demonter vanne (2-4 vis generalement). 3) Spray nettoyant EGR (15 euros Wurth, CRC) pulveriser clapet, laisser tremper 15-30 min. 4) Brosser calamine brosse laiton. 5) Rincer spray, secher, remonter joint neuf (5-10 euros). Temps: 1-2h. Taux succes: 60-70% si pas trop encrassee. Economie: 30-80 euros MO garage.'}], relatedCodes: ['P0401', 'P0402', 'P0403', 'P0404'] },
  P0402: { code: 'P0402', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Debit EGR EXCESSIF (oppose P0400/P0401 insuffisant). Vanne bloquee ouverte ou electrovanne HS.", symptoms: ['Ralenti tres instable', 'Calage frequents', 'Fumee noire', 'Perte puissance'], causes: ['Vanne EGR bloquee ouverte (50%)', 'Electrovanne EGR HS (30%)', 'Capteur position faux signal (15%)'], solutions: ['Verifier fermeture complete vanne EGR ralenti', 'Tester electrovanne pilotage', 'Remplacer vanne si bloquee ouverte'], riskExplanation: "P0402 = gaz echappement permanents admission. Melange pauvre, calages, impossible rouler normalement. Reparation URGENTE 1-7 jours.", faq: [{question: 'Difference P0400 vs P0402?', answer: 'P0400/P0401 = debit INSUFFISANT (vanne fermee/bloquee). P0402 = debit EXCESSIF (vanne ouverte bloquee). Symptomes opposes: P0400 = detonations. P0402 = calages. Reparation: P0400 = nettoyage souvent suffit. P0402 = remplacement vanne necessaire (bloquee ouverte).'}], relatedCodes: ['P0400', 'P0401', 'P0404'] },
  P0403: { code: 'P0403', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit electrovanne EGR defaillant (electrique, pas mecanique).", symptoms: ['Voyant moteur', 'Fonctionnement moteur normal'], causes: ['Electrovanne EGR bobine coupee (40%)', 'Connecteur electrovanne oxyde (30%)', 'Cablage commande coupe (25%)'], solutions: ['Tester resistance electrovanne (20-50 ohms typique)', 'Verifier connecteur', 'Controler cablage'], riskExplanation: "P0403 = electrique, vanne peut fonctionner mecaniquement. Impact faible court terme. CT: echec possible. Reparation sous 1-2 mois.", faq: [{question: 'P0403 urgent?', answer: 'NON. Electrovanne HS mais vanne peut rester fonctionnelle partiellement (vacuum residu). Reparation recommandee avant CT.'}], relatedCodes: ['P0400', 'P0404'] },
  P0404: { code: 'P0404', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur position vanne EGR hors plage/erratique.", symptoms: ['Voyant moteur', 'Ralenti irregulier parfois'], causes: ['Capteur position EGR HS (50%)', 'Connecteur capteur oxyde (25%)', 'Vanne EGR grippee position intermediaire (20%)'], solutions: ['Tester capteur position (resistance variable)', 'Nettoyer vanne EGR verifier mobilite', 'Remplacer capteur si defaillant (40-100 euros)'], riskExplanation: "P0404 = ECU pilotage EGR aveugle. Fonctionnement degrade mais roulable. CT echec. Reparation 1-2 mois.", faq: [{question: 'Capteur EGR vs vanne EGR?', answer: 'Capteur position (40-100 euros) integre ou separe vanne (120-350 euros complete). Verifier si capteur remplaçable seul avant acheter vanne complete.'}], relatedCodes: ['P0400', 'P0401', 'P0403'] },
  P0405: { code: 'P0405', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur position EGR circuit bas (court-circuit masse).", symptoms: ['Voyant', 'EGR inoperante'], causes: ['Capteur HS (50%)', 'Cablage court-circuit (40%)'], solutions: ['Test cablage isolement', 'Remplacement capteur'], riskExplanation: "Court-circuit. Reparation electrique 1-2 semaines.", faq: [{question: 'Cout?', answer: '40-150 euros'}], relatedCodes: ['P0404', 'P0406'] },
  P0406: { code: 'P0406', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur position EGR circuit haut (court-circuit +12V).", symptoms: ['Voyant', 'EGR inoperante'], causes: ['Capteur HS', 'Cablage court-circuit +12V'], solutions: ['Test cablage', 'Remplacer capteur'], riskExplanation: "Court-circuit. Reparation 1-2 semaines.", faq: [{question: 'P0405 vs P0406?', answer: 'P0405 = court-circuit MASSE. P0406 = court-circuit +12V. Diagnostic differentiel teste cablage.'}], relatedCodes: ['P0404', 'P0405'] },
  P0410: { code: 'P0410', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Systeme air secondaire dysfonctionnel. Pompe air injecte air echappement catalyseur accelerer rechauffage (reduit emissions demarrage froid).", symptoms: ['Voyant', 'Emissions elevees demarrage froid', 'CT echec possible'], causes: ['Pompe air secondaire HS (40%)', 'Electrovanne air secondaire bloquee (30%)', 'Tuyaux air secondaire fissures (20%)'], solutions: ['Tester pompe air (bruit fonctionnement demarrage)', 'Verifier electrovalves', 'Inspecter tuyauterie fuites'], riskExplanation: "P0410 = emissions demarrage froid hors normes. CT echec probable. Fonctionnement moteur normal. Reparation avant CT.", faq: [{question: 'Rouler sans air secondaire?', answer: 'OUI moteur fonctionne normal. Pompe air active uniquement 1-3 min apres demarrage froid. Impact: emissions elevees, CT echec. Reparation recommandee avant CT. Cout: pompe 150-400 euros.'}], relatedCodes: ['P0411', 'P0412', 'P0420'] },

  // Groupe: EVAP P0440-P0456 (17 codes)
  P0440: { code: 'P0440', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟡' }, introduction: "Fuite systeme EVAP (Evaporative Emission Control). Systeme EVAP capture vapeurs essence reservoir empêche pollution atmosphere. P0440 = fuite detectee sans localisation precise (vs P0442 petite fuite, P0455 grosse fuite).", symptoms: ['Voyant moteur', 'Odeur essence parfois', 'ZERO impact performances moteur', 'Fonctionnement totalement normal'], causes: ['Bouchon reservoir mal serre/joint HS (45%)', 'Tuyaux EVAP fissures/perces (25%)', 'Valve purge canister bloquee (15%)', 'Canister sature (10%)', 'Capteur pression EVAP HS (5%)'], solutions: ['Verifier bouchon reservoir: serrer correctement, remplacer joint si abime (5-15 euros bouchon neuf)', 'Inspecter visuellement tuyaux EVAP (sous vehicule, moteur) chercher fissures', 'Test fumee pro localiser fuite (garage 40-80 euros)', 'Verifier valve purge canister (electrovanne)', 'Remplacer piece fuyarde identifiee'], riskExplanation: "P0440 = ZERO danger mecanique. Impact: pollution (vapeurs essence atmosphere), echec controle technique certains pays (France: NON bloquant 2024, certains pays: bloquant). Pas urgence rouler. Reparer avant CT si requis. Delai: 1-6 mois.", faq: [{question: 'P0440 urgent reparer?', answer: 'NON urgence mecanique ZERO. Moteur fonctionne parfaitement. Urgence UNIQUEMENT si: 1) CT proche (echec possible selon pays). 2) Odeur essence forte cabine (inhalation toxique long terme). 3) Consommation excessive evaporation (rare). Sinon: reparer sous 1-6 mois tranquillement.'}, {question: 'Bouchon reservoir cause vraiment P0440?', answer: 'OUI 45% cas P0440. Bouchon reservoir integre valve pression EVAP. Joint bouchon abime ou bouchon mal serre = fuite air/vapeurs. Test GRATUIT: acheter bouchon neuf OEM (5-15 euros), serrer correctement, effacer code, rouler 50-100 km. Si code revient PAS = bouchon etait cause (resolution 5-15 euros). Si code revient = autre fuite (diagnostic suite necessaire). Toujours tester bouchon AVANT investir diagnostic couteux.'}], relatedCodes: ['P0442', 'P0455', 'P0446', 'P0456'] },
  P0441: { code: 'P0441', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Debit purge canister incorrect. Valve purge bloquee ou debit anormal.", symptoms: ['Voyant', 'Fonctionnement normal'], causes: ['Valve purge bloquee (50%)', 'Tuyaux purge obstrues (30%)'], solutions: ['Tester valve purge (electrovanne)', 'Deboucher tuyaux'], riskExplanation: "Impact faible. CT echec possible. Reparation sous 1-3 mois.", faq: [{question: 'Valve purge cout?', answer: '25-80 euros piece'}], relatedCodes: ['P0440', 'P0446'] },
  P0442: { code: 'P0442', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "PETITE fuite EVAP detectee (oppose P0455 grosse fuite). Fuite <0.5mm diametre equivalent.", symptoms: ['Voyant', 'Odeur essence legere possible', 'Fonctionnement normal'], causes: ['Bouchon reservoir (40%)', 'Tuyau EVAP micro-fissure (35%)', 'Joint valve purge (15%)'], solutions: ['Bouchon reservoir neuf (5-15 euros)', 'Test fumee localiser fuite', 'Remplacer tuyau/joint fuyant'], riskExplanation: "Petite fuite. Impact minime. CT echec possible. Reparation sous 1-6 mois.", faq: [{question: 'P0442 vs P0455 difference?', answer: 'P0442 = PETITE fuite (<0.5mm, difficile localiser). P0455 = GROSSE fuite (>1mm, facile trouver). P0442 necessite test fumee pro souvent. P0455 = inspection visuelle suffit souvent.'}], relatedCodes: ['P0440', 'P0455', 'P0456'] },
  P0443: { code: 'P0443', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit electrovanne purge EVAP defaillant (electrique).", symptoms: ['Voyant', 'Fonctionnement normal'], causes: ['Electrovanne purge HS (45%)', 'Connecteur oxyde (30%)', 'Cablage coupe (20%)'], solutions: ['Tester resistance electrovanne', 'Controler connecteur', 'Remplacer electrovanne (25-80 euros)'], riskExplanation: "Electrique. Impact faible. Reparation sous 1-2 mois.", faq: [{question: 'Cout?', answer: '25-80 euros'}], relatedCodes: ['P0440', 'P0441'] },
  P0444: { code: 'P0444', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit valve purge EVAP ouvert/court-circuit.", symptoms: ['Voyant'], causes: ['Valve purge court-circuit (50%)', 'Cablage endommage (40%)'], solutions: ['Test cablage isolement', 'Remplacer valve'], riskExplanation: "Court-circuit. Reparation sous 1-2 mois.", faq: [{question: 'Urgent?', answer: 'NON'}], relatedCodes: ['P0443', 'P0445'] },
  P0445: { code: 'P0445', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit valve purge court-circuit (oppose P0444).", symptoms: ['Voyant'], causes: ['Valve HS', 'Cablage'], solutions: ['Test', 'Remplacement'], riskExplanation: "Court-circuit. Reparation 1-2 mois.", faq: [{question: 'P0444 vs P0445?', answer: 'Codes similaires diagnostic electrique'}], relatedCodes: ['P0443', 'P0444'] },
  P0446: { code: 'P0446', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit event/valve vent EVAP bloque ou obstruee.", symptoms: ['Voyant', 'Bouchon reservoir difficile ouvrir parfois (pression)'], causes: ['Valve vent EVAP bloquee (45%)', 'Filtre canister obstrue (30%)', 'Tuyau vent bouche (20%)'], solutions: ['Localiser valve vent (sous vehicule pres reservoir)', 'Verifier mobilite valve', 'Nettoyer/remplacer filtre canister', 'Deboucher tuyau vent'], riskExplanation: "Valve vent bloquee = pression reservoir. Bouchon dur ouvrir. CT echec. Reparation sous 1-3 mois.", faq: [{question: 'Valve vent EVAP role?', answer: 'Valve vent permet air entrer canister lors purge (remplace vapeurs purgees). Bloquee = pression negative reservoir, bouchon dur ouvrir, purge inefficace.'}], relatedCodes: ['P0440', 'P0441', 'P0447'] },
  P0447: { code: 'P0447', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit valve vent EVAP ouvert.", symptoms: ['Voyant'], causes: ['Valve vent HS', 'Cablage'], solutions: ['Test electrique', 'Remplacement'], riskExplanation: "Impact faible. CT echec. Reparation 1-3 mois.", faq: [{question: 'Cout?', answer: '30-90 euros'}], relatedCodes: ['P0446', 'P0448'] },
  P0448: { code: 'P0448', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit valve vent EVAP court-circuit.", symptoms: ['Voyant'], causes: ['Valve vent court-circuit', 'Cablage'], solutions: ['Test isolement', 'Remplacement'], riskExplanation: "Court-circuit. Reparation 1-3 mois.", faq: [{question: 'Diagnostic?', answer: 'Test cablage multimetre'}], relatedCodes: ['P0446', 'P0447'] },
  P0449: { code: 'P0449', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Circuit valve vent EVAP electrique defaillant (GM/Chevy frequent).", symptoms: ['Voyant'], causes: ['Valve vent electrovanne HS (50%)'], solutions: ['Remplacer electrovanne vent'], riskExplanation: "Impact faible. Reparation 1-3 mois.", faq: [{question: 'Marque?', answer: 'GM principalement'}], relatedCodes: ['P0446', 'P0447'] },
  P0450: { code: 'P0450', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Capteur pression systeme EVAP dysfonctionnel.", symptoms: ['Voyant', 'Fonctionnement normal'], causes: ['Capteur pression EVAP HS (50%)', 'Connecteur capteur oxyde (25%)', 'Cablage (20%)'], solutions: ['Localiser capteur pression (reservoir ou canister)', 'Tester connecteur', 'Remplacer capteur (40-120 euros)'], riskExplanation: "Capteur pression. ECU ne detecte fuites. CT echec. Reparation 1-3 mois.", faq: [{question: 'Capteur pression role?', answer: 'Mesure pression systeme EVAP pour detecter fuites. HS = tests fuites impossibles, codes EVAP multiples possibles.'}], relatedCodes: ['P0440', 'P0451', 'P0452'] },
  P0451: { code: 'P0451', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Capteur pression EVAP hors plage.", symptoms: ['Voyant'], causes: ['Capteur HS (55%)', 'Fuite pression (30%)'], solutions: ['Test capteur', 'Verifier fuites'], riskExplanation: "Capteur. Reparation 1-3 mois.", faq: [{question: 'Cout?', answer: '40-120 euros capteur'}], relatedCodes: ['P0450', 'P0452'] },
  P0452: { code: 'P0452', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Capteur pression EVAP signal bas.", symptoms: ['Voyant'], causes: ['Capteur HS', 'Court-circuit masse'], solutions: ['Test cablage', 'Remplacer capteur'], riskExplanation: "Signal bas. Reparation 1-3 mois.", faq: [{question: 'Diagnostic?', answer: 'Test electrique'}], relatedCodes: ['P0450', 'P0451', 'P0453'] },
  P0453: { code: 'P0453', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Capteur pression EVAP signal haut.", symptoms: ['Voyant'], causes: ['Capteur HS', 'Court-circuit +12V'], solutions: ['Test cablage', 'Remplacer'], riskExplanation: "Signal haut. Reparation 1-3 mois.", faq: [{question: 'P0452 vs P0453?', answer: 'P0452 = bas. P0453 = haut'}], relatedCodes: ['P0450', 'P0452'] },
  P0455: { code: 'P0455', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "GROSSE fuite EVAP detectee (oppose P0442 petite). Fuite >1mm facile localiser.", symptoms: ['Voyant', 'Odeur essence FORTE', 'Bouchon reservoir manquant possible'], causes: ['Bouchon reservoir manquant/casse (50%)', 'Tuyau EVAP deconnecte/perce gros trou (30%)', 'Canister fissure (15%)'], solutions: ['Verifier bouchon reservoir present et serre', 'Inspection visuelle tuyaux EVAP (gros trous visibles)', 'Remplacer piece cassee/manquante'], riskExplanation: "Grosse fuite. Odeur essence. CT echec. Reparation sous 1-2 mois (odeur toxique).", faq: [{question: 'P0455 localisation fuite facile?', answer: 'OUI grosse fuite souvent visible: bouchon manquant, tuyau debranche, fissure canister. Inspection visuelle 70% cas suffit. P0442 petite fuite necessite test fumee pro.'}], relatedCodes: ['P0440', 'P0442', 'P0456'] },
  P0456: { code: 'P0456', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "TRES petite fuite EVAP (oppose P0455). Fuite <0.02 inch (0.5mm). Difficile localiser.", symptoms: ['Voyant', 'Odeur faible/nulle', 'Fonctionnement normal'], causes: ['Bouchon reservoir joint micro-fuite (40%)', 'Tuyau EVAP micro-fissure invisible (40%)', 'Joint valve purge (15%)'], solutions: ['Remplacer bouchon reservoir (test 5-15 euros)', 'Test fumee pro obligatoire (40-80 euros)', 'Remplacer piece identifiee'], riskExplanation: "Micro-fuite. Impact minimal. CT echec possible. Reparation sous 1-6 mois. Test fumee souvent necessaire localisation.", faq: [{question: 'P0456 worth reparer?', answer: 'Depends: CT proche = OUI (echec). CT lointain + pas odeur = attendre. Micro-fuite difficile/couteux localiser vs impact minime. Cout localisation (40-80 euros test fumee) + piece parfois > avantage reparation immediate. Reparer avant CT si requis, sinon peut attendre.'}], relatedCodes: ['P0440', 'P0442', 'P0455'] },

  // Groupe: Vitesse/capteurs P0500-P0506 (7 codes)
  P0500: { code: 'P0500', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur vitesse vehicule (VSS) defaillant. VSS informe ECU vitesse pour gestion transmission, ABS, compteur.", symptoms: ['Compteur vitesse inoperant (bloque 0)', 'Voyant moteur + ABS possibles', 'Transmission passages vitesses erratiques auto', 'Regulateur vitesse inoperant'], causes: ['Capteur VSS HS (45%)', 'Connecteur VSS corrode (25%)', 'Cablage VSS coupe (20%)', 'Pignon entrainement VSS casse (8%)'], solutions: ['Localiser VSS (transmission ou differentiel)', 'Tester connecteur VSS', 'Remplacer VSS (25-80 euros piece)', 'Verifier pignon entrainement VSS'], riskExplanation: "P0500 = pas vitesse vehicule. Compteur HS, transmission auto degrade, ABS compromis. Reparation URGENTE 1-7 jours (securite).", faq: [{question: 'Rouler sans VSS?', answer: 'DECONSEILLE fortement: 1) Compteur inoperant (vitesse inconnue, radar risque). 2) ABS inoperant (securite). 3) Transmission auto passages brutaux (usure). 4) Illegal rouler compteur HS certains pays. Reparation urgente recommandee.'}, {question: 'Cout VSS?', answer: 'Capteur VSS: 25-80 euros piece. MO: 30-80 euros garage (acces variable). DIY possible si accessible (15-30 min). Total: 25-160 euros.'}], relatedCodes: ['P0501', 'P0502', 'P0503'] },
  P0501: { code: 'P0501', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Signal capteur vitesse hors plage.", symptoms: ['Compteur erratique', 'Transmission perturbee'], causes: ['VSS signal faible (50%)', 'Cablage resistance elevee (30%)'], solutions: ['Verifier cablage VSS', 'Remplacer VSS'], riskExplanation: "Signal vitesse incorrect. Transmission/ABS perturbes. Reparation urgente 1 semaine.", faq: [{question: 'P0500 vs P0501?', answer: 'P0500 = signal ABSENT. P0501 = signal present mais INCORRECT (hors plage).'}], relatedCodes: ['P0500', 'P0502'] },
  P0502: { code: 'P0502', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Signal VSS bas (basse vitesse incorrect).", symptoms: ['Compteur sous-estime vitesse', 'Transmission'], causes: ['VSS encrassé (40%)', 'Pignon VSS use (35%)'], solutions: ['Nettoyer VSS', 'Verifier pignon', 'Remplacer VSS'], riskExplanation: "Signal bas. Compteur inexact. Reparation 1-2 semaines.", faq: [{question: 'Impact?', answer: 'Compteur faux, transmission perturbee'}], relatedCodes: ['P0500', 'P0501', 'P0503'] },
  P0503: { code: 'P0503', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Signal VSS erratique/intermittent.", symptoms: ['Compteur fluctue anormalement', 'Transmission saccades'], causes: ['Connecteur VSS mauvais contact (45%)', 'Cablage intermittent (30%)', 'VSS defaillant (20%)'], solutions: ['Nettoyer connecteur VSS', 'Verifier cablage continuité', 'Remplacer VSS si necessaire'], riskExplanation: "Signal intermittent. Transmission erratique. Reparation 1-2 semaines.", faq: [{question: 'Connecteur cause frequente?', answer: 'OUI 45% cas. Nettoyer connecteur VSS spray contact souvent resout (8 euros).'}], relatedCodes: ['P0500', 'P0501', 'P0502'] },
  P0504: { code: 'P0504', severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' }, introduction: "Correlation capteur position pedale frein A/B incorrecte.", symptoms: ['Voyant', 'Feux stop possiblement inoperants', 'Regulateur vitesse desactive'], causes: ['Contacteur frein A ou B HS (50%)', 'Contacteurs desalignes (30%)'], solutions: ['Tester contacteurs pedale frein', 'Ajuster position contacteurs', 'Remplacer contacteur defectueux (15-40 euros)'], riskExplanation: "Contacteur frein. Feux stop risque. Reparation sous 1-2 semaines (securite).", faq: [{question: 'Feux stop fonctionnent-ils?', answer: 'Parfois OUI (contacteur redondant), parfois NON. Tester feux stop URGENT (securite collision arriere).'}], relatedCodes: ['P0571', 'P0572'] },
  P0505: { code: 'P0505', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Systeme controle ralenti (IAC) dysfonctionnel. Valve IAC regule air admission ralenti stabiliser regime.", symptoms: ['Ralenti instable (variations 100-300 rpm)', 'Calage ralenti feux rouges', 'Ralenti trop haut ou trop bas', 'Demarrage difficile'], causes: ['Valve IAC encrassee (45%)', 'Valve IAC HS (25%)', 'Fuite admission perturbant IAC (20%)', 'Capteur position papillon HS (8%)'], solutions: ['Nettoyer valve IAC spray (12 euros, amelioration 60% cas)', 'Tester valve IAC (resistance 10-14 ohms typique)', 'Verifier fuites admission', 'Remplacer valve IAC (40-120 euros)'], riskExplanation: "P0505 = ralenti instable. Calages frequents desagreable mais pas danger immediat. Reparation sous 2-4 semaines.", faq: [{question: 'Nettoyer IAC efficace?', answer: 'OUI 60% cas. Valve IAC s encresse calamine/huile. Spray throttle body cleaner (12 euros), pulveriser valve IAC demontee, secher, remonter. 15-30 min DIY. Si persiste apres nettoyage = valve HS (remplacer 40-120 euros).'}, {question: 'Calages ralenti dangereux?', answer: 'Desagreable mais danger faible. Calage feu rouge: redemarrer. Precaution: anticiper calage, pied frein ferme. Danger si calage circulation dense (embouteillage). Reparation recommandee rapidement confort + securite.'}], relatedCodes: ['P0506', 'P0507', 'P0171'] },
  P0506: { code: 'P0506', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Ralenti trop BAS (oppose P0507 trop haut). ECU detecte regime inferieur cible.", symptoms: ['Ralenti bas <600 rpm', 'Calages frequents', 'Vibrations ralenti'], causes: ['Valve IAC grippee fermee (40%)', 'Fuite admission (30%)', 'Papillon encrasse (20%)'], solutions: ['Nettoyer valve IAC et papillon', 'Verifier fuites admission', 'Ajuster ralenti si reglable'], riskExplanation: "Ralenti bas. Calages. Reparation 1-3 semaines.", faq: [{question: 'Regler ralenti manuellement?', answer: 'Moteurs modernes: ralenti gere electroniquement (pas reglage vis). Moteurs anciens: vis reglage existe parfois. Consulter manuel.'}], relatedCodes: ['P0505', 'P0507'] },

  // Groupe final: Codes transmission P0700-P0735 (7 codes)
  P0507: { code: 'P0507', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Ralenti trop HAUT (oppose P0506). ECU detecte regime superieur cible.", symptoms: ['Ralenti eleve >1000 rpm', 'Surconsommation ralenti', 'Embrayage difficile (manuel)'], causes: ['Valve IAC grippee ouverte (40%)', 'Fuite admission apres papillon (30%)', 'Cable accelerateur coince (15%)'], solutions: ['Nettoyer valve IAC', 'Verifier fuites admission', 'Verifier cable accelerateur/papillon motorise'], riskExplanation: "Ralenti haut. Surconsommation. Reparation 1-3 semaines.", faq: [{question: 'Ralenti haut dangereux?', answer: 'NON danger mecanique immediat. Desagreable: surconsommation, embrayage brutal. Verifier fuite admission priorite.'}], relatedCodes: ['P0505', 'P0506'] },

  P0700: { code: 'P0700', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Dysfonctionnement systeme controle transmission (TCM). Code generique indiquant probleme transmission automatique. P0700 declenche souvent codes transmission specifiques additionnels (P0701-P0799). Necessite lecture codes TCM (module transmission separe ECU moteur).", symptoms: ['Voyant moteur + transmission', 'Passages vitesses brutaux/erratiques', 'Transmission bloquee mode degrade (3e vitesse uniquement)', 'Patinage embrayage auto', 'Surconsommation'], causes: ['Capteur vitesse transmission HS (25%)', 'Electrovanne transmission defaillante (20%)', 'Niveau huile transmission bas/contaminee (18%)', 'Faisceau electrique transmission endommage (15%)', 'TCM (module transmission) HS (12%)', 'Embrayages transmission uses (10%)'], solutions: ['Lire codes defaut TCM (valise compatible transmission)', 'Verifier niveau/etat huile transmission (jauge si equipee)', 'Tester capteurs vitesse transmission (entree/sortie)', 'Verifier connecteurs electriques TCM', 'Diagnostic pro transmission recommande (complexite)'], riskExplanation: "P0700 = transmission mode degrade possible. Rouler court terme possible mais: passages vitesses limites (souvent bloque 3e), surconsommation 15-25%, usure transmission acceleree. Diagnostic URGENT sous 1-7 jours eviter casse transmission (reparation 1500-4000 euros).", faq: [{question: 'Mode degrade transmission cest quoi?', answer: 'Mode securite transmission: TCM detecte probleme, bloque transmission vitesse fixe (generalement 3e) proteger mecanique. Permet rouler atelier mais: pas vitesses <3 (demarrage dur), pas vitesses >3 (vitesse max 80-90 km/h), surconsommation. Mode degrade = signal URGENT diagnostic transmission.'}, {question: 'P0700 reparation cout?', answer: 'VARIABLE 100-4000 euros: 1) Capteur vitesse transmission: 40-150 euros piece + MO 50-100 euros = 90-250 euros. 2) Electrovanne: 80-250 euros + MO 100-200 euros = 180-450 euros. 3) Huile transmission: 80-200 euros vidange complete. 4) TCM: 300-800 euros reconditionne, 600-1500 euros neuf + programmation. 5) Transmission complete: 1500-4000 euros reconstruite/echange standard. Diagnostic pro 80-150 euros obligatoire identifier cause.'}], relatedCodes: ['P0715', 'P0720', 'P0730', 'P0500'] },

  P0715: { code: 'P0715', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur vitesse turbine transmission (entree) defaillant. Turbine = cote moteur convertisseur couple.", symptoms: ['Voyant transmission', 'Passages vitesses retardes/brutaux', 'Compteur vitesse erratique possible', 'Mode degrade transmission'], causes: ['Capteur vitesse turbine HS (50%)', 'Connecteur capteur corrode (25%)', 'Cablage coupe (15%)', 'Roue phonique turbine endommagee (8%)'], solutions: ['Localiser capteur turbine (cote convertisseur)', 'Tester resistance capteur (800-1400 ohms typique)', 'Verifier connecteur', 'Remplacer capteur (60-180 euros piece)'], riskExplanation: "Capteur turbine. TCM aveugle vitesse entree. Mode degrade probable. Reparation urgente 1 semaine.", faq: [{question: 'Turbine vs arbre sortie transmission?', answer: 'Turbine (P0715) = vitesse ENTREE transmission (cote moteur). Arbre sortie (P0720) = vitesse SORTIE transmission (cote roues). TCM compare 2 vitesses calculer rapport engage et patinage embrayages. Les 2 capteurs essentiels fonctionnement transmission.'}], relatedCodes: ['P0700', 'P0720', 'P0500'] },

  P0720: { code: 'P0720', severity: { level: 2, label: 'Modéré', color: 'warning', icon: '🟡' }, introduction: "Capteur vitesse arbre sortie transmission defaillant. Arbre sortie = cote roues, vitesse vehicule.", symptoms: ['Compteur vitesse inoperant', 'Voyant transmission + ABS', 'Passages vitesses erratiques', 'Mode degrade'], causes: ['Capteur vitesse sortie HS (50%)', 'Connecteur corrode (25%)', 'Roue phonique endommagee (15%)', 'Cablage coupe (8%)'], solutions: ['Localiser capteur sortie transmission', 'Tester resistance capteur', 'Verifier connecteur', 'Remplacer capteur (50-150 euros)'], riskExplanation: "Capteur sortie. Compteur HS, transmission mode degrade, ABS inoperant. Reparation urgente 1 semaine securite.", faq: [{question: 'P0720 vs P0500 difference?', answer: 'P0720 = capteur vitesse TRANSMISSION (arbre sortie boite). P0500 = capteur vitesse VEHICULE (differentiel ou ABS). Parfois meme capteur vehicules anciens, capteurs separes vehicules recents. P0720 priorite transmission. P0500 priorite compteur/ABS.'}], relatedCodes: ['P0700', 'P0715', 'P0500'] },

  P0730: { code: 'P0730', severity: { level: 3, label: 'Sérieux', color: 'danger', icon: '🔴' }, introduction: "Rapport vitesse incorrect transmission. TCM detecte rapport engage different rapport commande. Probleme mecanique transmission interne (embrayages, synchroniseurs).", symptoms: ['Voyant transmission', 'Patinage embrayages (regime moteur monte sans acceleration)', 'Passages vitesses impossibles certains rapports', 'Mode degrade transmission', 'Bruit transmission (grincement, choc)'], causes: ['Embrayages transmission uses/brules (45%)', 'Niveau huile transmission bas (20%)', 'Huile transmission degradee/brulee (15%)', 'Electrovanne pression hydraulique HS (12%)', 'Pompe huile transmission faible (5%)', 'TCM defaillant (3%)'], solutions: ['Verifier niveau huile transmission URGENT', 'Vidanger huile transmission (huile brulee = marron/noir, odeur)', 'Test pression hydraulique transmission (garage specialise)', 'Diagnostic transmission pro (demontage possible)', 'Reconstruction transmission si embrayages uses (1500-3500 euros)'], riskExplanation: "P0730 = probleme MECANIQUE transmission. Patinage embrayages = usure rapide. Continuer rouler = casse transmission complete inevitable (2000-4000 euros). ARRETER conduite si patinage severe (regime moteur 3000+ rpm sans acceleration). Diagnostic URGENT 24-48h. Si embrayages uses: reconstruction transmission necessaire (pas reparation simple).", faq: [{question: 'Patinage transmission signes?', answer: 'Regime moteur MONTE (2000-4000 rpm) mais vitesse vehicule augmente PAS proportionnellement. Sensation: moteur semballe, acceleration molle. Odeur huile brulee possible. Bruit anormal transmission (grincement). Test confirmatoire: acceleration franche -> si regime monte rapidement sans acceleration correspondante = patinage embrayages. ARRETER conduite immediatement si severe.'}, {question: 'Huile transmission peut resoudre P0730?', answer: 'PARFOIS si niveau BAS ou huile TRES degradee. Verifier niveau URGENT (jauge transmission ou orifice controle). Niveau bas <50% = remplir huile correcte (ATF type specifique vehicule). Huile noire/brulee odeur = vidange complete peut ameliorer temporairement MAIS embrayages probablement uses (vidange retarde inevitable seulement). Huile OK niveau OK = probleme mecanique interne (reconstruction necessaire). Cout vidange: 80-200 euros. Cout reconstruction: 1500-3500 euros.'}], relatedCodes: ['P0700', 'P0731', 'P0732', 'P0733'] },

  P0731: { code: 'P0731', severity: { level: 3, label: 'Sérieux', color: 'danger', icon: '🔴' }, introduction: "Rapport 1 incorrect (patinage embrayage 1ere vitesse).", symptoms: ['Patinage 1ere vitesse', 'Demarrage difficile (regime moteur eleve sans mouvement)'], causes: ['Embrayage 1ere use (50%)', 'Huile transmission bas/degradee (30%)', 'Electrovanne 1ere HS (15%)'], solutions: ['Verifier huile', 'Test pression hydraulique 1ere', 'Reconstruction transmission si embrayage use'], riskExplanation: "Embrayage 1ere patine. Demarrage impossible si severe. Reconstruction transmission probable. Arreter si patinage severe.", faq: [{question: 'Cout?', answer: 'Reconstruction: 1500-3500 euros'}], relatedCodes: ['P0730', 'P0700'] },

  P0732: { code: 'P0732', severity: { level: 3, label: 'Sérieux', color: 'danger', icon: '🔴' }, introduction: "Rapport 2 incorrect (patinage embrayage 2e vitesse).", symptoms: ['Patinage 2e vitesse', 'Passage 1-2 impossible ou brutal'], causes: ['Embrayage 2e use (50%)', 'Huile bas (30%)', 'Electrovanne 2e HS (15%)'], solutions: ['Verifier huile', 'Diagnostic pro', 'Reconstruction transmission'], riskExplanation: "Embrayage 2e use. Reconstruction probable 1500-3500 euros.", faq: [{question: 'Rouler sans 2e?', answer: 'Court terme possible (1-3 puis 3-4 direct) mais usure acceleree transmission. Reparation urgente.'}], relatedCodes: ['P0730', 'P0700'] }
};

export function getPopularCodeData(code: string): PopularCodeData | null {
  return popularCodesData[code.toUpperCase()] || null;
}

export const popularCodesList = Object.keys(popularCodesData);
