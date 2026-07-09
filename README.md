# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


# Nova — Landing Page



### Language is driven by the URL (`/he` prefix)

- **English is the default**, at the root: `/`, `/features`, `/pricing`, `/accessibility`
- **Hebrew lives under `/he`**: `/he`, `/he/features`, `/he/pricing`, `/he/accessibility`

The active language is **derived from the URL**, not from a toggle or a cookie — so
every page is shareable and bookmarkable in a specific language. All the logic lives in
`src/i18n/routing.ts`:

- `getLangFromPath(pathname)` → `'en' | 'he'`
- `getLogicalPath(pathname)` → strips the `/he` prefix (`/he/features` → `/features`)
- `localizedHref(path, lang)` → adds the prefix for Hebrew (`/features` → `/he/features`)
- `switchLangUrl(target)` → same page in the other language (used by the toggle)

The language toggle in the navbar **navigates** to the other-language URL (full reload);
it does not swap text in place.

### Translations (`src/i18n/translations.ts`)

- One big object with two keys: `en` and `he`. Each holds `dir` (`ltr`/`rtl`), `lang`,
  and all the copy grouped by section (`nav`, `hero`, `features`, `pricing`, `faq`,
  `howItWorks`, `pricingTable`, `accessibilityPage`, `accessibility.widget`, …).
- Components read copy via the `useLanguage()` hook: `const { t, lang } = useLanguage()`
  then `t.hero.headline1`, etc.
- The TS types are derived from the `en` shape. **When you add a string, add the same key
  to BOTH `en` and `he`** with the same structure, or the build (`tsc -b`) fails.

### RTL support

- `dir` and `lang` are set on `<html>` from the active language (see `LanguageContext`),
  and an inline script in `index.html` sets `dir="rtl"` on `/he/*` **before render** to
  avoid a flash of the wrong direction.
- Use **logical Tailwind utilities** so layouts flip automatically:
  `ps-*`/`pe-*` (not `pl`/`pr`), `ms-*`/`me-*`, `border-s`/`border-e`, `text-start`/`text-end`.
- Direction-sensitive transforms are handled manually where needed (e.g. the accessibility
  toggle knob translates `-translate-x-5` in RTL vs `translate-x-5` in LTR).

### Routing / navigation model

- This is a **multi-page-style SPA**: navigation uses plain `<a href>` links, so each
  navigation is a **full page reload**. There is no React Router.
- `App.tsx` decides which page to render by matching `getLogicalPath(window.location.pathname)`
  against `/features`, `/pricing`, `/accessibility` (anything else = home).
- **Deployment note:** the host must serve `index.html` for all unknown routes (SPA
  fallback / rewrites), including nested `/he/*` paths. Vite's dev server does this
  automatically. For production configure a catch-all rewrite to `/index.html`
  (Netlify `_redirects`, Vercel rewrites, or nginx `try_files`).


