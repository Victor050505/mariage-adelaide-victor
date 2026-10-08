# 📋 Spécifications — Mariage Adélaïde & Victor

## 🎯 Infos Projet

| Élément | Valeur |
|---------|--------|
| **Domaine** | adélaïde-victor.fr |
| **Date événement** | 3-5 juillet 2028 |
| **Lieu** | Terres des Arson |
| **Budget** | Gratuit + ~10-15€/an domaine |
| **Timeline** | ~21 mois (pas urgent) |

## 🔐 Sécurité & Accès

- **Type** : Site PRIVÉ invités uniquement
- **Accès** : Lien secret unique par invité
- **Token** : `adélaïde-victor.fr/mariage?token=xxx` (réutilisable)
- **Non-indexable** : robots.txt `Disallow: /` + meta noindex
- **Impossible d'accéder par hasard** (contrairement au site du cousin)

## 🛠 Stack Technique

- **Hébergement** : Vercel (gratuit)
- **Auth** : Tokens simples (DB Supabase gratuit)
- **RSVP** : Formulaire simple
- **Complexité** : Très basse

## 🎨 Design

### Palette (À CHOISIR)

**Option 1 : VERT FONCÉ + CRÈME** 🟢
- Couleur primaire : `#3D5247` (vert foncé anglais)
- Couleur secondaire : `#F5F1E8` (crème/off-white)
- Accents : crème/blanc
- Feeling : moderne, nature, discret

**Option 2 : BLANC + ROUGE** ⚪🔴
- Couleur primaire : `#F5F1E8` (crème)
- Couleur secondaire : `#8B1A1A` (rouge burgundy)
- Accents : bordeaux
- Feeling : classique, intemporel, traditionnel

### Typographie & Style
- **Serif** : Cormorant Garamond (titres)
- **Sans-serif** : Montserrat (corps)
- **Esthétique** : épuré, minimaliste, luxe discret
- **Illustrations** : pyramide coupes champagne + fleurs (ligne fine)
- **Espace** : beaucoup de blanc/crème

## 📄 Sections du Site

### 1. Cérémonie laïque
- Image illustration
- Horaires
- Lieu (Terres des Arson)
- Détails pratiques

### 2. Cocktail & dîner
- Horaires
- Lieu
- Menu (si voulu)
- Détails pratiques

### 3. Brunch
- Horaires
- Lieu
- Détails pratiques

### 4. Informations pratiques
- Adresse complète Terres des Arson
- Plan d'accès (Google Maps)
- Infos parking sur place (directs)
- Infos hébergement sur place (directs)
- Transports (gare, aéroport)
- ⚠️ **Tout sur le même domaine** — zéro lien externe

### 5. RSVP
- Formulaire simple : nom + email + nb personnes + régime alimentaire
- Stockage en Supabase gratuit
- Confirmation email auto

## 📸 Inspirations Reçues

- Save the Date designs (rouge + vert + crème variantes)
- Déco table (bougies, fleurs, lumières)
- Ambiance générale : élégant, épuré, couleur

## ✅ Checklist avant Build

- [ ] Palette choisie (vert ou rouge)
- [ ] Domaine adélaïde-victor.fr validé
- [ ] Access tokens réutilisables confirmé
- [ ] Structure sections OK

## 🚀 Prochaines Étapes

1. **Valider palette** (vert ou rouge)
2. **Créer repo GitHub** (LMP75006/mariage-2028)
3. **Build site statique** HTML/CSS/JS
4. **Implémenter tokens** (auth simple)
5. **Tester RSVP** (formulaire + Supabase)
6. **Déployer Vercel**
7. **Configurer domaine**
8. **Créer liste invités** + générer tokens
9. **Envoyer liens** (3-6 mois avant mariage)
10. **Itérer** jusqu'au jour J

## 💡 Notes

- Site vraiment privé (pas indexable Google)
- Zéro inscription/login lourd
- Invités cliquent lien unique → accès direct
- Réutilisable/modifiable jusqu'au jour J
- Pattern tokens = même logic que Vasco (devis app)
