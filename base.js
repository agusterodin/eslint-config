/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['warn', 'unix'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'no-extra-semi': 'warn',
    'brace-style': ['warn', 'stroustrup'],
    'no-var': ['warn'],
    'react-hooks/exhaustive-deps': 'off',
    'quote-props': ['warn', 'consistent-as-needed'],
    'no-duplicate-imports': 'warn',
    'import/no-anonymous-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/display-name': 'warn',
    '@next/next/no-img-element': 'off'
  },
  plugins: ['@typescript-eslint']
}
