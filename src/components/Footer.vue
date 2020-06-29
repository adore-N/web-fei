<template>
    <div class="footer">
        <div class="bg_color">
            <div class="top">
                <div class="top_title">预约您的专属广告营销顾问</div>
                <div class="input_two">
                    <input class="te" type="text" placeholder="请输入您的姓名">
                    <input type="text" placeholder="请输入您的电话">
                </div>
                <div class="input_one">
                    <input type="button" value="立即预约">
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="logo"></div>
            <div>电话：18132895200 邮箱：943731686@QQ.COM</div>
            <div>COPYRIGHT © 2013-2019 WWW.yinghuochong.COM.All RIGHTS RESERVED 安徽萤火虫品牌策划有限公司版权所有 沪ICP备14044897号-9</div>
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
     
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 100%;
    background: #fff;
}
.bg_color {
    width: 100%;
    height: 210px;
    background: #000;
}
.top {
    width: 60%;
    height: 208px;
    margin: 0 auto;
    .top_title {
        // width:246px;
        height:78px;
        font-size:20px;
        font-family:Source Han Sans CN;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:78px;
    }
    .input_two {
        margin-bottom: 30px;
        input {
            width: 167px;
            height: 30px;
            background: #fff;
            border: 1px solid #000;
            border-radius: 2px;
            padding-left: 15px;
        }
        .te {
            margin-right: 20px;
        }
    }
    .input_one {
        input {
            width: 167px;
            height: 40px;
            background: #fff;
            border: 1px solid #000;
            border-radius: 2px;
        }
    }
}
.bottom {
    width: 60%;
    height: 140px;
    margin: 0 auto;
    .logo {
        width: 100%;
        height: 10px;
        margin-bottom: 30px;
    }
}
</style>