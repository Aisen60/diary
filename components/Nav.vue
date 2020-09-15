<template>
  <ul class="nav-link">
    <li v-for="item in nav" :key="item.name + '-' + item.path">
      <nuxt-link
        v-if="!item.external"
        :id="item.name + '-btn'"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </nuxt-link>
      <a v-else :id="item.name + '-btn'" :href="github" target="_blank">
        Github
      </a>
    </li>
  </ul>
</template>

<script>
import { APP_NAV, GITHUB_AISEN60 } from '../config'
export default {
  data() {
    return {
      nav: APP_NAV,
      github: GITHUB_AISEN60,
    }
  },
}
</script>
