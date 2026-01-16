# Configuration SEO - OBD-Diagnostic.fr

## Domaine principal

Le site utilise **exclusivement** la version sans www :
- ✅ `https://obd-diagnostic.fr`
- ❌ `https://www.obd-diagnostic.fr` (redirigé vers la version sans www)

## Redirections automatiques

Toutes les requêtes arrivant sur `www.obd-diagnostic.fr` sont automatiquement redirigées vers `https://obd-diagnostic.fr` avec un code HTTP 301 (redirection permanente).

### Méthodes de redirection mises en place :

#### 1. Next.js Middleware (principal)
**Fichier :** `middleware.ts`
- Redirection 301 au niveau de l'application
- Fonctionne sur tous les environnements Next.js
- S'exécute avant le rendu de chaque page

#### 2. Configuration Vercel
**Fichier :** `vercel.json`
- Redirection au niveau du serveur Vercel
- Plus rapide que le middleware
- Active lors du déploiement sur Vercel

#### 3. Apache .htaccess (alternative)
**Fichier :** `public/.htaccess`
- Pour les hébergements Apache traditionnels
- Inclut également le force HTTPS
- Backup si le site est migré hors Vercel

## URLs canoniques

Toutes les balises canonical dans le code utilisent la version sans www :

```tsx
// Exemple dans les métadonnées Next.js
alternates: {
  canonical: 'https://obd-diagnostic.fr/guides/...',
}
```

### Fichiers concernés :
- ✅ `app/layout.tsx` - metadataBase
- ✅ `app/sitemap.ts` - toutes les URLs
- ✅ `app/robots.ts` - URL du sitemap
- ✅ `app/guides/[slug]/page.tsx` - canonical et Open Graph
- ✅ `app/guides/page.tsx` - canonical et Open Graph
- ✅ `app/code/[code]/page.tsx` - canonical et Open Graph
- ✅ `app/codes-obd/page.tsx` - canonical et Open Graph
- ✅ `app/a-propos/page.tsx` - canonical
- ✅ `app/mentions-legales/page.tsx` - canonical
- ✅ `app/politique-confidentialite/page.tsx` - canonical

## Sitemap.xml

Le sitemap liste **3083 URLs** (toutes sans www) :
- 7 pages statiques
- 3071 pages de codes OBD
- 5 pages de guides

**URL du sitemap :** `https://obd-diagnostic.fr/sitemap.xml`

## Robots.txt

Le fichier robots.txt référence le sitemap sans www :

```
User-Agent: *
Allow: /

Sitemap: https://obd-diagnostic.fr/sitemap.xml
```

## Vérifications SEO

### Pour vérifier la redirection :

```bash
# Test redirection www → non-www
curl -I https://www.obd-diagnostic.fr

# Doit retourner :
# HTTP/2 301
# location: https://obd-diagnostic.fr/
```

### Pour vérifier le sitemap :

```bash
# Vérifier le nombre de pages
curl -s https://obd-diagnostic.fr/sitemap.xml | grep -c "<url>"

# Doit retourner : 3083
```

### Pour vérifier robots.txt :

```bash
curl https://obd-diagnostic.fr/robots.txt
```

## Configuration Google Search Console

Après déploiement, configurer dans Google Search Console :
1. Ajouter la propriété pour `obd-diagnostic.fr` (sans www)
2. Soumettre le sitemap : `https://obd-diagnostic.fr/sitemap.xml`
3. Ne PAS ajouter la version avec www (elle sera redirigée automatiquement)

## Bénéfices SEO

✅ **Évite la duplication de contenu** - Une seule version du site indexée
✅ **Concentre le jus de lien** - Tous les backlinks pointent vers la même URL
✅ **Améliore le crawl budget** - Google ne perd pas de temps sur deux versions
✅ **Cohérence d'indexation** - Une seule URL par page dans les SERPs
✅ **Redirections 301** - Transfère 90-99% du PageRank

## Maintenance

Lors de l'ajout de nouvelles pages, s'assurer que :
- Les URLs canoniques utilisent `https://obd-diagnostic.fr`
- Les métadonnées Open Graph utilisent la version sans www
- Le sitemap est régénéré automatiquement (Next.js le fait)

---

**Date de mise en place :** 15 janvier 2026
**Dernière vérification :** 15 janvier 2026
