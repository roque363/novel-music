# Novel-Music

> App del curso de Vue.js de Platzi

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## CLI y Dev Tools

### Eslint

ESLint Config for JavaScript Standard Style, consultar en [docs for eslint-config-standard](https://github.com/standard/eslint-config-standard).

``` bash
# Install Eslint
npm i -D eslint

# If you want to set up the config manually, run the following command:
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

# Install the loader
npm i -D eslint-loader
```

Arreglar el error “Parsing error: unexpected token =”

``` bash
# Instala el plugin oficial de ESLint para html
npm install eslint-plugin-html

# Instala el plugin oficial de ESLint para vue
npm install eslint-plugin-vue

# Modifica el archivo .eslintrc
{
  "extends": [
    "standard",
    "plugin:vue/essential"],
  "rules": {
    "no-new":0
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "env": {
    "node": true,
    "es6": true
  },
  "plugins" : ["vue", "html"]
}
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).