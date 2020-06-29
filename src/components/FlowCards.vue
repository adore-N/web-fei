<template>
  <div class="bg_color">
      <div class="tipCards">
          <div v-for="(item ,index) in cardsAmount" :key="index" class="cards">
              <div class="card_title">{{ item.title }}</div>
              <div class="card_content">{{ item.content }}</div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'tipCards',
  components: {
   
  },
  data() {
    return {
        cardsAmount: [
            {
                index: 1,
                
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 2,
               
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 3,
               
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 4,
               
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 5,
               
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 6,
               
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
        ]
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
.tipCards {
    width: 60%;
    margin: 0 auto;
    height: 450px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    // padding-top: 50px;
}
.cards {
    width: 29%;
    height: 155px;
    background: #f8f8f8;
    position: relative;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
    }
    .card_title {
        position: absolute;
        top: 25px;
        left: 10px;
        font-size:14px;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:16px;
    }
    .card_content {
        position: absolute;
        text-align: left;
        padding-right: 10px;
        top: 70px;
        left: 10px;
        right: 0;
        margin: 0 auto;
        font-size:6px;
        font-family:Source Han Sans CN;
        // font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:14px;
    }
}
</style>