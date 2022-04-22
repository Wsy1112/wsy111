<template>

  <div class="home">
    <router-view class="content"></router-view>
    <div class="boxs">
      <router-link
       @click.native="index=0"
        :class="index==0?'active':''"
        to="/index"
      >首页</router-link>
      <router-link
        @click.native="index=1"
        :class="index==1?'active':''"
        to="/jm"
      >居民</router-link>
      <router-link
        @click.native="index=2"
        :class="index==2?'active':''"
        to="/xx"
      >消息</router-link>
      <router-link
        @click.native="index=3"
        :class="index==3?'active':''"
        to="/my"
      >我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      index: 0
    };
  },
  
  methods:{
    
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.content {
  height: calc(100vh - 50px);
  overflow: auto;
}
.boxs {
  position: fixed;
  bottom: 0;
  display: flex;

  height: 50px;
  align-items: center;
  width: 100%;
  background-color: #fff;
  a {
    width: 25%;
    text-align: center;
    text-decoration: none;
    color: #999;
  }
  .active {
    color: aquamarine;
  }
}
</style>
