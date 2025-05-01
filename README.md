# Portfolio de Yoann Sabatier

Ce projet est un portfolio personnel présentant mes compétences, projets et expériences en tant que développeur web et data scientist.

## 🚀 Technologies utilisées

- **React** - Framework JavaScript pour la construction de l'interface utilisateur
- **Chakra UI** - Bibliothèque de composants UI pour React
- **React Router** - Gestion des routes et de la navigation
- **Framer Motion** - Animations et transitions fluides
- **GitHub Pages** - Hébergement du site

## ✨ Fonctionnalités

- **Design responsive** - S'adapte à tous les appareils (mobile, tablette, desktop)
- **Mode sombre/clair** - Thème adaptable aux préférences de l'utilisateur
- **Animations** - Interactions visuelles pour une meilleure expérience utilisateur
- **Présentation des projets** - Showcase pour mettre en valeur mon travail
- **Filtrage des projets** - Par technologies, type de projet, etc.
- **Formulaire de contact** - Pour me contacter directement depuis le site

## 🛠️ Installation et démarrage

1. Cloner le dépôt
   ```
   git clone https://github.com/YoannSab/portfolio.git
   cd portfolio
   ```

2. Installer les dépendances
   ```
   npm install
   ```

3. Lancer l'application en mode développement
   ```
   npm start
   ```
   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 📦 Déploiement

Pour déployer l'application sur GitHub Pages :

```
npm run deploy
```

Cette commande génère une version optimisée de l'application et la déploie sur la branche gh-pages.

## 📁 Structure du projet

```
portfolio/
├── public/            # Ressources statiques (images, favicon, etc.)
├── src/
│   ├── assets/        # Ressources utilisées dans l'application
│   ├── components/    # Composants réutilisables
│   ├── data/          # Données des projets et du CV
│   ├── pages/         # Composants de pages
│   ├── App.js         # Composant principal et routage
│   ├── index.js       # Point d'entrée de l'application
│   └── theme.js       # Configuration du thème Chakra UI
└── ...
```

## 🔄 Ajouter ou modifier des projets

Pour ajouter ou modifier des projets, éditer le fichier `src/data/projectsData.js`.
Pour ajouter des images de projets, les placer dans le dossier `public/images/` et référencer leur chemin dans les données du projet.

## 👤 Auteur

**Yoann Sabatier Montanaro**
- LinkedIn: [Yoann Sabatier Montanaro](https://www.linkedin.com/in/yoann-sabatier-montanaro/)
- GitHub: [YoannSab](https://github.com/YoannSab)
