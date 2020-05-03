module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
      ],
      "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "prettier/prettier": "error"
    }
};