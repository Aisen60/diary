<template>
  <div class="card">
    <router-link :to="{ path: '/posts/' + card.number }" class="card-image">
      <img src="~assets/img/bg.jpg" alt="" />
    </router-link>
    <div class="card-body">
      <router-link :to="{ path: '/posts/' + card.number }" class="card-link">
        <h1 class="card-title">{{ card.title }}</h1>
      </router-link>

      <div class="card-info">
        <span class="text-muted">{{ card.updated_at | parseTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils'

export default {
  name: 'Card',
  filters: {
    parseTime(str, cFormat = '{y}-{m}-{d} {h}:{i}') {
      return utils.parseTime(new Date(str), cFormat)
    },
  },
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
