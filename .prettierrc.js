module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 200,
  bracketSpacing: true,
  semi: false,
};
