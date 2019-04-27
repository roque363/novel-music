# Novel Music

> App Diseñada para el curso de Vue.js de Platzi
![](https://repository-images.githubusercontent.com/162227184/e8f2c080-687b-11e9-8dde-bef9651f8808)

## Getting Started
Para poder ejecutar el proyecto en local

### Cambio de las rutas

Editar el archivo **src/routes.js**

``` bash
# Cambiar la rutas dependiendo si es para desarrolo o para produccion
const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track' },
  { path: '/404', component: PageNotFound },
  { path: '/*', redirect: '/404' }
]
```

Editar el arnchivo **index.html**

``` bash
  ...
  <title>Novel Music</title>
  <link rel="shortcut icon" href="/src/assets/logo-icon.png" type="image/x-icon">
  ...
</head>
<body>
  <div id="app"></div>
  <!-- ⚠️ Cambiar la Url depenidendo si es para Desarrollo o para Produccion -->
  <script src="/dist/build.js"></script>
</body>
```

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

### Pug

**PUG** nos permite crear **HTML** con otro tipo de sintaxis, escribiendo menos código, y a través de webpack compilarlo para que funcione en el navegador.
``` bash
npm i -D pug pug-loader
```

### Bulma

Framework de css
``` bash
npm i -S bulma
```

### Vue-Router

Permite trabajar con rutas anidadas, es modular, permite crear rutas con parametros y permite aplicar transiciones a las rutas
``` bash 
# Install vue-loader
npm i -S vue-router

# Despues solo agregar en el archivo routes.js las rutas que se necesiten
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Authors

* **Roque Alarcon** - *Initial work* - [Roque363](https://github.com/roque363)

## Acknowledgments

Para mas detalles ver el [Curso de VueJS de Platzi](https://platzi.com/clases/vuejs-profesional/).
