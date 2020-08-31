<template>
  <div class="card">
    <router-link :to="{ path: '/posts/' + card.number }" class="card-image">
      <img src="~assets/img/bg.jpg" alt="" />
    </router-link>
    <div class="card-body">
      <router-link :to="{ path: '/posts/' + card.number }" class="card-link">
        <h1 class="card-title">{{ card.title }}</h1>
      </router-link>

      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">1 mins</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
