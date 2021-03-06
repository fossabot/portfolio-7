module.exports = {
    "parser": "babel-eslint",
    "rules": {
        "comma-dangle": 0,
        "no-return-assign": 0,
        "indent": ["error", 4],
        "class-methods-use-this": 0,
        "max-len": 0,
        "react/jsx-no-duplicate-props": 0
    },
    "extends": [
        "airbnb-base",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true
    },
}