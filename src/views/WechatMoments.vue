<template>
  <div class="home">
    <NavBanner></NavBanner>
    <Intro></Intro>
    <Intro2></Intro2>
    <Intro></Intro>
    <Intro3></Intro3>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBanner from '@/components/NavBanner.vue'
import Intro from '@/components/Intro.vue'
import Intro2 from '@/components/Intro2.vue'
import Intro3 from '@/components/Intro3.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    NavBanner,
    Intro,
    Intro2,
    Intro3,
    Footer,
  }
}
</script>
