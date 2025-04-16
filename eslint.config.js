import eslint from '@antfu/eslint-config'

export default eslint({
  unocss: true,
  vue: {
    overrides: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'linebreak-style': [2, 'unix'],
      'no-console': 'off',
      'no-unused-labels': 'off',
      'prefer-promise-reject-errors': 'off',
      'quote-props': [2, 'as-needed'],
      'ts/ban-ts-comment': 'off',
      'vue/attribute-hyphenation': [1, 'never', {
        ignore: ['custom-prop'],
      }],
      'vue/attributes-order': [
        2,
        {
          alphabetical: true,
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
        },
      ],
      'vue/component-name-in-template-casing': [2, 'PascalCase'],
      'vue/custom-event-name-casing': [2, 'camelCase', {
        ignores: [],
      }],
      'vue/first-attribute-linebreak': [2, {
        multiline: 'below',
        singleline: 'beside',
      }],
      'vue/html-closing-bracket-spacing': [
        2,
        {
          endTag: 'never',
          selfClosingTag: 'never',
          startTag: 'always',
        },
      ],
      'vue/html-indent': [2, 2],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            component: 'always',
            normal: 'never',
            void: 'always',
          },
          math: 'always',
          svg: 'always',
        },
      ],
      'vue/max-attributes-per-line': [2, {
        multiline: {
          max: 1,
        },
        singleline: {
          max: 1,
        },
      }],
      'vue/multi-word-component-names': 'off',
      'vue/one-component-per-file': 'off',
      'vue/prefer-true-attribute-shorthand': [2, 'never'],
      'vue/prop-name-casing': [1, 'camelCase'],
      'vue/v-on-event-hyphenation': [2, 'never', {
        autofix: true,
      }],
      'yml/no-empty-mapping-value': 'off',
    },
  },
  javascript: {
    overrides: {
      'no-console': 0,
    },
  },
  ignores: [
    'node_modules',
    'src/types/*',
  ],
  typescript: {
    overrides: {
      'ts/consistent-type-imports': 0,
      'n/prefer-global/process': 0,
      'dot-notation': 0,
      'node/no-path-concat': 0,
      'unused-imports/no-unused-vars': 0,
      'no-unused-vars': 0,
      'ban-ts-comment': 0,
    },
  },
  isInEditor: false,
  jsonc: true,
  stylistic: {
    overrides: {
      'style/jsx-sort-props': [2, {
        callbacksLast: true,
        ignoreCase: false,
        multiline: 'last',
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      }],
      'style/jsx-max-props-per-line': [2, {
        maximum: {
          multi: 1,
          single: 1,
        },
      }],
      'style/jsx-first-prop-new-line': [2, 'always'],
      'style/jsx-wrap-multilines': [2, {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      }],
      'style/jsx-one-expression-per-line': [2, {
        allow: 'literal',
      }],
      'no-console': 0,
      'import/order': [2, {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
          orderImportKind: 'asc',
        },
      }],
      'perfectionist/sort-imports': 0,
      'ts/ban-ts-comment': 0,
      'style/semi': [0, 'never'],
      'style/member-delimiter-style': [2, {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
    },
  },
  regexp: false,
})
