const resumeData = {
  name: "Yoann Sabatier Montanaro",
  title: "Ingénieur en IA & Optimisation et Développeur Full Stack",
  email: "sabatieryoann@gmail.com",
  linkedin: "https://www.linkedin.com/in/yoann-sabatier-montanaro/",
  github: "YoannSab",
  // summary: "Ingénieur diplômé de l'INSA Lyon et titulaire d'une maîtrise de recherche de Polytechnique Montréal, je suis à la recherche d'un CDI débutant en septembre 2025 en tant qu'ingénieur en intelligence artificielle ou optimisation mathématique. Je suis également à l'aise avec le développement logiciel et full stack, me permettant de participer à des projets mêlant rigueur mathématique et expertise technique.",
  education: [
    {
      degree: "Maîtrise de Recherche en Informatique, Recherche Opérationnelle",
      institution: "Polytechnique Montréal",
      location: "Montréal, QC",
      period: "2023 - 2025",
      description: "Cours principaux : Apprentissage profond et IA générative, Programmation Linéaire en Nombres Entiers, Métaheuristiques, Programmation par Contraintes (certification EDX en ligne). GPA : 4/4"
    },
    {
      degree: "Diplôme d'Ingénieur en Informatique",
      institution: "INSA Lyon",
      location: "Lyon, France",
      period: "2019 - 2025",
      description: "Classé 4e sur 130 dans le département d'informatique. Cours variés couvrant des sujets allant de l'apprentissage automatique au développement logiciel."
    }
  ],
  experience: [
    {
      position: "Développeur Full Stack & IA",
      company: "onepoint",
      location: "Paris, QC",
      period: "Avril 2025 – Juillet 2025",
      description: "Développement d'une application web pour la gestion des CV et des candidatures, intégration d'un LLM pour analyser les CV. Développement de serveurs MCP (Model Control Protocol) pour un projet interne.",
      technologies: ["Typescript", "Next.js", "MCP", "LLM"]
    },
    {
      position: "Assistant d'Enseignement",
      company: "Polytechnique Montréal",
      location: "Montréal, QC",
      period: "Août 2024 – Février 2025",
      description: "Enseignement des laboratoires du cours INF8175 : Introduction à l'IA aux étudiants de Bac, Maîtrise et Doctorat.",
      technologies: ["IA", "Pédagogie"],
      website: ["https://www.polymtl.ca/programmes/cours/intelligence-artif-methodes-et-algorithmes-0"]
    },
    {
      position: "Étudiant en Maîtrise de Recherche",
      company: "Corail Research Group",
      location: "Montréal, QC",
      period: "Janvier 2024 – Avril 2025",
      description: "Premier auteur d'une publication proposée à CPAIOR 2025. Développement d'une nouvelle formulation de graphe pour le Problème de Planification des Véhicules Électriques à Dépôts Multiples, intégrant des opportunités de recharge pré-sélectionnées pour améliorer la planification des bus électriques.",
      technologies: ["Recherche Opérationnelle", "Optimisation"],
      website: ["https://corail-research.github.io", "https://sites.google.com/view/cpaior2025"]
    },
    {
      position: "Développement d'un site de compétitions d'IA pour étudiants",
      company: "Polytechnique Montréal",
      location: "Montréal, QC",
      period: "Mai 2024 – Septembre 2024",
      description: "Plateforme web utilisée par plus de 200 étudiants, permettant aux agents intelligents (Minimax, MCTS) de s'affronter dans des jeux de plateau avec un système de classement intégré.",
      technologies: ["IA", "Développement Web"],
      website: ["https://abyss-a24.corail-lab.ca"]
    },
    {
      position: "Stagiaire Data Scientist",
      company: "onepoint",
      location: "Paris, France",
      period: "Mai - Août 2023",
      description: "Utilisation d'algorithmes d'apprentissage automatique et d'apprentissage profond pour classifier des séries temporelles.",
      technologies: ["Machine Learning", "Deep Learning", "Python"]
    },
    {
      position: "Stagiaire de Recherche",
      company: "Inria Lyon, Equipe Beagle",
      location: "Lyon, France",
      period: "Juin - Août 2022",
      description: "Traitement, analyse et recalage d'images 2D et 3D de cerveaux de souris en utilisant Python. Utilisation de l'atlas cérébral Allen pour segmenter les régions du cerveau. Développement d'une bibliothèque Python dédiée.",
      technologies: ["Python", "Traitement d'images"]
    }
  ],
  activities: [
    {
      role: "Vice-Président en charge de la communication",
      organization: "PolyCyber",
      period: "Août 2024 – Janvier 2025",
      description: "Promotion des événements à venir sur les réseaux sociaux.",
      link: "https://polycyber.io"
    },
    {
      role: "Participation à des événements de cybersécurité (Capture the Flag)",
      organization: "PolyCyber",
      period: "2024-2025",
      description: "Hackfest CTF (Plus grand événement de cybersécurité au Canada) : Classé 4e /40. \n United CTF (CTF étudiant basé à Montréal) : Classé 4e / 400 \n NorthSec : Classé 5e / 80+",
    }
  ],
  projectsRedirect: {
    message: "Veuillez consulter la page Projets pour voir la liste complète de mes projets.",
    path: "/projects"
  },
  skills: {
    technical: [
      "Python",
      "JavaScript",
      "Java", 
      "C++",
      "C",
      "C#",
      "Machine Learning",
      "Scikit-Learn", 
      "PyTorch", 
      "Pandas",
      "Flask",
      "React.js",
      "Express.js",
      "Git"
    ],
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "C1" },
      { name: "Italien", level: "B1" }
    ],
    interests: [
      "Badminton",
      "Escalade",
      "IA",
      "Physique",
      "Modélisation Numérique",
      "Cinéma",
      "Astronomie"
    ]
  },
  certifications: [
    {
      name: "Programmation par Contraintes",
      issuer: "EDX",
      date: "2024",
      description: "Certification en ligne couvrant les principes fondamentaux de la programmation par contraintes et leur application à des problèmes d'optimisation complexes."
    }
  ]
};

export default resumeData;