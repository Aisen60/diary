<template>
  <div class="main-wrapper">
    <Banner />
    <div class="main-card-line">
      <div class="container">
        <div class="row card-post">
          <div
            v-for="post in postsData"
            :key="post.id"
            class="col-lg-4 col-md-6 col-sm-6"
          >
            <Card :card="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../services/index'
export default {
  name: 'Home',
  async asyncData({ app, store }) {
    const { data: postsData } = await Api.getIssues()
    return {
      postsData,
    }
  },
}
</script>
