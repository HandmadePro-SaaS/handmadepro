# 🧑‍💻 HandmadePro — Development Guide

> ⚠️ Ce document fait foi.  
> Tout code ne respectant pas ces règles sera refusé en Pull Request.

---

## 🎯 Objectif

Ce document définit :

- le workflow Git
- les règles de contribution
- les bonnes pratiques

---

## 🚫 Règles non négociables

- Aucun secret, token, identifiant ou fichier `.env` ne doit être commité.
- Le site consomme uniquement les endpoints publics `/apiopen`.
- Aucun appel vers `/api` ou `/apibo` n’est autorisé.
- Aucun push direct sur `main` ou `develop`.
- Toute modification passe par une Pull Request vers `develop`.

---

## 🧱 Structure des branches

```
main     → production (stable)
develop  → intégration
feature/* → développement
```

---

## 🔄 Workflow Git

### 1. Se mettre à jour

```bash
git checkout develop
git pull --ff-only origin develop
```

---

### 2. Créer une branche de travail

```bash
git checkout -b feature/nom-de-la-feature
```

Types autorisés :

```
feature/
fix/
hotfix/
```

---

### 3. Développer

Faire les modifications nécessaires.

Avant commit :

```bash
git status
```

---

### 4. Commit

```bash
git add .
git commit -m "chore: description claire"
```

Types recommandés :

```
feat: nouvelle fonctionnalité
fix: correction de bug
chore: maintenance / config
```

---

### 5. Push

```bash
git push -u origin feature/nom-de-la-feature
```

---

### 6. Pull Request vers develop

Sur GitHub :

- Aller dans **Pull Requests**
- Cliquer sur **Compare and pull request**

⚠️ Vérifier :

```
base = develop
compare = feature/*
```

Puis :

- Cliquer sur **Create pull request**
- Cliquer sur **Squash and merge**

---

### 7. Mise à jour de main

Créer une nouvelle PR :

⚠️ Vérifier :

```
base = main
compare = develop
```

Puis :

- Cliquer sur **Create pull request**
- Cliquer sur **Squash and merge**

---

### 8. Nettoyage local

```bash
git checkout develop
git pull --ff-only origin develop

git checkout main
git pull --ff-only origin main

git branch -d feature/nom-de-la-feature
```

---

## ⚠️ Règles importantes

- Toujours vérifier la base de la Pull Request
- Ne jamais merger directement sur `main`
- Ne jamais travailler directement sur `develop`
- Toujours passer par une branche `feature/*`
- Toujours vérifier `git status` avant commit

---

## 🧠 Bonnes pratiques

- Faire des PR petites et ciblées
- Nommer clairement les branches
- Nommer clairement les commits
- Tester avant de faire une PR

---

## 🧨 Erreurs à éviter

- Faire une PR vers `main` depuis une feature
- Commit des fichiers sensibles
- Oublier de mettre à jour `develop`
- Faire des commits trop gros

---

## 🆘 En cas de doute

👉 Poser la question avant de coder.

---

## 🚀 Résumé rapide

```
feature/* → develop → main
```
