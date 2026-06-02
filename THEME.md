# Thèmes — Agence Artémys

Le site utilise un système de **tokens (variables CSS)** défini dans `app/globals.css`.
Bascule en une ligne via la classe sur `<html>` dans `app/layout.tsx` :

- **Thème SOMBRE (original)** : retirer la classe `theme-light` sur `<html>`.
- **Thème CLAIR (test, façon agenceshort.fr)** : ajouter `className="... theme-light"` sur `<html>`.

Restauration git du thème sombre d'origine : `git checkout theme-dark-v1 -- .`

---

## 🌑 Thème SOMBRE — couleurs originales (à conserver)

| Rôle | Valeur |
|------|--------|
| Fond de page (`--bg` / `ink`) | `#0A0A0C` |
| Fond secondaire | `#16161A` |
| Texte / premier plan (`--fg` / `cream`) | `#FBF2E6` |
| Crème foncé | `#F2E6D4` |
| Teinte verre (`--glass`) | `#FFFFFF` (blanc, opacités 5–14 %) |
| Bordures | `blanc 10–15 %` |
| Orange (accent) | `#FF4D00` |
| Orange clair | `#FF7A33` |
| Orange foncé | `#E63F00` |
| Aura d'ambiance | dégradés radiaux orange ~16–28 % sur fond noir |

## ☀️ Thème CLAIR — test (fond blanc + orange Artémys)

| Rôle | Valeur |
|------|--------|
| Fond de page (`--bg`) | `#FFFFFF` |
| Texte / premier plan (`--fg`) | `#15161A` |
| Teinte verre (`--glass`) | `#15161A` (noir, faibles opacités → bordures/teintes douces) |
| Cartes | blanc `#FFFFFF` + bordure `noir 6 %` + ombre douce |
| Orange (accent) | `#FF4D00` (inchangé) |
| Aura d'ambiance | dégradés orange très subtils (~6–10 %) sur blanc |
