module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "2017"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": ["error", 80],
        "no-console": "off",
        "no-else-return": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "new-cap": ["error", {
            "newIsCap": true
        }],
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 4
        }],
        "no-multi-assign": "error",
        "one-var": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "stroustrup"],
        "space-before-function-paren": ["error", "always"],
        "space-infix-ops": "error",
        "block-spacing": ["error", "always"]
    }
};