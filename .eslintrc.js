module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'indent': ['error', 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'spaced-comment': 0,
        'padded-blocks': 0,
        'no-trailing-spaces': 0,
        'space-in-parens': 0,
        'curly': ['error', 'multi'],
        'no-multiple-empty-lines': ['error', {
            'max': 2,
            'maxEOF': 1
        }],
        'brace-style': 0/*['error', 'stroustrup']*/,
        'object-curly-spacing': ['error', 'always']
    }
}
