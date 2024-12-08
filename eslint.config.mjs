import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

export default tseslint.config(
    {
        "languageOptions": {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        "ignores": [
            "**/*.d.ts",
            "**/out",
            ".vscode-test",
        ],
    },
    stylistic.configs["all-flat"],
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        "plugins": {
            "@typescript-eslint": tseslint.plugin,
            "@stylistic": stylistic,
        },
        "languageOptions": {
            "parser": tseslint.parser,
            "parserOptions": {
                "project": true,
            },
        },
        "rules": {
            "@stylistic/array-bracket-newline": ["error", { "multiline": true }],
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/arrow-parens": ["error", "as-needed"],
            "@stylistic/brace-style": ["error", "stroustrup"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/dot-location": ["error", "property"],
            "@stylistic/function-call-argument-newline": ["error", "consistent"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/linebreak-style": "off",
            "@stylistic/multiline-comment-style": "off",
            "@stylistic/multiline-ternary": ["error", "always-multiline"],
            "@stylistic/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
            "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],
            "@stylistic/object-curly-newline": ["error", { "consistent": true }],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/padded-blocks": "off",
            "@stylistic/quote-props": ["error", "consistent"],
            "@stylistic/space-before-function-paren": [
                "error", {
                    "anonymous": "never",
                    "named": "never",
                    "asyncArrow": "always",
                },
            ],
            "@typescript-eslint/no-empty-function": [
                "error",
                {
                    "allow": ["private-constructors"],
                },
            ],
        },
    },
    {
        "files": ["**/*.mjs"],
        ...tseslint.configs.disableTypeChecked,
    },
);
