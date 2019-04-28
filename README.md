# mfw-vue-comps

> a set of components for vue projects.

## Setup Components

``` bash
# install dependencies
npm i mfw-vue-comps --save
```

## Using CDLabel

``` bash

# CDLabel component have two properties you need to provide: time and format. Time means how many seconds for countdown. Format is a string you want to transform the countdown in to.
<template>
  <div class="page">
    <CDLabel :time="10" :format="'<span>{d}</span> <span>{h}</span>:<span>{m}</span>:<span>{s}</span>'" @over="onCDOver"></CDLabel>
  </div>
</template>

<script>
import CDLabel from 'mfw-vue-comps'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {CDLabel},
  methods: {
      onCDOver () {
          alert('over')
      }
  }
}
</script>
```
