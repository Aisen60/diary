<template>
  <div class="page-about">
    <div class="page-about-section">
      <p class="page-about-text-right">JUST CALL ME :C</p>
      <p>THE WECHAT 👉 {{ config.WECHAT }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: `${this.config.SIMPLE_NAME} | About`,
    }
  },
}
</script>
