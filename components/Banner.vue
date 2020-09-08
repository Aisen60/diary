<template>
  <div class="main-banner">
    <h1>
      {{ config.BIO }}
    </h1>
    <Github />
  </div>
</template>
<script>
import config from '../config'
export default {
  name: 'Banner',
  data() {
    return {
      config,
    }
  },
}
</script>
