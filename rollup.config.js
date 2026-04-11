import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/ev-charger-card.js",
  output: {
    file: "dist/emshomeevcard.js",
    format: "iife",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    terser({
      format: { comments: false },
    }),
  ],
};
