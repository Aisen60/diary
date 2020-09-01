<template>
  <div class="main-post-wrapper">
    <div class="container">
      <div class="article">
        <div class="article-header">
          <img src="~assets/img/promise.jpg" alt="" />
          <div class="head-mask">
            <h1 class="head-title">{{ cardData.title }}</h1>
            <div class="head-info">
              <span class="post-info-item">
                {{ cardData.updated_at | parseTime }}
              </span>
            </div>
          </div>
        </div>
        <div class="article-main">
          <!-- // eslint-disable-next-line vue/no-v-html -->
          <section v-html="postContent(cardData.body)"></section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import utils from '../../utils'
import { cardData } from '../../config'
export default {
  name: 'PostDetails',
  filters: {
    parseTime(str, cFormat = '{y}-{m}-{d} {h}:{i}') {
      return utils.parseTime(new Date(str), cFormat)
    },
  },
  data() {
    return {
      cardData,
    }
  },
  computed: {
    postContent: () => {
      return (body) => {
        return marked(body)
      }
    },
  },

  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  created() {
    this.cardData = cardData.filter(
      (item) => item.number === parseInt(this.$route.params.id)
    )[0]
  },
}
</script>
