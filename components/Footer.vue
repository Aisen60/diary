<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <p>{{ copyright }}</p>
      <p>{{ webLicense }}</p>
    </div>
  </footer>
</template>
<script>
import { GIT_USERNAME, WEB_LICENSE } from '../config'
export default {
  data() {
    return {
      copyright: `Copyright © 2019 ${GIT_USERNAME}. All Rights Reserved`,
      webLicense: `ICP备案网站信息: ${WEB_LICENSE}`,
    }
  },
}
</script>
