<template>
  <div class="page-index">
    <div class="page-index-section">
      <img class="index-avatar" :src="config.AVATARS" />
    </div>
    <div class="page-index-section">
      <h1 class="index-full-name">{{ config.FULL_NAME }}</h1>
    </div>
    <div class="page-index-section">
      <div class="index-bio">{{ config.BIO }}</div>
    </div>
    <hr class="page-index-division" />
    <div class="page-index-section">
      <Nav />
    </div>
    <footer class="page-index-footer">{{ config.COPYRIGHT }}</footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  head() {
    return {
      title: `${this.config.SIMPLE_NAME} | HomePage`,
    }
  },
}
</script>
