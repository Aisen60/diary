<template>
  <div class="main-banner">
    <h1>
      {{ config.bio }}
    </h1>
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
