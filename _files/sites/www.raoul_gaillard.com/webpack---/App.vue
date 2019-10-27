<template>
  <div class="app">
    <on-mobile></on-mobile>
    <loader></loader>
    <router-view></router-view>
    <three-background></three-background>
  </div>
</template>

<script>

import ThreeBackground from './shared-components/ThreeBackground/ThreeBackground.vue'
import OnMobile from './shared-components/OnMobile/OnMobile.vue'
import Loader from './shared-components/Loader/Loader.vue'

export default {
  name: 'app',
  components: {
    ThreeBackground,
    Loader,
    OnMobile
  }
}
</script>

<style lang="scss" src="./commons/style/app.scss">
</style>



// WEBPACK FOOTER //
// App.vue?714c1b9e