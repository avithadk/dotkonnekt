import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import url from "@rollup/plugin-url";
export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    url(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": [
          "isValidElementType",
          "isContextConsumer",
        ],
      },
    }),
    nodeResolve({
      modulesOnly: true,
      preferBuiltins: false,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    terser(),
  ],
  external: [
    "@testing-library/jest-dom",
    "@testing-library/react",
    "@testing-library/user-event",
    "react",
    "react-dom",
    "react-scripts",
    "web-vitals",
    "@emotion/react",
    "@emotion/styled",
    "@mui/material",
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "autoprefixer",
    "eslint",
    "eslint-config-next",
    "next",
    "postcss",
    "typescript",
  ],
};
