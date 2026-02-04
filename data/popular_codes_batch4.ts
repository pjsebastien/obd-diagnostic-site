import { PopularCodeData } from './popular_codes_data';

export const popularCodesBatch4: Record<string, PopularCodeData> = {
  P0238: {
    code: 'P0238',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0238 indique que le signal du capteur de pression de suralimentation du turbocompresseur (capteur A, circuit haut) depasse la plage de valeurs acceptables. Ce capteur, souvent appele capteur MAP de suralimentation, mesure la pression d'air dans le collecteur d'admission apres le turbo. Lorsque le signal electrique envoye au calculateur (ECU) est anormalement eleve, cela peut signifier un court-circuit dans le cablage, un capteur defectueux, ou une pression de suralimentation reellement excessive. Le systeme de suralimentation est essentiel pour fournir la puissance supplementaire sur les moteurs turbo, et tout dysfonctionnement du capteur empeche le calculateur de reguler correctement la pression du turbo. Ce code est frequemment rencontre sur les vehicules diesel turbo et les moteurs essence turbocompresses modernes.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Perte de puissance significative du moteur, surtout en acceleration',
      'Le vehicule passe en mode degrade avec limitation de puissance',
      'Suralimentation excessive possible avec risque de detonation',
      'Fumee noire ou blanche excessive a l\'echappement',
      'Sifflement anormal du turbocompresseur pendant les accelerations',
      'Ralenti instable et vibrations moteur perceptibles'
    ],
    causes: [
      'Capteur de pression de suralimentation defectueux ou en fin de vie (30%)',
      'Court-circuit dans le cablage entre le capteur et le calculateur (25%)',
      'Connecteur du capteur corrode, desserre ou endommage (15%)',
      'Wastegate ou soupape de decharge du turbo bloquee en position fermee (10%)',
      'Electrovalve de regulation de pression de suralimentation defaillante (10%)',
      'Fuite ou obstruction dans les durites de depression du turbo (5%)',
      'Probleme de masse electrique du capteur (3%)',
      'Calculateur moteur defaillant dans de rares cas (2%)'
    ],
    solutions: [
      'Verifier l\'etat du connecteur et du cablage du capteur de pression de suralimentation (gratuit a 30 euros)',
      'Tester le signal de sortie du capteur avec un multimetre ou un oscilloscope (diagnostic 50-80 euros)',
      'Remplacer le capteur de pression de suralimentation s\'il est defectueux (40-120 euros)',
      'Reparer ou remplacer le faisceau electrique si un court-circuit est detecte (80-200 euros)',
      'Controler le fonctionnement de la wastegate et la nettoyer ou la remplacer (150-400 euros)',
      'Verifier et remplacer l\'electrovalve de regulation de suralimentation si necessaire (60-150 euros)',
      'Inspecter les durites de depression du turbo pour fuites ou bouchons (20-80 euros)'
    ],
    riskExplanation: "Un code P0238 non traite peut entrainer des consequences graves sur le moteur turbo. Si le signal du capteur est errone et indique une pression plus basse que la realite, le calculateur pourrait augmenter la suralimentation au-dela des limites mecaniques, risquant d'endommager le turbo, les pistons ou les joints de culasse. En mode degrade, le vehicule sera tres limite en puissance, rendant les depassements et les insertions sur autoroute dangereux. Il est recommande de faire diagnostiquer ce code dans la semaine suivant son apparition.",
    faq: [
      {
        question: 'Puis-je continuer a rouler avec un code P0238 sans risque?',
        answer: 'Il est deconseille de rouler longtemps avec un code P0238 actif. Le mode degrade protege le moteur en limitant la puissance, mais si le probleme est une suralimentation reellement excessive non detectee, vous risquez des degats mecaniques importants comme la destruction du turbo ou la perforation d\'un piston. De plus, rouler en mode degrade avec une puissance reduite peut etre dangereux sur autoroute ou lors des depassements. Il est preferable de faire diagnostiquer le vehicule rapidement, idealement dans les jours qui suivent l\'apparition du voyant moteur.'
      },
      {
        question: 'Comment tester le capteur de pression de suralimentation soi-meme?',
        answer: 'Vous pouvez realiser un test basique avec un multimetre. Debranchez le connecteur du capteur et mesurez la tension d\'alimentation (doit etre environ 5V). Rebranchez le capteur et mesurez le signal de sortie au ralenti (environ 1-1,5V) puis en acceleration (doit monter progressivement jusqu\'a 4-4,5V sous pleine charge). Si le signal est bloque au-dessus de 4,5V ou a 5V en permanence, le capteur est en court-circuit ou defectueux. Une valise OBD permet egalement de lire la pression en temps reel et de comparer avec les valeurs attendues.'
      },
      {
        question: 'Quelle est la difference entre les codes P0235, P0236, P0237 et P0238?',
        answer: 'Ces quatre codes concernent tous le capteur de pression de suralimentation du turbo (capteur A). Le P0235 est un code generique signalant un dysfonctionnement du circuit. Le P0236 indique que la plage de mesure est hors specifications. Le P0237 signale un signal trop bas (circuit ouvert ou court-circuit a la masse), tandis que le P0238 signale un signal trop haut (court-circuit au positif ou pression excessive). Le P0238 est donc specifiquement lie a une tension de signal anormalement elevee, ce qui oriente le diagnostic vers des causes differentes du P0237.'
      },
      {
        question: 'Le remplacement du capteur de suralimentation est-il difficile?',
        answer: 'Le remplacement du capteur de pression de suralimentation est generalement une operation simple et rapide, accessible aux bricoleurs experimentes. Le capteur est souvent situe sur le collecteur d\'admission ou a proximite de l\'intercooler, fixe par une ou deux vis. L\'operation prend 15 a 30 minutes en moyenne. Il faut debrancher le connecteur electrique, retirer les vis de fixation, installer le nouveau capteur et rebrancher. Apres le remplacement, il est recommande d\'effacer le code defaut avec une valise OBD et de faire un essai routier pour confirmer la reparation. Le cout du capteur seul varie de 30 a 100 euros selon le constructeur.'
      },
      {
        question: 'Le P0238 peut-il etre cause par une modification du turbo ou un chiptuning?',
        answer: 'Oui, c\'est une cause frequente du P0238 sur les vehicules modifies. Un chiptuning ou une reprogrammation moteur qui augmente la pression de suralimentation au-dela des valeurs d\'origine peut declencher ce code si le calculateur detecte une pression superieure a ses seuils maximaux. De meme, l\'installation d\'un turbo plus gros ou d\'une wastegate modifiee peut provoquer des pressions excessives. Dans ce cas, il faut soit adapter la cartographie du calculateur aux nouvelles specifications, soit revenir aux composants d\'origine. Rouler avec une suralimentation excessive sans adaptation peut detruire le moteur en quelques milliers de kilometres.'
      }
    ],
    relatedCodes: ['P0235', 'P0236', 'P0237', 'P0299', 'P0234']
  },
  P0239: {
    code: 'P0239',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0239 concerne le circuit du capteur de pression de suralimentation B du turbocompresseur. Ce deuxieme capteur (capteur B) est present sur les vehicules equipes de systemes biturbo ou de turbocompresseurs a geometrie variable necessitant une surveillance supplementaire. Ce capteur mesure la pression de suralimentation a un emplacement different du capteur A, souvent en sortie du deuxieme turbo ou a un autre point du circuit d'admission. Lorsque l'ECU detecte un dysfonctionnement de ce circuit, il enregistre le code P0239 et peut placer le vehicule en mode degrade pour proteger le moteur. Ce code est moins courant que les codes du capteur A car tous les vehicules ne disposent pas de ce deuxieme capteur de pression.",
    symptoms: [
      'Voyant moteur allume en permanence avec passage en mode degrade',
      'Perte de puissance notable surtout dans les hauts regimes',
      'Temps de reponse du turbo allonge (turbo lag augmente)',
      'Fumee excessive a l\'echappement lors des fortes accelerations',
      'Ralenti irregulier avec de legeres vibrations',
      'Surconsommation de carburant de 10 a 20%',
      'Bruits inhabituels provenant du systeme de suralimentation'
    ],
    causes: [
      'Capteur de pression de suralimentation B defectueux (35%)',
      'Probleme de cablage ou de connecteur sur le circuit du capteur B (25%)',
      'Dysfonctionnement du deuxieme turbocompresseur sur systeme biturbo (15%)',
      'Fuite dans le circuit de suralimentation entre les deux turbos (10%)',
      'Electrovalve de commutation biturbo defaillante (5%)',
      'Encrassement severe de l\'intercooler reduisant le debit d\'air (5%)',
      'Calculateur moteur recevant des donnees incoherentes des deux capteurs (3%)',
      'Mauvaise mise a jour logicielle du calculateur apres intervention (2%)'
    ],
    solutions: [
      'Diagnostiquer le circuit electrique du capteur B avec un multimetre (diagnostic 50-80 euros)',
      'Verifier et nettoyer le connecteur du capteur B et ses broches (gratuit a 20 euros)',
      'Remplacer le capteur de pression de suralimentation B (50-130 euros)',
      'Inspecter et reparer le faisceau electrique en cas de coupure ou court-circuit (80-200 euros)',
      'Controler le fonctionnement du deuxieme turbo et ses mecanismes (diagnostic 100-150 euros)',
      'Verifier l\'etancheite du circuit de suralimentation avec un test de pression (50-100 euros)',
      'Nettoyer ou remplacer l\'intercooler s\'il est bouche (150-500 euros)',
      'Mettre a jour le logiciel du calculateur si necessaire (80-150 euros)'
    ],
    riskExplanation: "Un code P0239 non traite affecte directement les performances du systeme de suralimentation, surtout sur les vehicules biturbo. Sans la mesure correcte de la pression au niveau du capteur B, le calculateur ne peut pas optimiser le fonctionnement du deuxieme etage de suralimentation, ce qui entraine une perte de puissance significative et une surconsommation. Sur certains vehicules, un dysfonctionnement prolonge peut endommager le turbocompresseur par manque de regulation. Il est conseille de faire diagnostiquer ce code dans les deux semaines suivant son apparition.",
    faq: [
      {
        question: 'Qu\'est-ce que le capteur de pression de suralimentation B et ou se trouve-t-il?',
        answer: 'Le capteur de pression de suralimentation B est un deuxieme capteur de pression present sur les vehicules equipes de systemes biturbo, de turbo a deux etages ou de certains moteurs diesel modernes. Il est generalement situe sur le collecteur d\'admission, en sortie de l\'intercooler, ou entre les deux turbocompresseurs sur un systeme biturbo. Sa fonction est de fournir une deuxieme mesure de pression pour permettre au calculateur de reguler plus finement la suralimentation. Tous les vehicules turbo n\'en sont pas equipes : il est surtout present sur les vehicules haut de gamme et les diesels recents.'
      },
      {
        question: 'Le P0239 est-il grave et necessite-t-il une reparation urgente?',
        answer: 'Le P0239 est considere comme un code de gravite moderee. Le mode degrade protege le moteur des degats immediats, mais rouler longtemps sans reparation peut entrainer une usure prematuree du turbocompresseur et une surconsommation importante. Si le vehicule fonctionne normalement en mode degrade (puissance reduite mais stable), vous pouvez rouler quelques jours le temps de prendre rendez-vous chez le garagiste. En revanche, si vous constatez des bruits anormaux, des fumees excessives ou une perte de puissance tres importante, il est preferable de limiter l\'utilisation du vehicule et de faire diagnostiquer rapidement.'
      },
      {
        question: 'Comment differencier un probleme de capteur d\'un probleme de turbo?',
        answer: 'Pour differencier un probleme de capteur d\'un probleme mecanique du turbo, il faut utiliser une valise OBD capable d\'afficher les valeurs en temps reel. Comparez les valeurs du capteur A et du capteur B : si le capteur A donne des valeurs normales mais le B est aberrant, c\'est probablement le capteur B ou son circuit. Si les deux capteurs montrent des anomalies, le probleme est peut-etre mecanique (turbo, wastegate, fuites). Un test physique de pression du circuit de suralimentation avec un manometre permet de confirmer. Si la pression reelle est correcte mais le capteur indique une valeur fausse, le capteur est en cause.'
      },
      {
        question: 'Peut-on remplacer soi-meme le capteur de pression B?',
        answer: 'Oui, le remplacement du capteur de pression B est generalement accessible a un bricoleur ayant des connaissances de base en mecanique automobile. Le capteur est fixe par une ou deux vis sur le collecteur d\'admission ou le circuit de suralimentation. Il faut localiser le capteur (consulter le manuel technique de votre vehicule), debrancher la batterie par securite, retirer le connecteur electrique, devisser l\'ancien capteur, installer le nouveau et rebrancher. L\'operation prend environ 20 a 45 minutes. N\'oubliez pas d\'effacer le code defaut apres le remplacement avec un lecteur OBD. Le cout du capteur est de 50 a 130 euros selon le constructeur.'
      },
      {
        question: 'Le code P0239 peut-il apparaitre apres un nettoyage du moteur ou du turbo?',
        answer: 'Oui, c\'est possible. Un nettoyage au karcher du compartiment moteur peut provoquer une infiltration d\'eau dans le connecteur du capteur B, causant un court-circuit temporaire ou une corrosion des broches. De meme, un nettoyage chimique du circuit d\'admission ou du turbo peut deplacer des residus qui bouchent temporairement la prise de pression du capteur. Si le code apparait juste apres un nettoyage, verifiez d\'abord le connecteur du capteur : sechez-le soigneusement avec de l\'air comprime et appliquez un spray contact electrique. Effacez le code et faites un essai routier. Si le code revient, le capteur a peut-etre ete endommage par l\'eau ou les produits chimiques.'
      }
    ],
    relatedCodes: ['P0235', 'P0236', 'P0240', 'P0241', 'P0299']
  },
  P0240: {
    code: 'P0240',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0240 signale un dysfonctionnement du circuit du capteur de pression de suralimentation B du turbocompresseur. Ce code est distinct du P0239 en ce qu'il concerne specifiquement un probleme de plage ou de performance du circuit, plutot qu'un simple defaut electrique. Le calculateur moteur detecte que les valeurs fournies par le capteur B sont incoherentes avec les conditions de fonctionnement du moteur, comme une pression qui ne correspond pas au regime moteur ou a la position du papillon. Ce code est courant sur les vehicules equipes de systemes biturbo ou de turbocompresseurs a geometrie variable ou le capteur B joue un role crucial dans la gestion de la transition entre les deux etages de suralimentation.",
    symptoms: [
      'Voyant moteur allume avec possible passage en mode degrade',
      'Transition entre les turbocompresseurs hesitante ou brutale sur systeme biturbo',
      'Perte de puissance progressive surtout entre 2000 et 3500 tr/min',
      'A-coups lors des accelerations moderees',
      'Surconsommation de carburant notable',
      'Reponse du turbo irreguliere avec des variations de puissance',
      'Fumee a l\'echappement lors des phases de transition de suralimentation'
    ],
    causes: [
      'Capteur de pression B delivrant des valeurs hors plage (30%)',
      'Encrassement du conduit de prise de pression du capteur B (20%)',
      'Fuite dans le circuit de suralimentation faussant les mesures (15%)',
      'Probleme mecanique du turbo affectant la pression reelle (15%)',
      'Cablage du capteur B partiellement endommage causant des intermittences (10%)',
      'Intercooler fissure ou bouche provoquant des chutes de pression (5%)',
      'Vanne de recirculation du turbo defaillante (3%)',
      'Calculateur moteur necessitant une mise a jour logicielle (2%)'
    ],
    solutions: [
      'Comparer les valeurs des capteurs A et B en temps reel avec une valise OBD (diagnostic 50-80 euros)',
      'Nettoyer le conduit de prise de pression du capteur B (gratuit a 20 euros)',
      'Remplacer le capteur de pression de suralimentation B si defectueux (50-130 euros)',
      'Effectuer un test de pression du circuit de suralimentation pour detecter les fuites (50-100 euros)',
      'Inspecter et reparer les durites et raccords du circuit de suralimentation (30-150 euros)',
      'Controler l\'etat de l\'intercooler et le remplacer si necessaire (200-600 euros)',
      'Faire verifier le fonctionnement mecanique du turbocompresseur (diagnostic 100-200 euros)'
    ],
    riskExplanation: "Le code P0240 indique un probleme de coherence des mesures de pression de suralimentation qui peut conduire a une regulation incorrecte du turbo. Si le calculateur recoit des informations erronees, il peut soit sous-alimenter le turbo (perte de puissance) soit le sur-alimenter (risque de casse mecanique). Sur les systemes biturbo, une mauvaise transition entre les deux turbos peut provoquer des a-coups dangereux en conduite. Il est recommande de faire diagnostiquer ce defaut dans les deux semaines pour eviter une degradation du turbocompresseur.",
    faq: [
      {
        question: 'Quelle est la difference entre le code P0239 et le code P0240?',
        answer: 'Le code P0239 signale un probleme electrique dans le circuit du capteur de pression B (court-circuit, circuit ouvert, signal hors limites electriques), tandis que le P0240 indique un probleme de plage ou de performance (le signal electrique est dans les limites normales mais les valeurs mesurees ne correspondent pas aux conditions de fonctionnement du moteur). En pratique, le P0239 oriente le diagnostic vers le cablage et le capteur lui-meme, alors que le P0240 suggere plutot un probleme mecanique (fuite, encrassement) ou un capteur qui derive sans etre completement en panne. Les deux codes peuvent parfois apparaitre ensemble.'
      },
      {
        question: 'Le P0240 peut-il endommager le turbocompresseur a long terme?',
        answer: 'Oui, un code P0240 non traite peut contribuer a une usure prematuree du turbocompresseur. Si le calculateur ne recoit pas les bonnes informations de pression, il peut reguler la suralimentation de maniere incorrecte, ce qui soumet le turbo a des contraintes non prevues. Par exemple, si le capteur sous-estime la pression, le calculateur va demander plus de suralimentation, ce qui peut faire tourner le turbo au-dela de ses limites. A l\'inverse, si la pression est surestime, le turbo sera bride et des residus peuvent s\'accumuler. Dans les deux cas, le turbo s\'use plus vite.'
      },
      {
        question: 'Comment nettoyer le conduit de prise de pression du capteur B?',
        answer: 'Le conduit de prise de pression est un petit tube ou orifice qui relie le collecteur d\'admission au capteur. Pour le nettoyer, retirez d\'abord le capteur de pression B de son emplacement. Inspectez l\'orifice de prise de pression : s\'il est obstrue par des residus d\'huile ou de suie (frequent sur les diesels), utilisez un petit fil metallique souple ou un cure-pipe pour deboucher le conduit. Soufflez ensuite avec de l\'air comprime pour eliminer les residus. Nettoyez egalement la surface du capteur avec un nettoyant contact electrique. Remontez le tout et effacez le code defaut. Cette operation simple peut resoudre le probleme dans 20% des cas.'
      },
      {
        question: 'Le P0240 empeche-t-il de passer le controle technique?',
        answer: 'Oui, tout code defaut actif allumant le voyant moteur entraine un refus au controle technique depuis les dernieres evolutions de la reglementation. Le P0240 etant un code lie aux emissions et aux performances du systeme de suralimentation, il doit etre resolu avant de presenter le vehicule au controle technique. Meme si vous effacez le code juste avant le controle, les moniteurs OBD ne seront pas valides et le controleur le detectera. Il faut reparer le probleme, effacer le code, puis rouler 50 a 100 km pour que les moniteurs completent leurs tests.'
      },
      {
        question: 'Ce code est-il specifique aux vehicules diesel?',
        answer: 'Non, le code P0240 peut apparaitre sur tout vehicule equipe d\'un systeme de suralimentation avec deux capteurs de pression, qu\'il soit diesel ou essence. Cependant, il est plus frequent sur les vehicules diesel turbo, notamment les systemes biturbo que l\'on retrouve sur des modeles comme les BMW 535d, Audi 3.0 TDI biturbo, ou les Mercedes CDI biturbo. On le retrouve egalement sur certains moteurs essence turbo haut de gamme disposant de deux capteurs de pression pour une regulation plus fine. Les vehicules diesel sont plus sujets a ce code en raison de l\'encrassement plus important lie a la suie et aux residus de combustion.'
      }
    ],
    relatedCodes: ['P0239', 'P0235', 'P0236', 'P0299', 'P0234']
  },
  P0241: {
    code: 'P0241',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0241 indique que le signal du capteur de pression de suralimentation B est trop bas, c'est-a-dire que la tension electrique mesuree est inferieure au seuil minimum attendu par le calculateur moteur. Ce signal bas peut indiquer un circuit ouvert, un court-circuit a la masse, ou une pression de suralimentation reellement trop faible. Le capteur B est utilise sur les vehicules equipes de systemes biturbo ou de turbocompresseurs complexes necessitant une surveillance de la pression a plusieurs points du circuit d'admission. Un signal trop bas empeche le calculateur de reguler correctement la suralimentation du deuxieme etage, ce qui affecte directement les performances du vehicule.",
    symptoms: [
      'Voyant moteur allume avec perte de puissance en mode degrade',
      'Manque de suralimentation perceptible dans les hauts regimes',
      'Acceleration molle et temps de reponse du turbo tres long',
      'Consommation de carburant augmentee de 10 a 15%',
      'Fumee noire a l\'echappement surtout sous forte charge',
      'Ralenti legerement irregulier'
    ],
    causes: [
      'Circuit ouvert dans le cablage du capteur de pression B (30%)',
      'Court-circuit a la masse dans le faisceau du capteur (25%)',
      'Capteur de pression B defectueux avec signal bloque au minimum (20%)',
      'Connecteur du capteur B desserre ou corrode (10%)',
      'Pression de suralimentation reellement trop faible (fuite majeure) (8%)',
      'Turbocompresseur defaillant ne generant pas assez de pression (5%)',
      'Probleme d\'alimentation electrique du capteur (2%)'
    ],
    solutions: [
      'Verifier la continuite du cablage du capteur B avec un multimetre (diagnostic 30-60 euros)',
      'Inspecter et nettoyer le connecteur du capteur B (gratuit a 15 euros)',
      'Mesurer la tension d\'alimentation du capteur (doit etre 5V) (diagnostic inclus)',
      'Remplacer le capteur de pression B si le signal est bloque au minimum (50-130 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert ou court-circuit (80-200 euros)',
      'Controler le turbocompresseur pour fuites ou usure mecanique (diagnostic 100-200 euros)',
      'Verifier l\'etancheite du circuit de suralimentation complet (50-100 euros)'
    ],
    riskExplanation: "Un signal de capteur trop bas prive le calculateur d'informations essentielles pour reguler la suralimentation. En mode degrade, la puissance est fortement limitee mais le moteur est protege. Cependant, si le probleme est une fuite reelle dans le circuit de suralimentation, l'air non compresse qui entre dans les cylindres affecte le melange air-carburant et peut provoquer une combustion incomplete. A long terme, cela peut encrasser le filtre a particules, user les injecteurs et degrader le catalyseur. Il est recommande d'intervenir sous deux semaines.",
    faq: [
      {
        question: 'Que signifie un signal trop bas du capteur de pression B?',
        answer: 'Un signal trop bas signifie que la tension electrique envoyee par le capteur au calculateur est inferieure au minimum attendu, generalement en dessous de 0,2 a 0,5V selon les constructeurs. Cela peut avoir deux origines : soit le capteur ou son circuit electrique est defaillant (circuit ouvert, court-circuit a la masse, capteur mort), soit la pression de suralimentation reelle est effectivement tres basse (fuite majeure dans le circuit, turbo defaillant). Le diagnostic doit differencier ces deux situations en comparant la valeur du capteur avec une mesure de pression physique ou en comparant avec le capteur A.'
      },
      {
        question: 'Comment verifier si c\'est un probleme electrique ou mecanique?',
        answer: 'Pour differencier un probleme electrique d\'un probleme mecanique, commencez par lire les valeurs en temps reel des capteurs A et B avec une valise OBD. Si le capteur A donne des valeurs normales mais le B est bloque pres de 0V, c\'est probablement un probleme electrique (capteur ou cablage). Si les deux capteurs montrent des pressions basses, c\'est plutot un probleme mecanique (turbo, fuites). Vous pouvez aussi debrancher le capteur B : si le code change (par exemple vers P0239 circuit ouvert), le cablage est fonctionnel et le capteur est en cause. Un test de resistance du capteur et de son cablage avec un multimetre permet de confirmer.'
      },
      {
        question: 'Le mode degrade peut-il endommager le moteur a la longue?',
        answer: 'Le mode degrade est concu pour proteger le moteur, pas pour l\'endommager. Il limite la puissance et la pression de suralimentation pour eviter tout risque mecanique. Cependant, rouler en permanence en mode degrade n\'est pas ideal : le moteur fonctionne dans des conditions non optimales, ce qui peut augmenter l\'encrassement (surtout sur les diesels), user le filtre a particules plus vite et augmenter la consommation. De plus, le mode degrade desactive certaines fonctions d\'optimisation du moteur. Il est preferable de reparer le probleme plutot que de rouler indefiniment en mode degrade.'
      },
      {
        question: 'Combien coute la reparation d\'un P0241 en moyenne?',
        answer: 'Le cout depend de la cause identifiee. Si c\'est un simple probleme de connecteur corrode, le nettoyage peut etre gratuit ou couter moins de 20 euros. Le remplacement du capteur seul revient a 50-130 euros plus 30-60 euros de main d\'oeuvre. Une reparation du faisceau electrique coute 80-200 euros selon l\'etendue des degats. Si le probleme vient du turbocompresseur, les couts sont nettement plus eleves : 500-2000 euros pour un remplacement de turbo. En moyenne, pour un probleme de capteur ou de cablage, comptez 100-250 euros tout compris. Le diagnostic initial coute generalement 50-80 euros.'
      },
      {
        question: 'Le P0241 peut-il etre intermittent et disparaitre puis revenir?',
        answer: 'Oui, le P0241 peut etre intermittent, surtout quand la cause est un connecteur desserre, un fil partiellement coupe ou un capteur en fin de vie qui fonctionne par intermittence. Dans ce cas, le code peut apparaitre lors de certaines conditions (vibrations, temperature elevee, humidite) puis disparaitre temporairement. Un code intermittent est souvent stocke en memoire comme defaut "memorise" plutot que "present". Il est important de ne pas ignorer un code intermittent car il indique un probleme qui va s\'aggraver avec le temps. Le diagnostic doit inclure une inspection minutieuse du cablage et des connecteurs.'
      }
    ],
    relatedCodes: ['P0239', 'P0240', 'P0242', 'P0236', 'P0237']
  },
  P0242: {
    code: 'P0242',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0242 indique que le signal du capteur de pression de suralimentation B est trop eleve, c'est-a-dire que la tension de sortie depasse le seuil maximum programme dans le calculateur moteur. Ce code est le complementaire du P0241 (signal trop bas) et peut indiquer un court-circuit au positif dans le cablage, un capteur defectueux delivrant une tension excessive, ou une pression de suralimentation reellement trop elevee dans le circuit. Sur les systemes biturbo, ce capteur surveille la pression au niveau du deuxieme etage de suralimentation. Une pression excessive non controlee peut entrainer des degats mecaniques importants sur le moteur, rendant ce code potentiellement plus grave qu'un signal trop bas.",
    symptoms: [
      'Voyant moteur allume avec passage immediat en mode degrade',
      'Limitation de puissance severe pour proteger le moteur',
      'Possible suralimentation excessive avant la mise en mode degrade',
      'Bruit de sifflement aigu anormal du turbo',
      'Fumee blanche ou noire excessive a l\'echappement',
      'A-coups et irregularites moteur lors des accelerations',
      'Vibrations inhabituelles dans le compartiment moteur'
    ],
    causes: [
      'Court-circuit au positif dans le cablage du capteur B (25%)',
      'Capteur de pression B defectueux avec signal bloque au maximum (25%)',
      'Wastegate ou soupape de decharge bloquee en position fermee (20%)',
      'Electrovalve de regulation de pression defaillante (10%)',
      'Pression de suralimentation reellement excessive due a un dysfonctionnement du turbo (10%)',
      'Connecteur du capteur endommage ou mal branche (5%)',
      'Durite de reference de pression du capteur obstruee (3%)',
      'Probleme de masse electrique provoquant un decalage du signal (2%)'
    ],
    solutions: [
      'Verifier le cablage du capteur B pour detecter un court-circuit au positif (diagnostic 30-60 euros)',
      'Mesurer le signal de sortie du capteur avec un multimetre (diagnostic inclus)',
      'Remplacer le capteur de pression B si le signal est anormalement eleve (50-130 euros)',
      'Controler et nettoyer ou remplacer la wastegate (150-400 euros)',
      'Tester l\'electrovalve de regulation de pression et la remplacer si defaillante (60-150 euros)',
      'Reparer le faisceau electrique si un court-circuit est trouve (80-200 euros)',
      'Verifier le fonctionnement mecanique du turbocompresseur (diagnostic 100-200 euros)',
      'Inspecter la durite de reference de pression du capteur et la deboucher si necessaire (20-50 euros)'
    ],
    riskExplanation: "Un code P0242 doit etre pris au serieux car il peut indiquer une suralimentation excessive reelle qui met le moteur en danger. Une pression de suralimentation trop elevee peut provoquer des detonations (cliquetis), endommager les pistons, perforer les joints de culasse, ou detruire le turbocompresseur lui-meme. Le mode degrade protege le moteur en limitant la puissance, mais si la cause est mecanique (wastegate bloquee), le probleme peut s'aggraver brusquement. Il est recommande de faire diagnostiquer ce code dans les plus brefs delais, idealement sous 48 heures.",
    faq: [
      {
        question: 'Le P0242 est-il plus grave que le P0241?',
        answer: 'Potentiellement oui. Le P0241 (signal trop bas) entraine generalement une perte de puissance car le calculateur ne voit pas assez de pression et limite le turbo. Le P0242 (signal trop haut) peut indiquer une suralimentation excessive reelle, ce qui pose un risque mecanique direct pour le moteur. Une pression de suralimentation trop elevee peut casser des pistons, perforer des joints de culasse ou detruire le turbo. Le mode degrade intervient pour proteger le moteur, mais si la cause est mecanique (wastegate bloquee), la protection peut ne pas etre suffisante dans certaines situations. C\'est pourquoi le P0242 necessite un diagnostic plus urgent.'
      },
      {
        question: 'Comment savoir si la suralimentation est reellement excessive?',
        answer: 'Pour determiner si la pression de suralimentation est reellement trop elevee ou si c\'est juste un probleme de capteur, il faut effectuer une mesure physique de la pression. Branchez un manometre sur le circuit de suralimentation et comparez la pression mesuree avec les specifications du constructeur et les valeurs affichees par les capteurs A et B. Si le manometre confirme une pression excessive mais que le capteur A donne une valeur normale, c\'est la wastegate ou la regulation qui est en cause. Si le manometre donne une pression normale mais que le capteur B indique une valeur haute, c\'est le capteur ou son circuit electrique.'
      },
      {
        question: 'La wastegate peut-elle se bloquer et comment la verifier?',
        answer: 'Oui, la wastegate (soupape de decharge du turbo) peut se bloquer en position fermee a cause de la corrosion, de l\'accumulation de suie, ou d\'un ressort fatigue. Pour la verifier, localisez l\'actionneur de la wastegate sur le turbo (generalement un petit cylindre avec une tige). Avec le moteur eteint, essayez de bouger la tige manuellement : elle doit se deplacer librement sur quelques millimetres. Si elle est grippee, essayez de la decoller avec du decoincant. Vous pouvez aussi appliquer de la depression avec une pompe a vide sur l\'actionneur : la tige doit bouger. Si elle ne bouge pas, la wastegate est bloquee et doit etre nettoyee ou remplacee.'
      },
      {
        question: 'Puis-je rouler en toute securite en mode degrade avec un P0242?',
        answer: 'En mode degrade, le calculateur limite la puissance et la pression de suralimentation pour proteger le moteur, donc oui, vous pouvez rouler prudemment jusqu\'au garage. Cependant, evitez les longs trajets, les autoroutes et les fortes accelerations. Le mode degrade reduit significativement les performances du vehicule, rendant les depassements et les insertions dangereux. Si vous remarquez des bruits anormaux, des fumees excessives ou des vibrations inhabituelles, arretez le vehicule et faites-le remorquer. La prudence est de mise car une wastegate bloquee peut entrainer des pics de pression soudains.'
      },
      {
        question: 'Faut-il remplacer le turbo complet pour un P0242?',
        answer: 'Non, dans la majorite des cas, le remplacement du turbo complet n\'est pas necessaire pour un P0242. Les causes les plus frequentes sont le capteur de pression (50-130 euros), le cablage (80-200 euros) ou la wastegate (150-400 euros pour nettoyage ou remplacement de l\'actionneur). Le turbo lui-meme n\'est en cause que dans environ 10% des cas, et meme alors, il est parfois possible de remplacer uniquement la wastegate ou l\'actionneur sans changer tout le turbo. Un diagnostic precis par un professionnel evite des reparations inutiles et couteuses. Ne laissez jamais un garagiste vous vendre un turbo complet sans avoir elimine les causes les plus simples.'
      }
    ],
    relatedCodes: ['P0239', 'P0240', 'P0241', 'P0234', 'P0299']
  },
  P0243: {
    code: 'P0243',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0243 signale un dysfonctionnement de l'electrovalve de commande de la wastegate du turbocompresseur (solenoid A). Cette electrovalve controle la pression de suralimentation en modulant l'ouverture de la wastegate, qui est la soupape de decharge permettant de limiter la pression maximale du turbo. Lorsque le calculateur moteur detecte que l'electrovalve ne repond pas correctement a ses commandes, il enregistre ce code defaut. L'electrovalve fonctionne en general par modulation de largeur d'impulsion (PWM), et le calculateur surveille en permanence la coherence entre la commande envoyee et la pression de suralimentation mesuree. Un dysfonctionnement de cette valve est une cause frequente de problemes de suralimentation sur les vehicules turbo.",
    symptoms: [
      'Voyant moteur allume avec possible limitation de puissance',
      'Suralimentation irreguliere avec des variations de poussee du turbo',
      'Perte de puissance notable surtout a haut regime',
      'Sifflement anormal ou inhabituel du turbo',
      'Fumee noire excessive lors des fortes accelerations',
      'A-coups moteur en charge et accelerations saccadees',
      'Surconsommation de carburant de 10 a 20%'
    ],
    causes: [
      'Electrovalve de wastegate usee ou grippee (35%)',
      'Probleme de cablage ou de connecteur de l\'electrovalve (20%)',
      'Conduit de depression entre l\'electrovalve et la wastegate bouche ou fissure (15%)',
      'Actionneur de wastegate mecanique bloque ou fatigue (15%)',
      'Fuite de depression dans le circuit de commande (5%)',
      'Calculateur moteur delivrant un signal de commande errone (5%)',
      'Corrosion des connexions electriques de l\'electrovalve (3%)',
      'Electrovalve inadaptee apres remplacement par une piece non conforme (2%)'
    ],
    solutions: [
      'Tester le fonctionnement de l\'electrovalve avec un multimetre (resistance typique 20-40 ohms) (diagnostic 30-60 euros)',
      'Verifier le cablage et le connecteur de l\'electrovalve (gratuit a 20 euros)',
      'Remplacer l\'electrovalve de wastegate si defaillante (40-120 euros)',
      'Inspecter et remplacer les conduits de depression entre l\'electrovalve et la wastegate (20-60 euros)',
      'Controler le fonctionnement mecanique de la wastegate (inclus dans le diagnostic)',
      'Nettoyer l\'electrovalve si elle est simplement encrassee (gratuit a 15 euros)',
      'Verifier l\'etancheite du circuit de depression avec une pompe a vide (diagnostic 50-80 euros)',
      'Effectuer un test d\'activation de l\'electrovalve avec la valise OBD (diagnostic inclus)'
    ],
    riskExplanation: "L'electrovalve de wastegate est un composant essentiel pour la regulation de la pression de suralimentation. Si elle reste bloquee en position ouverte, le turbo ne montera jamais en pression (perte de puissance majeure). Si elle reste bloquee en position fermee, la pression de suralimentation peut devenir excessive et endommager le moteur (detonation, joint de culasse, pistons). Le risque est modere car le calculateur dispose de mesures de protection, mais ces protections ne sont pas infaillibles. Un diagnostic rapide est recommande sous une semaine.",
    faq: [
      {
        question: 'Comment fonctionne l\'electrovalve de wastegate?',
        answer: 'L\'electrovalve de wastegate est un solenoid electromagnetique qui controle le passage de la depression ou de la pression vers l\'actionneur de la wastegate. Le calculateur envoie un signal PWM (modulation de largeur d\'impulsion) pour ouvrir plus ou moins la valve. Quand la valve est fermee, la depression n\'atteint pas l\'actionneur et la wastegate reste fermee, permettant au turbo de monter en pression. Quand la valve est ouverte, la depression actionne la wastegate qui s\'ouvre pour limiter la pression. En modulant le signal, le calculateur peut reguler finement la pression de suralimentation a chaque instant.'
      },
      {
        question: 'Peut-on nettoyer l\'electrovalve au lieu de la remplacer?',
        answer: 'Oui, dans certains cas l\'electrovalve peut etre nettoyee. Si elle est simplement encrassee par des residus d\'huile ou de suie (frequemment sur les moteurs diesel), un nettoyage avec un spray nettoyant frein ou un nettoyant carburateur peut la debloquer. Demontez l\'electrovalve, pulverisez le nettoyant dans les orifices et laissez agir quelques minutes. Soufflez avec de l\'air comprime pour evacuer les residus. Testez ensuite en appliquant 12V directement sur les bornes : vous devez entendre un clic et la valve doit s\'ouvrir et se fermer. Si elle ne reagit pas apres nettoyage, elle doit etre remplacee.'
      },
      {
        question: 'Le P0243 peut-il causer des degats au turbo?',
        answer: 'Oui, indirectement. Si l\'electrovalve est bloquee en position fermee et que la wastegate ne peut pas s\'ouvrir, la pression de suralimentation peut devenir excessive. Cela soumet le turbo a des temperatures et des vitesses de rotation superieures a ses limites de conception, ce qui peut user prematuritement les paliers, endommager les ailettes ou meme casser l\'axe du turbo. De plus, une suralimentation excessive augmente la contre-pression des gaz d\'echappement, ce qui accelere l\'usure du collecteur d\'echappement et du turbo. Un diagnostic rapide est donc important pour eviter des reparations couteuses.'
      },
      {
        question: 'Ou se trouve l\'electrovalve de wastegate sur le moteur?',
        answer: 'L\'electrovalve de wastegate est generalement situee sur ou a proximite du turbocompresseur, souvent fixee au collecteur d\'admission ou sur un support metallique pres du turbo. Elle est connectee par des conduits de depression (petits tuyaux en caoutchouc ou silicone) a l\'actionneur de la wastegate d\'un cote et a une source de depression (collecteur d\'admission ou pompe a vide) de l\'autre. Elle est reconnaissable par son connecteur electrique a deux ou trois fils et ses raccords pour les conduits de depression. Consultez le manuel technique de votre vehicule pour la localisation exacte.'
      },
      {
        question: 'Le remplacement de l\'electrovalve est-il a la portee d\'un bricoleur?',
        answer: 'Oui, le remplacement de l\'electrovalve de wastegate est une operation relativement simple. L\'electrovalve est generalement fixee par une ou deux vis et reliee par un connecteur electrique et deux conduits de depression. L\'operation prend 30 minutes a 1 heure. Les etapes sont : debrancher le connecteur electrique, retirer les conduits de depression (reperer leur position), devisser l\'electrovalve, installer la nouvelle en respectant l\'orientation des conduits, rebrancher le connecteur et les conduits. N\'oubliez pas d\'effacer le code defaut avec une valise OBD apres le remplacement. Le cout de la piece est de 40 a 120 euros selon le constructeur.'
      }
    ],
    relatedCodes: ['P0244', 'P0245', 'P0234', 'P0299', 'P0236']
  },
  P0244: {
    code: 'P0244',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0244 indique un probleme de plage ou de performance de l'electrovalve de commande de la wastegate du turbocompresseur (solenoid A). Contrairement au P0243 qui signale un dysfonctionnement general du circuit, le P0244 est plus specifique : le calculateur detecte que la reponse de l'electrovalve ne correspond pas a la commande envoyee. En d'autres termes, l'electrovalve fonctionne electriquement mais la pression de suralimentation ne reagit pas comme prevu. Cela peut indiquer une electrovalve partiellement grippee, un conduit de depression bouche, ou un probleme mecanique de la wastegate elle-meme. Ce code est souvent associe a d'autres codes de suralimentation et necessite un diagnostic approfondi.",
    symptoms: [
      'Voyant moteur allume avec performances moteur degradees',
      'Suralimentation qui ne correspond pas aux attentes (trop haute ou trop basse)',
      'Temps de reponse du turbo anormalement long',
      'Oscillations de la pression de suralimentation perceptibles en conduite',
      'Perte de puissance progressive au fil du temps',
      'A-coups moteur surtout lors des phases de transition de charge',
      'Fumee noire lors des accelerations franches'
    ],
    causes: [
      'Electrovalve partiellement grippee ne modulant plus correctement (30%)',
      'Conduits de depression entre electrovalve et wastegate deteriores ou bouches (20%)',
      'Actionneur de wastegate mecanique fatigue ou partiellement bloque (20%)',
      'Fuite de depression dans le circuit de commande (10%)',
      'Capteur de pression de suralimentation delivrant des valeurs imprecises (10%)',
      'Electrovalve de remplacement non conforme aux specifications (5%)',
      'Encrassement general du systeme de depression (3%)',
      'Probleme de signal de commande du calculateur (2%)'
    ],
    solutions: [
      'Effectuer un test d\'activation de l\'electrovalve avec la valise de diagnostic (diagnostic 50-80 euros)',
      'Verifier l\'etancheite des conduits de depression avec une pompe a vide (30-60 euros)',
      'Remplacer les conduits de depression s\'ils sont fissures ou deteriores (15-50 euros)',
      'Nettoyer ou remplacer l\'electrovalve de wastegate (40-120 euros)',
      'Controler le fonctionnement mecanique de l\'actionneur de wastegate (diagnostic inclus)',
      'Reparer ou remplacer l\'actionneur de wastegate si necessaire (100-300 euros)',
      'Verifier la coherence des capteurs de pression de suralimentation (diagnostic inclus)',
      'Inspecter l\'etancheite du circuit de suralimentation complet (50-100 euros)'
    ],
    riskExplanation: "Le code P0244 signifie que la regulation de la pression de suralimentation ne fonctionne pas correctement. Le turbo peut ne pas atteindre la pression optimale (perte de puissance et surconsommation) ou au contraire depasser la pression maximale autorisee (risque d'endommagement du moteur). Les oscillations de pression generent des contraintes mecaniques supplementaires sur le turbo et le circuit d'admission. A moyen terme, un manque de regulation peut provoquer une usure prematuree du turbocompresseur et des composants associes. Le diagnostic est recommande sous une a deux semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre les codes P0243 et P0244?',
        answer: 'Le code P0243 signale un dysfonctionnement electrique du circuit de l\'electrovalve (court-circuit, circuit ouvert, resistance anormale), tandis que le P0244 indique un probleme de performance : l\'electrovalve fonctionne electriquement mais ne produit pas l\'effet attendu sur la pression de suralimentation. Le P0243 oriente vers un diagnostic electrique (cablage, connecteur, bobine de l\'electrovalve), alors que le P0244 oriente vers un diagnostic mecanique (conduits de depression, actionneur de wastegate, etancheite du circuit). Les deux codes peuvent etre presents simultanement si le probleme est complexe.'
      },
      {
        question: 'Les oscillations de pression de suralimentation sont-elles dangereuses?',
        answer: 'Les oscillations de pression de suralimentation peuvent etre problematiques a plusieurs niveaux. Des variations rapides de pression generent des contraintes mecaniques sur les durites, les raccords et l\'intercooler, pouvant provoquer des fuites. Le turbo est egalement soumis a des accelerations et decelerations brusques qui usent ses paliers plus rapidement. Du point de vue de la conduite, les oscillations se manifestent par des a-coups desagreables et une puissance irreguliere. Ce n\'est pas directement dangereux pour le moteur car le calculateur limite la pression maximale, mais c\'est un symptome qui va s\'aggraver si l\'on n\'intervient pas.'
      },
      {
        question: 'Comment tester les conduits de depression du circuit de wastegate?',
        answer: 'Pour tester les conduits de depression, utilisez une pompe a vide manuelle (disponible pour 20-40 euros). Debranchez les conduits de l\'electrovalve et de l\'actionneur. Appliquez de la depression avec la pompe a chaque extremite des conduits : la depression doit se maintenir sans chute pendant au moins 30 secondes. Si elle chute rapidement, le conduit est fissure ou percee. Inspectez visuellement les conduits sur toute leur longueur en les pliant legerement pour reveler les fissures. Les conduits en caoutchouc durcissent et se fissurent avec l\'age et la chaleur du moteur. Remplacez-les par des conduits en silicone pour une meilleure durabilite.'
      },
      {
        question: 'Le P0244 peut-il etre cause par une reprogrammation moteur?',
        answer: 'Oui, une reprogrammation moteur (chiptuning) qui modifie les parametres de suralimentation peut provoquer un code P0244 si les nouvelles cibles de pression depassent les capacites de l\'electrovalve et de la wastegate d\'origine. Le calculateur voit que la pression obtenue ne correspond pas a ses commandes et enregistre le defaut. Dans ce cas, il faut soit adapter la cartographie pour respecter les limites mecaniques des composants d\'origine, soit installer des composants plus performants (electrovalve renforcee, actuateur de wastegate modifie). Un preparateur competent saura harmoniser l\'ensemble du systeme.'
      },
      {
        question: 'Est-il possible que le P0244 soit cause par un probleme de turbo?',
        answer: 'Oui, un turbocompresseur use peut provoquer un code P0244. Si les paliers du turbo sont uses, la roue de turbine peut osciller et provoquer des variations de pression irregulieres que l\'electrovalve ne peut pas compenser. Un jeu axial excessif du turbo (plus de 0,05mm) ou un jeu radial important (plus de 0,1mm) affecte la capacite du turbo a maintenir une pression stable. De meme, des ailettes endommagees ou un turbo a geometrie variable grippee peuvent empecher le systeme de reguler correctement la pression, declenchant le P0244. Un diagnostic complet du turbo (jeux, ailettes, lubrification) est recommande si les causes plus simples sont ecartees.'
      }
    ],
    relatedCodes: ['P0243', 'P0234', 'P0299', 'P0235', 'P0236']
  },
  P0245: {
    code: 'P0245',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0245 signale un probleme dans le circuit de l'electrovalve de commande de la wastegate du turbocompresseur avec un signal trop bas (circuit bas). Ce code indique que le calculateur moteur detecte une tension ou un courant inferieur au seuil minimal attendu sur le circuit de commande de l'electrovalve. Cela peut etre du a un circuit ouvert, un court-circuit a la masse, une bobine d'electrovalve coupee, ou un probleme de cablage. L'electrovalve de wastegate est un composant electromagnetique qui controle la pression de suralimentation en modulant l'ouverture de la soupape de decharge du turbo. Sans commande adequate, la pression de suralimentation ne peut pas etre regulee correctement.",
    symptoms: [
      'Voyant moteur allume avec code P0245 enregistre',
      'Suralimentation non regulee (generalement pression maximale non atteinte)',
      'Perte de puissance significative en acceleration',
      'Turbo qui ne semble pas fonctionner ou reponse tres lente',
      'Mode degrade active avec limitation de puissance',
      'Consommation de carburant augmentee',
      'Fumee noire a l\'echappement en forte charge'
    ],
    causes: [
      'Bobine de l\'electrovalve coupee ou en court-circuit interne (30%)',
      'Circuit ouvert dans le cablage entre calculateur et electrovalve (25%)',
      'Court-circuit a la masse du fil de commande (15%)',
      'Connecteur de l\'electrovalve desserre, corrode ou casse (15%)',
      'Fusible de protection du circuit grille (5%)',
      'Probleme au niveau du driver de sortie du calculateur (5%)',
      'Mauvaise masse electrique du circuit (3%)',
      'Electrovalve inadaptee montee lors d\'une reparation precedente (2%)'
    ],
    solutions: [
      'Mesurer la resistance de la bobine de l\'electrovalve (20-40 ohms typiquement) (diagnostic 30-50 euros)',
      'Verifier la continuite du cablage entre le calculateur et l\'electrovalve (diagnostic inclus)',
      'Inspecter et nettoyer le connecteur de l\'electrovalve (gratuit a 15 euros)',
      'Remplacer l\'electrovalve si la bobine est coupee (40-120 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier et remplacer le fusible du circuit si necessaire (2-5 euros)',
      'Controler les masses electriques du circuit de commande (diagnostic inclus)',
      'Tester le driver de sortie du calculateur avec un oscilloscope (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un circuit bas sur l'electrovalve de wastegate signifie que le calculateur ne peut pas commander la regulation de pression du turbo. Sans cette commande, la wastegate reste dans sa position par defaut (generalement ouverte par le ressort), ce qui limite la pression de suralimentation et reduit significativement les performances. Le moteur n'est pas en danger immediat car la pression reste basse, mais les performances sont tres degradees. A long terme, rouler en mode degrade avec une suralimentation insuffisante peut encrasser le moteur et le systeme de depollution. Un diagnostic sous deux semaines est recommande.",
    faq: [
      {
        question: 'Comment mesurer la resistance de l\'electrovalve de wastegate?',
        answer: 'Pour mesurer la resistance de la bobine de l\'electrovalve, debranchez le connecteur electrique de l\'electrovalve et reglez votre multimetre sur la fonction ohmmetre (resistance). Placez les pointes de mesure sur les deux bornes du connecteur de l\'electrovalve. La resistance typique est de 20 a 40 ohms pour la plupart des electrovalves de wastegate, mais consultez les specifications de votre constructeur. Une resistance infinie (OL sur le multimetre) indique une bobine coupee. Une resistance proche de 0 ohm indique un court-circuit interne. Dans les deux cas, l\'electrovalve doit etre remplacee.'
      },
      {
        question: 'Le P0245 peut-il etre cause par un probleme de fusible?',
        answer: 'Oui, bien que ce soit une cause moins frequente (environ 5% des cas). L\'electrovalve de wastegate est protegee par un fusible dans la boite a fusibles, souvent partage avec d\'autres composants du circuit de suralimentation. Si ce fusible est grille, l\'electrovalve ne recoit plus d\'alimentation et le calculateur detecte un signal trop bas. Verifiez le fusible correspondant dans la documentation de votre vehicule. Si le fusible est grille, remplacez-le et cherchez la cause du court-circuit qui l\'a fait sauter, car un fusible ne grille pas sans raison. Un fusible qui grille a repetition indique un court-circuit dans le circuit.'
      },
      {
        question: 'Quelle est la difference entre P0245 et P0246?',
        answer: 'Le P0245 indique un signal trop bas (circuit bas) sur le circuit de l\'electrovalve de wastegate, ce qui correspond generalement a un circuit ouvert, une bobine coupee ou un court-circuit a la masse. Le P0246 indique au contraire un signal trop haut (circuit haut), correspondant a un court-circuit au positif ou un probleme de retour de tension. Les symptomes peuvent etre similaires car dans les deux cas l\'electrovalve ne fonctionne pas correctement, mais les causes et le diagnostic different. Le P0245 oriente vers des ruptures de circuit, le P0246 vers des courts-circuits au positif.'
      },
      {
        question: 'Un probleme de masse peut-il causer un P0245?',
        answer: 'Oui, un probleme de masse electrique peut tout a fait provoquer un code P0245. Si la connexion de masse de l\'electrovalve est deterioree (corrosion, fil coupe, mauvais contact), le circuit ne peut pas se fermer correctement et le calculateur detecte un signal trop bas. Les masses sont souvent boulonnees sur le bloc moteur ou le chassis, et avec le temps, la corrosion ou les vibrations peuvent deteriorer le contact. Pour diagnostiquer, verifiez la resistance entre la borne de masse de l\'electrovalve et une bonne masse du vehicule : elle doit etre inferieure a 0,5 ohm. Nettoyez et resserrez les connexions de masse si necessaire.'
      },
      {
        question: 'Le P0245 peut-il apparaitre apres un remplacement de turbo?',
        answer: 'Oui, c\'est une situation relativement courante. Lors du remplacement d\'un turbocompresseur, le mecanicien peut accidentellement endommager le cablage de l\'electrovalve, mal rebrancher le connecteur, ou oublier de rebrancher l\'electrovalve. De plus, si le nouveau turbo est equipe d\'une electrovalve differente de l\'originale, les caracteristiques electriques peuvent ne pas correspondre. Apres tout remplacement de turbo, il est important de verifier le bon fonctionnement de l\'electrovalve de wastegate, de son cablage et de ses conduits de depression. Un essai routier avec lecture des parametres OBD permet de confirmer le bon fonctionnement.'
      }
    ],
    relatedCodes: ['P0243', 'P0244', 'P0246', 'P0234', 'P0299']
  },
  P0246: {
    code: 'P0246',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0246 indique un signal trop eleve (circuit haut) sur le circuit de l'electrovalve de commande de la wastegate du turbocompresseur. Le calculateur moteur detecte que la tension sur le circuit de commande de l'electrovalve depasse le seuil maximum attendu. Ce code est le complementaire du P0245 (circuit bas) et peut indiquer un court-circuit au positif dans le cablage, un probleme dans le driver du calculateur, ou une defaillance interne de l'electrovalve. Lorsque ce defaut est present, le calculateur ne peut pas commander correctement l'electrovalve et la regulation de la pression de suralimentation est compromise. Le vehicule passe generalement en mode degrade pour proteger le moteur.",
    symptoms: [
      'Voyant moteur allume et vehicule en mode degrade',
      'Suralimentation non regulee ou excessive dans certains cas',
      'Perte de puissance due au mode degrade',
      'Possible suralimentation excessive avant activation du mode degrade',
      'Sifflement anormal du turbocompresseur',
      'A-coups moteur lors des changements de charge',
      'Fumee a l\'echappement lors des fortes accelerations'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'electrovalve (30%)',
      'Defaillance du driver de sortie dans le calculateur moteur (20%)',
      'Electrovalve en court-circuit interne (bobine vers masse) (20%)',
      'Connecteur endommage avec contact entre broches (10%)',
      'Probleme de relais ou fusible provoquant un retour de tension (10%)',
      'Faisceau electrique endommage par frottement ou chaleur (5%)',
      'Mauvais branchement apres une reparation precedente (3%)',
      'Interference electromagnetique affectant le signal de commande (2%)'
    ],
    solutions: [
      'Mesurer la tension sur le circuit de l\'electrovalve moteur eteint et en fonctionnement (diagnostic 30-60 euros)',
      'Inspecter le cablage pour detecter un court-circuit au positif (diagnostic inclus)',
      'Verifier l\'isolement du faisceau electrique (pas de fils denudes ou fondus) (gratuit a 20 euros)',
      'Remplacer l\'electrovalve si elle est en court-circuit interne (40-120 euros)',
      'Reparer le faisceau electrique si un court-circuit est identifie (80-200 euros)',
      'Tester le driver de sortie du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le connecteur de l\'electrovalve pour des broches tordues ou de la corrosion (gratuit a 15 euros)',
      'Faire reprogrammer ou remplacer le calculateur si le driver est defaillant (300-800 euros)'
    ],
    riskExplanation: "Un signal trop haut sur l'electrovalve de wastegate peut avoir des consequences potentiellement graves. Si l'electrovalve est bloquee en position alimentee, elle peut maintenir la wastegate fermee, permettant une suralimentation excessive qui peut endommager le moteur. Le mode degrade intervient pour limiter ce risque, mais il ne peut pas toujours reagir assez rapidement lors d'accelerations brusques. De plus, un court-circuit dans le cablage peut endommager le driver de sortie du calculateur, transformant un probleme simple en reparation couteuse. Un diagnostic rapide sous une semaine est recommande.",
    faq: [
      {
        question: 'Un court-circuit au positif peut-il endommager le calculateur?',
        answer: 'Oui, c\'est l\'un des risques majeurs d\'un code P0246. Le driver de sortie du calculateur qui commande l\'electrovalve est un transistor electronique concu pour supporter un certain courant. Si un court-circuit au positif envoie une tension elevee vers le calculateur via le fil de commande, le transistor peut etre endommage. C\'est pourquoi il est important de diagnostiquer rapidement un P0246 : plus longtemps le court-circuit persiste, plus le risque d\'endommager le calculateur augmente. Si le calculateur est deja endommage, la reparation coute entre 300 et 800 euros, voire plus selon le vehicule.'
      },
      {
        question: 'Comment detecter un court-circuit au positif dans le cablage?',
        answer: 'Pour detecter un court-circuit au positif, debranchez le connecteur de l\'electrovalve et le connecteur du calculateur. Avec un multimetre regle en voltmetre, mesurez la tension sur le fil de commande de l\'electrovalve cote cablage. Si vous mesurez une tension (12V ou autre) alors que rien ne devrait etre alimente, il y a un court-circuit au positif. Le fil touche probablement un autre fil sous tension ou une source d\'alimentation. Suivez le trajet du faisceau et inspectez visuellement les zones de frottement, les passages de cloison et les zones de chaleur ou l\'isolant peut avoir fondu. Un testeur de continuite aide a localiser le point de contact.'
      },
      {
        question: 'Le P0246 peut-il etre cause par l\'humidite?',
        answer: 'Oui, l\'humidite est une cause frequente de problemes electriques sur les circuits de l\'electrovalve de wastegate, surtout dans les regions humides ou apres un passage en zone inondee. L\'eau qui s\'infiltre dans le connecteur de l\'electrovalve peut creer un chemin conducteur entre les broches, simulant un court-circuit. La condensation a l\'interieur du faisceau electrique peut egalement provoquer des ponts electriques. Pour prevenir ce probleme, assurez-vous que les connecteurs sont bien etanches et que les joints toriques sont en bon etat. En cas d\'infiltration, sechez le connecteur avec de l\'air comprime et appliquez de la graisse dielectrique.'
      },
      {
        question: 'Faut-il remplacer le calculateur moteur si le driver est endommage?',
        answer: 'Pas necessairement. Certains specialistes en electronique automobile peuvent reparer les drivers de sortie endommages dans le calculateur, ce qui coute nettement moins cher qu\'un remplacement complet. La reparation electronique coute generalement 150-300 euros contre 500-1500 euros pour un calculateur neuf ou reconditionne. Cependant, il faut d\'abord s\'assurer que la cause du court-circuit est reparee avant de reparer ou remplacer le calculateur, sinon le nouveau driver sera endommage a son tour. Cherchez un specialiste en electronique automobile plutot qu\'un garage generaliste pour ce type de reparation.'
      },
      {
        question: 'Le P0246 est-il specifique a certaines marques de vehicules?',
        answer: 'Le code P0246 est un code OBD generique qui peut apparaitre sur toute marque et tout modele equipe d\'un turbocompresseur avec electrovalve de wastegate. Cependant, certaines marques sont plus sujettes a ce code en raison de la conception de leur systeme de suralimentation. Les vehicules Volkswagen/Audi TDI, les Renault dCi, les Peugeot/Citroen HDi et les BMW diesel sont frequemment concernes car leurs electrovalves sont exposees a la chaleur du turbo et aux vibrations du moteur. Chaque constructeur peut avoir des seuils de detection et des procedures de diagnostic legerement differents, donc consultez toujours la documentation specifique a votre vehicule.'
      }
    ],
    relatedCodes: ['P0243', 'P0244', 'P0245', 'P0234', 'P0299']
  },
  P0247: {
    code: 'P0247',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0247 concerne le dysfonctionnement du circuit de l'electrovalve de commande de la wastegate B du turbocompresseur. Ce deuxieme solenoid (B) est present sur les vehicules equipes de systemes biturbo, de turbocompresseurs a geometrie variable avec double commande, ou de systemes de suralimentation a deux etages. L'electrovalve B controle la pression de suralimentation sur le deuxieme etage ou sur le deuxieme turbocompresseur, permettant une regulation plus fine et une meilleure repartition de la puissance sur toute la plage de regimes. Lorsque le calculateur detecte un dysfonctionnement de ce circuit, les performances du systeme biturbo sont compromises et le vehicule peut passer en mode degrade.",
    symptoms: [
      'Voyant moteur allume avec code defaut enregistre',
      'Perte de puissance dans les hauts regimes (zone du deuxieme turbo)',
      'Transition entre les deux turbos hesitante ou absente',
      'Manque de suralimentation au-dessus de 2500-3000 tr/min',
      'A-coups lors du passage d\'un turbo a l\'autre',
      'Surconsommation de carburant de 10 a 15%',
      'Fumee noire lors des fortes sollicitations du moteur'
    ],
    causes: [
      'Electrovalve B usee ou grippee par la chaleur et les vibrations (30%)',
      'Probleme de cablage specifique au circuit de l\'electrovalve B (25%)',
      'Connecteur de l\'electrovalve B corrode ou desserre (15%)',
      'Conduits de depression du circuit B bouches ou fissures (10%)',
      'Actionneur du deuxieme turbo ou de la geometrie variable bloque (10%)',
      'Bobine de l\'electrovalve B coupee ou en court-circuit (5%)',
      'Fusible du circuit B grille (3%)',
      'Probleme de calculateur sur la sortie de commande B (2%)'
    ],
    solutions: [
      'Tester la resistance de la bobine de l\'electrovalve B (20-40 ohms typiquement) (diagnostic 30-60 euros)',
      'Verifier le cablage et le connecteur de l\'electrovalve B (gratuit a 20 euros)',
      'Remplacer l\'electrovalve B si elle est defaillante (40-130 euros)',
      'Inspecter et remplacer les conduits de depression du circuit B (15-50 euros)',
      'Controler le fonctionnement du deuxieme turbo ou de la geometrie variable (diagnostic 100-200 euros)',
      'Reparer le faisceau electrique si un defaut de cablage est detecte (80-200 euros)',
      'Verifier et remplacer le fusible du circuit si grille (2-5 euros)',
      'Nettoyer l\'electrovalve B si elle est encrassee (gratuit a 15 euros)'
    ],
    riskExplanation: "Le dysfonctionnement de l'electrovalve B affecte la capacite du systeme biturbo a fournir la pleine puissance dans les hauts regimes. Sans la regulation du deuxieme etage de suralimentation, le moteur perd une partie importante de ses performances et consomme plus de carburant. Sur les turbocompresseurs a geometrie variable, un blocage de la commande peut provoquer une suralimentation excessive ou insuffisante. Le risque principal est une usure acceleree du systeme de suralimentation et une degradation des performances. Un diagnostic sous deux semaines est recommande.",
    faq: [
      {
        question: 'Qu\'est-ce que l\'electrovalve B et en quoi differe-t-elle de l\'electrovalve A?',
        answer: 'L\'electrovalve A controle la wastegate ou la geometrie variable du premier turbocompresseur (ou de l\'etage basse pression), tandis que l\'electrovalve B controle le deuxieme turbocompresseur (etage haute pression) ou un autre mecanisme de regulation de la suralimentation. Sur un systeme biturbo, l\'electrovalve A gere le petit turbo qui fournit de la suralimentation a bas regime, et l\'electrovalve B gere le gros turbo qui prend le relais a haut regime. Les deux electrovalves sont independantes electriquement mais travaillent en coordination via le calculateur moteur. Le P0247 concerne specifiquement l\'electrovalve B.'
      },
      {
        question: 'Le P0247 affecte-t-il uniquement les hauts regimes?',
        answer: 'En general oui, car l\'electrovalve B controle le deuxieme etage de suralimentation qui intervient principalement dans les hauts regimes (au-dessus de 2500-3500 tr/min selon les vehicules). A bas regime, c\'est l\'electrovalve A et le premier turbo qui travaillent, donc le P0247 n\'a pas d\'impact. Cependant, sur certains systemes a geometrie variable, l\'electrovalve B peut intervenir sur toute la plage de regimes pour affiner la regulation, et dans ce cas la perte de performances peut etre ressentie a tous les regimes. C\'est pourquoi un diagnostic precis est necessaire pour comprendre l\'impact reel du defaut.'
      },
      {
        question: 'Peut-on rouler sans danger avec un seul turbo fonctionnel sur un biturbo?',
        answer: 'Oui, vous pouvez rouler en toute securite avec un seul turbo fonctionnel, mais les performances seront significativement reduites. Le premier turbo continuera a fournir de la suralimentation a bas regime, mais vous constaterez un manque de puissance flagrant au-dessus de 2500-3000 tr/min. Le vehicule sera capable de rouler normalement en ville et sur route, mais les accelerations, les depassements et les montees seront laborieux. Evitez les situations necessitant la pleine puissance (autoroute, montagne) et faites reparer dans un delai raisonnable. Le mode degrade protege le moteur de tout dommage.'
      },
      {
        question: 'Le remplacement de l\'electrovalve B est-il accessible a un bricoleur?',
        answer: 'Le remplacement de l\'electrovalve B peut etre plus complexe que celui de l\'electrovalve A, car elle est souvent situee dans un emplacement moins accessible pres du deuxieme turbocompresseur. Sur certains vehicules, il faut demonter des elements du compartiment moteur pour y acceder. L\'operation elle-meme (debrancher le connecteur, retirer les conduits de depression, devisser l\'electrovalve) est simple, mais l\'acces peut necessiter 1 a 2 heures de travail. Un bricoleur experimente avec de bons outils peut le faire, mais prevoyez de consulter le manuel technique de votre vehicule pour la localisation exacte et les couples de serrage.'
      },
      {
        question: 'Le P0247 peut-il etre lie a un probleme d\'encrassement?',
        answer: 'Oui, l\'encrassement est une cause assez frequente du P0247, surtout sur les vehicules diesel. Les residus de suie et d\'huile peuvent s\'accumuler dans l\'electrovalve et ses conduits de depression, empechant un fonctionnement correct. Les trajets courts et urbains favorisent cet encrassement car le turbo ne monte pas suffisamment en temperature pour bruler ces residus. Un nettoyage de l\'electrovalve et de ses conduits peut parfois resoudre le probleme sans remplacement de pieces. Pour prevenir l\'encrassement, effectuez regulierement des trajets sur autoroute (30 minutes minimum) pour permettre au turbo de se decrasser naturellement.'
      }
    ],
    relatedCodes: ['P0243', 'P0244', 'P0248', 'P0249', 'P0299']
  },
  P0248: {
    code: 'P0248',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0248 signale un probleme de plage ou de performance de l'electrovalve de commande de la wastegate B du turbocompresseur. Ce code indique que l'electrovalve B fonctionne electriquement mais que la reponse en pression de suralimentation ne correspond pas aux attentes du calculateur. Autrement dit, la commande est envoyee correctement mais l'effet sur la pression de suralimentation du deuxieme etage est insuffisant, excessif ou irregulier. Ce code est specifique aux vehicules equipes de systemes biturbo ou a geometrie variable avec double commande. Il necessite un diagnostic approfondi pour determiner si le probleme vient de l'electrovalve elle-meme, des conduits de depression, ou d'un probleme mecanique du deuxieme turbocompresseur.",
    symptoms: [
      'Voyant moteur allume avec performances reduites',
      'Transition entre les deux turbos irreguliere ou incomplete',
      'Perte de puissance progressive dans les hauts regimes',
      'Oscillations de la pression de suralimentation',
      'Surconsommation de carburant notable',
      'Bruits inhabituels du systeme de suralimentation lors des changements de regime',
      'A-coups moteur lors des accelerations progressives'
    ],
    causes: [
      'Electrovalve B partiellement grippee ne repondant pas correctement aux commandes (30%)',
      'Conduits de depression du circuit B fissures ou bouches (20%)',
      'Actionneur du deuxieme turbo fatigue ou partiellement bloque (15%)',
      'Fuite dans le circuit de depression du deuxieme etage (10%)',
      'Mecanisme de geometrie variable du turbo encrasse ou grippee (10%)',
      'Capteur de pression delivrant des informations imprecises au calculateur (5%)',
      'Electrovalve B de remplacement non conforme aux specifications d\'origine (5%)',
      'Usure mecanique du deuxieme turbocompresseur (5%)'
    ],
    solutions: [
      'Effectuer un test d\'activation de l\'electrovalve B avec la valise OBD (diagnostic 50-80 euros)',
      'Verifier l\'etancheite des conduits de depression du circuit B (30-60 euros)',
      'Nettoyer ou remplacer l\'electrovalve B (40-130 euros)',
      'Controler le fonctionnement mecanique du deuxieme turbo (diagnostic 100-200 euros)',
      'Remplacer les conduits de depression deteriores (15-50 euros)',
      'Reparer ou remplacer l\'actionneur du deuxieme turbo si necessaire (150-400 euros)',
      'Nettoyer le mecanisme de geometrie variable si encrasse (150-300 euros)',
      'Verifier la coherence des capteurs de pression de suralimentation (diagnostic inclus)'
    ],
    riskExplanation: "Le code P0248 signifie que la regulation du deuxieme etage de suralimentation ne fonctionne pas de maniere optimale. Cela peut provoquer des variations de pression qui soumettent le systeme biturbo a des contraintes supplementaires, accelerant l'usure des composants. Si le probleme est un mecanisme de geometrie variable grippee, il peut se bloquer completement et provoquer une suralimentation excessive ou une perte totale de puissance. A moyen terme, l'absence de reparation peut conduire a la casse du turbocompresseur, une reparation beaucoup plus couteuse. Un diagnostic sous deux semaines est recommande.",
    faq: [
      {
        question: 'Le P0248 est-il different du P0247 et comment les distinguer?',
        answer: 'Oui, le P0247 signale un dysfonctionnement electrique du circuit de l\'electrovalve B (bobine coupee, court-circuit, connecteur), tandis que le P0248 signale un probleme de performance : l\'electrovalve fonctionne electriquement mais l\'effet sur la pression est incorrect. Le P0247 se diagnostique avec un multimetre (test de resistance de la bobine, verification du cablage), tandis que le P0248 necessite un diagnostic plus approfondi incluant un test de pression, une verification des conduits de depression et une inspection mecanique du turbo. Les deux codes orientent vers des causes et des reparations differentes.'
      },
      {
        question: 'Le mecanisme de geometrie variable peut-il causer un P0248?',
        answer: 'Oui, c\'est une cause frequente sur les turbocompresseurs a geometrie variable. Les ailettes mobiles a l\'interieur du turbo peuvent se gripper a cause de l\'accumulation de suie, de residus d\'huile brulee ou de la corrosion. Quand les ailettes ne bougent plus librement, l\'electrovalve B envoie bien la commande mais les ailettes ne repondent pas, ce qui declenche le P0248. Le nettoyage du mecanisme de geometrie variable (en demontant le turbo ou avec un produit specialise) peut resoudre le probleme dans 60% des cas. Si les ailettes sont trop abimees, il faut reconditionner ou remplacer le turbo.'
      },
      {
        question: 'Comment prevenir les problemes d\'electrovalve B sur un biturbo?',
        answer: 'La prevention passe par un entretien regulier et une utilisation adaptee du vehicule. Faites regulierement des trajets autoroutiers de 30 minutes minimum pour permettre au turbo de monter en temperature et de bruler les depots de suie. Utilisez une huile moteur de qualite conforme aux preconisations du constructeur. Changez l\'huile et le filtre regulierement car l\'huile sale encrasse le turbo. Evitez de couper le moteur immediatement apres une conduite sportive : laissez-le tourner au ralenti 1-2 minutes pour refroidir le turbo. Un nettoyage preventif du circuit de suralimentation tous les 50 000 km peut aussi aider.'
      },
      {
        question: 'Le P0248 affecte-t-il le controle technique?',
        answer: 'Oui, tout code defaut actif allumant le voyant moteur entraine un refus au controle technique. De plus, un systeme de suralimentation dysfonctionnel peut augmenter les emissions polluantes, ce qui peut causer un echec supplementaire au test de pollution. Avant de passer le controle technique, il faut reparer le probleme, effacer le code defaut et rouler suffisamment (50-100 km) pour que les moniteurs OBD completent leurs autotests. Si le code revient apres effacement, le probleme n\'est pas resolu et il faut poursuivre le diagnostic. Ne tentez pas de presenter le vehicule juste apres effacement du code.'
      },
      {
        question: 'Quel est le cout moyen de reparation d\'un P0248?',
        answer: 'Le cout varie selon la cause identifiee. Pour un simple remplacement de conduits de depression : 15-50 euros. Pour le remplacement de l\'electrovalve B : 40-130 euros de pieces plus 30-60 euros de main d\'oeuvre. Pour un nettoyage du mecanisme de geometrie variable : 150-300 euros. Pour un remplacement de l\'actionneur du turbo : 150-400 euros. Dans le pire des cas, si le turbocompresseur est endommage et doit etre remplace ou reconditionne : 800-2500 euros. Le diagnostic initial coute 50-100 euros et permet d\'identifier la cause exacte pour eviter des reparations inutiles. En moyenne, comptez 150-350 euros pour les cas les plus courants.'
      }
    ],
    relatedCodes: ['P0247', 'P0243', 'P0244', 'P0234', 'P0299']
  },
  P0249: {
    code: 'P0249',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0249 signale un signal trop bas sur le circuit de l'electrovalve de commande de la wastegate B du turbocompresseur. Ce code indique que la tension ou le courant mesure sur le circuit de commande de l'electrovalve B est inferieur au seuil minimum attendu par le calculateur moteur. Cela correspond generalement a un circuit ouvert, un court-circuit a la masse ou une bobine d'electrovalve coupee sur le circuit du deuxieme solenoid de wastegate. Ce code est specifique aux vehicules biturbo ou aux turbocompresseurs a double commande. L'absence de commande sur l'electrovalve B empeche la regulation du deuxieme etage de suralimentation et peut placer le vehicule en mode degrade.",
    symptoms: [
      'Voyant moteur allume avec perte de puissance dans les hauts regimes',
      'Deuxieme turbo inactif ou non regule',
      'Manque de puissance au-dessus de 2500-3000 tr/min',
      'Mode degrade active avec limitation severe des performances',
      'Transition entre les turbos absente ou tres brutale',
      'Surconsommation de carburant',
      'Fumee noire a l\'echappement lors des sollicitations importantes'
    ],
    causes: [
      'Bobine de l\'electrovalve B coupee (circuit ouvert interne) (30%)',
      'Circuit ouvert dans le faisceau electrique du solenoid B (25%)',
      'Court-circuit a la masse du fil de commande de l\'electrovalve B (15%)',
      'Connecteur de l\'electrovalve B corrode ou desserre (15%)',
      'Fusible du circuit de commande B grille (5%)',
      'Masse electrique du circuit B defaillante (5%)',
      'Driver de sortie du calculateur endommage sur le canal B (3%)',
      'Electrovalve B de remplacement avec specifications incorrectes (2%)'
    ],
    solutions: [
      'Mesurer la resistance de la bobine de l\'electrovalve B (20-40 ohms) (diagnostic 30-60 euros)',
      'Verifier la continuite du cablage du circuit B (diagnostic inclus)',
      'Inspecter et nettoyer le connecteur de l\'electrovalve B (gratuit a 15 euros)',
      'Remplacer l\'electrovalve B si la bobine est coupee (40-130 euros)',
      'Reparer le faisceau electrique en cas de rupture ou de court-circuit (80-200 euros)',
      'Verifier et remplacer le fusible du circuit si grille (2-5 euros)',
      'Controler les masses electriques du circuit B (diagnostic inclus)',
      'Tester le driver de sortie du calculateur si necessaire (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un signal trop bas sur l'electrovalve B signifie que le deuxieme etage de suralimentation n'est plus commande. Le vehicule continue de fonctionner sur le premier turbo mais perd une partie significative de sa puissance dans les hauts regimes. Le risque mecanique immediat est faible car le mode degrade protege le moteur, mais les performances reduites peuvent rendre la conduite dangereuse dans certaines situations (depassements, insertions autoroute). A long terme, un dysfonctionnement prolonge peut affecter le deuxieme turbo par manque de regulation. Diagnostic recommande sous deux semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre le P0245 et le P0249?',
        answer: 'Les codes P0245 et P0249 signalent tous les deux un signal trop bas (circuit bas) sur une electrovalve de wastegate, mais ils concernent des electrovalves differentes. Le P0245 concerne l\'electrovalve A (premier turbo ou turbo principal), tandis que le P0249 concerne l\'electrovalve B (deuxieme turbo ou deuxieme etage de suralimentation). Les symptomes et les procedures de diagnostic sont similaires, mais l\'emplacement des composants et l\'impact sur les performances different. Le P0245 affecte la suralimentation a tous les regimes, le P0249 principalement dans les hauts regimes.'
      },
      {
        question: 'Le vehicule peut-il rouler normalement avec seulement le premier turbo?',
        answer: 'Le vehicule peut rouler mais avec des performances significativement reduites. Le premier turbo fournit de la suralimentation a bas regime, permettant une conduite urbaine et routiere acceptable. Cependant, au-dessus de 2500-3000 tr/min, la ou le deuxieme turbo devrait prendre le relais, vous constaterez un plateau de puissance et une acceleration tres molle. Les depassements et les insertions sur autoroute seront laborieux et potentiellement dangereux. Pour une conduite quotidienne urbaine, c\'est acceptable a court terme. Pour des trajets autoroutiers ou en montagne, c\'est deconseille tant que la reparation n\'est pas effectuee.'
      },
      {
        question: 'Comment localiser l\'electrovalve B sur un moteur biturbo?',
        answer: 'L\'electrovalve B est generalement situee a proximite du deuxieme turbocompresseur, souvent sur le cote du collecteur d\'admission ou sur un support fixe pres du compartiment moteur superieur. Sur les systemes biturbo, le deuxieme turbo (haute pression) est souvent plus difficile d\'acces que le premier. L\'electrovalve B est reconnaissable par son connecteur electrique et ses deux raccords de conduits de depression. Consultez le schema du compartiment moteur dans le manuel technique de votre vehicule ou utilisez une base de donnees en ligne avec les emplacements specifiques a votre modele. Un garagiste specialise saura la localiser rapidement.'
      },
      {
        question: 'Un probleme de fusible peut-il causer un P0249?',
        answer: 'Oui, si le fusible protégeant le circuit de l\'electrovalve B est grille, l\'electrovalve ne recevra plus d\'alimentation et le calculateur detectera un signal trop bas. C\'est une cause simple mais souvent negligee. Verifiez le fusible correspondant dans la boite a fusibles (consultez le livret du vehicule pour identifier le bon fusible). Si le fusible est grille, remplacez-le par un fusible de meme calibre. Attention : si le nouveau fusible grille immediatement ou peu apres, il y a un court-circuit dans le circuit qu\'il faut trouver et reparer avant de remettre un fusible neuf.'
      },
      {
        question: 'Le P0249 peut-il apparaitre de maniere intermittente?',
        answer: 'Oui, le P0249 peut etre intermittent, surtout quand la cause est un connecteur desserre, un fil partiellement coupe ou une soudure froide dans le connecteur. Les vibrations du moteur et les variations de temperature peuvent provoquer des contacts intermittents qui declenchent le code par moments. Un code intermittent est souvent plus difficile a diagnostiquer qu\'un defaut permanent car les mesures au multimetre peuvent sembler normales quand le probleme n\'est pas present. Il peut etre utile de simuler les vibrations en tapotant legerement sur le connecteur et le faisceau pendant la mesure pour reveler le defaut.'
      }
    ],
    relatedCodes: ['P0247', 'P0248', 'P0245', 'P0250', 'P0299']
  },
  P0250: {
    code: 'P0250',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0250 signale un signal trop eleve (circuit haut) sur le circuit de l'electrovalve de commande de la wastegate B du turbocompresseur. Ce code indique que la tension mesuree sur le circuit de commande du solenoid B depasse le seuil maximum programme dans le calculateur. Cela peut resulter d'un court-circuit au positif dans le cablage, d'un retour de tension parasite, ou d'une defaillance interne de l'electrovalve B. Ce code est le complementaire du P0249 (circuit bas) et concerne specifiquement le deuxieme solenoid present sur les vehicules biturbo ou a geometrie variable. Un signal trop eleve peut provoquer une activation permanente non souhaitee de l'electrovalve, perturbant la regulation de la pression de suralimentation du deuxieme etage.",
    symptoms: [
      'Voyant moteur allume avec passage en mode degrade',
      'Suralimentation du deuxieme etage non regulee ou excessive',
      'Transition erratique entre les deux turbocompresseurs',
      'Possibles a-coups violents lors du passage au deuxieme turbo',
      'Sifflement anormal du deuxieme turbo',
      'Perte de puissance due au mode degrade',
      'Fumee a l\'echappement lors des fortes sollicitations'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'electrovalve B (30%)',
      'Electrovalve B en court-circuit interne (20%)',
      'Defaillance du driver de sortie du calculateur sur le canal B (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un autre circuit partageant le meme faisceau (10%)',
      'Faisceau electrique endommage par chaleur ou frottement (5%)',
      'Mauvais branchement apres une intervention precedente (5%)',
      'Probleme de relais sur le circuit d\'alimentation (5%)'
    ],
    solutions: [
      'Mesurer la tension sur le circuit de l\'electrovalve B moteur arrete (diagnostic 30-60 euros)',
      'Verifier l\'isolement du cablage pour detecter un court-circuit (diagnostic inclus)',
      'Remplacer l\'electrovalve B si elle est en court-circuit interne (40-130 euros)',
      'Reparer le faisceau electrique en cas de court-circuit au positif (80-200 euros)',
      'Inspecter le connecteur de l\'electrovalve B pour broches tordues ou corrodees (gratuit a 15 euros)',
      'Tester le driver de sortie du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier l\'absence de retour de tension depuis d\'autres circuits (diagnostic inclus)',
      'Faire reparer le calculateur si le driver est endommage (200-500 euros)'
    ],
    riskExplanation: "Un signal trop eleve sur l'electrovalve B peut maintenir le deuxieme turbo en surpression constante, soumettant le moteur a des contraintes mecaniques excessives. Bien que le mode degrade limite ces risques, un court-circuit persistant peut endommager le driver de sortie du calculateur moteur, transformant un probleme electrique simple en reparation electronique couteuse. Sur les systemes biturbo, une activation non controlee du deuxieme turbo peut provoquer des a-coups violents et un comportement imprevisible du vehicule. Diagnostic recommande sous une semaine pour eviter l'aggravation.",
    faq: [
      {
        question: 'Le P0250 peut-il endommager le calculateur moteur?',
        answer: 'Oui, c\'est l\'un des risques principaux d\'un code P0250 non traite. Si un court-circuit au positif envoie du courant vers le driver de sortie du calculateur par le fil de commande de l\'electrovalve B, ce composant electronique peut surchauffer et etre detruit. Le remplacement ou la reparation d\'un calculateur moteur coute entre 300 et 1500 euros selon le vehicule, soit beaucoup plus que la reparation du court-circuit initial. C\'est pourquoi il est important de diagnostiquer et reparer rapidement un P0250. Tant que le code est present, le risque d\'endommagement du calculateur existe a chaque demarrage du moteur.'
      },
      {
        question: 'Comment verifier si le court-circuit vient du cablage ou de l\'electrovalve?',
        answer: 'Pour isoler la source du court-circuit, debranchez le connecteur de l\'electrovalve B. Mesurez la tension sur le connecteur cote faisceau (sans l\'electrovalve connectee). Si la tension est anormalement elevee, le court-circuit est dans le cablage entre le calculateur et l\'electrovalve. Si la tension est normale sans l\'electrovalve, le probleme vient de l\'electrovalve elle-meme (court-circuit interne). Vous pouvez aussi mesurer la resistance de l\'electrovalve entre ses bornes : une resistance anormalement basse (moins de 5 ohms au lieu de 20-40 ohms) confirme un court-circuit interne de la bobine.'
      },
      {
        question: 'Un retour de tension peut-il causer un P0250?',
        answer: 'Oui, un retour de tension depuis un autre circuit partageant le meme faisceau electrique peut provoquer un code P0250. Cela arrive quand l\'isolant d\'un fil voisin sous tension est endommage et entre en contact avec le fil de commande de l\'electrovalve B. Cette situation est plus frequente dans les zones ou le faisceau passe pres de sources de chaleur (turbo, echappement) ou subit des frottements (passages de cloison, supports de faisceau). Le diagnostic consiste a inspecter visuellement le faisceau sur tout son trajet et a mesurer la tension sur chaque fil du connecteur pour identifier la source du retour de tension.'
      },
      {
        question: 'Le P0250 est-il frequent sur certains types de vehicules?',
        answer: 'Le P0250 est principalement rencontre sur les vehicules equipes de systemes biturbo, ce qui inclut certains modeles specifiques. Les BMW diesel biturbo (535d, X5 35d), les Audi V6 TDI biturbo, les Mercedes CDI biturbo et certains modeles Volkswagen sont parmi les vehicules les plus concernes. Les vehicules de forte puissance avec des systemes de suralimentation complexes sont naturellement plus sujets a ce type de code car ils utilisent davantage de composants electriques pour la regulation du turbo. L\'age du vehicule et les conditions d\'utilisation (chaleur, humidite) jouent aussi un role important dans l\'apparition de ce code.'
      },
      {
        question: 'Faut-il systematiquement remplacer les deux electrovalves A et B ensemble?',
        answer: 'Non, il n\'est pas necessaire de remplacer les deux electrovalves en meme temps si seule l\'une d\'elles est defaillante. Chaque electrovalve est un composant independant et peut etre remplacee separement. Cependant, si les deux electrovalves ont le meme age et le meme kilometrage, et que l\'une est deja defaillante, il peut etre judicieux de remplacer l\'autre preventIvement pour eviter une panne prochaine. C\'est une decision de maintenance preventive, pas une obligation technique. Le cout supplementaire est faible (40-130 euros pour la piece) compare au cout de la main d\'oeuvre si le deuxieme electrovalve tombe en panne peu apres.'
      }
    ],
    relatedCodes: ['P0247', 'P0248', 'P0249', 'P0246', 'P0299']
  },
  P0251: {
    code: 'P0251',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0251 concerne un dysfonctionnement du doseur de carburant de la pompe d'injection A (doseur a came). Ce code est principalement rencontre sur les moteurs diesel equipes de pompes d'injection rotatives a distributeur. Le doseur de carburant controle la quantite exacte de gasoil injectee dans chaque cylindre en fonction de la demande du conducteur et des parametres moteur. Un dysfonctionnement de ce doseur peut entrainer une injection de carburant incorrecte, affectant les performances, la consommation et les emissions du moteur. Le calculateur moteur surveille en permanence la position et le fonctionnement du doseur et enregistre ce code lorsqu'il detecte une anomalie dans le debit ou le dosage du carburant.",
    symptoms: [
      'Voyant moteur allume avec perte de puissance importante',
      'Demarrage difficile ou impossible du moteur',
      'Ralenti tres instable avec risque de calage',
      'A-coups severes lors des accelerations',
      'Fumee noire excessive a l\'echappement',
      'Surconsommation de carburant tres marquee',
      'Odeur forte de gasoil non brule a l\'echappement'
    ],
    causes: [
      'Doseur de carburant use ou grippee dans la pompe d\'injection (30%)',
      'Probleme electrique du solenoid de commande du doseur (25%)',
      'Pompe d\'injection usee internement avec fuites internes (15%)',
      'Cablage ou connecteur du doseur endommage (10%)',
      'Filtre a carburant bouche restreignant l\'alimentation de la pompe (10%)',
      'Carburant de mauvaise qualite ou contamine par de l\'eau (5%)',
      'Probleme de calage de la pompe d\'injection (3%)',
      'Calculateur moteur delivrant un signal de commande incorrect (2%)'
    ],
    solutions: [
      'Effectuer un diagnostic approfondi du systeme d\'injection diesel (diagnostic 80-150 euros)',
      'Verifier le cablage et le connecteur du doseur de carburant (gratuit a 30 euros)',
      'Tester le solenoid du doseur avec un multimetre (diagnostic inclus)',
      'Remplacer le filtre a carburant et purger le circuit (30-80 euros)',
      'Faire reconditionner la pompe d\'injection par un specialiste (300-800 euros)',
      'Remplacer la pompe d\'injection si elle est trop usee (500-1500 euros)',
      'Verifier le calage de la pompe d\'injection (diagnostic 50-100 euros)',
      'Controler la qualite du carburant et vidanger le reservoir si contamine (100-300 euros)'
    ],
    riskExplanation: "Un doseur de carburant defaillant pose des risques serieux pour le moteur diesel. Un dosage excessif de carburant peut provoquer une surchauffe du moteur, une surpression dans les cylindres et des degats mecaniques sur les pistons et les injecteurs. Un dosage insuffisant entraine des demarrages difficiles et un risque de calage en circulation, potentiellement dangereux. De plus, un dosage incorrect augmente considerablement les emissions polluantes et la consommation. Ce code necessite une intervention rapide, idealement sous une semaine, pour eviter des degats mecaniques sur le moteur et la pompe d'injection.",
    faq: [
      {
        question: 'Qu\'est-ce que le doseur de carburant de la pompe d\'injection?',
        answer: 'Le doseur de carburant est un mecanisme interne de la pompe d\'injection diesel qui controle la quantite exacte de gasoil delivree a chaque cycle d\'injection. Sur les pompes rotatives (Bosch VP44, Lucas/Delphi), le doseur est generalement un solenoid electromagnetique qui ajuste la position d\'un tiroir ou d\'un piston doseur. Le calculateur envoie un signal electrique au solenoid pour ouvrir ou fermer le passage du carburant, controlant ainsi le debit injecte. La precision du dosage est essentielle pour le bon fonctionnement du moteur diesel : meme une variation de quelques millilitres par minute affecte les performances et les emissions.'
      },
      {
        question: 'Peut-on reparer la pompe d\'injection ou faut-il la remplacer?',
        answer: 'Dans beaucoup de cas, la pompe d\'injection peut etre reconditionnee plutot que remplacee, ce qui est significativement moins couteux. Un specialiste en injection diesel (pompiste) demonte la pompe, remplace les pieces usees (joints, doseur, piston, segments), recalibre l\'ensemble sur un banc d\'essai et la remet en etat de fonctionnement optimal. Le reconditionnement coute 300-800 euros contre 500-1500 euros pour une pompe neuve ou echange standard. Cependant, si la pompe est trop usee ou si le corps de pompe est endommage, le remplacement complet est inevitable. Adressez-vous a un specialiste en injection diesel plutot qu\'a un garage generaliste.'
      },
      {
        question: 'Le carburant de mauvaise qualite peut-il causer un P0251?',
        answer: 'Oui, le carburant de mauvaise qualite est une cause reconnue de problemes de doseur. Un gasoil contamine par de l\'eau provoque une corrosion interne de la pompe et du doseur. Un carburant avec des impuretes ou des particules peut gripper le mecanisme de dosage. De plus, certains gasoils de mauvaise qualite ont des proprietes lubrifiantes insuffisantes, ce qui accelere l\'usure des pieces mecaniques de la pompe. Si le P0251 apparait apres un plein dans une station inhabituelle, vidangez le reservoir et remplissez avec du carburant de qualite. Ajoutez un additif nettoyant pour pompe injection pour aider a nettoyer le systeme.'
      },
      {
        question: 'Le P0251 peut-il provoquer un calage en roulant?',
        answer: 'Oui, un doseur de carburant defaillant peut provoquer un calage du moteur en circulation, ce qui est potentiellement dangereux. Si le doseur se bloque en position fermee, le moteur ne recoit plus de carburant et s\'arrete. Cela peut arriver a n\'importe quel moment : en circulation urbaine, sur route ou sur autoroute. En cas de calage, vous perdez l\'assistance de freinage et la direction assistee, rendant le vehicule beaucoup plus difficile a controler. Si votre moteur cale de maniere repetitive ou si vous ressentez des a-coups severes, ne prenez pas le risque de rouler et faites remorquer le vehicule chez un specialiste.'
      },
      {
        question: 'Le filtre a carburant peut-il etre la cause d\'un P0251?',
        answer: 'Oui, un filtre a carburant bouche peut contribuer a un code P0251. Quand le filtre est sature, il restreint le debit de carburant vers la pompe d\'injection, ce qui affecte le fonctionnement du doseur. La pompe d\'injection necessite un debit et une pression d\'alimentation minimaux pour fonctionner correctement. Un filtre bouche cree une depression excessive en amont de la pompe, ce qui peut perturber le dosage et meme provoquer une cavitation (formation de bulles) dans la pompe. Le remplacement du filtre a carburant est la premiere etape du diagnostic et doit etre effectue regulierement (tous les 20 000-30 000 km sur un diesel).'
      }
    ],
    relatedCodes: ['P0252', 'P0253', 'P0254', 'P0200', 'P0251']
  },
  P0252: {
    code: 'P0252',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0252 indique un probleme de plage ou de performance du doseur de carburant de la pompe d'injection A. Contrairement au P0251 qui signale un dysfonctionnement general, le P0252 est plus specifique : le doseur fonctionne mais ses performances sont en dehors des tolerances acceptables. Le calculateur detecte que la quantite de carburant injectee ne correspond pas a la commande envoyee, soit par un dosage excessif, soit par un dosage insuffisant. Ce code peut indiquer une usure progressive du mecanisme de dosage, un encrassement partiel, ou un probleme de calibration de la pompe d'injection. Il est souvent le signe avant-coureur d'un probleme plus grave si l'on n'intervient pas rapidement.",
    symptoms: [
      'Voyant moteur allume avec legere perte de performance',
      'Consommation de carburant augmentee de 10 a 20%',
      'Ralenti legerement irregulier mais stable',
      'Legeres hesitations lors des accelerations progressives',
      'Fumee a l\'echappement variable selon les conditions de conduite',
      'Performances moteur legerement en retrait par rapport a la normale',
      'Odeur de gasoil plus prononcee qu\'a l\'habitude'
    ],
    causes: [
      'Usure progressive du mecanisme de dosage de la pompe d\'injection (30%)',
      'Encrassement partiel du doseur par des impuretes du carburant (25%)',
      'Filtre a carburant partiellement bouche affectant le debit (15%)',
      'Injecteurs uses modifiant la contre-pression du circuit d\'injection (10%)',
      'Probleme de calibration de la pompe d\'injection apres intervention (10%)',
      'Faiblesse du solenoid du doseur (reponse lente) (5%)',
      'Retour de carburant excessif dans la pompe d\'injection (3%)',
      'Capteur de position du doseur derive (2%)'
    ],
    solutions: [
      'Remplacer le filtre a carburant comme premiere etape diagnostique (30-80 euros)',
      'Effectuer un diagnostic du systeme d\'injection avec lecture des valeurs en temps reel (80-120 euros)',
      'Utiliser un additif nettoyant pour pompe d\'injection diesel (15-30 euros)',
      'Faire tester les injecteurs sur un banc d\'essai et les remplacer si necessaire (200-600 euros)',
      'Faire recalibrer la pompe d\'injection par un specialiste (150-300 euros)',
      'Faire reconditionner la pompe d\'injection si l\'usure interne est confirmee (300-800 euros)',
      'Verifier et reparer le circuit de retour de carburant (50-150 euros)',
      'Controler le solenoid du doseur et le remplacer si possible separement (80-200 euros)'
    ],
    riskExplanation: "Le code P0252 indique une derive des performances du doseur de carburant qui, si elle n'est pas corrigee, va s'aggraver progressivement. Un dosage imprecis entraine une combustion non optimale qui encrassee le moteur, les injecteurs et le systeme de depollution (filtre a particules, catalyseur). A long terme, les depots de suie et les residus de combustion incomplete peuvent causer des degats plus couteux que la reparation initiale. La surconsommation de carburant representera aussi un cout financier non negligeable. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0252 est-il un signe d\'usure de la pompe d\'injection?',
        answer: 'Oui, dans environ 30% des cas, le P0252 est effectivement un signe d\'usure progressive de la pompe d\'injection. Les pieces mecaniques internes (piston doseur, tiroir, segments) s\'usent avec le temps et le kilometrage, ce qui reduit la precision du dosage. Cette usure est acceleree par un entretien negligent (filtre a carburant non change) ou l\'utilisation de carburant de mauvaise qualite. Cependant, dans 70% des cas, la cause est plus simple (filtre bouche, encrassement, injecteurs uses) et ne necessite pas le reconditionnement de la pompe. Un diagnostic approfondi permet de determiner la cause exacte.'
      },
      {
        question: 'Un additif nettoyant peut-il resoudre un P0252?',
        answer: 'Dans certains cas oui, surtout si la cause est un encrassement partiel du doseur. Les additifs nettoyants pour pompe d\'injection contiennent des solvants et des detergents qui peuvent dissoudre les depots de vernis et d\'impuretes qui genent le fonctionnement du doseur. Utilisez un additif de qualite (Liqui Moly, Wynn\'s, BG) dans un reservoir plein et roulez 200-300 km. Si le code disparait et ne revient pas apres effacement, l\'additif a fonctionne. Si le code revient, le probleme est d\'origine mecanique et necessite une intervention plus approfondie. L\'additif coute 15-30 euros et vaut la peine d\'etre essaye avant des reparations couteuses.'
      },
      {
        question: 'Comment differencier un probleme de pompe d\'un probleme d\'injecteurs?',
        answer: 'Pour differencier les deux, un specialiste en injection diesel effectue plusieurs tests. Les injecteurs peuvent etre testes individuellement sur un banc d\'essai pour verifier leur debit, leur pression d\'ouverture et leur etancheite. Si les injecteurs sont conformes mais que le dosage reste incorrect, le probleme vient de la pompe. Un autre test consiste a mesurer le debit de retour de chaque injecteur : un retour excessif indique un injecteur use. Avec une valise OBD, on peut aussi comparer les corrections de debit de chaque cylindre : des corrections tres differentes entre cylindres pointent vers les injecteurs, des corrections uniformement hors plage vers la pompe.'
      },
      {
        question: 'Le P0252 peut-il apparaitre apres un reconditionnement de pompe?',
        answer: 'Oui, un P0252 peut apparaitre apres un reconditionnement si la pompe n\'a pas ete correctement calibree sur le banc d\'essai, si les pieces de remplacement ne sont pas de qualite suffisante, ou si le calage de la pompe sur le moteur est incorrect. Apres un reconditionnement, la pompe doit etre testee sur un banc d\'essai pour verifier que les debits correspondent aux specifications du constructeur. Si le code apparait apres un reconditionnement, retournez chez le specialiste qui a effectue le travail pour une verification et une recalibration. Un reconditionnement garantit generalement les corrections necessaires.'
      },
      {
        question: 'Le P0252 peut-il affecter le filtre a particules?',
        answer: 'Oui, un dosage de carburant imprecis affecte directement le filtre a particules (FAP/DPF). Un dosage excessif produit une combustion incomplete qui genere davantage de particules de suie, colmatant le filtre a particules plus rapidement. De plus, si le doseur injecte trop de carburant, celui-ci peut diluer l\'huile moteur (phenomene frequent sur les diesels modernes), ce qui reduit la lubrification et peut endommager le moteur. Un dosage insuffisant provoque egalement une combustion incomplete, generant de la suie et des residus. Reparer le P0252 contribue donc a proteger l\'ensemble du systeme de depollution.'
      }
    ],
    relatedCodes: ['P0251', 'P0253', 'P0254', 'P0200', 'P0255']
  },
  P0253: {
    code: 'P0253',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0253 signale un signal trop bas (circuit bas) sur le doseur de carburant de la pompe d'injection A. Le calculateur moteur detecte que la tension ou le courant sur le circuit de commande du doseur est inferieur au seuil minimum attendu. Cela peut correspondre a un circuit ouvert, un court-circuit a la masse, ou une defaillance du solenoid de commande du doseur. Sans commande adequate du doseur, la quantite de carburant injectee n'est plus controlee, ce qui peut entrainer un arret du moteur ou un fonctionnement avec un debit minimal par defaut. Ce code est grave car il affecte directement le controle de l'injection de carburant et donc le fonctionnement du moteur diesel.",
    symptoms: [
      'Voyant moteur allume avec perte de puissance tres importante',
      'Moteur qui cale ou refuse de demarrer',
      'Ralenti extremement instable avec vibrations severes',
      'Injection de carburant minimale (debit de securite uniquement)',
      'Fumee excessive a l\'echappement (noire ou blanche)',
      'Impossibilite d\'accelerer normalement',
      'Bruits de cliquetis ou de cognement moteur'
    ],
    causes: [
      'Bobine du solenoid du doseur coupee ou en circuit ouvert (30%)',
      'Circuit ouvert dans le faisceau electrique du doseur (25%)',
      'Court-circuit a la masse du fil de commande (15%)',
      'Connecteur du doseur desserre ou corrode (10%)',
      'Pompe d\'injection avec doseur interne defaillant (10%)',
      'Fusible du circuit d\'injection grille (5%)',
      'Masse electrique du circuit defaillante (3%)',
      'Driver de sortie du calculateur endommage (2%)'
    ],
    solutions: [
      'Verifier le fusible du circuit d\'injection en premier (2-5 euros)',
      'Mesurer la resistance du solenoid du doseur (diagnostic 50-80 euros)',
      'Inspecter le connecteur et le cablage du doseur (gratuit a 30 euros)',
      'Reparer le faisceau electrique si un circuit ouvert est detecte (80-200 euros)',
      'Remplacer le solenoid du doseur si la bobine est coupee (100-300 euros)',
      'Faire reconditionner la pompe d\'injection si le doseur interne est defaillant (300-800 euros)',
      'Controler les masses electriques du circuit d\'injection (diagnostic inclus)',
      'Tester le driver de sortie du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un code P0253 est un defaut serieux qui affecte directement le controle de l'injection de carburant. Sans commande du doseur, le moteur peut caler a tout moment, y compris en circulation, ce qui represente un danger pour le conducteur et les autres usagers. L'absence de controle du debit peut aussi provoquer une injection excessive endommageant les pistons, ou une injection insuffisante entrainant un calage. Les demarrages repetes avec un doseur defaillant peuvent egalement endommager le demarreur et la batterie. Ce code necessite une intervention en urgence, idealement sous 48 heures.",
    faq: [
      {
        question: 'Le moteur peut-il fonctionner sans le doseur de carburant?',
        answer: 'Sur les pompes d\'injection modernes, le moteur peut fonctionner en mode de secours avec un debit minimal fixe si le doseur est inoperant. Ce mode de secours permet de deplacer le vehicule sur une courte distance mais ne permet pas une conduite normale. Le moteur tournera au ralenti ou a un regime fixe avec tres peu de puissance. Sur les pompes plus anciennes sans mode de secours, le moteur peut caler completement et ne plus demarrer. Dans tous les cas, il ne faut pas tenter de rouler normalement avec un P0253 car le comportement du moteur est imprevisible et potentiellement dangereux.'
      },
      {
        question: 'Comment tester le solenoid du doseur de carburant?',
        answer: 'Le solenoid du doseur se teste avec un multimetre. Debranchez le connecteur du solenoid sur la pompe d\'injection. Mesurez la resistance entre les bornes du solenoid : elle doit etre conforme aux specifications du constructeur (typiquement 5-15 ohms pour la plupart des pompes diesel). Une resistance infinie indique une bobine coupee, une resistance proche de zero indique un court-circuit. Vous pouvez aussi tester en appliquant brievement 12V sur le solenoid : vous devez entendre un clic et sentir le solenoid s\'activer. Si aucune reaction, le solenoid est defectueux et doit etre remplace ou la pompe reconditionnee.'
      },
      {
        question: 'Le remplacement du solenoid seul est-il possible ou faut-il changer la pompe?',
        answer: 'Sur certaines pompes d\'injection, le solenoid du doseur est un composant separable qui peut etre remplace individuellement. C\'est notamment le cas sur les pompes Bosch VP44 et certaines pompes Lucas/Delphi. Le remplacement du solenoid seul coute 100-300 euros contre 500-1500 euros pour la pompe complete. Cependant, sur d\'autres types de pompes, le doseur est integre et non demontable, necessitant le reconditionnement ou le remplacement de toute la pompe. Un specialiste en injection diesel pourra vous indiquer si le solenoid est remplacable separement sur votre modele de pompe.'
      },
      {
        question: 'Le P0253 peut-il etre intermittent?',
        answer: 'Oui, le P0253 peut etre intermittent, surtout quand la cause est un connecteur desserre, un fil partiellement coupe ou un probleme de contact thermique (le defaut apparait quand le moteur est chaud et disparait a froid). Un P0253 intermittent est particulierement dangereux car le moteur peut caler de maniere imprevisible : il fonctionne normalement puis s\'arrete brusquement quand le contact se perd. Si vous constatez des calages intermittents, ne roulez pas et faites diagnostiquer immediatement. Un connecteur desserre ou un fil endommage est souvent la cause et peut etre repare rapidement et a moindre cout.'
      },
      {
        question: 'Faut-il faire remorquer le vehicule avec un P0253?',
        answer: 'Oui, il est fortement recommande de faire remorquer le vehicule si le P0253 est present et que le moteur cale ou ne demarre pas. Tenter de rouler avec un doseur defaillant est risque car le moteur peut s\'arreter a tout moment, y compris dans une situation de trafic dangereux (rond-point, autoroute, montee). De plus, les demarrages repetes pour essayer de faire fonctionner le moteur peuvent endommager le demarreur (30-200 euros) et epuiser la batterie (80-200 euros). Le cout du remorquage (80-150 euros) est largement inferieur aux risques et aux couts de reparations supplementaires.'
      }
    ],
    relatedCodes: ['P0251', 'P0252', 'P0254', 'P0200', 'P0255']
  },
  P0254: {
    code: 'P0254',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0254 signale un signal trop eleve (circuit haut) sur le doseur de carburant de la pompe d'injection A. Le calculateur moteur detecte que la tension ou le courant sur le circuit de commande du doseur depasse le seuil maximum autorise. Cela peut indiquer un court-circuit au positif dans le cablage, une defaillance du solenoid en court-circuit interne, ou un probleme du driver de sortie du calculateur. Un signal trop haut sur le doseur peut provoquer une ouverture excessive du doseur, entrainant une injection de carburant surabondante qui peut endommager le moteur. Ce code est considere comme serieux car il peut conduire a une surinjection dangereuse pour les composants mecaniques du moteur.",
    symptoms: [
      'Voyant moteur allume avec passage en mode degrade immediat',
      'Fumee noire tres epaisse a l\'echappement',
      'Surrégime possible du moteur diesel (emballement)',
      'Forte surconsommation de carburant',
      'Bruits de cognement ou de detonation dans le moteur',
      'Huile moteur diluee par le carburant en exces',
      'Odeur tres forte de gasoil non brule'
    ],
    causes: [
      'Court-circuit au positif dans le cablage du doseur (30%)',
      'Solenoid du doseur en court-circuit interne (25%)',
      'Defaillance du driver de sortie du calculateur (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un autre circuit (10%)',
      'Faisceau electrique fondu par proximite avec l\'echappement (5%)',
      'Pompe d\'injection defaillante avec doseur bloque en position ouverte (3%)',
      'Mauvais branchement apres une reparation (2%)'
    ],
    solutions: [
      'Couper le moteur immediatement en cas d\'emballement et faire remorquer (urgence)',
      'Verifier le cablage du doseur pour detecter un court-circuit au positif (diagnostic 50-80 euros)',
      'Mesurer la tension sur le circuit du doseur moteur arrete (diagnostic inclus)',
      'Remplacer le solenoid du doseur si en court-circuit interne (100-300 euros)',
      'Reparer le faisceau electrique endommagee (80-200 euros)',
      'Inspecter le connecteur du doseur pour des broches endommagees (gratuit a 15 euros)',
      'Faire tester le driver de sortie du calculateur (diagnostic specialise 80-150 euros)',
      'Controler le niveau et l\'etat de l\'huile moteur (possibilite de dilution) (20-60 euros)'
    ],
    riskExplanation: "Le code P0254 presente un risque serieux car un signal trop eleve sur le doseur peut provoquer une surinjection de carburant. Sur un moteur diesel, une surinjection peut conduire a un emballement moteur (le moteur s'emballe hors controle), situation extremement dangereuse pouvant detruire le moteur. Meme sans emballement, le carburant en exces dilue l'huile moteur, reduit la lubrification et peut endommager les pistons, les segments et les coussinets. Le mode degrade intervient pour limiter ces risques mais n'est pas toujours assez rapide. Ce code necessite un arret immediat du vehicule et un diagnostic en urgence.",
    faq: [
      {
        question: 'Qu\'est-ce que l\'emballement d\'un moteur diesel et comment reagir?',
        answer: 'L\'emballement d\'un moteur diesel est une situation d\'urgence ou le moteur accelere de lui-meme jusqu\'a des regimes extremes pouvant le detruire. Contrairement a un moteur essence, un diesel peut s\'auto-alimenter en aspirant de l\'huile moteur par le turbo meme si on coupe l\'alimentation en gasoil. Si votre moteur s\'emballe : 1) Ne paniquez pas, 2) Enclenchez un rapport eleve et freinez pour caler le moteur, 3) Si cela ne fonctionne pas, bouchez l\'admission d\'air (chiffon sur l\'entree d\'air) pour etouffer le moteur, 4) N\'essayez JAMAIS de redemarrer le moteur apres un emballement. Faites remorquer le vehicule pour un diagnostic complet.'
      },
      {
        question: 'Comment savoir si l\'huile moteur est diluee par le carburant?',
        answer: 'Plusieurs indices permettent de detecter une dilution de l\'huile par le carburant. Verifiez le niveau d\'huile sur la jauge : un niveau anormalement eleve (au-dessus du maximum) indique une dilution. L\'huile a une odeur de gasoil que vous pouvez sentir en retirant le bouchon de remplissage ou sur la jauge. La viscosite de l\'huile est reduite : elle semble plus liquide que la normale. Un test simple consiste a deposer une goutte d\'huile sur un papier absorbant : une huile diluee s\'etale plus rapidement et plus loin qu\'une huile normale. Si vous constatez une dilution, faites immediatement une vidange avec de l\'huile neuve.'
      },
      {
        question: 'Le P0254 peut-il endommager le calculateur moteur?',
        answer: 'Oui, si la cause du P0254 est un court-circuit au positif qui envoie du courant vers le driver de sortie du calculateur, ce composant electronique peut etre detruit par surchauffe. Le remplacement ou la reparation d\'un calculateur moteur coute entre 300 et 1500 euros selon le vehicule. C\'est pourquoi il est important de ne pas continuer a rouler avec un P0254 : chaque tentative de demarrage ou chaque cycle de fonctionnement soumet le driver a un stress electrique supplementaire. Faites diagnostiquer et reparer la cause du court-circuit avant de remettre le vehicule en service.'
      },
      {
        question: 'Faut-il arreter immediatement le moteur avec un P0254?',
        answer: 'Oui, il est recommande d\'arreter le moteur des que possible lorsque le P0254 est detecte, surtout si vous observez de la fumee noire epaisse, des bruits anormaux ou un regime moteur qui semble instable. Le mode degrade protege le moteur dans une certaine mesure, mais les risques de surinjection et d\'emballement sont reels. Rangez-vous en securite des que possible, coupez le moteur et faites remorquer le vehicule. Si le voyant moteur est allume mais que le moteur semble fonctionner normalement en mode degrade, vous pouvez rouler prudemment jusqu\'au garage le plus proche, mais evitez les longs trajets et les accelerations.'
      },
      {
        question: 'Le P0254 est-il courant et sur quels vehicules?',
        answer: 'Le P0254 est un code relativement peu courant mais qui peut apparaitre sur tout vehicule diesel equipe d\'une pompe d\'injection avec doseur electrique. Il est plus frequent sur les vehicules diesel equipes de pompes rotatives (Bosch VP44, Lucas DPC) que l\'on retrouve sur les vehicules des annees 1995-2005. Les marques couramment touchees incluent Volkswagen, Audi, BMW, Opel et Ford avec leurs motorisations diesel TDI, HDI et CDTI de cette periode. Les vehicules plus recents equipes de common rail sont moins sujets a ce code specifique car leur systeme d\'injection fonctionne differemment, bien qu\'ils aient leurs propres codes equivalents.'
      }
    ],
    relatedCodes: ['P0251', 'P0252', 'P0253', 'P0255', 'P0200']
  },
  P0255: {
    code: 'P0255',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0255 concerne un dysfonctionnement intermittent du doseur de carburant de la pompe d'injection A. Ce code indique que le calculateur moteur a detecte des interruptions ou des variations erratiques dans le signal du doseur de carburant. Contrairement aux codes P0253 et P0254 qui signalent un signal fixement trop bas ou trop haut, le P0255 indique un probleme d'intermittence : le signal fluctue de maniere aleatoire entre des valeurs normales et anormales. Ce type de defaut est souvent cause par des problemes de connectique, de cablage deteriore, ou de composants en fin de vie dont le fonctionnement devient erratique. L'intermittence rend le diagnostic plus difficile car le defaut peut ne pas etre present au moment du test.",
    symptoms: [
      'Voyant moteur allume de maniere intermittente (s\'allume et s\'eteint)',
      'A-coups moteur aleatoires et imprevisibles',
      'Variations de puissance soudaines et inexpliquees',
      'Calages occasionnels du moteur, souvent a chaud',
      'Demarrages parfois difficiles de maniere aleatoire',
      'Ralenti instable par moments, stable a d\'autres',
      'Fumee variable a l\'echappement'
    ],
    causes: [
      'Connecteur du doseur avec un faux contact intermittent (30%)',
      'Fil du faisceau electrique partiellement coupe (contact par vibration) (25%)',
      'Solenoid du doseur en fin de vie avec fonctionnement erratique (15%)',
      'Corrosion intermittente sur les broches du connecteur (10%)',
      'Masse electrique intermittente due a corrosion ou desserrage (10%)',
      'Soudure froide dans le connecteur ou le calculateur (5%)',
      'Interferenceelectromagnetique perturbant le signal (3%)',
      'Probleme thermique : defaut apparaissant seulement a chaud ou a froid (2%)'
    ],
    solutions: [
      'Inspecter minutieusement le connecteur du doseur (nettoyage, resserrage) (gratuit a 20 euros)',
      'Manipuler le faisceau electrique pendant un test pour reveler le defaut (diagnostic 50-80 euros)',
      'Verifier les masses electriques du circuit d\'injection (diagnostic inclus)',
      'Remplacer le connecteur si les broches sont corrodees ou endommagees (20-50 euros)',
      'Reparer le faisceau electrique si un fil partiellement coupe est trouve (80-200 euros)',
      'Remplacer le solenoid du doseur si le defaut persiste apres verification du cablage (100-300 euros)',
      'Appliquer de la graisse dielectrique sur les connecteurs pour prevenir la corrosion (5-10 euros)',
      'Effectuer un diagnostic thermique (test a froid puis a chaud) pour identifier les defauts thermiques (diagnostic 80-120 euros)'
    ],
    riskExplanation: "Un defaut intermittent du doseur de carburant est particulierement insidieux car il peut provoquer des calages imprevisibles du moteur en circulation. Le conducteur ne peut pas anticiper quand le probleme va se manifester, ce qui represente un risque en conduite, surtout sur des voies rapides ou dans le trafic dense. De plus, les a-coups repetes et les variations de dosage accelerent l'usure du moteur et du systeme de depollution. L'intermittence rend le diagnostic plus complexe et plus long, mais le probleme va systematiquement s'aggraver avec le temps. Un diagnostic approfondi sous deux semaines est recommande.",
    faq: [
      {
        question: 'Pourquoi les defauts intermittents sont-ils plus difficiles a diagnostiquer?',
        answer: 'Les defauts intermittents sont plus complexes car le probleme n\'est pas toujours present au moment ou le mecanicien effectue le diagnostic. Le solenoid peut fonctionner parfaitement sur le banc d\'essai mais avoir un faux contact quand le moteur vibre. Le cablage peut sembler intact au multimetre mais se couper sous certaines positions. Pour diagnostiquer un defaut intermittent, il faut reproduire les conditions qui le declenchent : faire vibrer le connecteur et le faisceau pendant les mesures, tester a chaud et a froid, et parfois conduire le vehicule avec un enregistreur de donnees OBD pour capturer le moment exact ou le defaut se produit.'
      },
      {
        question: 'Le P0255 peut-il etre cause par la chaleur du moteur?',
        answer: 'Oui, la chaleur est une cause frequente de defauts intermittents. Les composants electriques se dilatent quand la temperature augmente, ce qui peut ouvrir un contact marginal dans un connecteur ou un fil partiellement coupe. De meme, un solenoid en fin de vie peut fonctionner a froid mais se mettre en court-circuit a chaud quand sa bobine se dilate. C\'est pourquoi les calages intermittents se produisent souvent apres 20-30 minutes de conduite (moteur a temperature de fonctionnement). Pour diagnostiquer, effectuez les tests electriques d\'abord moteur froid, puis repetez-les moteur chaud pour comparer les valeurs.'
      },
      {
        question: 'Comment prevenir les problemes de connectique sur le circuit d\'injection?',
        answer: 'La prevention passe par un entretien regulier de la connectique. Lors de chaque revision, demandez au mecanicien d\'inspecter visuellement les connecteurs du circuit d\'injection. Appliquez de la graisse dielectrique sur les broches des connecteurs pour empecher la corrosion (5-10 euros le tube). Evitez les lavages haute pression du compartiment moteur qui projettent de l\'eau dans les connecteurs. Verifiez que les protections en caoutchouc des connecteurs sont en place et en bon etat. Si vous vivez dans une region humide ou saline, cette prevention est encore plus importante car la corrosion se developpe rapidement.'
      },
      {
        question: 'Le code P0255 s\'enregistre-t-il meme si le voyant ne s\'allume pas?',
        answer: 'Oui, sur de nombreux vehicules, un code intermittent peut etre stocke en memoire du calculateur sans allumer le voyant moteur. Le calculateur attend generalement que le defaut se reproduise un certain nombre de fois (2 a 3 cycles de conduite) avant d\'allumer le voyant. Si le defaut est tres intermittent, il peut etre stocke comme "defaut memorise" (historique) sans etre "present". C\'est pourquoi il est recommande de faire lire regulierement la memoire de defauts du calculateur, meme si aucun voyant n\'est allume, pour detecter les problemes naissants avant qu\'ils ne s\'aggravent.'
      },
      {
        question: 'Faut-il remplacer tout le faisceau electrique pour un defaut intermittent?',
        answer: 'Non, dans la grande majorite des cas, il n\'est pas necessaire de remplacer tout le faisceau. Le defaut est generalement localise a un point precis : un connecteur corrode, une section de fil endommagee, ou une jonction defaillante. Un electricien automobile competent peut localiser le point de defaut et reparer uniquement la section concernee. La reparation consiste a couper la section defectueuse et a la remplacer par un fil neuf avec des soudures etamees et des gaines thermoretractables pour l\'etancheite. Cette reparation locale coute 80-200 euros contre 500-1500 euros pour un faisceau complet. Le remplacement du faisceau n\'est necessaire que si de multiples points sont deteriores.'
      }
    ],
    relatedCodes: ['P0251', 'P0252', 'P0253', 'P0254', 'P0256']
  },
  P0256: {
    code: 'P0256',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0256 concerne un dysfonctionnement du doseur de carburant de la pompe d'injection B (deuxieme doseur). Ce code est present sur les vehicules equipes de systemes d'injection a double pompe ou de moteurs avec des circuits d'injection separes pour differents groupes de cylindres. Le doseur B controle l'alimentation en carburant d'une partie des cylindres du moteur. Un dysfonctionnement de ce doseur peut entrainer un desequilibre de fonctionnement entre les groupes de cylindres, provoquant des vibrations, des a-coups et une perte de puissance. Le calculateur moteur surveille les performances du doseur B et enregistre ce code lorsqu'il detecte une anomalie dans le debit ou le dosage du carburant du deuxieme circuit.",
    symptoms: [
      'Voyant moteur allume avec perte de puissance partielle',
      'Vibrations anormales dues au desequilibre entre les cylindres',
      'A-coups moteur surtout perceptibles au ralenti et a bas regime',
      'Fumee noire ou blanche d\'un seul cote de l\'echappement (V6/V8)',
      'Consommation de carburant augmentee',
      'Ralenti irregulier avec tremblements dans l\'habitacle',
      'Bruit moteur asymetrique (un cote sonne different de l\'autre)'
    ],
    causes: [
      'Doseur B use ou grippee dans la deuxieme pompe d\'injection (30%)',
      'Probleme electrique du solenoid de commande du doseur B (25%)',
      'Cablage ou connecteur du doseur B endommage (15%)',
      'Pompe d\'injection B usee internement (10%)',
      'Filtre a carburant du circuit B bouche (10%)',
      'Fuite dans le circuit d\'alimentation du doseur B (5%)',
      'Calage incorrect de la pompe B (3%)',
      'Calculateur delivrant un signal incorrect sur le canal B (2%)'
    ],
    solutions: [
      'Diagnostiquer le systeme d\'injection double avec lecture des valeurs comparatives A et B (diagnostic 80-150 euros)',
      'Verifier le cablage et le connecteur du doseur B (gratuit a 30 euros)',
      'Tester le solenoid du doseur B avec un multimetre (diagnostic inclus)',
      'Remplacer le filtre a carburant du circuit B (30-80 euros)',
      'Faire reconditionner la pompe d\'injection B (300-800 euros)',
      'Remplacer le solenoid du doseur B si defaillant (100-300 euros)',
      'Verifier le calage de la pompe d\'injection B (diagnostic 50-100 euros)',
      'Comparer les debits et pressions des circuits A et B (diagnostic specialise 100-200 euros)'
    ],
    riskExplanation: "Un doseur B defaillant cree un desequilibre de fonctionnement entre les cylindres alimentes par les circuits A et B. Ce desequilibre genere des vibrations anormales qui peuvent endommager les supports moteur, la ligne d'echappement et les composants mecaniques a long terme. Un dosage incorrect sur une partie des cylindres augmente aussi la pollution et peut encrasser le filtre a particules de maniere asymetrique. Si le doseur B injecte trop de carburant, il dilue l'huile moteur et peut endommager les pistons concernes. Un diagnostic sous deux semaines est recommande pour eviter des degats progressifs.",
    faq: [
      {
        question: 'Quels vehicules ont deux doseurs de carburant (A et B)?',
        answer: 'Les vehicules equipes de deux doseurs de carburant sont generalement les moteurs V6 et V8 diesel avec des pompes d\'injection separees pour chaque banc de cylindres. On retrouve ce systeme sur certains gros moteurs diesel industriels, des vehicules utilitaires lourds et quelques voitures haut de gamme. Certains moteurs en ligne avec des systemes d\'injection complexes a double circuit peuvent aussi avoir deux doseurs. Ce sont des configurations moins courantes que les systemes a doseur unique, et le diagnostic et la reparation necessitent souvent un specialiste en injection diesel familiarise avec ces systemes specifiques.'
      },
      {
        question: 'Comment savoir quel groupe de cylindres est affecte?',
        answer: 'Un diagnostic avec une valise OBD permet de lire les corrections de debit de chaque cylindre individuellement. Les cylindres alimentes par le doseur B afficheront des corrections anormales par rapport aux cylindres du circuit A. Sur les moteurs en V, le banc concerne par le doseur B est generalement le banc 2 (cote droit du moteur). Vous pouvez aussi observer visuellement la fumee a l\'echappement si les deux bancs ont des sorties separees : le cote avec plus de fumee correspond probablement au doseur defaillant. Un test de compression cylindre par cylindre peut aussi reveler les cylindres affectes par un dosage incorrect prolonge.'
      },
      {
        question: 'Le P0256 peut-il provoquer des vibrations dangereuses?',
        answer: 'Les vibrations causees par un desequilibre de fonctionnement entre les cylindres ne sont generalement pas dangereuses en tant que telles, mais elles sont inconfortables et peuvent endommager les composants du vehicule a long terme. Les supports moteur (silentblocs) sont particulierement vulnerables aux vibrations asymetriques et peuvent se deteriorer prematurement. La ligne d\'echappement, les raccords flexibles et les fixations peuvent aussi etre affectes. Si les vibrations sont tres severes, elles peuvent perturber le confort de conduite et la concentration du conducteur, ce qui represente un risque indirect pour la securite.'
      },
      {
        question: 'Le remplacement du doseur B est-il plus couteux que le doseur A?',
        answer: 'Le cout de la piece est generalement similaire pour les doseurs A et B (100-300 euros pour le solenoid seul). Cependant, l\'accessibilite du doseur B est souvent plus difficile que celle du doseur A, ce qui augmente le temps de main d\'oeuvre. Sur les moteurs en V, la pompe B est parfois situee dans un emplacement tres serre necessitant le demontage de nombreux elements pour y acceder. La main d\'oeuvre peut donc etre 1,5 a 2 fois plus elevee que pour le doseur A. En totalite, comptez 250-500 euros pour le remplacement du doseur B contre 200-400 euros pour le doseur A, incluant la main d\'oeuvre.'
      },
      {
        question: 'Peut-on rouler longtemps avec un seul circuit d\'injection fonctionnel?',
        answer: 'Il est techniquement possible de rouler avec un seul circuit d\'injection fonctionnel, mais c\'est fortement deconseille au-dela de quelques kilometres pour atteindre le garage. Les cylindres alimentes par le doseur B defaillant fonctionnent en mode degrade ou pas du tout, ce qui cree un desequilibre mecanique important. Sur un moteur V6, trois cylindres sur six ne fonctionnent pas correctement, ce qui est comme rouler avec la moitie du moteur. Les vibrations, la perte de puissance (50%) et la surconsommation rendent la conduite penible et potentiellement dangereuse. Faites remorquer le vehicule si possible.'
      }
    ],
    relatedCodes: ['P0251', 'P0257', 'P0258', 'P0259', 'P0200']
  },
  P0257: {
    code: 'P0257',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0257 indique un probleme de plage ou de performance du doseur de carburant de la pompe d'injection B. Ce code signifie que le doseur B fonctionne mais que ses performances ne correspondent pas aux attentes du calculateur moteur. Le debit de carburant du circuit B est soit trop eleve, soit trop faible, soit irregulier par rapport aux commandes envoyees. Ce type de defaut est souvent lie a une usure progressive du mecanisme de dosage, a un encrassement partiel, ou a des conditions de fonctionnement degradees du circuit d'alimentation. Le P0257 est un indicateur d'usure qui peut preceder une panne complete du doseur B si l'on n'intervient pas.",
    symptoms: [
      'Voyant moteur allume avec legeres pertes de performances',
      'Desequilibre de fonctionnement entre les deux bancs de cylindres',
      'Consommation de carburant legerement augmentee',
      'Vibrations legeres perceptibles au ralenti',
      'Hesitations lors des accelerations progressives',
      'Fumee legere a l\'echappement du cote du banc B',
      'Performances moteur en retrait par rapport a la normale'
    ],
    causes: [
      'Usure progressive du doseur B dans la pompe d\'injection (30%)',
      'Encrassement partiel du mecanisme de dosage B (25%)',
      'Filtre a carburant du circuit B partiellement sature (15%)',
      'Injecteurs du banc B uses modifiant la contre-pression (10%)',
      'Retour de carburant excessif sur le circuit B (10%)',
      'Solenoid du doseur B vieillissant avec reponse degradee (5%)',
      'Probleme de calibration de la pompe B (3%)',
      'Capteur de debit du circuit B imprecis (2%)'
    ],
    solutions: [
      'Remplacer le filtre a carburant comme premiere mesure (30-80 euros)',
      'Utiliser un additif nettoyant pour pompe d\'injection (15-30 euros)',
      'Faire un diagnostic comparatif des circuits A et B (diagnostic 80-150 euros)',
      'Tester les injecteurs du banc B sur un banc d\'essai (diagnostic 50-100 euros)',
      'Faire recalibrer la pompe d\'injection B par un specialiste (150-300 euros)',
      'Controler le circuit de retour de carburant du banc B (50-100 euros)',
      'Faire reconditionner la pompe d\'injection B si l\'usure est confirmee (300-800 euros)',
      'Remplacer les injecteurs du banc B si leur debit est hors tolerance (200-600 euros)'
    ],
    riskExplanation: "Le code P0257 indique une degradation progressive des performances du doseur B qui va s'aggraver avec le temps. Un dosage imprecis sur une partie des cylindres cree un desequilibre de fonctionnement qui accelere l'usure des composants mecaniques et du systeme de depollution. La combustion non optimale sur les cylindres du banc B produit davantage de suie et de polluants, encrassant le filtre a particules de maniere inegale. A terme, le doseur peut tomber completement en panne, provoquant un calage du moteur. Un diagnostic approfondi sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0257 est-il un signe avant-coureur d\'une panne de la pompe B?',
        answer: 'Oui, dans de nombreux cas, le P0257 est un indicateur precoce d\'usure de la pompe d\'injection B. La degradation progressive du doseur commence par de legeres imprecisions de dosage (P0257) avant d\'evoluer vers des defaillances completes (P0256, P0258, P0259). Intervenir au stade du P0257 permet souvent de se limiter a un reconditionnement de la pompe ou a un remplacement du solenoid, tandis qu\'attendre une panne complete peut necessiter le remplacement de la pompe entiere et potentiellement des reparations supplementaires sur les injecteurs et le moteur.'
      },
      {
        question: 'Un additif peut-il resoudre un P0257?',
        answer: 'Oui, si la cause est un encrassement partiel du mecanisme de dosage, un additif nettoyant pour pompe d\'injection peut ameliorer la situation. Les additifs de qualite contiennent des detergents qui dissolvent les depots de vernis et d\'impuretes dans la pompe. Ajoutez l\'additif dans un reservoir plein et roulez 200-300 km. Si le code disparait apres effacement et ne revient pas, l\'additif a fonctionne. Pour les cas d\'usure mecanique reelle du doseur, l\'additif ne sera pas suffisant. Le cout de l\'additif (15-30 euros) en fait une premiere tentative raisonnable avant des interventions plus couteuses sur la pompe d\'injection.'
      },
      {
        question: 'Comment comparer les performances des circuits A et B?',
        answer: 'La comparaison des performances des circuits A et B se fait avec une valise OBD capable d\'afficher les parametres en temps reel. Comparez les corrections de debit (trims) de chaque cylindre : les cylindres du circuit A et du circuit B doivent avoir des valeurs de correction similaires. Des corrections significativement differentes entre les deux bancs indiquent un desequilibre. Vous pouvez aussi comparer les pressions de rampe commune si le systeme est en common rail, ou les debits de retour des injecteurs de chaque banc. Un specialiste en injection diesel dispose d\'un banc d\'essai pour mesurer le debit reel de chaque circuit.'
      },
      {
        question: 'Le P0257 peut-il causer un echec au controle technique?',
        answer: 'Oui, le code P0257 allume le voyant moteur, ce qui est un motif de refus au controle technique. De plus, le desequilibre de dosage entre les cylindres augmente les emissions polluantes, ce qui peut egalement provoquer un echec au test de pollution. Pour passer le controle technique, il faut reparer le probleme, effacer le code defaut et rouler suffisamment pour que les moniteurs OBD completent leurs tests de validation. Prevoyez un delai de reparation d\'au moins deux semaines avant la date du controle technique pour avoir le temps de diagnostiquer et reparer le probleme.'
      },
      {
        question: 'Le P0257 est-il lie au code P0252?',
        answer: 'Le P0252 et le P0257 signalent le meme type de defaut (probleme de plage ou de performance du doseur) mais sur des circuits differents. Le P0252 concerne le doseur A (premier circuit d\'injection) et le P0257 concerne le doseur B (deuxieme circuit). Si les deux codes sont presents simultanement, cela peut indiquer un probleme general du systeme d\'injection (carburant de mauvaise qualite, filtre bouche en amont des deux circuits) plutot qu\'un probleme specifique a un doseur. Si un seul code est present, le probleme est plus probablement localise dans le circuit concerne.'
      }
    ],
    relatedCodes: ['P0256', 'P0258', 'P0259', 'P0252', 'P0200']
  },
  P0258: {
    code: 'P0258',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0258 signale un signal trop bas (circuit bas) sur le doseur de carburant de la pompe d'injection B. Ce code indique que le calculateur moteur detecte une tension ou un courant inferieur au seuil minimal attendu sur le circuit de commande du doseur B. Sans commande adequate, le doseur B ne peut pas reguler correctement le debit de carburant vers les cylindres du deuxieme banc, entrainant un fonctionnement desequilibre du moteur. Ce code est equivalent au P0253 mais concerne le deuxieme circuit d'injection. La gravite est elevee car une partie des cylindres du moteur ne recoit plus la quantite correcte de carburant, ce qui peut provoquer des calages partiels et des vibrations severes.",
    symptoms: [
      'Voyant moteur allume avec vibrations severes du moteur',
      'Perte de puissance importante sur un banc de cylindres',
      'Ralenti tres irregulier avec risque de calage',
      'Fumee excessive du cote de l\'echappement du banc B',
      'A-coups violents lors des accelerations',
      'Bruit de cognement du cote du banc B',
      'Surconsommation de carburant tres marquee'
    ],
    causes: [
      'Bobine du solenoid du doseur B coupee ou en circuit ouvert (30%)',
      'Circuit ouvert dans le faisceau electrique du doseur B (25%)',
      'Court-circuit a la masse du fil de commande B (15%)',
      'Connecteur du doseur B corrode ou endommage (10%)',
      'Pompe d\'injection B avec doseur interne defaillant (10%)',
      'Fusible du circuit d\'injection B grille (5%)',
      'Masse electrique du circuit B defectueuse (3%)',
      'Driver de sortie du calculateur endommage sur le canal B (2%)'
    ],
    solutions: [
      'Verifier le fusible du circuit d\'injection B en priorite (2-5 euros)',
      'Mesurer la resistance du solenoid du doseur B (diagnostic 50-80 euros)',
      'Inspecter le connecteur et le cablage du doseur B (gratuit a 30 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Remplacer le solenoid du doseur B si la bobine est coupee (100-300 euros)',
      'Faire reconditionner la pompe d\'injection B si le doseur interne est defaillant (300-800 euros)',
      'Controler les masses electriques du circuit B (diagnostic inclus)',
      'Tester le driver du calculateur sur le canal B (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un code P0258 est un defaut serieux car il signifie qu'une partie des cylindres du moteur ne recoit plus correctement le carburant. Le desequilibre entre les bancs A et B provoque des vibrations excessives qui peuvent endommager les supports moteur, les paliers de vilebrequin et les composants du systeme d'echappement. De plus, un calage partiel ou total du moteur est possible a tout moment, ce qui est dangereux en circulation. L'absence de combustion correcte genere une pollution excessive. Un diagnostic en urgence sous 48 heures est recommande.",
    faq: [
      {
        question: 'Le P0258 peut-il provoquer un calage du moteur en roulant?',
        answer: 'Oui, un doseur B completement inoperant peut provoquer un calage du moteur, surtout si le moteur ne peut pas fonctionner de maniere stable avec seulement le circuit A. Sur un moteur V6, si trois cylindres sur six ne recoivent plus de carburant, le moteur n\'a pas assez de puissance pour maintenir le ralenti et peut caler. Ce risque est particulierement eleve au ralenti (feux rouges, embouteillages) ou lors des phases de deceleration. Si le moteur cale en circulation, vous perdez l\'assistance de direction et de freinage, rendant le vehicule difficile a controler.'
      },
      {
        question: 'Comment diagnostiquer un P0258 sur un moteur a double pompe?',
        answer: 'Le diagnostic commence par un test electrique du circuit du doseur B. Mesurez la resistance de la bobine du solenoid (generalement 5-15 ohms). Verifiez la continuite du cablage entre le calculateur et le doseur B. Testez l\'alimentation et la masse du circuit. Si le circuit electrique est correct, le probleme est interne a la pompe. Comparez les debits et pressions des circuits A et B avec une valise OBD : des differences significatives confirment le dysfonctionnement du doseur B. Un specialiste en injection diesel peut tester la pompe B sur un banc d\'essai pour localiser le probleme.'
      },
      {
        question: 'Faut-il remplacer la pompe B complete ou seulement le solenoid?',
        answer: 'Cela depend de la cause exacte du P0258. Si le probleme est electrique (bobine coupee, connecteur corrode), le remplacement du solenoid seul suffit (100-300 euros). Si le probleme est mecanique (doseur grippee, segments uses, fuites internes), le reconditionnement de la pompe est necessaire (300-800 euros). Un test sur banc d\'essai permet de determiner l\'etendue des degats. Dans certains cas, la pompe est trop usee pour etre reconditionnee et doit etre remplacee (500-1500 euros). Ne remplacez jamais la pompe sans avoir d\'abord verifie le circuit electrique.'
      },
      {
        question: 'Les vibrations du P0258 peuvent-elles endommager le moteur?',
        answer: 'Oui, les vibrations causees par le desequilibre de fonctionnement entre les bancs A et B peuvent provoquer des degats mecaniques a long terme. Les supports moteur (silentblocs) sont les premiers touches et s\'usent de maniere prematuree sous l\'effet des vibrations asymetriques. Les paliers de vilebrequin subissent egalement des contraintes anormales car le couple moteur n\'est plus reparti uniformement. La ligne d\'echappement, les collecteurs et les raccords flexibles souffrent aussi des vibrations. Si vous roulez longtemps avec ces vibrations, les couts de reparation augmentent significativement.'
      },
      {
        question: 'Le P0258 est-il lie au P0253?',
        answer: 'Oui, le P0258 est l\'equivalent du P0253 mais pour le circuit B au lieu du circuit A. Le P0253 concerne le doseur de la pompe d\'injection A (premier circuit), tandis que le P0258 concerne le doseur de la pompe B (deuxieme circuit). Les symptomes, causes et solutions sont similaires, mais les composants concernes sont differents. Si les deux codes P0253 et P0258 sont presents simultanement, cela peut indiquer un probleme commun comme un calculateur defaillant, une masse electrique generale deterioree, ou un probleme d\'alimentation electrique affectant les deux circuits en meme temps.'
      }
    ],
    relatedCodes: ['P0256', 'P0257', 'P0259', 'P0253', 'P0200']
  },
  P0259: {
    code: 'P0259',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0259 signale un signal trop eleve (circuit haut) sur le doseur de carburant de la pompe d'injection B. Le calculateur moteur detecte une tension ou un courant depassant le seuil maximum autorise sur le circuit de commande du doseur B. Ce code est le complementaire du P0258 et peut indiquer un court-circuit au positif dans le cablage, un solenoid en court-circuit interne, ou un probleme du driver de sortie du calculateur sur le canal B. Un signal trop eleve peut provoquer une surinjection de carburant dans les cylindres du banc B, avec des risques de surchauffe, de dilution d'huile et potentiellement d'emballement du moteur. Ce code est classe comme serieux en raison des risques mecaniques associes a la surinjection.",
    symptoms: [
      'Voyant moteur allume avec mode degrade active',
      'Fumee noire tres epaisse du cote du banc B',
      'Surconsommation de carburant tres importante',
      'Odeur forte de gasoil non brule a l\'echappement',
      'Regime moteur potentiellement instable',
      'Cognement ou detonation dans les cylindres du banc B',
      'Huile moteur diluee par le carburant en exces'
    ],
    causes: [
      'Court-circuit au positif dans le cablage du doseur B (30%)',
      'Solenoid du doseur B en court-circuit interne (25%)',
      'Defaillance du driver de sortie du calculateur sur le canal B (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin dans le faisceau (10%)',
      'Faisceau electrique endommage par chaleur ou frottement (5%)',
      'Doseur B bloque en position ouverte dans la pompe (3%)',
      'Mauvais branchement apres intervention sur le circuit B (2%)'
    ],
    solutions: [
      'Arreter le moteur immediatement en cas de regime instable ou emballement (urgence)',
      'Verifier le cablage du doseur B pour un court-circuit au positif (diagnostic 50-80 euros)',
      'Mesurer la tension sur le circuit du doseur B moteur arrete (diagnostic inclus)',
      'Remplacer le solenoid du doseur B si en court-circuit interne (100-300 euros)',
      'Reparer le faisceau electrique si un court-circuit est identifie (80-200 euros)',
      'Tester le driver du calculateur sur le canal B (diagnostic specialise 80-150 euros)',
      'Inspecter le connecteur du doseur B pour broches tordues ou corrodees (gratuit a 15 euros)',
      'Controler le niveau et l\'etat de l\'huile moteur pour dilution (vidange 50-80 euros si necessaire)'
    ],
    riskExplanation: "Un code P0259 est serieux car un signal trop eleve sur le doseur B peut provoquer une surinjection de carburant dans les cylindres concernes. Le carburant en exces ne brule pas completement, provoquant une fumee noire importante, une dilution de l'huile moteur et un risque de surchauffe des cylindres. Dans les cas extremes, la surinjection peut conduire a un emballement partiel du moteur diesel. Le court-circuit peut aussi endommager le calculateur moteur. Ce code necessite un arret rapide du vehicule et un diagnostic en urgence sous 24 a 48 heures.",
    faq: [
      {
        question: 'Le P0259 peut-il provoquer un emballement du moteur diesel?',
        answer: 'Oui, c\'est l\'un des risques les plus graves associes au P0259. Si le doseur B est bloque en position ouverte ou si le court-circuit maintient une injection maximale, les cylindres du banc B recoivent un exces de carburant qui peut maintenir un regime eleve. Bien que l\'emballement total soit rare sur les moteurs modernes grace aux protections electroniques, un emballement partiel est possible. En cas de regime moteur qui monte de maniere incontrolee, passez au point mort, essayez de couper le contact, et en dernier recours, bouchez l\'entree d\'air du moteur pour le caler.'
      },
      {
        question: 'Comment savoir si l\'huile moteur est diluee par le gasoil?',
        answer: 'Plusieurs indicateurs permettent de detecter la dilution. Verifiez le niveau d\'huile : s\'il est au-dessus du maximum sur la jauge, c\'est un signe de dilution. Sentez l\'huile sur la jauge : une odeur de gasoil est caracteristique. L\'huile diluee est plus fluide et s\'ecoule plus facilement. Un laboratoire d\'analyse d\'huile peut mesurer le pourcentage exact de dilution (20-50 euros). Au-dela de 5% de dilution, l\'huile perd ses proprietes lubrifiantes et doit etre changee immediatement car elle ne protege plus correctement les paliers moteur et le turbo.'
      },
      {
        question: 'Le mode degrade protege-t-il efficacement contre la surinjection?',
        answer: 'Le mode degrade est concu pour limiter les risques, mais il n\'est pas infaillible. Il reduit la quantite maximale de carburant autorisee et limite le regime moteur. Cependant, si le court-circuit est dans le cablage et que le doseur recoit du courant independamment de la commande du calculateur, le mode degrade ne peut pas empecher la surinjection. C\'est pourquoi le P0259 est dangereux : le calculateur peut perdre le controle du doseur B si le court-circuit contourne la commande electronique. En cas de fumee noire excessive ou de regime instable, coupez le moteur immediatement.'
      },
      {
        question: 'Faut-il faire une vidange apres un P0259?',
        answer: 'Oui, il est fortement recommande de faire une vidange d\'huile moteur apres avoir repare un P0259, surtout si le defaut etait present pendant plusieurs kilometres. La dilution de l\'huile par le carburant reduit sa viscosite et ses capacites de lubrification, mettant en danger les paliers de vilebrequin, les segments et le turbocompresseur. Utilisez une huile de qualite conforme aux specifications du constructeur. Si la dilution etait importante (niveau d\'huile tres au-dessus du maximum), envisagez aussi de remplacer le filtre a huile. Le cout d\'une vidange (50-80 euros) est negligeable compare aux degats potentiels.'
      },
      {
        question: 'Le P0259 et le P0254 sont-ils le meme type de defaut?',
        answer: 'Oui, le P0259 est l\'equivalent du P0254 mais pour le circuit B au lieu du circuit A. Les deux codes signalent un signal trop eleve sur le doseur de carburant, mais le P0254 concerne la pompe d\'injection A et le P0259 concerne la pompe B. Les causes, symptomes et risques sont similaires : court-circuit au positif, surinjection potentielle, risque d\'emballement. Les procedures de diagnostic sont les memes, appliquees au circuit concerne. Si les deux codes sont presents simultanement, cela peut indiquer un probleme commun comme un retour de tension general dans le faisceau.'
      }
    ],
    relatedCodes: ['P0256', 'P0257', 'P0258', 'P0254', 'P0200']
  },
  P0260: {
    code: 'P0260',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0260 concerne un dysfonctionnement intermittent du doseur de carburant de la pompe d'injection B. Ce code indique que le calculateur moteur a detecte des interruptions ou des fluctuations aleatoires dans le signal de commande du doseur B. Le signal varie de maniere imprevue entre des valeurs normales et anormales, ce qui indique generalement un probleme de connectique, un cablage partiellement endommage, ou un composant en fin de vie. L'intermittence rend le diagnostic plus complexe car le defaut peut ne pas etre present au moment de l'inspection. Ce code est l'equivalent du P0255 pour le circuit B et signale un probleme naissant qui va probablement s'aggraver avec le temps si on ne le traite pas.",
    symptoms: [
      'Voyant moteur intermittent (s\'allume puis s\'eteint aleatoirement)',
      'A-coups moteur imprevisibles et sporadiques',
      'Variations de regime aleatoires au ralenti',
      'Calages occasionnels, souvent a chaud',
      'Demarrages parfois laborieux sans raison apparente',
      'Desequilibre intermittent entre les bancs de cylindres',
      'Performances variables d\'un trajet a l\'autre'
    ],
    causes: [
      'Faux contact dans le connecteur du doseur B (30%)',
      'Fil du faisceau electrique partiellement coupe (25%)',
      'Solenoid du doseur B en fin de vie avec fonctionnement erratique (15%)',
      'Corrosion intermittente sur les broches du connecteur B (10%)',
      'Masse electrique intermittente du circuit B (10%)',
      'Soudure froide dans le connecteur ou le calculateur (5%)',
      'Probleme thermique (defaut seulement a chaud ou a froid) (3%)',
      'Interference electromagnetique perturbant le signal B (2%)'
    ],
    solutions: [
      'Inspecter minutieusement le connecteur du doseur B et nettoyer les broches (gratuit a 20 euros)',
      'Tester le faisceau en le manipulant pendant les mesures pour reveler le defaut (diagnostic 50-80 euros)',
      'Verifier les masses electriques du circuit B (diagnostic inclus)',
      'Remplacer le connecteur du doseur B si les broches sont corrodees (20-50 euros)',
      'Reparer le faisceau electrique en cas de fil endommage (80-200 euros)',
      'Appliquer de la graisse dielectrique sur les connecteurs (5-10 euros)',
      'Remplacer le solenoid du doseur B si l\'intermittence persiste (100-300 euros)',
      'Effectuer un diagnostic thermique (test moteur froid puis chaud) (diagnostic 80-120 euros)'
    ],
    riskExplanation: "Un defaut intermittent du doseur B est imprevisible et peut provoquer des calages ou des a-coups moteur a tout moment. Le conducteur ne peut pas anticiper quand le probleme va se manifester, ce qui est risque en circulation dense ou sur voie rapide. Les variations de dosage repetees accelerent l'usure des injecteurs et du systeme de depollution du banc B. L'intermittence va systematiquement s'aggraver et evoluer vers un defaut permanent si l'on n'intervient pas rapidement. Un diagnostic approfondi sous deux semaines est recommande.",
    faq: [
      {
        question: 'Le P0260 est-il difficile a diagnostiquer?',
        answer: 'Oui, les defauts intermittents sont parmi les plus complexes a diagnostiquer car le probleme n\'est pas toujours present au moment de l\'inspection. Le mecanicien doit reproduire les conditions qui declenchent le defaut : vibrations, chaleur, humidite. La technique consiste a brancher un enregistreur de donnees OBD et a conduire en conditions normales pour capturer le moment ou le defaut se produit. Pendant les tests statiques, manipuler le connecteur et le faisceau electrique en mesurant les valeurs peut reveler un faux contact. Un diagnostic de qualite prend generalement plus de temps qu\'un defaut permanent.'
      },
      {
        question: 'Peut-on ignorer un P0260 s\'il ne se manifeste que rarement?',
        answer: 'Non, il est deconseille d\'ignorer un P0260 meme s\'il se manifeste rarement. Les defauts intermittents ont tendance a s\'aggraver avec le temps : ce qui arrive une fois par semaine aujourd\'hui se produira quotidiennement dans quelques mois. De plus, chaque episode de dosage incorrect endommage progressivement les composants du circuit B. Le cout de reparation augmente avec le temps car les degats secondaires s\'accumulent. Il est plus economique de traiter un P0260 a son debut (souvent un simple probleme de connecteur a 20-50 euros) que d\'attendre une panne complete qui coutera beaucoup plus cher.'
      },
      {
        question: 'Comment prevenir les faux contacts sur les connecteurs d\'injection?',
        answer: 'La prevention des faux contacts passe par plusieurs mesures simples. Appliquez de la graisse dielectrique sur les broches des connecteurs lors de chaque revision (5-10 euros le tube). Assurez-vous que les protections etanches des connecteurs sont en place et en bon etat. Evitez les lavages haute pression du compartiment moteur. Verifiez que les clips de maintien des connecteurs sont fonctionnels. Dans les regions cotieres ou salines, nettoyez les connecteurs deux fois par an avec un spray contact electrique. Un entretien preventif de la connectique coute quelques euros mais peut eviter des pannes couteuses.'
      },
      {
        question: 'Le P0260 peut-il etre stocke sans allumer le voyant?',
        answer: 'Oui, les defauts intermittents sont souvent stockes en memoire du calculateur comme defauts memorises ou historiques sans allumer le voyant moteur. Le calculateur attend typiquement que le defaut se reproduise sur 2-3 cycles de conduite consecutifs avant d\'allumer le voyant. Si le defaut est suffisamment rare, il restera en memoire historique sans activer le voyant. C\'est pourquoi il est recommande de faire lire la memoire du calculateur regulierement, meme sans voyant allume, pour detecter les problemes naissants avant qu\'ils ne s\'aggravent et ne provoquent des pannes en conduite.'
      },
      {
        question: 'Le P0260 est-il l\'equivalent du P0255 pour le circuit B?',
        answer: 'Oui, exactement. Le P0255 signale un dysfonctionnement intermittent du doseur A (premier circuit d\'injection) et le P0260 signale le meme type de defaut sur le doseur B (deuxieme circuit). Les causes, symptomes et procedures de diagnostic sont similaires, mais appliques au circuit B. Si les deux codes P0255 et P0260 sont presents en meme temps, cela peut indiquer un probleme commun aux deux circuits, comme une masse generale deterioree ou un probleme du calculateur moteur. Un diagnostic simultane des deux circuits est alors necessaire pour identifier la cause commune.'
      }
    ],
    relatedCodes: ['P0256', 'P0257', 'P0258', 'P0259', 'P0255']
  },
  P0261: {
    code: 'P0261',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0261 signale un signal trop bas sur le circuit de l'injecteur du cylindre 1. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur numero 1 est inferieur au seuil minimum attendu. Cela peut indiquer un circuit ouvert, un court-circuit a la masse, ou un injecteur defaillant. Les injecteurs sont des composants essentiels du systeme d'alimentation en carburant qui pulverisent le carburant sous haute pression dans la chambre de combustion. Un injecteur qui ne recoit pas la commande electrique correcte ne peut pas s'ouvrir normalement, ce qui affecte la combustion dans le cylindre 1. Ce code est frequent sur les vehicules a fort kilometrage ou apres des problemes electriques.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 1',
      'Ralenti irregulier avec tremblements perceptibles',
      'Perte de puissance notable (un cylindre inactif)',
      'Augmentation de la consommation de carburant',
      'Odeur de carburant non brule a l\'echappement',
      'A-coups lors des accelerations',
      'Bruit de fonctionnement moteur irregulier'
    ],
    causes: [
      'Injecteur du cylindre 1 defaillant (bobine coupee) (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 1 (25%)',
      'Connecteur de l\'injecteur 1 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur hors specifications (10%)',
      'Probleme de driver d\'injecteur dans le calculateur (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Mauvaise masse electrique du circuit d\'injection (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 1 (12-16 ohms pour essence) (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 1 et le nettoyer (gratuit a 15 euros)',
      'Verifier la continuite du cablage entre le calculateur et l\'injecteur (diagnostic inclus)',
      'Remplacer l\'injecteur du cylindre 1 si defectueux (80-300 euros selon le type)',
      'Reparer le faisceau electrique si un circuit ouvert est detecte (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Controler les masses electriques du circuit d\'injection (diagnostic inclus)',
      'Tester le driver d\'injecteur du calculateur si necessaire (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 1 qui ne fonctionne pas correctement signifie qu'un cylindre du moteur ne participe pas pleinement a la combustion. Le carburant non brule est envoye dans l'echappement, ce qui peut endommager le catalyseur et les sondes lambda. Sur un moteur 4 cylindres, la perte d'un cylindre represente 25% de la puissance en moins, ce qui affecte significativement la conduite. Les vibrations dues au desequilibre peuvent user les supports moteur. Il est recommande de diagnostiquer ce code sous une a deux semaines.",
    faq: [
      {
        question: 'Comment mesurer la resistance de l\'injecteur du cylindre 1?',
        answer: 'Pour mesurer la resistance de l\'injecteur, debranchez le connecteur electrique de l\'injecteur du cylindre 1 et reglez votre multimetre sur la fonction ohmmetre. Placez les pointes de mesure sur les deux broches du connecteur de l\'injecteur. Pour un injecteur essence classique, la resistance doit etre entre 12 et 16 ohms (haute impedance) ou 2 a 5 ohms (basse impedance). Pour un injecteur diesel piezoelectrique, les valeurs sont differentes. Une resistance infinie indique une bobine coupee, une resistance tres faible indique un court-circuit. Comparez avec les autres injecteurs qui doivent avoir des valeurs similaires.'
      },
      {
        question: 'Le P0261 est-il toujours un probleme d\'injecteur?',
        answer: 'Non, dans seulement 30% des cas environ, l\'injecteur lui-meme est la cause. Les 70% restants sont lies au circuit electrique : cablage coupe ou endommage (25%), connecteur corrode (15%), court-circuit a la masse (10%), resistance hors specifications (10%), problemes de driver ou de fusible (10%). C\'est pourquoi il est important de faire un diagnostic electrique complet avant de remplacer l\'injecteur. Un injecteur coute 80-300 euros, alors qu\'une reparation de connecteur peut couter 15-50 euros. Commencez toujours par verifier le circuit electrique avant de remplacer les pieces.'
      },
      {
        question: 'Peut-on echanger les injecteurs entre cylindres pour confirmer le diagnostic?',
        answer: 'Oui, c\'est une technique de diagnostic tres efficace. Echangez l\'injecteur du cylindre 1 avec celui d\'un autre cylindre. Effacez les codes defaut et faites un essai routier. Si le code P0261 suit l\'injecteur au nouveau cylindre, c\'est bien l\'injecteur qui est en cause. Si le code reste sur le cylindre 1 malgre l\'echange, le probleme est dans le cablage ou le connecteur du cylindre 1. Cette methode ne coute rien et permet de confirmer si l\'injecteur doit etre remplace ou si c\'est le circuit electrique qui pose probleme. Sur les moteurs diesel common rail, chaque injecteur est code et doit etre reconfigure apres echange.'
      },
      {
        question: 'Le P0261 peut-il endommager le catalyseur?',
        answer: 'Oui, un injecteur du cylindre 1 qui ne fonctionne pas correctement peut endommager le catalyseur. Si l\'injecteur ne s\'ouvre pas, le melange est trop pauvre, provoquant des rates d\'allumage. Si l\'injecteur reste ouvert, le carburant non brule entre dans le catalyseur et brule a l\'interieur, provoquant une surchauffe pouvant atteindre plus de 1000 degres. Cette surchauffe peut fondre le substrat ceramique du catalyseur et le detruire. Un catalyseur de remplacement coute 400-1500 euros, soit bien plus qu\'un injecteur. Reparez rapidement le P0261 pour proteger votre catalyseur.'
      },
      {
        question: 'Un nettoyage des injecteurs peut-il resoudre un P0261?',
        answer: 'Non, un nettoyage des injecteurs ne resoudra generalement pas un P0261. Ce code signale un probleme electrique (signal trop bas), pas un probleme de debit ou d\'encrassement. Le nettoyage ameliore le debit et la pulverisation mais ne repare pas une bobine coupee ou un cablage endommage. Le nettoyage est utile pour les codes de contribution ou de performance, pas pour les codes de circuit. Si le P0261 est present, concentrez le diagnostic sur le circuit electrique : resistance de la bobine, continuite du cablage, etat du connecteur. Le nettoyage est un complement utile si l\'injecteur est remplace.'
      }
    ],
    relatedCodes: ['P0200', 'P0201', 'P0262', 'P0263', 'P0301']
  },
  P0262: {
    code: 'P0262',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0262 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 1. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur 1 depasse le seuil maximum autorise. Ce code est le complementaire du P0261 et peut indiquer un court-circuit au positif dans le cablage, un retour de tension parasite, ou une defaillance de l'injecteur avec un court-circuit interne. Un signal trop eleve sur le circuit de l'injecteur peut provoquer une ouverture prolongee, entrainant une surinjection de carburant dans le cylindre 1. Ce code necessite une attention rapide car la surinjection peut endommager le moteur et le systeme de depollution.",
    symptoms: [
      'Voyant moteur allume avec possible mode degrade',
      'Fumee noire excessive a l\'echappement (surinjection cylindre 1)',
      'Odeur forte de carburant non brule',
      'Ralenti irregulier avec un cylindre qui injecte trop',
      'Surconsommation de carburant notable',
      'Catalyseur pouvant surchauffer',
      'Huile moteur potentiellement diluee par le carburant en exces'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 1 (30%)',
      'Injecteur 1 en court-circuit interne (bobine vers carcasse) (25%)',
      'Defaillance du driver d\'injecteur dans le calculateur (15%)',
      'Connecteur de l\'injecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique fondu pres d\'une source de chaleur (5%)',
      'Injecteur de remplacement avec resistance incorrecte (3%)',
      'Probleme de relais d\'alimentation des injecteurs (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 1 pour un court-circuit au positif (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 1 et comparer aux specifications (diagnostic inclus)',
      'Inspecter le connecteur pour des broches tordues ou un pontage (gratuit a 15 euros)',
      'Remplacer l\'injecteur 1 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si un court-circuit est trouve (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'alimentation des injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution et faire une vidange si necessaire (50-80 euros)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur du cylindre 1 peut maintenir l'injecteur ouvert en permanence, provoquant une surinjection continue. Le carburant en exces ne brule pas completement, surchauffe le catalyseur et peut diluer l'huile moteur. Sur un moteur essence, la surinjection noie la bougie. Sur un moteur diesel, le risque d'endommagement mecanique (coup de liquide) existe si l'injection est massive. De plus, le court-circuit peut endommager le driver d'injecteur du calculateur. Diagnostic recommande sous une semaine.",
    faq: [
      {
        question: 'Un court-circuit de l\'injecteur peut-il endommager le calculateur?',
        answer: 'Oui, un court-circuit dans le circuit de l\'injecteur 1 peut endommager le driver de sortie dans le calculateur moteur. Ce driver est concu pour supporter un courant specifique correspondant a la resistance normale de l\'injecteur. Un court-circuit au positif envoie un courant excessif vers le driver, pouvant le faire surchauffer et griller. La reparation du driver coute 150-400 euros chez un specialiste en electronique, ou 500-1500 euros pour le remplacement du calculateur complet. C\'est pourquoi il est crucial de trouver et reparer la cause du court-circuit rapidement.'
      },
      {
        question: 'Comment verifier si l\'injecteur est en court-circuit interne?',
        answer: 'Pour verifier un court-circuit interne, mesurez la resistance entre les deux broches du connecteur de l\'injecteur avec un multimetre. Si la resistance est tres inferieure a la valeur nominale (par exemple 2 ohms au lieu de 12-16 ohms pour un injecteur haute impedance), l\'injecteur est en court-circuit interne. Vous pouvez aussi mesurer l\'isolement entre chaque broche et la carcasse metallique (masse) : la resistance doit etre superieure a 100K ohms. Si vous mesurez une resistance faible vers la masse, il y a un court-circuit interne entre la bobine et le corps de l\'injecteur, et celui-ci doit etre remplace.'
      },
      {
        question: 'Le P0262 peut-il causer un noyage du cylindre 1?',
        answer: 'Oui, sur un moteur essence, si l\'injecteur 1 reste ouvert en permanence, le cylindre se remplit de carburant liquide non brule. La bougie d\'allumage est mouillee et ne peut plus generer d\'etincelle, le cylindre cesse de fonctionner. Pour remedier a un cylindre noye, retirez la bougie, sechez-la, et faites tourner le moteur avec le demarreur pour evacuer le carburant. Sur un moteur diesel, le carburant liquide dans le cylindre peut provoquer un coup de liquide (bielle pliee) car le gasoil est incompressible. C\'est un risque mecanique tres grave qui necessite l\'arret immediat du moteur.'
      },
      {
        question: 'Faut-il remplacer tous les injecteurs si un seul est en court-circuit?',
        answer: 'Non, il n\'est generalement pas necessaire de remplacer tous les injecteurs si un seul est defectueux. Chaque injecteur est un composant independant. Cependant, si les injecteurs ont tous le meme age et le meme kilometrage (plus de 150 000 km), et que l\'un est en court-circuit, les autres approchent de leur fin de vie. Un remplacement preventif peut etre justifie, surtout si la main d\'oeuvre est importante. Le choix depend du rapport entre le cout des pieces et celui de la main d\'oeuvre pour votre vehicule specifique. Discutez-en avec votre mecanicien.'
      },
      {
        question: 'Le P0262 peut-il etre cause par un mauvais injecteur de remplacement?',
        answer: 'Oui, si un injecteur de remplacement avec une resistance differente de l\'original est installe, le calculateur peut detecter un courant anormal. Par exemple, installer un injecteur basse impedance (2-5 ohms) a la place d\'un injecteur haute impedance (12-16 ohms) provoque un courant excessif. Verifiez toujours que l\'injecteur de remplacement correspond exactement aux specifications du constructeur (meme reference, meme resistance, meme debit). Un injecteur universel ou inadapte peut sembler fonctionner mais generer des codes defaut et endommager le driver du calculateur a long terme.'
      }
    ],
    relatedCodes: ['P0200', 'P0201', 'P0261', 'P0263', 'P0301']
  },
  P0263: {
    code: 'P0263',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0263 signale un probleme de contribution du cylindre 1 detecte par le calculateur moteur. Ce code est enregistre lorsque le calculateur identifie que le cylindre 1 contribue de maniere anormale au couple moteur, soit en fournissant trop de puissance (surinjection), soit pas assez (sous-injection). Le calculateur utilise le capteur de regime vilebrequin pour mesurer l'acceleration angulaire a chaque combustion et detecter si un cylindre produit plus ou moins de couple que les autres. Ce code est different des codes de rate d'allumage (P030x) car il mesure la contribution effective au couple et non simplement l'absence de combustion. Il est frequent sur les moteurs diesel modernes equipes de systemes de diagnostic avances.",
    symptoms: [
      'Voyant moteur allume avec possible correction automatique du dosage',
      'Ralenti legerement irregulier mais souvent compense par le calculateur',
      'Vibrations subtiles perceptibles au ralenti ou a bas regime',
      'Legere surconsommation de carburant',
      'Performances moteur legerement en retrait',
      'Bruit moteur legerement asymetrique',
      'Variations de couple perceptibles lors des accelerations douces'
    ],
    causes: [
      'Injecteur du cylindre 1 delivrant un debit incorrect (30%)',
      'Compression insuffisante du cylindre 1 (segments ou soupapes uses) (20%)',
      'Calage de l\'injection incorrect pour le cylindre 1 (15%)',
      'Buse d\'injecteur encrassee ou partiellement bouchee (10%)',
      'Probleme mecanique dans le cylindre 1 (joint de culasse, soupape) (10%)',
      'Capteur de regime vilebrequin delivrant un signal imprecis (5%)',
      'Fuite d\'air sur le cylindre 1 (joint d\'admission) (5%)',
      'Calculateur avec logiciel necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 1 et comparer avec les autres (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 1 sur un banc d\'essai (diagnostic 50-80 euros par injecteur)',
      'Nettoyer les injecteurs avec un nettoyage ultrasons si encrassement (100-200 euros le jeu)',
      'Remplacer l\'injecteur du cylindre 1 si son debit est hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection et le corriger si necessaire (diagnostic 50-100 euros)',
      'Controler l\'etat du joint de culasse et des soupapes du cylindre 1 (diagnostic 100-200 euros)',
      'Verifier le signal du capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 1 indique un desequilibre dans le fonctionnement du moteur. Bien que le calculateur compense partiellement en ajustant le dosage, cette compensation a ses limites et ne corrige pas la cause sous-jacente. Un injecteur delivrant un debit incorrect use le moteur et le systeme de depollution de maniere acceleree. Une compression faible sur un cylindre peut s'aggraver et necessiter des reparations couteuses a terme. Les vibrations usent les supports moteur. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Qu\'est-ce que la contribution d\'un cylindre et comment est-elle mesuree?',
        answer: 'La contribution d\'un cylindre represente la part de couple moteur que chaque cylindre fournit lors de sa combustion. Le calculateur mesure cette contribution en analysant les micro-variations de vitesse de rotation du vilebrequin grace au capteur de regime. Chaque combustion provoque une acceleration angulaire du vilebrequin, et si un cylindre produit moins de couple que les autres, l\'acceleration sera plus faible a ce moment. Le calculateur compare les contributions de tous les cylindres et detecte les ecarts. Sur les moteurs diesel modernes, cette mesure est tres precise et permet de detecter des ecarts de quelques pourcents entre cylindres.'
      },
      {
        question: 'Le P0263 est-il plus grave qu\'un rate d\'allumage P0301?',
        answer: 'Le P0263 et le P0301 mesurent des aspects differents du fonctionnement du cylindre 1. Le P0301 detecte un rate d\'allumage (absence de combustion), tandis que le P0263 detecte une contribution anormale au couple (combustion presente mais imparfaite). Le P0263 est generalement moins grave que le P0301 car le cylindre fonctionne encore, meme de maniere sous-optimale. Cependant, le P0263 peut signaler des problemes mecaniques (compression, soupapes) que le P0301 ne detecte pas forcement. Les deux codes necessitent un diagnostic mais avec des degres d\'urgence differents.'
      },
      {
        question: 'Le P0263 peut-il etre corrige par un nettoyage des injecteurs?',
        answer: 'Oui, dans environ 30-40% des cas, un nettoyage professionnel des injecteurs peut resoudre le P0263. Si la cause est un encrassement partiel de la buse de l\'injecteur 1 qui modifie la pulverisation du carburant, un nettoyage par ultrasons suivi d\'un test sur banc d\'essai peut restaurer le debit nominal. Un additif nettoyant injecteurs dans le reservoir (10-20 euros) peut aussi ameliorer la situation pour les encrassements legers. Cependant, si l\'injecteur est mecaniquement use ou si le probleme est lie a la compression du cylindre, le nettoyage ne suffira pas et une intervention mecanique sera necessaire.'
      },
      {
        question: 'Comment savoir si c\'est un probleme de compression ou d\'injecteur?',
        answer: 'Pour differencier les deux, effectuez un test de compression du cylindre 1 et comparez avec les autres cylindres. La compression doit etre uniforme (ecart maximum de 10-15% entre cylindres). Si la compression du cylindre 1 est nettement inferieure, le probleme est mecanique (segments, soupapes, joint de culasse). Si la compression est normale, faites tester l\'injecteur sur un banc d\'essai pour verifier son debit, sa pulverisation et son etancheite. Echangez l\'injecteur du cylindre 1 avec un autre : si le code suit l\'injecteur, c\'est lui la cause. Si le code reste sur le cylindre 1, c\'est un probleme mecanique du cylindre.'
      },
      {
        question: 'Le calculateur peut-il compenser indefiniment un probleme de contribution?',
        answer: 'Non, la capacite de compensation du calculateur a des limites. Le calculateur peut ajuster le dosage dans une plage de correction typiquement de plus ou moins 20-30 pourcent. Au-dela de cette plage, il enregistre le code P0263 car la correction necessaire depasse ses capacites. Tant que la correction est dans la plage acceptable, le moteur fonctionne a peu pres normalement mais la surconsommation et l\'usure supplementaire sont reelles. Si le probleme s\'aggrave et que la correction depasse les limites, le moteur sera desequilibre et les symptomes deviendront evidents pour le conducteur.'
      }
    ],
    relatedCodes: ['P0261', 'P0262', 'P0201', 'P0301', 'P0264']
  },
  P0264: {
    code: 'P0264',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0264 signale un signal trop bas sur le circuit de l'injecteur du cylindre 2. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 2 est inferieur au seuil minimum attendu. Ce code est l'equivalent du P0261 mais pour le cylindre 2. Un signal trop bas indique generalement un circuit ouvert, un court-circuit a la masse, ou un injecteur dont la bobine est coupee. Sans commande electrique adequate, l'injecteur du cylindre 2 ne peut pas s'ouvrir correctement, ce qui affecte la combustion et les performances du moteur. Le cylindre 2 est le deuxieme dans l'ordre de numerotation defini par le constructeur du vehicule.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 2',
      'Ralenti irregulier avec tremblements du moteur',
      'Perte de puissance (un cylindre inactif ou partiellement actif)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule a l\'echappement',
      'A-coups lors des accelerations',
      'Vibrations excessives surtout au ralenti et a bas regime'
    ],
    causes: [
      'Injecteur du cylindre 2 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 2 (25%)',
      'Connecteur de l\'injecteur 2 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 2 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant pour le cylindre 2 (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique deterioree du circuit d\'injection (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 2 (12-16 ohms pour essence) (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 2 et nettoyer les broches (gratuit a 15 euros)',
      'Verifier la continuite du cablage entre le calculateur et l\'injecteur 2 (diagnostic inclus)',
      'Echanger l\'injecteur 2 avec un autre cylindre pour confirmer le diagnostic (gratuit)',
      'Remplacer l\'injecteur du cylindre 2 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur pour le cylindre 2 (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 2 qui ne fonctionne pas correctement reduit la puissance du moteur et provoque un desequilibre de fonctionnement. Le carburant non brule atteint le catalyseur et peut le surchauffer, entrainant sa destruction a terme. Sur un moteur 4 cylindres, la perte d'un cylindre represente 25% de puissance en moins, rendant la conduite difficile. Les vibrations du desequilibre usent les supports moteur et les composants mecaniques. Un diagnostic sous une a deux semaines est recommande pour eviter des dommages au catalyseur.",
    faq: [
      {
        question: 'Comment identifier le cylindre 2 sur mon moteur?',
        answer: 'La numerotation des cylindres varie selon le constructeur et le type de moteur. Sur la plupart des moteurs 4 cylindres en ligne, le cylindre 1 est du cote de la distribution (courroie ou chaine) et le cylindre 2 est le suivant. Sur les moteurs en V, le cylindre 2 peut etre sur le banc 1 ou le banc 2 selon le constructeur. Consultez le manuel technique de votre vehicule pour la numerotation exacte. En general, les bougies ou les injecteurs sont numerotes dans l\'ordre sur le couvre-culasse. Un schema du moteur dans le carnet d\'entretien vous donnera la position precise du cylindre 2.'
      },
      {
        question: 'La technique d\'echange d\'injecteurs fonctionne-t-elle pour le P0264?',
        answer: 'Oui, l\'echange d\'injecteurs entre cylindres est une technique de diagnostic fiable et gratuite. Echangez l\'injecteur du cylindre 2 avec celui du cylindre 3 par exemple. Effacez les codes et faites un essai routier. Si le code passe de P0264 a P0267 (cylindre 3), l\'injecteur est en cause et doit etre remplace. Si le code P0264 reste malgre l\'echange, le probleme est dans le cablage ou le connecteur du cylindre 2. Sur les moteurs diesel common rail, chaque injecteur est code individuellement (IMA) et doit etre reconfigure dans le calculateur apres echange, ce qui necessite une valise de diagnostic.'
      },
      {
        question: 'Le P0264 peut-il etre intermittent?',
        answer: 'Oui, comme tout code de circuit electrique, le P0264 peut etre intermittent. Un connecteur legerement desserre, un fil avec une coupure partielle ou une corrosion debutante peut provoquer un contact intermittent. Le code apparait puis disparait selon les vibrations du moteur et la temperature. Un P0264 intermittent est souvent plus difficile a diagnostiquer car le defaut n\'est pas toujours present lors de l\'inspection. La technique consiste a manipuler le connecteur et le faisceau pendant les mesures electriques pour provoquer le defaut. L\'application de graisse dielectrique peut parfois resoudre un probleme de contact.'
      },
      {
        question: 'Combien coute le remplacement de l\'injecteur du cylindre 2?',
        answer: 'Le cout depend du type de moteur et d\'injecteur. Pour un injecteur essence haute impedance classique : 80-150 euros la piece plus 30-60 euros de main d\'oeuvre. Pour un injecteur essence a injection directe : 150-300 euros la piece. Pour un injecteur diesel common rail : 200-500 euros la piece plus 50-100 euros de main d\'oeuvre et la reconfiguration du code IMA. Sur certains moteurs ou l\'acces est difficile (moteurs transversaux, injecteurs sous le collecteur d\'admission), la main d\'oeuvre peut etre plus elevee. Le diagnostic prealable (50-80 euros) est essentiel pour confirmer la cause.'
      },
      {
        question: 'Le P0264 et le P0302 peuvent-ils apparaitre ensemble?',
        answer: 'Oui, c\'est meme frequent. Le P0264 (signal trop bas injecteur cylindre 2) indique que l\'injecteur ne recoit pas la commande correcte. Si l\'injecteur ne fonctionne pas, le cylindre 2 ne produit pas de combustion, ce que le calculateur detecte aussi comme un rate d\'allumage (P0302). Les deux codes sont complementaires : le P0264 identifie la cause (probleme electrique de l\'injecteur) et le P0302 identifie la consequence (rate d\'allumage). Si les deux codes sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 2 car c\'est lui qui est a l\'origine du probleme.'
      }
    ],
    relatedCodes: ['P0200', 'P0202', 'P0265', 'P0266', 'P0302']
  },
  P0265: {
    code: 'P0265',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0265 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 2. Le calculateur detecte que la tension ou le courant dans le circuit de commande de l'injecteur 2 depasse le seuil maximum autorise. Ce code est le complementaire du P0264 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un probleme du driver d'injecteur dans le calculateur. Un signal excessif peut provoquer une ouverture prolongee de l'injecteur, entrainant une surinjection de carburant dans le cylindre 2. La surinjection peut surchauffer le catalyseur et diluer l'huile moteur, necessitant une attention rapide.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire excessive',
      'Surinjection visible dans le cylindre 2 (fumee, odeur)',
      'Ralenti irregulier avec un cylindre surdose',
      'Surconsommation de carburant notable',
      'Risque de surchauffe du catalyseur',
      'Odeur forte de carburant non brule a l\'echappement',
      'Huile moteur potentiellement diluee par le carburant'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 2 (30%)',
      'Injecteur 2 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant pour le cylindre 2 (15%)',
      'Connecteur de l\'injecteur 2 avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur ou usure (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 2 pour un court-circuit au positif (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 2 et comparer avec les specifications (diagnostic inclus)',
      'Inspecter le connecteur pour des broches tordues ou pontees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 2 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si un court-circuit est detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution et vidanger si necessaire (50-80 euros)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur du cylindre 2 peut provoquer une surinjection continue de carburant. Le carburant en exces surchauffe le catalyseur, pouvant le detruire (400-1500 euros). Il peut aussi diluer l'huile moteur, reduisant la lubrification et risquant d'endommager les paliers et le turbo. Le court-circuit peut griller le driver d'injecteur du calculateur (150-400 euros de reparation). Un diagnostic sous une semaine est recommande pour eviter l'accumulation de dommages couteux.",
    faq: [
      {
        question: 'Comment savoir si l\'injecteur 2 reste ouvert en permanence?',
        answer: 'Plusieurs indices permettent de detecter un injecteur bloque ouvert. Debranchez l\'injecteur suspect et ecoutez le moteur : si le ralenti s\'ameliore, l\'injecteur injectait trop. Verifiez la bougie correspondante (moteur essence) : une bougie noire et mouillee confirme la surinjection. Mesurez le niveau d\'huile : un niveau qui monte anormalement indique une dilution par le carburant. Avec une valise OBD, observez les corrections de carburant : une correction fortement negative sur le cylindre 2 indique que le calculateur essaie de compenser une injection excessive sur ce cylindre.'
      },
      {
        question: 'Le P0265 peut-il provoquer un noyage du moteur?',
        answer: 'Oui, sur un moteur essence, un injecteur 2 bloque ouvert peut noyer le cylindre 2 en le remplissant de carburant liquide non brule. La bougie mouillee ne peut plus enflammer le melange et le cylindre cesse de fonctionner. Le carburant liquide peut aussi etre aspire dans le collecteur d\'admission et affecter les cylindres voisins. Sur un moteur diesel, le risque est encore plus grave : un exces important de carburant liquide dans le cylindre peut provoquer un coup de liquide hydraulique qui peut plier une bielle. Ne continuez pas a rouler si vous constatez une fumee noire tres importante.'
      },
      {
        question: 'Le remplacement du connecteur peut-il resoudre le P0265?',
        answer: 'Oui, dans environ 10-15% des cas, un simple remplacement ou nettoyage du connecteur de l\'injecteur 2 resout le P0265. Un connecteur avec des broches corrodees ou pontees par des debris peut creer un court-circuit. Le nettoyage des broches avec un spray contact et une brosse metallique fine peut suffire. Si les broches sont trop endommagees, un connecteur de remplacement coute 10-30 euros. Apres nettoyage ou remplacement, effacez le code et faites un essai routier pour verifier si le probleme est resolu. Si le code revient, le probleme est dans le cablage, l\'injecteur ou le calculateur.'
      },
      {
        question: 'Faut-il faire une vidange apres un P0265 avec dilution d\'huile?',
        answer: 'Oui, absolument. Si l\'injecteur 2 a injecte un exces de carburant qui a dilue l\'huile moteur, une vidange immediate est necessaire. L\'huile diluee perd ses proprietes lubrifiantes, mettant en danger les paliers de vilebrequin, les segments, le turbocompresseur et tous les organes lubrifies du moteur. Verifiez le niveau d\'huile : s\'il depasse le maximum sur la jauge et que l\'huile sent le carburant, changez l\'huile et le filtre immediatement. Le cout d\'une vidange (50-80 euros) est negligeable face aux degats d\'un moteur mal lubrifie qui peut couter des milliers d\'euros.'
      },
      {
        question: 'Le P0265 et le P0262 sont-ils le meme type de defaut?',
        answer: 'Oui, les codes P0262 et P0265 signalent le meme type de defaut (signal trop eleve sur un circuit d\'injecteur) mais pour des cylindres differents. Le P0262 concerne le cylindre 1 et le P0265 concerne le cylindre 2. Les causes, symptomes, risques et procedures de diagnostic sont identiques, seul l\'emplacement du composant change. Si les deux codes sont presents simultanement, cela peut indiquer un probleme commun aux deux circuits : retour de tension general, masse commune defaillante, relais d\'injecteurs defectueux, ou calculateur avec plusieurs drivers endommages.'
      }
    ],
    relatedCodes: ['P0200', 'P0202', 'P0264', 'P0266', 'P0302']
  },
  P0266: {
    code: 'P0266',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0266 signale un probleme de contribution du cylindre 2 detecte par le calculateur moteur. Ce code est enregistre lorsque le cylindre 2 ne contribue pas de maniere normale au couple moteur total. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution de chaque cylindre. Si le cylindre 2 produit un couple significativement different des autres cylindres, le code P0266 est enregistre. Ce code est l'equivalent du P0263 mais pour le cylindre 2. Il est plus courant sur les moteurs diesel modernes equipes de systemes de surveillance avances de la contribution individuelle de chaque cylindre a la production de couple moteur.",
    symptoms: [
      'Voyant moteur allume avec possible correction automatique du dosage',
      'Legeres vibrations au ralenti compensees par le calculateur',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances moteur en leger retrait',
      'Bruit moteur legerement irregulier',
      'Variations de couple subtiles en acceleration douce'
    ],
    causes: [
      'Injecteur du cylindre 2 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 2 (20%)',
      'Buse d\'injecteur 2 encrassee ou partiellement bouchee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 2 (10%)',
      'Probleme mecanique (joint de culasse, soupape) sur le cylindre 2 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 2 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 2 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 2 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-200 euros le jeu complet)',
      'Remplacer l\'injecteur du cylindre 2 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler l\'etat des soupapes et du joint de culasse du cylindre 2 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 2 signifie que le moteur ne fonctionne pas de maniere equilibree. Le calculateur compense partiellement en ajustant le dosage, mais cette compensation masque un probleme sous-jacent qui peut s'aggraver. Un injecteur avec un debit incorrect use le cylindre concerne et encrasse le systeme de depollution. Une compression faible indique une usure mecanique progressive. Les vibrations du desequilibre affectent les supports moteur a long terme. Un diagnostic sous trois semaines est recommande pour identifier la cause.",
    faq: [
      {
        question: 'Le P0266 necessite-t-il forcement le remplacement de l\'injecteur?',
        answer: 'Non, le remplacement de l\'injecteur n\'est pas toujours necessaire. Dans environ 30% des cas, un nettoyage professionnel des injecteurs par ultrasons peut restaurer un debit normal et resoudre le P0266. Un additif nettoyant dans le reservoir peut aussi aider pour les encrassements legers. Si la cause est une compression faible ou un probleme de soupape, le remplacement de l\'injecteur ne resoudra pas le probleme. C\'est pourquoi un diagnostic precis (test de compression plus test d\'injecteur sur banc) est essentiel avant toute reparation et permet d\'eviter des remplacements inutiles.'
      },
      {
        question: 'Comment le calculateur mesure-t-il la contribution de chaque cylindre?',
        answer: 'Le calculateur utilise le capteur de regime vilebrequin, qui detecte le passage de chaque dent de la couronne du volant moteur avec une precision extreme. Entre chaque combustion, le vilebrequin accelere (quand le cylindre produit du couple) puis decelere (phase de compression suivante). En mesurant ces micro-variations de vitesse avec une precision de quelques microsecondes, le calculateur peut calculer la contribution de chaque cylindre au couple total. Un cylindre qui produit moins de couple cause une acceleration moindre, detectable par le calculateur. Cette mesure est continue et tres precise.'
      },
      {
        question: 'Le P0266 peut-il disparaitre avec un simple effacement?',
        answer: 'L\'effacement du code le fera disparaitre temporairement, mais si le probleme n\'est pas resolu, le code reviendra apres quelques cycles de conduite (50-200 km). Le calculateur mesure en permanence la contribution de chaque cylindre et re-detectera l\'anomalie. Cependant, dans de rares cas, le P0266 peut etre un defaut passager apres un evenement ponctuel (carburant de mauvaise qualite, conduite extreme). Si le code ne revient pas apres effacement et 200 km de conduite normale, il s\'agissait d\'un evenement isole non significatif.'
      },
      {
        question: 'Le P0266 affecte-t-il les emissions polluantes?',
        answer: 'Oui, un desequilibre de contribution du cylindre 2 affecte directement les emissions polluantes. Un cylindre avec un dosage incorrect produit davantage de particules de suie (dosage trop riche) ou d\'oxydes d\'azote (dosage trop pauvre). Le filtre a particules et le catalyseur sont soumis a des charges asymetriques, reduisant leur duree de vie. De plus, le calculateur doit corriger le dosage pour compenser, ce qui peut affecter les emissions globales. Au controle technique, les mesures de pollution peuvent etre hors limites si le desequilibre est important.'
      },
      {
        question: 'Le P0266 est-il un code frequent sur les vehicules diesel?',
        answer: 'Oui, le P0266 est relativement frequent sur les moteurs diesel modernes (common rail) qui disposent de systemes de surveillance avances. Les marques qui utilisent le plus cette surveillance incluent BMW, Mercedes, Audi, Volkswagen et certains modeles Peugeot et Citroen. Le code apparait souvent apres 100 000-150 000 km lorsque les injecteurs commencent a presenter des ecarts de debit ou que la compression diminue naturellement avec l\'usure. Sur les moteurs essence, ce diagnostic est moins repandu car les systemes se concentrent sur la detection des rates d\'allumage via les codes P030x.'
      }
    ],
    relatedCodes: ['P0264', 'P0265', 'P0202', 'P0302', 'P0263']
  },
  P0267: {
    code: 'P0267',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0267 signale un signal trop bas sur le circuit de l'injecteur du cylindre 3. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 3 est inferieur au seuil minimum attendu. Ce code fait partie de la serie de codes d'injecteurs individuels et concerne specifiquement le troisieme cylindre. Un signal insuffisant empeche l'injecteur de s'ouvrir correctement, perturbant la combustion dans ce cylindre. Les causes sont generalement d'ordre electrique (cablage, connecteur, bobine d'injecteur) et le diagnostic suit les memes etapes que pour les codes equivalents des cylindres 1 et 2 (P0261, P0264).",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 3',
      'Ralenti irregulier avec vibrations du moteur',
      'Perte de puissance due au cylindre 3 inactif',
      'Augmentation de la consommation de carburant',
      'A-coups lors des accelerations',
      'Odeur de carburant non brule a l\'echappement',
      'Bruit moteur irregulier (un cylindre manquant)'
    ],
    causes: [
      'Injecteur du cylindre 3 avec bobine coupee ou defaillante (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 3 (25%)',
      'Connecteur de l\'injecteur 3 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 3 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant pour le cylindre 3 (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique du circuit d\'injection defectueuse (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 3 et comparer aux autres (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 3 et nettoyer les broches (gratuit a 15 euros)',
      'Verifier la continuite du cablage entre calculateur et injecteur 3 (diagnostic inclus)',
      'Echanger l\'injecteur 3 avec un autre cylindre pour isoler le defaut (gratuit)',
      'Remplacer l\'injecteur du cylindre 3 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur pour le cylindre 3 (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 3 ne fonctionnant pas correctement provoque un desequilibre moteur significatif. Le carburant non brule est rejete dans l'echappement, surchauffant le catalyseur et risquant de le detruire (400-1500 euros). Sur un moteur 4 cylindres, la perte du cylindre 3 represente 25% de puissance en moins, affectant la conduite et la securite. Les vibrations usent les supports moteur et les composants mecaniques. Diagnostic recommande sous une a deux semaines.",
    faq: [
      {
        question: 'Le cylindre 3 est-il souvent concerne par des problemes d\'injecteur?',
        answer: 'Aucun cylindre n\'est statistiquement plus sujet que les autres aux problemes d\'injecteur electriques. Cependant, sur les moteurs en ligne, le cylindre 3 est souvent au centre du moteur, dans une zone ou les temperatures sont les plus elevees, ce qui peut accelerer le vieillissement du cablage et des connecteurs. Sur certains moteurs V6, le cylindre 3 est sur le banc 2 et son acces peut etre plus difficile. Mais globalement, les problemes d\'injecteur sont repartis de maniere aleatoire entre les cylindres du moteur et dependent surtout de l\'etat general du faisceau electrique.'
      },
      {
        question: 'Peut-on rouler avec un cylindre 3 inactif?',
        answer: 'Techniquement oui, mais c\'est deconseille au-dela du trajet jusqu\'au garage. Un moteur avec un cylindre inactif vibre beaucoup plus, consomme plus, et surtout envoie du carburant non brule dans le catalyseur qui peut surchauffer et etre detruit. La perte de 25% de puissance (sur un 4 cylindres) rend les depassements et les insertions dangereuses. Sur autoroute, le manque de puissance peut etre critique dans certaines situations. Limitez vos deplacements au strict minimum et faites diagnostiquer le vehicule dans les meilleurs delais pour eviter d\'aggraver les degats.'
      },
      {
        question: 'Le P0267 peut-il etre cause par un probleme de calculateur?',
        answer: 'Oui, dans environ 5-7% des cas, le probleme vient du driver d\'injecteur dans le calculateur moteur. Le driver est un transistor de puissance qui commute le courant vers l\'injecteur. Si ce transistor est endommage (surchauffe, surtension), il ne peut plus delivrer le courant necessaire. Pour diagnostiquer, verifiez que le signal de commande est present en sortie du calculateur avec un oscilloscope. Si aucun signal n\'est emis alors que le cablage et l\'injecteur sont corrects, le driver est en cause. La reparation coute 150-400 euros chez un specialiste en electronique automobile.'
      },
      {
        question: 'Le P0267 est-il different du P0203?',
        answer: 'Oui, les codes P0267 et P0203 concernent tous les deux l\'injecteur du cylindre 3 mais indiquent des defauts differents. Le P0203 signale un dysfonctionnement general du circuit (probleme detecte mais non specifie), tandis que le P0267 est plus specifique : il signale un signal trop bas (circuit bas), orientant vers un circuit ouvert ou un court-circuit a la masse. Le P0203 peut englober des problemes de signal haut, bas, ou de performance, tandis que le P0267 concerne exclusivement un signal insuffisant. Les deux codes peuvent d\'ailleurs etre presents simultanement sur le meme vehicule.'
      },
      {
        question: 'Un nettoyage des injecteurs peut-il resoudre un P0267?',
        answer: 'Non, un nettoyage des injecteurs ne resoudra generalement pas un P0267. Ce code signale un probleme electrique (signal trop bas), pas un probleme de debit ou d\'encrassement. Le nettoyage ameliore le debit et la pulverisation mais ne repare pas une bobine coupee ou un cablage endommage. Si le P0267 est present, concentrez le diagnostic sur le circuit electrique : resistance de la bobine, continuite du cablage, etat du connecteur. Le nettoyage est utile pour les codes de contribution (P0269) ou de performance, mais pas pour les codes de circuit bas qui indiquent un probleme electrique.'
      }
    ],
    relatedCodes: ['P0200', 'P0203', 'P0268', 'P0269', 'P0303']
  },
  P0268: {
    code: 'P0268',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0268 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 3. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise. Ce code est le complementaire du P0267 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un probleme du driver d'injecteur. Un signal excessif peut provoquer une ouverture prolongee de l'injecteur, entrainant une surinjection de carburant dans le cylindre 3. Ce code necessite une attention rapide car la surinjection peut endommager le catalyseur par surchauffe et diluer l'huile moteur, reduisant la lubrification des composants mecaniques internes du moteur.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire',
      'Surinjection dans le cylindre 3 visible par la fumee',
      'Ralenti irregulier avec un cylindre qui injecte trop',
      'Surconsommation de carburant notable',
      'Risque de surchauffe du catalyseur',
      'Odeur forte de carburant non brule',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 3 (30%)',
      'Injecteur 3 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant pour le cylindre 3 (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 3 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 3 et comparer aux specifications (diagnostic inclus)',
      'Inspecter le connecteur pour des broches tordues ou pontees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 3 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si un court-circuit est detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 50-80 euros si necessaire)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur du cylindre 3 peut provoquer une surinjection continue. Le carburant en exces surchauffe le catalyseur et peut le detruire (400-1500 euros). La dilution de l'huile moteur reduit la lubrification, risquant d'endommager les paliers et le turbo. Le court-circuit peut egalement endommager le driver d'injecteur du calculateur. Sur un moteur diesel, une surinjection massive peut provoquer un coup de liquide. Un diagnostic sous une semaine est recommande pour proteger le moteur et le systeme de depollution.",
    faq: [
      {
        question: 'Comment diagnostiquer un court-circuit au positif sur l\'injecteur 3?',
        answer: 'Pour diagnostiquer un court-circuit au positif, debranchez le connecteur de l\'injecteur 3 et le connecteur du calculateur. Avec un multimetre regle en voltmetre, mesurez la tension sur le fil de commande cote faisceau. Si vous mesurez une tension (12V ou autre) alors que rien ne devrait etre alimente, il y a un court-circuit au positif. Le fil touche probablement un autre fil sous tension. Suivez le trajet du faisceau et inspectez les zones de frottement, les passages de cloison et les zones proches de sources de chaleur ou l\'isolant peut avoir fondu. Un testeur de continuite aide a localiser le point de contact exact.'
      },
      {
        question: 'Le P0268 peut-il endommager le catalyseur rapidement?',
        answer: 'Oui, un injecteur bloque ouvert peut endommager le catalyseur en quelques minutes de fonctionnement. Le carburant non brule qui entre dans le catalyseur s\'enflamme a l\'interieur, provoquant des temperatures superieures a 1000 degres Celsius. Le substrat ceramique du catalyseur (nid d\'abeilles) peut fondre partiellement ou completement, rendant le catalyseur inoperant. Un catalyseur detruit coute 400-1500 euros a remplacer. C\'est pourquoi il est important de ne pas rouler longtemps avec un P0268 actif, surtout si vous constatez une fumee noire importante ou une odeur forte de carburant a l\'echappement.'
      },
      {
        question: 'Le P0268 et le P0265 sont-ils le meme type de defaut?',
        answer: 'Oui, les codes P0265 et P0268 signalent le meme type de defaut (signal trop eleve sur un circuit d\'injecteur) mais pour des cylindres differents : le P0265 pour le cylindre 2 et le P0268 pour le cylindre 3. Les causes, symptomes, risques et procedures de diagnostic sont identiques. Si les deux codes ou plus sont presents simultanement, recherchez un probleme commun : retour de tension general, relais d\'injecteurs defectueux, masse commune defaillante, ou probleme dans le calculateur moteur affectant plusieurs canaux d\'injection.'
      },
      {
        question: 'Peut-on continuer a rouler avec un P0268?',
        answer: 'Il est deconseille de rouler longtemps avec un P0268 actif. Si le vehicule est en mode degrade avec une puissance limitee, vous pouvez rouler prudemment jusqu\'au garage le plus proche. Cependant, si vous observez une fumee noire epaisse, une odeur forte de carburant ou un regime instable, arretez le moteur immediatement. La surinjection continue peut detruire le catalyseur en quelques kilometres et diluer l\'huile moteur dangereusement. Faites remorquer le vehicule si les symptomes sont severes plutot que de risquer des degats supplementaires couteux.'
      },
      {
        question: 'Faut-il verifier le niveau d\'huile apres un P0268?',
        answer: 'Oui, verifiez systematiquement le niveau d\'huile si un P0268 est present. Si l\'injecteur 3 a surinjete du carburant, une partie du carburant non brule peut passer les segments et se retrouver dans l\'huile moteur. Un niveau d\'huile anormalement eleve (au-dessus du maximum sur la jauge) et une odeur de carburant sur la jauge sont des signes de dilution. Si l\'huile est diluee, faites une vidange immediatement car l\'huile diluee ne protege plus les composants moteur. Apres reparation du P0268, refaites une vidange pour vous assurer que l\'huile est propre et a la bonne viscosite.'
      }
    ],
    relatedCodes: ['P0200', 'P0203', 'P0267', 'P0269', 'P0303']
  },
  P0269: {
    code: 'P0269',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0269 signale un probleme de contribution du cylindre 3 detecte par le calculateur moteur. Ce code indique que le cylindre 3 ne contribue pas normalement au couple moteur total. Le calculateur utilise le capteur de regime vilebrequin pour analyser les micro-variations de vitesse et determiner si chaque cylindre produit la quantite de couple attendue. Si le cylindre 3 produit un couple significativement different des autres, le P0269 est enregistre. Ce code est l'equivalent du P0263 (cylindre 1) et P0266 (cylindre 2) mais pour le cylindre 3. Il est principalement rencontre sur les moteurs diesel common rail modernes.",
    symptoms: [
      'Voyant moteur allume avec correction de dosage par le calculateur',
      'Legeres vibrations au ralenti',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances moteur en leger retrait',
      'Bruit moteur legerement asymetrique',
      'Variations de couple perceptibles en conduite souple'
    ],
    causes: [
      'Injecteur du cylindre 3 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 3 (20%)',
      'Buse d\'injecteur 3 encrassee ou bouchee partiellement (15%)',
      'Calage de l\'injection incorrect pour le cylindre 3 (10%)',
      'Probleme mecanique sur le cylindre 3 (soupape, joint) (10%)',
      'Capteur de regime vilebrequin avec signal imprecis (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 3 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 3 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 3 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-200 euros le jeu)',
      'Remplacer l\'injecteur du cylindre 3 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 3 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 3 indique un desequilibre de fonctionnement du moteur. Le calculateur compense partiellement par le dosage mais ne corrige pas la cause sous-jacente. Un injecteur avec un debit incorrect use le cylindre de maniere inegale et encrasse le systeme de depollution. Une compression faible indique une usure mecanique qui va progresser. Les vibrations du desequilibre affectent les supports moteur et les composants mecaniques a long terme. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0269 est-il corrigible par un nettoyage d\'injecteurs?',
        answer: 'Oui, dans environ 30-40% des cas, un nettoyage professionnel des injecteurs peut resoudre le P0269. Si la cause est un encrassement partiel de la buse de l\'injecteur 3 qui modifie la pulverisation du carburant, un nettoyage par ultrasons suivi d\'un test sur banc d\'essai peut restaurer le debit nominal. Un additif nettoyant dans le reservoir (10-20 euros) peut aussi ameliorer la situation pour les encrassements legers. Cependant, si le probleme est mecanique (compression faible, soupapes usees) ou si l\'injecteur est use internement, le nettoyage ne suffira pas.'
      },
      {
        question: 'Comment differencier un probleme de compression et d\'injecteur?',
        answer: 'Effectuez un test de compression du cylindre 3 et comparez avec les autres cylindres. L\'ecart maximum acceptable est de 10-15%. Si la compression du cylindre 3 est nettement inferieure, le probleme est mecanique. Si la compression est normale, faites tester l\'injecteur sur banc d\'essai. Vous pouvez aussi echanger l\'injecteur du cylindre 3 avec un autre : si le code suit l\'injecteur au nouveau cylindre, l\'injecteur est en cause. Si le code reste sur le cylindre 3, c\'est un probleme mecanique du cylindre. Cette methode d\'echange est gratuite et tres fiable pour isoler la cause.'
      },
      {
        question: 'Le P0269 peut-il etre lie a un probleme de filtre a particules?',
        answer: 'Indirectement oui. Un dosage incorrect sur le cylindre 3 produit une combustion non optimale qui genere davantage de particules de suie. Ces particules supplementaires colmatent le filtre a particules (FAP/DPF) plus rapidement. A l\'inverse, un filtre a particules tres colmate peut creer une contre-pression d\'echappement excessive qui affecte la combustion de maniere inegale entre les cylindres, declenchant un P0269. Si le P0269 est accompagne de codes de filtre a particules (P2002, P2463), traitez d\'abord le probleme d\'injecteur avant de s\'occuper du filtre.'
      },
      {
        question: 'Le code P0269 apparait-il sur les moteurs essence?',
        answer: 'Le P0269 est beaucoup plus frequent sur les moteurs diesel que sur les moteurs essence. Les moteurs diesel common rail modernes disposent de systemes de surveillance de la contribution individuelle de chaque cylindre, ce qui n\'est pas le cas de la plupart des moteurs essence. Sur les moteurs essence, le diagnostic se concentre sur les rates d\'allumage (P030x) plutot que sur la contribution au couple. Cependant, certains moteurs essence haut de gamme avec injection directe et systemes avances peuvent egalement generer ce type de code.'
      },
      {
        question: 'Quel est le cout moyen de reparation d\'un P0269?',
        answer: 'Le cout depend de la cause identifiee. Pour un nettoyage d\'injecteurs : 100-200 euros le jeu. Pour le remplacement de l\'injecteur du cylindre 3 : 80-300 euros en essence, 200-500 euros en diesel common rail, plus la main d\'oeuvre. Pour un probleme de compression (refection de culasse) : 800-2000 euros. Le diagnostic initial (test de compression plus test d\'injecteur) coute 100-180 euros et permet d\'identifier la cause exacte. En moyenne, pour les cas les plus courants (injecteur encrasse ou use), comptez 150-400 euros tout compris.'
      }
    ],
    relatedCodes: ['P0267', 'P0268', 'P0203', 'P0303', 'P0266']
  },
  P0270: {
    code: 'P0270',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0270 signale un signal trop bas sur le circuit de l'injecteur du cylindre 4. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 4 est inferieur au seuil minimum attendu. Ce code est l'equivalent des P0261, P0264 et P0267 mais pour le quatrieme cylindre. Un signal trop bas indique un circuit ouvert, un court-circuit a la masse, ou un injecteur dont la bobine est coupee. Le cylindre 4 est generalement le dernier cylindre dans l'ordre de numerotation sur un moteur 4 cylindres en ligne, situe du cote oppose a la distribution. Sans commande electrique adequate, l'injecteur ne peut pas fonctionner normalement.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 4',
      'Ralenti irregulier avec tremblements du moteur',
      'Perte de puissance (un cylindre inactif)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule a l\'echappement',
      'A-coups lors des accelerations',
      'Vibrations excessives au ralenti et a bas regime'
    ],
    causes: [
      'Injecteur du cylindre 4 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 4 (25%)',
      'Connecteur de l\'injecteur 4 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 4 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique deterioree du circuit (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 4 (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 4 et nettoyer les broches (gratuit a 15 euros)',
      'Verifier la continuite du cablage entre calculateur et injecteur 4 (diagnostic inclus)',
      'Echanger l\'injecteur 4 avec un autre cylindre pour confirmer (gratuit)',
      'Remplacer l\'injecteur du cylindre 4 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 4 inactif provoque un desequilibre moteur significatif avec 25% de puissance en moins sur un moteur 4 cylindres. Le carburant non brule surchauffe le catalyseur et risque de le detruire. Les vibrations usent les supports moteur et les composants mecaniques. La conduite est affectee avec des depassements et insertions rendus dangereux par le manque de puissance. Diagnostic recommande sous une a deux semaines pour proteger le catalyseur et les composants du moteur.",
    faq: [
      {
        question: 'Le cylindre 4 est-il plus sujet aux problemes d\'injecteur?',
        answer: 'Le cylindre 4, etant le dernier sur un moteur en ligne, peut etre plus expose a certains problemes specifiques. Le faisceau electrique des injecteurs est souvent le plus long pour atteindre le cylindre 4, ce qui augmente legerement la probabilite de defauts de cablage. De plus, sur certains moteurs, le cylindre 4 est proche du tablier (cloison pare-feu), dans une zone ou les temperatures peuvent etre elevees et l\'acces est limite pour l\'entretien. Cela peut favoriser un vieillissement plus rapide du cablage et des connecteurs. Cependant, statistiquement, la difference reste faible.'
      },
      {
        question: 'Le P0270 et le P0304 apparaissent-ils souvent ensemble?',
        answer: 'Oui, c\'est frequent. Le P0270 (signal trop bas injecteur cylindre 4) indique que l\'injecteur ne recoit pas la commande correcte. Si l\'injecteur ne fonctionne pas, le cylindre 4 ne produit pas de combustion, ce que le calculateur detecte aussi comme un rate d\'allumage (P0304). Les deux codes sont complementaires : le P0270 identifie la cause electrique et le P0304 identifie la consequence (rate d\'allumage). Si les deux codes sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 4 car c\'est la cause premiere du rate d\'allumage.'
      },
      {
        question: 'Le P0270 peut-il causer un echec au controle technique?',
        answer: 'Oui, absolument. Le voyant moteur allume est un motif de refus au controle technique. De plus, un cylindre inactif augmente considerablement les emissions polluantes (hydrocarbures imbrules, monoxyde de carbone), ce qui peut aussi causer un echec au test de pollution. Pour passer le controle technique, il faut reparer le probleme, effacer le code et rouler suffisamment (50-100 km) pour que les moniteurs OBD completent leurs tests. Ne tentez pas de presenter le vehicule juste apres effacement du code car les moniteurs ne seront pas valides.'
      },
      {
        question: 'Combien coute la reparation d\'un P0270?',
        answer: 'Le cout depend de la cause : nettoyage de connecteur (gratuit a 15 euros), remplacement de fusible (2-5 euros), reparation de cablage (80-200 euros), remplacement d\'injecteur essence (80-300 euros) ou diesel common rail (200-500 euros). Le diagnostic (30-80 euros) est essentiel pour identifier la cause exacte et eviter des reparations inutiles. En moyenne, pour un probleme de connecteur ou de cablage, comptez 50-200 euros. Pour un remplacement d\'injecteur, comptez 150-500 euros tout compris selon le type de moteur et l\'accessibilite du cylindre 4.'
      },
      {
        question: 'Peut-on echanger l\'injecteur 4 avec un autre pour diagnostiquer?',
        answer: 'Oui, c\'est la meilleure methode de diagnostic. Echangez l\'injecteur du cylindre 4 avec celui du cylindre 1 par exemple. Effacez les codes et faites un essai routier. Si le code passe du P0270 au P0261 (cylindre 1), l\'injecteur est en cause. Si le P0270 reste malgre l\'echange, le probleme est dans le cablage ou le connecteur du cylindre 4. Sur les moteurs diesel common rail, n\'oubliez pas de reconfigurer les codes IMA des injecteurs dans le calculateur apres l\'echange, sinon le dosage sera incorrect et le diagnostic sera fausse.'
      }
    ],
    relatedCodes: ['P0200', 'P0204', 'P0271', 'P0272', 'P0304']
  },
  P0271: {
    code: 'P0271',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0271 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 4. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise. Ce code est le complementaire du P0270 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un driver defaillant dans le calculateur. Un signal excessif peut provoquer une ouverture prolongee ou permanente de l'injecteur, entrainant une surinjection de carburant dans le cylindre 4. Ce code necessite une attention rapide car la surinjection endommage le catalyseur et dilue l'huile moteur, compromettant la lubrification de l'ensemble du moteur.",
    symptoms: [
      'Voyant moteur allume avec fumee noire excessive',
      'Surinjection dans le cylindre 4',
      'Ralenti irregulier avec un cylindre surdose',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur',
      'Odeur forte de carburant non brule a l\'echappement',
      'Huile moteur potentiellement diluee par le carburant'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 4 (30%)',
      'Injecteur 4 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur ou usure (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 4 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 4 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches tordues ou pontees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 4 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si court-circuit detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution et vidanger si necessaire (50-80 euros)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur 4 peut maintenir l'injecteur ouvert, provoquant une surinjection continue. Le catalyseur surchauffe et peut etre detruit (400-1500 euros). L'huile moteur diluee ne protege plus les paliers et le turbo. Sur un moteur diesel, une surinjection massive peut provoquer un coup de liquide. Le court-circuit peut endommager le driver d'injecteur du calculateur (150-400 euros de reparation). Diagnostic sous une semaine est recommande pour limiter les degats.",
    faq: [
      {
        question: 'Le P0271 est-il plus grave que le P0270?',
        answer: 'Potentiellement oui. Le P0270 (signal trop bas) entraine generalement que l\'injecteur ne s\'ouvre pas, donc le cylindre 4 ne recoit pas de carburant : perte de puissance mais pas de risque de surinjection. Le P0271 (signal trop haut) peut provoquer une ouverture permanente de l\'injecteur, entrainant une surinjection continue qui endommage le catalyseur, dilue l\'huile et risque de causer un coup de liquide sur un moteur diesel. Le P0271 necessite donc une intervention plus urgente que le P0270, surtout si de la fumee noire epaisse est visible a l\'echappement.'
      },
      {
        question: 'Comment detecter une dilution de l\'huile par le carburant?',
        answer: 'Verifiez le niveau d\'huile sur la jauge : un niveau au-dessus du maximum est un signe de dilution. Sentez l\'huile : une odeur de carburant (essence ou gasoil) est caracteristique. L\'huile diluee est plus fluide que la normale et s\'ecoule rapidement de la jauge. Vous pouvez faire un test simple : deposez une goutte d\'huile sur un papier absorbant ; une huile diluee s\'etale plus vite et plus loin qu\'une huile normale. Si vous soupconnez une dilution, faites une vidange immediat et remplacez le filtre a huile. Au-dela de 5% de dilution, l\'huile ne protege plus le moteur.'
      },
      {
        question: 'Le court-circuit peut-il endommager le calculateur?',
        answer: 'Oui, un court-circuit dans le circuit de l\'injecteur 4 peut endommager le driver de sortie dans le calculateur. Le driver est un transistor concu pour un courant specifique. Un court-circuit au positif envoie un courant excessif qui peut griller le transistor. La reparation du driver chez un specialiste electronique coute 150-400 euros, le remplacement du calculateur complet 500-1500 euros. Reparez rapidement la cause du court-circuit pour eviter d\'endommager le calculateur. Si le calculateur est deja endommage, assurez-vous de reparer la cause du court-circuit avant de reparer ou remplacer le calculateur.'
      },
      {
        question: 'Peut-on rouler en securite avec un P0271?',
        answer: 'En mode degrade, le calculateur limite la puissance et le dosage, offrant une protection partielle. Vous pouvez rouler prudemment jusqu\'au garage le plus proche. Cependant, si vous observez une fumee noire epaisse, une odeur forte de carburant ou un regime moteur instable, arretez-vous immediatement et faites remorquer le vehicule. La surinjection continue peut detruire le catalyseur en quelques kilometres. Evitez les longs trajets, les autoroutes et les accelerations franches tant que le P0271 n\'est pas repare pour minimiser les risques de dommages supplementaires.'
      },
      {
        question: 'Le P0271 est-il specifique a certains types de moteurs?',
        answer: 'Le P0271 peut apparaitre sur tout moteur equipe d\'injecteurs electroniques, qu\'il soit essence ou diesel, a injection directe ou indirecte. Cependant, il est plus consequent sur les moteurs diesel car la surinjection de gasoil peut provoquer un coup de liquide (bielle pliee) en raison de l\'incompressibilite du carburant liquide dans le cylindre. Sur les moteurs essence, la surinjection noie la bougie et provoque un noyage plutot qu\'un coup de liquide. Dans les deux cas, le diagnostic et la reparation suivent les memes etapes : verification du cablage, test de l\'injecteur, inspection du connecteur.'
      }
    ],
    relatedCodes: ['P0200', 'P0204', 'P0270', 'P0272', 'P0304']
  },
  P0272: {
    code: 'P0272',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0272 signale un probleme de contribution du cylindre 4 detecte par le calculateur moteur. Ce code indique que le cylindre 4 ne contribue pas normalement au couple moteur total. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution de chaque cylindre. Si le cylindre 4 produit un couple significativement different des autres, le P0272 est enregistre. Ce code est l'equivalent du P0263 (cylindre 1), P0266 (cylindre 2) et P0269 (cylindre 3). Il est principalement rencontre sur les moteurs diesel common rail modernes equipes de systemes de surveillance avances de la contribution individuelle des cylindres.",
    symptoms: [
      'Voyant moteur allume avec correction automatique de dosage',
      'Legeres vibrations au ralenti',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances moteur en leger retrait',
      'Bruit moteur legerement asymetrique',
      'Variations de couple subtiles en conduite normale'
    ],
    causes: [
      'Injecteur du cylindre 4 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 4 (20%)',
      'Buse d\'injecteur 4 encrassee ou partiellement bouchee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 4 (10%)',
      'Probleme mecanique sur le cylindre 4 (soupape, joint) (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 4 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 4 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 4 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-200 euros le jeu)',
      'Remplacer l\'injecteur du cylindre 4 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 4 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 4 signifie que le moteur fonctionne de maniere desequilibree. Le calculateur compense partiellement en ajustant le dosage mais ne resout pas la cause sous-jacente. Un injecteur avec un debit incorrect use le cylindre de maniere inegale et encrasse le systeme de depollution. Une compression faible indique une usure mecanique qui va progresser. Les vibrations du desequilibre affectent les supports moteur a long terme. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0272 est-il un signe d\'usure du moteur?',
        answer: 'Pas necessairement. Le P0272 peut etre cause par un simple encrassement de l\'injecteur du cylindre 4, ce qui n\'est pas un signe d\'usure du moteur mais plutot d\'un entretien insuffisant. Cependant, si la cause est une compression faible sur le cylindre 4, cela peut effectivement indiquer une usure des segments, des guides de soupapes ou du joint de culasse. Un test de compression permet de differencier un probleme d\'injecteur (non lie a l\'usure du moteur) d\'un probleme mecanique (usure reelle). Si la compression est uniforme entre les cylindres, le moteur est sain et le probleme vient de l\'injection.'
      },
      {
        question: 'Le P0272 peut-il etre corrige par un additif?',
        answer: 'Un additif nettoyant pour injecteurs peut ameliorer la situation si la cause est un encrassement partiel de la buse de l\'injecteur 4. Ajoutez un additif de qualite dans un reservoir plein et roulez 200-300 km. Si le code disparait apres effacement et ne revient pas, l\'additif a fonctionne. Le taux de succes est d\'environ 20-30% pour les encrassements legers. Pour les encrassements severes, un nettoyage professionnel par ultrasons (100-200 euros) est plus efficace. Si le probleme est mecanique (compression faible), aucun additif ne resoudra le probleme et une intervention mecanique sera necessaire.'
      },
      {
        question: 'Le P0272 est-il plus courant sur le cylindre 4?',
        answer: 'Statistiquement, le cylindre 4 (dernier sur un moteur en ligne) peut etre legerement plus touche par les problemes de contribution, car il est souvent le plus eloigne du systeme d\'admission et peut recevoir une distribution d\'air ou de carburant legerement differente. De plus, sur certains moteurs, le cylindre 4 a le trajet d\'admission le plus long, ce qui peut affecter legerement le remplissage. Cependant, la difference reste marginale et le P0272 n\'est pas significativement plus frequent que les codes equivalents des autres cylindres.'
      },
      {
        question: 'Le P0272 affecte-t-il le filtre a particules?',
        answer: 'Oui, un dosage incorrect sur le cylindre 4 produit une combustion non optimale qui genere davantage de particules de suie. Ces particules supplementaires contribuent au colmatage premature du filtre a particules (FAP/DPF). Si le P0272 est present depuis longtemps, le filtre a particules peut etre significativement plus encrasse que la normale, necessitant des regenerations plus frequentes ou un nettoyage specialise. Reparer le P0272 rapidement aide a proteger le filtre a particules et a eviter des problemes de regeneration couteux.'
      },
      {
        question: 'Quel est le delai recommande pour reparer un P0272?',
        answer: 'Le P0272 n\'est pas un code d\'urgence car le calculateur compense partiellement le desequilibre. Un diagnostic sous trois semaines est recommande. Cependant, ne repoussez pas indefiniment la reparation car le probleme va s\'aggraver : la surconsommation augmente progressivement, le filtre a particules se colmate plus vite, et si la cause est mecanique, les degats s\'etendent. Prevoyez un budget de 100-400 euros pour la reparation dans les cas les plus courants (nettoyage ou remplacement d\'injecteur). Si un probleme de compression est diagnostique, les couts sont plus eleves (800-2000 euros pour une refection de culasse).'
      }
    ],
    relatedCodes: ['P0270', 'P0271', 'P0204', 'P0304', 'P0269']
  },
  P0273: {
    code: 'P0273',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0273 signale un signal trop bas sur le circuit de l'injecteur du cylindre 5. Ce code concerne les moteurs a 5 cylindres ou plus (V6, V8, 5 cylindres en ligne). Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 5 est inferieur au seuil minimum attendu. Comme pour les codes equivalents des autres cylindres, cela peut indiquer un circuit ouvert, un court-circuit a la masse, ou une bobine d'injecteur coupee. Le cylindre 5 est le premier cylindre du banc 2 sur les moteurs en V, ou le cinquieme sur les moteurs en ligne. Le diagnostic et les solutions sont analogues aux codes P0261, P0264, P0267 et P0270.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 5',
      'Ralenti irregulier avec vibrations',
      'Perte de puissance (un cylindre inactif)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule a l\'echappement',
      'A-coups lors des accelerations',
      'Bruit moteur asymetrique'
    ],
    causes: [
      'Injecteur du cylindre 5 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 5 (25%)',
      'Connecteur de l\'injecteur 5 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 5 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique du circuit deterioree (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 5 (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 5 et nettoyer les broches (gratuit a 15 euros)',
      'Verifier la continuite du cablage entre calculateur et injecteur 5 (diagnostic inclus)',
      'Echanger l\'injecteur 5 avec un autre cylindre pour confirmer (gratuit)',
      'Remplacer l\'injecteur du cylindre 5 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 5 inactif provoque un desequilibre moteur. Sur un moteur V6, la perte d'un cylindre represente environ 17% de puissance en moins. Le carburant non brule surchauffe le catalyseur. Sur les moteurs en V, le desequilibre entre les bancs genere des vibrations asymetriques. La conduite est degradee avec des performances reduites. Le catalyseur peut etre endommage si le defaut persiste. Diagnostic recommande sous une a deux semaines pour eviter des reparations supplementaires couteuses.",
    faq: [
      {
        question: 'Le cylindre 5 est-il sur le banc 1 ou le banc 2?',
        answer: 'La numerotation varie selon le constructeur. Sur la plupart des moteurs V6 et V8, le cylindre 5 est le premier cylindre du banc 2 (cote droit du moteur, vu de face). Sur les moteurs 5 cylindres en ligne (Audi, Volvo), c\'est simplement le cinquieme et dernier cylindre. Sur les moteurs V8, le cylindre 5 peut etre sur le banc 1 ou le banc 2 selon la convention du constructeur. Consultez le manuel technique de votre vehicule pour la numerotation exacte. Connaitre la position du cylindre 5 est essentiel pour localiser le bon injecteur et le bon cablage.'
      },
      {
        question: 'Le P0273 est-il plus difficile a reparer sur un moteur en V?',
        answer: 'Oui, souvent. Sur les moteurs en V, le cylindre 5 (generalement premier du banc 2) est souvent situe contre le tablier pare-feu, dans une zone d\'acces difficile. Le demontage de composants comme le collecteur d\'admission superieur peut etre necessaire pour acceder a l\'injecteur et son connecteur. Cela augmente le temps de main d\'oeuvre et donc le cout de la reparation. Sur un V6 transversal (traction avant), l\'acces au banc 2 est particulierement difficile et peut necessiter plusieurs heures de travail. Prevoyez un budget de main d\'oeuvre plus eleve que pour les cylindres du banc 1.'
      },
      {
        question: 'Le P0273 est-il courant sur les moteurs 5 cylindres?',
        answer: 'Les moteurs 5 cylindres (Audi, Volvo, Ford, Fiat) ont les memes probabilites de problemes d\'injecteur que tout autre moteur. Le cylindre 5, etant le dernier, a le trajet de cablage le plus long, ce qui peut legerement augmenter le risque de defauts de cablage. Sur les moteurs Audi 2.5 TDI 5 cylindres, les problemes d\'injecteur sont relativement frequents apres 150 000 km en raison de la technologie d\'injection directe a pompe-injecteur utilisee. Le diagnostic et la reparation suivent les memes procedures que pour les autres cylindres.'
      },
      {
        question: 'Peut-on rouler avec un cylindre 5 inactif sur un V6?',
        answer: 'Oui, un moteur V6 peut fonctionner avec 5 cylindres sur 6, mais les performances sont nettement reduites (environ 17% de puissance en moins). Le desequilibre entre les bancs provoque des vibrations perceptibles. Le catalyseur du banc 2 est expose au carburant non brule et peut surchauffer. La conduite urbaine est acceptable pour atteindre le garage, mais evitez les autoroutes et les situations necessitant la pleine puissance. Faites diagnostiquer et reparer le probleme dans les meilleurs delais pour proteger le catalyseur et limiter les vibrations.'
      },
      {
        question: 'Le P0273 est-il lie aux codes P030x?',
        answer: 'Oui, le P0273 (signal trop bas injecteur cylindre 5) est souvent accompagne du code P0305 (rate d\'allumage cylindre 5). Le P0273 identifie la cause electrique (l\'injecteur ne recoit pas la commande correcte) et le P0305 identifie la consequence (absence de combustion dans le cylindre 5). Si les deux codes sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 5. Si seul le P0305 est present sans P0273, le probleme est probablement d\'une autre nature (bougie, bobine, compression) et non lie a l\'injecteur electriquement.'
      }
    ],
    relatedCodes: ['P0200', 'P0205', 'P0274', 'P0275', 'P0305']
  },
  P0274: {
    code: 'P0274',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0274 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 5. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise pour ce circuit. Ce code est le complementaire du P0273 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un driver defaillant dans le calculateur. Ce code concerne les moteurs a 5 cylindres ou plus. Un signal excessif peut provoquer une surinjection de carburant dans le cylindre 5, avec les risques associes de surchauffe du catalyseur, de dilution de l'huile moteur et de dommages mecaniques. Le diagnostic suit les memes procedures que pour les codes equivalents des autres cylindres.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire',
      'Surinjection dans le cylindre 5',
      'Ralenti irregulier avec desequilibre entre bancs',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur du banc 2',
      'Odeur de carburant non brule a l\'echappement',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 5 (30%)',
      'Injecteur 5 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 5 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 5 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches endommagees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 5 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si court-circuit detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 50-80 euros si necessaire)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur 5 peut provoquer une surinjection continue dans le cylindre 5. Le catalyseur du banc 2 est expose a du carburant non brule qui surchauffe et peut le detruire. L'huile moteur diluee ne protege plus les composants internes. Sur un moteur diesel, une surinjection massive peut provoquer un coup de liquide. Le court-circuit peut endommager le driver du calculateur. Diagnostic sous une semaine est recommande pour proteger le catalyseur et le moteur.",
    faq: [
      {
        question: 'Le P0274 peut-il endommager specifiquement le catalyseur du banc 2?',
        answer: 'Oui, sur les moteurs en V equipes de deux catalyseurs (un par banc), le P0274 affecte specifiquement le catalyseur du banc 2 car c\'est celui qui recoit les gaz d\'echappement du cylindre 5. Le carburant non brule qui entre dans ce catalyseur brule a l\'interieur, provoquant une surchauffe localisee. Il est possible que le catalyseur du banc 2 soit detruit alors que celui du banc 1 reste en bon etat. Le remplacement d\'un seul catalyseur coute 300-1000 euros selon le vehicule. Surveillez la temperature sous le vehicule du cote du banc 2 pour detecter une surchauffe du catalyseur.'
      },
      {
        question: 'Comment differencier le P0274 d\'un probleme de calculateur?',
        answer: 'Pour differencier un probleme de cablage ou d\'injecteur d\'un probleme de calculateur, debranchez le connecteur de l\'injecteur 5. Si le code change ou si la tension anormale disparait sur le fil de commande (cote faisceau), le probleme est dans l\'injecteur ou le cablage. Si la tension anormale est presente sur la sortie du calculateur meme avec l\'injecteur debranche, le driver du calculateur est probablement defaillant. Vous pouvez aussi echanger les injecteurs entre cylindres : si le code suit l\'injecteur, c\'est lui la cause. Si le code reste sur le cylindre 5, c\'est le cablage ou le calculateur.'
      },
      {
        question: 'Le P0274 est-il courant sur les moteurs V8?',
        answer: 'Le P0274 peut apparaitre sur tout moteur V6, V8 ou 5 cylindres en ligne equipe d\'injecteurs electroniques. Sur les moteurs V8, le cylindre 5 est generalement sur le banc 2, souvent dans une zone d\'acces difficile. Les moteurs V8 americains (Ford, GM, Chrysler) et les V8 europeens (BMW, Mercedes, Audi) sont concernes. Le code n\'est pas plus frequent sur les V8 que sur les autres configurations, mais la reparation peut etre plus couteuse en raison de l\'accessibilite plus difficile et du nombre total d\'injecteurs qui peuvent necessiter un remplacement preventif.'
      },
      {
        question: 'Faut-il verifier les deux bancs d\'injecteurs?',
        answer: 'Si seul le P0274 est present (cylindre 5), il suffit de verifier le circuit de l\'injecteur 5 et ses composants associes. Cependant, si plusieurs codes d\'injecteurs sont presents sur differents cylindres, il est judicieux de verifier l\'ensemble du systeme d\'injection : relais d\'injecteurs, masse commune, alimentation commune. Un probleme commun (relais, fusible, masse) peut affecter plusieurs injecteurs simultanement. Le diagnostic avec une valise OBD permet de voir rapidement l\'etat de tous les circuits d\'injecteurs en meme temps.'
      },
      {
        question: 'Le P0274 peut-il etre cause par l\'humidite?',
        answer: 'Oui, l\'humidite peut provoquer un P0274, surtout si de l\'eau s\'infiltre dans le connecteur de l\'injecteur 5. L\'eau cree un chemin conducteur entre les broches, simulant un court-circuit. Cela arrive apres un lavage haute pression du compartiment moteur, un passage en zone inondee, ou par condensation dans les regions humides. Si le code apparait apres un evenement lie a l\'eau, sechez le connecteur avec de l\'air comprime, appliquez de la graisse dielectrique et effacez le code. Si le code ne revient pas, l\'humidite etait la cause. Sinon, le probleme est d\'une autre nature.'
      }
    ],
    relatedCodes: ['P0200', 'P0205', 'P0273', 'P0275', 'P0305']
  },
  P0275: {
    code: 'P0275',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0275 signale un probleme de contribution du cylindre 5 detecte par le calculateur moteur. Ce code indique que le cylindre 5 ne contribue pas normalement au couple moteur total. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution de chaque cylindre. Si le cylindre 5 produit un couple significativement different des autres, le P0275 est enregistre. Ce code est l'equivalent du P0263 (cylindre 1), P0266 (cylindre 2), P0269 (cylindre 3) et P0272 (cylindre 4). Il concerne les moteurs a 5 cylindres ou plus et est principalement rencontre sur les moteurs diesel modernes equipes de systemes de surveillance avances.",
    symptoms: [
      'Voyant moteur allume avec correction de dosage automatique',
      'Legeres vibrations surtout au ralenti',
      'Ralenti pas parfaitement lisse',
      'Legere surconsommation de carburant',
      'Performances en leger retrait',
      'Bruit moteur legerement asymetrique sur un V6 ou V8',
      'Variations de couple subtiles en conduite'
    ],
    causes: [
      'Injecteur du cylindre 5 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 5 (20%)',
      'Buse d\'injecteur 5 encrassee ou bouchee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 5 (10%)',
      'Probleme mecanique sur le cylindre 5 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 5 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 5 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 5 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-200 euros le jeu)',
      'Remplacer l\'injecteur du cylindre 5 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 5 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 5 indique un desequilibre de fonctionnement du moteur. Le calculateur compense partiellement mais ne resout pas la cause. Sur un moteur en V, le desequilibre entre les bancs genere des vibrations asymetriques. Un injecteur avec un debit incorrect use le cylindre et encrasse le systeme de depollution du banc concerne. Une compression faible indique une usure progressive. Un diagnostic sous trois semaines est recommande pour identifier et corriger la cause avant qu'elle ne s'aggrave.",
    faq: [
      {
        question: 'Le P0275 affecte-t-il l\'equilibre du moteur en V?',
        answer: 'Oui, sur un moteur en V, le cylindre 5 est generalement sur le banc 2 (le banc oppose au banc 1 ou se trouvent les cylindres 1-3 ou 1-4). Un desequilibre de contribution sur le cylindre 5 cree une asymetrie entre les deux bancs. Le banc 2 produit un couple legerement different du banc 1, ce qui genere des vibrations non uniformes. Ces vibrations sont souvent perceptibles au ralenti comme un leger tremblement ou une oscillation du moteur. Les supports moteur (silentblocs) absorbent en partie ces vibrations mais s\'usent plus vite en raison de leur nature asymetrique.'
      },
      {
        question: 'Le P0275 est-il plus courant sur les moteurs diesel V6?',
        answer: 'Oui, les moteurs diesel V6 sont parmi les plus sujets au P0275 car ils combinent un systeme d\'injection commun rail avec surveillance de la contribution individuelle des cylindres et une configuration en V ou l\'acces aux injecteurs du banc 2 est souvent difficile. Les modeles frequemment concernes incluent les BMW 530d/535d, les Audi A6/A8 3.0 TDI, les Mercedes E/S 320/350 CDI, et les Jaguar et Land Rover TDV6. Le code apparait typiquement apres 120 000-180 000 km lorsque les injecteurs commencent a presenter des ecarts de debit.'
      },
      {
        question: 'Le nettoyage des injecteurs peut-il resoudre le P0275?',
        answer: 'Oui, dans environ 30-40% des cas, un nettoyage professionnel des injecteurs peut resoudre le P0275. Si la cause est un encrassement partiel de la buse de l\'injecteur 5, un nettoyage par ultrasons suivi d\'un test de debit sur banc d\'essai peut restaurer les performances nominales. Un additif nettoyant dans le reservoir (10-20 euros) peut aussi ameliorer la situation pour les encrassements legers. Sur les moteurs diesel, les injecteurs s\'encrassent naturellement avec le temps en raison des residus de combustion. Un nettoyage periodique (tous les 50 000-80 000 km) peut prevenir l\'apparition du code.'
      },
      {
        question: 'Le P0275 necessite-t-il un remplacement d\'injecteur?',
        answer: 'Pas necessairement. Le remplacement n\'est necessaire que si le nettoyage ne suffit pas et que le test sur banc d\'essai confirme que l\'injecteur est use au-dela des tolerances. Dans environ 30% des cas, le nettoyage suffit. Dans 30% des cas, le remplacement de l\'injecteur est necessaire (80-500 euros selon le type). Dans 20% des cas, le probleme est mecanique (compression) et le remplacement de l\'injecteur ne resoudra rien. Le diagnostic prealable (test de compression plus test d\'injecteur : 100-180 euros) est donc essentiel pour determiner la bonne reparation et eviter les depenses inutiles.'
      },
      {
        question: 'Le P0275 peut-il affecter le controle technique?',
        answer: 'Oui, le P0275 allume le voyant moteur, ce qui est un motif de refus au controle technique. De plus, un desequilibre de contribution du cylindre 5 augmente les emissions polluantes du banc concerne, ce qui peut causer un echec au test de pollution. Le desequilibre entre les bancs peut aussi provoquer des valeurs d\'emission asymetriques que le controleur technique peut detecter. Prevoyez de reparer le P0275 au moins trois semaines avant la date du controle technique pour avoir le temps de diagnostiquer, reparer, effacer le code et faire les kilometres necessaires pour valider les moniteurs OBD.'
      }
    ],
    relatedCodes: ['P0273', 'P0274', 'P0205', 'P0305', 'P0272']
  },
  P0276: {
    code: 'P0276',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0276 signale un signal trop bas sur le circuit de l'injecteur du cylindre 6. Ce code concerne les moteurs a 6 cylindres ou plus (V6, 6 cylindres en ligne, V8). Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 6 est inferieur au seuil minimum attendu. Le cylindre 6 est generalement le dernier cylindre du banc 2 sur un moteur V6, ou le sixieme cylindre sur les moteurs 6 cylindres en ligne (BMW, certains Mercedes). Les causes et symptomes sont analogues aux codes equivalents des autres cylindres. Un signal trop bas empeche l'injecteur de fonctionner correctement, perturbant la combustion dans ce cylindre.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 6',
      'Ralenti irregulier avec vibrations',
      'Perte de puissance (un cylindre inactif)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule a l\'echappement',
      'A-coups lors des accelerations',
      'Desequilibre entre les bancs sur un moteur en V'
    ],
    causes: [
      'Injecteur du cylindre 6 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 6 (25%)',
      'Connecteur de l\'injecteur 6 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 6 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique du circuit deterioree (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 6 (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 6 (gratuit a 15 euros)',
      'Verifier la continuite du cablage (diagnostic inclus)',
      'Echanger l\'injecteur 6 avec un autre cylindre pour confirmer (gratuit)',
      'Remplacer l\'injecteur du cylindre 6 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 6 inactif provoque un desequilibre moteur et une perte de puissance. Sur un moteur V6, la perte represente environ 17% de la puissance totale. Le carburant non brule peut surchauffer et endommager le catalyseur du banc 2. Les vibrations du desequilibre usent les supports moteur. Sur les 6 cylindres en ligne, la perte d'un cylindre est mieux toleree mais reste significative. Diagnostic recommande sous une a deux semaines pour proteger le catalyseur et limiter les degats.",
    faq: [
      {
        question: 'Ou se trouve le cylindre 6 sur un moteur V6?',
        answer: 'Sur la plupart des moteurs V6, le cylindre 6 est le dernier cylindre du banc 2 (cote droit du moteur vu de face), c\'est-a-dire le cylindre le plus eloigne du cote distribution. Sur les moteurs 6 cylindres en ligne (BMW serie 3/5, certains Mercedes), le cylindre 6 est le dernier du cote oppose a la distribution. L\'acces au cylindre 6 peut etre difficile sur les moteurs en V transversaux car il est souvent situe contre le tablier pare-feu. Consultez le manuel technique de votre vehicule pour la localisation exacte et les procedures d\'acces specifiques a votre modele.'
      },
      {
        question: 'Le P0276 est-il plus frequent sur les 6 cylindres en ligne?',
        answer: 'Pas particulierement. Les 6 cylindres en ligne et les V6 ont des probabilites similaires de problemes d\'injecteur. Cependant, sur les 6 cylindres en ligne, le cylindre 6 est le plus eloigne du calculateur, avec le trajet de cablage le plus long, ce qui peut legerement augmenter le risque de defauts de cablage. Sur les V6, l\'accessibilite du cylindre 6 (derniere position du banc 2) rend l\'inspection et l\'entretien plus difficiles, ce qui peut retarder la detection des problemes de connecteur ou de corrosion. Dans les deux cas, le diagnostic et la reparation suivent les memes procedures.'
      },
      {
        question: 'Le P0276 et le P0306 peuvent-ils apparaitre ensemble?',
        answer: 'Oui, c\'est frequent. Le P0276 (signal trop bas injecteur cylindre 6) indique que l\'injecteur ne recoit pas la commande correcte. Le P0306 (rate d\'allumage cylindre 6) indique que le cylindre ne produit pas de combustion. Les deux codes sont complementaires : le P0276 est la cause, le P0306 est la consequence. Si les deux sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 6. Si seul le P0306 est present sans P0276, le rate d\'allumage a une autre cause (bougie, bobine, compression) non liee au circuit electrique de l\'injecteur.'
      },
      {
        question: 'Combien coute la reparation d\'un P0276?',
        answer: 'Le cout varie selon la cause et le type de moteur. Nettoyage de connecteur : gratuit a 15 euros. Remplacement de fusible : 2-5 euros. Reparation de cablage : 80-200 euros. Remplacement d\'injecteur essence : 80-300 euros. Remplacement d\'injecteur diesel common rail : 200-500 euros. La main d\'oeuvre est souvent plus elevee pour le cylindre 6 en raison de son accessibilite reduite, surtout sur les V6 transversaux. En moyenne, comptez 150-500 euros tout compris pour les cas courants (probleme electrique ou remplacement d\'injecteur). Le diagnostic prealable (50-80 euros) est indispensable.'
      },
      {
        question: 'Peut-on echanger l\'injecteur 6 avec un autre cylindre?',
        answer: 'Oui, c\'est la methode de diagnostic la plus fiable. Echangez l\'injecteur du cylindre 6 avec un injecteur du meme banc pour faciliter l\'acces. Effacez les codes et faites un essai routier. Si le code suit l\'injecteur au nouveau cylindre, l\'injecteur est defectueux. Si le code reste sur le cylindre 6, le probleme est dans le cablage ou le connecteur. Sur les moteurs diesel common rail, reconfigurez les codes IMA des injecteurs dans le calculateur apres l\'echange pour que le dosage reste correct pendant le test. Cette methode est gratuite et evite de remplacer des pieces inutilement.'
      }
    ],
    relatedCodes: ['P0200', 'P0206', 'P0277', 'P0278', 'P0306']
  },
  P0277: {
    code: 'P0277',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0277 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 6. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise. Ce code est le complementaire du P0276 et peut indiquer un court-circuit au positif, un injecteur en court-circuit interne, ou un driver defaillant. Ce code concerne les moteurs V6, 6 cylindres en ligne et plus. Un signal excessif peut provoquer une surinjection de carburant dans le cylindre 6, avec les risques de surchauffe du catalyseur du banc 2, de dilution d'huile moteur et d'endommagement du driver d'injecteur du calculateur. Le diagnostic et les solutions sont analogues aux codes equivalents des autres cylindres.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire',
      'Surinjection dans le cylindre 6',
      'Ralenti irregulier avec desequilibre entre les bancs',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur du banc 2',
      'Odeur forte de carburant non brule',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 6 (30%)',
      'Injecteur 6 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 6 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 6 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches endommagees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 6 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si court-circuit detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 50-80 euros si necessaire)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur 6 peut provoquer une surinjection continue. Le catalyseur du banc 2 est expose a du carburant non brule qui le surchauffe et peut le detruire. L'huile moteur peut etre diluee par le carburant, reduisant la lubrification. Le court-circuit peut endommager le driver du calculateur. Sur un moteur diesel, une surinjection massive dans le cylindre 6 peut provoquer un coup de liquide. Diagnostic sous une semaine est recommande pour limiter les degats au catalyseur et au moteur.",
    faq: [
      {
        question: 'Le P0277 est-il plus dangereux que le P0276?',
        answer: 'Potentiellement oui. Le P0276 (signal trop bas) entraine que l\'injecteur 6 ne s\'ouvre pas, donc le cylindre ne recoit pas de carburant (perte de puissance mais pas de surinjection). Le P0277 (signal trop haut) peut provoquer une ouverture permanente de l\'injecteur, entrainant une surinjection continue qui endommage le catalyseur et dilue l\'huile. Le P0277 necessite donc une intervention plus urgente, surtout si de la fumee noire epaisse est visible ou si le niveau d\'huile augmente anormalement. Arretez le moteur si les symptomes sont severes.'
      },
      {
        question: 'Le P0277 peut-il endommager le catalyseur du banc 2?',
        answer: 'Oui, c\'est l\'un des risques principaux. Sur les moteurs en V equipes de deux catalyseurs, le cylindre 6 alimente le catalyseur du banc 2. Le carburant non brule qui entre dans ce catalyseur brule a l\'interieur, provoquant des temperatures superieures a 1000 degres qui peuvent fondre le substrat ceramique. En quelques minutes de fonctionnement avec un injecteur bloque ouvert, le catalyseur peut etre irremediablement endommage. Le remplacement coute 300-1000 euros. Surveillez l\'apparition de fumee ou d\'odeur de carburant et arretez le moteur si necessaire.'
      },
      {
        question: 'Comment diagnostiquer un court-circuit sur le cylindre 6?',
        answer: 'Debranchez le connecteur de l\'injecteur 6 et mesurez la tension sur le fil de commande cote faisceau. Si une tension anormale est presente moteur arrete, il y a un court-circuit au positif dans le cablage. Mesurez la resistance de l\'injecteur entre ses bornes : une valeur tres basse indique un court-circuit interne. Mesurez l\'isolement entre les broches et la masse : une resistance faible confirme un defaut d\'isolement. Sur les V6, suivez le trajet du faisceau jusqu\'au cylindre 6 et inspectez les zones de passage, les points de fixation et les zones proches de sources de chaleur.'
      },
      {
        question: 'Faut-il faire une vidange apres un P0277?',
        answer: 'Oui, si le P0277 a provoque une surinjection qui a dilue l\'huile moteur. Verifiez le niveau d\'huile sur la jauge : un niveau au-dessus du maximum et une odeur de carburant sur la jauge confirment la dilution. Dans ce cas, faites une vidange immediate avec de l\'huile conforme aux specifications constructeur et remplacez le filtre a huile. L\'huile diluee ne protege plus les composants moteur et peut endommager les paliers, les segments et le turbo. Meme si le niveau semble normal, une vidange apres reparation est recommandee par precaution.'
      },
      {
        question: 'Le P0277 est-il specifique a certains constructeurs?',
        answer: 'Le P0277 est un code OBD generique qui peut apparaitre sur tout vehicule equipe d\'un moteur a 6 cylindres ou plus avec injecteurs electroniques. Cependant, certains modeles sont plus frequemment concernes en raison de la disposition de leur faisceau electrique. Les BMW 6 cylindres en ligne, les moteurs V6 Audi et VW, les V6 Mercedes et les V6 Renault/Nissan sont parmi les vehicules les plus diagnostiques avec ce code. La position du cylindre 6 et la longueur du cablage associe jouent un role dans la frequence d\'apparition de ce type de defaut electrique.'
      }
    ],
    relatedCodes: ['P0200', 'P0206', 'P0276', 'P0278', 'P0306']
  },
  P0278: {
    code: 'P0278',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0278 signale un probleme de contribution du cylindre 6 detecte par le calculateur moteur. Ce code indique que le cylindre 6 ne contribue pas normalement au couple moteur total. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution de chaque cylindre. Si le cylindre 6 produit un couple significativement different des autres, le P0278 est enregistre. Ce code concerne les moteurs V6, 6 cylindres en ligne et plus. Il est principalement rencontre sur les moteurs diesel modernes. Le cylindre 6 etant souvent le dernier du banc 2 sur les V6, un desequilibre a ce niveau affecte particulierement l'equilibre entre les deux bancs du moteur.",
    symptoms: [
      'Voyant moteur allume avec correction automatique du dosage',
      'Legeres vibrations au ralenti',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances en leger retrait',
      'Bruit moteur legerement asymetrique',
      'Desequilibre perceptible entre les bancs sur un V6'
    ],
    causes: [
      'Injecteur du cylindre 6 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 6 (20%)',
      'Buse d\'injecteur 6 encrassee ou bouchee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 6 (10%)',
      'Probleme mecanique sur le cylindre 6 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 6 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 6 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 6 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-200 euros le jeu)',
      'Remplacer l\'injecteur du cylindre 6 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 6 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 6 cree un desequilibre de fonctionnement du moteur, particulierement visible sur les moteurs en V ou il affecte l'equilibre entre les bancs. Le calculateur compense partiellement mais ne corrige pas la cause. Un injecteur avec un debit incorrect use le cylindre et encrasse le systeme de depollution du banc 2. Une compression faible indique une usure progressive. Les vibrations asymetriques usent les supports moteur. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0278 est-il courant sur les BMW 6 cylindres en ligne?',
        answer: 'Oui, les moteurs BMW 6 cylindres en ligne (N47, N57, B47, B57 diesel) sont relativement sujets au P0278, surtout apres 120 000-150 000 km. Les injecteurs diesel piezoelectriques de ces moteurs ont une duree de vie limitee et leur debit peut deriver avec le temps. Le cylindre 6, etant le plus eloigne du systeme d\'admission, peut etre plus sensible aux variations de debit. BMW recommande le remplacement preventif des injecteurs sur certains modeles. Un nettoyage professionnel par ultrasons peut prolonger leur duree de vie si effectue regulierement.'
      },
      {
        question: 'Le P0278 affecte-t-il specifiquement le banc 2 sur un V6?',
        answer: 'Oui, sur un moteur V6, le cylindre 6 est generalement le dernier du banc 2. Un probleme de contribution sur ce cylindre affecte donc le couple produit par le banc 2 par rapport au banc 1. Le calculateur detecte ce desequilibre entre les bancs et tente de le compenser en ajustant le dosage. Si le desequilibre depasse les capacites de compensation, le P0278 est enregistre. Les symptomes (vibrations, bruit asymetrique) sont plus marques sur un V6 que sur un 6 cylindres en ligne car le desequilibre est reparti entre deux bancs distincts.'
      },
      {
        question: 'Faut-il remplacer tous les injecteurs si le cylindre 6 est hors tolerance?',
        answer: 'Pas obligatoirement, mais c\'est souvent recommande sur les moteurs diesel a fort kilometrage. Si un injecteur est hors tolerance apres 150 000 km, les cinq autres sont probablement dans un etat similaire et risquent de tomber en panne prochainement. Le remplacement de l\'ensemble evite de devoir refaire la main d\'oeuvre quelques mois plus tard. Cependant, si le budget est limite, vous pouvez remplacer uniquement l\'injecteur du cylindre 6 et surveiller les autres. Un test de debit sur banc d\'essai de tous les injecteurs (50-80 euros par injecteur) permet d\'evaluer leur etat et de prendre une decision eclairee.'
      },
      {
        question: 'Le P0278 peut-il etre cause par le filtre a particules?',
        answer: 'Indirectement oui. Un filtre a particules tres colmate cree une contre-pression d\'echappement excessive qui affecte la combustion de maniere inegale entre les cylindres. Le cylindre 6, etant le plus eloigne, peut etre plus sensible a cette contre-pression. Si le P0278 est accompagne de codes de filtre a particules (P2002, P2463), traitez d\'abord le probleme de FAP car il peut etre la cause indirecte du desequilibre de contribution. Apres nettoyage ou regeneration du FAP, le P0278 peut disparaitre de lui-meme.'
      },
      {
        question: 'Quel est le delai recommande pour reparer un P0278?',
        answer: 'Le P0278 n\'est pas un code d\'urgence car le calculateur compense partiellement le desequilibre. Un diagnostic sous trois semaines est recommande. Cependant, ne repoussez pas la reparation indefiniment car le probleme s\'aggrave : la surconsommation augmente, le systeme de depollution se degrade, et si la cause est mecanique, les degats progressent. Prevoyez un budget de 100-400 euros pour les cas courants. Si un test de compression revele un probleme mecanique, les couts sont plus eleves mais le diagnostic prealable aura au moins permis d\'identifier le probleme correctement.'
      }
    ],
    relatedCodes: ['P0276', 'P0277', 'P0206', 'P0306', 'P0275']
  },
  P0279: {
    code: 'P0279',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0279 signale un signal trop bas sur le circuit de l'injecteur du cylindre 7. Ce code concerne exclusivement les moteurs a 7 cylindres ou plus, principalement les moteurs V8. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 7 est inferieur au seuil minimum attendu. Le cylindre 7 est generalement situe sur le banc 2 des moteurs V8. Un signal trop bas indique un circuit ouvert, un court-circuit a la masse, ou un injecteur dont la bobine est coupee. Le diagnostic et les solutions suivent les memes procedures que pour les codes equivalents des autres cylindres, adaptees a la position specifique du cylindre 7.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 7',
      'Ralenti irregulier avec vibrations',
      'Perte de puissance (un cylindre inactif sur 8)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule',
      'A-coups lors des accelerations',
      'Desequilibre sonore du moteur V8'
    ],
    causes: [
      'Injecteur du cylindre 7 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 7 (25%)',
      'Connecteur de l\'injecteur 7 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 7 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique deterioree (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 7 (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 7 (gratuit a 15 euros)',
      'Verifier la continuite du cablage (diagnostic inclus)',
      'Echanger l\'injecteur 7 avec un autre cylindre du meme banc (gratuit)',
      'Remplacer l\'injecteur du cylindre 7 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 7 inactif sur un V8 provoque un desequilibre entre les bancs et une perte d'environ 12% de puissance. Le carburant non brule peut endommager le catalyseur du banc concerne. Les vibrations du desequilibre affectent les supports moteur et le confort de conduite. Sur un V8, la perte d'un cylindre est plus toleree que sur un 4 cylindres, mais le catalyseur est toujours en danger. Diagnostic recommande sous deux semaines.",
    faq: [
      {
        question: 'Sur quels vehicules trouve-t-on le cylindre 7?',
        answer: 'Le cylindre 7 est present sur les moteurs V8 (BMW, Mercedes, Audi, Jaguar, Land Rover, Ford, GM, Chrysler, Ferrari, Maserati, etc.), les V10 (Audi R8, Lamborghini) et les V12. Sur la plupart des V8, le cylindre 7 est sur le banc 2, generalement en troisieme ou quatrieme position selon la convention du constructeur. Consultez la documentation specifique de votre vehicule pour la numerotation exacte. Les moteurs V8 diesel sont relativement rares (Land Rover, Audi) mais existent et peuvent aussi generer ce code.'
      },
      {
        question: 'Un V8 peut-il rouler correctement avec un cylindre 7 inactif?',
        answer: 'Un moteur V8 peut fonctionner de maniere acceptable avec 7 cylindres sur 8. La perte de puissance (environ 12%) est moins perceptible que sur un 4 cylindres. Certains V8 modernes desactivent meme volontairement des cylindres pour economiser du carburant. Cependant, un cylindre involontairement inactif envoie du carburant non brule dans le catalyseur, ce qui est dommageable. Les vibrations sont moins marquees sur un V8 grace au nombre de cylindres mais restent detectables. Vous pouvez rouler jusqu\'au garage mais evitez les longs trajets tant que la reparation n\'est pas effectuee.'
      },
      {
        question: 'Le P0279 est-il plus complexe a reparer sur un V8?',
        answer: 'La complexite depend de l\'accessibilite du cylindre 7 sur votre moteur specifique. Sur certains V8, le cylindre 7 est relativement accessible (BMW V8, Mercedes V8). Sur d\'autres, il peut etre situe contre le tablier pare-feu, necessitant le demontage de nombreux composants. La main d\'oeuvre est donc tres variable : de 30 minutes a 2-3 heures selon le vehicule. Le diagnostic electrique lui-meme est identique aux autres cylindres (test de resistance, verification du cablage). Le cout total peut aller de 100 euros (simple connecteur a nettoyer) a 500-600 euros (remplacement d\'injecteur avec main d\'oeuvre importante).'
      },
      {
        question: 'Le P0279 et le P0307 apparaissent-ils ensemble?',
        answer: 'Oui, le P0279 (signal trop bas injecteur cylindre 7) est souvent accompagne du P0307 (rate d\'allumage cylindre 7). Le P0279 identifie la cause electrique et le P0307 la consequence (absence de combustion). Si les deux sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 7. Si seul le P0307 est present, le rate d\'allumage a une autre cause (bougie, bobine, compression). Sur les V8 essence, verifiez aussi la bobine d\'allumage du cylindre 7 car les rates d\'allumage sont souvent causes par les bobines defaillantes plutot que par les injecteurs.'
      },
      {
        question: 'Faut-il remplacer les 8 injecteurs d\'un V8?',
        answer: 'Pas necessairement. Si un seul injecteur est defectueux, vous pouvez le remplacer individuellement. Cependant, sur un V8 avec plus de 150 000 km, si la main d\'oeuvre pour acceder aux injecteurs est importante, il peut etre economiquement justifie de remplacer tous les injecteurs en une seule intervention. Le surcout des pieces (7 injecteurs supplementaires a 80-300 euros chacun) doit etre compare au cout de la main d\'oeuvre si un deuxieme injecteur tombe en panne quelques mois plus tard. Un test de debit sur banc de tous les injecteurs permet d\'evaluer leur etat et de decider.'
      }
    ],
    relatedCodes: ['P0200', 'P0207', 'P0280', 'P0281', 'P0307']
  },
  P0280: {
    code: 'P0280',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0280 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 7. Ce code concerne les moteurs V8 et plus. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise. Ce code est le complementaire du P0279 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un driver defaillant dans le calculateur. Un signal excessif peut provoquer une surinjection de carburant dans le cylindre 7. Ce code necessite une attention rapide car la surinjection endommage le catalyseur du banc concerne et dilue l'huile moteur, compromettant la lubrification de l'ensemble du moteur V8.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire',
      'Surinjection dans le cylindre 7',
      'Ralenti irregulier avec desequilibre entre bancs',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur',
      'Odeur forte de carburant non brule',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 7 (30%)',
      'Injecteur 7 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 7 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 7 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches endommagees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 7 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique si court-circuit detecte (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 50-80 euros si necessaire)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur 7 peut provoquer une surinjection continue dans le cylindre 7, mettant en danger le catalyseur du banc concerne et diluant l'huile moteur. Sur un moteur V8, la surinjection d'un cylindre peut passer relativement inapercue car la perte de performance est faible (12%), mais les degats au catalyseur sont les memes que sur un moteur plus petit. Le court-circuit peut aussi endommager le driver du calculateur. Diagnostic sous une semaine est recommande.",
    faq: [
      {
        question: 'Le P0280 est-il dangereux sur un V8?',
        answer: 'Oui, meme si un V8 masque mieux les symptomes d\'un cylindre surinjete (12% de l\'injection totale contre 25% sur un 4 cylindres), les degats sont tout aussi reels. Le catalyseur du banc concerne peut etre detruit par la surchauffe du carburant non brule. L\'huile moteur est diluee, ce qui est d\'autant plus grave sur un V8 car le volume d\'huile est plus important et la dilution peut passer inapercue plus longtemps. Les moteurs V8 ont aussi souvent des turbocompresseurs qui sont tres sensibles a la qualite de la lubrification. Ne negligez pas un P0280.'
      },
      {
        question: 'Comment detecter la surinjection sur un V8?',
        answer: 'La surinjection d\'un seul cylindre sur 8 est plus difficile a detecter que sur un 4 cylindres. Observez attentivement l\'echappement : si le V8 a des sorties separees par banc, une fumee plus importante d\'un cote peut indiquer la surinjection. Verifiez le niveau d\'huile regulierement : une montee progressive du niveau est un signe de dilution. Avec une valise OBD, observez les corrections de carburant (fuel trims) par banc : une correction fortement negative sur le banc 2 indique une surinjection. Les bougies (moteur essence) du cylindre 7 seront noires et mouilees si l\'injecteur surinjete.'
      },
      {
        question: 'Le P0280 et le P0277 sont-ils le meme type de defaut?',
        answer: 'Oui, les codes P0277 et P0280 signalent le meme type de defaut (signal trop eleve sur un circuit d\'injecteur) mais pour des cylindres differents : le P0277 pour le cylindre 6 et le P0280 pour le cylindre 7. Les causes, symptomes, risques et procedures de diagnostic sont identiques. Si les deux codes sont presents, ou si plusieurs codes de type circuit haut apparaissent sur differents cylindres, recherchez un probleme commun : relais d\'injecteurs defectueux, masse commune, retour de tension general dans le faisceau ou probleme du calculateur moteur.'
      },
      {
        question: 'Le V8 peut-il fonctionner en mode degrade avec un P0280?',
        answer: 'Oui, le calculateur du V8 active le mode degrade en limitant la puissance et le dosage pour proteger le moteur. Le V8 en mode degrade reste generalement suffisamment puissant pour une conduite urbaine et routiere, mais les performances sont significativement reduites. Vous pouvez rouler prudemment jusqu\'au garage. Cependant, si vous observez une fumee noire epaisse ou un regime instable, arretez le moteur. La protection du mode degrade n\'est pas absolue, surtout si le court-circuit contourne la commande electronique de l\'injecteur.'
      },
      {
        question: 'Quel est le cout de reparation d\'un P0280 sur un V8?',
        answer: 'Le cout varie selon la cause et l\'accessibilite du cylindre 7 sur votre V8. Nettoyage de connecteur : gratuit a 15 euros. Reparation de cablage : 80-200 euros. Remplacement d\'injecteur : 80-300 euros pour la piece plus 50-150 euros de main d\'oeuvre (variable selon l\'accessibilite). Test et eventuelle reparation du calculateur : 150-400 euros. Vidange si dilution d\'huile : 60-120 euros (le V8 utilise plus d\'huile). En moyenne, comptez 200-500 euros pour les cas courants. Le diagnostic prealable (50-100 euros) est essentiel pour identifier la cause exacte et eviter des reparations inutiles.'
      }
    ],
    relatedCodes: ['P0200', 'P0207', 'P0279', 'P0281', 'P0307']
  },
  P0281: {
    code: 'P0281',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0281 signale un probleme de contribution du cylindre 7 detecte par le calculateur moteur. Ce code indique que le cylindre 7 ne contribue pas normalement au couple moteur total sur un moteur V8 ou plus grand. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution de chaque cylindre. Si le cylindre 7 produit un couple significativement different des autres, le P0281 est enregistre. Ce code fait partie de la serie des codes de contribution (P0263, P0266, P0269, P0272, P0275, P0278) etendue aux cylindres supplementaires des moteurs V8 et V10.",
    symptoms: [
      'Voyant moteur allume avec correction de dosage',
      'Legeres vibrations au ralenti du V8',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances en leger retrait',
      'Bruit du V8 legerement asymetrique',
      'Variations de couple subtiles'
    ],
    causes: [
      'Injecteur du cylindre 7 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 7 (20%)',
      'Buse d\'injecteur 7 encrassee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 7 (10%)',
      'Probleme mecanique sur le cylindre 7 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 7 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 7 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 7 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-250 euros le jeu de 8)',
      'Remplacer l\'injecteur du cylindre 7 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 7 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 7 sur un V8 cree un desequilibre entre les bancs du moteur. Le calculateur compense partiellement mais ne resout pas la cause. Sur un V8, le desequilibre est reparti sur 8 cylindres, ce qui le rend moins perceptible mais tout aussi dommageable pour le systeme de depollution et l'usure du moteur. Un injecteur avec un debit incorrect use le cylindre et encrasse le catalyseur du banc concerne. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0281 est-il perceptible sur un V8?',
        answer: 'Le P0281 est souvent moins perceptible sur un V8 que les codes de contribution equivalents sur un moteur 4 cylindres. La contribution de chaque cylindre represente environ 12% du couple total sur un V8, contre 25% sur un 4 cylindres. Un ecart de quelques pourcents sur un cylindre est donc plus dilue. Cependant, le calculateur detecte cet ecart meme s\'il est subtil et enregistre le code. Le conducteur peut ne remarquer qu\'une legere vibration au ralenti ou un bruit moteur legerement different. C\'est pourquoi une lecture reguliere des codes OBD est importante, meme sans symptomes evidents.'
      },
      {
        question: 'Le nettoyage des injecteurs sur un V8 vaut-il le cout?',
        answer: 'Oui, le nettoyage professionnel des injecteurs est particulierement rentable sur un V8. Le cout du nettoyage de 8 injecteurs par ultrasons est de 100-250 euros, contre 640-2400 euros pour le remplacement complet des 8 injecteurs. Si le P0281 est cause par un encrassement (30-40% des cas), le nettoyage resout le probleme pour une fraction du cout du remplacement. De plus, le nettoyage beneficie a tous les injecteurs, pas seulement a celui du cylindre 7, ameliorant les performances generales du moteur. Faites tester le debit des injecteurs sur banc apres nettoyage pour confirmer le resultat.'
      },
      {
        question: 'Comment savoir si c\'est un probleme de compression ou d\'injecteur?',
        answer: 'Effectuez un test de compression du cylindre 7 et comparez avec les 7 autres cylindres. L\'ecart maximum acceptable est de 10-15% entre le meilleur et le pire cylindre. Si la compression du cylindre 7 est nettement inferieure, le probleme est mecanique (segments, soupapes, joint de culasse). Si la compression est normale, faites tester l\'injecteur sur banc d\'essai. Vous pouvez aussi echanger l\'injecteur du cylindre 7 avec un autre du meme banc : si le code suit l\'injecteur, c\'est lui la cause. Sur un V8, le test de compression des 8 cylindres prend environ 1 heure et coute 80-150 euros.'
      },
      {
        question: 'Le P0281 peut-il etre lie a un probleme de bobine d\'allumage?',
        answer: 'Indirectement oui, sur un moteur V8 essence. Une bobine d\'allumage defaillante sur le cylindre 7 provoque des rates d\'allumage (P0307) qui peuvent etre interpretes comme un probleme de contribution. Cependant, le P0281 mesure specifiquement la contribution au couple (variation d\'acceleration du vilebrequin), pas l\'absence de combustion. Si le cylindre 7 a des rates d\'allumage frequents, le P0307 sera generalement enregistre en plus du P0281. Verifiez la bobine et la bougie du cylindre 7 en parallele du circuit d\'injection pour un diagnostic complet.'
      },
      {
        question: 'Le P0281 affecte-t-il le son du V8?',
        answer: 'Oui, un desequilibre de contribution d\'un cylindre modifie subtilement le son caracteristique du V8. Les amateurs de V8 peuvent detecter un son legerement irregulier ou un rythme d\'echappement pas parfaitement uniforme. Sur les V8 cross-plane (la majorite des V8 americains), le son classique "burble" peut devenir legerement irregulier. Sur les V8 flat-plane (Ferrari, McLaren), le son aigu peut presenter de legeres variations. Ce changement de sonorite est souvent le premier symptome remarque par les passionnes, bien avant les vibrations ou la perte de performances mesurables.'
      }
    ],
    relatedCodes: ['P0279', 'P0280', 'P0207', 'P0307', 'P0278']
  },
  P0282: {
    code: 'P0282',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0282 signale un signal trop bas sur le circuit de l'injecteur du cylindre 8. Ce code concerne les moteurs V8 et plus grands. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 8 est inferieur au seuil minimum attendu. Le cylindre 8 est generalement le dernier cylindre du moteur V8, situe en quatrieme position sur le banc 2. Un signal trop bas indique un circuit ouvert, un court-circuit a la masse, ou une bobine d'injecteur coupee. Le diagnostic suit les memes procedures que pour les codes equivalents des autres cylindres, avec une attention particuliere a l'accessibilite du cylindre 8 qui peut etre limitee.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 8',
      'Ralenti irregulier avec vibrations',
      'Perte de puissance (un cylindre inactif sur 8)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule',
      'A-coups lors des accelerations',
      'Desequilibre sonore du V8'
    ],
    causes: [
      'Injecteur du cylindre 8 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 8 (25%)',
      'Connecteur de l\'injecteur 8 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 8 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique deterioree (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 8 (diagnostic 30-50 euros)',
      'Inspecter le connecteur de l\'injecteur 8 (gratuit a 15 euros)',
      'Verifier la continuite du cablage (diagnostic inclus)',
      'Echanger l\'injecteur 8 avec un autre cylindre du meme banc (gratuit)',
      'Remplacer l\'injecteur du cylindre 8 si defectueux (80-300 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (80-200 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 8 inactif sur un V8 provoque un desequilibre avec environ 12% de puissance en moins. Le carburant non brule peut endommager le catalyseur du banc 2. Le cylindre 8, etant le dernier du moteur, a souvent le trajet de cablage le plus long, ce qui augmente legerement le risque de defauts de cablage. Les vibrations du desequilibre affectent les supports moteur. Diagnostic recommande sous deux semaines pour proteger le catalyseur.",
    faq: [
      {
        question: 'Le cylindre 8 est-il plus sujet aux problemes de cablage?',
        answer: 'Oui, le cylindre 8, etant generalement le dernier du moteur V8, a le trajet de cablage le plus long entre le calculateur et l\'injecteur. Un cablage plus long signifie plus de points de passage, plus de fixations et plus d\'exposition aux vibrations et a la chaleur. Cela augmente statistiquement le risque de defauts de cablage (coupure partielle, isolant fondu, connecteur corrode). Sur les V8 transversaux (rares), l\'acces au cylindre 8 est particulierement difficile. Une inspection minutieuse du faisceau sur toute sa longueur est importante lors du diagnostic d\'un P0282.'
      },
      {
        question: 'Le P0282 et le P0308 apparaissent-ils souvent ensemble?',
        answer: 'Oui, le P0282 (signal trop bas injecteur cylindre 8) et le P0308 (rate d\'allumage cylindre 8) sont frequemment associes. Le P0282 est la cause electrique et le P0308 la consequence (absence de combustion). Si les deux codes sont presents, concentrez le diagnostic sur le circuit de l\'injecteur 8. Si seul le P0308 est present, le rate d\'allumage a une autre cause : bougie usee, bobine d\'allumage defaillante ou compression faible. Sur les V8 essence, les bobines d\'allumage sont une cause plus frequente de rates d\'allumage que les injecteurs.'
      },
      {
        question: 'Le P0282 est-il courant sur les V8 americains?',
        answer: 'Les V8 americains (GM LS/LT, Ford Coyote/EcoBoost V8, Chrysler Hemi) peuvent rencontrer le P0282 comme tout autre moteur V8. Les V8 GM LS sont particulierement fiables en termes d\'injection mais les connecteurs peuvent se corroder avec l\'age. Les V8 Ford utilisent des injecteurs a haute impedance qui vieillissent bien. Les V8 Hemi Chrysler sont sujets aux problemes de rates d\'allumage mais generalement en raison des bougies plutot que des injecteurs. En moyenne, les V8 americains sont moins sujets aux problemes d\'injecteur que les V8 diesel europeens car l\'injection essence est moins exigeante.'
      },
      {
        question: 'Combien coute la reparation d\'un P0282?',
        answer: 'Le cout depend de la cause et du type de V8. Nettoyage de connecteur : gratuit a 15 euros. Remplacement de fusible : 2-5 euros. Reparation de cablage : 80-200 euros. Remplacement d\'injecteur : 80-300 euros plus main d\'oeuvre variable selon l\'accessibilite (50-150 euros). Sur les V8 ou le cylindre 8 est difficile d\'acces, la main d\'oeuvre est le poste le plus important. En moyenne, comptez 150-500 euros pour les cas courants. Le diagnostic prealable (50-100 euros) permet d\'eviter de remplacer un injecteur quand le probleme est un simple connecteur corrode.'
      },
      {
        question: 'Faut-il remplacer les 8 injecteurs si le cylindre 8 est defectueux?',
        answer: 'Pas obligatoirement. Si un seul injecteur est defectueux, le remplacement individuel est tout a fait possible. Cependant, sur un V8 a fort kilometrage (plus de 150 000 km), les 7 autres injecteurs ont le meme age et le meme usure. Le remplacement complet des 8 injecteurs en une seule intervention peut etre economiquement justifie si la main d\'oeuvre pour acceder aux injecteurs est importante. Un test de debit de tous les injecteurs sur banc d\'essai (400-640 euros pour 8 injecteurs) permet d\'evaluer leur etat et de decider s\'il faut tous les remplacer ou seulement celui du cylindre 8.'
      }
    ],
    relatedCodes: ['P0200', 'P0208', 'P0283', 'P0284', 'P0308']
  },
  P0283: {
    code: 'P0283',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0283 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 8. Ce code concerne les moteurs V8 et plus. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise. Ce code est le complementaire du P0282 et peut indiquer un court-circuit au positif dans le cablage, un injecteur en court-circuit interne, ou un driver defaillant. Un signal excessif peut provoquer une surinjection de carburant dans le cylindre 8, dernier cylindre du V8. La surinjection endommage le catalyseur et dilue l'huile moteur. Le diagnostic suit les memes procedures que pour les codes circuit haut des autres cylindres.",
    symptoms: [
      'Voyant moteur allume avec possible fumee noire',
      'Surinjection dans le cylindre 8',
      'Ralenti irregulier du V8',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur',
      'Odeur de carburant non brule',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 8 (30%)',
      'Injecteur 8 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 8 pour un court-circuit (diagnostic 30-60 euros)',
      'Mesurer la resistance de l\'injecteur 8 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches endommagees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 8 si en court-circuit interne (80-300 euros)',
      'Reparer le faisceau electrique (80-200 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 80-150 euros)',
      'Verifier le relais d\'injecteurs (5-30 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 60-120 euros si necessaire)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur 8 peut provoquer une surinjection continue dans le dernier cylindre du V8. Le catalyseur du banc 2 est expose a du carburant non brule qui le surchauffe. L'huile moteur peut etre diluee. Sur un V8, les degats de surinjection d'un cylindre sont les memes que sur un moteur plus petit, meme si les symptomes sont moins perceptibles. Le court-circuit peut endommager le driver du calculateur. Diagnostic sous une semaine est recommande.",
    faq: [
      {
        question: 'Le P0283 est-il dangereux pour le catalyseur?',
        answer: 'Oui, un injecteur du cylindre 8 bloque ouvert envoie du carburant non brule directement dans le catalyseur du banc 2. Ce carburant brule a l\'interieur du catalyseur, provoquant des temperatures superieures a 1000 degres qui peuvent fondre le substrat ceramique. Sur un V8, le catalyseur traite les gaz de 4 cylindres, donc la surinjection d\'un cylindre represente 25% du flux de gaz du banc. L\'endommagement du catalyseur peut survenir en quelques minutes de fonctionnement avec un injecteur bloque ouvert. Le remplacement du catalyseur coute 400-2000 euros selon le vehicule.'
      },
      {
        question: 'Comment savoir si le cylindre 8 surinjete sur un V8?',
        answer: 'Observez les sorties d\'echappement : si le V8 a des sorties separees par banc, une fumee plus importante d\'un cote indique un probleme. Avec une valise OBD, les corrections de carburant (fuel trims) du banc 2 montreront une correction fortement negative si le calculateur compense la surinjection. Sur un V8 essence, la bougie du cylindre 8 sera noire et mouillee. Le niveau d\'huile qui monte est un signe de dilution. Avec un thermometre infrarouge, la temperature du collecteur d\'echappement sera anormalement elevee du cote du cylindre 8 en raison du carburant supplementaire qui brule.'
      },
      {
        question: 'Le P0283 peut-il endommager le calculateur du V8?',
        answer: 'Oui, un court-circuit dans le circuit de l\'injecteur 8 peut endommager le driver de sortie (transistor de puissance) du calculateur. Les V8 modernes ont des calculateurs avec 8 drivers d\'injecteur individuels. Si le driver du cylindre 8 grille, seul ce canal est affecte, les 7 autres continuent de fonctionner. La reparation du driver chez un specialiste electronique coute 150-400 euros. Le remplacement du calculateur complet d\'un V8 peut couter 800-2500 euros. C\'est pourquoi il faut reparer la cause du court-circuit avant de reparer ou remplacer le calculateur.'
      },
      {
        question: 'Faut-il faire une vidange apres un P0283?',
        answer: 'Oui, si le P0283 a provoque une surinjection avec dilution de l\'huile. Sur un V8, le volume d\'huile est plus important (6-8 litres typiquement) que sur un 4 cylindres, ce qui dilue la concentration de carburant dans l\'huile. Cependant, meme une dilution faible reduit la viscosite et les capacites de lubrification. Verifiez le niveau et l\'odeur de l\'huile. Si le niveau a monte ou si l\'huile sent le carburant, faites une vidange complete avec de l\'huile conforme aux specifications et un filtre neuf. Le cout d\'une vidange V8 (60-120 euros) est bien inferieur aux reparations d\'un moteur mal lubrifie.'
      },
      {
        question: 'Le P0283 est-il specifique aux V8 diesel?',
        answer: 'Non, le P0283 peut apparaitre sur tout V8, essence ou diesel, equipe d\'injecteurs electroniques. Cependant, les consequences sont plus graves sur un V8 diesel car la surinjection de gasoil peut provoquer un coup de liquide (bielle pliee) si l\'injection est massive, en raison de l\'incompressibilite du carburant liquide dans le cylindre. Sur un V8 essence, la surinjection provoque plutot un noyage de la bougie et un rate d\'allumage. Les V8 diesel sont moins courants que les V8 essence, on les retrouve principalement chez Land Rover, Audi et certains utilitaires americains.'
      }
    ],
    relatedCodes: ['P0200', 'P0208', 'P0282', 'P0284', 'P0308']
  },
  P0284: {
    code: 'P0284',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0284 signale un probleme de contribution du cylindre 8 detecte par le calculateur moteur. Ce code indique que le cylindre 8, generalement le dernier cylindre d'un moteur V8, ne contribue pas normalement au couple moteur total. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution individuelle de chaque cylindre. Si le cylindre 8 produit un couple significativement different des autres, le P0284 est enregistre. Ce code fait partie de la serie des codes de contribution etendue aux V8 et moteurs plus grands. Il est principalement rencontre sur les moteurs diesel V8 modernes equipes de systemes de surveillance avances.",
    symptoms: [
      'Voyant moteur allume avec correction automatique du dosage',
      'Legeres vibrations au ralenti du V8',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances du V8 en leger retrait',
      'Bruit du V8 legerement irregulier',
      'Variations de couple subtiles'
    ],
    causes: [
      'Injecteur du cylindre 8 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 8 (20%)',
      'Buse d\'injecteur 8 encrassee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 8 (10%)',
      'Probleme mecanique sur le cylindre 8 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 8 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 8 (diagnostic 50-100 euros)',
      'Faire tester l\'injecteur du cylindre 8 sur banc d\'essai (50-80 euros)',
      'Nettoyer les injecteurs par ultrasons (100-250 euros le jeu de 8)',
      'Remplacer l\'injecteur du cylindre 8 si hors tolerance (80-300 euros)',
      'Verifier le calage de l\'injection (diagnostic 50-100 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 8 (diagnostic 100-200 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (80-150 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 8 cree un desequilibre de fonctionnement du V8. Le calculateur compense partiellement mais ne resout pas la cause. Sur un V8, le desequilibre d'un cylindre represente 12% du couple total, ce qui est moins perceptible que sur un moteur plus petit mais tout aussi dommageable pour le systeme de depollution et l'usure du moteur a long terme. Un injecteur avec un debit incorrect encrasse le catalyseur du banc concerne. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0284 est-il grave sur un V8?',
        answer: 'Le P0284 est de gravite moderee sur un V8. Le desequilibre d\'un cylindre sur 8 est moins perceptible et moins impactant que sur un moteur 4 cylindres. Le calculateur compense efficacement dans la plupart des cas. Cependant, ne negligez pas ce code car il indique un probleme reel qui va s\'aggraver. L\'encrassement du systeme de depollution, la surconsommation et l\'usure prematuree du cylindre concerne sont des consequences a moyen terme. Le diagnostic n\'est pas urgent (3 semaines) mais doit etre planifie pour eviter des reparations plus couteuses.'
      },
      {
        question: 'Le nettoyage des 8 injecteurs est-il rentable?',
        answer: 'Oui, le nettoyage professionnel des 8 injecteurs d\'un V8 est souvent la solution la plus rentable. Le cout (100-250 euros pour 8 injecteurs) est bien inferieur au remplacement (640-2400 euros). Si le P0284 est cause par un encrassement, le nettoyage a 30-40% de chances de resoudre le probleme. De plus, tous les injecteurs beneficient du nettoyage, ameliorant les performances generales du V8. Le nettoyage inclut generalement un test de debit sur banc qui permet de verifier si les injecteurs sont dans les tolerances. Si un injecteur est use au-dela de ce que le nettoyage peut corriger, seul celui-ci sera remplace.'
      },
      {
        question: 'Le P0284 peut-il etre confondu avec un probleme de bobine?',
        answer: 'Sur un V8 essence, oui. Un probleme de bobine d\'allumage sur le cylindre 8 provoque des rates d\'allumage qui affectent la contribution au couple, ce qui peut declencher un P0284. Cependant, un probleme de bobine genere habituellement aussi un P0308 (rate d\'allumage) et parfois un code specifique a la bobine. Pour differencier : echangez la bobine du cylindre 8 avec une autre. Si le probleme suit la bobine, c\'est elle la cause. Si le probleme reste sur le cylindre 8, verifiez l\'injecteur et la compression. Sur un V8 diesel (sans bougies d\'allumage), la bobine n\'est pas en cause et le diagnostic se concentre sur l\'injecteur et la compression.'
      },
      {
        question: 'Le P0284 affecte-t-il le controle technique?',
        answer: 'Oui, le voyant moteur allume est un motif de refus au controle technique, quelle que soit la taille du moteur. De plus, sur un V8, le desequilibre de contribution du cylindre 8 augmente les emissions polluantes du banc concerne, pouvant causer un echec au test de pollution. Les V8 ont deja des seuils de pollution plus stricts en raison de leur cylindree plus importante. Prevoyez de reparer le P0284 au moins trois semaines avant le controle technique pour avoir le temps de diagnostiquer, reparer et valider les moniteurs OBD par un essai routier suffisant.'
      },
      {
        question: 'Quel est le cout total de diagnostic et reparation d\'un P0284?',
        answer: 'Le cout total depend de la cause. Le diagnostic complet (test de compression des 8 cylindres plus test des injecteurs) coute 150-250 euros mais permet d\'identifier precisement la cause. Si c\'est un encrassement : nettoyage des injecteurs 100-250 euros. Si c\'est un injecteur use : remplacement 80-300 euros plus main d\'oeuvre. Si c\'est un probleme de compression : refection de culasse 1000-3000 euros. En moyenne, pour les cas courants sur un V8, comptez 250-600 euros tout compris (diagnostic plus reparation). Les V8 de luxe (AMG, M, RS) peuvent avoir des couts plus eleves en raison des pieces et de la main d\'oeuvre specialisee.'
      }
    ],
    relatedCodes: ['P0282', 'P0283', 'P0208', 'P0308', 'P0281']
  },
  P0285: {
    code: 'P0285',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0285 signale un signal trop bas sur le circuit de l'injecteur du cylindre 9. Ce code concerne exclusivement les moteurs a 9 cylindres ou plus, principalement les moteurs V10 et V12 que l'on retrouve sur les vehicules de luxe et de sport haut de gamme. Le calculateur moteur detecte que la tension ou le courant dans le circuit de commande de l'injecteur du cylindre 9 est inferieur au seuil minimum attendu. Le cylindre 9 est situe sur le banc 2 des moteurs V10 ou en position mediane sur les V12. Les causes et le diagnostic sont identiques aux codes equivalents des autres cylindres, avec une attention particuliere a l'accessibilite souvent limitee sur ces moteurs de grande taille.",
    symptoms: [
      'Voyant moteur allume avec rate d\'allumage sur le cylindre 9',
      'Ralenti irregulier avec vibrations',
      'Perte de puissance (un cylindre inactif)',
      'Consommation de carburant augmentee',
      'Odeur de carburant non brule',
      'A-coups lors des accelerations',
      'Desequilibre sonore du moteur V10 ou V12'
    ],
    causes: [
      'Injecteur du cylindre 9 avec bobine coupee (30%)',
      'Circuit ouvert dans le cablage de l\'injecteur 9 (25%)',
      'Connecteur de l\'injecteur 9 corrode ou desserre (15%)',
      'Court-circuit a la masse du fil de commande (10%)',
      'Resistance de l\'injecteur 9 hors specifications (10%)',
      'Driver d\'injecteur du calculateur defaillant (5%)',
      'Fusible du circuit d\'injection grille (3%)',
      'Masse electrique deterioree (2%)'
    ],
    solutions: [
      'Mesurer la resistance de l\'injecteur du cylindre 9 (diagnostic 30-80 euros)',
      'Inspecter le connecteur de l\'injecteur 9 (gratuit a 15 euros)',
      'Verifier la continuite du cablage (diagnostic inclus)',
      'Echanger l\'injecteur 9 avec un autre du meme banc (gratuit)',
      'Remplacer l\'injecteur du cylindre 9 si defectueux (100-500 euros)',
      'Reparer le faisceau electrique en cas de circuit ouvert (100-300 euros)',
      'Verifier le fusible du circuit d\'injection (2-5 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 100-200 euros)'
    ],
    riskExplanation: "Un injecteur du cylindre 9 inactif sur un V10 represente une perte de 10% de puissance, et sur un V12, environ 8%. Bien que la perte soit proportionnellement plus faible que sur un petit moteur, le carburant non brule endommage le catalyseur du banc concerne avec la meme gravite. Les moteurs V10 et V12 sont des pieces de precision couteuses a reparer, rendant la prevention et le diagnostic rapide encore plus importants. Diagnostic recommande sous deux semaines.",
    faq: [
      {
        question: 'Sur quels vehicules trouve-t-on un cylindre 9?',
        answer: 'Le cylindre 9 est present sur les moteurs V10 (Audi R8, Lamborghini Gallardo/Huracan, BMW M5 E60, Dodge Viper, Volkswagen Touareg V10 TDI, Porsche Carrera GT) et les moteurs V12 (BMW serie 7, Mercedes S600/S65, Audi A8, Ferrari, Lamborghini Aventador, Rolls-Royce, Bentley). Ce sont des vehicules haut de gamme ou les couts de pieces et de main d\'oeuvre sont significativement plus eleves que sur des vehicules classiques. Un diagnostic specialise chez un concessionnaire ou un garage specialise est souvent necessaire.'
      },
      {
        question: 'Le diagnostic d\'un V10 ou V12 est-il plus couteux?',
        answer: 'Oui, le diagnostic sur les moteurs V10 et V12 est generalement plus couteux pour plusieurs raisons. L\'accessibilite des composants est souvent plus limitee, necessitant plus de temps de main d\'oeuvre. Les outils de diagnostic specifiques (valises constructeur) sont necessaires car les valises universelles ne couvrent pas toujours tous les parametres. Les pieces sont plus couteuses (injecteurs de V10/V12 : 100-500 euros piece). Le taux horaire des garages specialises dans ces vehicules est plus eleve (80-150 euros/h contre 50-80 euros/h en garage generaliste). Prevoyez un budget diagnostic de 100-200 euros.'
      },
      {
        question: 'Le V10 ou V12 peut-il rouler avec un cylindre 9 inactif?',
        answer: 'Oui, un moteur V10 ou V12 peut fonctionner de maniere acceptable avec un cylindre inactif. La perte de puissance (10% sur V10, 8% sur V12) est bien toleree par ces moteurs generalement surdimensionnes. Cependant, le carburant non brule endommage le catalyseur avec la meme severite que sur un moteur plus petit. De plus, ces vehicules haut de gamme ont des systemes de depollution complexes et couteux a remplacer (catalyseur V10 : 1000-3000 euros). Roulez prudemment jusqu\'au garage mais ne tardez pas a faire diagnostiquer le probleme.'
      },
      {
        question: 'Le P0285 est-il courant sur les moteurs V10 diesel?',
        answer: 'Les moteurs V10 diesel sont rares (principalement le Volkswagen Touareg V10 TDI et quelques utilitaires americains). Sur le V10 TDI, les problemes d\'injecteur sont relativement courants en raison de la technologie d\'injection piezoelectrique utilisee. Le P0285 peut apparaitre apres 150 000-200 000 km sur ces moteurs. Le remplacement des injecteurs piezoelectriques V10 est couteux (300-500 euros par injecteur, soit 3000-5000 euros pour les 10). Un nettoyage professionnel est recommande comme premiere etape avant d\'envisager le remplacement complet.'
      },
      {
        question: 'Le P0285 peut-il etre cause par le calculateur?',
        answer: 'Oui, dans environ 5% des cas, le driver d\'injecteur du calculateur est en cause. Les calculateurs des V10 et V12 gerent 10 ou 12 drivers d\'injecteur individuels, ce qui augmente statistiquement le risque de defaillance d\'un driver. Sur les vehicules anciens (plus de 15 ans), les composants electroniques du calculateur vieillissent et les soudures peuvent se fissurer (joints secs). Un specialiste en electronique automobile peut diagnostiquer et reparer un driver defaillant pour 200-500 euros, ce qui est nettement moins cher que le remplacement du calculateur complet d\'un V10/V12 (1500-5000 euros).'
      }
    ],
    relatedCodes: ['P0200', 'P0286', 'P0287', 'P0279', 'P0282']
  },
  P0286: {
    code: 'P0286',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0286 signale un signal trop eleve (circuit haut) sur le circuit de l'injecteur du cylindre 9. Ce code concerne les moteurs V10 et V12 principalement. Le calculateur detecte que la tension ou le courant depasse le seuil maximum autorise pour le circuit de l'injecteur du cylindre 9. Ce code est le complementaire du P0285 et peut indiquer un court-circuit au positif, un injecteur en court-circuit interne, ou un driver defaillant. Sur les vehicules haut de gamme equipes de moteurs V10 et V12, un signal excessif peut provoquer une surinjection dans le cylindre 9, mettant en danger le catalyseur et l'huile moteur. Les couts de reparation sur ces vehicules sont generalement plus eleves.",
    symptoms: [
      'Voyant moteur allume avec possible fumee',
      'Surinjection dans le cylindre 9',
      'Ralenti irregulier du V10 ou V12',
      'Surconsommation de carburant',
      'Surchauffe possible du catalyseur',
      'Odeur de carburant non brule',
      'Huile moteur potentiellement diluee'
    ],
    causes: [
      'Court-circuit au positif dans le cablage de l\'injecteur 9 (30%)',
      'Injecteur 9 en court-circuit interne (25%)',
      'Driver d\'injecteur du calculateur defaillant (15%)',
      'Connecteur endommage avec pontage entre broches (10%)',
      'Retour de tension depuis un circuit voisin (10%)',
      'Faisceau electrique endommage par chaleur (5%)',
      'Injecteur de remplacement avec impedance incorrecte (3%)',
      'Relais d\'injecteurs defectueux (2%)'
    ],
    solutions: [
      'Verifier le cablage de l\'injecteur 9 pour un court-circuit (diagnostic 50-100 euros)',
      'Mesurer la resistance de l\'injecteur 9 (diagnostic inclus)',
      'Inspecter le connecteur pour des broches endommagees (gratuit a 15 euros)',
      'Remplacer l\'injecteur 9 si en court-circuit interne (100-500 euros)',
      'Reparer le faisceau electrique (100-300 euros)',
      'Tester le driver d\'injecteur du calculateur (diagnostic specialise 100-200 euros)',
      'Verifier le relais d\'injecteurs (5-50 euros)',
      'Controler le niveau d\'huile pour dilution (vidange 80-150 euros si necessaire sur V10/V12)'
    ],
    riskExplanation: "Un signal trop eleve sur l'injecteur du cylindre 9 d'un V10 ou V12 peut provoquer une surinjection qui endommage le catalyseur et dilue l'huile moteur. Sur ces moteurs de haute performance, les catalyseurs sont couteux (1000-5000 euros) et l'huile synthetique de haute qualite est essentielle pour la lubrification. Le court-circuit peut endommager le driver du calculateur, composant onereux sur ces vehicules. Diagnostic sous une semaine est recommande pour limiter les degats potentiels.",
    faq: [
      {
        question: 'Le P0286 est-il plus couteux a reparer sur un V10 ou V12?',
        answer: 'Oui, les couts sont generalement plus eleves sur les V10 et V12 pour plusieurs raisons. Les injecteurs sont plus couteux (100-500 euros piece contre 80-300 euros sur un 4 cylindres). Les catalyseurs sont nettement plus chers (1000-5000 euros). La main d\'oeuvre est plus importante en raison de l\'accessibilite reduite et du taux horaire plus eleve des garages specialises. Une vidange sur un V10/V12 coute 80-150 euros en raison du volume d\'huile plus important (8-12 litres). Le diagnostic specialise avec valise constructeur coute aussi plus cher. Prevoyez un budget total de 300-800 euros pour les reparations courantes.'
      },
      {
        question: 'Le catalyseur d\'un V10 ou V12 est-il plus vulnerable?',
        answer: 'Pas plus vulnerable en tant que tel, mais beaucoup plus couteux a remplacer. Les V10 et V12 ont souvent 2 ou 4 catalyseurs (un ou deux par banc). Un catalyseur de V10 (Audi R8, Lamborghini) coute 1500-4000 euros piece. Sur un V12 (BMW, Mercedes), le cout peut atteindre 2000-5000 euros par catalyseur. La surinjection d\'un seul cylindre peut detruire le catalyseur du banc concerne en quelques minutes. Proteger les catalyseurs en reparant rapidement un P0286 est donc un investissement judicieux par rapport au cout de remplacement.'
      },
      {
        question: 'Comment diagnostiquer un P0286 sur un V10?',
        answer: 'Le diagnostic suit les memes etapes que pour les autres cylindres mais avec des contraintes specifiques au V10. Debranchez le connecteur de l\'injecteur 9 et mesurez la tension sur le fil de commande : si une tension anormale est presente, c\'est un court-circuit dans le cablage. Mesurez la resistance de l\'injecteur : une valeur tres basse indique un court-circuit interne. Sur les V10, le faisceau electrique des injecteurs est souvent complexe et passe dans des zones difficiles d\'acces. Un garage specialise dans votre marque de vehicule est recommande pour ce type de diagnostic car il dispose des schemas electriques et de l\'experience specifique.'
      },
      {
        question: 'Faut-il aller chez un concessionnaire pour un P0286?',
        answer: 'Pas necessairement, mais c\'est souvent recommande pour les V10 et V12. Les concessionnaires disposent des valises de diagnostic proprietaires qui offrent un acces complet aux parametres du moteur, ce qui est essentiel pour un diagnostic precis. Les garages independants specialises dans votre marque sont une alternative souvent moins couteuse avec le meme niveau d\'expertise. Evitez les garages generalistes qui n\'ont pas l\'experience des moteurs V10/V12 car un diagnostic incorrect peut entrainer des reparations inutiles et couteuses. Comparez les devis entre concessionnaire et garage specialise avant de vous engager.'
      },
      {
        question: 'Le mode degrade protege-t-il efficacement un V10 ou V12?',
        answer: 'Oui, les systemes de mode degrade des V10 et V12 sont generalement sophistiques et offrent une bonne protection. Le calculateur peut desactiver completement l\'injection du cylindre concerne et limiter la puissance du moteur. Sur un V10, le mode degrade permet encore une conduite acceptable avec 9 cylindres. Sur un V12, la puissance reste confortable avec 11 cylindres. Cependant, la protection n\'est pas absolue si le court-circuit contourne la commande electronique. Si le moteur presente un comportement anormal (regime instable, fumee excessive), coupez le moteur et faites remorquer le vehicule plutot que de risquer des degats couteux.'
      }
    ],
    relatedCodes: ['P0200', 'P0285', 'P0287', 'P0280', 'P0283']
  },
  P0287: {
    code: 'P0287',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0287 signale un probleme de contribution du cylindre 9 detecte par le calculateur moteur. Ce code indique que le cylindre 9 ne contribue pas normalement au couple moteur total sur un moteur V10 ou V12. Le calculateur analyse les micro-variations de vitesse du vilebrequin pour evaluer la contribution individuelle de chaque cylindre. Si le cylindre 9 produit un couple significativement different des autres, le P0287 est enregistre. Ce code fait partie de la serie des codes de contribution etendue aux moteurs a grand nombre de cylindres. Il est principalement rencontre sur les moteurs diesel V10 et V12 modernes equipes de systemes de surveillance avances de la contribution individuelle de chaque cylindre.",
    symptoms: [
      'Voyant moteur allume avec correction automatique du dosage',
      'Legeres vibrations au ralenti du V10 ou V12',
      'Ralenti pas parfaitement regulier',
      'Legere surconsommation de carburant',
      'Performances en leger retrait',
      'Bruit moteur legerement asymetrique',
      'Variations de couple subtiles en conduite'
    ],
    causes: [
      'Injecteur du cylindre 9 avec debit hors tolerance (30%)',
      'Compression insuffisante du cylindre 9 (20%)',
      'Buse d\'injecteur 9 encrassee (15%)',
      'Calage de l\'injection incorrect pour le cylindre 9 (10%)',
      'Probleme mecanique sur le cylindre 9 (10%)',
      'Capteur de regime vilebrequin avec signal degrade (5%)',
      'Fuite d\'air a l\'admission au niveau du cylindre 9 (5%)',
      'Logiciel du calculateur necessitant une mise a jour (5%)'
    ],
    solutions: [
      'Effectuer un test de compression du cylindre 9 (diagnostic 80-150 euros)',
      'Faire tester l\'injecteur du cylindre 9 sur banc d\'essai (50-100 euros)',
      'Nettoyer les injecteurs par ultrasons (150-300 euros le jeu de 10 ou 12)',
      'Remplacer l\'injecteur du cylindre 9 si hors tolerance (100-500 euros)',
      'Verifier le calage de l\'injection (diagnostic 80-150 euros)',
      'Controler les soupapes et le joint de culasse du cylindre 9 (diagnostic 150-300 euros)',
      'Inspecter le capteur de regime vilebrequin (diagnostic inclus)',
      'Mettre a jour le logiciel du calculateur si disponible (100-200 euros)'
    ],
    riskExplanation: "Un probleme de contribution du cylindre 9 sur un V10 ou V12 cree un desequilibre de fonctionnement. Bien que la proportion soit faible (10% sur V10, 8% sur V12), le desequilibre affecte le systeme de depollution du banc concerne et accelere l'usure du cylindre. Sur les moteurs de haute performance, la precision du dosage est essentielle pour les performances optimales et la longevite du moteur. Les composants de ces moteurs sont couteux, rendant la prevention et le diagnostic rapide encore plus importants. Un diagnostic sous trois semaines est recommande.",
    faq: [
      {
        question: 'Le P0287 est-il perceptible sur un V10 ou V12?',
        answer: 'Le P0287 est tres subtil sur les V10 et V12 car la contribution de chaque cylindre est proportionnellement faible (10% sur V10, 8% sur V12). Un ecart de quelques pourcents sur un cylindre est quasiment imperceptible en conduite normale. Seuls les conducteurs tres attentifs peuvent remarquer une legere irregularite au ralenti ou un son moteur legerement different. C\'est pourquoi la lecture reguliere des codes OBD est particulierement importante sur les V10 et V12 : le calculateur detecte des problemes bien avant qu\'ils ne deviennent perceptibles, permettant une intervention preventive a moindre cout.'
      },
      {
        question: 'Le nettoyage de 10 ou 12 injecteurs vaut-il le cout?',
        answer: 'Oui, le nettoyage professionnel de tous les injecteurs est extremement rentable sur un V10 ou V12. Le cout (150-300 euros pour 10-12 injecteurs) represente une fraction du remplacement complet (1000-6000 euros). Si le P0287 est cause par un encrassement, le nettoyage a de bonnes chances de reussir. De plus, le nettoyage beneficie a tous les injecteurs, optimisant les performances globales du moteur. Sur les V10 Audi et les V12 BMW ou Mercedes, le nettoyage des injecteurs tous les 60 000-80 000 km est une mesure preventive recommandee par de nombreux specialistes pour maintenir la precision de l\'injection.'
      },
      {
        question: 'Le P0287 est-il lie a la qualite du carburant?',
        answer: 'Oui, la qualite du carburant a un impact direct sur l\'encrassement des injecteurs et donc sur la contribution de chaque cylindre. Les moteurs V10 et V12 de haute performance necessitent un carburant de qualite superieure. Sur les V10 et V12 essence, utilisez toujours du sans-plomb 98 (RON 98) plutot que du 95. Sur les V10 diesel, choisissez du gasoil de premiere qualite. Un carburant de mauvaise qualite favorise l\'encrassement des injecteurs et peut provoquer un P0287 de maniere prematuree. L\'utilisation reguliere d\'un additif nettoyant de qualite (tous les 5000-10000 km) peut aider a prevenir l\'encrassement.'
      },
      {
        question: 'Faut-il un garage specialise pour le P0287?',
        answer: 'Oui, il est fortement recommande de confier le diagnostic et la reparation d\'un P0287 sur un V10 ou V12 a un garage specialise dans votre marque de vehicule. Ces moteurs complexes necessitent des outils de diagnostic specifiques, des pieces d\'origine ou equivalentes de haute qualite, et une expertise que les garages generalistes n\'ont pas toujours. Les erreurs de diagnostic ou de reparation sur ces moteurs peuvent etre tres couteuses. Les reseaux de specialistes independants (comme ceux specialises en BMW, Mercedes, Audi, Porsche ou Ferrari) offrent souvent un bon compromis entre expertise et tarifs competitifs par rapport aux concessionnaires.'
      },
      {
        question: 'Le P0287 affecte-t-il la valeur du vehicule?',
        answer: 'Un code P0287 non resolu peut effectivement affecter la valeur du vehicule a la revente. Les acheteurs de V10 et V12 sont generalement bien informes et font systematiquement un diagnostic OBD avant l\'achat. Un code de contribution non resolu souleve des inquietudes sur l\'etat des injecteurs et du moteur. De plus, le voyant moteur allume est un point negatif evident. Investir dans le diagnostic et la reparation (250-800 euros dans la plupart des cas) peut preserver des milliers d\'euros de valeur a la revente. Gardez les factures de reparation comme preuve d\'entretien pour les futurs acheteurs.'
      }
    ],
    relatedCodes: ['P0285', 'P0286', 'P0281', 'P0284', 'P0275']
  }
};
