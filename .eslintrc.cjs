/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: { node: true },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',

        '@vue/typescript/recommended',
    ],
    overrides: [
        {
            files: ['*.vue', '*.ts', '*.tsx'],
            rules: { 'no-undef': 'off' },
        },
    ],
    rules: {
        // Eslint rules - coding preferences
        'array-callback-return': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-constant-binary-expression': 'error',
        'no-duplicate-imports': 'error',
        'no-self-compare': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-throw-literal': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'quotes': ['error', 'single'],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        yoda: 'error',

        // Eslint rules - spacing
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', 'stroustrup'],
        'computed-property-spacing': 'error',
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'indent': ['error', 4],
        'key-spacing': 'error',
        'linebreak-style': 'error',
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': 'error',
        'space-before-blocks': 'error',
        'template-curly-spacing': 'error',

        // Vue rules
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never',
        }],
        'vue/no-duplicate-attributes': 'error',
        'vue/html-indent': ['error', 4],
        'vue/max-len': [
            'error',
            {
                code: 130,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true,
            },
        ],
        'vue/no-v-html': 'off',
        'vue/html-button-has-type': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/max-attributes-per-line': ['error', {
            'singleline': 8,
            'multiline': 1,
        }],
        'vue/new-line-between-multi-line-property': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/script-indent': ['error', 4],
        'vue/static-class-names-order': 'error',

        // TypeScript rules
        '@typescript-eslint/ban-ts-comment': 'off',

        // Production-only rules
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
