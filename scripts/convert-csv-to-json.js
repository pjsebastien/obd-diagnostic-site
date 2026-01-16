const fs = require('fs');
const path = require('path');

// Liste des 100 codes OBD les plus fréquents/populaires
const popularCodes = [
  'P0300', 'P0301', 'P0302', 'P0303', 'P0304', 'P0305', 'P0306', 'P0307', 'P0308',
  'P0171', 'P0172', 'P0174', 'P0175',
  'P0420', 'P0421', 'P0430', 'P0431',
  'P0130', 'P0131', 'P0132', 'P0133', 'P0134', 'P0135', 'P0136', 'P0137', 'P0138',
  'P0140', 'P0141', 'P0150', 'P0151', 'P0152', 'P0153', 'P0154', 'P0155', 'P0156',
  'P0157', 'P0158', 'P0160', 'P0161',
  'P0400', 'P0401', 'P0402', 'P0403', 'P0404', 'P0405',
  'P0120', 'P0121', 'P0122', 'P0123', 'P0220', 'P0221', 'P0222', 'P0223',
  'P0115', 'P0116', 'P0117', 'P0118', 'P0125', 'P0128',
  'P0100', 'P0101', 'P0102', 'P0103', 'P0104',
  'P0105', 'P0106', 'P0107', 'P0108',
  'P0200', 'P0201', 'P0202', 'P0203', 'P0204', 'P0205', 'P0206',
  'P0335', 'P0336', 'P0340', 'P0341', 'P0345', 'P0346',
  'P0440', 'P0441', 'P0442', 'P0443', 'P0446', 'P0455', 'P0456',
  'P0500', 'P0501', 'P0502', 'P0503',
  'P0505', 'P0506', 'P0507',
  'P0700', 'P0715', 'P0720', 'P0730', 'P0740', 'P0750', 'P0755',
  'C0035', 'C0040', 'C0045', 'C0050',
  'B0100', 'B0101',
  'U0100', 'U0101', 'U0121', 'U0140', 'U0155'
];

// Dictionnaire de traduction complet - expressions longues en premier
const translationDict = [
  // Expressions très spécifiques et longues
  ['Mass or Volume Air Flow Circuit Malfunction', 'Dysfonctionnement du circuit du débitmètre d\'air'],
  ['Mass or Volume Air Flow Circuit Range/Performance Problem', 'Problème de plage/performance du circuit du débitmètre d\'air'],
  ['Mass or Volume Air Flow Circuit Low Input', 'Signal d\'entrée bas du circuit du débitmètre d\'air'],
  ['Mass or Volume Air Flow Circuit High Input', 'Signal d\'entrée haut du circuit du débitmètre d\'air'],
  ['Mass or Volume Air Flow Circuit Intermittent', 'Circuit du débitmètre d\'air intermittent'],
  ['Manifold Absolute Pressure/Barometric Pressure Circuit Malfunction', 'Dysfonctionnement du circuit de pression absolue du collecteur'],
  ['Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance Problem', 'Problème de plage/performance du circuit MAP'],
  ['Manifold Absolute Pressure/Barometric Pressure Circuit Low Input', 'Signal d\'entrée bas du circuit MAP'],
  ['Manifold Absolute Pressure/Barometric Pressure Circuit High Input', 'Signal d\'entrée haut du circuit MAP'],
  ['Manifold Absolute Pressure/Barometric Pressure Circuit Intermittent', 'Circuit MAP intermittent'],
  ['Intake Air Temperature Circuit Malfunction', 'Dysfonctionnement du circuit de température d\'air d\'admission'],
  ['Intake Air Temperature Circuit Range/Performance Problem', 'Problème de plage/performance du circuit de température d\'air d\'admission'],
  ['Intake Air Temperature Circuit Low Input', 'Signal d\'entrée bas du circuit de température d\'air d\'admission'],
  ['Intake Air Temperature Circuit High Input', 'Signal d\'entrée haut du circuit de température d\'air d\'admission'],
  ['Intake Air Temperature Circuit Intermittent', 'Circuit de température d\'air d\'admission intermittent'],
  ['Engine Coolant Temperature Circuit Malfunction', 'Dysfonctionnement du circuit de température du liquide de refroidissement'],
  ['Engine Coolant Temperature Circuit Range/Performance Problem', 'Problème de plage/performance du circuit de température moteur'],
  ['Engine Coolant Temperature Circuit Low Input', 'Signal d\'entrée bas du circuit de température moteur'],
  ['Engine Coolant Temperature Circuit High Input', 'Signal d\'entrée haut du circuit de température moteur'],
  ['Engine Coolant Temperature Circuit Intermittent', 'Circuit de température moteur intermittent'],
  ['Throttle Position Sensor/Switch A Circuit Malfunction', 'Dysfonctionnement du circuit A du capteur de position du papillon'],
  ['Throttle Position Sensor/Switch A Circuit Range/Performance Problem', 'Problème de plage/performance du circuit A du capteur papillon'],
  ['Throttle Position Sensor/Switch A Circuit Low Input', 'Signal d\'entrée bas du circuit A du capteur papillon'],
  ['Throttle Position Sensor/Switch A Circuit High Input', 'Signal d\'entrée haut du circuit A du capteur papillon'],
  ['Throttle Position Sensor/Switch A Circuit Intermittent', 'Circuit A du capteur papillon intermittent'],
  ['Insufficient Coolant Temperature for Closed Loop Fuel Control', 'Température du liquide de refroidissement insuffisante pour le contrôle en boucle fermée'],
  ['Insufficient Coolant Temperature for Stable Operation', 'Température du liquide de refroidissement insuffisante pour un fonctionnement stable'],
  ['ECT Excessive Time to Closed Loop Fuel Control', 'Temps excessif pour atteindre la boucle fermée du contrôle carburant'],
  ['Coolant Thermostat Malfunction', 'Dysfonctionnement du thermostat du liquide de refroidissement'],
  ['O2 Sensor Circuit Malfunction', 'Dysfonctionnement du circuit de la sonde lambda'],
  ['O2 Sensor Circuit Low Voltage', 'Tension basse du circuit de la sonde lambda'],
  ['O2 Sensor Circuit High Voltage', 'Tension haute du circuit de la sonde lambda'],
  ['O2 Sensor Circuit Slow Response', 'Réponse lente du circuit de la sonde lambda'],
  ['O2 Sensor Circuit No Activity Detected', 'Aucune activité détectée sur le circuit de la sonde lambda'],
  ['O2 Sensor Heater Circuit Malfunction', 'Dysfonctionnement du circuit de chauffage de la sonde lambda'],
  ['Fuel Trim Malfunction', 'Dysfonctionnement de la correction carburant'],
  ['Fuel Trim System Lean', 'Système de correction carburant trop pauvre'],
  ['Fuel Trim too Rich', 'Correction carburant trop riche'],
  ['Fuel Trim too Lean', 'Correction carburant trop pauvre'],
  ['Fuel Composition Sensor Circuit Malfunction', 'Dysfonctionnement du circuit du capteur de composition carburant'],
  ['Fuel Composition Sensor Circuit Range/Performance', 'Problème de plage/performance du capteur de composition carburant'],
  ['Fuel Composition Sensor Circuit Low Input', 'Signal d\'entrée bas du capteur de composition carburant'],
  ['Fuel Composition Sensor Circuit High Input', 'Signal d\'entrée haut du capteur de composition carburant'],
  ['Fuel Temperature Sensor A Circuit Malfunction', 'Dysfonctionnement du circuit A du capteur de température carburant'],
  ['Fuel Temperature Sensor A Circuit Range/Performance', 'Problème de plage/performance du capteur de température carburant A'],
  ['Fuel Temperature Sensor A Circuit Low Input', 'Signal d\'entrée bas du capteur de température carburant A'],
  ['Fuel Temperature Sensor A Circuit High Input', 'Signal d\'entrée haut du capteur de température carburant A'],
  ['Fuel Temperature Sensor A Circuit Intermittent', 'Circuit du capteur de température carburant A intermittent'],
  ['Fuel Temperature Sensor B Circuit Malfunction', 'Dysfonctionnement du circuit B du capteur de température carburant'],
  ['Fuel Temperature Sensor B Circuit Range/Performance', 'Problème de plage/performance du capteur de température carburant B'],
  ['Fuel Temperature Sensor B Circuit Low Input', 'Signal d\'entrée bas du capteur de température carburant B'],
  ['Fuel Temperature Sensor B Circuit High Input', 'Signal d\'entrée haut du capteur de température carburant B'],
  ['Fuel Temperature Sensor B Circuit Intermittent', 'Circuit du capteur de température carburant B intermittent'],
  ['Fuel Rail Pressure Sensor Circuit Malfunction', 'Dysfonctionnement du circuit du capteur de pression de rampe'],
  ['Fuel Rail Pressure Sensor Circuit Range/Performance', 'Problème de plage/performance du capteur de pression de rampe'],
  ['Fuel Rail Pressure Sensor Circuit Low Input', 'Signal d\'entrée bas du capteur de pression de rampe'],
  ['Fuel Rail Pressure Sensor Circuit High Input', 'Signal d\'entrée haut du capteur de pression de rampe'],
  ['Fuel Rail Pressure Sensor Circuit Intermittent', 'Circuit du capteur de pression de rampe intermittent'],
  ['Engine Oil Temperature Sensor Malfunction', 'Dysfonctionnement du capteur de température d\'huile moteur'],
  ['Engine Oil Temperature Sensor Range/Performance', 'Problème de plage/performance du capteur de température d\'huile'],
  ['Engine Oil Temperature Sensor Low', 'Signal bas du capteur de température d\'huile moteur'],
  ['Engine Oil Temperature Sensor High', 'Signal haut du capteur de température d\'huile moteur'],
  ['Engine Oil Temperature Sensor Intermittent', 'Capteur de température d\'huile moteur intermittent'],
  ['Injector Circuit Malfunction', 'Dysfonctionnement du circuit d\'injecteur'],
  ['Injector Circuit Malfunction - Cylinder', 'Dysfonctionnement du circuit d\'injecteur - Cylindre'],
  ['Random/Multiple Cylinder Misfire Detected', 'Ratés d\'allumage aléatoires/multiples détectés'],
  ['Cylinder Misfire Detected', 'Raté d\'allumage détecté au cylindre'],
  ['Misfire Detected', 'Raté d\'allumage détecté'],
  ['Crankshaft Position Sensor A Circuit Malfunction', 'Dysfonctionnement du circuit A du capteur de position vilebrequin'],
  ['Crankshaft Position Sensor A Circuit Range/Performance', 'Problème de plage/performance du capteur de position vilebrequin A'],
  ['Crankshaft Position Sensor A Circuit Low Input', 'Signal d\'entrée bas du capteur de position vilebrequin A'],
  ['Crankshaft Position Sensor A Circuit High Input', 'Signal d\'entrée haut du capteur de position vilebrequin A'],
  ['Crankshaft Position Sensor A Circuit Intermittent', 'Circuit du capteur de position vilebrequin A intermittent'],
  ['Camshaft Position Sensor A Circuit Malfunction', 'Dysfonctionnement du circuit A du capteur de position d\'arbre à cames'],
  ['Camshaft Position Sensor A Circuit Range/Performance', 'Problème de plage/performance du capteur d\'arbre à cames A'],
  ['Camshaft Position Sensor A Circuit Low Input', 'Signal d\'entrée bas du capteur d\'arbre à cames A'],
  ['Camshaft Position Sensor A Circuit High Input', 'Signal d\'entrée haut du capteur d\'arbre à cames A'],
  ['Camshaft Position Sensor A Circuit Intermittent', 'Circuit du capteur d\'arbre à cames A intermittent'],
  ['EGR Flow Malfunction', 'Dysfonctionnement du débit EGR'],
  ['EGR Flow Insufficient Detected', 'Débit EGR insuffisant détecté'],
  ['EGR Flow Excessive Detected', 'Débit EGR excessif détecté'],
  ['EGR Control Circuit Malfunction', 'Dysfonctionnement du circuit de contrôle EGR'],
  ['EGR Sensor A Circuit Range/Performance', 'Problème de plage/performance du circuit du capteur EGR A'],
  ['EGR Sensor A Circuit Low', 'Signal bas du circuit du capteur EGR A'],
  ['Catalyst System Efficiency Below Threshold', 'Efficacité du système catalytique sous le seuil'],
  ['Catalyst System Low Efficiency', 'Faible efficacité du système catalytique'],
  ['Evaporative Emission Control System Malfunction', 'Dysfonctionnement du système de contrôle des émissions par évaporation'],
  ['Evaporative Emission Control System Incorrect Purge Flow', 'Débit de purge incorrect du système EVAP'],
  ['Evaporative Emission Control System Leak Detected (small leak)', 'Petite fuite détectée dans le système EVAP'],
  ['Evaporative Emission Control System Leak Detected (large leak)', 'Grande fuite détectée dans le système EVAP'],
  ['Evaporative Emission Control System Leak Detected (very small leak)', 'Très petite fuite détectée dans le système EVAP'],
  ['Evaporative Emission Control System Purge Control Valve Circuit Malfunction', 'Dysfonctionnement du circuit de la vanne de purge EVAP'],
  ['Evaporative Emission Control System Vent Control Circuit Malfunction', 'Dysfonctionnement du circuit de ventilation EVAP'],
  ['Vehicle Speed Sensor Malfunction', 'Dysfonctionnement du capteur de vitesse véhicule'],
  ['Vehicle Speed Sensor Range/Performance', 'Problème de plage/performance du capteur de vitesse'],
  ['Vehicle Speed Sensor Circuit Low Input', 'Signal d\'entrée bas du capteur de vitesse'],
  ['Vehicle Speed Sensor Circuit Intermittent/Erratic/High', 'Circuit du capteur de vitesse intermittent/erratique/haut'],
  ['Idle Control System Malfunction', 'Dysfonctionnement du système de contrôle du ralenti'],
  ['Idle Control System RPM Lower Than Expected', 'Régime de ralenti inférieur à la normale'],
  ['Idle Control System RPM Higher Than Expected', 'Régime de ralenti supérieur à la normale'],
  ['Transmission Control System Malfunction', 'Dysfonctionnement du système de contrôle de transmission'],
  ['Input/Turbine Speed Sensor Circuit Malfunction', 'Dysfonctionnement du circuit du capteur de vitesse d\'entrée/turbine'],
  ['Output Speed Sensor Circuit Malfunction', 'Dysfonctionnement du circuit du capteur de vitesse de sortie'],
  ['Incorrect Gear Ratio', 'Rapport de vitesse incorrect'],
  ['Torque Converter Clutch Circuit Malfunction', 'Dysfonctionnement du circuit d\'embrayage du convertisseur de couple'],
  ['Shift Solenoid A Malfunction', 'Dysfonctionnement de l\'électrovanne de passage A'],
  ['Shift Solenoid B Malfunction', 'Dysfonctionnement de l\'électrovanne de passage B'],
  ['Lost Communication With', 'Communication perdue avec'],
  ['No Communication With', 'Absence de communication avec'],
  ['Short to Ground', 'Court-circuit à la masse'],
  ['Short to Battery', 'Court-circuit au positif'],
  ['Short To Ground', 'Court-circuit à la masse'],
  ['Short To Battery', 'Court-circuit au positif'],
  ['Circuit Malfunction', 'Dysfonctionnement du circuit'],
  ['Circuit Failure', 'Défaillance du circuit'],
  ['Circuit Open', 'Circuit ouvert'],
  ['Circuit Short', 'Court-circuit'],
  ['Circuit Low', 'Circuit signal bas'],
  ['Circuit High', 'Circuit signal haut'],
  ['Circuit Range/Performance', 'Circuit hors plage/performance'],
  ['Circuit Intermittent', 'Circuit intermittent'],
  ['Range/Performance Problem', 'Problème de plage/performance'],
  ['Range/Performance', 'Plage/performance'],
  ['Low Input', 'Signal d\'entrée bas'],
  ['High Input', 'Signal d\'entrée haut'],
  ['No Activity Detected', 'Aucune activité détectée'],
  ['Slow Response', 'Réponse lente'],
  ['Below Threshold', 'Sous le seuil'],
  ['Above Threshold', 'Au-dessus du seuil'],
  ['Stuck Open', 'Bloqué en position ouverte'],
  ['Stuck Closed', 'Bloqué en position fermée'],
  ['Stuck Off', 'Bloqué à l\'arrêt'],
  ['Stuck On', 'Bloqué en marche'],
  ['Too Lean', 'Mélange trop pauvre'],
  ['Too Rich', 'Mélange trop riche'],
  ['System Lean', 'Système trop pauvre'],
  ['System Rich', 'Système trop riche'],
  ['Higher Than Expected', 'Plus élevé que prévu'],
  ['Lower Than Expected', 'Plus bas que prévu'],
  ['Bank 1 Sensor 1', 'Banque 1 Capteur 1'],
  ['Bank 1 Sensor 2', 'Banque 1 Capteur 2'],
  ['Bank 1 Sensor 3', 'Banque 1 Capteur 3'],
  ['Bank 2 Sensor 1', 'Banque 2 Capteur 1'],
  ['Bank 2 Sensor 2', 'Banque 2 Capteur 2'],
  ['Bank 2 Sensor 3', 'Banque 2 Capteur 3'],
  ['(Bank 1)', '(Banque 1)'],
  ['(Bank 2)', '(Banque 2)'],
  ['Bank 1', 'Banque 1'],
  ['Bank 2', 'Banque 2'],
  ['Cylinder 1', 'Cylindre 1'],
  ['Cylinder 2', 'Cylindre 2'],
  ['Cylinder 3', 'Cylindre 3'],
  ['Cylinder 4', 'Cylindre 4'],
  ['Cylinder 5', 'Cylindre 5'],
  ['Cylinder 6', 'Cylindre 6'],
  ['Cylinder 7', 'Cylindre 7'],
  ['Cylinder 8', 'Cylindre 8'],
  ['Cylinder 9', 'Cylindre 9'],
  ['Cylinder 10', 'Cylindre 10'],
  ['Cylinder 11', 'Cylindre 11'],
  ['Cylinder 12', 'Cylindre 12'],
  ['Front Left', 'Avant gauche'],
  ['Front Right', 'Avant droit'],
  ['Rear Left', 'Arrière gauche'],
  ['Rear Right', 'Arrière droit'],
  ['Left Front', 'Avant gauche'],
  ['Right Front', 'Avant droit'],
  ['Left Rear', 'Arrière gauche'],
  ['Right Rear', 'Arrière droit'],
  ['Air Bag', 'Airbag'],
  ['Air Flow', 'Débit d\'air'],
  ['Air Fuel', 'Air/Carburant'],
  ['Air Temperature', 'Température d\'air'],
  ['Anti-Lock', 'Antiblocage'],
  ['Anti-Theft', 'Antivol'],
];

// Mots individuels pour traduction finale
const wordDict = {
  'Malfunction': 'Dysfonctionnement',
  'Circuit': 'Circuit',
  'Sensor': 'Capteur',
  'Engine': 'Moteur',
  'Fuel': 'Carburant',
  'Air': 'Air',
  'Temperature': 'Température',
  'Pressure': 'Pression',
  'Voltage': 'Tension',
  'Speed': 'Vitesse',
  'Throttle': 'Papillon',
  'Position': 'Position',
  'Coolant': 'Liquide de refroidissement',
  'Intake': 'Admission',
  'Exhaust': 'Échappement',
  'Catalyst': 'Catalyseur',
  'Catalytic': 'Catalytique',
  'Efficiency': 'Efficacité',
  'Mass': 'Masse',
  'Volume': 'Volume',
  'Flow': 'Débit',
  'Manifold': 'Collecteur',
  'Absolute': 'Absolue',
  'Barometric': 'Barométrique',
  'Thermostat': 'Thermostat',
  'Heater': 'Réchauffeur',
  'Lean': 'Pauvre',
  'Rich': 'Riche',
  'Trim': 'Correction',
  'Composition': 'Composition',
  'Rail': 'Rampe',
  'Oil': 'Huile',
  'Injector': 'Injecteur',
  'Injection': 'Injection',
  'Crankshaft': 'Vilebrequin',
  'Camshaft': 'Arbre à cames',
  'Timing': 'Calage',
  'Misfire': 'Raté d\'allumage',
  'Detected': 'Détecté',
  'Random': 'Aléatoire',
  'Multiple': 'Multiple',
  'System': 'Système',
  'Control': 'Contrôle',
  'Module': 'Module',
  'Switch': 'Contacteur',
  'Stuck': 'Bloqué',
  'Open': 'Ouvert',
  'Closed': 'Fermé',
  'Short': 'Court-circuit',
  'Ground': 'Masse',
  'Performance': 'Performance',
  'Emission': 'Émission',
  'Emissions': 'Émissions',
  'Evaporative': 'Par évaporation',
  'Purge': 'Purge',
  'Vent': 'Ventilation',
  'Leak': 'Fuite',
  'Small': 'Petite',
  'Large': 'Grande',
  'Gross': 'Importante',
  'Vehicle': 'Véhicule',
  'Output': 'Sortie',
  'Input': 'Entrée',
  'Idle': 'Ralenti',
  'Higher': 'Supérieur',
  'Lower': 'Inférieur',
  'Expected': 'Attendu',
  'Transmission': 'Transmission',
  'Gear': 'Vitesse',
  'Ratio': 'Rapport',
  'Incorrect': 'Incorrect',
  'Torque': 'Couple',
  'Converter': 'Convertisseur',
  'Solenoid': 'Électrovanne',
  'Shift': 'Passage',
  'Clutch': 'Embrayage',
  'Brake': 'Frein',
  'Brakes': 'Freins',
  'Wheel': 'Roue',
  'Front': 'Avant',
  'Rear': 'Arrière',
  'Left': 'Gauche',
  'Right': 'Droite',
  'Communication': 'Communication',
  'Lost': 'Perdue',
  'Bus': 'Bus',
  'Network': 'Réseau',
  'Failure': 'Défaillance',
  'Error': 'Erreur',
  'Problem': 'Problème',
  'Invalid': 'Invalide',
  'Missing': 'Manquant',
  'Excessive': 'Excessif',
  'Insufficient': 'Insuffisant',
  'Abnormal': 'Anormal',
  'Unexpected': 'Inattendu',
  'Primary': 'Primaire',
  'Secondary': 'Secondaire',
  'Main': 'Principal',
  'Auxiliary': 'Auxiliaire',
  'Lamp': 'Témoin',
  'Light': 'Voyant',
  'Signal': 'Signal',
  'Data': 'Données',
  'Message': 'Message',
  'Request': 'Requête',
  'Response': 'Réponse',
  'Timeout': 'Délai dépassé',
  'Implausible': 'Incohérent',
  'Plausibility': 'Plausibilité',
  'Battery': 'Batterie',
  'Alternator': 'Alternateur',
  'Starter': 'Démarreur',
  'Ignition': 'Allumage',
  'Coil': 'Bobine',
  'Spark': 'Bougie',
  'Plug': 'Bougie',
  'Wire': 'Câble',
  'Wiring': 'Câblage',
  'Connector': 'Connecteur',
  'Fuse': 'Fusible',
  'Relay': 'Relais',
  'Actuator': 'Actionneur',
  'Motor': 'Moteur',
  'Pump': 'Pompe',
  'Valve': 'Vanne',
  'Filter': 'Filtre',
  'Housing': 'Boîtier',
  'Cover': 'Couvercle',
  'Gasket': 'Joint',
  'Seal': 'Joint',
  'Hose': 'Durite',
  'Pipe': 'Conduit',
  'Tube': 'Tube',
  'Line': 'Conduite',
  'Tank': 'Réservoir',
  'Reservoir': 'Réservoir',
  'Level': 'Niveau',
  'Low': 'Bas',
  'High': 'Haut',
  'Over': 'Dépassement',
  'Under': 'Sous',
  'Above': 'Au-dessus',
  'Below': 'En dessous',
  'Active': 'Actif',
  'Inactive': 'Inactif',
  'Enabled': 'Activé',
  'Disabled': 'Désactivé',
  'Condition': 'Condition',
  'Conditions': 'Conditions',
  'Met': 'Remplies',
  'Required': 'Requis',
  'Stored': 'Mémorisé',
  'Pending': 'En attente',
  'Confirmed': 'Confirmé',
  'Current': 'Actuel',
  'Historical': 'Historique',
  'Permanent': 'Permanent',
  'Intermittent': 'Intermittent',
  'Continuous': 'Continu',
  'Momentary': 'Momentané',
  'Steering': 'Direction',
  'Power': 'Assistée',
  'Climate': 'Climatisation',
  'Cruise': 'Régulateur',
  'Traction': 'Traction',
  'Stability': 'Stabilité',
  'Assembly': 'Ensemble',
  'Pushbutton': 'Bouton-poussoir',
  'Sender': 'Émetteur',
  'Running': 'Fonctionnement',
  'Board': 'Tableau',
  'Emergency': 'Urgence',
  'Roadside': 'Assistance routière',
  'Assistance': 'Assistance',
  'Number': 'Nombre',
  'Programmed': 'Programmées',
  'Keys': 'Clés',
  'Minimum': 'Minimum',
  'Maximum': 'Maximum',
  'Threshold': 'Seuil',
  'Range': 'Plage',
  'Erratic': 'Erratique',
  'Turbine': 'Turbine',
  'Knock': 'Cliquetis',
  'Oxygen': 'Oxygène',
  'Compressor': 'Compresseur',
  'Refrigerant': 'Réfrigérant',
  'Bag': 'Coussin',
  'Lock': 'Verrouillage',
  'Anti': 'Anti',
  'Theft': 'Vol',
  'Indicator': 'Indicateur',
  'Check': 'Vérifier',
  'Warning': 'Avertissement',
  'Contribution': 'Contribution',
  'Fault': 'Défaut',
};

function translateToFrench(text) {
  let result = text;

  // Appliquer les traductions d'expressions (du plus long au plus court)
  for (const [eng, fr] of translationDict) {
    const regex = new RegExp(eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = result.replace(regex, fr);
  }

  // Appliquer les traductions de mots individuels
  for (const [eng, fr] of Object.entries(wordDict)) {
    const regex = new RegExp(`\\b${eng}\\b`, 'g');
    result = result.replace(regex, fr);
  }

  // Nettoyer les doubles espaces et la ponctuation
  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

// Génération d'explications simplifiées pour débutants
function generateSimplifiedExplanation(code, descriptionFr, descriptionEn) {
  const codePrefix = code.charAt(0);
  const explanations = [];

  // Explication basée sur le préfixe du code
  switch (codePrefix) {
    case 'P':
      explanations.push('Ce code concerne le groupe motopropulseur de votre véhicule (moteur et transmission).');
      break;
    case 'B':
      explanations.push('Ce code concerne la carrosserie et les équipements de confort de votre véhicule.');
      break;
    case 'C':
      explanations.push('Ce code concerne le châssis de votre véhicule (freins, direction, suspension).');
      break;
    case 'U':
      explanations.push('Ce code concerne la communication entre les différents calculateurs de votre véhicule.');
      break;
  }

  // Explications spécifiques basées sur les mots-clés dans la description
  const descLower = descriptionEn.toLowerCase();

  if (descLower.includes('misfire')) {
    explanations.push('Un raté d\'allumage signifie que le carburant ne brûle pas correctement dans un ou plusieurs cylindres. Cela peut provoquer des vibrations, une perte de puissance ou une surconsommation.');
    explanations.push('Causes possibles : bougies usées, bobines d\'allumage défectueuses, injecteurs encrassés ou problème de compression.');
  }

  if (descLower.includes('catalyst') || descLower.includes('catalytic')) {
    explanations.push('Le catalyseur (pot catalytique) est un élément du système d\'échappement qui réduit les émissions polluantes.');
    explanations.push('Un rendement insuffisant peut indiquer un catalyseur usé, une sonde lambda défectueuse, ou des ratés d\'allumage répétés qui ont endommagé le catalyseur.');
  }

  if (descLower.includes('o2 sensor') || descLower.includes('oxygen sensor')) {
    explanations.push('La sonde lambda (ou sonde O2) mesure la quantité d\'oxygène dans les gaz d\'échappement pour optimiser le mélange air/carburant.');
    explanations.push('Une sonde défectueuse peut entraîner une surconsommation et des émissions polluantes excessives.');
  }

  if (descLower.includes('fuel trim') || descLower.includes('lean') || descLower.includes('rich')) {
    explanations.push('Ce code indique un problème de mélange air/carburant. Un mélange "pauvre" contient trop d\'air, un mélange "riche" contient trop de carburant.');
    explanations.push('Causes possibles : fuite d\'air au niveau de l\'admission, capteur MAF encrassé, injecteurs défectueux ou problème de pression de carburant.');
  }

  if (descLower.includes('throttle') || descLower.includes('accelerator')) {
    explanations.push('Le capteur de position du papillon des gaz indique au calculateur la position de la pédale d\'accélérateur.');
    explanations.push('Un dysfonctionnement peut provoquer des à-coups, un ralenti instable ou un mode dégradé (puissance limitée).');
  }

  if (descLower.includes('coolant') || descLower.includes('temperature')) {
    explanations.push('Ce capteur mesure la température du liquide de refroidissement du moteur.');
    explanations.push('Une valeur incorrecte peut affecter le démarrage à froid, la consommation et le chauffage de l\'habitacle.');
  }

  if (descLower.includes('mass air flow') || descLower.includes('maf')) {
    explanations.push('Le débitmètre d\'air (MAF) mesure la quantité d\'air entrant dans le moteur.');
    explanations.push('Un capteur encrassé ou défectueux peut provoquer des problèmes de démarrage, des à-coups ou une surconsommation.');
  }

  if (descLower.includes('crankshaft') || descLower.includes('camshaft')) {
    explanations.push('Ces capteurs surveillent la position et la vitesse de rotation du vilebrequin et de l\'arbre à cames.');
    explanations.push('Ils sont essentiels pour le calage de l\'injection et de l\'allumage. Un défaut peut empêcher le démarrage du moteur.');
  }

  if (descLower.includes('egr')) {
    explanations.push('La vanne EGR (recirculation des gaz d\'échappement) réduit les émissions de NOx en renvoyant une partie des gaz d\'échappement dans l\'admission.');
    explanations.push('Une vanne encrassée ou bloquée peut provoquer des pertes de puissance, un ralenti instable ou une fumée excessive.');
  }

  if (descLower.includes('evaporative') || descLower.includes('evap')) {
    explanations.push('Le système EVAP récupère les vapeurs de carburant du réservoir pour éviter leur rejet dans l\'atmosphère.');
    explanations.push('Une fuite (souvent un bouchon de réservoir mal serré) peut déclencher ce code.');
  }

  if (descLower.includes('transmission') || descLower.includes('gear') || descLower.includes('shift')) {
    explanations.push('Ce code concerne la boîte de vitesses automatique ou robotisée.');
    explanations.push('Un problème peut se manifester par des passages de vitesses brutaux, retardés ou impossibles.');
  }

  if (descLower.includes('abs') || descLower.includes('wheel speed')) {
    explanations.push('Ce code concerne le système antiblocage des roues (ABS).');
    explanations.push('Un capteur de vitesse de roue défectueux peut désactiver l\'ABS et l\'ESP.');
  }

  if (descLower.includes('communication') || descLower.includes('lost') || descLower.includes('bus')) {
    explanations.push('Ce code indique un problème de communication entre les calculateurs du véhicule.');
    explanations.push('Causes possibles : câblage endommagé, calculateur défaillant ou problème de masse.');
  }

  if (descLower.includes('circuit')) {
    if (descLower.includes('low')) {
      explanations.push('Un signal "bas" peut indiquer un court-circuit à la masse, un câble coupé ou un capteur défaillant.');
    }
    if (descLower.includes('high')) {
      explanations.push('Un signal "haut" peut indiquer un court-circuit au positif ou un capteur défaillant.');
    }
    if (descLower.includes('open')) {
      explanations.push('Un circuit "ouvert" signifie une coupure dans le câblage ou une connexion défectueuse.');
    }
    if (descLower.includes('intermittent')) {
      explanations.push('Un problème "intermittent" apparaît et disparaît. Vérifiez les connexions, le câblage et recherchez des faux contacts.');
    }
  }

  // Ajouter un conseil général si pas d'explication spécifique
  if (explanations.length === 1) {
    explanations.push('Ce code indique un dysfonctionnement détecté par le calculateur de votre véhicule.');
    explanations.push('Il est recommandé de faire diagnostiquer votre véhicule par un professionnel pour identifier la cause exacte du problème.');
  }

  return explanations.join(' ');
}

// Lire le fichier CSV
const csvPath = path.join(__dirname, '..', 'data', 'obd-trouble-codes.csv');
const jsonPath = path.join(__dirname, '..', 'data', 'obd_codes.json');

const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n').filter(line => line.trim());

const codes = [];

for (const line of lines) {
  // Parser le format CSV "CODE","DESCRIPTION"
  const match = line.match(/"([^"]+)","(.+)"/);
  if (match) {
    const code = match[1].trim();
    let descriptionEn = match[2].trim();

    // Nettoyer la description (enlever ; et guillemets supplémentaires)
    descriptionEn = descriptionEn.replace(/;$/, '').replace(/""/g, '"').replace(/"$/, '');

    const descriptionFr = translateToFrench(descriptionEn);
    const explication = generateSimplifiedExplanation(code, descriptionFr, descriptionEn);

    codes.push({
      code: code,
      description: descriptionFr,
      descriptionEn: descriptionEn,
      explication: explication,
      popular: popularCodes.includes(code)
    });
  }
}

// Trier par code
codes.sort((a, b) => a.code.localeCompare(b.code));

// Écrire le fichier JSON
fs.writeFileSync(jsonPath, JSON.stringify(codes, null, 2), 'utf-8');

console.log(`Conversion terminée: ${codes.length} codes convertis`);
console.log(`Codes populaires: ${codes.filter(c => c.popular).length}`);

// Afficher quelques exemples
console.log('\n--- Exemples de codes convertis ---');
const examples = ['P0171', 'P0300', 'P0420', 'P0100', 'U0100'];
for (const ex of examples) {
  const found = codes.find(c => c.code === ex);
  if (found) {
    console.log(`\n${found.code}:`);
    console.log(`  FR: ${found.description}`);
    console.log(`  EN: ${found.descriptionEn}`);
    console.log(`  Explication: ${found.explication.substring(0, 150)}...`);
  }
}
