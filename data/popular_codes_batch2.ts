import { PopularCodeData } from './popular_codes_data';

export const popularCodesBatch2: Record<string, PopularCodeData> = {
  P0078: {
    code: 'P0078',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0078 signale un dysfonctionnement du circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement (banc 1). Le systeme de distribution variable (VVT - Variable Valve Timing) permet d'optimiser le calage des soupapes d'echappement en fonction des conditions de conduite pour ameliorer les performances, reduire la consommation et diminuer les emissions polluantes. Ce code est declenche lorsque l'ECU detecte une tension trop elevee dans le circuit de l'electrovanne de commande VVT d'echappement. Cela peut indiquer un probleme electrique dans le circuit, un dysfonctionnement de l'electrovanne elle-meme ou un souci au niveau du cablage. Le systeme VVT est present sur la plupart des moteurs modernes depuis les annees 2000 et utilise la pression d'huile pour faire pivoter le phaseur d'arbre a cames.",
    symptoms: [
      'Voyant moteur allume en permanence sur le tableau de bord',
      'Ralenti irregulier avec de legeres vibrations perceptibles',
      'Perte de puissance notable lors des accelerations franches',
      'Consommation de carburant augmentee de 5 a 15 pourcent',
      'Bruit de claquement ou de cliquetis provenant du moteur au demarrage a froid',
      'Hesitations a l\'acceleration, surtout a bas regime',
      'Emissions polluantes augmentees pouvant causer un echec au controle technique'
    ],
    causes: [
      'Electrovanne VVT d\'echappement defectueuse ou bloquee (35% des cas)',
      'Cablage endommage ou court-circuit dans le circuit de commande VVT (20% des cas)',
      'Connecteur oxyde ou corrode sur l\'electrovanne (15% des cas)',
      'Niveau d\'huile moteur trop bas affectant le fonctionnement hydraulique du VVT (10% des cas)',
      'Huile moteur degradee ou de mauvaise viscosite obstruant les canaux VVT (10% des cas)',
      'Phaseur d\'arbre a cames d\'echappement grippe ou endommage (5% des cas)',
      'Probleme au niveau de l\'ECU ou du module de commande (5% des cas)'
    ],
    solutions: [
      'Verifier le niveau et la qualite de l\'huile moteur, effectuer une vidange si necessaire (50-100 euros)',
      'Inspecter le connecteur et le cablage de l\'electrovanne VVT (diagnostic gratuit si DIY)',
      'Nettoyer le connecteur de l\'electrovanne avec un nettoyant contact electrique (5-10 euros)',
      'Tester la resistance de l\'electrovanne VVT avec un multimetre (valeur normale 6-13 ohms)',
      'Remplacer l\'electrovanne VVT d\'echappement si defectueuse (80-250 euros piece plus main d\'oeuvre)',
      'Reparer ou remplacer le cablage endommage dans le circuit de commande (50-150 euros)',
      'Remplacer le phaseur d\'arbre a cames si grippe (300-800 euros piece et main d\'oeuvre)',
      'Effectuer un diagnostic electronique approfondi pour verifier le bon fonctionnement de l\'ECU (50-100 euros)'
    ],
    riskExplanation: "Ne pas reparer un code P0078 peut entrainer une degradation progressive des performances du moteur et une augmentation de la consommation de carburant. Le calage incorrect des soupapes d'echappement peut provoquer une surchauffe localisee dans les chambres de combustion, accelerant l'usure des composants internes du moteur. A long terme, un VVT defaillant peut endommager le phaseur d'arbre a cames, une reparation beaucoup plus couteuse. Il est recommande de diagnostiquer et reparer ce code dans les 2-4 semaines suivant son apparition.",
    faq: [
      {
        question: 'Le code P0078 est-il lie au systeme de distribution variable VVT?',
        answer: 'Oui, le code P0078 concerne specifiquement le circuit de commande de l\'electrovanne de distribution variable des soupapes d\'echappement sur le banc 1. Le systeme VVT utilise des electrovannes commandees par l\'ECU pour diriger la pression d\'huile vers les phaseurs d\'arbre a cames, ce qui permet de modifier le calage des soupapes en temps reel. Quand le circuit electrique de cette electrovanne presente une tension trop elevee, l\'ECU enregistre ce code. Le probleme peut venir de l\'electrovanne elle-meme, du cablage ou meme d\'un niveau d\'huile insuffisant qui empeche le systeme hydraulique de fonctionner correctement.'
      },
      {
        question: 'Puis-je continuer a rouler avec un code P0078 actif?',
        answer: 'Vous pouvez continuer a rouler avec un P0078 mais avec certaines precautions. Le moteur fonctionnera avec un calage des soupapes d\'echappement fixe, ce qui signifie des performances reduites et une consommation augmentee. Il n\'y a pas de danger immediat de casse moteur, mais rouler pendant plusieurs semaines ou mois avec ce defaut peut entrainer une usure prematuree du phaseur d\'arbre a cames et du systeme VVT dans son ensemble. Verifiez en priorite votre niveau d\'huile moteur car un manque d\'huile aggrave considerablement la situation et peut transformer un probleme simple en reparation couteuse.'
      },
      {
        question: 'Combien coute la reparation d\'un code P0078?',
        answer: 'Le cout depend de la cause exacte. Dans le meilleur des cas, si c\'est juste un connecteur oxyde ou un niveau d\'huile bas, la reparation peut couter entre 0 et 50 euros. Si l\'electrovanne VVT doit etre remplacee, comptez 80 a 250 euros pour la piece plus 50 a 150 euros de main d\'oeuvre selon l\'accessibilite. Si le phaseur d\'arbre a cames est endommage, la facture peut grimper entre 300 et 800 euros. Commencez toujours par verifier l\'huile moteur et le connecteur avant d\'envisager un remplacement de pieces, cela peut vous faire economiser des centaines d\'euros.'
      },
      {
        question: 'Le niveau d\'huile peut-il vraiment causer un code P0078?',
        answer: 'Absolument. Le systeme VVT fonctionne entierement grace a la pression d\'huile moteur. L\'electrovanne dirige cette pression vers le phaseur d\'arbre a cames pour modifier le calage des soupapes. Si le niveau d\'huile est trop bas ou si l\'huile est trop degradee et epaisse, la pression hydraulique sera insuffisante pour actionner correctement le mecanisme. L\'ECU detecte alors que le systeme ne repond pas comme prevu et enregistre le defaut. Avant tout diagnostic electrique couteux, verifiez simplement votre jauge d\'huile et la date de votre derniere vidange. Une vidange avec huile de bonne qualite resout parfois le probleme completement.'
      },
      {
        question: 'Quelle est la difference entre les codes P0078 et P0079?',
        answer: 'Le P0078 indique une tension trop elevee (circuit high) dans le circuit de commande de l\'electrovanne VVT d\'echappement du banc 1, tandis que le P0079 signale une tension trop basse (circuit low) dans ce meme circuit. Les deux codes concernent la meme electrovanne mais orientent le diagnostic differemment. Un P0078 suggere plutot un court-circuit vers le positif, un connecteur mal branche ou une resistance interne de l\'electrovanne trop elevee. Un P0079 oriente vers un court-circuit a la masse, un fil coupe ou une electrovanne en court-circuit interne. Le diagnostic electrique avec multimetre permet de distinguer precisement la cause.'
      }
    ],
    relatedCodes: ['P0079', 'P0080', 'P0010', 'P0020', 'P0021']
  },
  P0079: {
    code: 'P0079',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0079 indique un probleme de tension basse dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement (banc 1). Ce systeme VVT (Variable Valve Timing) ajuste en continu le calage des soupapes d'echappement pour optimiser le fonctionnement du moteur selon les conditions de conduite. Lorsque l'ECU detecte une tension anormalement basse dans le circuit de commande de cette electrovanne, il enregistre le code P0079. Cette tension basse peut etre causee par un court-circuit a la masse, un fil coupe dans le faisceau electrique, ou une defaillance interne de l'electrovanne. Le bon fonctionnement du VVT est essentiel pour maintenir des performances optimales, une consommation raisonnable et des emissions conformes aux normes.",
    symptoms: [
      'Voyant moteur allume de maniere permanente',
      'Ralenti instable avec des fluctuations du regime moteur',
      'Manque de puissance perceptible lors des accelerations',
      'Augmentation de la consommation de carburant de 5 a 15 pourcent',
      'Bruit anormal provenant de la zone de la distribution au demarrage',
      'Difficultes de demarrage a froid sur certains modeles',
      'Performances degradees en montee ou en charge'
    ],
    causes: [
      'Court-circuit a la masse dans le cablage de l\'electrovanne VVT (30% des cas)',
      'Electrovanne VVT en court-circuit interne (25% des cas)',
      'Fil coupe ou casse dans le faisceau de commande (15% des cas)',
      'Connecteur endommage ou corrode par l\'humidite (15% des cas)',
      'Huile moteur degradee ou niveau insuffisant (10% des cas)',
      'Defaillance du circuit de commande dans l\'ECU (3% des cas)',
      'Masse defectueuse sur le circuit de l\'electrovanne (2% des cas)'
    ],
    solutions: [
      'Inspecter visuellement le cablage et le connecteur de l\'electrovanne VVT (gratuit)',
      'Mesurer la resistance de l\'electrovanne avec un multimetre (valeur normale 6-13 ohms, diagnostic gratuit)',
      'Verifier l\'absence de court-circuit a la masse sur les fils de commande (diagnostic 30-50 euros)',
      'Nettoyer ou remplacer le connecteur si oxyde ou corrode (10-30 euros)',
      'Remplacer l\'electrovanne VVT d\'echappement si en court-circuit (80-250 euros)',
      'Reparer le faisceau electrique si un fil est coupe (50-150 euros)',
      'Effectuer une vidange avec huile de qualite et viscosite adaptee (50-100 euros)',
      'Verifier le fonctionnement de l\'ECU en dernier recours (diagnostic 80-150 euros)'
    ],
    riskExplanation: "Le code P0079 indique que le systeme VVT d'echappement ne fonctionne pas correctement, ce qui impacte le rendement du moteur. Sans reparation, le moteur fonctionnera avec un calage fixe des soupapes d'echappement, entrainant une surconsommation et des performances reduites. Sur le long terme, le phaseur d'arbre a cames peut s'user prematurement si le systeme hydraulique ne recoit pas les commandes appropriees. Le risque d'echec au controle technique est egalement present en raison des emissions polluantes augmentees. Intervention recommandee sous 2 a 4 semaines.",
    faq: [
      {
        question: 'Comment diagnostiquer un code P0079 avec un multimetre?',
        answer: 'Pour diagnostiquer un P0079, commencez par localiser l\'electrovanne VVT d\'echappement sur le banc 1 du moteur. Debranchez le connecteur et mesurez la resistance aux bornes de l\'electrovanne: elle doit etre entre 6 et 13 ohms selon le constructeur. Si la resistance est tres basse (proche de 0 ohm), l\'electrovanne est en court-circuit interne. Ensuite, verifiez l\'absence de court-circuit a la masse en mesurant la resistance entre chaque borne de l\'electrovanne et la masse du vehicule, elle doit etre infinie. Enfin, verifiez la continuite des fils entre le connecteur de l\'electrovanne et le connecteur de l\'ECU pour detecter un fil coupe.'
      },
      {
        question: 'Le P0079 peut-il etre cause par une simple vidange negligee?',
        answer: 'Indirectement oui. Le systeme VVT depend entierement de la pression et de la qualite de l\'huile moteur. Une huile trop vieille, trop epaisse ou contaminee peut obstruer les canaux internes de l\'electrovanne et du phaseur, ce qui modifie le comportement electrique du systeme et peut generer un code P0079. De plus, un niveau d\'huile trop bas reduit la pression disponible pour le systeme VVT. Il est toujours recommande de verifier le niveau et l\'etat de l\'huile moteur avant d\'engager des reparations electriques couteuses. Une vidange avec huile de qualite adaptee resout parfois le probleme a elle seule.'
      },
      {
        question: 'Quelle est la duree de vie normale d\'une electrovanne VVT?',
        answer: 'Une electrovanne VVT de qualite d\'origine est concue pour durer entre 150 000 et 250 000 km dans des conditions normales d\'utilisation avec un entretien regulier. Cependant, plusieurs facteurs peuvent reduire sa duree de vie: vidanges negligees ou trop espacees, utilisation d\'huile de mauvaise qualite, trajets courts frequents qui empechent l\'huile d\'atteindre sa temperature optimale, et contamination par des residus metalliques. Les electrovannes de remplacement generiques ont souvent une duree de vie plus courte, entre 50 000 et 100 000 km. Investir dans une piece de qualite OEM est recommande.'
      },
      {
        question: 'Le P0079 peut-il endommager le moteur si je ne le repare pas?',
        answer: 'A court terme, le P0079 n\'endommage pas directement le moteur. L\'ECU place le systeme VVT en mode de securite avec un calage fixe, ce qui permet de continuer a rouler. Cependant, a moyen et long terme, le calage incorrect des soupapes d\'echappement peut provoquer des temperatures de combustion anormales, accelerant l\'usure des segments, des soupapes et du catalyseur. De plus, si la cause est un court-circuit electrique non repare, il y a un risque de surchauffe du cablage ou de surcharge de l\'ECU. Il est prudent de reparer dans un delai de quelques semaines.'
      },
      {
        question: 'Peut-on remplacer soi-meme l\'electrovanne VVT?',
        answer: 'Oui, sur la plupart des vehicules, le remplacement de l\'electrovanne VVT est une operation accessible a un bricoleur moyennement experimente. L\'electrovanne est generalement fixee par un ou deux boulons sur la culasse, pres de l\'arbre a cames d\'echappement. Il faut debrancher le connecteur electrique, retirer le boulon de fixation et extraire l\'electrovanne. Attention a remplacer le joint torique pour eviter les fuites d\'huile. L\'operation prend 30 minutes a 1 heure selon l\'accessibilite. Assurez-vous de bien purger l\'air du circuit en faisant tourner le moteur quelques minutes apres le remplacement.'
      }
    ],
    relatedCodes: ['P0078', 'P0080', 'P0010', 'P0020', 'P0022']
  },
  P0080: {
    code: 'P0080',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0080 signale un dysfonctionnement dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement (banc 1), specifiquement un probleme de debit ou de performance du circuit. Ce code est declenche lorsque l'ECU detecte que la reponse du systeme VVT d'echappement ne correspond pas aux commandes envoyees a l'electrovanne. Le systeme VVT ajuste le calage des soupapes d'echappement en utilisant la pression d'huile dirigee par l'electrovanne vers le phaseur d'arbre a cames. Quand la position reelle de l'arbre a cames ne correspond pas a la position commandee, l'ECU enregistre ce code defaut. Ce probleme peut provenir de l'electrovanne, du phaseur mecanique, de la qualite de l'huile ou de la pression d'huile insuffisante.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Bruit de cliquetis au demarrage a froid qui disparait apres quelques minutes',
      'Perte de puissance moderee sur toute la plage de regimes',
      'Ralenti legerement irregulier',
      'Consommation de carburant en hausse de 5 a 10 pourcent',
      'Temps de reponse augmente lors des accelerations',
      'Emissions polluantes elevees pouvant entrainer un echec au controle technique'
    ],
    causes: [
      'Phaseur d\'arbre a cames d\'echappement use ou grippe (30% des cas)',
      'Huile moteur degradee obstruant les canaux hydrauliques du VVT (25% des cas)',
      'Electrovanne VVT partiellement bloquee par des depots (20% des cas)',
      'Pression d\'huile moteur insuffisante (pompe a huile fatiguee) (10% des cas)',
      'Chaine de distribution etiree affectant le calage (8% des cas)',
      'Capteur de position d\'arbre a cames defectueux (5% des cas)',
      'Filtre a huile bouche ou de mauvaise qualite (2% des cas)'
    ],
    solutions: [
      'Effectuer une vidange complete avec huile de qualite et viscosite recommandee par le constructeur (50-100 euros)',
      'Remplacer le filtre a huile par un modele de qualite OEM (10-25 euros)',
      'Demonter et nettoyer l\'electrovanne VVT avec un solvant adapte (gratuit si DIY)',
      'Remplacer l\'electrovanne VVT si le nettoyage ne suffit pas (80-250 euros)',
      'Verifier la pression d\'huile moteur avec un manometre (diagnostic 30-60 euros)',
      'Remplacer le phaseur d\'arbre a cames si grippe ou use (300-800 euros)',
      'Controler la tension de la chaine de distribution (diagnostic 50-100 euros)',
      'Remplacer le capteur de position d\'arbre a cames si defectueux (60-180 euros)'
    ],
    riskExplanation: "Un code P0080 non repare signifie que le calage des soupapes d'echappement n'est pas optimal, ce qui affecte le rendement global du moteur. La consommation augmente et les performances diminuent progressivement. Le risque principal a long terme est l'endommagement du phaseur d'arbre a cames, une piece couteuse a remplacer. De plus, un calage incorrect peut provoquer des temperatures de combustion anormales qui accelerent l'usure du catalyseur et des composants internes du moteur. Reparation recommandee dans les 3 a 4 semaines.",
    faq: [
      {
        question: 'Pourquoi le bruit de cliquetis disparait-il apres le rechauffement du moteur?',
        answer: 'Le bruit de cliquetis au demarrage a froid est typique d\'un probleme de VVT lie a la pression d\'huile. Lorsque le moteur est froid, l\'huile est plus epaisse et met plus de temps a atteindre le phaseur d\'arbre a cames avec une pression suffisante. Pendant ces premieres secondes, le phaseur n\'est pas correctement verrouille et peut bouger legerement, creant ce bruit caracteristique. Une fois que l\'huile se rechauffe et circule correctement, la pression devient suffisante pour stabiliser le phaseur et le bruit disparait. Ce symptome s\'aggrave avec une huile degradee ou un niveau d\'huile bas.'
      },
      {
        question: 'Une vidange peut-elle resoudre un code P0080?',
        answer: 'Oui, dans environ 25 a 30 pourcent des cas, une vidange avec huile de qualite et de viscosite correcte resout le code P0080. L\'huile degradee forme des depots qui obstruent les petits canaux hydrauliques du systeme VVT et de l\'electrovanne. En remplacant l\'huile et le filtre, ces canaux peuvent se deboucher progressivement. Il est recommande d\'utiliser l\'huile exactement specifiee par le constructeur (par exemple 5W-30 ou 0W-20 selon le modele) et un filtre de qualite OEM. Apres la vidange, faites rouler le vehicule 50 a 100 km puis effacez le code pour voir s\'il revient.'
      },
      {
        question: 'Comment savoir si c\'est le phaseur ou l\'electrovanne qui est en cause?',
        answer: 'Pour distinguer les deux, un diagnostic en plusieurs etapes est necessaire. D\'abord, testez l\'electrovanne: demontez-la et verifiez qu\'elle coulisse librement et que sa resistance electrique est dans les normes (6-13 ohms). Si elle semble OK, le probleme vient probablement du phaseur. Un mecanicien peut aussi utiliser une valise diagnostique avancee pour observer la position reelle de l\'arbre a cames par rapport a la position commandee. Si l\'electrovanne recoit bien la commande mais que l\'arbre a cames ne bouge pas, c\'est le phaseur qui est grippe. Le test du phaseur necessite souvent le demontage du cache de distribution.'
      },
      {
        question: 'Le P0080 peut-il etre lie a une chaine de distribution etiree?',
        answer: 'Oui, une chaine de distribution etiree peut provoquer un code P0080. Lorsque la chaine s\'etire avec l\'usure, le calage entre le vilebrequin et les arbres a cames se decale. L\'ECU tente de compenser via le systeme VVT mais atteint les limites de correction, ce qui genere le defaut. Une chaine etiree se manifeste aussi par un bruit de claquement metallique au ralenti et au demarrage. Le diagnostic se fait en mesurant l\'ecart entre les reperes de calage ou en utilisant un oscilloscope pour comparer les signaux des capteurs. Le remplacement d\'une chaine de distribution coute entre 500 et 1500 euros selon le moteur.'
      },
      {
        question: 'Quels vehicules sont les plus touches par le code P0080?',
        answer: 'Le code P0080 est plus frequent sur les vehicules equipes de systemes VVT complexes a double arbre a cames variable. Les marques japonaises comme Toyota (systeme VVT-i), Honda (i-VTEC) et Nissan (CVTCS) sont souvent concernees, tout comme les marques europeennes equipees de systemes similaires (BMW Vanos, Audi/VW avec distribution variable). Les moteurs a forte cylindree avec chaine de distribution sont egalement plus sujets a ce probleme. Les vehicules avec un historique d\'entretien irregulier, notamment des vidanges trop espacees, sont significativement plus touches, surtout au-dela de 120 000 km.'
      }
    ],
    relatedCodes: ['P0078', 'P0079', 'P0010', 'P0020', 'P0011']
  },
  P0081: {
    code: 'P0081',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0081 signale un dysfonctionnement dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2. Le banc 2 correspond au cote du moteur oppose au cylindre numero 1, et ce code s'applique aux moteurs en V ou a plat qui possedent deux rangees de cylindres. Le systeme VVT du banc 2 fonctionne de maniere identique a celui du banc 1 mais de maniere independante. L'ECU a detecte que le circuit electrique de cette electrovanne presente un probleme general, que ce soit une tension incorrecte, un signal erratique ou une absence de reponse. Ce defaut affecte le calage des soupapes d'echappement sur une moitie du moteur, ce qui peut creer un desequilibre de fonctionnement entre les deux bancs.",
    symptoms: [
      'Voyant moteur allume de maniere permanente',
      'Vibrations anormales dues au desequilibre entre les deux bancs du moteur',
      'Perte de puissance perceptible surtout a haut regime',
      'Consommation de carburant augmentee de 5 a 12 pourcent',
      'Bruit metallique ou cliquetis du cote du banc 2',
      'Ralenti legerement irregulier avec de faibles oscillations',
      'Reduction des performances globales du vehicule'
    ],
    causes: [
      'Electrovanne VVT d\'echappement du banc 2 defaillante (30% des cas)',
      'Probleme de cablage ou de connecteur sur le circuit du banc 2 (25% des cas)',
      'Huile moteur degradee affectant le fonctionnement hydraulique (15% des cas)',
      'Phaseur d\'arbre a cames d\'echappement banc 2 grippe (12% des cas)',
      'Niveau d\'huile moteur insuffisant (8% des cas)',
      'Capteur de position d\'arbre a cames banc 2 defectueux (5% des cas)',
      'Pression d\'huile moteur globalement insuffisante (5% des cas)'
    ],
    solutions: [
      'Verifier le niveau et l\'etat de l\'huile moteur, vidanger si necessaire (50-100 euros)',
      'Inspecter le connecteur et le cablage de l\'electrovanne VVT banc 2 (gratuit)',
      'Nettoyer le connecteur avec un spray nettoyant contact electrique (5-10 euros)',
      'Tester l\'electrovanne avec un multimetre (resistance 6-13 ohms attendue)',
      'Remplacer l\'electrovanne VVT banc 2 si defectueuse (80-250 euros)',
      'Verifier la pression d\'huile moteur avec un manometre (30-60 euros diagnostic)',
      'Remplacer le phaseur d\'arbre a cames banc 2 si necessaire (300-800 euros)',
      'Faire un diagnostic complet des deux bancs pour detecter d\'eventuels problemes croises (80-120 euros)'
    ],
    riskExplanation: "Un P0081 non repare cree un desequilibre de fonctionnement entre les deux bancs du moteur, ce qui peut accelerer l'usure des composants mecaniques. Le catalyseur du banc 2 peut etre soumis a des temperatures anormales en raison du mauvais calage des soupapes d'echappement, risquant une degradation prematuree. Les performances du vehicule sont reduites et la consommation augmentee. Sur un moteur en V, ignorer ce defaut pendant plusieurs mois peut entrainer des reparations couteuses sur le systeme de distribution. Reparation conseillee sous 3 semaines.",
    faq: [
      {
        question: 'Qu\'est-ce que le banc 2 et comment le localiser sur mon moteur?',
        answer: 'Le banc 2 est le cote du moteur qui ne contient pas le cylindre numero 1. Sur un moteur en V (V6, V8), les cylindres sont repartis en deux rangees appelees banc 1 et banc 2. Le banc 1 est toujours celui qui contient le cylindre numero 1. Pour savoir quel cote est le banc 2, consultez le manuel technique de votre vehicule ou cherchez la numerotation des cylindres specifique a votre moteur. En general, sur les moteurs americains le banc 1 est cote conducteur, sur les moteurs europeens c\'est variable. Sur un moteur en ligne, il n\'y a qu\'un seul banc, donc le code P0081 ne s\'applique pas.'
      },
      {
        question: 'Pourquoi ai-je un code P0081 mais pas de P0078 sur le banc 1?',
        answer: 'Il est tout a fait normal d\'avoir un defaut VVT sur un seul banc. Chaque banc possede son propre systeme VVT independant avec sa propre electrovanne, son propre phaseur et son propre cablage. Un probleme sur le banc 2 n\'affecte pas necessairement le banc 1. Cela peut etre du a une electrovanne qui s\'use plus vite d\'un cote, un connecteur plus expose a l\'humidite, ou simplement une difference de tolerance entre les composants. Si les deux codes apparaissent simultanement, cela oriente plutot vers un probleme commun comme l\'huile moteur ou la pression d\'huile.'
      },
      {
        question: 'Le code P0081 peut-il causer des vibrations dans l\'habitacle?',
        answer: 'Oui, sur un moteur en V, un defaut VVT sur un seul banc peut creer un desequilibre perceptible sous forme de vibrations. Quand un banc fonctionne avec un calage optimal et l\'autre avec un calage fixe ou incorrect, les deux cotes du moteur ne produisent pas exactement la meme puissance ni les memes pulsations d\'echappement. Cela se traduit par des vibrations au ralenti et parfois par un son d\'echappement legerement asymetrique. Ces vibrations sont generalement legeres et ne representent pas un danger, mais elles s\'aggravent si le defaut n\'est pas corrige.'
      },
      {
        question: 'Dois-je remplacer les electrovannes VVT des deux bancs en meme temps?',
        answer: 'Ce n\'est pas obligatoire mais c\'est souvent recommande pour des raisons pratiques. Si l\'electrovanne du banc 2 est defaillante apres un certain kilometrage, celle du banc 1 a le meme age et risque de tomber en panne prochainement. Remplacer les deux en meme temps permet d\'economiser sur la main d\'oeuvre (une seule intervention) et d\'eviter une panne similaire quelques mois plus tard. Cependant, si le probleme du banc 2 est clairement d\'origine electrique (connecteur, cablage) et non lie a l\'usure de l\'electrovanne, il n\'est pas necessaire de remplacer celle du banc 1.'
      },
      {
        question: 'Le code P0081 est-il present sur tous les types de moteurs?',
        answer: 'Non, le code P0081 concerne specifiquement les moteurs qui possedent un banc 2, c\'est-a-dire les moteurs en V (V6, V8, V10, V12) et les moteurs a plat (flat-4, flat-6 comme les Subaru et Porsche). Les moteurs en ligne (3, 4 ou 6 cylindres en ligne) n\'ont qu\'un seul banc et ne peuvent donc pas generer ce code. De plus, le vehicule doit etre equipe d\'un systeme de distribution variable sur les soupapes d\'echappement, ce qui n\'est pas le cas de tous les moteurs. Les moteurs plus anciens sans VVT ou avec VVT uniquement sur l\'admission ne generent pas ce code.'
      }
    ],
    relatedCodes: ['P0078', 'P0082', 'P0083', 'P0021', 'P0025']
  },
  P0082: {
    code: 'P0082',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0082 indique une tension trop basse dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2. Ce code est specifique aux moteurs en V ou a plat qui disposent de deux rangees de cylindres avec chacune son propre systeme VVT. L'ECU a detecte que la tension electrique dans le circuit de l'electrovanne du banc 2 est inferieure au seuil minimal acceptable, ce qui empeche le systeme VVT de fonctionner correctement sur cette rangee de cylindres. Les causes typiques incluent un court-circuit a la masse, un fil coupe, une electrovanne en court-circuit interne ou un connecteur defaillant. Ce defaut necessite un diagnostic electrique methodique pour identifier la source exacte du probleme.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Performances moteur reduites, manque de reprise',
      'Ralenti irregulier avec oscillations du regime',
      'Consommation de carburant augmentee',
      'Bruit anormal provenant du systeme de distribution cote banc 2',
      'Vibrations plus prononcees au ralenti dues au desequilibre entre bancs',
      'Mode degrade possible sur certains vehicules'
    ],
    causes: [
      'Court-circuit a la masse dans le cablage de l\'electrovanne banc 2 (30% des cas)',
      'Electrovanne VVT banc 2 en court-circuit interne (25% des cas)',
      'Fil coupe ou endommage dans le faisceau electrique (15% des cas)',
      'Connecteur electrique corrode ou endommage par l\'eau (15% des cas)',
      'Huile moteur contaminee ou degradee affectant l\'electrovanne (8% des cas)',
      'Probleme de masse defectueuse sur le circuit (5% des cas)',
      'Defaillance rare du module de commande ECU (2% des cas)'
    ],
    solutions: [
      'Inspecter visuellement le cablage entre l\'ECU et l\'electrovanne VVT banc 2 (gratuit)',
      'Verifier la resistance de l\'electrovanne avec multimetre: 6-13 ohms normal (diagnostic gratuit)',
      'Tester l\'isolation des fils pour detecter un court-circuit a la masse (diagnostic 30-50 euros)',
      'Nettoyer ou remplacer le connecteur electrique si corrode (10-30 euros)',
      'Remplacer l\'electrovanne VVT banc 2 si resistance anormale (80-250 euros)',
      'Reparer le faisceau electrique si fil coupe detecte (50-150 euros)',
      'Verifier et nettoyer les points de masse du circuit (gratuit si DIY)',
      'Effectuer une vidange si l\'huile est degradee (50-100 euros)'
    ],
    riskExplanation: "Un P0082 non traite empeche le bon fonctionnement du VVT d'echappement sur le banc 2, ce qui degrade les performances et augmente la consommation. Le desequilibre entre les deux bancs peut generer des vibrations et accelerer l'usure des composants mecaniques du cote affecte. Si la cause est un court-circuit electrique, il y a un risque de surchauffe du cablage et potentiellement de dommages a l'ECU. Le catalyseur du banc 2 peut egalement souffrir de temperatures anormales dues au calage incorrect. Reparation recommandee sous 2 a 3 semaines.",
    faq: [
      {
        question: 'Comment tester si l\'electrovanne VVT banc 2 est en court-circuit?',
        answer: 'Pour tester un court-circuit de l\'electrovanne, utilisez un multimetre en mode resistance (ohms). Debranchez le connecteur de l\'electrovanne et mesurez la resistance entre les deux bornes: elle doit etre entre 6 et 13 ohms. Une valeur tres basse (moins de 1 ohm) indique un court-circuit interne et l\'electrovanne doit etre remplacee. Mesurez ensuite la resistance entre chaque borne et la carcasse metallique de l\'electrovanne: elle doit etre infinie (OL sur le multimetre). Si vous obtenez une valeur, il y a un court-circuit a la masse dans l\'electrovanne elle-meme.'
      },
      {
        question: 'Le P0082 peut-il etre lie a un probleme sur le banc 1 egalement?',
        answer: 'Le P0082 est specifique au banc 2 et ne concerne pas directement le banc 1. Cependant, si la cause est liee a un facteur commun aux deux bancs, comme un niveau d\'huile bas, une huile degradee ou une pression d\'huile insuffisante, le banc 1 peut aussi etre affecte et generer ses propres codes (P0079 par exemple). De plus, un probleme electrique sur le faisceau principal qui alimente les deux electrovannes pourrait theoriquement affecter les deux bancs. Il est toujours recommande de verifier les codes des deux bancs lors du diagnostic.'
      },
      {
        question: 'Un connecteur corrode peut-il causer un P0082?',
        answer: 'Oui, c\'est une cause frequente, surtout dans les regions humides ou en bord de mer. L\'oxydation et la corrosion des contacts du connecteur augmentent la resistance electrique, ce qui peut faire chuter la tension en dessous du seuil minimal et declencher le P0082. L\'eau qui s\'infiltre dans le connecteur peut aussi creer des courts-circuits intermittents. Pour traiter ce probleme, demontez le connecteur, nettoyez les contacts avec un spray nettoyant specifique pour contacts electriques, appliquez de la graisse dielectrique pour prevenir la corrosion future, et verifiez que le joint d\'etancheite du connecteur est intact.'
      },
      {
        question: 'Est-il dangereux de rouler avec un P0082?',
        answer: 'Rouler avec un P0082 n\'est pas dangereux pour la securite du conducteur ou des passagers. Le vehicule reste parfaitement controlable et freinable. Le risque est principalement d\'ordre mecanique et economique: surconsommation, usure acceleree de certains composants et risque de reparation plus couteuse si le probleme s\'aggrave. Si la cause est un court-circuit electrique, il y a un leger risque supplementaire de dommage au faisceau ou a l\'ECU, mais cela reste rare. Vous pouvez rouler le temps de prendre rendez-vous au garage, mais ne negligez pas la reparation pendant des mois.'
      },
      {
        question: 'Le remplacement de l\'electrovanne VVT banc 2 est-il une operation complexe?',
        answer: 'Sur les moteurs en V, l\'accessibilite de l\'electrovanne du banc 2 varie enormement selon le modele. Sur certains vehicules, elle est facilement accessible sur le dessus de la culasse. Sur d\'autres, il faut demonter des elements d\'admission ou des accessoires pour y acceder. L\'operation elle-meme est simple (debrancher le connecteur, retirer un ou deux boulons, extraire l\'electrovanne), mais le temps de demontage et remontage des elements environnants peut augmenter la duree de l\'intervention. Comptez 30 minutes a 2 heures selon le modele. N\'oubliez pas de remplacer le joint torique.'
      }
    ],
    relatedCodes: ['P0081', 'P0083', 'P0078', 'P0079', 'P0025']
  },
  P0083: {
    code: 'P0083',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0083 indique une tension trop elevee dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2. Ce defaut est l'oppose du P0082 (tension trop basse) et concerne specifiquement les moteurs en V ou a plat. L'ECU a detecte que la tension dans le circuit electrique depasse le seuil maximal autorise, ce qui peut indiquer un court-circuit vers le positif de la batterie, une resistance interne trop elevee de l'electrovanne ou un probleme dans le circuit de retour a la masse. Le systeme VVT du banc 2 ne peut plus fonctionner normalement, affectant le calage des soupapes d'echappement sur cette rangee de cylindres. Un diagnostic electrique precis est necessaire pour identifier la source exacte du probleme.",
    symptoms: [
      'Voyant moteur allume de facon permanente',
      'Perte de puissance notable lors des accelerations',
      'Ralenti instable avec vibrations du moteur',
      'Augmentation de la consommation de carburant',
      'Bruit de fonctionnement anormal du moteur cote banc 2',
      'Reponse lente du moteur aux sollicitations de l\'accelerateur',
      'Emissions polluantes augmentees'
    ],
    causes: [
      'Court-circuit vers le positif dans le cablage de l\'electrovanne (30% des cas)',
      'Electrovanne VVT avec resistance interne trop elevee (25% des cas)',
      'Connecteur endommage creant un faux contact (15% des cas)',
      'Probleme de retour a la masse dans le circuit (15% des cas)',
      'Huile moteur trop epaisse ou degradee bloquant mecaniquement l\'electrovanne (8% des cas)',
      'Interference electrique avec un autre circuit (5% des cas)',
      'Defaillance du circuit de commande dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Inspecter le cablage pour detecter un eventuel court-circuit vers le positif (gratuit si DIY)',
      'Mesurer la resistance de l\'electrovanne VVT banc 2 (doit etre entre 6 et 13 ohms)',
      'Verifier le circuit de retour a la masse de l\'electrovanne (diagnostic 30-50 euros)',
      'Nettoyer ou remplacer le connecteur electrique defectueux (10-30 euros)',
      'Remplacer l\'electrovanne VVT si sa resistance est hors specification (80-250 euros)',
      'Reparer le faisceau electrique si un court-circuit est identifie (50-200 euros)',
      'Effectuer une vidange avec huile de viscosite adaptee (50-100 euros)',
      'Verifier les autres circuits a proximite pour eliminer les interferences (diagnostic 50-80 euros)'
    ],
    riskExplanation: "Un P0083 non repare degrade les performances du moteur sur le banc 2 et cree un desequilibre avec le banc 1. Le risque de court-circuit electrique est plus prononce avec ce code car une tension elevee peut provoquer une surchauffe du cablage ou endommager l'ECU a long terme. Le catalyseur du banc 2 peut etre soumis a des contraintes thermiques anormales. De plus, la surconsommation generee augmente les couts d'exploitation du vehicule. Il est conseille de reparer dans un delai de 2 a 3 semaines pour eviter des dommages secondaires.",
    faq: [
      {
        question: 'Comment differencier un P0082 (tension basse) d\'un P0083 (tension haute)?',
        answer: 'Le P0082 indique une tension trop basse, generalement causee par un court-circuit a la masse, un fil coupe ou une electrovanne en court-circuit interne qui tire la tension vers le bas. Le P0083 indique une tension trop haute, plutot causee par un court-circuit vers le positif de la batterie, une resistance trop elevee dans l\'electrovanne ou un probleme de retour a la masse. Le diagnostic avec multimetre permet de distinguer les deux: pour un P0082, cherchez une resistance anormalement basse; pour un P0083, cherchez une resistance anormalement haute ou un fil en contact avec une source de tension positive.'
      },
      {
        question: 'Un court-circuit vers le positif peut-il endommager l\'ECU?',
        answer: 'Oui, theoriquement un court-circuit vers le positif dans le circuit de l\'electrovanne VVT peut endommager le circuit de sortie de l\'ECU qui commande cette electrovanne. L\'ECU utilise des transistors de puissance pour piloter les electrovannes, et une tension excessive en retour peut griller ces transistors. Cependant, les ECU modernes disposent de protections internes (diodes de roue libre, fusibles internes) qui limitent ce risque. Le danger est plus grand si le court-circuit est intermittent et genere des pics de tension repetes. C\'est une des raisons pour lesquelles il ne faut pas ignorer ce code trop longtemps.'
      },
      {
        question: 'Puis-je debrancher l\'electrovanne VVT pour tester si c\'est la cause?',
        answer: 'Oui, debrancher l\'electrovanne VVT est un test diagnostic utile. Si le code change apres avoir debranche le connecteur (par exemple de P0083 a un autre code), cela confirme que le probleme vient de l\'electrovanne ou de sa connexion. Si le code reste identique malgre la deconnexion, le probleme est dans le cablage entre le connecteur et l\'ECU. Attention: rouler avec l\'electrovanne debranchee n\'est pas recommande sur le long terme car le VVT ne fonctionnera pas du tout, mais c\'est acceptable pour un court trajet de test diagnostic.'
      },
      {
        question: 'Pourquoi l\'huile moteur epaisse peut-elle causer un P0083?',
        answer: 'L\'huile moteur trop epaisse ou degradee peut bloquer mecaniquement le piston interne de l\'electrovanne VVT. Quand l\'electrovanne est mecaniquement bloquee, le circuit electrique se comporte differemment: la bobine de l\'electrovanne ne genere pas le champ magnetique attendu car le piston ne se deplace pas, ce qui modifie les caracteristiques electriques du circuit (impedance, courant de retour). L\'ECU interprete ces variations comme une tension anormalement haute. C\'est pourquoi une vidange avec huile fraiche et de viscosite correcte peut parfois resoudre un P0083 sans intervention electrique.'
      },
      {
        question: 'Faut-il un equipement special pour diagnostiquer un P0083?',
        answer: 'Un multimetre de base suffit pour effectuer les tests principaux: resistance de l\'electrovanne, test d\'isolation, verification de la tension d\'alimentation. Pour un diagnostic plus approfondi, une valise diagnostique capable d\'afficher les donnees en temps reel du VVT est tres utile pour observer la commande envoyee par l\'ECU et la reponse reelle du systeme. Un oscilloscope peut aussi etre utilise pour analyser la forme d\'onde du signal de commande et detecter des anomalies intermittentes. La plupart des garages generalistes disposent de l\'equipement necessaire pour ce type de diagnostic.'
      }
    ],
    relatedCodes: ['P0081', 'P0082', 'P0078', 'P0079', 'P0025']
  },
  P0084: {
    code: 'P0084',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0084 signale un probleme de performance ou de debit dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2. Contrairement aux codes P0082 et P0083 qui pointent vers des problemes purement electriques (tension haute ou basse), le P0084 indique que l'electrovanne et son circuit electrique fonctionnent mais que le resultat mecanique n'est pas conforme aux attentes de l'ECU. En d'autres termes, le phaseur d'arbre a cames d'echappement du banc 2 ne se positionne pas correctement malgre les commandes envoyees. Ce defaut peut etre d'origine hydraulique (pression d'huile, canaux obstrus), mecanique (phaseur grippe, chaine etiree) ou lie a un capteur de position d'arbre a cames defaillant.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Cliquetis ou bruit metallique au demarrage a froid cote banc 2',
      'Perte de puissance progressive plus marquee a haut regime',
      'Consommation de carburant en hausse de 5 a 15 pourcent',
      'Ralenti legerement irregulier',
      'Acceleration moins reactive avec un temps de reponse augmente',
      'Vibrations dues au desequilibre entre les deux bancs du moteur'
    ],
    causes: [
      'Phaseur d\'arbre a cames d\'echappement banc 2 use ou grippe (30% des cas)',
      'Huile moteur degradee ou de mauvaise viscosite obstruant les canaux VVT (25% des cas)',
      'Electrovanne VVT partiellement colmatee par des depots (15% des cas)',
      'Pression d\'huile insuffisante au niveau du phaseur (10% des cas)',
      'Chaine de distribution etiree affectant le calage du banc 2 (10% des cas)',
      'Capteur de position d\'arbre a cames banc 2 donnant des informations erronees (7% des cas)',
      'Filtre a huile de mauvaise qualite ne filtrant pas correctement (3% des cas)'
    ],
    solutions: [
      'Effectuer une vidange complete avec huile de qualite et viscosite recommandee (50-100 euros)',
      'Remplacer le filtre a huile par un modele de qualite OEM (10-25 euros)',
      'Demonter et nettoyer l\'electrovanne VVT banc 2 (gratuit si DIY, 80-150 euros au garage)',
      'Verifier la pression d\'huile moteur avec manometre (diagnostic 30-60 euros)',
      'Remplacer le phaseur d\'arbre a cames si grippe ou use (300-800 euros)',
      'Controler l\'etat de la chaine de distribution (diagnostic 50-100 euros)',
      'Remplacer le capteur de position d\'arbre a cames banc 2 si defectueux (60-180 euros)',
      'Effectuer un ringage du circuit d\'huile pour eliminer les depots (100-200 euros)'
    ],
    riskExplanation: "Un P0084 non corrige signifie que le calage des soupapes d'echappement du banc 2 est sous-optimal, degradant le rendement et augmentant les emissions. Le phaseur d'arbre a cames continue de fonctionner dans des conditions anormales, ce qui accelere son usure et peut mener a une panne complete necessitant un remplacement couteux. Le desequilibre entre les bancs sollicite davantage le cote fonctionnel du moteur. Le catalyseur du banc 2 est expose a des temperatures et compositions de gaz anormales. Reparation recommandee sous 3 a 4 semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre un code P0084 et un P0082 ou P0083?',
        answer: 'Les codes P0082 et P0083 indiquent des problemes electriques purs dans le circuit de l\'electrovanne VVT: tension trop basse ou trop haute. Le P0084, en revanche, indique un probleme de performance: le circuit electrique fonctionne mais le resultat mecanique n\'est pas conforme. Cela oriente le diagnostic vers des causes hydrauliques ou mecaniques plutot qu\'electriques. Un P0084 est souvent lie a l\'huile moteur (qualite, niveau, pression) ou au phaseur mecanique lui-meme. C\'est un code plus complexe a diagnostiquer car il necessite de verifier a la fois le systeme electrique, hydraulique et mecanique.'
      },
      {
        question: 'Un ringage du circuit d\'huile peut-il resoudre le P0084?',
        answer: 'Oui, un ringage du circuit d\'huile peut etre efficace dans environ 20 a 25 pourcent des cas de P0084. Les depots et boues qui s\'accumulent dans les canaux hydrauliques du VVT empechent l\'huile de circuler correctement vers le phaseur. Un ringage professionnel utilise un produit detergent puissant qui circule dans tout le circuit d\'huile pour dissoudre ces depots. Apres le ringage, une vidange complete avec huile de qualite est effectuee. Cette operation coute entre 100 et 200 euros et peut eviter le remplacement d\'un phaseur a 300-800 euros. C\'est donc une option a tenter avant les reparations mecaniques lourdes.'
      },
      {
        question: 'Comment savoir si la chaine de distribution est etiree?',
        answer: 'Plusieurs indices peuvent indiquer une chaine de distribution etiree: un bruit de claquement metallique au ralenti et au demarrage qui s\'attenue en montant dans les tours, des codes defaut VVT sur un ou les deux bancs, et un ecart de calage mesurable avec une valise diagnostique entre la position theorique et reelle des arbres a cames. Un mecanicien peut aussi verifier visuellement l\'etat de la chaine en demontant le cache de distribution ou mesurer le jeu du tendeur. Sur certains vehicules, un controle a l\'oscilloscope des signaux des capteurs d\'arbre a cames et de vilebrequin permet de detecter l\'etirement sans demontage.'
      },
      {
        question: 'Le P0084 est-il plus grave que les codes P0081, P0082 ou P0083?',
        answer: 'Le P0084 n\'est pas necessairement plus grave en termes de risque immediat, mais il est souvent plus couteux a reparer car les causes sont frequemment mecaniques (phaseur, chaine) plutot qu\'electriques (electrovanne, cablage). Un P0082 ou P0083 se resout souvent par le remplacement d\'une electrovanne ou la reparation d\'un fil, pour 80-250 euros. Un P0084 peut necessiter le remplacement du phaseur (300-800 euros) ou de la chaine de distribution (500-1500 euros). Cependant, il y a aussi une chance raisonnable qu\'une simple vidange ou un nettoyage de l\'electrovanne suffise.'
      },
      {
        question: 'Le P0084 affecte-t-il le controle technique?',
        answer: 'Oui, le P0084 allume le voyant moteur ce qui constitue un motif de refus au controle technique dans la plupart des pays europeens. De plus, le calage incorrect des soupapes d\'echappement augmente les emissions polluantes, ce qui peut aussi provoquer un echec lors de la mesure des gaz. Meme si vous effacez le code avant le controle technique, les autotests du systeme VVT ne seront pas valides et le controleur technique pourra detecter cette situation. Il est donc imperatif de reparer le defaut avant de presenter le vehicule au controle technique.'
      }
    ],
    relatedCodes: ['P0081', 'P0082', 'P0083', 'P0025', 'P0022']
  },
  P0085: {
    code: 'P0085',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0085 signale un dysfonctionnement dans le circuit de commande de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2, specifiquement un probleme au niveau du circuit de commande secondaire ou du circuit de retenue. Sur certains systemes VVT avances, il existe deux circuits de commande pour l'electrovanne: un pour avancer le calage et un pour le retarder. Le P0085 concerne generalement le circuit de retenue ou le deuxieme circuit de commande. L'ECU a detecte une anomalie dans ce circuit qui empeche le controle precis du calage des soupapes d'echappement du banc 2. Ce code est plus specifique que le P0081 generique et oriente le diagnostic vers une partie precise du circuit de commande.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Manque de puissance a certains regimes specifiques',
      'Ralenti irregulier avec de legeres variations',
      'Consommation de carburant en legere augmentation',
      'Temps de reponse du moteur allonge lors des changements de regime',
      'Bruit de fonctionnement legerement different du cote banc 2',
      'Performances en baisse lors de la conduite en charge ou en cote'
    ],
    causes: [
      'Circuit de commande secondaire de l\'electrovanne VVT defaillant (30% des cas)',
      'Electrovanne VVT a double bobinage avec une bobine defectueuse (25% des cas)',
      'Cablage endommage sur le circuit de retenue (15% des cas)',
      'Connecteur avec contact intermittent (12% des cas)',
      'Huile moteur degradee affectant la reponse hydraulique (10% des cas)',
      'Probleme de commande ECU sur le circuit secondaire (5% des cas)',
      'Phaseur d\'arbre a cames ne repondant pas dans un sens de rotation (3% des cas)'
    ],
    solutions: [
      'Diagnostiquer le circuit de commande secondaire avec une valise avancee (50-100 euros)',
      'Tester la double bobine de l\'electrovanne si applicable (diagnostic gratuit avec multimetre)',
      'Inspecter le cablage specifique au circuit de retenue (gratuit si DIY)',
      'Remplacer l\'electrovanne VVT banc 2 si un bobinage est defectueux (80-250 euros)',
      'Nettoyer ou remplacer le connecteur electrique (10-30 euros)',
      'Effectuer une vidange avec huile de qualite recommandee (50-100 euros)',
      'Verifier le fonctionnement du phaseur dans les deux sens de rotation (diagnostic 80-150 euros)'
    ],
    riskExplanation: "Un P0085 non repare limite la capacite du systeme VVT a controler finement le calage des soupapes d'echappement du banc 2. L'impact est generalement moins severe qu'une panne totale du VVT car le systeme peut encore fonctionner partiellement. Cependant, le manque de precision du calage entraine une degradation progressive des performances et de l'efficacite du moteur. A long terme, le phaseur peut s'user prematurement si le circuit de retenue ne fonctionne pas correctement. Reparation recommandee sous 3 a 5 semaines.",
    faq: [
      {
        question: 'Qu\'est-ce que le circuit de retenue sur un systeme VVT?',
        answer: 'Sur certains systemes VVT avances, l\'electrovanne de commande dispose de deux circuits distincts: un circuit d\'avance qui permet de modifier le calage dans un sens, et un circuit de retenue qui permet de le modifier dans l\'autre sens ou de maintenir une position precise. Le circuit de retenue est essentiel pour le controle fin du phaseur. Quand ce circuit est defaillant, le systeme peut encore avancer le calage mais ne peut plus le retarder correctement ou maintenir une position intermediaire stable. Certains constructeurs utilisent le terme circuit de commande B ou circuit secondaire pour designer cette fonction.'
      },
      {
        question: 'Ce code est-il specifique a certaines marques de vehicules?',
        answer: 'Le code P0085 suit la norme OBD-II et peut theoriquement apparaitre sur n\'importe quel vehicule equipe d\'un systeme VVT a double commande sur les soupapes d\'echappement. Cependant, il est plus frequent sur les vehicules qui utilisent des electrovannes VVT a bobinage double ou des systemes de distribution variable complexes. Les constructeurs japonais (Toyota, Honda, Nissan) et certains constructeurs europeens (BMW, VW) utilisent des variantes de ce type de systeme. Chaque constructeur peut aussi utiliser ses propres codes complementaires specifiques en plus de ce code generique OBD-II.'
      },
      {
        question: 'Peut-on confondre le P0085 avec un autre probleme de VVT?',
        answer: 'Oui, les symptomes du P0085 sont similaires a ceux des autres codes VVT (P0081, P0082, P0083, P0084). La difference reside dans la precision du diagnostic. Le P0085 oriente vers le circuit de retenue ou secondaire specifiquement, ce qui reduit le champ d\'investigation. Si vous n\'avez qu\'un lecteur OBD basique, les symptomes ressentis seront les memes que pour les autres codes VVT. Un technicien avec une valise diagnostique avancee pourra observer les commandes envoyees aux deux circuits de l\'electrovanne et determiner lequel ne repond pas correctement.'
      },
      {
        question: 'Dois-je remplacer toute l\'electrovanne ou seulement reparer le circuit?',
        answer: 'L\'electrovanne VVT est generalement une piece non reparable: si un de ses bobinages internes est defectueux, il faut remplacer l\'ensemble. Cependant, le probleme peut aussi venir du cablage ou du connecteur externe, qui eux sont reparables separement. Avant de commander une electrovanne neuve, verifiez toujours le cablage et le connecteur. Si le multimetre confirme que l\'electrovanne elle-meme est defectueuse, le remplacement complet est la seule option. Choisissez une piece de qualite OEM ou equivalente pour garantir la durabilite de la reparation.'
      },
      {
        question: 'Le P0085 peut-il apparaitre de maniere intermittente?',
        answer: 'Oui, le P0085 peut etre intermittent, surtout si la cause est un connecteur avec faux contact ou un fil partiellement endommage. Dans ce cas, le code peut apparaitre et disparaitre en fonction des conditions de conduite, de la temperature ambiante et des vibrations du moteur. Un code intermittent est parfois plus difficile a diagnostiquer car le defaut n\'est pas present en permanence. Utilisez la fonction freeze frame de votre lecteur OBD pour noter les conditions exactes lors de l\'apparition du defaut, cela aidera le mecanicien a orienter son diagnostic.'
      }
    ],
    relatedCodes: ['P0081', 'P0082', 'P0083', 'P0084', 'P0025']
  },
  P0086: {
    code: 'P0086',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0086 signale un probleme de tension basse dans le circuit de commande secondaire de l'electrovanne de distribution variable des soupapes d'echappement sur le banc 2. Ce code est une variante plus specifique du P0085, indiquant precisement que la tension mesuree dans le circuit de retenue ou circuit B est en dessous du seuil minimal requis. L'ECU ne peut plus commander correctement le retardement ou le maintien du calage des soupapes d'echappement sur le banc 2. Les causes typiques incluent un court-circuit a la masse dans la partie specifique du cablage, un bobinage secondaire de l'electrovanne en court-circuit interne, ou un probleme de connexion dans le circuit de retenue. Ce defaut est principalement rencontre sur les moteurs en V equipes de systemes VVT avances.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Perte de puissance moderee perceptible en conduite normale',
      'Ralenti irregulier avec vibrations legeres',
      'Consommation de carburant legerement augmentee',
      'Reponse du moteur moins vive lors des transitions de regime',
      'Possible desequilibre sonore entre les deux bancs',
      'Performance globale du vehicule degradee'
    ],
    causes: [
      'Court-circuit a la masse dans le circuit de retenue de l\'electrovanne (30% des cas)',
      'Bobinage secondaire de l\'electrovanne en court-circuit (25% des cas)',
      'Fil endommage ou coupe dans le faisceau du circuit B (20% des cas)',
      'Connecteur corrode sur la partie specifique du circuit de retenue (10% des cas)',
      'Masse defectueuse sur le circuit (8% des cas)',
      'Contamination de l\'electrovanne par des particules metalliques dans l\'huile (5% des cas)',
      'Defaillance du pilote de commande dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Tester la resistance du bobinage secondaire de l\'electrovanne (diagnostic gratuit avec multimetre)',
      'Verifier l\'absence de court-circuit a la masse sur le circuit de retenue (diagnostic 30-50 euros)',
      'Inspecter et reparer le cablage du circuit B si endommage (50-150 euros)',
      'Nettoyer ou remplacer le connecteur corrode (10-30 euros)',
      'Remplacer l\'electrovanne VVT banc 2 si bobinage defectueux (80-250 euros)',
      'Verifier les points de masse du circuit (gratuit si DIY)',
      'Effectuer une vidange avec huile propre pour eliminer les particules metalliques (50-100 euros)',
      'Diagnostiquer le circuit de commande de l\'ECU (80-150 euros)'
    ],
    riskExplanation: "Le P0086 reduit la capacite de controle du systeme VVT sur le banc 2, ce qui affecte le rendement du moteur et augmente les emissions. Le risque principal est l'usure prematuree du phaseur d'arbre a cames si le circuit de retenue ne fonctionne pas, car le phaseur peut se retrouver en butee mecanique de maniere repetee. Un court-circuit non repare peut aussi causer une surchauffe localisee du cablage. La surconsommation generee et l'echec potentiel au controle technique sont des preoccupations supplementaires. Reparation conseillee sous 3 semaines.",
    faq: [
      {
        question: 'Comment identifier le circuit de retenue sur mon electrovanne VVT?',
        answer: 'L\'electrovanne VVT a double circuit possede generalement un connecteur avec 3 ou 4 broches au lieu des 2 habituelles. Le schema electrique specifique a votre vehicule, disponible dans le manuel d\'atelier ou en ligne, indique quelles broches correspondent au circuit d\'avance et au circuit de retenue. En l\'absence de schema, vous pouvez utiliser un multimetre pour mesurer la resistance entre chaque paire de broches: les deux circuits doivent avoir des resistances similaires (6-13 ohms chacun). Si un circuit montre une resistance anormalement basse, c\'est celui qui est en court-circuit.'
      },
      {
        question: 'Les particules metalliques dans l\'huile peuvent-elles reellement causer ce code?',
        answer: 'Oui, les particules metalliques microscopiques presentes dans l\'huile moteur peuvent s\'accumuler dans l\'electrovanne VVT et perturber son fonctionnement. Les electrovannes VVT contiennent des elements mobiles de precision avec des tolerances tres serrees. Des particules metalliques provenant de l\'usure normale du moteur, d\'un tendeur de chaine defectueux ou de roulements uses peuvent se coincer dans ces mecanismes et creer des courts-circuits entre les bobinages ou entre un bobinage et la masse. Un filtre a huile de qualite et des vidanges regulieres minimisent ce risque.'
      },
      {
        question: 'Peut-on nettoyer le bobinage secondaire d\'une electrovanne VVT?',
        answer: 'Non, le bobinage interne d\'une electrovanne VVT n\'est pas accessible pour nettoyage ou reparation. L\'electrovanne est une piece scellee dont les composants internes (bobinages, noyau magnetique, piston) ne sont pas demontables individuellement. Si le test au multimetre confirme un bobinage en court-circuit (resistance trop basse) ou coupe (resistance infinie), le remplacement complet de l\'electrovanne est la seule option. On peut nettoyer l\'exterieur de l\'electrovanne et son tamis filtrant, mais pas reparer un bobinage interne defaillant.'
      },
      {
        question: 'Ce code peut-il causer l\'allumage d\'autres codes defaut?',
        answer: 'Oui, un P0086 peut entrainer l\'apparition d\'autres codes defaut lies. Par exemple, si le VVT d\'echappement du banc 2 ne fonctionne pas correctement, l\'ECU peut aussi enregistrer un code de performance du catalyseur banc 2 (P0430) car les gaz d\'echappement n\'ont pas la composition attendue. Des codes de melange air-carburant (P0172, P0175) peuvent aussi apparaitre car le calage des soupapes d\'echappement affecte le remplissage des cylindres. Il est important de diagnostiquer et reparer le P0086 en premier car il peut etre la cause racine des autres codes.'
      },
      {
        question: 'Le diagnostic de ce code necessite-t-il un equipement special?',
        answer: 'Un multimetre standard suffit pour les tests de base (resistance de l\'electrovanne, test d\'isolation, verification de continuite). Cependant, pour un diagnostic complet, une valise diagnostique capable d\'effectuer des tests d\'actionneurs est tres utile. Elle permet d\'envoyer des commandes directement a l\'electrovanne pour verifier sa reponse en temps reel. Certaines valises avancees peuvent aussi afficher les positions commandees et reelles de l\'arbre a cames, ce qui permet de determiner si le probleme est electrique ou mecanique. Le cout d\'un tel diagnostic en garage est generalement de 50 a 100 euros.'
      }
    ],
    relatedCodes: ['P0085', 'P0081', 'P0082', 'P0083', 'P0084']
  },
  P0087: {
    code: 'P0087',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0087 indique une pression trop basse dans le circuit de carburant haute pression, aussi appele rampe commune ou common rail. Ce code est frequemment rencontre sur les moteurs diesel a injection directe mais peut aussi apparaitre sur les moteurs essence a injection directe (GDI/TSI/TFSI). Le systeme d'injection haute pression fonctionne a des pressions de 200 a 2000 bars selon le type de moteur, et l'ECU surveille en permanence cette pression via un capteur dedie sur la rampe. Lorsque la pression mesuree tombe en dessous du seuil minimal requis, l'ECU enregistre le P0087. Ce defaut peut entrainer des demarrages difficiles, des pertes de puissance importantes et meme un calage du moteur. C'est un code a traiter en priorite car il affecte directement la capacite du moteur a fonctionner.",
    symptoms: [
      'Voyant moteur allume avec possible passage en mode degrade',
      'Difficultes importantes au demarrage, moteur qui cale apres quelques secondes',
      'Perte de puissance severe, impossibilite d\'accelerer normalement',
      'A-coups et secousses violentes lors de la conduite',
      'Ralenti tres instable, moteur qui menace de caler en permanence',
      'Fumee noire ou blanche abondante a l\'echappement (diesel)',
      'Bruit de claquement anormal du moteur (injection degradee)'
    ],
    causes: [
      'Pompe haute pression usee ou defaillante (30% des cas)',
      'Regulateur de pression sur la rampe commune bloque ou defectueux (20% des cas)',
      'Filtre a carburant completement colmate (15% des cas)',
      'Injecteurs fuyants qui ne maintiennent pas la pression (12% des cas)',
      'Pompe de gavage (basse pression) defaillante (10% des cas)',
      'Capteur de pression rampe defectueux donnant de fausses lectures (5% des cas)',
      'Fuite dans le circuit de retour carburant (5% des cas)',
      'Cablage ou connecteur du capteur de pression endommage (3% des cas)'
    ],
    solutions: [
      'Verifier et remplacer le filtre a carburant si colmate (20-60 euros)',
      'Tester la pression de la pompe de gavage basse pression (diagnostic 30-60 euros)',
      'Mesurer la pression de rampe reelle avec une valise diagnostique (diagnostic 50-100 euros)',
      'Tester les injecteurs pour detecter un retour de debit excessif (diagnostic 80-150 euros)',
      'Remplacer le regulateur de pression rampe si defectueux (100-300 euros)',
      'Remplacer la pompe haute pression si usee (400-1200 euros selon le modele)',
      'Remplacer le capteur de pression rampe si defectueux (80-200 euros)',
      'Reparer les fuites dans le circuit de retour carburant (50-200 euros)'
    ],
    riskExplanation: "Le P0087 est un code serieux qui peut rendre le vehicule immobilise ou dangereux a conduire. Une pression de carburant insuffisante signifie que les injecteurs ne peuvent pas atomiser correctement le carburant, ce qui entraine une combustion incomplete, des contraintes mecaniques anormales et un risque de casse moteur sur le long terme. De plus, rouler avec ce defaut endommage progressivement la pompe haute pression et les injecteurs, des pieces tres couteuses. Le mode degrade limite fortement la puissance, rendant la conduite sur autoroute dangereuse. Reparation a effectuer sous 1 semaine maximum.",
    faq: [
      {
        question: 'Le P0087 peut-il etre cause simplement par un filtre a carburant bouche?',
        answer: 'Oui, dans environ 15 pourcent des cas, un filtre a carburant completement colmate est la cause du P0087. Le filtre bouche empeche le carburant d\'arriver en quantite suffisante a la pompe haute pression, qui ne peut donc pas atteindre la pression requise. C\'est la premiere chose a verifier car c\'est la reparation la moins couteuse (20-60 euros). Si le filtre n\'a pas ete remplace depuis plus de 40 000 km (diesel) ou 60 000 km (essence), il y a de fortes chances que ce soit la cause. Remplacez-le et effacez le code pour voir s\'il revient.'
      },
      {
        question: 'Combien coute le remplacement d\'une pompe haute pression?',
        answer: 'La pompe haute pression est une des pieces les plus couteuses du systeme d\'injection. Pour un moteur diesel, comptez entre 400 et 1200 euros pour la piece seule selon la marque et le modele. La main d\'oeuvre ajoute 200 a 400 euros pour 2 a 4 heures de travail. Sur certains moteurs essence a injection directe, la pompe haute pression est moins couteuse (200-600 euros). Avant de remplacer la pompe, assurez-vous que c\'est bien elle qui est en cause en eliminant toutes les autres causes possibles (filtre, regulateur, injecteurs, pompe de gavage). Un diagnostic complet avant remplacement peut eviter une erreur couteuse.'
      },
      {
        question: 'Comment tester le retour de debit des injecteurs pour detecter une fuite?',
        answer: 'Le test de retour d\'injecteurs se fait en connectant des eprouvettes graduees sur les tuyaux de retour de chaque injecteur. On fait tourner le moteur au ralenti pendant une duree determinee et on mesure la quantite de carburant qui retourne au reservoir par chaque injecteur. Un injecteur en bon etat ne doit retourner que tres peu de carburant (les specifications exactes varient selon le constructeur). Si un ou plusieurs injecteurs retournent une quantite excessive, ils fuient internement et la pompe haute pression ne peut pas maintenir la pression. Ce test coute 80 a 150 euros au garage et est essentiel pour diagnostiquer un P0087.'
      },
      {
        question: 'Le mode degrade est-il dangereux pour la conduite?',
        answer: 'Le mode degrade lui-meme n\'est pas dangereux car il est concu pour proteger le moteur. Cependant, la limitation de puissance qui l\'accompagne peut etre dangereuse dans certaines situations: depassements impossibles, incapacite a maintenir la vitesse sur autoroute ou en cote, et temps de reaction allonge du moteur. Il est deconseille de conduire longtemps en mode degrade, surtout sur autoroute ou sur des routes ou une acceleration rapide peut etre necessaire pour la securite. Rejoignez le garage le plus proche en roulant prudemment, de preference par des routes secondaires a vitesse moderee.'
      },
      {
        question: 'Peut-on rouler longtemps avec un P0087 sans endommager le moteur?',
        answer: 'Non, il est fortement deconseille de rouler plus de quelques jours avec un P0087. Une pression de carburant insuffisante entraine une pulverisation grossiere du carburant dans les cylindres au lieu d\'une atomisation fine. Cela provoque une combustion incomplete qui genere des contraintes thermiques et mecaniques anormales sur les pistons, les segments et les soupapes. De plus, la pompe haute pression travaille en surcharge pour essayer d\'atteindre la pression requise, ce qui accelere son usure. Les injecteurs peuvent aussi etre endommages par un fonctionnement a pression incorrecte. Limitez la conduite au strict minimum.'
      }
    ],
    relatedCodes: ['P0088', 'P0089', 'P0090', 'P0191', 'P0192']
  },
  P0088: {
    code: 'P0088',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0088 indique une pression trop elevee dans le circuit de carburant haute pression (rampe commune). C'est le code oppose du P0087. L'ECU a detecte que la pression dans la rampe d'injection depasse le seuil maximal autorise, ce qui peut entrainer des dommages aux injecteurs, aux durites haute pression et potentiellement creer un risque d'incendie si une fuite se produit sous haute pression. Ce defaut est frequemment lie a un regulateur de pression defaillant qui ne limite plus correctement la pression, ou a une electrovanne de dosage de carburant (IMV/MPROP) bloquee en position ouverte. Sur les systemes common rail diesel, la pression peut depasser 2000 bars si elle n'est pas correctement regulee, ce qui constitue un danger reel pour l'integrite du systeme d'injection.",
    symptoms: [
      'Voyant moteur allume avec mise en mode degrade immediate',
      'Perte de puissance brutale et limitation de regime',
      'Claquement violent du moteur diesel (surpression dans les cylindres)',
      'Bruit anormal des injecteurs soumis a une pression excessive',
      'Fumee noire a l\'echappement due a la surinjection de carburant',
      'Odeur forte de carburant dans le compartiment moteur',
      'Risque de fuite de carburant sous haute pression (danger d\'incendie)'
    ],
    causes: [
      'Regulateur de pression de rampe bloque en position fermee (30% des cas)',
      'Electrovanne de dosage carburant (IMV/MPROP) bloquee ouverte (25% des cas)',
      'Capteur de pression rampe defectueux lisant une valeur trop haute (15% des cas)',
      'Circuit de retour carburant obstrue empechant la decharge de pression (12% des cas)',
      'Pompe haute pression avec regulation interne defaillante (10% des cas)',
      'Probleme de commande ECU sur le circuit de regulation (5% des cas)',
      'Durite de retour carburant pincee ou bouchee (3% des cas)'
    ],
    solutions: [
      'Verifier la pression reelle de la rampe avec une valise diagnostique (diagnostic 50-100 euros)',
      'Tester et remplacer le regulateur de pression de rampe si defectueux (100-350 euros)',
      'Tester et remplacer l\'electrovanne de dosage IMV/MPROP si bloquee (80-250 euros)',
      'Verifier le circuit de retour carburant pour obstructions (diagnostic 30-60 euros)',
      'Remplacer le capteur de pression rampe si defectueux (80-200 euros)',
      'Inspecter les durites de retour pour pincements ou deformations (gratuit si DIY)',
      'Verifier le fonctionnement de la pompe haute pression (diagnostic 80-150 euros)',
      'Faire un diagnostic complet du circuit haute pression par un specialiste diesel (100-200 euros)'
    ],
    riskExplanation: "Le P0088 est un code a traiter en urgence. Une pression de carburant excessive peut provoquer l'eclatement d'une durite haute pression, creant un jet de carburant sous pression extreme qui represente un risque d'incendie immediat. Les injecteurs soumis a une surpression s'usent prematurement et peuvent se bloquer. La surinjection de carburant peut endommager le catalyseur par surchauffe et diluer l'huile moteur avec du carburant, reduisant la lubrification. En mode degrade, la puissance est tres limitee rendant la conduite potentiellement dangereuse. Reparation a effectuer immediatement, dans la journee si possible.",
    faq: [
      {
        question: 'Le P0088 est-il dangereux pour la securite?',
        answer: 'Oui, le P0088 est potentiellement dangereux. Une surpression dans le circuit de carburant haute pression peut provoquer la rupture d\'une durite ou d\'un raccord, projetant du carburant sous pression extreme (jusqu\'a 2000 bars sur un diesel common rail). Un jet de carburant a cette pression peut traverser la peau humaine et represente un risque d\'incendie majeur dans le compartiment moteur. De plus, la surpression peut endommager les injecteurs et provoquer une injection excessive dans les cylindres, ce qui peut mener a un emballement du moteur dans les cas extremes. Il est imperatif d\'arreter le vehicule rapidement et de faire remorquer jusqu\'au garage.'
      },
      {
        question: 'Qu\'est-ce que l\'electrovanne de dosage IMV/MPROP?',
        answer: 'L\'electrovanne de dosage, appelee IMV (Inlet Metering Valve) ou MPROP selon le constructeur, est un composant monte sur ou pres de la pompe haute pression. Elle controle la quantite de carburant admise dans la pompe haute pression, regulant ainsi indirectement la pression de rampe. Si cette electrovanne se bloque en position ouverte, trop de carburant entre dans la pompe qui genere une pression excessive. C\'est une piece relativement accessible et moins couteuse que la pompe elle-meme (80-250 euros). Son remplacement est souvent la solution la plus simple pour resoudre un P0088.'
      },
      {
        question: 'Comment differencier un probleme de capteur d\'un vrai probleme de pression?',
        answer: 'Pour distinguer un capteur defectueux d\'une vraie surpression, un mecanicien peut utiliser un manometre mecanique de haute pression raccorde directement a la rampe pour comparer la pression reelle avec la valeur lue par le capteur. Si la pression mecanique est normale mais le capteur indique une valeur elevee, c\'est le capteur qui est en cause. Un autre indice est le comportement du moteur: avec une vraie surpression, le moteur claque violemment et fume noir. Avec un faux signal du capteur, le moteur peut fonctionner normalement mais l\'ECU le met en mode degrade par precaution.'
      },
      {
        question: 'Le retour carburant bouche est-il une cause frequente du P0088?',
        answer: 'Le circuit de retour carburant obstrue represente environ 15 pourcent des cas de P0088. Ce circuit permet au carburant en exces de retourner vers le reservoir, contribuant ainsi a la regulation de la pression. Si ce circuit est bouche (durite pincee, filtre de retour colmate, raccord obstrue), la pression ne peut pas se decharger correctement et augmente au-dela des limites. C\'est une cause souvent negligee car les mecaniciens se focalisent sur la pompe et le regulateur. Verifier le circuit de retour est simple et peut eviter un remplacement de pieces couteux.'
      },
      {
        question: 'Puis-je continuer a rouler avec le moteur en mode degrade?',
        answer: 'Pour un P0088, il est deconseille de rouler meme en mode degrade. Le mode degrade tente de limiter la pression mais ne garantit pas qu\'elle restera dans des limites sures. Il est preferable d\'arreter le vehicule des que possible et de le faire remorquer jusqu\'a un garage. Si vous devez absolument bouger le vehicule, roulez le strict minimum a tres basse vitesse et restez attentif a toute odeur de carburant ou signe de fuite dans le compartiment moteur. Ne faites jamais monter le regime moteur en presence d\'un P0088 car cela augmente la pression et le risque de rupture.'
      }
    ],
    relatedCodes: ['P0087', 'P0089', 'P0090', 'P0191', 'P0193']
  },
  P0089: {
    code: 'P0089',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0089 signale un probleme de performance du regulateur de pression de carburant, indiquant que la pression dans le circuit d'injection n'est pas conforme aux valeurs attendues par l'ECU. Ce code est different du P0087 (pression trop basse) et du P0088 (pression trop haute) car il indique une variation ou instabilite de la pression plutot qu'une valeur fixe incorrecte. Le regulateur de pression est un composant critique du systeme d'injection qui maintient la pression a un niveau constant adapte aux besoins du moteur. Quand ce regulateur dysfonctionne, la pression peut osciller de maniere erratique, provoquant des variations de regime, des a-coups et une combustion irreguliere. Ce defaut est present sur les moteurs diesel common rail et les moteurs essence a injection directe.",
    symptoms: [
      'Voyant moteur allume avec possible mode degrade',
      'Variations de regime moteur au ralenti (oscillations)',
      'A-coups en conduite a vitesse stabilisee',
      'Demarrages difficiles, surtout a chaud',
      'Perte de puissance intermittente et imprevisible',
      'Consommation de carburant irreguliere',
      'Calages du moteur en deceleration ou a faible charge'
    ],
    causes: [
      'Regulateur de pression use ou defaillant (35% des cas)',
      'Electrovanne de dosage IMV partiellement colmatee (20% des cas)',
      'Pompe haute pression avec usure interne irreguliere (15% des cas)',
      'Injecteurs avec fuites internes variables selon la temperature (10% des cas)',
      'Capteur de pression rampe intermittent ou bruite (8% des cas)',
      'Air dans le circuit de carburant (prise d\'air) (7% des cas)',
      'Pompe de gavage fournissant un debit irregulier (5% des cas)'
    ],
    solutions: [
      'Effectuer un diagnostic complet du circuit haute pression avec valise (80-150 euros)',
      'Remplacer le regulateur de pression de carburant (100-350 euros)',
      'Nettoyer ou remplacer l\'electrovanne de dosage IMV (80-250 euros)',
      'Purger le circuit de carburant pour eliminer l\'air (30-60 euros)',
      'Tester les injecteurs pour detecter des fuites internes variables (80-150 euros)',
      'Remplacer le capteur de pression rampe si intermittent (80-200 euros)',
      'Verifier la pompe de gavage pour un debit irregulier (diagnostic 50-100 euros)',
      'Remplacer le filtre a carburant et verifier l\'absence de prise d\'air (20-60 euros)'
    ],
    riskExplanation: "Un regulateur de pression defaillant genere des variations de pression qui provoquent une injection de carburant irreguliere. Cela cree des contraintes mecaniques alternees sur les composants du moteur (pistons, bielles, vilebrequin) qui accelerent l'usure. Les injecteurs soumis a des pressions fluctuantes s'usent prematurement. Le catalyseur recoit un flux de gaz d'echappement irregulier qui peut le degrader. De plus, les a-coups et pertes de puissance intermittentes representent un risque pour la securite routiere, notamment lors de depassements. Reparation a effectuer dans la semaine.",
    faq: [
      {
        question: 'Comment l\'ECU detecte-t-il un probleme de performance du regulateur?',
        answer: 'L\'ECU compare en permanence la pression de rampe mesuree par le capteur avec la pression theorique qu\'il a commandee via le regulateur et l\'electrovanne de dosage. Si l\'ecart entre la pression commandee et la pression reelle depasse un seuil pendant une duree determinee, ou si la pression oscille de maniere erratique autour de la valeur cible, l\'ECU enregistre le P0089. Certains calculateurs analysent aussi la vitesse de reaction du regulateur: si la pression met trop de temps a se stabiliser apres un changement de consigne, le code est genere. Les parametres exacts varient selon le constructeur.'
      },
      {
        question: 'L\'air dans le circuit de carburant peut-il causer un P0089?',
        answer: 'Oui, l\'air dans le circuit de carburant est une cause importante du P0089 car il rend la pression instable. L\'air est compressible contrairement au carburant liquide, donc la presence de bulles d\'air dans le circuit cree des fluctuations de pression que le regulateur ne peut pas compenser. Les prises d\'air se situent generalement au niveau des raccords de durites, du filtre a carburant (surtout apres un remplacement mal fait), de la pompe de gavage ou du bouchon du reservoir. Apres remplacement du filtre a carburant ou toute intervention sur le circuit, une purge soigneuse est indispensable pour eviter ce probleme.'
      },
      {
        question: 'Le P0089 est-il plus grave qu\'un P0087 ou P0088?',
        answer: 'En termes de risque immediat, le P0089 est generalement moins grave que le P0088 (surpression dangereuse) mais peut etre plus gene que le P0087. L\'instabilite de pression cause des symptomes desagreables et potentiellement dangereux (a-coups, calages) mais ne represente pas le meme risque de fuite sous pression que le P0088. Cependant, le P0089 est souvent plus complexe a diagnostiquer car il peut avoir de multiples causes simultanees. Le cout final de reparation peut etre similaire ou superieur si le probleme vient de la pompe haute pression ou des injecteurs.'
      },
      {
        question: 'Peut-on resoudre le P0089 en remplacant simplement le filtre a carburant?',
        answer: 'Dans certains cas, oui. Un filtre a carburant partiellement colmate peut causer une alimentation irreguliere de la pompe haute pression, entrainant des fluctuations de pression. Si le filtre n\'a pas ete remplace depuis longtemps (plus de 30-40 000 km sur diesel), c\'est la premiere chose a faire car c\'est peu couteux (20-60 euros) et peut resoudre le probleme. Assurez-vous de bien purger le circuit apres le remplacement pour eviter d\'introduire de l\'air. Si le code persiste apres remplacement du filtre et purge, le probleme vient d\'un autre composant.'
      },
      {
        question: 'Les a-coups du P0089 peuvent-ils endommager la boite de vitesses?',
        answer: 'Les a-coups causes par le P0089 peuvent effectivement solliciter anormalement la transmission, surtout sur les vehicules equipes de boites automatiques ou robotisees. Les variations brusques de couple moteur provoquent des chocs dans la chaine cinematique qui peuvent user prematurement les embrayages, les synchroniseurs et les engrenages. Sur une boite automatique, le convertisseur de couple absorbe une partie de ces chocs mais subit une usure supplementaire. Il est donc important de ne pas conduire de maniere sportive avec un P0089 actif et de limiter les accelerations brusques pour proteger la transmission.'
      }
    ],
    relatedCodes: ['P0087', 'P0088', 'P0090', 'P0191', 'P0192']
  },
  P0090: {
    code: 'P0090',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0090 signale un dysfonctionnement dans le circuit de commande du regulateur de pression de carburant. Ce regulateur, souvent appele electrovanne de regulation de pression ou soupape de decharge, est un composant electronique pilote par l'ECU pour maintenir la pression de la rampe d'injection a la valeur optimale. Le P0090 est declenche lorsque l'ECU detecte une anomalie electrique generale dans ce circuit, ce qui peut inclure un probleme de tension, de courant ou de signal. Sans un regulateur fonctionnel, le systeme d'injection haute pression ne peut pas ajuster correctement la pression de rampe aux besoins du moteur, ce qui affecte directement les performances, la consommation et les emissions. Ce code est commun sur les moteurs diesel common rail et les moteurs essence a injection directe.",
    symptoms: [
      'Voyant moteur allume avec mise en mode degrade possible',
      'Demarrages laborieux necessitant plusieurs tentatives',
      'Perte de puissance importante, surtout en charge',
      'Ralenti tres instable avec risque de calage',
      'Fumee noire abondante a l\'echappement (diesel)',
      'Consommation de carburant tres augmentee',
      'A-coups et secousses lors de la conduite'
    ],
    causes: [
      'Electrovanne de regulation de pression defaillante (35% des cas)',
      'Connecteur electrique corrode ou debranche sur le regulateur (20% des cas)',
      'Cablage endommage entre l\'ECU et le regulateur (15% des cas)',
      'Court-circuit dans le circuit de commande du regulateur (10% des cas)',
      'Probleme d\'alimentation electrique du circuit (8% des cas)',
      'Defaillance du circuit de commande dans l\'ECU (7% des cas)',
      'Regulateur mecaniquement bloque en plus du defaut electrique (5% des cas)'
    ],
    solutions: [
      'Inspecter le connecteur electrique du regulateur de pression (gratuit si DIY)',
      'Tester la resistance de l\'electrovanne de regulation avec multimetre (diagnostic gratuit)',
      'Verifier la continuite du cablage entre l\'ECU et le regulateur (diagnostic 30-60 euros)',
      'Nettoyer les contacts du connecteur avec spray nettoyant (5-10 euros)',
      'Remplacer l\'electrovanne de regulation si defectueuse (100-350 euros)',
      'Reparer le faisceau electrique si endommage (50-200 euros)',
      'Verifier l\'alimentation electrique du circuit (diagnostic 30-50 euros)',
      'Faire un diagnostic complet ECU en dernier recours (100-200 euros)'
    ],
    riskExplanation: "Le P0090 affecte directement la capacite du systeme d'injection a reguler la pression de carburant, ce qui peut entrainer soit une surpression (risque de fuite dangereuse) soit une sous-pression (perte de puissance et calages). Le moteur fonctionne en mode degrade avec des performances tres reduites. Continuer a rouler avec ce defaut pendant des semaines peut endommager la pompe haute pression, les injecteurs et le catalyseur. Le risque pour la securite routiere est reel en raison des pertes de puissance imprevisibles. Reparation a effectuer dans les jours qui suivent l'apparition du code.",
    faq: [
      {
        question: 'Le P0090 est-il lie au regulateur de pression mecanique ou electronique?',
        answer: 'Le P0090 concerne specifiquement le circuit electrique de commande du regulateur, donc il s\'agit du regulateur electronique (electrovanne pilotee par l\'ECU). Les vehicules modernes utilisent des regulateurs electroniques qui permettent un controle precis de la pression en fonction des conditions de conduite. Les anciens regulateurs mecaniques a ressort ne generent pas ce type de code car ils n\'ont pas de circuit electrique. Si votre vehicule affiche un P0090, votre regulateur est necessairement de type electronique, ce qui signifie qu\'il a un connecteur electrique et un cablage vers l\'ECU qui peuvent etre testes.'
      },
      {
        question: 'Comment tester l\'electrovanne de regulation de pression?',
        answer: 'Pour tester l\'electrovanne, debranchez son connecteur et mesurez la resistance aux bornes avec un multimetre en mode ohms. La resistance nominale varie selon le constructeur mais se situe generalement entre 2 et 10 ohms. Une resistance infinie indique un bobinage coupe, une resistance tres basse indique un court-circuit. Vous pouvez aussi appliquer brievement 12V directement aux bornes pour verifier que le piston de l\'electrovanne se deplace (vous devriez entendre un clic). Enfin, verifiez l\'absence de court-circuit a la masse en mesurant entre chaque borne et la carcasse metallique.'
      },
      {
        question: 'Le P0090 peut-il rendre le vehicule completement immobile?',
        answer: 'Oui, dans les cas les plus severes, un P0090 peut empecher le demarrage ou provoquer un calage immediat apres le demarrage. Si le regulateur est bloque et ne permet aucune montee en pression, le moteur ne pourra tout simplement pas fonctionner car les injecteurs ont besoin d\'une pression minimale pour pulveriser le carburant. Dans d\'autres cas, le moteur demarre mais en mode tres degrade avec une puissance tres limitee. Si votre vehicule ne demarre plus du tout apres l\'apparition de ce code, il faut le faire remorquer. Ne tentez pas de demarrer de maniere repetee car cela decharge la batterie et peut endommager le demarreur.'
      },
      {
        question: 'La corrosion du connecteur est-elle une cause frequente du P0090?',
        answer: 'Oui, la corrosion du connecteur est une cause sous-estimee qui represente environ 20 pourcent des cas de P0090. Le regulateur de pression est situe dans le compartiment moteur, souvent dans une zone exposee aux projections d\'eau, d\'huile et de sel de route. Le connecteur peut se corroder progressivement, augmentant la resistance electrique du circuit jusqu\'a ce que l\'ECU detecte un defaut. La solution est simple et peu couteuse: demonter le connecteur, nettoyer les contacts avec un spray nettoyant pour contacts electriques, appliquer de la graisse dielectrique et verifier l\'etancheite du connecteur. Cela resout le probleme dans un cas sur cinq.'
      },
      {
        question: 'Faut-il recalibrer le systeme apres le remplacement du regulateur?',
        answer: 'Sur la plupart des vehicules, le remplacement du regulateur de pression ne necessite pas de recalibration specifique. L\'ECU s\'adapte automatiquement au nouveau composant apres quelques cycles de conduite. Cependant, sur certains vehicules (notamment certains modeles BMW, Mercedes et Audi), une procedure d\'apprentissage ou de reinitialisation peut etre necessaire via la valise diagnostique du constructeur. Apres le remplacement, effacez les codes defaut, faites tourner le moteur au ralenti pendant 5 a 10 minutes, puis effectuez un essai routier de 20 a 30 km pour permettre a l\'ECU de recalibrer ses parametres d\'injection.'
      }
    ],
    relatedCodes: ['P0087', 'P0088', 'P0089', 'P0091', 'P0092']
  },
  P0091: {
    code: 'P0091',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0091 indique une tension trop basse dans le circuit de commande du regulateur de pression de carburant. Ce code est une variante plus specifique du P0090, pointant vers un probleme electrique precis: la tension mesuree dans le circuit est inferieure au seuil minimal requis pour commander correctement le regulateur. Le regulateur de pression ne peut plus ouvrir ou fermer correctement pour ajuster la pression de rampe, ce qui affecte directement le fonctionnement du systeme d'injection. Les causes typiques incluent un court-circuit a la masse, un fil coupe dans le faisceau, un connecteur defaillant ou une defaillance interne de l'electrovanne. Ce code necessite un diagnostic electrique precis pour identifier la source du probleme.",
    symptoms: [
      'Voyant moteur allume avec mode degrade actif',
      'Demarrage tres difficile ou impossible',
      'Perte de puissance severe en mode degrade',
      'Ralenti tres instable pouvant mener au calage',
      'Fumee excessive a l\'echappement',
      'Consommation de carburant anormalement elevee',
      'A-coups violents lors des accelerations'
    ],
    causes: [
      'Court-circuit a la masse dans le cablage du regulateur (30% des cas)',
      'Electrovanne de regulation en court-circuit interne (25% des cas)',
      'Fil coupe ou dessoude dans le faisceau electrique (15% des cas)',
      'Connecteur endommage ou corrode (15% des cas)',
      'Masse defectueuse sur le circuit de commande (8% des cas)',
      'Defaillance du transistor de commande dans l\'ECU (5% des cas)',
      'Interference electromagnetique perturbant le signal (2% des cas)'
    ],
    solutions: [
      'Mesurer la resistance du regulateur avec multimetre (2-10 ohms normal, diagnostic gratuit)',
      'Tester l\'isolation du cablage pour detecter un court-circuit a la masse (diagnostic 30-60 euros)',
      'Inspecter visuellement le cablage pour fils coupes ou abrases (gratuit)',
      'Nettoyer ou remplacer le connecteur du regulateur (10-30 euros)',
      'Remplacer le regulateur de pression si court-circuit interne (100-350 euros)',
      'Reparer ou remplacer la section de faisceau endommagee (50-200 euros)',
      'Verifier et nettoyer les points de masse du circuit (gratuit si DIY)',
      'Diagnostiquer le circuit de sortie de l\'ECU (100-200 euros)'
    ],
    riskExplanation: "Un P0091 empeche le controle correct de la pression de carburant, ce qui peut causer soit une pression non regulee (risque de dommages aux composants) soit une absence de pression (impossibilite de rouler). Le risque d'endommager la pompe haute pression et les injecteurs est reel si le regulateur ne fonctionne plus. De plus, une pression non maitrisee peut provoquer des fuites de carburant sous haute pression, representant un danger d'incendie. Le mode degrade limite fortement les capacites du vehicule. Reparation urgente recommandee, idealement dans les 48 heures.",
    faq: [
      {
        question: 'Un P0091 peut-il empecher completement le demarrage du moteur?',
        answer: 'Oui, dans certains cas un P0091 peut empecher le demarrage. Si le regulateur de pression ne recoit aucune commande electrique en raison du circuit en court-circuit, il reste dans sa position par defaut. Selon la conception du regulateur, cette position par defaut peut soit laisser passer tout le carburant (pas de montee en pression), soit bloquer completement le carburant (surpression). Dans le premier cas, la pression de rampe n\'atteint jamais le seuil minimal pour l\'injection et le moteur ne demarre pas. Certains ECU refusent aussi tout demarrage quand ce code critique est detecte pour proteger le systeme d\'injection.'
      },
      {
        question: 'Comment localiser un court-circuit a la masse dans le cablage?',
        answer: 'Pour localiser un court-circuit a la masse, debranchez le connecteur du regulateur et celui de l\'ECU. Avec le multimetre en mode continuite, mesurez entre chaque fil du circuit et la masse du vehicule. Si vous obtenez une continuite (bip ou faible resistance), il y a un court-circuit sur ce fil. Pour localiser l\'emplacement exact, inspectez visuellement le faisceau en cherchant des zones ou l\'isolant est abrase, fondu ou coupe. Les endroits les plus frequents sont les passages a travers la carrosserie, les zones proches de pieces chaudes du moteur, et les endroits ou le faisceau frotte contre des elements metalliques.'
      },
      {
        question: 'Le P0091 est-il toujours un probleme electrique?',
        answer: 'Oui, le P0091 est specifiquement un code electrique indiquant une tension trop basse dans le circuit. Cependant, la cause sous-jacente peut avoir une origine mecanique: par exemple, une electrovanne dont le bobinage a ete endommage par une surchauffe due a un blocage mecanique du piston. Dans ce cas, le blocage mecanique a provoque une surintensité qui a fait fondre partiellement le bobinage, creant un court-circuit. La reparation necessite donc de traiter a la fois le probleme electrique (remplacement de l\'electrovanne) et la cause mecanique (nettoyage des canaux hydrauliques).'
      },
      {
        question: 'Peut-on rouler jusqu\'au garage avec un P0091?',
        answer: 'Si le moteur demarre et fonctionne en mode degrade, vous pouvez rouler tres prudemment jusqu\'au garage le plus proche, a condition que ce ne soit pas trop loin (moins de 10-15 km). Roulez a vitesse moderee, evitez les accelerations et restez vigilant a toute odeur de carburant ou fumee anormale. Si le moteur ne demarre pas ou cale immediatement, ne forcez pas et faites remorquer le vehicule. Le remorquage coute 80 a 150 euros, ce qui est bien moins cher que les dommages potentiels d\'un systeme d\'injection haute pression non regule.'
      },
      {
        question: 'Combien coute le diagnostic et la reparation d\'un P0091?',
        answer: 'Le diagnostic electrique complet coute entre 50 et 150 euros selon le garage. Si le probleme est un simple connecteur corrode ou un fil abrase, la reparation coute entre 30 et 100 euros. Si l\'electrovanne de regulation doit etre remplacee, comptez 100 a 350 euros pour la piece plus 50 a 150 euros de main d\'oeuvre. Si le faisceau electrique necessite une reparation importante, le cout peut atteindre 200 a 400 euros. Dans le pire des cas (defaillance ECU), la reparation peut couter 500 a 1500 euros. Commencez toujours par les verifications simples et peu couteuses avant d\'envisager le remplacement de pieces.'
      }
    ],
    relatedCodes: ['P0090', 'P0092', 'P0087', 'P0088', 'P0089']
  },
  P0092: {
    code: 'P0092',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0092 indique une tension trop elevee dans le circuit de commande du regulateur de pression de carburant. Ce code est le pendant du P0091 (tension basse) et signale que la tension dans le circuit depasse le seuil maximal autorise. Cela peut etre cause par un court-circuit vers le positif de la batterie, une resistance trop elevee dans le circuit, ou un probleme de retour a la masse. Le regulateur de pression ne recoit pas les commandes correctes de l'ECU, ce qui entraine une regulation incorrecte de la pression de rampe d'injection. Les consequences sur le fonctionnement du moteur sont significatives car la pression de carburant n'est plus controlee avec precision. Ce code necessite une intervention rapide pour eviter des dommages au systeme d'injection haute pression.",
    symptoms: [
      'Voyant moteur allume avec passage en mode degrade',
      'Demarrage difficile ou ralenti instable',
      'Perte de puissance importante en mode degrade',
      'A-coups et secousses du moteur',
      'Fumee anormale a l\'echappement (noire ou blanche)',
      'Consommation de carburant tres augmentee',
      'Bruits anormaux du systeme d\'injection'
    ],
    causes: [
      'Court-circuit vers le positif dans le cablage du regulateur (28% des cas)',
      'Electrovanne de regulation avec resistance interne trop elevee (25% des cas)',
      'Probleme de retour a la masse dans le circuit (18% des cas)',
      'Connecteur avec contact defaillant creant une haute resistance (12% des cas)',
      'Fil endommage avec gaine fondue touchant un conducteur positif (8% des cas)',
      'Tension d\'alimentation excessive due a un probleme de charge (5% des cas)',
      'Defaillance du circuit de commande ECU (4% des cas)'
    ],
    solutions: [
      'Verifier le cablage pour detecter un court-circuit vers le positif (gratuit si DIY)',
      'Mesurer la resistance du regulateur avec multimetre (diagnostic gratuit)',
      'Tester le circuit de retour a la masse (diagnostic 30-50 euros)',
      'Inspecter le connecteur pour contacts oxydés ou haute resistance (10-30 euros)',
      'Remplacer le regulateur si resistance interne hors specification (100-350 euros)',
      'Reparer le faisceau electrique si court-circuit identifie (50-200 euros)',
      'Verifier la tension de charge de l\'alternateur (diagnostic 20-40 euros)',
      'Diagnostiquer le circuit de commande ECU (100-200 euros)'
    ],
    riskExplanation: "Un P0092 peut causer une regulation incorrecte de la pression de carburant avec des consequences graves. Une tension elevee peut provoquer une commande erronee du regulateur, entrainant soit une surpression dangereuse soit une sous-pression. Le risque de surchauffe du cablage et de dommages a l'ECU est plus prononce avec ce code qu'avec le P0091. Les composants du systeme d'injection (pompe, injecteurs, durites) peuvent etre endommages par une pression mal regulee. Le mode degrade limite les performances a un minimum securitaire. Reparation a effectuer dans les 48 heures.",
    faq: [
      {
        question: 'Un probleme d\'alternateur peut-il causer un P0092?',
        answer: 'Oui, dans de rares cas (environ 5 pourcent), un alternateur defaillant qui surtension peut causer un P0092. Si l\'alternateur fournit une tension superieure a 15V au lieu des 14V normaux, tous les circuits electriques du vehicule sont alimentes avec une tension excessive. Le circuit du regulateur de pression est concu pour fonctionner dans une plage de tension precise, et une surcharge peut declencher le code. Verifiez la tension aux bornes de la batterie moteur tournant: elle doit etre entre 13,5V et 14,5V. Au-dela de 15V, le regulateur de tension de l\'alternateur est probablement defaillant.'
      },
      {
        question: 'Comment distinguer un P0092 d\'un P0091 en termes de gravite?',
        answer: 'Les deux codes ont une gravite similaire car ils empechent tous deux la regulation correcte de la pression de carburant. Cependant, le P0092 (tension haute) presente un risque supplementaire de surchauffe du cablage et de dommages electriques a l\'ECU. Un court-circuit vers le positif fait circuler un courant excessif qui peut fondre l\'isolant des fils et endommager les composants electroniques. Le P0091 (tension basse) est plus souvent associe a une absence de commande du regulateur plutot qu\'a un risque de dommage electrique. Dans les deux cas, une reparation rapide est necessaire.'
      },
      {
        question: 'Le remplacement du regulateur necessite-t-il une vidange du circuit de carburant?',
        answer: 'Le remplacement du regulateur de pression implique de deconnecter une partie du circuit de carburant haute pression, ce qui provoque une perte de pression et un ecoulement de carburant. Il ne s\'agit pas d\'une vidange complete mais d\'une depressurisation du circuit. Des precautions sont necessaires: coupez le contact, attendez quelques minutes pour que la pression descende naturellement, et placez des chiffons absorbants sous la zone de travail. Apres le remplacement, le circuit devra etre purge de l\'air avant le demarrage. Sur les diesels, cela peut necessiter plusieurs tentatives de demarrage ou une purge assistee par valise diagnostique.'
      },
      {
        question: 'Peut-on tester le circuit de commande sans valise diagnostique?',
        answer: 'Oui, les tests de base peuvent etre effectues avec un simple multimetre. Mesurez la resistance de l\'electrovanne (2-10 ohms normal), verifiez l\'absence de court-circuit vers la masse et vers le positif, et testez la continuite des fils. Pour un diagnostic plus pousse, une valise diagnostique permet d\'observer la commande envoyee par l\'ECU en temps reel et de verifier si la tension mesuree correspond a la consigne. Certaines valises permettent aussi d\'actionner manuellement le regulateur pour tester sa reponse. Ce diagnostic avance est recommande si les tests basiques au multimetre ne revelent pas de defaut evident.'
      },
      {
        question: 'Le P0092 est-il courant apres une reparation du circuit de carburant?',
        answer: 'Oui, le P0092 peut apparaitre apres une intervention sur le circuit de carburant si le connecteur du regulateur n\'a pas ete correctement rebranche, si un fil a ete pince lors du remontage, ou si de la graisse ou du carburant a contamine le connecteur. Apres toute reparation impliquant le demontage d\'elements proches du regulateur, verifiez systematiquement le bon branchement du connecteur et l\'etat des fils. Un connecteur mal clippe peut creer un faux contact a haute resistance qui genere le P0092. En cas de doute, debranchez et rebranchez le connecteur en appliquant de la graisse dielectrique sur les contacts.'
      }
    ],
    relatedCodes: ['P0090', 'P0091', 'P0087', 'P0088', 'P0089']
  },
  P0093: {
    code: 'P0093',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0093 signale une fuite importante detectee dans le circuit de carburant haute pression. L'ECU a detecte que malgre le fonctionnement normal de la pompe haute pression et du regulateur, la pression de rampe ne se maintient pas au niveau requis, ce qui indique une fuite significative de carburant quelque part dans le circuit. Cette fuite peut se situer au niveau des injecteurs (retour de debit excessif), des raccords haute pression, de la rampe elle-meme ou des durites haute pression. Ce code est particulierement serieux sur les moteurs diesel common rail ou la pression peut atteindre 2000 bars, car une fuite a cette pression represente un danger immediat. Le carburant qui s'echappe peut provoquer un incendie et la pression reduite empeche une injection correcte.",
    symptoms: [
      'Voyant moteur allume avec passage immediat en mode degrade',
      'Odeur forte de carburant dans le compartiment moteur et l\'habitacle',
      'Demarrage tres difficile ou impossible',
      'Perte de puissance massive rendant le vehicule quasi inutilisable',
      'Fumee anormale a l\'echappement ou sous le capot',
      'Consommation de carburant excessivement elevee',
      'Calages frequents du moteur, surtout au ralenti'
    ],
    causes: [
      'Injecteurs avec retour de debit excessif (fuite interne) (30% des cas)',
      'Joint de raccord haute pression defectueux (20% des cas)',
      'Durite haute pression fissuree ou mal serree (15% des cas)',
      'Joint de rampe d\'injection deteriore (12% des cas)',
      'Pompe haute pression avec fuite interne (10% des cas)',
      'Regulateur de pression avec fuite au niveau du joint (8% des cas)',
      'Fissure dans la rampe d\'injection (rare mais grave) (5% des cas)'
    ],
    solutions: [
      'Inspecter visuellement tout le circuit haute pression pour traces de fuite (gratuit)',
      'Tester le retour de debit des injecteurs avec eprouvettes graduees (diagnostic 80-150 euros)',
      'Verifier le serrage de tous les raccords haute pression (gratuit si DIY)',
      'Remplacer les joints des raccords haute pression (20-80 euros)',
      'Remplacer les injecteurs defectueux si retour de debit excessif (200-500 euros par injecteur)',
      'Remplacer la durite haute pression fissuree (50-200 euros)',
      'Remplacer le joint de rampe si defectueux (30-80 euros)',
      'Faire un diagnostic complet du circuit haute pression par un specialiste (100-200 euros)'
    ],
    riskExplanation: "Le P0093 est un code d'urgence a traiter immediatement. Une fuite de carburant haute pression represente un risque d'incendie majeur car le carburant peut etre projete sous forme de brouillard finement atomise qui s'enflamme tres facilement au contact de surfaces chaudes du moteur. De plus, un jet de carburant a haute pression (jusqu'a 2000 bars) peut penetrer la peau et causer des blessures graves. Ne tentez jamais de localiser une fuite moteur tournant. Le fonctionnement du moteur avec une pression insuffisante endommage rapidement les injecteurs et la pompe haute pression. Arretez le vehicule immediatement.",
    faq: [
      {
        question: 'Un jet de carburant haute pression est-il vraiment dangereux pour la peau?',
        answer: 'Oui, extremement dangereux. A des pressions de 1000 a 2000 bars, un jet de carburant peut penetrer la peau et injecter du carburant dans les tissus sous-cutanes, provoquant une blessure grave appelee injection sous-cutanee. Cette blessure necessite une intervention chirurgicale d\'urgence pour retirer le carburant des tissus et eviter une necrose. Ne tentez jamais de chercher une fuite avec les mains sur un circuit haute pression moteur tournant. Meme un filet de carburant apparemment inoffensif peut etre sous une pression enorme. Arretez toujours le moteur avant toute inspection.'
      },
      {
        question: 'Comment tester le retour de debit des injecteurs?',
        answer: 'Le test de retour de debit consiste a deconnecter les tuyaux de retour de chaque injecteur et a les raccorder a des eprouvettes graduees individuelles. On fait ensuite tourner le moteur au ralenti pendant un temps determine (generalement 30 secondes a 1 minute) et on mesure la quantite de carburant retournee par chaque injecteur. Les specifications exactes varient selon le constructeur, mais en general, un injecteur ne doit pas retourner plus de 50 a 80 ml par minute. Si un injecteur retourne significativement plus que les autres, il fuit internement et doit etre remplace ou reconditionne.'
      },
      {
        question: 'Peut-on reparer un injecteur qui fuit ou faut-il le remplacer?',
        answer: 'Les injecteurs diesel common rail peuvent souvent etre reconditionnes par un specialiste plutot que remplaces. Le reconditionnement consiste a demonter l\'injecteur, nettoyer tous les composants aux ultrasons, remplacer les pieces d\'usure internes (aiguille, ressort, joints) et retester sur un banc d\'essai. Le cout du reconditionnement est de 100 a 200 euros par injecteur contre 250 a 500 euros pour un injecteur neuf. Le reconditionnement est une bonne option si l\'injecteur n\'est pas trop endommage. Pour les injecteurs essence a injection directe, le reconditionnement est moins courant et le remplacement est souvent preferable.'
      },
      {
        question: 'Le P0093 peut-il etre cause par un simple joint de raccord?',
        answer: 'Oui, et c\'est une cause relativement frequente (environ 20 pourcent des cas). Les joints des raccords haute pression sont soumis a des pressions enormes et des vibrations constantes. Avec le temps et le kilometrage, ces joints peuvent se deteriorer et laisser fuir du carburant. Le remplacement de ces joints est la reparation la moins couteuse pour un P0093 (20-80 euros pour un jeu de joints). Lors de toute intervention sur le circuit haute pression, il est recommande de remplacer systematiquement tous les joints, meme ceux qui semblent encore bons, car le demontage-remontage peut les endommager.'
      },
      {
        question: 'Dois-je faire remorquer le vehicule ou puis-je rouler jusqu\'au garage?',
        answer: 'Pour un P0093, le remorquage est fortement recommande. Si vous constatez une odeur de carburant ou des traces de fuite visibles, arretez-vous immediatement et faites remorquer. Le risque d\'incendie est reel et les dommages potentiels au moteur sont importants. Si le moteur fonctionne encore en mode degrade sans odeur de carburant evidente (ce qui peut arriver si la fuite est interne aux injecteurs), vous pouvez rouler tres prudemment sur une courte distance vers le garage le plus proche. Mais dans le doute, le remorquage est toujours l\'option la plus sure. Son cout (80-150 euros) est negligeable compare aux risques.'
      }
    ],
    relatedCodes: ['P0087', 'P0088', 'P0089', 'P0094', 'P0091']
  },
  P0094: {
    code: 'P0094',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0094 signale une petite fuite detectee dans le circuit de carburant haute pression. Ce code est similaire au P0093 mais indique une fuite de moindre importance qui n'empeche pas immediatement le fonctionnement du moteur mais qui reduit progressivement les performances. L'ECU detecte cette fuite en observant que la pompe haute pression doit travailler plus fort que prevu pour maintenir la pression de rampe, ou que la pression chute lentement entre les injections. Bien que moins urgent que le P0093, ce code ne doit pas etre ignore car une petite fuite peut s'aggraver avec le temps et devenir une fuite majeure. Le carburant qui s'echappe represente toujours un risque d'incendie et une perte financiere en carburant gaspille.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Legere perte de puissance perceptible en charge',
      'Demarrage un peu plus long que d\'habitude',
      'Consommation de carburant en hausse de 5 a 15 pourcent',
      'Ralenti legerement irregulier',
      'Odeur discrete de carburant possible sous le capot',
      'Performances degradees par temps froid (la fuite est aggravee)'
    ],
    causes: [
      'Injecteurs avec leger retour de debit excessif (30% des cas)',
      'Joint de raccord haute pression legerement deteriore (25% des cas)',
      'Micro-fissure dans une durite haute pression (15% des cas)',
      'Regulateur de pression avec joint legerement use (12% des cas)',
      'Pompe haute pression avec usure interne debutante (10% des cas)',
      'Joint de siège d\'injecteur ne garantissant plus l\'etancheite parfaite (5% des cas)',
      'Capteur de pression rampe avec derive de mesure (3% des cas)'
    ],
    solutions: [
      'Effectuer une inspection visuelle complete du circuit haute pression (gratuit)',
      'Tester le retour de debit de chaque injecteur (diagnostic 80-150 euros)',
      'Verifier le serrage de tous les raccords haute pression (gratuit si DIY)',
      'Remplacer les joints des raccords suspects (20-80 euros le jeu)',
      'Remplacer les joints de siege d\'injecteur si usure detectee (10-30 euros par joint)',
      'Remplacer les injecteurs avec retour de debit excessif ou les faire reconditionner (150-500 euros par injecteur)',
      'Surveiller l\'evolution de la pression de rampe avec valise diagnostique (50-100 euros)',
      'Remplacer le capteur de pression si derive confirmee (80-200 euros)'
    ],
    riskExplanation: "Bien que moins critique que le P0093, le P0094 signale une fuite qui va inevitablement s'aggraver avec le temps. La petite fuite augmente progressivement la charge de travail de la pompe haute pression, accelerant son usure. Le carburant qui fuit, meme en petite quantite, represente un risque d'incendie si il atteint une surface chaude du moteur. La surconsommation generee augmente les couts d'exploitation. Si le defaut n'est pas traite, il evoluera vers un P0093 (fuite importante) avec des consequences plus graves. Reparation recommandee sous 1 a 2 semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre un P0093 et un P0094?',
        answer: 'Le P0093 indique une fuite importante ou majeure qui affecte significativement le fonctionnement du moteur et necessite un arret immediat. Le P0094 indique une fuite mineure qui reduit legerement les performances mais permet de continuer a rouler. La distinction est faite par l\'ECU en mesurant l\'ecart entre la pression commandee et la pression reelle: un ecart important genere un P0093, un ecart plus faible genere un P0094. Attention cependant: un P0094 peut evoluer en P0093 si la fuite s\'aggrave, donc il ne faut pas l\'ignorer.'
      },
      {
        question: 'La fuite peut-elle s\'aggraver soudainement?',
        answer: 'Oui, une petite fuite peut s\'aggraver brusquement, surtout si elle est causee par une micro-fissure dans une durite ou un joint use. Les variations de pression (accelerations, demarrages a froid) sollicitent ces zones fragilisees et peuvent provoquer une rupture soudaine. Les vibrations du moteur peuvent aussi agrandir progressivement une micro-fissure. C\'est pourquoi il ne faut pas considerer un P0094 comme anodin: ce qui est aujourd\'hui une petite fuite peut devenir demain une fuite majeure avec risque d\'incendie. Traitez ce code dans un delai raisonnable (1-2 semaines).'
      },
      {
        question: 'Peut-on detecter visuellement une petite fuite haute pression?',
        answer: 'Les petites fuites haute pression ne sont pas toujours visibles sous forme de gouttes. A haute pression, le carburant peut s\'echapper sous forme de brouillard tres fin ou de suintement qui s\'evapore rapidement en raison de la chaleur du moteur. Les indices visuels incluent: des traces de proprete inhabituelle sur certaines zones (le carburant qui fuit lave la salete), des zones humides sans raison apparente, ou des depots de couleur jaune-brun autour des raccords. L\'utilisation d\'un papier absorbant place sous les raccords suspects pendant quelques heures moteur eteint peut aussi reveler des suintements.'
      },
      {
        question: 'Les joints de siege d\'injecteur doivent-ils etre remplaces regulierement?',
        answer: 'Les joints de siege d\'injecteur (aussi appeles rondelles d\'etancheite ou bagues de feu) doivent etre remplaces a chaque demontage d\'un injecteur. Ces joints en cuivre ou en acier doux s\'ecrasent lors du serrage pour assurer l\'etancheite et ne peuvent pas etre reutilises. Lors d\'un entretien preventif, certains constructeurs recommandent de les remplacer tous les 100 000 a 150 000 km. Le cout est minime (2-5 euros par joint) mais leur defaillance peut causer des fuites de compression et des fuites de carburant. C\'est une piece souvent negligee lors des entretiens courants.'
      },
      {
        question: 'Le P0094 affecte-t-il les performances en hiver?',
        answer: 'Oui, les symptomes du P0094 sont generalement plus prononces en hiver. A basse temperature, le carburant diesel est plus visqueux et la pompe haute pression doit travailler plus dur pour atteindre la pression requise. Une fuite, meme petite, est plus difficile a compenser dans ces conditions. De plus, les joints et durites sont moins souples a froid, ce qui peut agrandir temporairement les zones de fuite. Le demarrage a froid est particulierement affecte car la pression doit monter rapidement pour permettre l\'injection. Si votre P0094 n\'est pas encore repare a l\'approche de l\'hiver, anticipez la reparation.'
      }
    ],
    relatedCodes: ['P0093', 'P0087', 'P0088', 'P0089', 'P0091']
  },
  P0095: {
    code: 'P0095',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0095 signale un dysfonctionnement du circuit du capteur de temperature d'air d'admission numero 2 (IAT2 - Intake Air Temperature sensor 2). Ce capteur mesure la temperature de l'air qui entre dans le collecteur d'admission, permettant a l'ECU d'ajuster le dosage du carburant et le calage de l'allumage en fonction de la densite de l'air. Un air plus chaud est moins dense et necessite moins de carburant, tandis qu'un air froid est plus dense et permet plus de puissance. Le capteur IAT2 est present sur les vehicules equipes de systemes d'admission a double capteur ou de systemes de suralimentation. L'ECU a detecte un signal anormal provenant de ce capteur, que ce soit une tension hors plage, un signal erratique ou une absence totale de signal.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Consommation de carburant legerement augmentee (3-5%)',
      'Performances legerement reduites, surtout par temps froid ou chaud',
      'Ralenti peut-etre legerement irregulier',
      'Calage de l\'allumage non optimal (legere perte de rendement)',
      'Possible suralimentation incorrecte sur les moteurs turbo',
      'Fumee legerement plus sombre a l\'echappement dans certaines conditions'
    ],
    causes: [
      'Capteur IAT2 defectueux (thermistance hors specification) (35% des cas)',
      'Connecteur du capteur oxyde ou corrode (20% des cas)',
      'Cablage endommage entre le capteur et l\'ECU (15% des cas)',
      'Court-circuit ou circuit ouvert dans le cablage (12% des cas)',
      'Capteur mal positionne apres un entretien (8% des cas)',
      'Probleme d\'alimentation de reference 5V du capteur (5% des cas)',
      'Defaillance du circuit de lecture dans l\'ECU (5% des cas)'
    ],
    solutions: [
      'Inspecter le connecteur du capteur IAT2 et nettoyer les contacts (gratuit si DIY)',
      'Tester le capteur avec multimetre: resistance variable selon temperature (2-5 kohms a 20 degres)',
      'Verifier la tension d\'alimentation de reference (5V moteur au contact)',
      'Remplacer le capteur IAT2 si la resistance est hors specification (15-60 euros)',
      'Reparer le cablage si un fil est coupe ou endommage (30-100 euros)',
      'Verifier que le capteur est correctement positionne dans le collecteur d\'admission',
      'Nettoyer le connecteur avec spray nettoyant contact electrique (5-10 euros)'
    ],
    riskExplanation: "Le P0095 est un code mineur qui n'affecte pas significativement le fonctionnement du moteur. L'ECU utilisera une valeur par defaut pour la temperature d'air si le capteur est defaillant, ce qui entraine une legere perte de rendement mais rien de grave. La consommation peut augmenter de quelques pourcents et les performances peuvent etre legerement reduites. Il n'y a pas de risque de dommage mecanique. Cependant, le voyant moteur reste allume, ce qui masque d'eventuels autres codes defaut plus graves. Reparation recommandee lors du prochain entretien.",
    faq: [
      {
        question: 'Pourquoi mon vehicule a-t-il deux capteurs de temperature d\'air d\'admission?',
        answer: 'Les vehicules equipes de turbocompresseurs ou de compresseurs ont souvent un capteur de temperature d\'air avant le systeme de suralimentation (IAT1) et un apres l\'echangeur (intercooler) (IAT2). Le premier mesure la temperature ambiante de l\'air d\'admission et le second mesure la temperature apres compression et refroidissement. L\'ECU utilise ces deux mesures pour optimiser la suralimentation, ajuster l\'injection et proteger le moteur contre les temperatures d\'air excessives. Sur certains vehicules naturellement aspires, le second capteur peut servir de redondance ou etre place a un endroit different du circuit d\'admission.'
      },
      {
        question: 'Comment tester un capteur IAT avec un multimetre?',
        answer: 'Le capteur IAT est une thermistance NTC dont la resistance diminue avec la temperature. Pour le tester, debranchez le connecteur et mesurez la resistance aux bornes du capteur avec un multimetre. A 20 degres Celsius, la resistance doit etre d\'environ 2 a 5 kohms (selon le constructeur). A 0 degres, elle est plus elevee (7-10 kohms) et a 80 degres elle est plus basse (200-500 ohms). Comparez vos mesures avec les specifications du constructeur. Si la resistance est tres differente de la temperature ambiante reelle, le capteur est defectueux. Une resistance infinie ou nulle indique un capteur en circuit ouvert ou en court-circuit.'
      },
      {
        question: 'Le P0095 peut-il affecter les performances de mon turbo?',
        answer: 'Oui, sur un moteur turbocompresse, le capteur IAT2 fournit une information cruciale pour le controle de la suralimentation. Si le capteur indique une temperature trop basse (en raison d\'un defaut), l\'ECU peut autoriser une pression de suralimentation trop elevee, ce qui pourrait a terme endommager le moteur. Si le capteur indique une temperature trop haute, l\'ECU reduira la pression de suralimentation par securite, diminuant les performances. Avec la valeur par defaut utilisee en cas de defaut, les performances seront moderement affectees mais le moteur reste protege.'
      },
      {
        question: 'Le remplacement du capteur IAT2 est-il une operation difficile?',
        answer: 'Non, le remplacement du capteur IAT2 est generalement tres simple. Le capteur est visse ou clippe dans le collecteur d\'admission ou dans la durite d\'air entre l\'intercooler et le collecteur. L\'operation consiste a debrancher le connecteur, devisser ou declipser l\'ancien capteur, installer le nouveau avec son joint et rebrancher le connecteur. Le tout prend 10 a 30 minutes. La difficulte principale est parfois l\'accessibilite du capteur dans le compartiment moteur. Le cout de la piece est faible (15-60 euros) et la main d\'oeuvre est minime.'
      },
      {
        question: 'Dois-je remplacer le capteur immediatement ou puis-je attendre?',
        answer: 'Le P0095 n\'est pas un code urgent. Vous pouvez tout a fait continuer a rouler sans risque pour le moteur. L\'ECU utilise une valeur par defaut qui permet un fonctionnement normal, juste pas optimal. La legere surconsommation generee (3-5 pourcent) est le seul cout reel de ne pas reparer immediatement. Cependant, le voyant moteur allume masque tout nouveau code defaut qui pourrait apparaitre, ce qui est un inconvenient pour la surveillance de votre vehicule. Prevoyez le remplacement lors du prochain entretien ou dans les 2-3 mois.'
      }
    ],
    relatedCodes: ['P0096', 'P0097', 'P0098', 'P0110', 'P0113']
  },
  P0096: {
    code: 'P0096',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0096 indique un probleme de plage ou de performance du capteur de temperature d'air d'admission numero 2 (IAT2). Contrairement au P0095 qui signale un defaut electrique general du circuit, le P0096 indique que le capteur fonctionne electriquement mais que ses valeurs sont hors de la plage attendue ou ne correspondent pas logiquement aux autres mesures du moteur. Par exemple, le capteur peut indiquer une temperature de -40 degres par une journee d'ete, ou une temperature qui ne change pas du tout malgre le rechauffement du moteur. L'ECU compare la valeur du IAT2 avec d'autres capteurs (temperature du liquide de refroidissement, IAT1, temperature ambiante) et detecte une incoherence. Ce code oriente vers un capteur qui derive ou un probleme de positionnement.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Consommation de carburant legerement augmentee',
      'Performances reduites dans certaines conditions de temperature',
      'Ralenti stable mais dosage de carburant potentiellement non optimal',
      'Suralimentation peut-etre incorrecte sur moteur turbo',
      'Legere perte de reactivite du moteur',
      'Aucun symptome perceptible dans certains cas'
    ],
    causes: [
      'Capteur IAT2 avec derive de mesure (thermistance vieillissante) (35% des cas)',
      'Capteur mal positionne ou mal installe apres un entretien (20% des cas)',
      'Capteur contamine par de l\'huile ou des residus (15% des cas)',
      'Probleme de reference de tension 5V partagee avec d\'autres capteurs (10% des cas)',
      'Fuite d\'air dans le circuit d\'admission faussant la temperature (8% des cas)',
      'Intercooler bouche ou deficient ne refroidissant pas l\'air correctement (7% des cas)',
      'Connecteur avec haute resistance modifiant la lecture du capteur (5% des cas)'
    ],
    solutions: [
      'Comparer la lecture du capteur IAT2 avec un thermometre de reference (diagnostic gratuit)',
      'Verifier le positionnement correct du capteur dans le collecteur d\'admission (gratuit)',
      'Nettoyer le capteur si contamine par de l\'huile ou des residus (gratuit si DIY)',
      'Tester la resistance du capteur et comparer avec les specifications constructeur',
      'Remplacer le capteur IAT2 si ses valeurs sont incorrectes (15-60 euros)',
      'Verifier l\'absence de fuite d\'air dans le circuit d\'admission (diagnostic 30-60 euros)',
      'Controler le fonctionnement de l\'intercooler sur moteur turbo (diagnostic 50-100 euros)',
      'Verifier la tension de reference 5V partagee (diagnostic gratuit avec multimetre)'
    ],
    riskExplanation: "Le P0096 est un code mineur sans risque pour le moteur. L'ECU compense automatiquement les lectures incorrectes du capteur en utilisant les informations d'autres capteurs. La perte de rendement est minime et le vehicule reste parfaitement utilisable. Le seul inconvenient notable est le voyant moteur allume qui empeche de detecter d'eventuels nouveaux codes defaut. Sur les moteurs turbo, un capteur IAT2 incorrect peut legerement affecter la gestion de la suralimentation mais les securites internes de l'ECU protegent le moteur. Reparation non urgente, a planifier lors du prochain entretien.",
    faq: [
      {
        question: 'Comment verifier si le capteur IAT2 donne des valeurs correctes?',
        answer: 'La methode la plus simple est de comparer la lecture du capteur avec la temperature ambiante a froid (moteur arrete depuis plusieurs heures). Utilisez votre lecteur OBD pour lire la valeur du capteur IAT2 et comparez-la avec un thermometre fiable. A froid, la valeur doit etre proche de la temperature ambiante (plus ou moins 5 degres). Ensuite, demarrez le moteur et observez l\'evolution: la temperature doit augmenter progressivement et se stabiliser. Si la lecture est fixe, erratique ou tres eloignee de la realite, le capteur est defectueux.'
      },
      {
        question: 'Un intercooler bouche peut-il causer un P0096?',
        answer: 'Oui, sur un moteur turbo, un intercooler encrasse ou partiellement bouche ne refroidit plus correctement l\'air compresse. Le capteur IAT2 situe apres l\'intercooler mesure alors une temperature plus elevee que prevu, ce que l\'ECU interprete comme une incoherence avec les autres parametres. L\'intercooler peut se boucher avec de l\'huile provenant du turbo, des residus de combustion ou des debris externes. Le nettoyage de l\'intercooler (50-150 euros) peut resoudre le P0096 et ameliorer significativement les performances du moteur.'
      },
      {
        question: 'La contamination par l\'huile est-elle frequente sur le capteur IAT2?',
        answer: 'Oui, surtout sur les moteurs turbo diesel. L\'huile provenant du systeme de reniflard carter ou du turbocompresseur peut s\'infiltrer dans le circuit d\'admission et se deposer sur le capteur IAT2. Ce depot d\'huile isole thermiquement la thermistance du capteur, ralentissant sa reponse aux changements de temperature ou faussant completement sa lecture. Un simple nettoyage du capteur avec un solvant appropriate (nettoyant frein ou alcool isopropylique) peut resoudre le probleme. Verifiez aussi la source de l\'huile pour traiter la cause racine.'
      },
      {
        question: 'Quelle est la duree de vie normale d\'un capteur IAT?',
        answer: 'Un capteur IAT de qualite d\'origine a une duree de vie typique de 150 000 a 250 000 km, voire plus dans des conditions favorables. La thermistance peut se degrader tres progressivement avec le temps et les cycles thermiques, entrainant une derive de mesure qui finit par declencher le P0096. Les capteurs exposes a des temperatures elevees (apres turbo) ou a des contaminants (huile, humidite) vieillissent plus rapidement. Les capteurs de remplacement generiques ont parfois une duree de vie plus courte. Il n\'y a pas d\'intervalle d\'entretien specifique pour ce capteur: on le remplace quand il tombe en panne.'
      },
      {
        question: 'Le P0096 peut-il etre confondu avec un probleme de debitmetre MAF?',
        answer: 'Les symptomes du P0096 peuvent effectivement ressembler a ceux d\'un debitmetre MAF defectueux (perte de performances, surconsommation). Cependant, le code est different: le MAF genere des codes P0100 a P0104. L\'ECU utilise a la fois le MAF et le IAT pour calculer la masse d\'air admise. Si les deux capteurs donnent des informations incoherentes, l\'ECU peut aussi generer des codes de correlation. Lors du diagnostic, verifiez les deux capteurs pour obtenir une image complete. Un IAT2 defectueux peut parfois masquer un probleme de MAF ou vice versa.'
      }
    ],
    relatedCodes: ['P0095', 'P0097', 'P0098', 'P0110', 'P0111']
  },
  P0097: {
    code: 'P0097',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0097 indique une tension trop basse dans le circuit du capteur de temperature d'air d'admission numero 2 (IAT2). Ce code specifique revele que la tension mesuree par l'ECU sur le circuit du capteur est en dessous du seuil minimal, ce qui correspond generalement a une temperature lue extremement haute (la thermistance NTC a une resistance basse quand la temperature est elevee, ce qui donne une tension basse). L'ECU interprete cette tension basse comme un court-circuit dans le capteur ou dans son cablage. En pratique, cela signifie soit que le capteur indique une temperature irrealiste (par exemple 150 degres quand le moteur est froid), soit qu'il y a un court-circuit reel a la masse dans le circuit. L'ECU basculera sur une valeur par defaut pour continuer a fonctionner.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Consommation de carburant legerement augmentee',
      'Performances moteur legerement reduites',
      'L\'ECU peut limiter la suralimentation par securite (moteur turbo)',
      'Ralenti generalement normal',
      'Possible reduction de la puissance si l\'ECU croit que l\'air est trop chaud',
      'Aucun symptome notable dans certains cas'
    ],
    causes: [
      'Capteur IAT2 en court-circuit interne (thermistance defaillante) (35% des cas)',
      'Court-circuit a la masse dans le cablage du capteur (25% des cas)',
      'Connecteur inonde par de l\'eau creant un court-circuit (15% des cas)',
      'Fils du capteur en contact l\'un avec l\'autre (10% des cas)',
      'Capteur contamine par un fluide conducteur (huile, eau) (8% des cas)',
      'Probleme de masse partagee avec un autre circuit (5% des cas)',
      'Defaut rare dans le circuit de lecture de l\'ECU (2% des cas)'
    ],
    solutions: [
      'Debrancher le capteur et verifier si le code change (test d\'elimination, gratuit)',
      'Mesurer la resistance du capteur IAT2 (doit correspondre a la temperature ambiante)',
      'Inspecter le connecteur pour eau, huile ou corrosion (gratuit)',
      'Verifier l\'absence de court-circuit a la masse sur les fils du capteur (diagnostic gratuit)',
      'Secher et nettoyer le connecteur si humide ou contamine (gratuit)',
      'Remplacer le capteur IAT2 si defectueux (15-60 euros)',
      'Reparer le cablage si court-circuit identifie (30-100 euros)',
      'Appliquer de la graisse dielectrique sur le connecteur pour prevenir l\'humidite (5 euros)'
    ],
    riskExplanation: "Le P0097 est un code mineur qui n'entraine pas de risque mecanique pour le moteur. L'ECU utilise une valeur de temperature par defaut quand le capteur IAT2 est en defaut, permettant un fonctionnement normal mais pas optimal. Sur un moteur turbo, l'ECU peut reduire la pression de suralimentation par precaution si il croit que l'air d'admission est trop chaud, ce qui limite les performances mais protege le moteur. La surconsommation est minime (3-5%). Reparation non urgente, a effectuer lors de la prochaine visite au garage.",
    faq: [
      {
        question: 'Pourquoi une tension basse correspond-elle a une temperature haute?',
        answer: 'Le capteur IAT utilise une thermistance NTC (Negative Temperature Coefficient) dont la resistance diminue quand la temperature augmente. Ce capteur forme un pont diviseur de tension avec une resistance de reference dans l\'ECU. Quand la temperature est elevee, la resistance du capteur est basse, ce qui tire la tension du signal vers la masse, donnant une lecture de tension basse. A l\'inverse, a basse temperature, la resistance est elevee et la tension du signal est haute. Donc une tension anormalement basse sur le circuit signifie soit une temperature reellement tres haute, soit un court-circuit qui imite cette condition.'
      },
      {
        question: 'Comment distinguer un capteur defectueux d\'un court-circuit dans le cablage?',
        answer: 'Debranchez le connecteur du capteur. Si la tension mesuree par l\'ECU passe de tres basse a tres haute (le code changerait de P0097 a P0098), le probleme est dans le capteur lui-meme. Si la tension reste basse meme capteur debranche, le court-circuit est dans le cablage entre le connecteur et l\'ECU. Vous pouvez aussi mesurer la resistance du capteur debranche: si elle est proche de 0 ohm a temperature ambiante, le capteur est en court-circuit interne. Si la resistance est normale (2-5 kohms a 20 degres), le probleme est dans le cablage.'
      },
      {
        question: 'L\'eau dans le connecteur est-elle une cause frequente?',
        answer: 'Oui, l\'infiltration d\'eau est une cause courante du P0097, surtout apres un lavage moteur haute pression, une forte pluie ou en hiver avec le sel de route. L\'eau cree un chemin conducteur entre les contacts du connecteur, generant un court-circuit qui fait chuter la tension. La solution est de secher completement le connecteur avec de l\'air comprime, nettoyer les contacts, et appliquer de la graisse dielectrique pour prevenir toute infiltration future. Verifiez aussi que le joint d\'etancheite du connecteur est intact. Si le code reapparait par temps humide, le connecteur doit etre remplace.'
      },
      {
        question: 'Le P0097 affecte-t-il le controle technique?',
        answer: 'Oui, le voyant moteur allume est un motif de refus au controle technique dans la plupart des pays europeens. Meme si le P0097 n\'affecte pas significativement les emissions polluantes, le simple fait que le voyant soit allume peut entrainer un echec au CT. De plus, certains systemes de controle technique lisent les codes defaut directement et peuvent refuser le vehicule sur la base du code enregistre. Il est donc necessaire de reparer le P0097 avant le controle technique, ce qui est heureusement peu couteux (15-60 euros pour le capteur).'
      },
      {
        question: 'Puis-je simplement effacer le code et esperer qu\'il ne revienne pas?',
        answer: 'Vous pouvez effacer le code, et dans certains cas il ne reviendra pas si la cause etait temporaire (eau dans le connecteur qui a seche, faux contact momentane). Cependant, si le code revient apres quelques dizaines de kilometres, le probleme est permanent et necessite une reparation. Effacer le code sans reparer ne fait que masquer le symptome. De plus, si vous effacez le code juste avant le controle technique, les moniteurs OBD ne seront pas prets et le CT sera invalide. Il est toujours preferable de reparer la cause plutot que de simplement effacer le code.'
      }
    ],
    relatedCodes: ['P0095', 'P0096', 'P0098', 'P0112', 'P0113']
  },
  P0098: {
    code: 'P0098',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0098 indique une tension trop elevee dans le circuit du capteur de temperature d'air d'admission numero 2 (IAT2). Ce code est l'oppose du P0097 et signale que la tension mesuree par l'ECU depasse le seuil maximal autorise. Sur un capteur IAT a thermistance NTC, une tension elevee correspond a une resistance elevee, ce qui est interprete comme une temperature tres basse. En pratique, cela signifie que le capteur indique une temperature irrealiste (par exemple -40 degres en ete), qu'il y a un circuit ouvert (fil coupe, connecteur debranche) ou que la thermistance du capteur est coupee. L'ECU passera en mode de fonctionnement par defaut avec une valeur de temperature predefinie.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Melange carburant potentiellement trop riche (si l\'ECU croit que l\'air est tres froid)',
      'Legere surconsommation de carburant',
      'Suralimentation potentiellement excessive sur moteur turbo (risque theorique)',
      'Ralenti generalement normal',
      'Performances acceptables mais pas optimales',
      'Fumee legerement plus sombre a l\'echappement dans certaines conditions'
    ],
    causes: [
      'Capteur IAT2 en circuit ouvert (thermistance coupee) (30% des cas)',
      'Connecteur debranche ou mal clippe (25% des cas)',
      'Fil coupe ou casse dans le faisceau electrique (20% des cas)',
      'Connecteur avec contacts abimes ne faisant plus contact (10% des cas)',
      'Corrosion severe des contacts empechant la conduction (8% des cas)',
      'Capteur IAT2 hors de son logement (tombe ou mal installe) (5% des cas)',
      'Probleme de circuit de reference dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Verifier que le connecteur du capteur est bien branche et clippe (gratuit)',
      'Inspecter le cablage pour detecter un fil coupe ou abrase (gratuit)',
      'Mesurer la resistance du capteur: doit etre entre 2 et 5 kohms a 20 degres (diagnostic gratuit)',
      'Nettoyer les contacts du connecteur si corrodes (5-10 euros de spray)',
      'Remplacer le capteur IAT2 si la resistance est infinie (capteur coupe) (15-60 euros)',
      'Reparer le fil coupe par soudure et gaine thermoretractable (10-30 euros)',
      'Verifier que le capteur est correctement insere dans son logement (gratuit)',
      'Appliquer de la graisse dielectrique sur le connecteur apres reparation (5 euros)'
    ],
    riskExplanation: "Le P0098 est un code mineur sans danger immediat pour le moteur. L'ECU utilise une valeur par defaut quand la tension est hors plage, permettant un fonctionnement normal. Cependant, si l'ECU croit que l'air est tres froid, il peut enrichir le melange carburant, augmentant la consommation et les emissions. Sur un moteur turbo, le risque theorique est que l'ECU autorise une suralimentation trop importante si il sous-estime la temperature de l'air, mais les securites de pression du turbo empechent normalement tout exces. Reparation a planifier lors du prochain entretien.",
    faq: [
      {
        question: 'Un connecteur simplement debranche peut-il causer un P0098?',
        answer: 'Oui, c\'est une des causes les plus frequentes (environ 25 pourcent des cas). Si le connecteur du capteur IAT2 s\'est debranche accidentellement (vibrations, manipulation lors d\'un entretien), le circuit devient ouvert et la tension monte au maximum, declenchant le P0098. Avant tout diagnostic complexe, verifiez simplement que le connecteur est bien branche et clippe. Tirez legerement dessus pour verifier qu\'il tient bien. C\'est la reparation gratuite la plus simple possible. Si le connecteur etait effectivement debranche, rebranchez-le, effacez le code et verifiez qu\'il ne revient pas.'
      },
      {
        question: 'Un P0098 peut-il endommager le turbocompresseur?',
        answer: 'En theorie, un P0098 pourrait permettre une suralimentation excessive si l\'ECU croit que l\'air d\'admission est beaucoup plus froid qu\'il ne l\'est reellement (air froid = plus dense = plus de pression autorisee). Cependant, en pratique, les ECU modernes disposent de securites multiples: capteur de pression de suralimentation, capteur de pression atmospherique, et limites de securite programmees qui empechent le turbo de depasser des valeurs dangereuses, independamment de la lecture du IAT2. Le risque reel d\'endommagement du turbo est donc tres faible.'
      },
      {
        question: 'Le capteur IAT2 est-il le meme que le capteur de temperature ambiante?',
        answer: 'Non, ce sont deux capteurs differents. Le capteur de temperature ambiante est generalement situe a l\'avant du vehicule, derriere la calandre ou le pare-chocs, et mesure la temperature exterieure affichee sur le tableau de bord. Le capteur IAT2 est situe dans le circuit d\'admission d\'air du moteur, souvent apres l\'intercooler sur un moteur turbo, et mesure la temperature de l\'air qui va effectivement entrer dans les cylindres. Les deux capteurs utilisent une thermistance similaire mais leurs emplacements et leurs fonctions sont differents.'
      },
      {
        question: 'Comment reparer un fil coupe dans le faisceau du capteur IAT2?',
        answer: 'Si vous identifiez un fil coupe, la reparation est simple. Denudez les deux extremites du fil sur environ 5mm, torsadez-les ensemble, appliquez de la soudure a l\'etain pour une connexion solide, puis protegez la reparation avec une gaine thermoretractable. Si le fil est abrase mais pas completement coupe, vous pouvez enrouler du ruban isolant electrique de qualite ou une gaine thermoretractable autour de la zone endommagee. Assurez-vous que le fil ne frotte plus contre l\'element qui l\'a abrase en l\'ecartant ou en ajoutant une protection. Le cout total est de 10 a 30 euros en pieces.'
      },
      {
        question: 'Faut-il reinitialiser l\'ECU apres le remplacement du capteur IAT2?',
        answer: 'Non, il n\'est generalement pas necessaire de reinitialiser l\'ECU apres le remplacement du capteur IAT2. Il suffit d\'effacer le code defaut avec un lecteur OBD et l\'ECU commencera immediatement a utiliser les valeurs du nouveau capteur. L\'ECU n\'a pas besoin de procedure d\'apprentissage pour ce type de capteur car il utilise directement la valeur de resistance/tension pour determiner la temperature. Apres effacement du code, faites un trajet de 15 a 20 minutes pour permettre a l\'ECU de verifier que le nouveau capteur fonctionne correctement et que le code ne revient pas.'
      }
    ],
    relatedCodes: ['P0095', 'P0096', 'P0097', 'P0113', 'P0110']
  },
  P0099: {
    code: 'P0099',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0099 signale un probleme intermittent ou erratique dans le circuit du capteur de temperature d'air d'admission numero 2 (IAT2). Contrairement aux codes P0097 (tension basse permanente) et P0098 (tension haute permanente), le P0099 indique que le signal du capteur fluctue de maniere anormale ou presente des interruptions momentanees. Ce type de defaut intermittent est souvent plus difficile a diagnostiquer car le probleme n'est pas present en permanence. Les causes les plus courantes sont un connecteur avec faux contact qui se manifeste avec les vibrations du moteur, un fil partiellement coupe qui fait contact de maniere aleatoire, ou un capteur dont la thermistance presente une resistance instable. L'ECU enregistre ce code quand il detecte des variations rapides et illogiques de la tension du capteur.",
    symptoms: [
      'Voyant moteur allume de maniere permanente ou intermittente',
      'Performances moteur generalement normales',
      'Possible variation momentanee du regime moteur lors des decrochages du capteur',
      'Consommation de carburant tres legerement augmentee',
      'Ralenti parfois legerement perturbe',
      'Symptomes pouvant varier selon la temperature ambiante et les vibrations',
      'Aucun symptome perceptible dans beaucoup de cas'
    ],
    causes: [
      'Connecteur du capteur avec faux contact du aux vibrations (35% des cas)',
      'Fil partiellement coupe ou abrase faisant contact par intermittence (25% des cas)',
      'Capteur IAT2 avec thermistance instable (resistance erratique) (15% des cas)',
      'Corrosion partielle des contacts du connecteur (10% des cas)',
      'Connecteur mal clippe bougeant avec les vibrations (8% des cas)',
      'Interference electromagnetique sur le circuit du capteur (5% des cas)',
      'Masse intermittente sur le circuit (2% des cas)'
    ],
    solutions: [
      'Debrancher et rebrancher le connecteur du capteur IAT2 plusieurs fois pour nettoyer les contacts (gratuit)',
      'Inspecter minutieusement le cablage pour detecter un fil abrase ou partiellement coupe (gratuit)',
      'Remuer le connecteur et le cablage moteur tournant pour reproduire le defaut (diagnostic gratuit)',
      'Nettoyer les contacts du connecteur avec spray nettoyant (5-10 euros)',
      'Appliquer de la graisse dielectrique sur les contacts (5 euros)',
      'Remplacer le capteur IAT2 si sa resistance est instable (15-60 euros)',
      'Reparer le fil endommage par soudure et gaine thermoretractable (10-30 euros)',
      'Remplacer le connecteur si les clips de maintien sont uses (15-40 euros)'
    ],
    riskExplanation: "Le P0099 est un code mineur sans risque pour le moteur. Le caractere intermittent du defaut signifie que le capteur fonctionne correctement la plupart du temps, et l'ECU compense automatiquement lors des courtes interruptions. L'impact sur les performances et la consommation est negligeable. Le principal inconvenient est le voyant moteur allume qui masque d'eventuels autres codes plus importants. La reparation est generalement simple et peu couteuse mais peut necessiter un peu de patience pour localiser le faux contact intermittent. Reparation a planifier dans les 1 a 2 mois.",
    faq: [
      {
        question: 'Comment reproduire un defaut intermittent pour le diagnostiquer?',
        answer: 'Pour reproduire un defaut intermittent sur le circuit du capteur IAT2, connectez un lecteur OBD en mode temps reel et observez la valeur du capteur pendant que vous manipulez le connecteur et le cablage. Moteur tournant au ralenti, remuez doucement le connecteur, tirez legerement sur les fils, et tapotez le capteur. Si la valeur affichee saute brusquement ou si le code reapparait, vous avez localise la zone du defaut. Vous pouvez aussi reproduire les conditions qui declenchent le defaut: vibrations a certains regimes, temperature ambiante specifique, ou passages sur route degradee.'
      },
      {
        question: 'Un faux contact peut-il endommager l\'ECU?',
        answer: 'Un faux contact sur un circuit de capteur passif comme le IAT2 ne peut pas endommager l\'ECU. Les circuits de lecture de capteurs dans l\'ECU sont proteges contre les interruptions et les variations de signal. Le seul risque theorique serait si le faux contact generait des pics de tension, mais les circuits IAT fonctionnent en basse tension (0-5V) et ne peuvent pas produire de pics dangereux. L\'ECU est concu pour gerer des signaux intermittents et basculer en mode par defaut sans dommage. Vous pouvez donc prendre le temps de diagnostiquer correctement sans craindre de deteriorer l\'electronique.'
      },
      {
        question: 'Pourquoi le defaut apparait-il surtout par temps froid ou humide?',
        answer: 'Les faux contacts et les problemes intermittents sont souvent aggraves par le froid et l\'humidite. Le froid fait contracter legerement les metaux et les plastiques, ce qui peut ouvrir un micro-espace dans un connecteur. L\'humidite peut s\'infiltrer dans ce micro-espace et modifier les proprietes electriques du contact (corrosion, film d\'eau). De plus, les vibrations du moteur sont souvent plus importantes a froid (ralenti accelere, huile plus visqueuse). Si votre P0099 apparait principalement en hiver ou par temps humide, concentrez votre diagnostic sur le connecteur et appliquez de la graisse dielectrique pour sceller les contacts.'
      },
      {
        question: 'Est-il preferable de remplacer le capteur ou de reparer le connecteur?',
        answer: 'Cela depend de la cause exacte. Si le capteur lui-meme a une thermistance instable (resistance qui varie sans raison), le remplacement du capteur est la seule solution. Si le probleme vient du connecteur ou du cablage, remplacer le capteur ne resoludra rien. Pour distinguer les deux, debranchez le capteur et mesurez sa resistance avec un multimetre pendant quelques minutes en le manipulant: si la resistance est stable, le capteur est bon et le probleme est dans le circuit. Si la resistance saute de maniere erratique, le capteur est defectueux. Dans le doute, le capteur ne coutant que 15-60 euros, le remplacer en meme temps que la reparation du connecteur est souvent judicieux.'
      },
      {
        question: 'Le P0099 peut-il apparaitre apres un lavage moteur ou une forte pluie?',
        answer: 'Oui, l\'eau est une cause frequente de P0099 intermittent. Apres un lavage moteur haute pression ou une forte pluie, de l\'eau peut s\'infiltrer dans le connecteur du capteur IAT2 et creer un court-circuit partiel ou un signal bruite. Le defaut peut etre intermittent car l\'eau s\'evapore progressivement avec la chaleur du moteur. Si le code apparait dans ces circonstances, sechez le connecteur avec de l\'air comprime, nettoyez les contacts et appliquez de la graisse dielectrique. Evitez de diriger le jet haute pression sur les connecteurs electriques lors du lavage du moteur.'
      }
    ],
    relatedCodes: ['P0095', 'P0096', 'P0097', 'P0098', 'P0110']
  },
  P0109: {
    code: 'P0109',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0109 signale un probleme intermittent ou erratique dans le circuit du capteur de pression absolue du collecteur d'admission (MAP - Manifold Absolute Pressure). Le capteur MAP mesure la pression dans le collecteur d'admission pour permettre a l'ECU de calculer la charge moteur et d'ajuster l'injection et l'allumage en consequence. Le P0109 est declenche quand le signal du capteur MAP presente des fluctuations anormales, des sauts de valeur ou des interruptions momentanees. Ce type de defaut intermittent est souvent lie a un probleme de connexion electrique ou a un capteur en fin de vie dont les caracteristiques deviennent instables. Sur les moteurs turbo, le capteur MAP est crucial pour la gestion de la pression de suralimentation.",
    symptoms: [
      'Voyant moteur allume de maniere permanente ou intermittente',
      'Hesitations momentanees lors de l\'acceleration',
      'Ralenti parfois irregulier avec de breves fluctuations',
      'Consommation de carburant legerement augmentee',
      'Possible sensation de perte de puissance breve et ponctuelle',
      'Suralimentation potentiellement perturbee sur moteur turbo',
      'Symptomes pouvant varier selon les vibrations et la temperature'
    ],
    causes: [
      'Connecteur du capteur MAP avec faux contact (30% des cas)',
      'Cablage partiellement endommage ou abrase (20% des cas)',
      'Capteur MAP vieillissant avec signal instable (20% des cas)',
      'Durite de depression fissuree ou mal connectee au capteur (10% des cas)',
      'Corrosion des contacts du connecteur (8% des cas)',
      'Interference electromagnetique sur le circuit (5% des cas)',
      'Masse intermittente sur le circuit du capteur (5% des cas)',
      'Prise d\'air au niveau du collecteur d\'admission (2% des cas)'
    ],
    solutions: [
      'Debrancher et rebrancher le connecteur du capteur MAP pour nettoyer les contacts (gratuit)',
      'Inspecter le cablage pour fils abrases ou partiellement coupes (gratuit)',
      'Verifier la durite de depression entre le collecteur et le capteur MAP (gratuit)',
      'Nettoyer les contacts du connecteur avec spray nettoyant (5-10 euros)',
      'Remplacer le capteur MAP si signal instable (30-120 euros)',
      'Reparer le cablage endommage (30-100 euros)',
      'Remplacer la durite de depression si fissuree (5-20 euros)',
      'Appliquer de la graisse dielectrique sur le connecteur (5 euros)'
    ],
    riskExplanation: "Le P0109 est un code mineur qui n'entraine pas de risque mecanique significatif. Le capteur MAP fonctionnant la plupart du temps normalement, l'impact sur les performances et la consommation est minime. Sur un moteur turbo, les fluctuations momentanees du signal MAP peuvent causer de breves perturbations de la suralimentation, mais les securites de l'ECU empechent tout exces dangereux. Le principal inconvenient reste le voyant moteur allume. Reparation recommandee dans les 1 a 2 mois.",
    faq: [
      {
        question: 'Le capteur MAP est-il le meme que le debitmetre MAF?',
        answer: 'Non, ce sont deux capteurs differents qui mesurent des choses differentes. Le capteur MAP (Manifold Absolute Pressure) mesure la pression dans le collecteur d\'admission, ce qui indique indirectement la charge moteur. Le debitmetre MAF (Mass Air Flow) mesure directement la quantite d\'air qui entre dans le moteur. Certains vehicules utilisent l\'un ou l\'autre, d\'autres utilisent les deux simultanement pour une meilleure precision. Les codes MAP sont P0105 a P0109, tandis que les codes MAF sont P0100 a P0104. Le P0109 concerne donc specifiquement le capteur de pression, pas le debitmetre.'
      },
      {
        question: 'La durite de depression peut-elle causer un signal intermittent?',
        answer: 'Oui, une durite de depression fissuree ou mal emboitee peut causer un signal MAP intermittent. Si la fissure est petite, elle peut s\'ouvrir et se fermer avec les vibrations du moteur et les variations de temperature, creant un signal erratique. Le capteur MAP mesure la depression du collecteur a travers cette durite: si la durite fuit par intermittence, la pression lue fluctue de maniere anormale. Verifiez cette durite en premier car son remplacement est tres simple et peu couteux (5-20 euros). Assurez-vous qu\'elle est bien emboitee aux deux extremites.'
      },
      {
        question: 'Comment tester un capteur MAP avec un multimetre?',
        answer: 'Le capteur MAP produit un signal de tension proportionnel a la pression. Moteur eteint, contact mis, la tension de sortie doit etre d\'environ 4 a 4,5V (pression atmospherique). Au demarrage, la tension doit chuter a environ 1 a 1,5V au ralenti (forte depression). En accelerant, la tension doit remonter progressivement. Utilisez le mode tension continue du multimetre sur le fil de signal. Si la tension est erratique, saute ou ne repond pas aux changements de regime, le capteur est defectueux. Verifiez aussi que la tension de reference (5V) est stable aux bornes d\'alimentation.'
      },
      {
        question: 'Le P0109 peut-il apparaitre sur des vehicules sans turbo?',
        answer: 'Oui, le capteur MAP est present sur la grande majorite des moteurs, avec ou sans turbo. Sur un moteur atmospherique, le capteur MAP mesure la depression dans le collecteur d\'admission, qui varie entre environ 0,2 bar (ralenti) et la pression atmospherique (pleine charge). Sur un moteur turbo, le capteur MAP mesure aussi la surpression (au-dessus de la pression atmospherique). Le P0109 peut donc apparaitre sur tous les types de moteurs equipes d\'un capteur MAP, independamment de la presence d\'un turbocompresseur.'
      },
      {
        question: 'Est-il normal que le signal MAP varie rapidement?',
        answer: 'Oui, le signal MAP varie naturellement en fonction des conditions de conduite: il change avec chaque acceleration, deceleration et changement de regime. Ce qui est anormal, ce sont des variations brusques sans rapport avec la conduite, des sauts de valeur illogiques ou des interruptions du signal. L\'ECU est capable de distinguer les variations normales (liees a la conduite) des fluctuations anormales (defaut du capteur ou du circuit) grace a des algorithmes de filtrage. Le P0109 n\'est enregistre que lorsque les variations sont clairement en dehors du comportement normal attendu.'
      }
    ],
    relatedCodes: ['P0105', 'P0106', 'P0107', 'P0108', 'P0100']
  },
  P0110: {
    code: 'P0110',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0110 indique un dysfonctionnement general dans le circuit du capteur de temperature d'air d'admission (IAT - Intake Air Temperature). Ce capteur est essentiel pour que l'ECU puisse determiner la densite de l'air entrant dans le moteur et ajuster en consequence la quantite de carburant injectee et le calage de l'allumage. L'air froid est plus dense et contient plus d'oxygene par unite de volume, necessitant plus de carburant pour maintenir le rapport stoechiometrique optimal. Le P0110 est un code general qui signale que le signal du capteur est hors des limites acceptables sans preciser si la tension est trop haute ou trop basse. Ce capteur peut etre integre au debitmetre MAF ou etre un composant independant monte sur le collecteur d'admission.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Consommation de carburant augmentee de 3 a 8 pourcent',
      'Performances legerement reduites',
      'Demarrage a froid un peu plus difficile',
      'Ralenti pouvant etre legerement irregulier',
      'Melange air-carburant non optimal (trop riche ou trop pauvre)',
      'Emissions polluantes legerement augmentees'
    ],
    causes: [
      'Capteur IAT defectueux (thermistance hors specification) (30% des cas)',
      'Connecteur du capteur oxyde ou corrode (20% des cas)',
      'Cablage endommage entre le capteur et l\'ECU (15% des cas)',
      'Capteur IAT integre au MAF avec MAF defectueux (12% des cas)',
      'Circuit ouvert ou court-circuit dans le cablage (10% des cas)',
      'Capteur mal repositionne apres un entretien (8% des cas)',
      'Probleme de tension de reference 5V (5% des cas)'
    ],
    solutions: [
      'Inspecter le connecteur du capteur IAT et nettoyer les contacts (gratuit)',
      'Tester la resistance du capteur IAT avec multimetre (2-5 kohms a 20 degres)',
      'Verifier la tension de reference 5V sur le connecteur (diagnostic gratuit)',
      'Remplacer le capteur IAT si resistance hors specification (15-60 euros)',
      'Reparer le cablage endommage si detecte (30-100 euros)',
      'Si capteur integre au MAF, envisager le remplacement du MAF (120-400 euros)',
      'Verifier le positionnement correct du capteur dans le circuit d\'admission'
    ],
    riskExplanation: "Le P0110 est un code mineur qui n'entraine pas de risque mecanique pour le moteur. L'ECU utilise une valeur par defaut pour la temperature d'air quand le capteur est defaillant, ce qui permet de continuer a rouler normalement. La consommation peut augmenter de quelques pourcents et les performances etre legerement degradees. Le principal inconvenient est le voyant moteur allume qui masque d'eventuels autres codes defaut plus importants. Reparation a planifier lors du prochain entretien ou dans les 2 mois.",
    faq: [
      {
        question: 'Le capteur IAT est-il toujours un composant separe?',
        answer: 'Non, sur de nombreux vehicules modernes, le capteur IAT est integre directement dans le boitier du debitmetre MAF. Dans ce cas, il forme un seul composant avec le MAF et ne peut pas etre remplace separement. Si le capteur IAT integre au MAF est defectueux, il faut remplacer l\'ensemble du MAF, ce qui est plus couteux (120-400 euros contre 15-60 euros pour un IAT separe). Sur d\'autres vehicules, le capteur IAT est un composant independant visse ou clippe dans le collecteur d\'admission ou dans la durite d\'air. Consultez le manuel de votre vehicule pour identifier la configuration de votre moteur.'
      },
      {
        question: 'La temperature de l\'air d\'admission influence-t-elle vraiment les performances?',
        answer: 'Oui, la temperature de l\'air a un impact significatif sur les performances. L\'air a 0 degres est environ 10 pourcent plus dense que l\'air a 30 degres, ce qui signifie 10 pourcent plus d\'oxygene dans chaque cylindre. Plus d\'oxygene permet plus de carburant et donc plus de puissance. C\'est pourquoi les moteurs sont plus performants en hiver qu\'en ete. L\'ECU utilise le capteur IAT pour ajuster finement l\'injection et l\'allumage a ces variations. Sans information correcte sur la temperature de l\'air, l\'ECU utilise une valeur moyenne qui n\'est optimale ni a froid ni a chaud.'
      },
      {
        question: 'Peut-on rouler indefiniment avec un P0110?',
        answer: 'Oui, vous pouvez rouler sans aucun risque mecanique avec un P0110. L\'ECU utilise une valeur de temperature par defaut (generalement entre 20 et 40 degres selon le constructeur) qui permet un fonctionnement normal du moteur. La seule consequence est une legere surconsommation et des performances non optimisees aux temperatures extremes. Le moteur ne sera pas endommage. Cependant, le voyant moteur restera allume, ce qui vous empechera de detecter d\'eventuels nouveaux problemes. De plus, le controle technique sera refuse tant que le voyant est allume.'
      },
      {
        question: 'Comment savoir si mon capteur IAT est integre au MAF?',
        answer: 'La maniere la plus simple est de regarder le connecteur du MAF. Si le MAF a un connecteur avec 4 ou 5 fils au lieu de 2 ou 3, il integre probablement le capteur IAT. Vous pouvez aussi inspecter visuellement le collecteur d\'admission: si vous ne trouvez pas de capteur IAT separe visse ou clippe sur le collecteur ou la durite d\'air, c\'est qu\'il est integre au MAF. Enfin, le schema electrique de votre vehicule (disponible dans le manuel d\'atelier) indique clairement si le capteur IAT est un composant separe ou integre.'
      },
      {
        question: 'Le P0110 est-il plus frequent en hiver ou en ete?',
        answer: 'Le P0110 n\'est pas saisonnier en soi, car il indique un defaut du capteur et non une condition climatique. Cependant, certaines causes du P0110 sont plus frequentes en hiver: la condensation et le gel peuvent affecter les connecteurs, et les variations thermiques importantes (froid exterieur versus chaleur du moteur) sollicitent davantage les contacts electriques. La corrosion due au sel de route peut aussi accelerer la deterioration des connecteurs. En ete, la chaleur excessive peut degrader plus rapidement les composants electroniques. Le code peut apparaitre a n\'importe quelle saison.'
      }
    ],
    relatedCodes: ['P0111', 'P0112', 'P0113', 'P0114', 'P0100']
  },
  P0111: {
    code: 'P0111',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0111 indique un probleme de plage ou de performance du capteur de temperature d'air d'admission (IAT). Ce code signifie que le capteur fonctionne electriquement mais que les valeurs qu'il fournit sont incoherentes avec les autres donnees du moteur. L'ECU compare la temperature mesuree par le IAT avec la temperature du liquide de refroidissement (ECT) et d'autres parametres pour valider la logique des mesures. Par exemple, si le moteur est reste stationne toute la nuit, la temperature d'air d'admission et la temperature du liquide de refroidissement devraient etre proches au demarrage. Si le IAT indique une valeur tres differente, l'ECU enregistre le P0111. Ce code peut aussi apparaitre si la temperature ne change pas du tout malgre le rechauffement du moteur ou les variations de conditions de conduite.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Consommation de carburant legerement elevee',
      'Performances moteur legerement sous-optimales',
      'Ralenti generalement stable',
      'Possible leger desequilibre du melange air-carburant',
      'Emissions polluantes potentiellement augmentees',
      'Aucun symptome perceptible dans de nombreux cas'
    ],
    causes: [
      'Capteur IAT avec derive de mesure (thermistance vieillissante) (30% des cas)',
      'Capteur deplace ou mal positionne dans le circuit d\'admission (20% des cas)',
      'Fuite d\'air chauffant ou refroidissant anormalement le capteur (15% des cas)',
      'Capteur contamine par de l\'huile, de l\'eau ou des residus (12% des cas)',
      'Intercooler deficient ne refroidissant pas correctement l\'air (10% des cas)',
      'Capteur IAT de mauvaise qualite installe precedemment (8% des cas)',
      'Probleme de reference de tension partagee avec d\'autres capteurs (5% des cas)'
    ],
    solutions: [
      'Comparer la valeur du capteur IAT avec un thermometre de reference (diagnostic gratuit)',
      'Verifier le positionnement correct du capteur dans le collecteur d\'admission (gratuit)',
      'Nettoyer le capteur si contamine par huile ou residus (gratuit)',
      'Remplacer le capteur IAT si ses valeurs ne correspondent pas a la realite (15-60 euros)',
      'Verifier l\'absence de fuite d\'air dans le circuit d\'admission (diagnostic 30-60 euros)',
      'Controler le fonctionnement de l\'intercooler si moteur turbo (diagnostic 50-100 euros)',
      'Verifier la tension de reference 5V partagee (diagnostic gratuit avec multimetre)'
    ],
    riskExplanation: "Le P0111 est un code mineur qui ne pose pas de risque mecanique pour le moteur. L'ECU peut compenser les valeurs incorrectes du capteur IAT en utilisant d'autres donnees pour estimer la temperature d'air. La perte de rendement est minime et le vehicule reste parfaitement utilisable au quotidien. Le seul inconvenient reel est le voyant moteur allume et un possible echec au controle technique. Reparation a planifier lors du prochain entretien, idealement dans les 2 a 3 mois.",
    faq: [
      {
        question: 'Comment l\'ECU detecte-t-il que le capteur IAT est hors plage?',
        answer: 'L\'ECU utilise plusieurs strategies de validation. Premierement, il compare la temperature IAT avec la temperature du liquide de refroidissement (ECT) a froid: les deux doivent etre proches si le vehicule est reste stationne plusieurs heures. Deuxiemement, il verifie que la temperature IAT evolue logiquement: elle doit augmenter legerement avec le moteur en fonctionnement et varier avec la vitesse du vehicule. Troisiemement, la valeur doit rester dans une plage physiquement possible (par exemple entre -40 et +120 degres). Si une de ces validations echoue de maniere repetee, le P0111 est enregistre.'
      },
      {
        question: 'Un capteur IAT contamine par l\'huile donne-t-il des lectures incorrectes?',
        answer: 'Oui, l\'huile deposee sur la thermistance du capteur agit comme un isolant thermique. Le capteur reagit alors plus lentement aux changements de temperature ou indique une temperature qui ne correspond pas a la realite. Sur les moteurs turbo diesel, l\'huile du systeme de reniflard peut s\'infiltrer dans le circuit d\'admission et contaminer le capteur. Le nettoyage est simple: demontez le capteur et nettoyez-le avec de l\'alcool isopropylique ou du nettoyant frein. Laissez secher completement avant de le reinstaller. Si les lectures restent incorrectes apres nettoyage, le capteur doit etre remplace.'
      },
      {
        question: 'Le P0111 peut-il etre cause par un filtre a air encrasse?',
        answer: 'Indirectement, un filtre a air tres sale peut modifier les conditions de flux d\'air autour du capteur IAT, ce qui peut affecter la temperature lue. Cependant, ce n\'est pas une cause directe du P0111. Un filtre encrasse reduit le debit d\'air mais n\'a normalement pas assez d\'impact sur la temperature pour declencher un code. Il est neanmoins recommande de verifier et remplacer le filtre a air si necessaire lors du diagnostic du P0111, car un bon flux d\'air contribue a des lectures de temperature plus precises et stables.'
      },
      {
        question: 'Le P0111 est-il grave sur un moteur turbocompresse?',
        answer: 'Sur un moteur turbo, le P0111 est legerement plus important que sur un moteur atmospherique car la temperature de l\'air d\'admission est un parametre cle pour la gestion de la suralimentation. Si l\'ECU ne connait pas la vraie temperature de l\'air apres l\'intercooler, il ne peut pas optimiser correctement la pression de suralimentation. Cependant, les securites internes de l\'ECU (capteur de pression de suralimentation, capteur de detonation) protegent le moteur contre tout exces. Le risque est plus une perte de performance qu\'un danger mecanique.'
      },
      {
        question: 'Dois-je remplacer le capteur IAT par une piece d\'origine?',
        answer: 'Il n\'est pas obligatoire d\'utiliser une piece d\'origine, mais la qualite du remplacement est importante. Les capteurs IAT de bonne qualite (marques comme Bosch, Delphi, Denso, NTK) offrent des performances equivalentes a l\'original pour un prix souvent inferieur. Les capteurs generiques tres bon marche peuvent avoir une precision moindre et une duree de vie plus courte, ce qui peut provoquer un retour du code P0111. Pour un capteur qui coute entre 15 et 60 euros, la difference de prix entre une marque de qualite et un generique est faible, donc investir dans la qualite est recommande.'
      }
    ],
    relatedCodes: ['P0110', 'P0112', 'P0113', 'P0114', 'P0095']
  },
  P0112: {
    code: 'P0112',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0112 indique une tension trop basse dans le circuit du capteur de temperature d'air d'admission (IAT). Sur un capteur IAT a thermistance NTC, une tension basse correspond a une resistance faible du capteur, ce que l'ECU interprete comme une temperature d'air extremement haute. En realite, soit le capteur est en court-circuit interne, soit il y a un court-circuit a la masse dans le cablage. L'ECU lira une temperature d'air irrealiste (superieure a 100 degres par exemple) alors que l'air d'admission est a temperature ambiante normale. En consequence, l'ECU croira que l'air est tres chaud et peu dense, et reduira la quantite de carburant injectee, ce qui peut appauvrir le melange et reduire les performances.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Perte de puissance due a un melange trop pauvre',
      'Hesitations lors des accelerations',
      'Ralenti pouvant etre instable',
      'Consommation potentiellement reduite ou augmentee selon la compensation ECU',
      'Possible limitation de suralimentation sur moteur turbo',
      'Demarrage a froid potentiellement affecte'
    ],
    causes: [
      'Capteur IAT en court-circuit interne (thermistance defaillante) (35% des cas)',
      'Court-circuit a la masse dans le cablage du capteur (25% des cas)',
      'Eau infiltree dans le connecteur creant un court-circuit (15% des cas)',
      'Fils du capteur touches l\'un l\'autre (10% des cas)',
      'Capteur contamine par un fluide conducteur (8% des cas)',
      'Connecteur endommage avec contacts rapproches (5% des cas)',
      'Probleme de masse partagee tirant la tension vers le bas (2% des cas)'
    ],
    solutions: [
      'Debrancher le capteur et verifier si le code change en P0113 (test diagnostic, gratuit)',
      'Mesurer la resistance du capteur: doit etre 2-5 kohms a 20 degres (diagnostic gratuit)',
      'Inspecter le connecteur pour eau, huile ou corrosion (gratuit)',
      'Verifier l\'absence de court-circuit a la masse dans le cablage (diagnostic 30-50 euros)',
      'Secher et nettoyer le connecteur si contamine (gratuit)',
      'Remplacer le capteur IAT si en court-circuit interne (15-60 euros)',
      'Reparer le cablage si court-circuit identifie (30-100 euros)',
      'Appliquer de la graisse dielectrique apres reparation (5 euros)'
    ],
    riskExplanation: "Le P0112 est un code mineur mais qui peut avoir un impact legerement plus perceptible que les autres codes IAT car l'ECU appauvrit le melange en croyant que l'air est tres chaud. Un melange pauvre prolonge peut causer des temperatures de combustion elevees, ce qui a long terme peut user prematurement les soupapes et le catalyseur. Cependant, l'ECU dispose de corrections secondaires (sonde lambda) qui limitent l'appauvrissement. Le risque reel est faible mais la reparation est simple et peu couteuse. Intervention recommandee dans les 2 a 4 semaines.",
    faq: [
      {
        question: 'Pourquoi un court-circuit fait-il croire a l\'ECU que l\'air est chaud?',
        answer: 'Le capteur IAT est une thermistance NTC dont la resistance diminue quand la temperature augmente. A temperature ambiante (20 degres), sa resistance est d\'environ 2-5 kohms. A haute temperature (100 degres), elle tombe a quelques centaines d\'ohms. Quand il y a un court-circuit (resistance proche de 0), l\'ECU voit la meme chose que si le capteur mesurait une temperature extremement haute. C\'est le principe du pont diviseur de tension: une resistance tres basse du capteur donne une tension tres basse sur le circuit, que l\'ECU convertit en temperature tres haute selon sa courbe de calibration.'
      },
      {
        question: 'Le test de debranchement du capteur est-il fiable pour diagnostiquer?',
        answer: 'Oui, c\'est un test tres simple et fiable. Si vous debranchez le connecteur du capteur IAT et que le code change de P0112 (tension basse) a P0113 (tension haute), cela confirme que le court-circuit est dans le capteur lui-meme ou dans sa connexion immediate. Si le code reste P0112 malgre le debranchement, le court-circuit est dans le cablage entre le connecteur et l\'ECU. Ce test prend moins d\'une minute et permet d\'orienter immediatement le diagnostic dans la bonne direction sans aucun equipement special.'
      },
      {
        question: 'L\'eau dans le connecteur peut-elle causer un P0112?',
        answer: 'Oui, l\'eau est conductrice et peut creer un court-circuit entre les contacts du connecteur, faisant chuter la tension et declenchant le P0112. Cela se produit souvent apres un lavage moteur haute pression, une forte pluie ou en hiver avec la condensation et le sel de route. La solution est de demonter le connecteur, le secher completement avec de l\'air comprime ou un seche-cheveux, nettoyer les contacts, verifier l\'etat du joint d\'etancheite et appliquer de la graisse dielectrique pour prevenir toute infiltration future. Si le joint est endommage, remplacez le connecteur.'
      },
      {
        question: 'Un P0112 peut-il causer un melange trop pauvre au point de faire caler le moteur?',
        answer: 'En theorie, si l\'ECU croit que l\'air est extremement chaud (par exemple 150 degres), il reduira fortement la quantite de carburant injectee, ce qui pourrait appauvrir le melange au point de provoquer des rates d\'allumage ou un calage. En pratique, la sonde lambda detecte le melange pauvre et corrige en enrichissant, ce qui limite l\'appauvrissement. Cependant, a froid (quand la sonde lambda n\'est pas encore active), le melange peut etre trop pauvre et causer des difficultes de demarrage ou un ralenti instable. Une fois la sonde lambda active, l\'ECU compense largement le defaut du capteur IAT.'
      },
      {
        question: 'Le capteur IAT et le capteur ECT utilisent-ils le meme type de thermistance?',
        answer: 'Oui, les capteurs IAT et ECT (temperature du liquide de refroidissement) utilisent tous les deux des thermistances NTC de conception similaire. La difference principale est leur plage de mesure et leur environnement: le capteur ECT est immerge dans le liquide de refroidissement et doit supporter des temperatures plus elevees (jusqu\'a 130 degres), tandis que le capteur IAT est expose a l\'air d\'admission (generalement entre -40 et +80 degres). Les valeurs de resistance peuvent etre identiques ou legerement differentes selon le constructeur. Les methodes de test au multimetre sont les memes pour les deux types.'
      }
    ],
    relatedCodes: ['P0110', 'P0113', 'P0097', 'P0095', 'P0111']
  },
  P0113: {
    code: 'P0113',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0113 indique une tension trop elevee dans le circuit du capteur de temperature d'air d'admission (IAT). Sur un capteur IAT a thermistance NTC, une tension elevee correspond a une resistance elevee, ce que l'ECU interprete comme une temperature d'air extremement basse (par exemple -40 degres). En realite, le capteur est probablement en circuit ouvert (thermistance coupee), le connecteur est debranche, ou un fil est coupe. L'ECU croira que l'air est tres froid et dense, et pourra enrichir le melange en injectant plus de carburant que necessaire. Cela peut entrainer une surconsommation et des emissions de fumee plus importante. C'est un des codes IAT les plus frequents et les plus simples a reparer.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Consommation de carburant augmentee de 5 a 10 pourcent',
      'Fumee noire legerement plus importante a l\'echappement',
      'Ralenti generalement normal',
      'Melange air-carburant trop riche dans certaines conditions',
      'Performances globalement acceptables',
      'Possible encrassement accelere des bougies et du catalyseur'
    ],
    causes: [
      'Capteur IAT en circuit ouvert (thermistance coupee internement) (30% des cas)',
      'Connecteur du capteur debranche ou mal clippe (25% des cas)',
      'Fil coupe ou casse dans le faisceau electrique (20% des cas)',
      'Contacts du connecteur corrodes ou endommages (10% des cas)',
      'Capteur sorti de son logement (tombe du collecteur) (8% des cas)',
      'Corrosion severe empechant toute conduction electrique (5% des cas)',
      'Probleme de circuit de reference dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Verifier que le connecteur du capteur est bien branche et clippe (gratuit)',
      'Verifier que le capteur est bien en place dans son logement (gratuit)',
      'Mesurer la resistance du capteur (doit etre 2-5 kohms a 20 degres, infini = capteur HS)',
      'Inspecter le cablage pour detecter un fil coupe (gratuit)',
      'Nettoyer les contacts corrodes du connecteur (5-10 euros de spray)',
      'Remplacer le capteur IAT si en circuit ouvert (15-60 euros)',
      'Reparer le fil coupe par soudure (10-30 euros)',
      'Remettre le capteur en place s\'il est sorti de son logement (gratuit)'
    ],
    riskExplanation: "Le P0113 est un code mineur qui provoque un enrichissement du melange air-carburant. Cet enrichissement augmente la consommation de 5 a 10 pourcent et accelere l'encrassement des bougies et du catalyseur sur le long terme. Le moteur n'est pas en danger immediat mais la surconsommation represente un cout financier et ecologique. Le catalyseur peut etre endommage apres plusieurs mois de fonctionnement avec un melange trop riche. La reparation etant tres simple et peu couteuse, il est recommande de s'en occuper rapidement, dans les 2 a 3 semaines.",
    faq: [
      {
        question: 'Un connecteur debranche est-il vraiment une cause frequente du P0113?',
        answer: 'Oui, c\'est une des causes les plus courantes (environ 25 pourcent des cas). Le connecteur du capteur IAT peut se debrancher accidentellement lors d\'un entretien (changement de filtre a air, nettoyage du MAF) ou a cause des vibrations du moteur si le clip de maintien est fatigue. Avant tout diagnostic electrique, la premiere chose a faire est de verifier que le connecteur est bien branche et qu\'il tient fermement. Si le clip est casse, vous pouvez temporairement securiser le connecteur avec du ruban adhesif en attendant de trouver un connecteur de remplacement.'
      },
      {
        question: 'Le P0113 peut-il noyer le catalyseur de carburant imbrue?',
        answer: 'Si l\'ECU enrichit le melange en croyant que l\'air est tres froid, une partie du carburant supplementaire traverse la combustion sans bruler completement et atteint le catalyseur sous forme de carburant imbrue. Le catalyseur brule ce carburant, ce qui augmente sa temperature. Sur le court terme (quelques jours), l\'impact est negligeable. Sur le long terme (plusieurs mois), cet exces de chaleur peut degrader le substrat ceramique du catalyseur et reduire son efficacite. C\'est pourquoi meme un code mineur comme le P0113 merite d\'etre repare dans un delai raisonnable.'
      },
      {
        question: 'Comment savoir si le capteur est tombe de son logement?',
        answer: 'Si le capteur IAT est sorti de son logement dans le collecteur d\'admission, vous le trouverez pendouillant au bout de son cable dans le compartiment moteur. Le trou ou il etait installe sera visible et ouvert, ce qui represente aussi une prise d\'air non filtree dans l\'admission. Remettez le capteur en place et verifiez qu\'il tient correctement. Si le clip de maintien ou le joint torique est use, remplacez-le. Ce probleme est plus frequent apres un entretien ou un nettoyage du circuit d\'admission si le capteur n\'a pas ete correctement reinstalle.'
      },
      {
        question: 'La sonde lambda peut-elle compenser un capteur IAT defaillant?',
        answer: 'Oui, partiellement. La sonde lambda mesure la richesse des gaz d\'echappement et permet a l\'ECU de corriger le melange air-carburant en boucle fermee. Si le capteur IAT fait enrichir le melange, la sonde lambda detectera cet enrichissement et ordonnera a l\'ECU de reduire l\'injection. Cependant, cette correction a des limites (generalement plus ou moins 25 pourcent) et n\'est active qu\'une fois la sonde lambda rechauffee (apres 30 secondes a 2 minutes). Pendant le demarrage a froid et les phases transitoires, la compensation par la sonde lambda est moins efficace.'
      },
      {
        question: 'Puis-je remplacer le capteur IAT moi-meme sans outils speciaux?',
        answer: 'Oui, le remplacement du capteur IAT est une des reparations les plus simples en mecanique automobile. Si le capteur est un composant separe (non integre au MAF), il suffit de debrancher le connecteur electrique, de devisser ou declipser l\'ancien capteur, d\'installer le nouveau avec son joint et de rebrancher le connecteur. Aucun outil special n\'est necessaire: une cle plate ou un tournevis suffisent selon le type de fixation. L\'operation prend 5 a 15 minutes. Apres le remplacement, effacez le code defaut avec un lecteur OBD. La piece coute entre 15 et 60 euros.'
      }
    ],
    relatedCodes: ['P0110', 'P0112', 'P0098', 'P0095', 'P0111']
  },
  P0114: {
    code: 'P0114',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0114 signale un probleme intermittent dans le circuit du capteur de temperature d'air d'admission (IAT). Ce code indique que le signal du capteur presente des fluctuations anormales, des coupures momentanees ou des sauts de valeur qui ne correspondent pas a des variations reelles de la temperature de l'air. Contrairement aux codes P0112 (tension toujours basse) et P0113 (tension toujours haute), le P0114 signale un defaut qui va et vient. Ce type de probleme est typiquement cause par un faux contact dans le connecteur, un fil partiellement endommage ou un capteur dont la thermistance commence a se deteriorer. Le diagnostic peut etre plus delicat car le defaut n'est pas toujours reproductible au moment de l'inspection.",
    symptoms: [
      'Voyant moteur allume de maniere permanente ou intermittente',
      'Performances moteur generalement normales la plupart du temps',
      'Breves hesitations possibles lors des interruptions de signal',
      'Consommation de carburant tres legerement augmentee',
      'Symptomes pouvant apparaitre et disparaitre avec les vibrations',
      'Ralenti globalement stable avec de rares perturbations',
      'Aucun symptome perceptible dans de nombreux cas'
    ],
    causes: [
      'Connecteur du capteur IAT avec faux contact (35% des cas)',
      'Fil partiellement coupe faisant contact par intermittence (25% des cas)',
      'Capteur IAT avec thermistance en debut de defaillance (15% des cas)',
      'Corrosion partielle des contacts electriques (10% des cas)',
      'Connecteur mal clippe bougeant avec les vibrations du moteur (8% des cas)',
      'Interference electromagnetique perturbant le signal (5% des cas)',
      'Masse intermittente sur le circuit du capteur (2% des cas)'
    ],
    solutions: [
      'Debrancher et rebrancher le connecteur plusieurs fois pour nettoyer les contacts (gratuit)',
      'Remuer le connecteur et le cablage moteur tournant pour reproduire le defaut (diagnostic gratuit)',
      'Inspecter minutieusement le cablage pour detecter les zones abrasees (gratuit)',
      'Nettoyer les contacts avec spray nettoyant contact electrique (5-10 euros)',
      'Appliquer de la graisse dielectrique sur les contacts (5 euros)',
      'Remplacer le capteur IAT si sa resistance est instable (15-60 euros)',
      'Reparer le fil endommage (10-30 euros)',
      'Remplacer le connecteur si les clips sont uses (15-40 euros)'
    ],
    riskExplanation: "Le P0114 est un code mineur sans aucun risque mecanique pour le moteur. Le caractere intermittent du defaut signifie que le capteur fonctionne correctement la grande majorite du temps. L'ECU compense automatiquement les interruptions momentanees. L'impact sur les performances et la consommation est negligeable. Le seul inconvenient reel est le voyant moteur allume qui masque d'eventuels autres codes plus importants. La reparation est generalement simple et peu couteuse. Intervention a planifier dans les 1 a 2 mois.",
    faq: [
      {
        question: 'Pourquoi le defaut intermittent est-il plus difficile a diagnostiquer?',
        answer: 'Un defaut intermittent ne se manifeste pas en permanence, ce qui signifie que lorsque le mecanicien inspecte le circuit, tout peut sembler normal. Le capteur donne la bonne resistance, le connecteur semble bien branche, et le cablage parait intact. Le defaut ne se produit que dans certaines conditions: vibrations a un certain regime, temperature specifique, humidite, ou position du moteur. Pour diagnostiquer un tel defaut, il faut essayer de le reproduire en remuant les connecteurs et les cables pendant que l\'on observe le signal en temps reel avec une valise diagnostique ou un multimetre.'
      },
      {
        question: 'Le P0114 peut-il se transformer en P0112 ou P0113?',
        answer: 'Oui, un P0114 (defaut intermittent) est souvent le precurseur d\'un P0112 (tension basse permanente) ou d\'un P0113 (tension haute permanente). Un fil partiellement coupe finira par se couper completement, un connecteur corrode finira par ne plus faire contact du tout, et un capteur en debut de defaillance finira par tomber en panne complete. C\'est pourquoi il est recommande de reparer un P0114 meme s\'il semble anodin: mieux vaut une reparation planifiee qu\'une panne complete sur la route.'
      },
      {
        question: 'La graisse dielectrique peut-elle resoudre un P0114?',
        answer: 'La graisse dielectrique ne conduit pas l\'electricite mais protege les contacts contre l\'humidite et la corrosion. Si le P0114 est cause par de la corrosion sur les contacts du connecteur, nettoyer les contacts puis appliquer de la graisse dielectrique peut effectivement resoudre le probleme durablement. La graisse empeche l\'eau et l\'air d\'atteindre les contacts, prevenant toute nouvelle corrosion. Cependant, si le probleme est un fil coupe ou un capteur defectueux, la graisse ne changera rien. C\'est une mesure preventive et curative pour les problemes de connecteur uniquement.'
      },
      {
        question: 'Combien de temps faut-il pour diagnostiquer un defaut intermittent?',
        answer: 'Le diagnostic d\'un defaut intermittent peut prendre de 15 minutes a 2 heures selon la facilite a reproduire le probleme. Si le defaut se reproduit facilement en remuant le connecteur, le diagnostic est rapide (15-30 minutes). Si le defaut ne se produit que dans certaines conditions de temperature ou de vibration, il peut falloir conduire le vehicule pendant un certain temps avec un enregistreur de donnees connecte. Certains garages facturent un forfait diagnostic de 50 a 100 euros pour ce type de recherche. Le cout de la reparation elle-meme est generalement faible une fois la cause identifiee.'
      },
      {
        question: 'Puis-je utiliser la fonction freeze frame pour aider au diagnostic?',
        answer: 'Oui, la fonction freeze frame est tres utile pour les defauts intermittents. Lorsqu\'un code defaut est enregistre, l\'ECU sauvegarde automatiquement un instantane des conditions du moteur a ce moment (regime, temperature, vitesse, charge moteur). En lisant ces donnees avec un lecteur OBD, vous pouvez savoir dans quelles conditions le defaut s\'est produit: a froid ou a chaud, au ralenti ou en roulant, a faible ou haute charge. Ces informations orientent le diagnostic vers les conditions a reproduire pour trouver la cause du probleme.'
      }
    ],
    relatedCodes: ['P0110', 'P0111', 'P0112', 'P0113', 'P0099']
  },
  P0126: {
    code: 'P0126',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0126 indique que la temperature du liquide de refroidissement n'est pas dans la plage attendue pour les conditions de fonctionnement. Ce code est specifique a certains constructeurs et signale que le moteur met trop de temps a atteindre sa temperature de fonctionnement normale (generalement entre 85 et 105 degres) ou que la temperature ne se stabilise pas correctement. L'ECU surveille le temps de rechauffement du moteur et compare la montee en temperature avec des modeles theoriques bases sur la temperature ambiante, la charge moteur et la vitesse du vehicule. Si le moteur reste trop froid trop longtemps, l'ECU suspecte un thermostat bloque en position ouverte ou un capteur defectueux. Ce defaut est etroitement lie au code P0128 mais peut avoir des criteres de detection differents selon le constructeur.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Temperature du moteur qui ne monte pas assez ou monte tres lentement',
      'Chauffage de l\'habitacle peu efficace, air tiede au lieu de chaud',
      'Consommation de carburant augmentee de 10 a 20 pourcent',
      'Performances moteur reduites a froid pendant une duree prolongee',
      'Emissions polluantes elevees dues au fonctionnement prolonge en mode enrichi',
      'Huile moteur ne montant pas assez en temperature (condensation possible)'
    ],
    causes: [
      'Thermostat bloque en position ouverte (50% des cas)',
      'Thermostat bloque en position intermediaire (15% des cas)',
      'Capteur de temperature du liquide de refroidissement (ECT) defectueux (15% des cas)',
      'Ventilateur de refroidissement fonctionnant en permanence (8% des cas)',
      'Fuite de liquide de refroidissement entrainant un niveau trop bas (5% des cas)',
      'Thermostat de mauvaise specification installe (mauvaise temperature d\'ouverture) (5% des cas)',
      'Calandre obstruee laissant passer trop d\'air (2% des cas)'
    ],
    solutions: [
      'Verifier la temperature reelle du moteur avec un thermometre infrarouge (diagnostic gratuit si DIY)',
      'Tester le thermostat: le moteur doit atteindre 80-90 degres en 5-10 minutes (diagnostic gratuit)',
      'Remplacer le thermostat s\'il est bloque ouvert (20-80 euros piece plus 50-150 euros main d\'oeuvre)',
      'Tester le capteur ECT avec multimetre et comparer avec les specifications (diagnostic gratuit)',
      'Remplacer le capteur ECT si defectueux (15-50 euros)',
      'Verifier le fonctionnement du ventilateur de refroidissement (diagnostic 30-50 euros)',
      'Verifier le niveau de liquide de refroidissement et reparer les fuites si necessaire',
      'S\'assurer que le thermostat installe a la bonne temperature d\'ouverture'
    ],
    riskExplanation: "Un moteur qui fonctionne en dessous de sa temperature optimale consomme significativement plus de carburant (10-20%) car l'ECU enrichit le melange tant que la temperature n'est pas atteinte. L'huile moteur reste trop froide et ne lubrifie pas de maniere optimale, accelerant l'usure des pieces internes. La condensation qui s'accumule dans l'huile peut former des boues. Le catalyseur met plus de temps a atteindre sa temperature de fonctionnement, augmentant les emissions. Le chauffage de l'habitacle est inefficace. Reparation recommandee sous 2 a 3 semaines.",
    faq: [
      {
        question: 'Comment fonctionne un thermostat et pourquoi se bloque-t-il?',
        answer: 'Le thermostat est une vanne thermostatique qui controle la circulation du liquide de refroidissement. Quand le moteur est froid, le thermostat est ferme, empechant le liquide d\'aller au radiateur pour que le moteur se rechauffe rapidement. Quand la temperature atteint le seuil d\'ouverture (generalement 85-95 degres), le thermostat s\'ouvre progressivement pour laisser circuler le liquide vers le radiateur. Le thermostat contient une capsule de cire qui se dilate avec la chaleur pour actionner la vanne. Avec le temps, la cire peut se degrader, les ressorts s\'affaiblir ou des depots de calcaire peuvent bloquer la vanne en position ouverte ou fermee.'
      },
      {
        question: 'Un thermostat bloque ouvert est-il dangereux pour le moteur?',
        answer: 'Un thermostat bloque ouvert n\'est pas dangereux au sens ou il ne provoque pas de surchauffe ni de casse moteur. Le probleme est inverse: le moteur reste trop froid. Cela n\'endommage pas directement le moteur mais entraine une surconsommation importante, une usure prematuree due a une lubrification sous-optimale (l\'huile froide est trop epaisse), et une accumulation de condensation dans l\'huile qui peut former des boues. C\'est l\'oppose d\'un thermostat bloque ferme, qui lui est dangereux car il provoque une surchauffe potentiellement destructrice pour le moteur.'
      },
      {
        question: 'Combien coute le remplacement d\'un thermostat?',
        answer: 'Le thermostat lui-meme est une piece peu couteuse: 20 a 80 euros selon la marque et le modele du vehicule. La main d\'oeuvre varie davantage car l\'accessibilite du thermostat differe enormement d\'un modele a l\'autre. Sur certains vehicules, il est facilement accessible et le remplacement prend 30 minutes (50 euros de main d\'oeuvre). Sur d\'autres, il faut demonter de nombreux elements pour y acceder et l\'operation peut prendre 2-3 heures (150-250 euros de main d\'oeuvre). Le cout total se situe donc entre 70 et 330 euros. Prevoyez aussi le remplacement du liquide de refroidissement (15-30 euros).'
      },
      {
        question: 'Peut-on tester un thermostat sans le demonter?',
        answer: 'Oui, il existe un test simple. Demarrez le moteur froid et observez la montee en temperature sur le tableau de bord ou avec un lecteur OBD. La temperature doit monter regulierement jusqu\'a environ 85-95 degres en 5 a 10 minutes de ralenti. Verifiez aussi la durite superieure du radiateur: elle doit rester froide pendant que le moteur se rechauffe et devenir chaude uniquement quand la temperature atteint le seuil d\'ouverture du thermostat. Si la durite est chaude des le demarrage, le thermostat est ouvert en permanence. Vous pouvez aussi utiliser un thermometre infrarouge pour mesurer la temperature de la durite.'
      },
      {
        question: 'Le P0126 est-il le meme que le P0128?',
        answer: 'Les codes P0126 et P0128 sont tres similaires et concernent tous les deux une temperature moteur insuffisante. La difference reside dans les criteres de detection et les constructeurs qui les utilisent. Le P0128 est un code generique OBD-II standard utilise par la plupart des constructeurs, tandis que le P0126 est utilise par certains constructeurs (notamment Ford et certains constructeurs asiatiques) avec des criteres specifiques. Dans les deux cas, le thermostat bloque ouvert est la cause la plus frequente et la reparation est identique. Les symptomes, diagnostics et solutions sont essentiellement les memes.'
      }
    ],
    relatedCodes: ['P0128', 'P0115', 'P0116', 'P0117', 'P0125']
  },
  P0127: {
    code: 'P0127',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0127 signale que la temperature d'air d'admission est trop elevee pour le fonctionnement normal du moteur. Ce code est declenche lorsque le capteur IAT mesure une temperature d'air superieure au seuil maximal acceptable defini par le constructeur. Une temperature d'air d'admission trop elevee reduit la densite de l'air et donc la quantite d'oxygene disponible pour la combustion, ce qui diminue les performances du moteur et augmente le risque de detonation. Sur les moteurs turbocompresses, ce code peut indiquer un probleme avec l'intercooler qui ne refroidit plus suffisamment l'air compresse. Sur les moteurs atmospheriques, cela peut signaler un probleme de recirculation d'air chaud ou un capteur defectueux.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Perte de puissance notable surtout par temps chaud',
      'L\'ECU peut reduire la suralimentation par securite (moteur turbo)',
      'Consommation de carburant augmentee',
      'Risque de detonation (cliquetis) si le calage n\'est pas retarde',
      'Performances degradees lors de la conduite en charge ou en cote',
      'Possible mode degrade sur certains vehicules'
    ],
    causes: [
      'Intercooler bouche, endommage ou inefficace (moteur turbo) (30% des cas)',
      'Capteur IAT defectueux donnant une lecture trop haute (20% des cas)',
      'Systeme d\'admission d\'air chaud (recirculation d\'air moteur) (15% des cas)',
      'Filtre a air tres encrasse reduisant le debit d\'air frais (10% des cas)',
      'Durites d\'admission d\'air detachees ou mal routees (10% des cas)',
      'Fonctionnement par temperatures ambiantes extremes (conditions normales) (8% des cas)',
      'Turbocompresseur en fin de vie generant trop de chaleur (5% des cas)',
      'Sonde IAT mal positionnee pres d\'une source de chaleur (2% des cas)'
    ],
    solutions: [
      'Verifier la temperature reelle de l\'air d\'admission avec un thermometre (diagnostic gratuit)',
      'Inspecter et nettoyer l\'intercooler (50-150 euros nettoyage, 200-600 euros remplacement)',
      'Remplacer le capteur IAT si defectueux (15-60 euros)',
      'Remplacer le filtre a air s\'il est encrasse (15-40 euros)',
      'Verifier le routage des durites d\'admission pour eviter les sources de chaleur (gratuit)',
      'Reparer ou remplacer les durites d\'admission si detachees (20-80 euros)',
      'Verifier le bon fonctionnement du turbocompresseur (diagnostic 80-150 euros)',
      'Installer une protection thermique sur les durites proches de sources de chaleur (20-50 euros)'
    ],
    riskExplanation: "Un air d'admission trop chaud reduit significativement les performances du moteur et augmente le risque de detonation (auto-allumage premature du melange). L'ECU retarde le calage d'allumage et reduit la suralimentation pour proteger le moteur, mais si le probleme est severe, les contraintes thermiques sur les pistons et les soupapes augmentent. Sur les moteurs turbo, un intercooler defaillant peut provoquer des temperatures d'admission superieures a 100 degres, ce qui est dangereux pour la fiabilite du moteur. Reparation recommandee sous 2 semaines.",
    faq: [
      {
        question: 'Un intercooler bouche peut-il causer le P0127?',
        answer: 'Oui, c\'est la cause la plus frequente du P0127 sur les moteurs turbo. L\'intercooler est un echangeur de chaleur qui refroidit l\'air compresse par le turbo avant qu\'il n\'entre dans le moteur. Avec le temps, l\'interieur de l\'intercooler peut se colmater avec des depots d\'huile provenant du turbo, et l\'exterieur peut se boucher avec des insectes, des feuilles et de la poussiere. Un nettoyage de l\'intercooler (interieur et exterieur) resout souvent le probleme. Si l\'intercooler est perfore ou deforme, son remplacement est necessaire (200-600 euros selon le modele).'
      },
      {
        question: 'Le P0127 est-il normal par temps de canicule?',
        answer: 'Par temperatures ambiantes extremes (au-dessus de 40 degres), il est possible que la temperature d\'air d\'admission depasse le seuil du P0127, surtout en conduite en charge (cote, remorquage). Cela ne signifie pas necessairement un defaut mecanique. Si le code n\'apparait que par temps de canicule et disparait par temperatures normales, il peut s\'agir d\'une condition normale. Cependant, verifiez quand meme l\'etat de l\'intercooler et du filtre a air car un systeme en bon etat devrait supporter les temperatures estivales sans declencher ce code.'
      },
      {
        question: 'La recirculation d\'air chaud est-elle un probleme frequent?',
        answer: 'Sur certains vehicules, le circuit d\'admission d\'air est mal concu ou des modifications ont ete faites (boite a air modifiee, filtre a air sport) qui permettent a l\'air chaud du compartiment moteur d\'etre aspire au lieu de l\'air frais exterieur. Ce probleme est appele soak heat ou heat soak en anglais. Il se manifeste surtout apres un arret suivi d\'un redemarrage rapide: le compartiment moteur est tres chaud et l\'air aspire est beaucoup plus chaud que l\'air exterieur. Verifiez que la prise d\'air est bien orientee vers l\'avant du vehicule et non vers le moteur.'
      },
      {
        question: 'Le P0127 peut-il endommager le turbocompresseur?',
        answer: 'Le P0127 lui-meme n\'endommage pas le turbo, mais si la cause est un intercooler defaillant, le turbo travaille dans des conditions thermiques anormales. L\'air non refroidit qui retourne vers le turbo (par la recirculation du systeme EGR) augmente la temperature de fonctionnement du turbo. De plus, si l\'ECU reduit la pression de suralimentation pour proteger le moteur, le turbo peut fonctionner dans une zone de rendement non optimale. A long terme, ces conditions peuvent accelerer l\'usure du turbo. Reparer la cause du P0127 (souvent l\'intercooler) protege aussi le turbo.'
      },
      {
        question: 'Comment nettoyer un intercooler?',
        answer: 'Le nettoyage d\'un intercooler comporte deux aspects. Pour l\'exterieur (ailettes), utilisez un jet d\'eau basse pression et un degraissant doux, en dirigeant le jet dans le sens oppose au flux d\'air normal pour deloger les debris. N\'utilisez jamais de jet haute pression qui deformerait les ailettes. Pour l\'interieur (passages d\'air), demontez l\'intercooler, rincez-le avec un melange d\'eau chaude et de degraissant, agitez pour deloger les depots d\'huile, puis rincez abondamment a l\'eau claire et laissez secher completement. L\'operation prend 1 a 2 heures. Un nettoyage au garage coute entre 50 et 150 euros.'
      }
    ],
    relatedCodes: ['P0110', 'P0113', 'P0095', 'P0096', 'P0128']
  },
  P0129: {
    code: 'P0129',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0129 signale que la pression barometrique mesuree par le capteur est trop basse pour les conditions actuelles. Le capteur de pression barometrique (BARO) mesure la pression atmospherique ambiante, ce qui permet a l'ECU d'ajuster les parametres du moteur en fonction de l'altitude. A haute altitude, la pression atmospherique diminue, ce qui signifie moins d'oxygene disponible et donc un besoin d'ajuster l'injection et l'allumage. Le P0129 est declenche quand la pression barometrique lue est inferieure au seuil minimal attendu, ce qui peut indiquer un capteur defectueux, un probleme de cablage ou simplement une conduite a tres haute altitude. Ce capteur est parfois integre au capteur MAP ou a l'ECU lui-meme.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Performances moteur possiblement reduites (ECU croit etre en altitude)',
      'Consommation de carburant legerement augmentee',
      'Suralimentation peut etre limitee sur moteur turbo',
      'Ralenti generalement stable',
      'Possible perte de puissance si l\'ECU reduit l\'injection',
      'Aucun symptome perceptible dans certains cas'
    ],
    causes: [
      'Capteur barometrique defectueux (35% des cas)',
      'Connecteur du capteur BARO corrode ou debranche (20% des cas)',
      'Cablage endommage entre le capteur et l\'ECU (15% des cas)',
      'Capteur MAP integrant la fonction BARO defaillant (10% des cas)',
      'Conduite a tres haute altitude (condition normale, pas un defaut) (8% des cas)',
      'Probleme de tension de reference 5V (7% des cas)',
      'Circuit interne de l\'ECU defaillant si BARO integre (5% des cas)'
    ],
    solutions: [
      'Verifier si le code apparait a haute altitude (condition normale, pas de reparation necessaire)',
      'Inspecter le connecteur du capteur BARO (gratuit)',
      'Tester la tension de sortie du capteur BARO avec multimetre (diagnostic gratuit)',
      'Remplacer le capteur barometrique si defectueux (30-120 euros)',
      'Verifier le cablage entre le capteur et l\'ECU (diagnostic 30-50 euros)',
      'Remplacer le capteur MAP si la fonction BARO y est integree (30-120 euros)',
      'Verifier la tension de reference 5V (diagnostic gratuit)',
      'Nettoyer les contacts du connecteur (5-10 euros)'
    ],
    riskExplanation: "Le P0129 est un code mineur qui n'entraine pas de risque mecanique significatif. Si l'ECU croit que le vehicule est a haute altitude, il reduira legerement l'injection pour s'adapter a une pression atmospherique plus basse, ce qui diminue legerement les performances mais ne cause aucun dommage. Le moteur fonctionnera comme s'il etait en altitude, avec une legere perte de puissance et une surconsommation minime. Il n'y a aucun risque de casse. Reparation a planifier lors du prochain entretien.",
    faq: [
      {
        question: 'Le P0129 peut-il apparaitre en roulant en montagne?',
        answer: 'Oui, a tres haute altitude (au-dessus de 2000-3000 metres selon le constructeur), la pression atmospherique peut descendre en dessous du seuil du P0129 de maniere tout a fait normale. Si le code apparait uniquement en montagne et disparait en plaine, il ne s\'agit pas d\'un defaut mais d\'une condition normale que l\'ECU signale. Certains constructeurs ont calibre leurs seuils pour eviter ce faux positif en altitude, mais d\'autres non. Si vous vivez ou conduisez regulierement en altitude elevee, vous pouvez ignorer ce code s\'il ne s\'accompagne d\'aucun symptome anormal.'
      },
      {
        question: 'Le capteur barometrique est-il toujours un composant separe?',
        answer: 'Non, sur beaucoup de vehicules modernes, la fonction barometrique est integree soit dans le capteur MAP (qui mesure la pression atmospherique a chaque mise du contact avant le demarrage), soit directement dans l\'ECU. Quand le capteur BARO est integre au MAP, un defaut du MAP peut generer a la fois des codes MAP (P0105-P0109) et des codes BARO (P0129). Quand le capteur est integre a l\'ECU, le diagnostic est plus complexe car le composant n\'est pas facilement accessible. Consultez le schema electrique de votre vehicule pour identifier la configuration.'
      },
      {
        question: 'Quelle est la relation entre pression barometrique et performances moteur?',
        answer: 'La pression barometrique affecte directement la densite de l\'air et donc la quantite d\'oxygene disponible pour la combustion. Au niveau de la mer (1013 hPa), l\'air est le plus dense. A 1000 metres d\'altitude (environ 900 hPa), la densite diminue d\'environ 10 pourcent, ce qui signifie 10 pourcent moins d\'oxygene et donc environ 10 pourcent de puissance en moins pour un moteur atmospherique. L\'ECU utilise le capteur BARO pour ajuster l\'injection et l\'allumage a ces variations. Sur un moteur turbo, le turbo compense partiellement la perte d\'altitude mais avec un rendement moindre.'
      },
      {
        question: 'Comment tester un capteur barometrique?',
        answer: 'Le capteur barometrique produit une tension proportionnelle a la pression atmospherique. Au niveau de la mer, la tension de sortie est generalement entre 4 et 4,8V (sur une reference de 5V). En altitude, cette tension diminue proportionnellement. Mesurez la tension de sortie avec un multimetre et comparez-la avec la pression atmospherique reelle (consultable en ligne pour votre localisation). Vous pouvez aussi comparer avec la valeur affichee par un smartphone equipe d\'un barometre. Si la tension ne correspond pas a la pression reelle ou si elle est instable, le capteur est defectueux.'
      },
      {
        question: 'Le P0129 affecte-t-il la consommation de carburant?',
        answer: 'L\'impact sur la consommation est generalement faible. Si l\'ECU croit que la pression est plus basse qu\'elle ne l\'est reellement, il peut legerement reduire l\'injection, ce qui pourrait paradoxalement reduire la consommation mais au prix d\'un melange plus pauvre et de performances moindres. En pratique, la sonde lambda corrige le melange en boucle fermee, ce qui limite l\'impact sur la consommation a quelques pourcents. Le principal cout est la perte de puissance qui peut obliger le conducteur a appuyer davantage sur l\'accelerateur, annulant tout benefice theorique.'
      }
    ],
    relatedCodes: ['P0105', 'P0106', 'P0107', 'P0108', 'P0109']
  },
  P0141: {
    code: 'P0141',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0141 signale un dysfonctionnement du circuit de chauffage de la sonde lambda aval (sonde 2) sur le banc 1. La sonde lambda aval est situee apres le catalyseur et sert principalement a surveiller l'efficacite du catalyseur. Pour fonctionner correctement, la sonde lambda doit atteindre une temperature d'environ 300 a 400 degres. Un element chauffant integre dans la sonde accelere ce rechauffement pour que la sonde soit operationnelle le plus rapidement possible apres le demarrage. Le P0141 indique que l'ECU a detecte un probleme dans le circuit electrique de cet element chauffant: il peut etre en circuit ouvert, en court-circuit, ou consommer un courant anormal. Sans chauffage fonctionnel, la sonde met beaucoup plus longtemps a devenir operationnelle et peut donner des lectures incorrectes a froid.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Consommation de carburant legerement augmentee a froid',
      'Emissions polluantes elevees pendant la phase de chauffe',
      'Possible echec au controle technique pour emissions',
      'Ralenti generalement stable une fois le moteur chaud',
      'Performances normales une fois la sonde lambda rechauffee naturellement',
      'Aucun symptome notable en conduite une fois le moteur a temperature'
    ],
    causes: [
      'Element chauffant de la sonde lambda brule ou coupe (40% des cas)',
      'Connecteur de la sonde oxyde ou corrode (15% des cas)',
      'Fusible du circuit de chauffage grille (12% des cas)',
      'Cablage endommage entre l\'ECU et la sonde (10% des cas)',
      'Sonde lambda de mauvaise qualite avec chauffage fragile (8% des cas)',
      'Relais de chauffage des sondes lambda defectueux (8% des cas)',
      'Court-circuit dans le circuit de chauffage (5% des cas)',
      'Probleme de commande ECU sur le circuit de chauffage (2% des cas)'
    ],
    solutions: [
      'Verifier le fusible du circuit de chauffage des sondes lambda (gratuit)',
      'Mesurer la resistance de l\'element chauffant: doit etre 2-14 ohms (diagnostic gratuit)',
      'Inspecter le connecteur de la sonde pour corrosion ou dommages (gratuit)',
      'Verifier l\'alimentation 12V sur le circuit de chauffage (diagnostic gratuit)',
      'Remplacer la sonde lambda aval si l\'element chauffant est HS (60-200 euros)',
      'Reparer le cablage si endommage (30-100 euros)',
      'Remplacer le fusible si grille et verifier l\'absence de court-circuit (1-5 euros)',
      'Verifier et remplacer le relais de chauffage si defectueux (15-40 euros)'
    ],
    riskExplanation: "Le P0141 n'affecte pas directement les performances du moteur une fois celui-ci a temperature. Le risque principal est l'echec au controle technique car les emissions a froid seront elevees et le voyant moteur est allume. Sans element chauffant, la sonde lambda aval met 5 a 10 minutes a devenir operationnelle au lieu de 30 secondes, pendant lesquelles le catalyseur n'est pas surveille. La consommation est augmentee uniquement pendant la phase de chauffe. Sur le long terme, le catalyseur n'etant pas surveille pendant les premieres minutes, un probleme de catalyseur pourrait passer inapercu. Reparation sous 1 a 2 mois.",
    faq: [
      {
        question: 'Quelle est la difference entre la sonde lambda amont et aval?',
        answer: 'La sonde lambda amont (sonde 1) est situee avant le catalyseur et sert a reguler en temps reel le melange air-carburant. C\'est une sonde active qui influence directement l\'injection. La sonde lambda aval (sonde 2, concernee par le P0141) est situee apres le catalyseur et sert principalement a verifier que le catalyseur fonctionne correctement. Elle compare ses lectures avec celles de la sonde amont pour evaluer l\'efficacite du catalyseur. Un defaut de chauffage sur la sonde aval (P0141) est moins critique qu\'un defaut sur la sonde amont (P0135) car elle n\'influence pas directement le dosage carburant.'
      },
      {
        question: 'Comment tester l\'element chauffant d\'une sonde lambda?',
        answer: 'Debranchez le connecteur de la sonde lambda. Sur le connecteur cote sonde, identifiez les deux fils de l\'element chauffant (generalement les deux fils blancs). Mesurez la resistance entre ces deux fils avec un multimetre en mode ohms. La resistance doit etre entre 2 et 14 ohms selon le modele (consultez les specifications constructeur). Une resistance infinie (OL) indique un element chauffant coupe. Une resistance de 0 ohm indique un court-circuit. Vous pouvez aussi verifier cote faisceau que le 12V arrive bien au connecteur contact mis, et que la masse de commande est presente.'
      },
      {
        question: 'Puis-je rouler sans probleme avec un P0141?',
        answer: 'Oui, vous pouvez rouler sans aucun risque mecanique pour le moteur avec un P0141. La sonde lambda aval finira par se rechauffer naturellement grace a la chaleur des gaz d\'echappement apres quelques minutes de conduite. Une fois chaude, elle fonctionne normalement. Le seul impact reel est une consommation legerement augmentee pendant les premieres minutes apres le demarrage et des emissions plus elevees a froid. Le moteur, le catalyseur et les autres composants ne sont pas en danger. Planifiez la reparation pour le prochain entretien ou avant le controle technique.'
      },
      {
        question: 'Pourquoi le fusible du circuit de chauffage grille-t-il?',
        answer: 'Le fusible peut griller pour plusieurs raisons: un court-circuit dans le cablage de la sonde (fil abrase touchant la masse), une sonde lambda en court-circuit interne (element chauffant partiellement fondu), ou une surcharge du circuit si plusieurs sondes sont sur le meme fusible. Si le fusible grille immediatement apres remplacement, il y a un court-circuit qu\'il faut localiser avant de remettre un nouveau fusible. Ne mettez jamais un fusible de valeur superieure car cela pourrait endommager le cablage ou l\'ECU. Localisez et reparez d\'abord le court-circuit.'
      },
      {
        question: 'Dois-je remplacer la sonde par une piece d\'origine ou une equivalente?',
        answer: 'Les sondes lambda d\'origine constructeur offrent les meilleures performances et la meilleure durabilite, mais elles sont couteuses (150-300 euros). Les equivalentes de qualite de marques reconnues (Bosch, Denso, NTK/NGK, Delphi) sont une excellente alternative a prix plus abordable (60-150 euros) et offrent des performances quasi identiques. Evitez les sondes generiques tres bon marche (moins de 30 euros) car leur precision est souvent insuffisante et leur duree de vie bien plus courte. Assurez-vous que la sonde de remplacement correspond exactement a votre modele de vehicule.'
      }
    ],
    relatedCodes: ['P0135', 'P0136', 'P0140', 'P0420', 'P0161']
  },
  P0142: {
    code: 'P0142',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0142 signale un dysfonctionnement dans le circuit de la sonde lambda (capteur d'oxygene) numero 3, banc 1. Sur les vehicules equipes de systemes d'echappement a double catalyseur en serie, cette troisieme sonde est placee apres le second catalyseur pour surveiller l'efficacite globale du systeme de depollution. Ce code est relativement rare et concerne principalement les vehicules avec des systemes d'echappement complexes ou les vehicules utilitaires lourds soumis a des normes d'emissions strictes. L'ECU a detecte un signal anormal provenant de cette sonde, que ce soit une tension hors plage, un signal bloque ou une absence de signal. Le bon fonctionnement de cette sonde est essentiel pour la surveillance des emissions et la conformite aux normes anti-pollution.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun symptome de conduite perceptible dans la majorite des cas',
      'Emissions polluantes potentiellement non surveillees',
      'Echec possible au controle technique',
      'Consommation de carburant inchangee (sonde de surveillance uniquement)',
      'Performances moteur inchangees',
      'Indicateur d\'emissions peut s\'allumer sur certains vehicules'
    ],
    causes: [
      'Sonde lambda numero 3 defectueuse (35% des cas)',
      'Connecteur de la sonde corrode ou debranche (20% des cas)',
      'Cablage endommage entre la sonde et l\'ECU (15% des cas)',
      'Element chauffant de la sonde defaillant (12% des cas)',
      'Contamination de la sonde par de l\'huile ou du silicone (8% des cas)',
      'Circuit ouvert ou court-circuit dans le faisceau (5% des cas)',
      'Sonde empoisonnee par du plomb ou des additifs inadaptes (3% des cas)',
      'Defaillance du circuit de lecture dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Inspecter le connecteur de la sonde et le cablage (gratuit)',
      'Verifier la tension de signal de la sonde avec valise diagnostique (diagnostic 50-80 euros)',
      'Tester la resistance de l\'element chauffant (2-14 ohms normal)',
      'Remplacer la sonde lambda si defectueuse (60-200 euros)',
      'Reparer le cablage endommage (30-100 euros)',
      'Nettoyer ou remplacer le connecteur corrode (10-30 euros)',
      'Verifier l\'absence de fuite d\'echappement en amont de la sonde (diagnostic 30-50 euros)'
    ],
    riskExplanation: "Le P0142 est un code modere qui n'affecte pas les performances du moteur ni la conduite au quotidien. La sonde numero 3 est une sonde de surveillance qui ne participe pas a la regulation du melange air-carburant. Son absence n'entraine aucun risque mecanique. Le seul impact reel est le voyant moteur allume et le risque d'echec au controle technique. Si le systeme de depollution a un probleme reel que cette sonde devait detecter, il passera inapercu. Reparation a planifier avant le controle technique ou dans les 2 mois.",
    faq: [
      {
        question: 'Quels vehicules possedent une troisieme sonde lambda?',
        answer: 'Les vehicules equipes d\'une troisieme sonde lambda sont generalement des modeles avec un systeme d\'echappement a double catalyseur en serie (pre-catalyseur puis catalyseur principal) ou des vehicules conformes aux normes d\'emissions les plus strictes (Euro 5 et 6). Certains vehicules americains, japonais et certaines motorisations europeennes haut de gamme possedent cette configuration. Les vehicules utilitaires lourds et certains SUV a gros moteur en sont souvent equipes. Si votre vehicule n\'a pas de troisieme sonde, ce code ne peut tout simplement pas apparaitre.'
      },
      {
        question: 'La sonde numero 3 affecte-t-elle le dosage du carburant?',
        answer: 'Non, la sonde numero 3 est exclusivement une sonde de surveillance et ne participe pas a la regulation du melange air-carburant. Seule la sonde numero 1 (amont, avant le premier catalyseur) est utilisee par l\'ECU pour ajuster l\'injection en temps reel. La sonde 2 surveille le premier catalyseur et la sonde 3 surveille le second catalyseur ou le systeme global. Un defaut de la sonde 3 n\'affecte donc ni les performances, ni la consommation, ni le comportement du moteur. Il affecte uniquement la capacite de l\'ECU a verifier l\'efficacite du systeme de depollution.'
      },
      {
        question: 'Le remplacement de la sonde 3 est-il difficile?',
        answer: 'L\'accessibilite de la sonde numero 3 varie selon le vehicule. Etant situee apres le second catalyseur, elle se trouve souvent sous le vehicule, parfois difficile d\'acces. Le devissage de la sonde peut etre complique si elle est grippee par la chaleur et la corrosion (utilisez du degraippant penetrant plusieurs heures avant). Une cle a sonde lambda speciale (fendue ou a douille fendue) est recommandee. La sonde elle-meme coute entre 60 et 200 euros. La main d\'oeuvre au garage est de 30 a 100 euros selon l\'accessibilite. Pensez a appliquer de la pate anti-grippage sur les filets de la nouvelle sonde.'
      },
      {
        question: 'La contamination par le silicone est-elle un probleme reel?',
        answer: 'Oui, le silicone est un contaminant redoutable pour les sondes lambda. Les vapeurs de silicone provenant de joints silicone inadaptes (utilisation de silicone non adapte moteur pour refaire un joint), de certains additifs carburant ou de produits de nettoyage se deposent sur l\'element sensible de la sonde et forment une couche isolante qui empeche la detection correcte de l\'oxygene. Cette contamination est souvent irreversible et necessite le remplacement de la sonde. Pour l\'eviter, utilisez uniquement des joints silicone specifiques moteur et evitez les additifs contenant du silicone.'
      },
      {
        question: 'Puis-je ignorer le P0142 si mon vehicule fonctionne normalement?',
        answer: 'Vous pouvez effectivement rouler normalement avec un P0142 sans aucun risque mecanique ni impact sur les performances. Le seul inconvenient est le voyant moteur allume qui vous empechera de passer le controle technique et qui masquera d\'eventuels autres codes defaut plus importants. Si votre prochain controle technique est dans plusieurs mois, vous pouvez planifier la reparation sereinement. Si le CT est imminent, il faudra reparer avant. Dans tous les cas, la reparation est relativement simple et peu couteuse (60-200 euros pour la sonde).'
      }
    ],
    relatedCodes: ['P0141', 'P0136', 'P0140', 'P0420', 'P0143']
  },
  P0143: {
    code: 'P0143',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0143 indique une tension trop basse dans le circuit de la sonde lambda numero 3 sur le banc 1. Ce code signifie que la tension de signal de la sonde est en dessous du seuil minimal attendu. Sur une sonde lambda a tension (type zircone), une tension basse indique un melange pauvre (exces d'oxygene dans les gaz d'echappement). Si cette tension reste bloquee basse en permanence, soit la sonde est defaillante et ne detecte plus correctement l'oxygene, soit il y a effectivement un probleme d'exces d'air dans l'echappement (fuite). Cette sonde etant situee apres le systeme catalytique, elle ne participe pas a la regulation du melange mais surveille l'efficacite globale du systeme de depollution.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact sur les performances de conduite',
      'Emissions non surveillees correctement',
      'Echec potentiel au controle technique',
      'Consommation de carburant inchangee',
      'Ralenti et comportement moteur normaux',
      'Impossible de detecter un probleme du second catalyseur'
    ],
    causes: [
      'Sonde lambda numero 3 usee ou en fin de vie (signal bloque bas) (35% des cas)',
      'Fuite d\'echappement en amont de la sonde introduisant de l\'air (20% des cas)',
      'Connecteur de la sonde corrode ou avec faux contact (15% des cas)',
      'Cablage du signal de la sonde endommage ou court-circuite a la masse (12% des cas)',
      'Sonde contaminee par des depots (huile, silicone) (8% des cas)',
      'Element chauffant defaillant empechant la sonde d\'atteindre sa temperature (5% des cas)',
      'Catalyseur en amont tres efficace produisant tres peu d\'emissions residuelles (3% des cas)',
      'Probleme de masse ou de reference dans le circuit (2% des cas)'
    ],
    solutions: [
      'Verifier la tension du signal de la sonde avec un lecteur OBD (diagnostic 30-50 euros)',
      'Inspecter le systeme d\'echappement pour des fuites en amont de la sonde (gratuit)',
      'Verifier le connecteur de la sonde et le cablage (gratuit)',
      'Tester l\'element chauffant de la sonde (resistance 2-14 ohms)',
      'Remplacer la sonde lambda si le signal est bloque bas (60-200 euros)',
      'Reparer les fuites d\'echappement detectees (50-200 euros)',
      'Reparer le cablage si court-circuit a la masse identifie (30-100 euros)',
      'Nettoyer ou remplacer le connecteur corrode (10-30 euros)'
    ],
    riskExplanation: "Le P0143 est un code mineur qui n'affecte ni les performances ni la fiabilite du moteur. La sonde numero 3 ne participe pas a la regulation du melange carburant et sa defaillance n'a aucune consequence mecanique. Le risque est uniquement lie au controle technique (voyant moteur allume) et a l'impossibilite de surveiller l'efficacite du systeme catalytique complet. Si une fuite d'echappement est en cause, elle doit etre reparee pour des raisons de securite et de bruit. Reparation a planifier lors du prochain entretien.",
    faq: [
      {
        question: 'Une fuite d\'echappement peut-elle causer un P0143?',
        answer: 'Oui, une fuite d\'echappement situee entre le catalyseur et la sonde numero 3 peut introduire de l\'air ambiant (riche en oxygene) dans le flux d\'echappement. La sonde detecte cet exces d\'oxygene et indique un melange pauvre (tension basse), declenchant le P0143. Dans ce cas, le moteur fonctionne parfaitement et le catalyseur aussi, c\'est simplement l\'air parasite qui fausse la lecture. Inspectez les joints de raccord d\'echappement, les soudures du pot catalytique et les raccords flexibles pour localiser la fuite. Une reparation de fuite coute entre 50 et 200 euros.'
      },
      {
        question: 'Comment savoir si la sonde est vraiment defectueuse?',
        answer: 'Pour verifier si la sonde numero 3 est defectueuse, observez son signal en temps reel avec un lecteur OBD. Au ralenti moteur chaud, la tension doit etre relativement stable autour de 0,5-0,7V si le catalyseur fonctionne correctement. Si la tension est bloquee a 0V ou tres proche de 0V et ne varie jamais, la sonde est probablement defectueuse. Faites aussi un test en roulant: la tension doit legerement varier avec les conditions de conduite. Si elle reste figee, le remplacement est necessaire. Comparez egalement la lecture avec celle de la sonde 2 si possible.'
      },
      {
        question: 'La sonde numero 3 a-t-elle la meme duree de vie que les autres sondes?',
        answer: 'En general, la sonde numero 3 a une duree de vie similaire aux autres sondes lambda, soit environ 100 000 a 200 000 km. Etant placee plus loin dans le systeme d\'echappement, elle est exposee a des temperatures moins extremes que la sonde amont, ce qui peut legerement prolonger sa vie. Cependant, elle est aussi soumise a la corrosion et aux vibrations du systeme d\'echappement. La contamination par les residus d\'huile ou de liquide de refroidissement qui traversent le catalyseur peut aussi reduire sa duree de vie. Un entretien moteur regulier contribue a prolonger la vie de toutes les sondes.'
      },
      {
        question: 'Le P0143 peut-il etre confondu avec un probleme de catalyseur?',
        answer: 'Oui, un P0143 peut parfois masquer un probleme de catalyseur ou etre confondu avec un defaut catalytique. Si la sonde numero 3 est defectueuse et donne une fausse lecture, l\'ECU ne peut plus evaluer correctement l\'efficacite du second catalyseur. Inversement, un catalyseur extremement efficace qui convertit presque tout l\'oxygene peut legitimement produire un signal tres bas sur la sonde aval. Pour distinguer les deux, il faut d\'abord s\'assurer que la sonde fonctionne correctement (en la remplacant si necessaire) avant de conclure sur l\'etat du catalyseur.'
      },
      {
        question: 'Est-il legal de supprimer la sonde numero 3?',
        answer: 'Non, supprimer ou desactiver une sonde lambda est illegal dans la plupart des pays europeens car cela fait partie du systeme anti-pollution homologue du vehicule. Meme si la sonde numero 3 n\'affecte pas les performances, sa suppression constitue une modification du systeme d\'echappement qui peut entrainer un refus au controle technique et une amende en cas de controle routier. De plus, sans cette sonde, l\'ECU ne peut plus surveiller l\'efficacite du systeme catalytique, ce qui va a l\'encontre des normes de protection de l\'environnement. Remplacez la sonde plutot que de la supprimer.'
      }
    ],
    relatedCodes: ['P0142', 'P0144', 'P0136', 'P0137', 'P0420']
  },
  P0144: {
    code: 'P0144',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0144 indique une tension trop elevee dans le circuit de la sonde lambda numero 3 sur le banc 1. Ce code est l'oppose du P0143 et signifie que la tension de signal de la sonde depasse le seuil maximal attendu. Sur une sonde lambda a tension zircone, une tension elevee (proche de 1V) indique un melange riche (manque d'oxygene dans les gaz d'echappement apres le catalyseur). Si cette tension reste bloquee haute en permanence, soit la sonde est defaillante, soit le catalyseur ne convertit plus correctement les gaz, soit il y a un court-circuit dans le cablage. Comme pour le P0143, cette sonde ne participe pas a la regulation du melange mais surveille le systeme catalytique.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact direct sur les performances de conduite',
      'Surveillance du catalyseur non fonctionnelle',
      'Echec possible au controle technique',
      'Consommation de carburant inchangee',
      'Comportement moteur normal',
      'Emissions potentiellement non conformes'
    ],
    causes: [
      'Sonde lambda numero 3 defectueuse avec signal bloque haut (35% des cas)',
      'Court-circuit dans le cablage du signal de la sonde (20% des cas)',
      'Sonde contaminee par de l\'huile brulant dans le catalyseur (15% des cas)',
      'Catalyseur sature ne convertissant plus les hydrocarbures (10% des cas)',
      'Connecteur avec court-circuit entre fils (8% des cas)',
      'Fuite d\'huile moteur atteignant le systeme d\'echappement (5% des cas)',
      'Element chauffant defaillant avec derive du signal (5% des cas)',
      'Probleme de reference de tension dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Observer le signal de la sonde en temps reel avec lecteur OBD (diagnostic 30-50 euros)',
      'Verifier le cablage pour court-circuit (diagnostic 30-60 euros)',
      'Inspecter le connecteur pour fils en contact (gratuit)',
      'Remplacer la sonde lambda si signal bloque haut (60-200 euros)',
      'Verifier l\'etat du catalyseur si suspicion de saturation (diagnostic 50-100 euros)',
      'Reparer les fuites d\'huile si l\'huile atteint l\'echappement (variable selon source)',
      'Reparer le cablage si court-circuit identifie (30-100 euros)',
      'Nettoyer ou remplacer le connecteur (10-30 euros)'
    ],
    riskExplanation: "Le P0144 est un code mineur sans consequence mecanique pour le moteur. La sonde numero 3 etant une sonde de surveillance, sa defaillance n'affecte pas la conduite. Si la cause reelle est un catalyseur sature, celui-ci ne sera plus surveille et les emissions resteront non conformes. Le seul risque concret est l'echec au controle technique en raison du voyant moteur allume. La reparation est generalement simple et le cout modere. Intervention a planifier dans les 2 mois ou avant le prochain controle technique.",
    faq: [
      {
        question: 'Une tension elevee en permanence indique-t-elle un catalyseur defectueux?',
        answer: 'Pas necessairement. Une tension bloquee haute sur la sonde numero 3 peut indiquer soit un probleme de sonde (defaut le plus frequente), soit un catalyseur sature. Pour distinguer les deux, remplacez d\'abord la sonde (c\'est moins cher que le catalyseur). Si le signal redevient normal avec une sonde neuve, le catalyseur est bon. Si le signal reste haut avec une sonde neuve, le catalyseur est probablement defaillant. Vous pouvez aussi verifier l\'etat du catalyseur avec un test de contre-pression d\'echappement ou un test de temperature entree-sortie avec thermometre infrarouge.'
      },
      {
        question: 'L\'huile moteur peut-elle contaminer la sonde lambda 3?',
        answer: 'Oui, si le moteur consomme de l\'huile (par les segments uses, les guides de soupapes ou le turbo), une partie de cette huile brulee traverse les catalyseurs et ses residus se deposent sur les sondes lambda. Ces depots forment une couche qui modifie les proprietes de la sonde et peut bloquer son signal en position haute. La sonde contaminee ne peut generalement pas etre nettoyee efficacement et doit etre remplacee. Surtout, il faut aussi traiter la cause de la consommation d\'huile pour eviter que la nouvelle sonde soit contaminee a son tour.'
      },
      {
        question: 'Quelle est la difference entre un P0144 et un P0143?',
        answer: 'Le P0143 indique une tension trop basse (signal bloque bas, vers 0V) sur la sonde lambda 3, ce qui est generalement interprete comme un melange pauvre ou un exces d\'oxygene. Le P0144 indique une tension trop haute (signal bloque haut, vers 1V), interprete comme un melange riche ou un manque d\'oxygene. Les deux codes peuvent etre causes par une sonde defectueuse mais orientent le diagnostic dans des directions differentes. Un P0143 fait suspecter une fuite d\'echappement ou un court-circuit a la masse, tandis qu\'un P0144 oriente vers un catalyseur sature ou un court-circuit au positif.'
      },
      {
        question: 'Le P0144 affecte-t-il la consommation de carburant?',
        answer: 'Non, le P0144 n\'affecte pas la consommation de carburant car la sonde numero 3 ne participe pas a la regulation du melange air-carburant. Seule la sonde numero 1 (amont, avant le premier catalyseur) est utilisee par l\'ECU pour ajuster l\'injection en boucle fermee. La sonde 3 est exclusivement dediee a la surveillance du systeme catalytique. Son defaut ne modifie aucun parametre d\'injection ni d\'allumage. Votre consommation restera exactement la meme que le P0144 soit present ou non.'
      },
      {
        question: 'Combien de temps une sonde lambda dure-t-elle generalement?',
        answer: 'La duree de vie moyenne d\'une sonde lambda est de 100 000 a 200 000 km pour les sondes d\'origine de bonne qualite. La sonde numero 3, etant placee plus en aval du systeme d\'echappement, est soumise a des conditions moins severes que la sonde amont et peut durer un peu plus longtemps. Les facteurs qui reduisent la duree de vie incluent: consommation d\'huile moteur, utilisation de carburant de mauvaise qualite, fuites de liquide de refroidissement dans la combustion, et utilisation de silicone non adapte pour les joints moteur. Les sondes generiques bon marche durent souvent moins longtemps (50 000-100 000 km).'
      }
    ],
    relatedCodes: ['P0142', 'P0143', 'P0138', 'P0420', 'P0145']
  },
  P0145: {
    code: 'P0145',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0145 signale une reponse trop lente de la sonde lambda numero 3 sur le banc 1. L'ECU a detecte que cette sonde met trop de temps a reagir aux changements de composition des gaz d'echappement. Une sonde lambda en bon etat doit repondre rapidement (en moins de 100 millisecondes) aux variations du rapport air-carburant. Quand la reponse est lente, la sonde ne peut plus surveiller correctement l'efficacite du catalyseur car ses lectures sont en retard par rapport a la realite. Ce defaut est generalement cause par le vieillissement de la sonde dont l'element sensible en zircone perd sa reactivite, ou par une contamination qui bloque partiellement la surface de detection.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun symptome de conduite perceptible',
      'Surveillance du catalyseur imprecise',
      'Emissions potentiellement non conformes',
      'Consommation de carburant inchangee',
      'Performances moteur normales',
      'Echec possible au controle technique'
    ],
    causes: [
      'Sonde lambda vieillissante avec element sensible degrade (40% des cas)',
      'Contamination de la sonde par des depots (huile, silicone, plomb) (20% des cas)',
      'Element chauffant partiellement defaillant ne rechauffant pas suffisamment (15% des cas)',
      'Fuite d\'echappement mineure diluant les gaz (10% des cas)',
      'Connecteur avec haute resistance ralentissant le signal (8% des cas)',
      'Sonde de remplacement de qualite inferieure (5% des cas)',
      'Catalyseur en amont modifiant la composition des gaz de maniere inhabituelle (2% des cas)'
    ],
    solutions: [
      'Observer le temps de reponse de la sonde avec une valise diagnostique avancee (diagnostic 50-100 euros)',
      'Remplacer la sonde lambda numero 3 (solution la plus courante) (60-200 euros)',
      'Verifier et reparer les fuites d\'echappement eventuelles (50-200 euros)',
      'Inspecter le connecteur et nettoyer les contacts (gratuit)',
      'Tester l\'element chauffant de la sonde (2-14 ohms normal)',
      'Verifier l\'absence de consommation d\'huile excessive (diagnostic 30-50 euros)',
      'Choisir une sonde de remplacement de qualite OEM (60-150 euros)'
    ],
    riskExplanation: "Le P0145 n'affecte pas le fonctionnement du moteur car la sonde numero 3 ne participe pas a la regulation du melange. Le risque est que le catalyseur ne soit plus surveille correctement, ce qui signifie qu'une degradation du catalyseur pourrait passer inapercue. L'impact environnemental est reel car les emissions ne sont plus controlees de maniere fiable. Le voyant moteur allume empeche le passage du controle technique. La reparation est simple et consiste generalement a remplacer la sonde. Intervention sous 2 mois ou avant le CT.",
    faq: [
      {
        question: 'Comment l\'ECU mesure-t-il le temps de reponse de la sonde?',
        answer: 'L\'ECU surveille la frequence et la vitesse des oscillations de la tension de la sonde. Une sonde en bon etat oscille entre ses valeurs haute et basse en moins de 100 millisecondes. L\'ECU mesure le temps necessaire pour que la tension passe de la plage basse (inferieure a 0,3V) a la plage haute (superieure a 0,6V) et vice versa. Si ce temps de transition depasse le seuil defini par le constructeur pendant un nombre determine de cycles, le P0145 est enregistre. Ce test est effectue automatiquement pendant la conduite et ne necessite aucune action du conducteur.'
      },
      {
        question: 'Pourquoi une sonde lambda ralentit-elle avec l\'age?',
        answer: 'L\'element sensible de la sonde lambda est compose de zircone (dioxyde de zirconium) recouvert de couches poreuses de platine. Avec le temps et l\'exposition aux temperatures extremes et aux gaz d\'echappement, cette structure poreuse se colmate progressivement, les depots de carbone et d\'autres residus s\'accumulent, et le platine perd son activite catalytique. Tout cela ralentit la diffusion de l\'oxygene vers l\'element sensible et donc la vitesse de reponse. C\'est un processus naturel de vieillissement qui finit par affecter toutes les sondes lambda apres un certain kilometrage.'
      },
      {
        question: 'Peut-on nettoyer une sonde lambda pour restaurer sa reactivite?',
        answer: 'En theorie, certaines methodes de nettoyage existent (trempage dans un acide doux, nettoyage avec un chalumeau), mais en pratique elles sont rarement efficaces et peuvent endommager definitivement la sonde. Le vieillissement de l\'element sensible est un processus irreversible. La contamination par le silicone est egalement permanente. Etant donne le cout relativement modeste d\'une sonde neuve (60-200 euros), le remplacement est toujours preferable au nettoyage. Une sonde neuve fonctionnera de maniere optimale et durera de nombreuses annees.'
      },
      {
        question: 'Le P0145 est-il specifique au banc 1?',
        answer: 'Le P0145 est specifiquement attribue au banc 1. Pour le banc 2 d\'un moteur en V, le code equivalent serait un code dans la serie P016x (sonde 3, banc 2). Si votre vehicule est equipe d\'un moteur en ligne, il n\'a qu\'un seul banc et le P0145 est le seul code applicable. Notez que la troisieme sonde n\'est pas presente sur tous les vehicules: beaucoup de moteurs n\'ont que deux sondes (une amont et une aval) et ne peuvent pas generer de codes P014x au-dela du P0141.'
      },
      {
        question: 'Faut-il remplacer la sonde par le meme type (large bande ou bande etroite)?',
        answer: 'Il est imperatif de remplacer la sonde par exactement le meme type. Les sondes lambda existent en deux categories principales: les sondes a bande etroite (narrowband) qui oscillent entre 0 et 1V, et les sondes a large bande (wideband) qui fournissent un signal proportionnel plus precis. Ces deux types ne sont pas interchangeables car l\'ECU est programme pour interpreter un type specifique de signal. Installez toujours la reference exacte specifiee pour votre vehicule. Les catalogues de pieces indiquent la correspondance correcte en fonction du numero de chassis ou de la motorisation.'
      }
    ],
    relatedCodes: ['P0142', 'P0143', 'P0144', 'P0139', 'P0420']
  },
  P0146: {
    code: 'P0146',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0146 indique un signal insuffisant ou absent de la sonde lambda numero 3 sur le banc 1. L'ECU a detecte que le signal de cette sonde ne varie pas suffisamment ou reste bloque a une valeur fixe pendant une periode prolongee. Une sonde lambda fonctionnelle doit osciller entre ses valeurs haute et basse en reponse aux changements naturels de la composition des gaz d'echappement. Si le signal ne varie pas, la sonde ne detecte plus les fluctuations de l'oxygene dans les gaz et ne peut plus remplir sa fonction de surveillance du catalyseur. Ce defaut est similaire au P0140 mais concerne la troisieme sonde. Il est souvent le signe d'une sonde lambda en fin de vie ou d'un probleme electrique dans le circuit.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Aucun impact sur la conduite au quotidien',
      'Surveillance du systeme catalytique non fonctionnelle',
      'Echec au controle technique (voyant allume)',
      'Consommation et performances inchangees',
      'Emissions potentiellement non conformes sans surveillance',
      'Aucun symptome perceptible par le conducteur'
    ],
    causes: [
      'Sonde lambda vieille avec element sensible inactif (40% des cas)',
      'Sonde lambda contaminee par huile, silicone ou additifs (20% des cas)',
      'Element chauffant defaillant empechant la sonde d\'atteindre sa temperature (15% des cas)',
      'Connecteur corrode ou avec haute resistance (10% des cas)',
      'Fuite d\'echappement importante diluant les gaz (5% des cas)',
      'Cablage du signal endommage (5% des cas)',
      'Catalyseur extremement efficace produisant un signal quasi constant (3% des cas)',
      'Probleme de masse sur le circuit de la sonde (2% des cas)'
    ],
    solutions: [
      'Observer le signal de la sonde en temps reel avec un lecteur OBD (diagnostic 30-50 euros)',
      'Tester l\'element chauffant de la sonde (resistance 2-14 ohms)',
      'Remplacer la sonde lambda numero 3 (60-200 euros)',
      'Inspecter le connecteur et nettoyer les contacts (gratuit)',
      'Verifier l\'absence de fuite d\'echappement (diagnostic gratuit visuel)',
      'Reparer le cablage si endommage (30-100 euros)',
      'Verifier le point de masse du circuit (gratuit)',
      'Utiliser une sonde de qualite OEM pour le remplacement'
    ],
    riskExplanation: "Le P0146 est un code modere qui n'affecte pas le fonctionnement mecanique du moteur. La sonde numero 3 etant dediee a la surveillance, son absence de signal n'a aucune consequence sur la conduite. Le risque est que le second catalyseur ne soit plus surveille et qu'une defaillance eventuelle passe inapercue, augmentant les emissions polluantes. Le voyant moteur allume constitue le principal inconvenient pratique (echec au CT). La reparation consiste generalement a remplacer la sonde, une operation simple et abordable. Intervention dans les 2 mois.",
    faq: [
      {
        question: 'Quelle est la difference entre le P0145 et le P0146?',
        answer: 'Le P0145 indique que la sonde repond mais trop lentement (temps de reponse excessif), tandis que le P0146 indique que la sonde ne varie quasiment pas (activite insuffisante). Dans les deux cas, la sonde est en fin de vie mais a des stades differents de degradation. Le P0145 est un stade intermediaire ou la sonde fonctionne encore partiellement. Le P0146 est un stade plus avance ou la sonde a pratiquement cesse de fonctionner. Le traitement est le meme dans les deux cas: remplacement de la sonde lambda.'
      },
      {
        question: 'Un signal constant de la sonde peut-il etre normal?',
        answer: 'Dans certaines conditions specifiques, un signal relativement stable de la sonde numero 3 peut etre normal. Si le catalyseur en amont est tres efficace et convertit presque tout l\'oxygene residuel, le signal aval peut etre assez stable autour de 0,6-0,7V. Cependant, meme dans ce cas, il devrait y avoir de legeres oscillations. Un signal completement fixe (sans aucune variation) n\'est jamais normal et indique un probleme de sonde. L\'ECU distingue entre un signal stable (normal) et un signal fige (defaut) grace a des seuils de variation minimale.'
      },
      {
        question: 'Puis-je utiliser une sonde universelle au lieu d\'une sonde specifique?',
        answer: 'Il existe des sondes lambda universelles qui peuvent etre adaptees a de nombreux vehicules en soudant ou coupant le connecteur du faisceau. Bien que moins couteuses (30-80 euros), elles presentent des inconvenients: la longueur des fils peut etre differente, le connecteur soude n\'est pas etanche, et la sonde peut ne pas correspondre exactement aux specifications du vehicule. Pour la sonde numero 3 qui est uniquement de surveillance, une sonde universelle de qualite peut convenir. Cependant, une sonde specifique avec connecteur d\'origine est toujours preferable pour la fiabilite et la facilite d\'installation.'
      },
      {
        question: 'Le P0146 peut-il declencher d\'autres codes?',
        answer: 'Oui, un P0146 peut etre accompagne d\'autres codes. Si la sonde 3 ne fonctionne plus, l\'ECU ne peut plus evaluer l\'efficacite du second catalyseur et peut generer un code de performance catalytique (type P0420 ou equivalent pour le second catalyseur). De plus, si l\'element chauffant est aussi defaillant, un P0147 (defaut de chauffage sonde 3) peut s\'ajouter. Il est courant de voir plusieurs codes lies a la meme sonde. Reparer le P0146 (remplacement de la sonde) resout generalement tous les codes associes d\'un coup.'
      },
      {
        question: 'Combien de temps met-on pour remplacer la sonde lambda 3?',
        answer: 'Le temps de remplacement depend principalement de l\'accessibilite de la sonde. Etant placee apres le second catalyseur, elle se trouve generalement sous le vehicule. Sur un pont elevateur, l\'operation prend 20 a 45 minutes. Sans elevateur, il faut soulever le vehicule sur chandelles, ce qui ajoute du temps. La principale difficulte est souvent le devissage de l\'ancienne sonde grippee par la chaleur et la corrosion. Appliquez du degraippant (type WD-40 ou Penetrating Oil) plusieurs heures avant l\'intervention. Utilisez une cle a sonde lambda de 22mm pour ne pas endommager les fils.'
      }
    ],
    relatedCodes: ['P0142', 'P0143', 'P0144', 'P0145', 'P0140']
  },
  P0147: {
    code: 'P0147',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0147 signale un dysfonctionnement du circuit de chauffage de la sonde lambda numero 3, banc 1. Comme pour la sonde aval (P0141), l'element chauffant integre a cette troisieme sonde accelere sa montee en temperature pour la rendre operationnelle rapidement. Le P0147 est declenche lorsque l'ECU detecte un probleme dans le circuit electrique de cet element chauffant: il peut etre en circuit ouvert (element brule), en court-circuit, ou tirer un courant anormal. Sans chauffage fonctionnel, la sonde numero 3 met beaucoup plus de temps a atteindre sa temperature de fonctionnement (300-400 degres) et depend entierement de la chaleur des gaz d'echappement. Etant placee loin du moteur, cette sonde peut mettre 10 a 15 minutes a se rechauffer naturellement.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun symptome de conduite perceptible',
      'Sonde lambda 3 non operationnelle pendant les premieres minutes',
      'Emissions non surveillees pendant la phase de chauffe',
      'Consommation de carburant inchangee',
      'Performances moteur normales',
      'Echec au controle technique en raison du voyant allume'
    ],
    causes: [
      'Element chauffant de la sonde brule ou coupe (40% des cas)',
      'Fusible du circuit de chauffage grille (12% des cas)',
      'Connecteur corrode ou avec faux contact (15% des cas)',
      'Cablage endommage dans le circuit de chauffage (12% des cas)',
      'Relais de chauffage des sondes defaillant (8% des cas)',
      'Sonde de mauvaise qualite avec element chauffant fragile (8% des cas)',
      'Court-circuit dans le cablage (3% des cas)',
      'Defaillance du circuit de commande ECU (2% des cas)'
    ],
    solutions: [
      'Verifier le fusible du circuit de chauffage des sondes (gratuit)',
      'Mesurer la resistance de l\'element chauffant: doit etre 2-14 ohms (diagnostic gratuit)',
      'Inspecter le connecteur et les fils de la sonde (gratuit)',
      'Verifier l\'alimentation 12V sur le connecteur contact mis (diagnostic gratuit)',
      'Remplacer la sonde lambda si l\'element chauffant est HS (60-200 euros)',
      'Remplacer le fusible grille et verifier l\'absence de court-circuit (1-5 euros)',
      'Reparer le cablage endommage (30-100 euros)',
      'Verifier le relais de chauffage (15-40 euros si remplacement)'
    ],
    riskExplanation: "Le P0147 est un code mineur sans consequence sur le moteur. L'element chauffant de la sonde 3 ne servant qu'a accelerer la mise en service de cette sonde de surveillance, son defaut n'affecte ni la conduite ni les performances. La sonde finira par se rechauffer naturellement grace aux gaz d'echappement, meme si cela prend plus de temps. Le risque est uniquement lie au controle technique et a l'absence de surveillance du catalyseur pendant les premieres minutes de conduite. Reparation a planifier avant le CT ou dans les 2-3 mois.",
    faq: [
      {
        question: 'Le P0147 est-il le meme que le P0141 mais pour une sonde differente?',
        answer: 'Oui, le mecanisme est identique. Le P0141 concerne le chauffage de la sonde lambda 2 (aval, apres le premier catalyseur) tandis que le P0147 concerne le chauffage de la sonde lambda 3 (apres le second catalyseur ou plus en aval). Les causes, symptomes, diagnostics et solutions sont les memes. Les deux codes indiquent un element chauffant defaillant dans le circuit d\'une sonde de surveillance. La seule difference est la localisation physique de la sonde et donc son accessibilite pour la reparation.'
      },
      {
        question: 'Pourquoi l\'element chauffant est-il encore plus important sur la sonde 3?',
        answer: 'La sonde numero 3 etant la plus eloignee du moteur dans le systeme d\'echappement, les gaz qui l\'atteignent sont deja significativement refroidis. Sans element chauffant, cette sonde peut mettre 10 a 15 minutes ou plus pour atteindre sa temperature de fonctionnement (300-400 degres) par la seule chaleur des gaz. C\'est beaucoup plus long que la sonde amont (2-3 minutes sans chauffage) ou la sonde aval (5-8 minutes). L\'element chauffant permet de reduire ce temps a 30-60 secondes, ce qui est essentiel pour la surveillance rapide des emissions apres le demarrage.'
      },
      {
        question: 'Puis-je continuer a rouler longtemps avec un P0147?',
        answer: 'Oui, vous pouvez rouler indefiniment avec un P0147 sans aucun risque pour le moteur ou le vehicule. La sonde finira toujours par se rechauffer grace aux gaz d\'echappement et fonctionnera normalement une fois chaude. Le seul probleme est que pendant les 10-15 premieres minutes de conduite, la surveillance du catalyseur n\'est pas active. Si cela ne vous pose pas de probleme d\'un point de vue environnemental et que votre controle technique n\'est pas imminent, vous pouvez planifier la reparation a votre convenance. Le cout de remplacement est modeste (60-200 euros pour la sonde).'
      },
      {
        question: 'Le fusible des sondes lambda est-il souvent la cause?',
        answer: 'Le fusible est la cause dans environ 12 pourcent des cas et c\'est la premiere chose a verifier car c\'est gratuit. Le fusible est generalement partage entre plusieurs sondes lambda, donc si un seul fusible grille, les chauffages de toutes les sondes sont affectes et vous pouvez voir apparaitre simultanement des codes P0135, P0141 et P0147. Si le fusible grille a nouveau immediatement apres remplacement, il y a un court-circuit dans le circuit qu\'il faut localiser avant de remettre un fusible. Consultez le schema electrique de votre vehicule pour identifier quel fusible alimente les sondes.'
      },
      {
        question: 'Les sondes lambda ont-elles toutes un element chauffant?',
        answer: 'Non, les sondes lambda tres anciennes (avant les annees 1990-2000 environ) n\'avaient pas d\'element chauffant et comptaient uniquement sur la chaleur des gaz d\'echappement pour fonctionner. Les sondes modernes (post-2000) sont pratiquement toutes equipees d\'un element chauffant car les normes anti-pollution exigent que la surveillance des emissions soit active dans les 30 a 60 secondes suivant le demarrage. Les codes P0135, P0141 et P0147 ne peuvent apparaitre que sur des sondes chauffees. Si votre vehicule est recent, toutes ses sondes lambda sont chauffees.'
      }
    ],
    relatedCodes: ['P0141', 'P0142', 'P0146', 'P0135', 'P0161']
  },
  P0148: {
    code: 'P0148',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0148 signale une erreur de debit de carburant, indiquant que la quantite de carburant delivree par les injecteurs ne correspond pas a ce qui est commande par l'ECU. Ce code est specifique aux moteurs diesel et detecte un ecart entre la quantite de carburant injectee reellement et la quantite theorique calculee par l'ECU. L'ECU utilise plusieurs parametres pour verifier la coherence de l'injection: la pression de rampe, le temps d'ouverture des injecteurs, la vitesse de rotation du moteur et les corrections de la sonde lambda ou du capteur NOx. Quand l'ecart depasse un certain seuil, le P0148 est enregistre. Ce defaut peut indiquer un injecteur defaillant, une pompe haute pression usee ou un probleme de regulation de la pression de carburant.",
    symptoms: [
      'Voyant moteur allume avec possible mode degrade',
      'Fumee noire, blanche ou bleue anormale a l\'echappement',
      'Perte de puissance notable en acceleration',
      'Ralenti irregulier avec vibrations',
      'Consommation de carburant tres augmentee ou tres reduite',
      'A-coups en conduite a vitesse stabilisee',
      'Bruit de claquement excessif du moteur diesel'
    ],
    causes: [
      'Un ou plusieurs injecteurs defectueux delivrant trop ou pas assez de carburant (35% des cas)',
      'Pompe haute pression avec usure interne (20% des cas)',
      'Regulateur de pression de carburant defaillant (15% des cas)',
      'Capteur de pression rampe donnant des valeurs incorrectes (10% des cas)',
      'Filtre a carburant colmate reduisant le debit (8% des cas)',
      'Air dans le circuit de carburant (5% des cas)',
      'Probleme de synchronisation des injecteurs dans l\'ECU (5% des cas)',
      'Carburant de mauvaise qualite ou contamine (2% des cas)'
    ],
    solutions: [
      'Effectuer un diagnostic complet avec valise constructeur (80-150 euros)',
      'Tester le retour de debit de chaque injecteur sur banc d\'essai (100-200 euros)',
      'Remplacer les injecteurs defectueux (200-500 euros par injecteur)',
      'Verifier et remplacer le filtre a carburant (20-60 euros)',
      'Tester la pression de rampe et le regulateur (diagnostic 50-100 euros)',
      'Purger le circuit de carburant pour eliminer l\'air (30-60 euros)',
      'Remplacer le capteur de pression rampe si defectueux (80-200 euros)',
      'Faire reconditionner les injecteurs si possible (100-200 euros par injecteur)'
    ],
    riskExplanation: "Le P0148 est un code serieux car un debit de carburant incorrect peut endommager le moteur. Trop de carburant dilue l'huile moteur, reduit la lubrification et peut provoquer un emballement du moteur diesel. Trop peu de carburant entraine des contraintes thermiques elevees. Un injecteur qui fuit peut provoquer un noyage du cylindre concerne, entrainant un coup de liquide potentiellement destructeur. Le catalyseur et le filtre a particules sont aussi menaces par une combustion incorrecte. Reparation a effectuer dans la semaine, idealement dans les jours qui suivent.",
    faq: [
      {
        question: 'Un injecteur qui delivre trop de carburant peut-il diluer l\'huile moteur?',
        answer: 'Oui, c\'est un risque reel et serieux. Si un injecteur diesel delivre trop de carburant, une partie de cet exces de carburant ne brule pas completement et descend le long des parois du cylindre, passant les segments pour se melanger a l\'huile moteur. L\'huile se dilue, perd ses proprietes lubrifiantes et son niveau monte anormalement sur la jauge. Cette dilution peut provoquer une usure acceleree des paliers, des segments et du vilebrequin. Surveillez votre niveau d\'huile: s\'il monte au lieu de baisser, c\'est un signe de dilution par le carburant. Faites une vidange urgente et reparez l\'injecteur.'
      },
      {
        question: 'Qu\'est-ce qu\'un emballement moteur diesel et est-ce lie au P0148?',
        answer: 'Un emballement moteur diesel est un phenomene dangereux ou le moteur monte en regime de maniere incontrolable et ne peut plus etre arrete. Cela se produit quand le moteur recoit une source de carburant non controlee, comme de l\'huile moteur aspiree par l\'admission en cas de turbo defaillant, ou un exces de carburant d\'un injecteur bloque ouvert. Le P0148 peut etre un precurseur d\'emballement si un injecteur delivre massivement trop de carburant. Si vous constatez que le moteur monte en regime sans que vous appuyiez sur l\'accelerateur, coupez immediatement l\'alimentation en air (bouchez l\'admission) ou enclenchez une vitesse elevee avec le frein serre.'
      },
      {
        question: 'Comment tester les injecteurs sur un banc d\'essai?',
        answer: 'Le test sur banc d\'essai est la methode la plus precise pour evaluer l\'etat des injecteurs diesel. Les injecteurs sont demontes du moteur et installes sur un banc qui simule les conditions reelles de fonctionnement. Le banc mesure le debit d\'injection (quantite de carburant delivree par coup), le debit de retour (fuite interne), la pression d\'ouverture et la forme du jet de pulverisation. Les mesures sont comparees aux specifications du constructeur. Un injecteur qui delivre plus de 10 a 15 pourcent d\'ecart par rapport a la specification doit etre reconditionne ou remplace. Ce test coute entre 100 et 200 euros pour l\'ensemble des injecteurs.'
      },
      {
        question: 'Le carburant de mauvaise qualite peut-il causer un P0148?',
        answer: 'Oui, un carburant contamine (eau, particules, biocarburant de mauvaise qualite) peut perturber le debit d\'injection de plusieurs manieres. L\'eau dans le carburant modifie les proprietes de combustion et peut endommager les injecteurs. Les particules peuvent obstruer partiellement les buses d\'injection, reduisant le debit. Un carburant avec un indice de cetane trop bas modifie le delai d\'inflammation. Si le P0148 apparait juste apres un plein dans une station inhabituelle, vidangez le reservoir et remplacez le filtre a carburant. Faites un plein avec du carburant de qualite et observez si le code disparait.'
      },
      {
        question: 'Le P0148 est-il specifique aux moteurs diesel?',
        answer: 'Le P0148 est principalement associe aux moteurs diesel common rail mais peut theoriquement apparaitre sur certains moteurs essence a injection directe haute pression. Sur les diesels, le code est plus courant car le systeme d\'injection fonctionne a des pressions extremement elevees (jusqu\'a 2000 bars) et les tolerances de debit sont tres serrees. Les moteurs essence a injection indirecte (injection dans le collecteur) n\'utilisent generalement pas ce code car les systemes de controle de debit sont differents. Si vous avez un P0148 sur un moteur essence, consultez la documentation specifique du constructeur.'
      }
    ],
    relatedCodes: ['P0087', 'P0088', 'P0089', 'P0201', 'P0093']
  },
  P0149: {
    code: 'P0149',
    severity: { level: 3, label: 'Serieux', color: 'danger', icon: '🔴' },
    introduction: "Le code P0149 signale une erreur de calage de l'injection de carburant, indiquant que le moment precis de l'injection dans les cylindres ne correspond pas a ce qui est commande par l'ECU. Ce code est specifique aux moteurs diesel ou le calage de l'injection est crucial pour le bon fonctionnement du moteur. Le diesel s'enflamme par compression et le moment exact de l'injection determine la qualite de la combustion, les emissions, le rendement et le bruit du moteur. L'ECU compare les signaux des capteurs d'arbre a cames, de vilebrequin et de pression de rampe pour verifier que l'injection se produit au bon moment. Un ecart de calage de quelques degres peut avoir des consequences significatives sur les performances et les emissions.",
    symptoms: [
      'Voyant moteur allume avec possible mode degrade',
      'Claquement excessif du moteur diesel (injection trop avancee)',
      'Fumee noire abondante a l\'echappement (injection mal cible)',
      'Perte de puissance significative',
      'Demarrage tres difficile, surtout a froid',
      'Ralenti irregulier avec vibrations importantes',
      'Consommation de carburant augmentee de 10 a 25 pourcent',
      'Surchauffe possible du moteur si injection tres decalee'
    ],
    causes: [
      'Chaine ou courroie de distribution deplacee ou etiree (25% des cas)',
      'Capteur d\'arbre a cames defectueux donnant un signal incorrect (20% des cas)',
      'Capteur de vilebrequin defectueux (15% des cas)',
      'Pompe haute pression avec calage interne decale (15% des cas)',
      'Pignon ou roue dentee de distribution endommage (10% des cas)',
      'ECU avec cartographie d\'injection corrompue (5% des cas)',
      'Injecteurs avec delai d\'ouverture excessif (5% des cas)',
      'Cablage des capteurs de position endommage (5% des cas)'
    ],
    solutions: [
      'Verifier le calage de la distribution (chaine ou courroie) (diagnostic 50-100 euros)',
      'Tester les capteurs d\'arbre a cames et de vilebrequin (diagnostic 30-60 euros)',
      'Verifier les signaux des capteurs avec oscilloscope (diagnostic 80-150 euros)',
      'Recaler la distribution si decalee (200-800 euros selon type)',
      'Remplacer le capteur d\'arbre a cames si defectueux (40-120 euros)',
      'Remplacer le capteur de vilebrequin si defectueux (40-120 euros)',
      'Verifier le calage interne de la pompe haute pression (diagnostic specialiste 100-200 euros)',
      'Reprogrammer l\'ECU si la cartographie est corrompue (100-300 euros)'
    ],
    riskExplanation: "Le P0149 est un code serieux car un calage d'injection incorrect sur un moteur diesel a des consequences importantes. Une injection trop avancee cree des pressions de combustion excessives qui surchargent les pistons, les bielles et le vilebrequin, pouvant mener a une casse mecanique. Une injection trop retardee entraine une perte de puissance massive, une surconsommation et des temperatures d'echappement dangereusement elevees pouvant endommager le turbo et le catalyseur. Si la distribution est en cause, continuer a rouler risque d'aggraver le decalage. Reparation urgente sous quelques jours.",
    faq: [
      {
        question: 'Un calage d\'injection incorrect peut-il casser le moteur?',
        answer: 'Oui, dans les cas extremes. Une injection tres avancee cree un pic de pression de combustion qui peut depasser les limites mecaniques du moteur, risquant de casser un piston, plier une bielle ou endommager le vilebrequin. C\'est plus rare sur les moteurs modernes avec gestion electronique mais reste possible si le decalage est important. Une injection tres retardee est moins destructrice mecaniquement mais peut surchauffer le turbo et le catalyseur a des temperatures qui les endommagent. Dans tous les cas, un P0149 ne doit pas etre ignore et necessite une intervention rapide.'
      },
      {
        question: 'Comment verifier le calage de la distribution sur un moteur diesel?',
        answer: 'Le calage de la distribution se verifie en alignant les reperes de calage sur les poulies d\'arbre a cames et de vilebrequin. Chaque moteur a ses propres reperes et sa procedure specifique documentee dans le manuel d\'atelier. Des outils de calage specifiques au moteur (broches, gabarits, reglettes) sont souvent necessaires pour immobiliser les arbres dans la position correcte. Un mecanicien peut aussi utiliser un oscilloscope pour comparer les signaux des capteurs d\'arbre a cames et de vilebrequin et verifier leur synchronisation. Ce diagnostic coute entre 50 et 100 euros au garage.'
      },
      {
        question: 'Le P0149 est-il lie a la courroie ou a la chaine de distribution?',
        answer: 'Le P0149 peut etre cause par un saut de dent sur la courroie de distribution ou un etirement de la chaine de distribution. Sur les moteurs a courroie, un tendeur defaillant ou une courroie usee peut permettre un saut d\'une ou plusieurs dents, decalant le calage. Sur les moteurs a chaine, l\'etirement progressif de la chaine modifie le calage de maniere graduelle. Dans les deux cas, le calage de l\'injection est affecte. Un saut de courroie est plus soudain et plus grave, tandis qu\'un etirement de chaine est plus progressif. Verifiez l\'etat et la tension de votre systeme de distribution.'
      },
      {
        question: 'La pompe haute pression peut-elle avoir un calage interne decale?',
        answer: 'Oui, sur certains moteurs diesel, la pompe haute pression est entrained par la distribution et son calage interne affecte le moment de la montee en pression dans les cylindres. Si la fixation de la pompe a bouge, si l\'engrenage d\'entrainement est endommage ou si le systeme d\'avance interne est defaillant, le calage de l\'injection est modifie. Le verification du calage de la pompe necessite un outillage specifique et une expertise de specialiste diesel. Cette cause est plus frequente sur les anciens systemes d\'injection diesel (pompe distributive) mais existe aussi sur les systemes common rail modernes.'
      },
      {
        question: 'Dois-je faire remorquer le vehicule avec un P0149?',
        answer: 'Si le moteur claque violemment, fume excessivement ou a des difficultes evidentes de fonctionnement, il est prudent de limiter la conduite au strict minimum ou de faire remorquer le vehicule. Un calage tres decale peut endommager le moteur en quelques kilometres. Si les symptomes sont legers (leger claquement supplementaire, petite perte de puissance), vous pouvez rouler prudemment jusqu\'au garage le plus proche en evitant les fortes charges (cotes, accelerations, autoroute). Dans tous les cas, ne conduisez pas de maniere sportive et surveillez la temperature moteur pendant le trajet.'
      }
    ],
    relatedCodes: ['P0148', 'P0016', 'P0017', 'P0335', 'P0340']
  },
  P0162: {
    code: 'P0162',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0162 signale un dysfonctionnement dans le circuit de la sonde lambda (capteur d'oxygene) numero 3 sur le banc 2. Ce code concerne les moteurs en V ou a plat qui possedent un second banc de cylindres avec son propre systeme d'echappement. La sonde lambda numero 3 du banc 2 est situee apres le second catalyseur du cote oppose au cylindre numero 1. Elle assure la surveillance de l'efficacite globale du systeme catalytique de ce banc. L'ECU a detecte un signal anormal provenant de cette sonde, que ce soit une tension hors des limites attendues, un signal bloque ou une absence de reponse. Comme les sondes du banc 1, cette sonde ne participe pas directement a la regulation du melange mais verifie que les emissions du banc 2 sont conformes.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact sur les performances de conduite',
      'Surveillance du catalyseur banc 2 non fonctionnelle',
      'Echec possible au controle technique',
      'Consommation de carburant inchangee',
      'Comportement moteur normal',
      'Emissions du banc 2 potentiellement non conformes'
    ],
    causes: [
      'Sonde lambda 3 banc 2 defectueuse ou en fin de vie (35% des cas)',
      'Connecteur de la sonde corrode ou debranche (20% des cas)',
      'Cablage endommage entre la sonde et l\'ECU (15% des cas)',
      'Element chauffant de la sonde defaillant (12% des cas)',
      'Contamination de la sonde par huile ou silicone (8% des cas)',
      'Fuite d\'echappement cote banc 2 (5% des cas)',
      'Circuit ouvert ou court-circuit dans le faisceau (3% des cas)',
      'Defaillance du circuit de lecture ECU (2% des cas)'
    ],
    solutions: [
      'Inspecter le connecteur et le cablage de la sonde (gratuit)',
      'Verifier le signal de la sonde avec un lecteur OBD (diagnostic 30-50 euros)',
      'Tester la resistance de l\'element chauffant (2-14 ohms normal)',
      'Remplacer la sonde lambda 3 banc 2 si defectueuse (60-200 euros)',
      'Reparer le cablage endommage (30-100 euros)',
      'Nettoyer ou remplacer le connecteur corrode (10-30 euros)',
      'Verifier l\'absence de fuites d\'echappement cote banc 2 (gratuit)',
      'Effectuer un diagnostic electronique complet (50-100 euros)'
    ],
    riskExplanation: "Le P0162 est un code modere sans risque mecanique pour le moteur. La sonde 3 du banc 2 est une sonde de surveillance qui ne participe pas a la regulation du melange carburant. Son defaut n'affecte ni les performances ni la consommation. Le risque est que le catalyseur du banc 2 ne soit plus surveille et qu'un probleme de depollution passe inapercu. Le voyant moteur allume empeche le passage du controle technique. Reparation a planifier dans les 2 mois ou avant le prochain CT.",
    faq: [
      {
        question: 'Le P0162 est-il l\'equivalent du P0142 mais pour le banc 2?',
        answer: 'Oui, exactement. Le P0142 concerne la sonde lambda 3 du banc 1 (cote cylindre numero 1) et le P0162 concerne la meme sonde mais du banc 2 (cote oppose). Les causes, symptomes, diagnostic et solutions sont identiques, seule la localisation physique de la sonde change. Sur un moteur en V, chaque banc a son propre systeme d\'echappement independant avec ses propres sondes lambda et catalyseurs. Un defaut sur un banc n\'implique pas de defaut sur l\'autre.'
      },
      {
        question: 'Dois-je remplacer la sonde du banc 2 en meme temps que celle du banc 1?',
        answer: 'Ce n\'est pas obligatoire mais c\'est une bonne pratique si les deux sondes ont le meme age et le meme kilometrage. Les sondes lambda du banc 1 et du banc 2 subissent des conditions similaires et s\'usent a peu pres au meme rythme. Remplacer les deux en meme temps permet d\'economiser sur la main d\'oeuvre (une seule intervention, une seule mise sur pont) et d\'eviter un retour au garage quelques mois plus tard pour la deuxieme sonde. La difference de cout est principalement la piece supplementaire (60-200 euros).'
      },
      {
        question: 'Comment localiser la sonde lambda 3 du banc 2 sous le vehicule?',
        answer: 'Pour localiser cette sonde, identifiez d\'abord le banc 2 de votre moteur (cote oppose au cylindre numero 1). Suivez le tube d\'echappement de ce cote depuis le collecteur jusqu\'au catalyseur, puis apres le catalyseur. La sonde lambda 3 est la derniere sonde sur cette ligne d\'echappement, apres le second catalyseur s\'il y en a deux, ou apres le catalyseur principal. Elle est reconnaissable a son fil et son connecteur sortant du tube d\'echappement. Sur un pont elevateur, elle est generalement accessible depuis le dessous du vehicule.'
      },
      {
        question: 'Le P0162 peut-il apparaitre sur un moteur en ligne?',
        answer: 'Non, le P0162 concerne specifiquement le banc 2 et ne peut apparaitre que sur des moteurs ayant deux bancs (moteurs en V ou a plat). Un moteur en ligne (3, 4 ou 6 cylindres) n\'a qu\'un seul banc (banc 1) et les codes applicables sont dans la serie P013x et P014x. Si vous avez un moteur en ligne et qu\'un code P0162 apparait, il y a probablement une erreur de diagnostic ou un probleme de configuration du logiciel de lecture OBD.'
      },
      {
        question: 'Le remplacement de la sonde 3 banc 2 est-il plus difficile que celle du banc 1?',
        answer: 'L\'accessibilite depend du vehicule. Sur certains moteurs en V, le cote banc 2 est plus accessible car il est tourne vers l\'avant du compartiment moteur, tandis que le banc 1 est contre la cloison pare-feu. Sur d\'autres vehicules, c\'est l\'inverse. La sonde numero 3 etant situee loin du moteur, sous le vehicule, l\'accessibilite est generalement similaire pour les deux bancs et necessite de soulever le vehicule. L\'operation elle-meme (devissage, remplacement, branchement) est identique quel que soit le banc.'
      }
    ],
    relatedCodes: ['P0142', 'P0163', 'P0164', 'P0156', 'P0430']
  },
  P0163: {
    code: 'P0163',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0163 indique une tension trop basse dans le circuit de la sonde lambda numero 3 sur le banc 2. Ce code est l'equivalent du P0143 mais pour le cote oppose du moteur. La tension de signal de la sonde reste en dessous du seuil minimal, ce que l'ECU interprete comme un melange pauvre (exces d'oxygene) dans les gaz d'echappement apres le catalyseur du banc 2. En realite, la sonde peut etre defectueuse avec un signal bloque bas, ou il peut y avoir une fuite d'echappement introduisant de l'air ambiant dans le flux gazeux. Cette sonde etant dediee a la surveillance du catalyseur, son defaut n'affecte pas la conduite quotidienne.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact sur les performances de conduite',
      'Surveillance du catalyseur banc 2 imprecise',
      'Echec potentiel au controle technique',
      'Consommation de carburant inchangee',
      'Comportement moteur normal au quotidien',
      'Impossibilite de detecter un probleme du catalyseur banc 2'
    ],
    causes: [
      'Sonde lambda 3 banc 2 usee avec signal bloque bas (35% des cas)',
      'Fuite d\'echappement cote banc 2 introduisant de l\'air (20% des cas)',
      'Connecteur corrode ou avec faux contact (15% des cas)',
      'Court-circuit a la masse dans le cablage (12% des cas)',
      'Sonde contaminee par des depots (8% des cas)',
      'Element chauffant partiellement defaillant (5% des cas)',
      'Catalyseur banc 2 tres efficace donnant un signal naturellement bas (3% des cas)',
      'Probleme de reference de tension (2% des cas)'
    ],
    solutions: [
      'Verifier le signal de la sonde en temps reel avec lecteur OBD (diagnostic 30-50 euros)',
      'Inspecter le systeme d\'echappement banc 2 pour fuites (gratuit)',
      'Verifier le connecteur et le cablage de la sonde (gratuit)',
      'Tester l\'element chauffant (resistance 2-14 ohms)',
      'Remplacer la sonde lambda si signal bloque (60-200 euros)',
      'Reparer les fuites d\'echappement identifiees (50-200 euros)',
      'Reparer le cablage si court-circuit a la masse (30-100 euros)',
      'Nettoyer ou remplacer le connecteur (10-30 euros)'
    ],
    riskExplanation: "Le P0163 est un code mineur sans consequence mecanique. La sonde 3 banc 2 ne participe pas a la regulation du melange et son defaut n'affecte ni les performances ni la fiabilite du moteur. Le seul risque est l'absence de surveillance du catalyseur banc 2 et le voyant moteur allume qui empeche le passage du controle technique. Si une fuite d'echappement est en cause, elle doit etre reparee pour des raisons de securite et de confort acoustique. Reparation a planifier dans les 2 mois.",
    faq: [
      {
        question: 'Le P0163 est-il l\'equivalent du P0143 pour le banc 2?',
        answer: 'Oui, exactement. Le P0143 concerne la tension basse de la sonde lambda 3 banc 1 et le P0163 concerne la meme condition mais sur le banc 2. Les mecanismes de detection, les causes, les symptomes et les solutions sont identiques. Seule la localisation physique de la sonde change (cote oppose du moteur). Le diagnostic et la reparation suivent la meme methodologie: verifier le signal, inspecter le connecteur et le cablage, tester l\'element chauffant, et remplacer la sonde si necessaire.'
      },
      {
        question: 'Comment verifier s\'il y a une fuite d\'echappement cote banc 2?',
        answer: 'Pour detecter une fuite d\'echappement, inspectez visuellement les joints de raccord, les soudures et les raccords flexibles du systeme d\'echappement cote banc 2. Moteur tournant au ralenti, passez votre main (sans toucher les surfaces chaudes) pres des joints pour sentir un souffle d\'air chaud. Vous pouvez aussi utiliser un spray de liquide vaisselle dilue applique sur les zones suspectes: des bulles apparaitront a l\'endroit de la fuite. Les fuites d\'echappement se trouvent souvent au niveau des joints de collecteur, des raccords de catalyseur et des soudures du tube d\'echappement.'
      },
      {
        question: 'Le P0163 et le P0164 peuvent-ils apparaitre en meme temps?',
        answer: 'Il est tres improbable que le P0163 (tension basse) et le P0164 (tension haute) apparaissent simultanement car ils indiquent des conditions opposees sur le meme circuit. Si les deux codes sont presents, cela suggere un probleme intermittent ou le signal oscille de maniere erratique entre les deux extremes, ce qui pointerait vers un faux contact ou un capteur en train de mourir qui genere des lectures aleatoires. Dans ce cas, le remplacement de la sonde est la solution la plus sure.'
      },
      {
        question: 'La sonde lambda 3 banc 2 est-elle accessible sans pont elevateur?',
        answer: 'Generalement non, ou difficilement. La sonde 3 est placee loin du moteur, sous le vehicule, apres le catalyseur du banc 2. Pour y acceder, il faut soulever le vehicule avec un cric et des chandelles de securite, ou mieux, utiliser un pont elevateur. Le travail sous un vehicule souleve uniquement par un cric est dangereux et deconseille. Si vous n\'avez pas d\'equipement de levage adapte, confiez cette operation a un garage. Le supplement de main d\'oeuvre (30-60 euros) vaut mieux qu\'un accident.'
      },
      {
        question: 'Puis-je utiliser la meme reference de sonde pour le banc 1 et le banc 2?',
        answer: 'Dans la majorite des cas, les sondes lambda du banc 1 et du banc 2, a la meme position dans le systeme d\'echappement (sonde 3 dans ce cas), sont identiques et utilisent la meme reference. Elles mesurent la meme chose et fonctionnent dans les memes conditions. Cependant, verifiez toujours dans le catalogue de pieces en utilisant votre numero de chassis (VIN) car il peut y avoir des differences de longueur de cable ou de type de connecteur entre les deux cotes. Certains vehicules utilisent des sondes avec des longueurs de cable differentes pour le routage du faisceau.'
      }
    ],
    relatedCodes: ['P0162', 'P0164', 'P0143', 'P0157', 'P0430']
  },
  P0164: {
    code: 'P0164',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0164 indique une tension trop elevee dans le circuit de la sonde lambda numero 3 sur le banc 2. C'est l'equivalent du P0144 pour le banc oppose du moteur. La tension de signal depasse le seuil maximal attendu, ce que l'ECU interprete comme un melange riche (manque d'oxygene) dans les gaz d'echappement apres le catalyseur du banc 2. Soit la sonde est defaillante avec un signal bloque haut, soit il y a un court-circuit dans le cablage vers le positif, soit le catalyseur du banc 2 est sature et ne convertit plus correctement les gaz polluants. Cette sonde etant uniquement de surveillance, ce defaut n'affecte pas la conduite.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact direct sur les performances',
      'Surveillance du catalyseur banc 2 inoperante',
      'Echec au controle technique probable',
      'Consommation de carburant inchangee',
      'Comportement moteur normal',
      'Possible probleme de catalyseur masque'
    ],
    causes: [
      'Sonde lambda 3 banc 2 defectueuse avec signal bloque haut (35% des cas)',
      'Court-circuit dans le cablage du signal vers le positif (20% des cas)',
      'Sonde contaminee par huile ou residus de combustion (15% des cas)',
      'Catalyseur banc 2 sature ne convertissant plus correctement (10% des cas)',
      'Connecteur avec court-circuit entre fils (8% des cas)',
      'Element chauffant defaillant avec derive du signal (5% des cas)',
      'Fuite d\'huile moteur atteignant le systeme d\'echappement banc 2 (5% des cas)',
      'Probleme de reference dans l\'ECU (2% des cas)'
    ],
    solutions: [
      'Observer le signal de la sonde en temps reel avec lecteur OBD (diagnostic 30-50 euros)',
      'Verifier le cablage pour court-circuit vers le positif (diagnostic 30-60 euros)',
      'Inspecter le connecteur pour fils en contact (gratuit)',
      'Remplacer la sonde lambda si signal bloque haut (60-200 euros)',
      'Verifier l\'etat du catalyseur banc 2 (diagnostic 50-100 euros)',
      'Reparer les fuites d\'huile si elles contaminent l\'echappement (variable)',
      'Reparer le cablage si court-circuit identifie (30-100 euros)',
      'Nettoyer ou remplacer le connecteur (10-30 euros)'
    ],
    riskExplanation: "Le P0164 est un code mineur sans consequence mecanique pour le moteur. La sonde 3 banc 2 ne participe pas au controle du melange air-carburant et son defaut n'affecte pas la conduite. Si la cause reelle est un catalyseur sature, les emissions du banc 2 ne seront plus conformes, ce qui est un probleme environnemental mais pas mecanique. Le voyant moteur allume empeche le passage du controle technique. La reparation est simple et abordable. Intervention dans les 2 mois ou avant le CT.",
    faq: [
      {
        question: 'Comment savoir si c\'est la sonde ou le catalyseur banc 2 qui est defaillant?',
        answer: 'Remplacez d\'abord la sonde car c\'est la cause la plus frequente et la moins couteuse. Si le signal redevient normal avec une sonde neuve, le catalyseur est bon. Si le signal reste bloque haut malgre une sonde neuve, le catalyseur est probablement defaillant. Vous pouvez aussi tester le catalyseur sans remplacer la sonde en mesurant la difference de temperature entre l\'entree et la sortie du catalyseur avec un thermometre infrarouge: la sortie doit etre 30 a 100 degres plus chaude que l\'entree. Si les temperatures sont quasi identiques, le catalyseur ne convertit plus.'
      },
      {
        question: 'Le P0164 peut-il etre accompagne de codes de catalyseur?',
        answer: 'Oui, un P0164 peut etre accompagne d\'un code P0430 (efficacite du catalyseur banc 2 en dessous du seuil). Si la sonde 3 banc 2 donne un signal bloque haut, l\'ECU peut interpreter cela comme un catalyseur defaillant et generer les deux codes simultanement. Il est important de reparer d\'abord le P0164 (remplacer la sonde) avant de conclure sur l\'etat du catalyseur. Un diagnostic hatif pourrait mener au remplacement inutile d\'un catalyseur couteux alors que seule la sonde etait en cause.'
      },
      {
        question: 'La contamination par l\'huile est-elle plus frequente sur un banc que l\'autre?',
        answer: 'Sur un moteur en V, la contamination par l\'huile peut effectivement etre plus frequente sur un banc si la source de la fuite d\'huile est localisee d\'un cote. Par exemple, si un joint de cache-culbuteurs fuit d\'un cote, l\'huile peut atteindre le collecteur d\'echappement de ce banc et contaminer les sondes. De meme, si un guide de soupape est plus use d\'un cote, l\'huile qui passe dans ce cylindre contaminera le systeme d\'echappement de ce banc specifique. Un diagnostic de consommation d\'huile par banc peut reveler cette asymetrie.'
      },
      {
        question: 'Le P0164 est-il le meme que le P0144?',
        answer: 'Le P0164 et le P0144 sont des codes identiques en termes de mecanisme mais pour des bancs differents. Le P0144 concerne la sonde lambda 3 banc 1 (tension haute) et le P0164 concerne la meme sonde mais banc 2 (tension haute). Les symptomes, causes, diagnostics et solutions sont les memes. Si les deux codes apparaissent simultanement sur les deux bancs, cela peut indiquer un probleme commun comme une consommation d\'huile generalisee, un carburant de mauvaise qualite, ou une surchauffe du moteur ayant affecte les deux catalyseurs.'
      },
      {
        question: 'Combien de sondes lambda un moteur en V possede-t-il au total?',
        answer: 'Un moteur en V avec systeme d\'echappement complet peut avoir entre 4 et 6 sondes lambda: sonde 1 (amont) banc 1, sonde 1 (amont) banc 2, sonde 2 (aval) banc 1, sonde 2 (aval) banc 2, et eventuellement sonde 3 banc 1 et sonde 3 banc 2 sur les vehicules a double catalyseur. Les sondes amont (sonde 1) sont les plus importantes car elles controlent le melange. Les sondes aval (sonde 2) et les sondes 3 sont des sondes de surveillance du catalyseur. Toutes ont un element chauffant et peuvent generer des codes defaut specifiques.'
      }
    ],
    relatedCodes: ['P0162', 'P0163', 'P0144', 'P0158', 'P0430']
  },
  P0165: {
    code: 'P0165',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0165 indique une reponse trop lente de la sonde lambda numero 3 sur le banc 2. C'est l'equivalent du P0145 pour le banc oppose. L'ECU a detecte que cette sonde met trop de temps a reagir aux variations de la composition des gaz d'echappement. La vitesse de reponse d'une sonde lambda est cruciale pour une surveillance efficace du catalyseur. Quand la sonde repond trop lentement, ses mesures ne refletent plus fidelement l'etat reel des gaz et la surveillance du catalyseur devient imprecise. Ce ralentissement est generalement cause par le vieillissement naturel de l'element sensible en zircone ou par sa contamination progressive par des depots.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun symptome de conduite perceptible',
      'Surveillance du catalyseur banc 2 imprecise',
      'Emissions non conformes potentielles',
      'Consommation de carburant inchangee',
      'Performances moteur normales',
      'Echec possible au controle technique'
    ],
    causes: [
      'Sonde lambda vieillissante avec element sensible degrade (40% des cas)',
      'Contamination de la sonde par huile, silicone ou plomb (20% des cas)',
      'Element chauffant partiellement defaillant (15% des cas)',
      'Connecteur avec haute resistance affectant le signal (10% des cas)',
      'Fuite d\'echappement banc 2 diluant les gaz (8% des cas)',
      'Sonde de remplacement de qualite inferieure (5% des cas)',
      'Catalyseur banc 2 modifiant anormalement la composition des gaz (2% des cas)'
    ],
    solutions: [
      'Observer le temps de reponse de la sonde avec valise diagnostique (diagnostic 50-100 euros)',
      'Remplacer la sonde lambda 3 banc 2 (60-200 euros)',
      'Verifier et reparer les fuites d\'echappement cote banc 2 (50-200 euros)',
      'Inspecter le connecteur et nettoyer les contacts (gratuit)',
      'Tester l\'element chauffant (2-14 ohms normal)',
      'Verifier l\'absence de consommation d\'huile excessive (diagnostic 30-50 euros)',
      'Choisir une sonde de remplacement de qualite OEM (60-150 euros)'
    ],
    riskExplanation: "Le P0165 n'affecte pas le fonctionnement du moteur. La sonde 3 banc 2 ne participe pas a la regulation du melange carburant. Le risque est l'absence de surveillance fiable du catalyseur banc 2 et l'echec au controle technique. La reparation consiste generalement a remplacer la sonde, une operation simple et moderement couteuse. Si la contamination est causee par une consommation d'huile excessive, il faut aussi traiter la cause de cette consommation. Intervention sous 2 mois.",
    faq: [
      {
        question: 'Le P0165 est-il l\'equivalent du P0145 pour le banc 2?',
        answer: 'Oui, le P0165 et le P0145 sont des codes identiques en termes de mecanisme mais pour des bancs differents du moteur. Le P0145 concerne la sonde lambda 3 banc 1 (reponse lente) et le P0165 concerne la meme sonde banc 2. Le diagnostic et la reparation sont les memes: remplacement de la sonde lambda. Si les deux codes apparaissent simultanement sur les deux bancs, les sondes ont probablement le meme age et sont arrivees en fin de vie en meme temps, ce qui est normal.'
      },
      {
        question: 'Combien de kilometres peut-on rouler avec un P0165?',
        answer: 'Vous pouvez rouler indefiniment avec un P0165 sans aucun risque pour le moteur. La sonde est en fin de vie mais fonctionne encore partiellement, simplement trop lentement pour satisfaire les criteres de l\'ECU. Le moteur, le catalyseur et les autres composants ne sont pas en danger. La seule consequence pratique est le voyant moteur allume et l\'echec au controle technique. Si votre CT est dans 6 mois, vous avez le temps de planifier tranquillement la reparation. Si c\'est dans quelques semaines, priorisez cette reparation.'
      },
      {
        question: 'Pourquoi ma sonde vieillit-elle plus vite que prevu?',
        answer: 'Plusieurs facteurs accelerent le vieillissement des sondes lambda: une consommation d\'huile moteur excessive qui contamine l\'element sensible, l\'utilisation de carburant de mauvaise qualite ou contenant du plomb, des temperatures d\'echappement excessives dues a des problemes de melange, l\'utilisation de silicone non adapte pour les joints moteur, et des demarrages frequents a froid en climat rigoureux. Un moteur bien entretenu avec une huile de qualite et un carburant de bonne qualite preservera ses sondes lambda plus longtemps. La conduite sportive reguliere augmente aussi les temperatures et accelere le vieillissement.'
      },
      {
        question: 'Faut-il remplacer toutes les sondes lambda en meme temps?',
        answer: 'Ce n\'est pas obligatoire mais peut etre judicieux si toutes les sondes ont le meme age et le meme kilometrage. Si une sonde lambda 3 est en fin de vie, les sondes 1 et 2 du meme banc approchent probablement aussi de leur fin de vie. Remplacer toutes les sondes en une seule intervention economise sur la main d\'oeuvre et evite des retours au garage repetes. Cependant, les sondes amont (sonde 1) s\'usent plus vite car elles sont exposees a des temperatures plus elevees. Si elles ont ete remplacees recemment, il n\'est pas necessaire de les changer a nouveau.'
      },
      {
        question: 'Le type de carburant affecte-t-il la duree de vie des sondes lambda?',
        answer: 'Oui, le type et la qualite du carburant ont un impact significatif. L\'essence sans plomb de bonne qualite est ideale pour la longevite des sondes. Le carburant contamine par du plomb (rare aujourd\'hui) est le plus nocif car le plomb se depose sur l\'element sensible et le rend inoperant. Le diesel produit plus de suie qui peut colmater les sondes. Les biocarburants en proportion elevee (E85 par exemple) peuvent accelerer le vieillissement. Le carburant premium (98 ou 100 octanes) n\'offre pas de protection supplementaire significative par rapport au SP95. L\'important est d\'utiliser du carburant de stations fiables.'
      }
    ],
    relatedCodes: ['P0162', 'P0163', 'P0164', 'P0145', 'P0430']
  },
  P0166: {
    code: 'P0166',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0166 indique un signal insuffisant ou absent de la sonde lambda numero 3 sur le banc 2. Ce code est l'equivalent du P0146 pour le banc oppose du moteur. L'ECU a detecte que le signal de cette sonde ne varie pas suffisamment ou reste bloque a une valeur fixe pendant une duree anormalement longue. Une sonde lambda fonctionnelle doit osciller en reponse aux variations naturelles de la composition des gaz d'echappement, meme apres le catalyseur. Un signal completement fige indique que la sonde ne detecte plus les changements dans les gaz et ne peut donc plus remplir sa mission de surveillance. Ce defaut est typique d'une sonde en fin de vie ou d'un probleme electrique dans son circuit.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun impact sur la conduite quotidienne',
      'Surveillance du catalyseur banc 2 non fonctionnelle',
      'Echec au controle technique (voyant allume)',
      'Consommation et performances inchangees',
      'Emissions possiblement non conformes',
      'Aucun symptome perceptible par le conducteur'
    ],
    causes: [
      'Sonde lambda en fin de vie avec element sensible inactif (40% des cas)',
      'Contamination de la sonde par huile, silicone ou additifs (20% des cas)',
      'Element chauffant defaillant (sonde pas assez chaude pour fonctionner) (15% des cas)',
      'Connecteur corrode ou avec haute resistance (10% des cas)',
      'Cablage du signal endommage (5% des cas)',
      'Fuite d\'echappement importante diluant les gaz (5% des cas)',
      'Catalyseur tres efficace produisant un signal quasi constant (3% des cas)',
      'Probleme de masse du circuit (2% des cas)'
    ],
    solutions: [
      'Observer le signal en temps reel avec lecteur OBD (diagnostic 30-50 euros)',
      'Tester l\'element chauffant (resistance 2-14 ohms)',
      'Remplacer la sonde lambda 3 banc 2 (60-200 euros)',
      'Inspecter le connecteur et nettoyer les contacts (gratuit)',
      'Verifier l\'absence de fuites d\'echappement (gratuit)',
      'Reparer le cablage si endommage (30-100 euros)',
      'Verifier le point de masse du circuit (gratuit)',
      'Utiliser une sonde de remplacement de qualite OEM'
    ],
    riskExplanation: "Le P0166 est modere et sans risque mecanique pour le moteur. La sonde 3 banc 2 ne participe pas a la regulation du melange et son inactivite n'a aucune consequence sur la conduite. Le catalyseur banc 2 n'est plus surveille, ce qui signifie qu'un probleme eventuel passerait inapercu. Le voyant moteur allume empeche le passage du CT. La reparation consiste generalement a remplacer la sonde, une operation accessible. Intervention dans les 2 mois ou avant le prochain CT.",
    faq: [
      {
        question: 'Le P0166 est-il l\'equivalent du P0146 pour le banc 2?',
        answer: 'Oui, exactement. Le P0146 et le P0166 sont des codes identiques par leur mecanisme, seul le banc du moteur concerne differe. Le P0146 s\'applique a la sonde lambda 3 du banc 1 et le P0166 a la sonde lambda 3 du banc 2. Les causes, symptomes, diagnostic et solutions sont identiques. Si les deux codes apparaissent en meme temps, cela peut indiquer un probleme commun affectant les deux bancs (contamination globale, kilometrage eleve) ou un facteur partage comme un fusible de chauffage commun.'
      },
      {
        question: 'Comment differencier un signal fige d\'un signal normalement stable?',
        answer: 'Un signal normalement stable apres un catalyseur efficace oscille tres legerement autour d\'une valeur moyenne (par exemple entre 0,55 et 0,65V) avec de petites variations. Un signal fige reste exactement a la meme valeur (par exemple 0,45V ou 0V) sans la moindre oscillation pendant plusieurs minutes. L\'ECU utilise des seuils de variation minimale pour distinguer les deux cas. Avec un lecteur OBD en mode graphique, la difference est clairement visible: un signal normal montre des micro-oscillations tandis qu\'un signal fige est une ligne parfaitement droite.'
      },
      {
        question: 'Dois-je m\'inquieter si les codes P0165 et P0166 apparaissent ensemble?',
        answer: 'Non, l\'apparition simultanée du P0165 (reponse lente) et du P0166 (activite insuffisante) sur la meme sonde est coherente et confirme simplement que la sonde est en fin de vie. Le P0165 peut apparaitre en premier quand la sonde commence a ralentir, puis le P0166 quand elle ralentit au point de devenir quasi inactive. Les deux codes seront resolus par le remplacement de la sonde. Il n\'est pas necessaire de traiter chaque code separement: une seule sonde neuve reglera les deux defauts d\'un coup.'
      },
      {
        question: 'La qualite de la sonde de remplacement est-elle importante?',
        answer: 'Oui, la qualite de la sonde de remplacement a un impact direct sur la duree de vie et la precision de la mesure. Les sondes de marques reconnues (Bosch, Denso, NTK/NGK, Delphi) utilisent des materiaux de haute qualite pour l\'element sensible en zircone et l\'element chauffant, garantissant une precision et une durabilite comparables a la piece d\'origine. Les sondes generiques tres bon marche (moins de 30 euros) peuvent avoir une precision insuffisante et une duree de vie de 30 000 a 50 000 km seulement. Pour une sonde de surveillance qui ne sera pas sollicitee intensivement, une qualite milieu de gamme est suffisante.'
      },
      {
        question: 'Le remplacement de la sonde 3 banc 2 necessite-t-il un equipement special?',
        answer: 'L\'outil principal est une cle a sonde lambda, generalement de 22mm, qui peut etre une cle plate fendue, une douille fendue ou un outil specifique permettant de passer le cable de la sonde. Un kit d\'outils lambda coute entre 10 et 30 euros et est reutilisable. Il faut aussi un pont elevateur ou des chandelles pour travailler sous le vehicule. Du degraippant penetrant (WD-40 ou equivalent) est fortement recommande car les sondes sont souvent grippees par la chaleur et la corrosion. De la pate anti-grippage cuivree pour les filets de la nouvelle sonde est egalement conseillee.'
      }
    ],
    relatedCodes: ['P0162', 'P0163', 'P0164', 'P0165', 'P0146']
  },
  P0167: {
    code: 'P0167',
    severity: { level: 1, label: 'Mineur', color: 'success', icon: '🟢' },
    introduction: "Le code P0167 signale un dysfonctionnement du circuit de chauffage de la sonde lambda numero 3 sur le banc 2. C'est l'equivalent du P0147 pour le banc oppose du moteur. L'element chauffant integre a la sonde permet un rechauffement rapide pour que la sonde soit operationnelle dans les 30 a 60 secondes suivant le demarrage. L'ECU a detecte un probleme dans le circuit electrique de cet element chauffant: circuit ouvert (resistance brule), court-circuit ou courant anormal. Sans chauffage fonctionnel, la sonde lambda 3 banc 2 depend entierement de la chaleur des gaz d'echappement pour atteindre sa temperature de fonctionnement, ce qui peut prendre 10 a 15 minutes car elle est la sonde la plus eloignee du moteur.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Aucun symptome de conduite perceptible',
      'Sonde lambda 3 banc 2 inactive pendant les premieres minutes',
      'Emissions banc 2 non surveillees pendant la phase de chauffe',
      'Consommation de carburant inchangee',
      'Performances moteur normales',
      'Echec au controle technique pour voyant allume'
    ],
    causes: [
      'Element chauffant de la sonde brule ou coupe (40% des cas)',
      'Fusible du circuit de chauffage grille (12% des cas)',
      'Connecteur corrode ou avec faux contact (15% des cas)',
      'Cablage endommage dans le circuit de chauffage (12% des cas)',
      'Relais de chauffage des sondes defaillant (8% des cas)',
      'Sonde de qualite inferieure avec chauffage fragile (8% des cas)',
      'Court-circuit dans le cablage (3% des cas)',
      'Defaillance du circuit de commande ECU (2% des cas)'
    ],
    solutions: [
      'Verifier le fusible du circuit de chauffage des sondes lambda (gratuit)',
      'Mesurer la resistance de l\'element chauffant: 2-14 ohms (diagnostic gratuit)',
      'Inspecter le connecteur et les fils (gratuit)',
      'Verifier l\'alimentation 12V au connecteur contact mis (diagnostic gratuit)',
      'Remplacer la sonde lambda si chauffage HS (60-200 euros)',
      'Remplacer le fusible grille apres verification d\'absence de court-circuit (1-5 euros)',
      'Reparer le cablage endommage (30-100 euros)',
      'Verifier et remplacer le relais de chauffage (15-40 euros)'
    ],
    riskExplanation: "Le P0167 est un code mineur sans impact sur le moteur. L'element chauffant de la sonde 3 banc 2 ne sert qu'a accelerer la mise en service de cette sonde de surveillance. Son defaut n'affecte ni la conduite ni les performances. La sonde se rechauffera naturellement par les gaz d'echappement mais beaucoup plus lentement. Le seul risque concret est l'echec au controle technique et l'absence de surveillance du catalyseur banc 2 pendant les 10-15 premieres minutes. Reparation a planifier avant le CT ou dans les 2-3 mois.",
    faq: [
      {
        question: 'Le P0167 est-il le meme que le P0147 pour le banc 2?',
        answer: 'Oui, le P0167 et le P0147 sont des codes identiques par leur mecanisme, concernant le chauffage de la sonde lambda 3 mais sur des bancs differents du moteur. Le P0147 concerne le banc 1 et le P0167 le banc 2. Les procedures de diagnostic (test du fusible, mesure de resistance, verification du 12V) sont les memes. Le remplacement de la sonde ou la reparation du cablage suit la meme methodologie, seule la localisation physique de la sonde change.'
      },
      {
        question: 'Le fusible de chauffage est-il partage entre les deux bancs?',
        answer: 'Cela depend du vehicule. Sur certains modeles, un seul fusible alimente le chauffage de toutes les sondes lambda (banc 1 et banc 2). Si ce fusible grille, vous verrez apparaitre simultanement des codes de chauffage pour toutes les sondes (P0135, P0141, P0147 pour le banc 1 et P0155, P0161, P0167 pour le banc 2). Sur d\'autres modeles, des fusibles separes sont utilises pour chaque banc ou meme pour chaque sonde. Consultez le schema electrique et le boitier de fusibles de votre vehicule pour identifier la configuration exacte.'
      },
      {
        question: 'La sonde lambda 3 est-elle vraiment necessaire?',
        answer: 'D\'un point de vue purement mecanique, la sonde lambda 3 n\'est pas indispensable au fonctionnement du moteur. Le moteur tournerait exactement de la meme maniere sans elle. Cependant, elle est obligatoire pour la conformite aux normes anti-pollution et le passage du controle technique. Elle a ete installee par le constructeur pour repondre a des exigences reglementaires de surveillance des emissions (norme OBD-II). La supprimer ou la desactiver est illegal. De plus, elle permet de detecter precocement un probleme de catalyseur qui, s\'il n\'est pas surveille, pourrait s\'aggraver sans etre repere.'
      },
      {
        question: 'Quel est le cout total de reparation d\'un P0167?',
        answer: 'Le cout total depend de la cause. Si c\'est juste un fusible grille: 1-5 euros. Si le connecteur est corrode: 10-30 euros de nettoyage ou remplacement. Si le cablage est endommage: 30-100 euros de reparation. Si la sonde doit etre remplacee: 60-200 euros pour la piece plus 30-80 euros de main d\'oeuvre. Le cas le plus courant (element chauffant brule) necessite le remplacement de la sonde, pour un total de 90 a 280 euros tout compris. C\'est une reparation relativement abordable comparee a beaucoup d\'autres codes defaut moteur.'
      },
      {
        question: 'Puis-je remplacer la sonde lambda avec le moteur chaud?',
        answer: 'Oui, certains mecaniciens recommandent meme de demonter la sonde lambda sur un moteur encore tiede (pas brulant mais tiede) car le metal du tube d\'echappement est legerement dilate par la chaleur, ce qui facilite le devissage de la sonde. Cependant, attention aux brulures: les composants d\'echappement restent tres chauds pendant un long moment apres l\'arret du moteur. Portez des gants de protection et evitez de toucher les tubes d\'echappement nus. Sur un moteur completement froid, la sonde peut etre tres grippee par la rouille et la corrosion, rendant le demontage plus difficile.'
      }
    ],
    relatedCodes: ['P0147', 'P0162', 'P0166', 'P0155', 'P0161']
  },
  P0168: {
    code: 'P0168',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0168 signale que la temperature du carburant est trop elevee. L'ECU surveille la temperature du carburant grace a un capteur dedie (FTS - Fuel Temperature Sensor) integre au circuit d'alimentation, generalement sur la rampe d'injection ou le filtre a carburant. Une temperature de carburant excessive affecte sa densite et donc le debit d'injection, ce qui peut perturber le dosage air-carburant. Sur les moteurs diesel, ce probleme est plus frequent car le carburant circule en boucle entre le reservoir, la pompe, les injecteurs et le retour, se rechauffant a chaque passage. Sur les moteurs essence, le carburant peut aussi surchauffer par proximite avec des composants chauds du moteur. L'ECU utilise cette information pour corriger les temps d'injection en fonction de la densite du carburant.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Possible perte de puissance par temps chaud ou en charge',
      'Ralenti pouvant etre instable',
      'Consommation de carburant augmentee',
      'Demarrage a chaud difficile apres un arret prolonge',
      'Performances degradees en conduite prolongee par temps chaud',
      'Mode degrade possible si temperature tres elevee'
    ],
    causes: [
      'Capteur de temperature de carburant defectueux (30% des cas)',
      'Circuit de refroidissement du carburant defaillant (diesel) (20% des cas)',
      'Retour de carburant trop chaud des injecteurs (15% des cas)',
      'Fonctionnement par temperatures ambiantes extremes (conditions normales) (10% des cas)',
      'Isolation thermique insuffisante des durites de carburant (10% des cas)',
      'Pompe a carburant surchauffant le carburant (8% des cas)',
      'Durites de carburant trop proches de sources de chaleur (5% des cas)',
      'Probleme de cablage du capteur FTS (2% des cas)'
    ],
    solutions: [
      'Verifier la temperature reelle du carburant avec un thermometre (diagnostic 20-40 euros)',
      'Tester le capteur FTS avec multimetre (resistance variable selon temperature)',
      'Remplacer le capteur FTS si defectueux (30-100 euros)',
      'Verifier le circuit de refroidissement du carburant sur diesel (diagnostic 50-100 euros)',
      'Isoler thermiquement les durites de carburant proches de sources de chaleur (20-50 euros)',
      'Verifier le bon fonctionnement du refroidisseur de carburant (diesel) (diagnostic 50-80 euros)',
      'Ameliorer la ventilation du compartiment moteur si insuffisante',
      'Verifier le cablage du capteur FTS (diagnostic gratuit)'
    ],
    riskExplanation: "Un carburant trop chaud a une densite plus faible, ce qui signifie que les injecteurs delivrent moins de masse de carburant pour le meme temps d'ouverture. L'ECU compense dans une certaine mesure mais au-dela d'un certain seuil, les performances se degradent. Sur les moteurs diesel, un carburant excessivement chaud peut aussi creer des problemes de cavitation dans la pompe haute pression, accelerant son usure. Le risque de panne immediate est faible mais la degradation des performances et l'usure acceleree des composants justifient une reparation sous 2 a 4 semaines.",
    faq: [
      {
        question: 'Pourquoi le carburant se rechauffe-t-il dans le circuit?',
        answer: 'Le carburant se rechauffe pour plusieurs raisons. Premierement, il passe a proximite ou au contact de composants tres chauds du moteur (bloc moteur, collecteur d\'echappement). Deuxiemement, sur les moteurs diesel, le carburant non utilise par les injecteurs retourne au reservoir apres avoir ete compresse a haute pression et s\'etre rechauffe dans le processus. Troisiemement, la pompe a carburant elle-meme genere de la chaleur par friction. En ete, la temperature ambiante elevee aggrave le phenomene. Certains vehicules diesel sont equipes d\'un refroidisseur de carburant pour contrer ce probleme.'
      },
      {
        question: 'Les vehicules diesel ont-ils un systeme de refroidissement du carburant?',
        answer: 'Oui, de nombreux vehicules diesel modernes sont equipes d\'un refroidisseur de carburant (fuel cooler). C\'est un petit echangeur de chaleur qui refroidit le carburant de retour avant qu\'il ne retourne au reservoir. Il peut etre refroidi par le liquide de refroidissement du moteur ou par l\'air ambiant. Si ce refroidisseur est bouche, fuit ou est defaillant, la temperature du carburant augmente progressivement et peut declencher le P0168. Le nettoyage ou le remplacement du refroidisseur resout alors le probleme. Ce composant est souvent neglige lors de l\'entretien regulier.'
      },
      {
        question: 'Le P0168 est-il normal par forte canicule?',
        answer: 'Par temperatures ambiantes extremes (au-dessus de 40 degres), combinee a une conduite en charge (remorquage, cote, autoroute avec climatisation), la temperature du carburant peut legitimement depasser le seuil du P0168 sans qu\'il y ait de defaut mecanique. Si le code n\'apparait que dans ces conditions extremes et disparait par temperatures normales, il peut s\'agir d\'une condition normale. Neanmoins, verifiez quand meme l\'etat du systeme de refroidissement du carburant car un vehicule bien entretenu devrait supporter ces conditions sans declencher le code.'
      },
      {
        question: 'Comment tester le capteur de temperature de carburant?',
        answer: 'Le capteur FTS est une thermistance (NTC generalement) dont la resistance varie avec la temperature. A 20 degres, la resistance est typiquement de 2 a 5 kohms (verifiez les specifications de votre vehicule). A 80 degres, elle descend a quelques centaines d\'ohms. Pour le tester, debranchez le connecteur et mesurez la resistance avec un multimetre. Comparez avec la temperature reelle du carburant mesuree par un thermometre. Si la resistance ne correspond pas a la temperature reelle, le capteur est defectueux. Vous pouvez aussi plonger le capteur dans de l\'eau chaude pour verifier que la resistance varie correctement.'
      },
      {
        question: 'L\'isolation des durites de carburant est-elle efficace?',
        answer: 'Oui, l\'isolation thermique des durites de carburant qui passent pres de sources de chaleur (collecteur d\'echappement, turbo, bloc moteur) peut etre tres efficace pour reduire le rechauffement du carburant. Des manchons isolants en fibre ceramique, en silicone ou en mousse alumine peuvent etre enroules autour des durites pour les proteger du rayonnement thermique. Le cout est faible (20-50 euros de materiel) et l\'installation est simple. Cette solution est particulierement utile sur les vehicules qui ont ete modifies ou dont les protections thermiques d\'origine ont ete retirees.'
      }
    ],
    relatedCodes: ['P0169', 'P0170', 'P0180', 'P0181', 'P0087']
  },
  P0169: {
    code: 'P0169',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0169 signale que la composition du carburant est incorrecte ou hors des limites attendues. L'ECU detecte ce probleme en analysant les corrections de carburant necessaires pour maintenir le rapport stoechiometrique optimal. Si le systeme d'injection doit appliquer des corrections exceptionnellement importantes pendant une periode prolongee, l'ECU en deduit que la composition du carburant ne correspond pas a ce qui est attendu. Ce code peut apparaitre apres un plein avec du carburant de mauvaise qualite, lors de l'utilisation d'un carburant avec un pourcentage d'ethanol different de celui calibre dans l'ECU, ou en cas de contamination du carburant par de l'eau ou d'autres substances. Les vehicules equipes de systemes flex-fuel detectent automatiquement la composition mais les vehicules standards n'ont pas cette capacite.",
    symptoms: [
      'Voyant moteur allume sur le tableau de bord',
      'Performances moteur reduites ou irreguliere',
      'Ralenti instable avec possibles tremblements',
      'Hesitations et a-coups lors des accelerations',
      'Consommation de carburant anormale (trop haute ou trop basse)',
      'Demarrage difficile surtout a froid',
      'Odeur inhabituelle a l\'echappement'
    ],
    causes: [
      'Carburant de mauvaise qualite ou contamine (30% des cas)',
      'Eau dans le reservoir de carburant (20% des cas)',
      'Utilisation d\'un carburant avec taux d\'ethanol inadapte (15% des cas)',
      'Melange accidentel de carburants (diesel dans essence ou inversement) (10% des cas)',
      'Injecteurs partiellement bouches delivrant mal le carburant (10% des cas)',
      'Capteur de composition de carburant defectueux (si equipe) (8% des cas)',
      'Pompe a carburant delivrant un debit irregulier (5% des cas)',
      'Additifs carburant inadaptes (2% des cas)'
    ],
    solutions: [
      'Si plein recent avec carburant suspect, diluer en refaisant le plein dans une station fiable (60-100 euros)',
      'Purger le reservoir si contamination par eau ou mauvais carburant (100-300 euros)',
      'Ajouter un additif anti-eau pour le carburant si l\'eau est en faible quantite (10-20 euros)',
      'Verifier et remplacer le filtre a carburant (20-60 euros)',
      'Effectuer un nettoyage des injecteurs (80-200 euros)',
      'Tester le capteur de composition de carburant si equipe (diagnostic 30-60 euros)',
      'Verifier le debit de la pompe a carburant (diagnostic 50-100 euros)',
      'Effacer le code apres correction et observer s\'il revient'
    ],
    riskExplanation: "Un carburant de composition incorrecte peut avoir des consequences variables. De l'eau dans le carburant peut provoquer des rates d'allumage et une corrosion des composants du systeme d'injection. Un taux d'ethanol trop eleve peut endommager les joints et les durites non adaptes. Un melange diesel-essence est potentiellement destructeur pour le moteur. La gravite depend de la nature et de la quantite de contamination. Dans le doute, faites analyser le carburant et purgez le circuit si necessaire. Intervention sous 1 a 2 semaines selon la gravite des symptomes.",
    faq: [
      {
        question: 'Comment savoir si mon carburant est contamine par de l\'eau?',
        answer: 'Plusieurs indices suggerent de l\'eau dans le carburant: le moteur hesite ou tousse a l\'acceleration, le ralenti est irregulier, le demarrage est difficile surtout a froid, et dans les cas graves le moteur peut caler. Sur un diesel, vous pouvez purger le decanteur d\'eau du filtre a carburant et observer si de l\'eau sort (le diesel et l\'eau ne se melangent pas). Sur un moteur essence, l\'eau se melange moins bien et peut provoquer des poches d\'eau dans le circuit. Des bandelettes test ou des pates reactives a l\'eau sont disponibles pour verifier la presence d\'eau dans un echantillon de carburant.'
      },
      {
        question: 'Le P0169 disparait-il apres avoir refait le plein avec du bon carburant?',
        answer: 'Si le probleme etait effectivement du carburant de mauvaise qualite, le code peut disparaitre progressivement apres avoir dilue le mauvais carburant avec du bon carburant de station fiable. Il faut generalement parcourir 100 a 200 km avec le nouveau carburant pour que l\'ECU ajuste ses corrections et que le code ne revienne plus. Apres avoir roule suffisamment, effacez le code avec un lecteur OBD et observez s\'il revient. Si le code persiste malgre plusieurs pleins de bon carburant, le probleme n\'est probablement pas lie au carburant mais a un composant du systeme d\'injection.'
      },
      {
        question: 'Que faire si j\'ai mis du diesel dans un moteur essence?',
        answer: 'Ne demarrez surtout pas le moteur si vous vous en apercevez avant. Faites remorquer le vehicule pour vidanger completement le reservoir et le circuit de carburant (200-500 euros). Si vous avez deja roule, le moteur aura probablement cale ou fonctionne tres mal. Le diesel ne s\'enflamme pas correctement dans un moteur essence, causant des rates et un encrassement severe des bougies et du catalyseur. Apres la vidange, il peut etre necessaire de nettoyer les injecteurs, remplacer les bougies et le filtre a carburant. Le cout total peut atteindre 500-1500 euros selon les dommages.'
      },
      {
        question: 'L\'ethanol dans le carburant peut-il declencher le P0169?',
        answer: 'Oui, si votre vehicule est calibre pour du SP95 (5-10% d\'ethanol) et que vous utilisez du E85 (85% d\'ethanol) sans conversion flex-fuel, l\'ECU devra appliquer des corrections d\'injection tres importantes car l\'ethanol contient moins d\'energie par litre que l\'essence. Ces corrections extremes peuvent declencher le P0169. De plus, l\'ethanol peut endommager les joints, les durites et certains composants du systeme d\'injection non prevus pour ce carburant. N\'utilisez du E85 que si votre vehicule est homologue flex-fuel ou equipe d\'un kit de conversion certifie.'
      },
      {
        question: 'Les additifs carburant peuvent-ils causer un P0169?',
        answer: 'La plupart des additifs carburant de marques reconnues (nettoyants injecteurs, anti-gel, anti-corrosion) ne causent pas de P0169 s\'ils sont utilises selon les dosages recommandes. Cependant, un surdosage d\'additif, un additif de mauvaise qualite ou un produit inadapte au type de moteur peut modifier la composition du carburant au point de declencher le code. Les additifs les plus a risque sont ceux qui contiennent des solvants puissants en grande quantite. Suivez toujours les instructions de dosage et utilisez des produits de marques reconnues et adaptes a votre type de moteur.'
      }
    ],
    relatedCodes: ['P0168', 'P0170', 'P0171', 'P0172', 'P0087']
  },
  P0170: {
    code: 'P0170',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0170 signale un dysfonctionnement de la correction de carburant (fuel trim) sur le banc 1. La correction de carburant est le mecanisme par lequel l'ECU ajuste en permanence la quantite de carburant injectee pour maintenir le rapport stoechiometrique ideal (14,7:1 pour l'essence). L'ECU utilise les informations de la sonde lambda amont pour effectuer des corrections a court terme (STFT - Short Term Fuel Trim) et a long terme (LTFT - Long Term Fuel Trim). Le P0170 est declenche lorsque les corrections de carburant sortent des limites acceptables de maniere repetee, indiquant que le systeme n'arrive plus a maintenir le melange correct. Ce code est etroitement lie aux codes P0171 (melange trop pauvre) et P0172 (melange trop riche) mais indique un probleme de correction plutot qu'un etat final du melange.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Ralenti instable ou irregulier',
      'Hesitations lors des accelerations',
      'Consommation de carburant anormale (augmentee ou diminuee)',
      'Performances moteur reduites',
      'Possibles rates d\'allumage dans les cas avances',
      'Emissions polluantes augmentees'
    ],
    causes: [
      'Fuite d\'air dans le collecteur d\'admission (prise d\'air) (25% des cas)',
      'Debitmetre MAF encrasse ou defectueux (20% des cas)',
      'Sonde lambda amont defaillante ou vieillissante (15% des cas)',
      'Injecteurs encrasses ou partiellement bouches (12% des cas)',
      'Pression de carburant incorrecte (pompe, regulateur, filtre) (10% des cas)',
      'Fuite d\'echappement avant la sonde lambda amont (8% des cas)',
      'Vanne PCV defectueuse ou durites de depression fissures (5% des cas)',
      'Capteur de temperature (ECT ou IAT) defectueux faussant les calculs (5% des cas)'
    ],
    solutions: [
      'Lire les valeurs de STFT et LTFT avec un lecteur OBD pour orienter le diagnostic (diagnostic gratuit)',
      'Effectuer un test fumigene pour localiser les fuites d\'air (diagnostic 50-80 euros)',
      'Nettoyer le debitmetre MAF avec spray specifique (10-15 euros)',
      'Tester la sonde lambda amont (oscillations correctes entre 0,1V et 0,9V)',
      'Verifier la pression de carburant avec manometre (diagnostic 30-60 euros)',
      'Nettoyer les injecteurs avec un additif ou aux ultrasons (80-200 euros)',
      'Remplacer les composants defectueux identifies (variable selon piece)',
      'Verifier l\'absence de fuite d\'echappement en amont de la sonde amont (gratuit)'
    ],
    riskExplanation: "Un systeme de correction de carburant hors limites signifie que le moteur fonctionne avec un melange non optimal, soit trop riche (gaspillage de carburant, encrassement), soit trop pauvre (risque de surchauffe, usure prematuree). Le catalyseur est expose a des conditions anormales qui peuvent le degrader. Si le probleme s'aggrave, des rates d'allumage et des dommages mecaniques peuvent survenir. Le diagnostic est important pour identifier la cause racine car le P0170 est un code general qui peut avoir de nombreuses origines. Reparation recommandee sous 2 a 4 semaines.",
    faq: [
      {
        question: 'Que signifient les valeurs STFT et LTFT et comment les interpreter?',
        answer: 'STFT (Short Term Fuel Trim) est la correction de carburant a court terme, qui varie en temps reel entre environ -25% et +25%. LTFT (Long Term Fuel Trim) est la correction a long terme qui represente la tendance moyenne. Une valeur de 0% signifie que l\'ECU n\'a pas besoin de corriger. Une valeur positive (par exemple +15%) signifie que l\'ECU ajoute du carburant (melange trop pauvre). Une valeur negative (par exemple -10%) signifie que l\'ECU retire du carburant (melange trop riche). Si STFT ou LTFT depassent environ 20-25% en positif ou en negatif, c\'est anormal et le P0170 peut etre genere.'
      },
      {
        question: 'Le P0170 est-il lie au P0171 ou au P0172?',
        answer: 'Oui, le P0170 est souvent un precurseur ou un accompagnateur des codes P0171 (melange trop pauvre) et P0172 (melange trop riche). Le P0170 indique que le systeme de correction est hors limites, tandis que les P0171 et P0172 indiquent le sens de la correction. Par exemple, si l\'ECU doit enrichir massivement le melange pour compenser une prise d\'air, vous pouvez voir a la fois P0170 (correction hors limites) et P0171 (melange pauvre). Traiter la cause du P0170 resout generalement aussi le P0171 ou P0172 associe.'
      },
      {
        question: 'Une fuite d\'air est-elle vraiment la cause la plus frequente?',
        answer: 'Les fuites d\'air (prises d\'air apres le debitmetre MAF) sont effectivement la cause la plus frequente des problemes de correction de carburant, representant environ 25% des cas. L\'air non mesure qui entre dans l\'admission fausse la quantite d\'air reelle par rapport a ce que le MAF a mesure, obligeant l\'ECU a corriger en ajoutant du carburant. Ces fuites se situent souvent au niveau des durites d\'admission, des joints de collecteur, des raccords de depression ou de la vanne PCV. Un test fumigene (injection de fumee dans le circuit d\'admission) est la methode la plus fiable pour les localiser.'
      },
      {
        question: 'Peut-on rouler normalement avec un P0170?',
        answer: 'Dans la plupart des cas, vous pouvez continuer a rouler avec un P0170 sans danger immediat. Le systeme de correction de carburant est concu pour compenser les derives et le moteur continue de fonctionner de maniere acceptable. Cependant, les performances sont degradees, la consommation est augmentee et les emissions sont plus elevees. Si les corrections sont tres importantes (au-dela de 25%), le moteur peut avoir des rates d\'allumage et le catalyseur est davantage sollicite. Planifiez un diagnostic dans les 2 a 4 semaines pour identifier et traiter la cause.'
      },
      {
        question: 'Le nettoyage du MAF peut-il resoudre un P0170?',
        answer: 'Oui, dans environ 20 pourcent des cas, un nettoyage du debitmetre MAF avec un spray specifique (MAF cleaner) resout le P0170. Un MAF encrasse sous-estime le debit d\'air reel, ce qui pousse l\'ECU a enrichir excessivement le melange (correction positive elevee). Le nettoyage est simple, peu couteux (10-15 euros de spray) et prend moins de 30 minutes. Retirez le MAF de son logement, pulverisez le nettoyant sur le fil chaud ou le film sensible, laissez secher completement, puis reinstallez. Effacez le code et faites un essai routier de 20-30 km pour verifier.'
      }
    ],
    relatedCodes: ['P0171', 'P0172', 'P0173', 'P0174', 'P0175']
  },
  P0172: {
    code: 'P0172',
    severity: { level: 2, label: 'Modere', color: 'warning', icon: '🟡' },
    introduction: "Le code P0172 signale un melange air-carburant trop riche sur le banc 1 du moteur. Cela signifie qu'il y a trop de carburant ou pas assez d'air dans la chambre de combustion par rapport au rapport stoechiometrique ideal de 14,7:1. L'ECU detecte cette situation lorsque les corrections de carburant a long terme (LTFT) depassent le seuil de reduction maximale, indiquant que malgre les efforts de l'ECU pour reduire l'injection, le melange reste trop riche. Un melange riche se traduit par une surconsommation de carburant, un encrassement des bougies et du catalyseur, et des emissions polluantes elevees. Ce code est le pendant du P0171 (melange trop pauvre) et partage certaines causes communes comme un debitmetre MAF defaillant ou une pression de carburant incorrecte.",
    symptoms: [
      'Voyant moteur allume en permanence',
      'Consommation de carburant nettement augmentee (10 a 20 pourcent)',
      'Forte odeur de carburant a l\'echappement',
      'Fumee noire a l\'echappement surtout lors des accelerations',
      'Bougies d\'allumage noircies et encrassees',
      'Ralenti irregulier ou legerement instable',
      'Possible perte de puissance due a l\'encrassement'
    ],
    causes: [
      'Injecteurs qui fuient ou restent ouverts trop longtemps (25% des cas)',
      'Debitmetre MAF defectueux surestimant le debit d\'air (20% des cas)',
      'Pression de carburant trop elevee (regulateur defaillant) (15% des cas)',
      'Sonde lambda amont defaillante signalant en permanence un melange pauvre (12% des cas)',
      'Capteur de temperature (ECT) defectueux indiquant un moteur toujours froid (8% des cas)',
      'Filtre a air tres encrasse reduisant excessivement le debit d\'air (8% des cas)',
      'Purgeur de canister (systeme EVAP) bloque ouvert envoyant trop de vapeurs (7% des cas)',
      'Vanne PCV bloquee en position ouverte laissant passer trop de vapeurs d\'huile (5% des cas)'
    ],
    solutions: [
      'Lire les valeurs STFT et LTFT pour confirmer l\'enrichissement (diagnostic gratuit avec OBD)',
      'Verifier et remplacer le filtre a air si encrasse (15-40 euros)',
      'Nettoyer le debitmetre MAF avec spray specifique (10-15 euros)',
      'Tester la pression de carburant: doit etre conforme aux specifications (diagnostic 30-60 euros)',
      'Verifier les injecteurs pour fuites et debit excessif (diagnostic 80-150 euros)',
      'Tester la sonde lambda amont (doit osciller entre 0,1V et 0,9V)',
      'Verifier le capteur de temperature ECT (resistance conforme a la temperature reelle)',
      'Controler le systeme EVAP et la vanne PCV (diagnostic 30-50 euros)'
    ],
    riskExplanation: "Un melange trop riche noie progressivement le catalyseur de carburant imbrue, ce qui le surchauffe et peut le detruire en quelques semaines. Les bougies s'encrassent rapidement, pouvant provoquer des rates d'allumage qui aggravent encore le probleme. L'huile moteur peut etre diluee par le carburant excessif, reduisant la lubrification. La surconsommation augmente significativement les couts d'exploitation. Les emissions de CO et d'hydrocarbures sont tres elevees, entrainant un echec systematique au controle technique. Reparation recommandee sous 2 semaines.",
    faq: [
      {
        question: 'Quelle est la difference entre un P0171 et un P0172?',
        answer: 'Le P0171 indique un melange trop pauvre (pas assez de carburant ou trop d\'air) tandis que le P0172 indique un melange trop riche (trop de carburant ou pas assez d\'air). Les causes sont souvent liees aux memes systemes mais dans des directions opposees. Un MAF defectueux peut causer l\'un ou l\'autre selon le type de defaut: un MAF encrasse sous-estime le debit d\'air (enrichissement, P0172) tandis qu\'une fuite d\'air apres le MAF cause un appauvrissement (P0171). Les deux codes peuvent meme apparaitre alternativement si le systeme oscille entre riche et pauvre.'
      },
      {
        question: 'Comment un capteur de temperature ECT peut-il causer un P0172?',
        answer: 'Le capteur ECT (temperature du liquide de refroidissement) informe l\'ECU de la temperature du moteur. Si le capteur indique que le moteur est plus froid qu\'il ne l\'est reellement (resistance trop elevee), l\'ECU enrichit le melange comme pour un demarrage a froid, meme si le moteur est chaud. Cet enrichissement constant provoque le P0172. Pour tester, comparez la valeur ECT lue par le lecteur OBD avec un thermometre infrarouge pointe sur le boitier du thermostat. Si l\'ECU affiche 40 degres alors que le moteur est a 90 degres, le capteur ECT est defectueux.'
      },
      {
        question: 'Le purgeur de canister peut-il causer un melange trop riche?',
        answer: 'Oui, le systeme EVAP (controle des emissions evaporatives) comprend un canister qui absorbe les vapeurs d\'essence du reservoir. Une electrovanne de purge libere periodiquement ces vapeurs dans l\'admission pour les bruler. Si cette electrovanne reste bloquee ouverte, un flux continu de vapeurs d\'essence entre dans l\'admission en plus du carburant injecte par les injecteurs, enrichissant excessivement le melange. Ce probleme est souvent neglige lors du diagnostic d\'un P0172. Testez l\'electrovanne de purge en la debranchant: si le P0172 disparait, c\'est la cause.'
      },
      {
        question: 'Des bougies noires sont-elles un signe certain de melange riche?',
        answer: 'Des bougies d\'allumage noires et recouvertes de suie ou de depot huileux sont effectivement un indicateur fort de melange trop riche. En fonctionnement normal, une bougie doit avoir une couleur brun clair a brun moyen. Une bougie noire seche indique un melange trop riche en carburant. Une bougie noire et huileuse indique une consommation d\'huile en plus du melange riche. Inspecter les bougies est un diagnostic visuel simple et gratuit qui peut confirmer un P0172 et parfois orienter vers la cause. Si une seule bougie est noire, l\'injecteur de ce cylindre est probablement en cause.'
      },
      {
        question: 'Le P0172 peut-il endommager le catalyseur?',
        answer: 'Oui, un melange trop riche est l\'une des causes principales de destruction prematuree du catalyseur. Le carburant excedentaire non brule dans les cylindres atteint le catalyseur ou il s\'enflamme, generant des temperatures extremes (au-dessus de 900 degres) qui peuvent fondre le substrat ceramique interne. Les symptomes d\'un catalyseur en surchauffe sont une odeur d\'oeufs pourris, une chaleur excessive sous le vehicule et eventuellement une lueur rouge visible la nuit. Si vous sentez ces symptomes avec un P0172, arretez-vous immediatement et faites remorquer le vehicule pour eviter un incendie.'
      }
    ],
    relatedCodes: ['P0171', 'P0170', 'P0175', 'P0100', 'P0130']
  }
};
