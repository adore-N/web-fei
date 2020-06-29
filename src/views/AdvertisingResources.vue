<template>
  <div class="advertisingResources">
    <TipCards></TipCards>
    <Intro></Intro>
    <Intro3></Intro3>
  </div>
</template>

<script>
// @ is an alias to /src
import TipCards from '@/components/TipCards.vue'
import Intro from '@/components/Intro.vue'
import Intro3 from '@/components/Intro3.vue'

export default {
  name: 'home',
  components: {
    TipCards,
    Intro,
    Intro3
  }
}
</script>
