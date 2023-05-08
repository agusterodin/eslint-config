/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useDispatch', 'useSelector'],
            message: "Use the typed hooks from 'state' instead"
          },
          {
            name: '@reduxjs/toolkit',
            importNames: ['createAsyncThunk'],
            message: "Use the typed version from 'state' instead"
          }
        ]
      }
    ]
  }
}
