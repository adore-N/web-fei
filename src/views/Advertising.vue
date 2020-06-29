<template>
  <div class="advertising">
    <div class="advertising_title">
        <h3>SERVICE FLOW</h3>
        <h4>广告投放流程</h4>
    </div>
    <FlowCards></FlowCards> 
  </div>
</template>

<script>
// @ is an alias to /src
import FlowCards from '@/components/FlowCards.vue'

export default {
  name: 'home',
  components: {
    FlowCards
  }
}
</script>

<style lang="scss" scoped>
.advertising_title {
  // height: 100px;
  h3 {
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 28px;
  }
  h4 {
    font-size: 26px;

  }
}
</style>
