/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        'groups': ['builtin', 'external'],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'classnames',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'react-redux',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'environment',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'datamodels',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '{api,server}',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '{api/**,server/**}',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: 'state',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'state/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern:
              '{./**/*.{svg,png,jpg,jpeg},**/*.{svg,png,jpg,jpeg},../**/*.{svg,png,jpg,jpeg},../../**/*.{svg,png,jpg,jpeg},../../../**/*.{svg,png,jpg,jpeg}}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '{./**/*.{css,scss},**/*.{css,scss},../**/*.{css,scss},../../**/*.{css,scss},../../../**/*.{css,scss}}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '{./**/*.json,**/*.json,../**/*.json,../../**/*.json,../../../**/*.json}',
            group: 'internal',
            position: 'after'
          }
        ],
        'pathGroupsExcludedImportTypes': []
      }
    ]
  }
}
