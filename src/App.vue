<template>
  <div id="app">
    <NavBanner></NavBanner>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBanner from '@/components/NavBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBanner, Footer
  }
}
</script>>

<style lang="scss">
html body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
