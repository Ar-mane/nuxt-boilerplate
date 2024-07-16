## Tech stack 

Engine & language:

- Node 18
- TypeScript 4.9

Package manager & builder:

- Yarn 3
- Vite 3.2

Core:

- Nuxt 3 (Vue 3)
- Sass (SCSS, Dart Sass 1)
- Pinia 2

Linting and formatting:

- ESLint 8
- Prettier 3
- Stylelint 14
- Husky 8
- Lint-Staged 13

## Setting-up

```bash
yarn install
```

## Running

```bash
yarn dev
```

The front-end should then be accessible from [http://localhost:19001](http://localhost:19001)

## IDE Setup

Using VS Code is strongly recommended.

### VS Code

A `.vscode/` folder is included with a few files to help with the setup (other files from the folder are excluded by the `.gitignore`).

When opening the project for the first time, you will be prompted to install the recommended plugins in a notification in
the bottom right corner your IDE:

- [TypeScript Vue (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - For
  Vue.JS 3 and Nuxt 3 support, including with TypeScript
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - For Sass .scss files and syntax
  support
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - To import formatting
  rules from the .editorconfig file
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - For ESLint linting support
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - For Prettier formatting rules
  importing
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - For Stylelint linting
  support

A `.vscode/` folder is provided to enable Nuxt.JS support, Stylelint support for `.vue` files, and Prettier formatting
for TypeScript files.

## Codebase features

### Nuxt / Vue / Vite

Nuxt 3 is used in the project with server-side rendering enabled, and Vite as builder.

The following Nuxt plugins/modules are used:

- [`@nuxtjs/strapi`](https://strapi.nuxtjs.org/) - To enable easy access to the Strapi backend

Those one are still to be updated by the Nuxt team before being included again:

- [`@nuxtjs/pwa`](https://pwa.nuxtjs.org/) - To auto-generate PWA manifests and icons
- [`@nuxtjs/sitemap`](https://sitemap.nuxtjs.org/) - To automatically generate sitemap files

The following Vue plugins are used:

- [`vue-gtag`](https://matteo-gabriele.gitbook.io/vue-gtag/) - To enable Google Analytics script injection

The following Vite plugins are used:

- [`vite-plugin-eslint`](https://github.com/gxmari007/vite-plugin-eslint) - To enable ESLint linting during build
- [`vite-plugin-stylelint`](https://github.com/ModyQyW/vite-plugin-stylelint) - To enable Stylelint linting during
  build

### Components auto-import

Nuxt 3 auto-imports components declared in the `components/` folder in the template part of every `.vue` file of the
project. Components are named based on the path of the file relative to the `components/` folder. For example, the
`components/Header/Menu.vue` file will be auto imported as `<HeaderMenu />` in every `.vue` file. But following Nuxt
recommendations, and to improve search, we name the components will their full names, so `components/Header/Menu.vue`
becomes `components/Header/HeaderMenu.vue`, and can still be imported as `<HeaderMenu />`.

When using components from the `components/_Section/` folder, the `_` doesn't have to be included in the tag thanks to
manual prefix configuration for this folder in the `nuxt.config.ts` file.

See [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components#) for more information.

### Sass variables and mixins auto-import

The `styles/_mixins.scss` file is auto-imported in every `.scss` file of the project, which itself imports the
`styles/_variables.scss` one, making both mixins and variables auto-imported in the whole project.

This is thanks to a pre-processor configuration in the `nuxt.config.ts` file.

### TypeScript

TypeScript is used nearly everywhere in the project. It is configured in strict mode, and will
soon be enabled in Vue template strings.

Common types are located in the `lib/types` folder.

Thanks to TypeScript, we can use the pure-TypeScript versions of `defineProps` and `defineEmits`.

### JavaScript and CSS linting and formatting (ESLint, Prettier, Stylelint)

ESLint is used to apply code-style and formatting rules in the JavaScript (via Prettier), HTML, and SCSS (via Stylelint)
code. Husky is also used along with lint-staged to fix errors detected during commit and will not allow committing if
errors are detected that linters or formatters cannot automatically fix (warnings are allowed but avoid them still). Any
change made by the linters during fixing will be automatically added to the commit.

Notable formatting and coding styles rules are:

- 2 spaces indentation
- Single quotes
- Semicolons enforced
- 100 characters maximum line length
- No trailing comma
- Enforced `lang="ts"` and `setup` attributes on `<script>` tags in `.vue` files
- Enforced `lang="scss"` and `scoped` attributes on `<style>` tags in `.vue` files
- Sorted JavaScript imports
- Sorted HTML attributes (including Vue directives)
- Sorted CSS properties

Most of these rules (including the ones about JS imports and CSS properties order) can be automatically fixed all at once
by your IDE, for example in IntelliJ using `ESLint: Fix current file` and `Stylelint: Fix current file` actions.

Note that a custom version of Prettier is used to allow empty lines between HTML attributes.

### Global CSS (including global flexbox)

Global CSS is written in the `styles/app.scss` files and the one imported by it (except for the `styles/_mixins.scss` and
`styles/_variables.scss` files, which should not contains more than mixins and variables).

- `app.scss` contains general purpose global CSS and imports the other files
- `tailwind.css` imports Tailwind CSS and defines custom classes
- `css-variables.scss` contains pure CSS variables version of the SCSS variables, for use outside of SCSS files
- `components.scss` contains CSS components rules, such as `.button`
- `reset.scss` contains properties related to overriding the default browser styles
- `utils.scss` contains general purpose utility classes _(this does not mean tailwind/bootstrap-like classes please)_

**Pay attention to the rule applying `display: flex;` and `box-sizing: border-box;` to every `<div>` element! These are
here because of how often they are used in the project to avoid having to add them to every element.**

### Tailwind CSS

We included [Tailwind](https://tailwindcss.com) to speed-up and improve the DX when building the page `/contrat-de-vente`. Tailwind is a utility-first CSS framework that comes with prebuilt CSS classes.

Useful VS Code extensions to install :

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - For autocomplete, linting and hover preview
- [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold) - To improve the readability

Prettier Extenstion :

- [Tailwind Prettier Plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - To automatically sort classes and help versioning

### Pinia

[Pinia](https://pinia.vuejs.org/) is used for store management, which is the successor of VueX. Stores are defined in the
`composables/stores` folder, which also mean they are automatically imported throughout the project.

### Strapi API

The Strapi API can be accessed using the `useStrapi()` composable. It is configured to use the right API URL depending on
the context, which is either the `STRAPI_URL` environment variable.

### DOMPurify HTML

`v-html` with a DOMPurify injection from [isomorphic-dompurify](https://www.npmjs.com/package/isomorphic-dompurify) is used to render sanitized HTML which prevents XSS attacks.

#### Google Analytics

The Google Analytics module uses the `GOOGLE_ANALYTICS_ID` environment variable to set the Google Analytics ID, it is
unset for now and will have to be set for production.

#### PWA

_This is actually still to be migrated to Nuxt 3 by the Nuxt team_

The PWA module uses info from the `pwa` object in `nuxt.config.js` to generate the PWA manifests and icons, it will also
have to be filled (icons, meta) for production.

The documentation for the PWA module can be found [here](https://pwa.nuxtjs.org/).

#### Sitemap

_This is actually still to be migrated to Nuxt 3 by the Nuxt team_

The Sitemap module generate `sitemap.xml` files automatically from routes, but dynamic routes have to be manually added
in the `sitemap.routes` configuration property in the `nuxt.config.js` file. Some routes can also be excluded in the
`sitemap.exclude` configuration property.

The documentation for the Sitemap module can be found [here](https://sitemap.nuxtjs.org/).

## Upgrading dependencies

If you want to upgrade the dependencies, you can use the Yarn Upgrade Interactive plugin:

```bash
yarn upgrade-interactive
```

You can select the dependencies to update using the arrow keys, and then press enter to install them. **If you see any version upgrade that is not a bug fix (last digit), you MUST check their changelogs before updating**.

## Deploying

This project is automatically deployed on the dev (https://develop-lmdv-front.vercel.app/) and preprod (https://front-lmdv.vercel.app/) environments on [vercel](https://vercel.com/cms-pole-voyage/front-lmdv) when pushing to the `develop` and `main` branches respectively.

To deploy on the preprod env:

- make a MR from `develop` to `main`
- make sure the MR is approved and the pipeline is green
- merge the MR
