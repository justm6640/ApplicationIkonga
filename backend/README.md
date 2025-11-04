# IKONGA Lifestyle — Backend API

Prototype d'API Node.js pour le programme IKONGA Lifestyle. Cette base de travail illustre la structure générale des modules décrits dans le cahier des charges :

- Authentification et profils utilisateurs
- Modules IKONUTRITION, IKOFITNESS, IKOWELLNESS et IKOBEAUTY
- Fonctionnalités de coaching et communauté

La couche de persistance est simulée par des jeux de données statiques pour accélérer les ateliers fonctionnels. Les routes exposées facilitent l'intégration future avec une base PostgreSQL/Firebase et les automatisations n8n.

## 🚀 Démarrage

```bash
cd backend
npm install
npm run dev
```

L'API se lance sur `http://localhost:4000` et expose une route de santé (`/health`).

## ✅ Tests

```bash
npm test
```

## 📁 Structure

```
src/
 ├── data/          # Données métiers simulées
 ├── modules/       # Routes regroupées par domaine fonctionnel
 ├── middleware/    # Gestion d'erreurs et middlewares transverses
 └── server.ts      # Création et configuration d'Express
```

## 🔭 Prochaines étapes

- Remplacer les jeux de données statiques par une base de données relationnelle.
- Ajouter une authentification sécurisée (Firebase Auth) et la gestion des rôles.
- Implémenter la synchronisation avec Airtable et les workflows n8n.
- Couvrir les cas d'usage avancés : listes de courses personnalisées, calculs calories, notifications.
