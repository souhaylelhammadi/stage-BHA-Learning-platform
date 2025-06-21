🧠 BHA Learning Platform

Ceci est un projet Next.js visant à développer une application web d’apprentissage en ligne fullstack.
▶️ Démarrage rapide

Pour lancer le serveur de développement :

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

Ouvre ensuite http://localhost:3000 dans ton navigateur pour voir le résultat.
📁 Structure du projet suggérée

Il s’agit d’une structure proposée que tu peux modifier selon l’évolution des besoins.

learning-platform-app/
├── app/                         # App Router de Next.js (ou pages/ pour le Pages Router)
│   ├── api/                     # Routes API (logique backend – fonctions serverless de Next.js)
│   │   ├── courses/             # API des cours
│   │   ├── users/               # API des utilisateurs
│   │   └── ...                  
│
│   ├── auth/                    # Code lié à l'authentification (ex. : intégration Keycloak)
│   │   ├── components/          # Composants UI liés à l'authentification (formulaire de login, etc.)
│   │   └── utils/               # Fonctions utilitaires pour l'auth
│
│   ├── student/                 # Interface destinée aux étudiants
│   │   ├── courses/             # Navigation / inscription aux cours
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── dashboard/           # Tableau de bord étudiant
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # Mise en page de l’interface étudiante
│   │   └── page.tsx             # Page d’accueil étudiante (si besoin)
│
│   ├── instructor/              # Interface pour les formateurs (structure similaire à student)
│   │   ├── courses/             # Gestion des cours par le formateur
│   │   ├── dashboard/           # Tableau de bord du formateur
│   │   ├── layout.tsx
│   │   └── page.tsx
│
│   ├── admin/                   # Interface d'administration
│   │   ├── users/               # Gestion des utilisateurs
│   │   ├── courses/             # Gestion des cours
│   │   ├── categories/          # Gestion des catégories
│   │   ├── layout.tsx
│   │   └── page.tsx
│
│   ├── components/              # Composants UI réutilisables
│   │   ├── ui/                  # Éléments d’interface (boutons, champs, cartes, etc.)
│   │   ├── layouts/             # Mises en page communes (ex. : layout tableau de bord)
│   │   ├── navigation/          # Composants de navigation (header, sidebar)
│   │   └── ...
│
│   ├── context/                 # Fournisseurs de contexte React (si Context API est utilisé)
│   ├── hooks/                   # Hooks personnalisés
│   ├── lib/                     # Fonctions utilitaires, client API, helpers base de données
│   │   ├── api-client.ts        # Fonctions pour interagir avec les routes API
│   │   ├── db.ts                # Connexion MongoDB et helpers
│   │   └── utils.ts             # Fonctions utilitaires générales
│
│   ├── models/                  # Modèles de données / types TypeScript
│
│   ├── styles/                  # Configuration Tailwind CSS et styles globaux
│   │   ├── globals.css
│   │   └── tailwind.config.js
│
│   ├── public/                  # Fichiers statiques (images, polices, etc.)
│   ├── layout.tsx               # Layout racine de l’application
│   └── page.tsx                 # Page d’accueil
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
