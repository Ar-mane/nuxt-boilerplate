module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json', // Allows more rules to work!
    extraFileExtensions: ['.vue'],
    warnOnUnsupportedTypeScriptVersion: false // Because we use TypeScript 4.9, but it's ok
  },
  plugins: [
    'vue', //
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/strict',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier-vue/recommended',
    'plugin:vue-scoped-css/vue3-recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@/assets/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/lib/*',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/lib/!(mock|types)/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/lib/mock/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/lib/types/**',
            group: 'type',
            position: 'after'
          },
          {
            pattern: '#**',
            group: 'type',
            position: 'after'
          }
        ]
      }
    ],
    'prettier-vue/prettier': 'error',
    'vue/attributes-order': 'error',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        },
        style: {
          lang: 'scss'
        }
      }
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/define-macros-order': 'error',
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/multi-word-component-names': 0, // Disable rule: allow single-word component names
    'vue/no-required-prop-with-default': 'error',
    'vue/no-reserved-component-names': 0,
    'vue/no-v-for-template-key': 0, // This rule is for Vue 2
    'vue/no-v-model-argument': 0, // This rule is for Vue 2
    'vue-scoped-css/enforce-style-type': 'error',
    'vue-scoped-css/no-unused-selector': 'error'
  }
};
