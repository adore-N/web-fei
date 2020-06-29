<template>
  <div class="bg_color">
      <div class="tipCards">
          <div v-for="(item ,index) in cardsAmount" :key="index" class="cards">
              <img :src="require('../assets/cards/card' + item.index  + '.png')" alt="">
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
                imgSrc: '../assets/cards/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 2,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 3,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 4,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 5,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 6,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 7,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 8,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 9,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            },
            {
                index: 10,
                imgSrc: '../assets/card',
                title: '微信朋友圈广告',
                content: '微信朋友圈广告是基于微信公众号生态体系，以类似朋友的原创内容形式在朋友圈中展示的原生广告。'
            }
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
    padding-top: 50px;
}
.cards {
    width: 19%;
    // height: 155px;
    border: 1px dashed #ccc;
    position: relative;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
    }
    .card_title {
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-size:10px;
        font-family:Source Han Sans CN;
        // font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:16px;
    }
    .card_content {
        position: absolute;
        text-align: left;
        padding: 0 10px;
        bottom: 5px;
        left: 0;
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