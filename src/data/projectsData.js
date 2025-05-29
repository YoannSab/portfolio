const projectsData = [
  {
    id: 1,
    title: "Paroldle",
    description: "Un jeu de devinettes de paroles de chansons inspiré par Wordle, développé en ReactJS.",
    technologies: ["JavaScript", "React.js"],
    imageUrl: "/images/paroldle.png",
    screenshots: [
      "/images/paroldle_screenshot1.png",
    ],
    githubUrl: "https://github.com/YoannSab/paroldle",
    liveUrl: "https://yoannsab.github.io/paroldle",
    featured: true,
    projectType: "Projet Perso",
    year: 2025,
    details: "Paroldle est un jeu qui met au défi les joueurs de deviner des paroles de chansons populaires. Inspiré par le concept de Wordle, ce jeu propose une nouvelle énigme musicale chaque jour. Développé avec React, le projet inclut une base de données de chansons et un algorithme qui évalue la proximité des propositions du joueur avec la réponse correcte."
  },
  {
    id: 2,
    title: "Bibou Bot",
    description: "Un bot Twitch développé en JavaScript permettant l'interaction avec le chat et l'affichage d'informations sur League of Legends.",
    technologies: ["JavaScript", "Node.js", "Rest API"],
    imageUrl: "/images/biboubot.png",
    githubUrl: "https://github.com/YoannSab/bibou_bot",
    featured: true,
    projectType: "Projet Perso",
    year: 2023,
    details: "Bibou Bot est un bot Twitch interactif qui met à disposition une vingtaine de commandes pour faire interagir le chat. Il récupère également des informations en temps réel sur les parties de League of Legends. Développé avec Node.js, ce bot utilise les API de Twitch et Riot Games pour améliorer l'expérience des spectateurs sur les streams."
  },
  {
    id: 3,
    title: "Face Clustering",
    description: "Projet d'analyse et de regroupement de visages utilisant des techniques de machine learning.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    imageUrl: "/images/face_clustering.png",
    githubUrl: "https://github.com/YoannSab/face_clustering",
    featured: true,
    projectType: "Projet Perso",
    year: 2023,
    details: "Ce projet (pas tout à fait abouti) utilise des techniques avancées de machine learning pour détecter, extraire et regrouper automatiquement des visages dans une collection d'images. L'application utilise des algorithmes de clustering pour organiser les visages similaires ensemble, facilitant ainsi la gestion et l'organisation de grandes collections de photos. Développé avec Python et diverses bibliothèques de vision par ordinateur."
  },
  {
    id: 4,
    title: "Seahorse",
    description: "Framework Python pour la création d'agent intelligent pour jeux de société.",
    technologies: ["Python"],
    imageUrl: "/images/seahorse.png",
    githubUrl: "https://github.com/corail-research/seahorse",
    liveUrl: "https://corail-research.github.io/seahorse/",
    contribution: true,
    projectType: "Projet Pro",
    year: 2024,
    details: "Seahorse est un framework et un librairie Python conçus pour faciliter la création d'agents intelligents capables de jouer à des jeux de société. La librairie standardise les interactions entre les agents et le jeu, permettant ainsi aux développeurs de se concentrer sur la logique d'IA. Seahorse est utilisé dans le cadre de projets de recherche et d'enseignement à Polytechnique Montréal."
  },
  {
    id: 5,
    title: "Abyss",
    description: "Site web de compétitions d'IA pour étudiants, permettant aux agents de s'affronter dans des jeux de société.",
    technologies: ["JavaScript", "React.js", "Python", "Flask"],
    imageUrl: "/images/abyss.png",
    screenshots: [
      "/images/abyss_screenshot1.png",
      "/images/abyss_screenshot2.png",
    ],
    liveUrl: "https://abyss-h25.corail-lab.ca/",
    contribution: true,
    private: true,
    projectType: "Projet Pro",
    year: 2024,
    details: "Abyss est un projet collaboratif créé par des étudiants en Msc à Polytechnique Montréal. Il s'agit d'une plateforme web qui permet aux agents intelligents des étudiants de s'affronter dans des jeux de société. Le site inclut un système de classement et une interface utilisateur intuitive pour suivre les performances des agents. Développé avec React.js pour le frontend et Flask pour le backend." 
  },
  {
    id: 6,
    title: "Perkastor",
    description: "Application web avec carte interactive montrant des faits historiques sur les lieux en France.",
    technologies: ["Next.js", "Python", "TypeScript", "NLP"],
    imageUrl: "/images/perkastor.png",
    screenshots: [
      "/images/perkastor_screenshot1.png",
    ],
    githubUrl: "https://github.com/YoannSab/perkastor",
    contribution: true,
    projectType: "Projet Scolaire",
    year: 2023,
    details: "Perkastor est une application web avec une carte interactive qui affiche des faits historiques sur divers lieux en France. Le projet a utilisé des algorithmes de traitement du langage naturel (NLP) pour extraire et traiter plus d'un million de faits depuis Wikipédia. Développé avec NextJS et Python."
  },
  {
    id: 7,
    title: "Gustave le Fantôme",
    description: "Jeu de plateformes en 2.5D où il faut prendre possession des assaillants pour défendre son manoir.",
    technologies: ["C#", "Unity"],
    imageUrl: "/images/gustave.png",
    screenshots: [
      "/images/gustave_screenshot1.png",
      "/images/gustave_screenshot2.png",
    ],
    githubUrl: "https://github.com/MatheoJ/GustaveTheGhost",
    liveUrl: "https://matheoj.github.io/GustaveTheGhostOnline/",
    contribution: true,
    projectType: "Projet Scolaire",
    year: 2023,
    details: "Gustave le Fantôme est un jeu de plateformes en 2.5D développé avec Unity et C#. Le joueur incarne un fantôme qui doit défendre son manoir en prenant possession des assaillants. Le jeu comprend différents types d'ennemis, un arbre de compétences et plusieurs niveaux. Le projet a été réalisé dans le cadre d'un cours de création de jeux à Polytechnique Montréal."
  },
  {
    id: 8,
    title: "Deliverif",
    description: "Application interactive pour faciliter les livreurs dans leurs courses avec calcul de tournées et itinéraires optimisés.",
    technologies: ["Java"],
    imageUrl: "/images/deliverif.png",
    screenshots: [
      "/images/deliverif_screenshot1.png",
    ],
    githubUrl: "https://github.com/MatheoJ/Deliverif",
    contribution: true,
    projectType: "Projet Scolaire",
    year: 2022,
    details: "Deliverif est une application Java développée avec Maven et JavaFX qui aide les livreurs à optimiser leurs tournées. Elle permet la planification des livraisons, le calcul d'itinéraires optimisés et le suivi des tournées. Ce projet a été réalisé en collaboration avec d'autres étudiants de l'INSA Lyon."
  },
  {
    id: 9,
    title: "Brain Atlas",
    description: "Librairie Python pour le recalage d'images de cerveau de souris basé sur l'Allen Brain Atlas.",
    technologies: ["Python", "Computer Vision"],
    imageUrl: "/images/brainatlas.png",
    screenshots: [
      "/images/brainatlas_screenshot1.png",
      "/images/brainatlas_screenshot2.png",
    ],
    githubUrl: "https://gitlab.com/YoannSab/brainatlas",
    projectType: "Projet Pro",
    year: 2022,
    details: "Brain Atlas est une librairie Python dédiée au recalage d'images de cerveau de souris en utilisant l'Allen Brain Atlas comme référence. Le projet inclut des fonctionnalités de segmentation et de détection des régions d'intérêt, facilitant ainsi la recherche neurologique. Développé dans un contexte professionnel."
  },
  {
    id: 10,
    title: "Skate Connecté",
    description: "API Flask pour détecter les figures de skate en analysant des données temporelles d'accélération et de vitesses angulaires.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Traitement du Signal", "Flask", "React Native"],
    imageUrl: "/images/skate.png",
    screenshots: [
      "/images/skate_screenshot1.png",
      "/images/skate_screenshot2.png",
    ],
    private: true,
    projectType: "Projet Pro",
    year: 2023,
    details: "Ce projet consiste en une API Flask qui analyse les données temporelles d'accélération et de vitesses angulaires pour détecter et classifier les figures de skateboard. L'application utilise des techniques avancées de machine learning et de deep learning pour le traitement du signal, couplée à une interface mobile développée en React Native."
  },
  {
    id: 11,
    title: "ScientIF",
    description: "Moteur de recherche basé sur le web sémantique pour explorer les scientifiques, leurs découvertes et leurs domaines d'expertise.",
    technologies: ["Web Sémantique", "HTML", "CSS", "Node.js"],
    imageUrl: "/images/scientif.png",
    screenshots: [
      "/images/scientif_screenshot1.png",
    ],
    githubUrl: "https://github.com/MatheoJ/ScientIF",
    contribution: true,
    projectType: "Projet Scolaire",
    year: 2022,
    details: "ScientIF est un moteur de recherche basé sur le web sémantique qui permet aux utilisateurs de rechercher des scientifiques et de naviguer à travers leurs découvertes, leurs prix et leurs domaines d'expertise. Le projet utilise des technologies web standards pour créer une interface intuitive et informative."
  },
  {
    id: 12,
    title: "PolyPwn",
    description: "Création de 8 challenges de programmation, stéganographie et IA pour le PolyPwnCTF de Polytechnique Montréal.",
    technologies: ["Cybersécurité", "Python"],
    imageUrl: "/images/polypwn.png",
    githubUrl: "https://github.com/polycyber/PolyPwnCTF-2025-Challenges",
    projectType: "Projet Perso",
    contribution: true,
    year: 2025,
    details: "Conception et développement de 8 défis variés pour le PolyPwnCTF, un événement de capture de drapeau organisé par Polytechnique Montréal. Les challenges couvrent des domaines comme la programmation, la stéganographie et l'intelligence artificielle, avec notamment l'utilisation de l'algorithme DBscan."
  },
  {
    id: 13,
    title: "Conv Fighter",
    description: "Petit jeu de plateforme développé avec Pygame pour s'initier à Python.",
    technologies: ["Python"],
    imageUrl: "/images/convfighter.png",
    screenshots: [
      "/images/convfighter_screenshot1.png",
    ],
    githubUrl: "https://github.com/YoannSab/ConvFighter",
    projectType: "Projet Perso",
    year: 2021,
    details: "Conv Fighter est un petit jeu de plateforme développé avec la bibliothèque Pygame. Ce projet a été réalisé dans le but d'apprendre en autodidacte le langage Python et de se familiariser avec la création de jeux vidéo. Le jeu propose des mécaniques simples et un design minimaliste, tout en offrant une expérience ludique."
  },
  {
    id: 14,
    title: "Déformation Élastique",
    description: "Simulation numérique d'une lame élastique soumise à son poids, des forces d'extrémité et des formes réparties.",
    technologies: ["MATLAB", "Simulation Numérique"],
    imageUrl: "/images/deformation.png",
    screenshots: [
      "/images/deformation_screenshot1.png",
      "/images/deformation_screenshot2.png",
    ],
    githubUrl: "https://gitlab.com/YoannSab/deformationElastique",
    projectType: "Projet Scolaire",
    year: 2021,
    details: "Ce projet consiste en une simulation numérique d'une lame élastique soumise à diverses forces. La méthode de Newton-Raphson a été implémentée pour résoudre les équations différentielles décrivant le comportement de la lame. Réalisé avec MATLAB dans le cadre d'un projet scolaire."
  },
  {
    id: 15,
    title: "Lancer de balle",
    description: "Simulation d'un lancer de balle avec prise en compte de la résistance de l'air.",
    technologies: ["Java", "Simulation Numérique"],
    year: 2021,
    githubUrl: "https://github.com/YoannSab/LancerBalle",
    imageUrl: "/images/lancerballe.png",
    screenshots: [
      "/images/lancerballe_screenshot1.png",
    ],
    contribution: true,
    projectType: "Projet Scolaire",
    details: "Ce projet consiste en la simulation d'un lancer de balle (tennis, ping-pong, etc.) dans différents environnements (sur Terre, sur la Lune, dans l'eau, etc.) et avec différentes conditions (angle de lancement, vitesse initiale, etc.). La simulation prend en compte la résistance de l'air et d'autres forces pour modéliser le mouvement de la balle. Réalisé avec Java dans le cadre d'un projet scolaire."
  }
];

export default projectsData;