<template>
  <div class="bg_color">
      <div class="intro">
        <div class="img">
            <img src="../assets/img/top.png" alt="">
        </div>
        <div class="text">
            <div>全网广告资源 一站式投放</div>
            <div>每天有数十亿人群网上冲浪，他们分享自己感兴趣的内容，浏览商业信息。</div>
            <div>点击</div>
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
.img {
    width: 300px;
    height: 240px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>