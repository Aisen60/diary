<template>
  <div class="main-wrapper">
    <Banner />
    <div class="main-card-line">
      <div class="container">
        <div class="row card-post">
          <div
            v-for="card in cardData"
            :key="card.id"
            class="col-lg-4 col-md-6 col-sm-6"
          >
            <Card :card="card" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { cardData } from '../config'
export default {
  name: 'Home',
  data() {
    return {
      cardData,
    }
  },
}
</script>
