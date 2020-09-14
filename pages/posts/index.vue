<template>
  <div class="page-postsList">
    <Header />
    <div class="page-postsList-wrapper">
      <div class="container">
        <div class="row card-box">
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
import Api from '../../services/index'
export default {
  layout: 'posts',
  name: 'PostsList',
  async asyncData({ app, store }) {
    const { data: postsData } = await Api.getIssues()
    return {
      postsData,
    }
  },
  head() {
    return {
      title: `${this.config.SIMPLE_NAME} | Posts`,
    }
  },
}
</script>
