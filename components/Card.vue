<template>
  <div class="card">
    <nuxt-link :to="{ path: '/posts/' + card.number }" class="card-image">
      <img :src="splicingFileUrl(card.number + '.jpg')" alt="" />
    </nuxt-link>
    <div class="card-body">
      <nuxt-link :to="{ path: '/posts/' + card.number }" class="card-link">
        <h1 class="card-title">{{ card.title }}</h1>
      </nuxt-link>

      <div class="card-info">
        <span class="text-muted">{{ card.updated_at | parseTime }}</span>
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
