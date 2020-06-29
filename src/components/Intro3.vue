<template>
  <div class="bg_color">
      <div class="intro">
        <div class="card">
          <img src="../assets/img/card.png" alt="">
          <div>拥有专业的服务团队，资深广告策划师资深广告优化师，资深数据分析师，资深UED，包括策略制定、创意制作、媒介计划、社会化媒体营销等服务。</div>
        </div>
        <div class="card">
          <img src="../assets/img/card.png" alt="">
          <div>拥有专业的服务团队，资深广告策划师资深广告优化师，资深数据分析师，资深UED，包括策略制定、创意制作、媒介计划、社会化媒体营销等服务。</div>
        </div>
        <div class="card">
          <img src="../assets/img/card.png" alt="">
          <div>拥有专业的服务团队，资深广告策划师资深广告优化师，资深数据分析师，资深UED，包括策略制定、创意制作、媒介计划、社会化媒体营销等服务。</div>
        </div>
        <div class="card">
          <img src="../assets/img/card.png" alt="">
          <div>拥有专业的服务团队，资深广告策划师资深广告优化师，资深数据分析师，资深UED，包括策略制定、创意制作、媒介计划、社会化媒体营销等服务。</div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'NavBanner',
  components: {
   
  },
  data() {
      return {
      }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
.bg_color {

}
.intro {
    width: 60%;
    margin: 0 auto;
    height: 323px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.card {
  width: 20%;
  img {
    width: 100%;
  }
}
</style>