module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "ecmaVersion": "latest",
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module", // This line is important for ES Module syntax
        "ecmaFeatures": {
            "jsx": true // This allows for parsing of JSX
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off", // Disable the rule that requires React to be in scope
        "react/prop-types": "off" // Optionally disable prop-types rule, if you're not using it
    },
    "settings": {
        "react": {
            "version": "detect" // This tells eslint-plugin-react to automatically detect the version of React to use
        }
    }
};
