
<template>
    <div class="bigbox">
        <div class="top">
            <span @click="$router.back()">&lt;</span>
            <p>居民详情</p>
            <span></span>
        </div>
        <div class="imgbox">
            <img
                src="../assets/logo.png"
                alt=""
            >
            <p>王燕然</p>
            <button>已签约</button>
        </div>
        <div class="ul2">
            <li @click="$router.push('/jmda')">
                <img
                    src="../assets/logo.png"
                    alt=""
                >
                <p>健康档案</p>
            </li>
            <li @click="$router.push('/qygl')">
                <img
                    src="../assets/logo.png"
                    alt=""
                >
                <p>健康记录</p>
            </li>
            <li @click="$router.push('/fwgl')">
                <img
                    src="../assets/logo.png"
                    alt=""
                >
                <p>签约信息</p>
            </li>
            <li @click="$router.push('/fwgl')">
                <img
                    src="../assets/logo.png"
                    alt=""
                >
                <p>服务记录</p>
            </li>
        </div>

        <div class="userinfo">
            <p><span class="a1">身份证号</span> <span>371456198908090543</span></p>
            <p><span class="a1">性别</span> <span>女</span></p>
            <p><span class="a1">年龄</span> <span>26</span></p>
            <p><span class="a1">联系电话</span> <span>1567899900</span></p>
            <p><span class="a1">现居地</span> <span>怀柔区洛西县建设路青莲校区6-601</span></p>
            <p><span class="a1">居民来源</span> <span>医生档案</span></p>
            <p><span class="a1">居民标签</span>
                <section class="ss"><span>高血压</span><span>冠心病</span></section>
            </p>
            <p>
                <span class="a1 a2">家庭成员</span>
                <section class="info">
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                    <div class="center">
                        <p>李青<span class="s">58岁</span></p>
                        <p class="s">关系<span>:父母</span></p>
                    </div>
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                </section>
            </p>
        </div>

        <footer>
            <button>发消息</button>
            <button>添加服务</button>
        </footer>
    </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang='scss'>
.bigbox {
  background-color: #eee;
  height: calc(100vh - 60px);
  //   padding-bottom: 200px;
  overflow: auto;
}
.top {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  span {
    width: 70px;
    font-size: 15px;
    // background-color: aqua;
  }
  p {
    flex: 1;
    font-size: 18px;
    text-align: center;
  }
}
.imgbox {
  text-align: center;
  margin: 10px 0;
  img {
    width: 100px;
  }
  button {
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 2px 5px;
    color: green;
    background-color: rgb(123, 201, 123);
  }
}
.ul2 {
  width: 100%;
  //   padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  //   background-color: aqua;
  li {
    width: 33%;
    text-align: center;
    margin: 10px 0;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      text-align: center;
    }
  }
}
.userinfo {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  p {
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
    .a1 {
      color: #999;
    }
    .a2 {
      width: 100%;
    }
    .ss {
      span {
        padding: 2px 5px;
        border-radius: 4px;
        font-size: 12px;
        background-color: skyblue;
        color: #fff;
        margin-left: 10px;
      }
      span:nth-child(2) {
        background-color: pink;
      }
    }
    .info {
      width: 100%;
      //   background-color: antiquewhite;
      display: flex;
      justify-content: space-between;
      img {
        width: 80px;
        height: 80px;
      }
      .center {
        flex: 1;
        .s {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
footer {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  button {
    width: 48%;
    height: 40px;
    border-radius: 10px;
    border-color: green;
  }
  button:nth-child(1) {
    color: green;
    background-color: #fff;
  }
  button:nth-child(2) {
    color: #fff;
    background-color: green;
  }
}
</style>
