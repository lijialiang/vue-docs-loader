# Vue-docs-loader

Inject custom blocks `docs` into the current component and access them as variables.

## Install

```sh
npm i vue-docs-loader --save-dev

# or

yarn add vue-docs-loader --dev
```

## How to use

```js
// wepback.config.js
module.exports = {
  module: {
    rules: [
      {
        resourceQuery: /blockType=docs/,
        loader: 'vue-docs-loader'
      }
    ]
  }
}
```

## Example

```
<template>
  <div></div>
</template>

<script>
export default {
  created () {
    console.log(this.docs)
  }
}
</script>

<docs>
# h1

## h2

p
</docs>
```

## LICENSE

[MIT](./LICENSE)
