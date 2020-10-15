import nodePath from "path";
import json from "@rollup/plugin-json";
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import pkg from "./../package.json";

const resolveFile = path => nodePath.resolve(__dirname, '..', path);

export default {
  input: resolveFile(pkg.source),
  output: [{
    file: resolveFile(pkg.main),
    format: "cjs",
    sourcemap: true
  }, {
    file: resolveFile(pkg.module),
    format: "es",
    sourcemap: true
  }, {
    file: resolveFile(pkg.browser),
    format: "umd",
    sourcemap: true,
    name: "taroColorUi"
  }],
  external: [
    "react",
    "react-dom",
    "@tarojs/components",
    "@tarojs/runtime",
    "@tarojs/taro",
    "@tarojs/react"
  ],
  plugins: [
    nodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: /\/node_modules\//
    }),
    json(),
    ts({
      tsconfig: resolveFile("tsconfig.rollup.json")
    }),
    copy({
      targets: [
        {
          src: resolveFile("src/style"),
          dest: resolveFile("dist")
        }
      ]
    })
  ]
};