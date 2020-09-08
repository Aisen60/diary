<template>
  <div class="main-post-wrapper">
    <div class="article">
      <div class="article-header">
        <Github />
        <img :src="splicingFileUrl(issuesNumber + '.jpg')" alt="" />

        <div class="head-mask">
          <h1 class="head-title">
            {{ postData.title }}
          </h1>
          <div class="head-info">
            <span class="post-info-item">
              {{ postData.updated_at | parseTime }}
            </span>
          </div>
        </div>
      </div>
      <div class="article-main">
        <section v-html="postContent(postData.body)"></section>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { GIT_USERNAME } from '../../config'
import Api from '../../services'

export default {
  name: 'PostDetails',
  async asyncData({ params }) {
    const issuesNumber = params.number
    const { data: postData } = await Api.issueDetails(issuesNumber)
    return {
      issuesNumber,
      postData,
    }
  },
  computed: {
    postContent: () => {
      return (body) => {
        return marked(body)
      }
    },
  },

  head() {
    return {
      title: `${this.postData.title}-${GIT_USERNAME}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.postData.title,
        },
      ],
    }
  },
}
</script>
