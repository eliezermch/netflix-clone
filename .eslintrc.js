module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: [2, 2],
    commonjs: "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": [2, "always"],
    "no-undef": 2,
    "no-var": 2,
    "no-const-assign": 2,
    "no-unused-vars": 2,
    "prefer-const": 2,
    "no-case-declarations": "off",
    "quote-props": "consistent-as-needed",
    "operator-linebreak": [
      2,
      "before",
      {
        overrides: {
          "?": "before",
          ":": "before",
          "=": "after",
          "&&": "after",
        },
      },
    ],
    "quote-props": [2, "as-needed"],
    "require-jsdoc": 0,
    "linebreak-style": 0,
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
      },
    ],
  },
};
