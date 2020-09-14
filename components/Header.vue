<template>
  <div class="app-header" :class="{ 'app-header-fixed': fixed }">
    <div class="container app-header-section app-header-nav">
      <h1>
        <nuxt-link to="/"> {{ config.SIMPLE_NAME.toUpperCase() }}</nuxt-link>
      </h1>
      <Nav />
    </div>
    <div class="app-header-bio-box">
      <div class="container bio-wrapper">
        <h3>BLOG @ {{ config.FULL_NAME }}</h3>
        <p>{{ config.BIO }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
