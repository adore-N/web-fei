<template>
  <div class="NavBanner">
      <!-- <img src="../assets/img/banner.png" alt=""> -->
      <div class="nav_logo">
        <img src="../assets/logo.png" alt="">
        <div class="nav_c">
          <el-menu 
            :default-active="activeIndex"
            background-color='rgba(0,0,0,0)'
            text-color='#fff'
            active-text-color='#fff'
            class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3">处理中心</el-menu-item>
            <el-menu-item index="4">处理中心</el-menu-item>
            <el-menu-item index="5">处理中心</el-menu-item>
            <el-menu-item index="6">处理中心</el-menu-item>
            <el-menu-item index="7">处理中心</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="content">
        <div class="content_title">广告也可以是生活的一部分 我们试图做些改变</div>
        <div class="content_c">助力企业快速曝光品牌助力企业快速曝光品牌</div>
        <div class="content_link">联系我们</div>
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
        activeIndex: '1',
        activeIndex2: '1',
        navList: [
          { name: '首页', link: '/home'},
          { name: '广告资源', link: '/home'},
          { name: '广告案例', link: '/home'},
          { name: '广告投放', link: '/home'},
          { name: '资源共享', link: '/home'},
          { name: '招聘', link: '/home'},
          { name: '加入我们', link: '/home'},
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
.NavBanner {
  width: 100%;
  height: 500px;
  background: url('../assets/img/banner2.png') no-repeat;
  background-size: cover;
  // background-size: ;
}
.nav_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
.nav_c {
  width: 680px;
}
.content {
  color: #fff;
  font-size: 30px;
  margin-top: 120px;
}
</style>