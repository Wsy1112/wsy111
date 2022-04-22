
<template>
    <div class="box">
        <div class="top">
            <span @click="$router.back()">&lt;</span>
            <p>扫码签约</p>
            <span></span>
        </div>

        <div class="userinfo">
            <div class="top">
                <div class="left">
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                </div>
                <div class="right">
                    <div class="up">
                        <p>李明明</p>

                    </div>
                    <p>护理医师</p>
                </div>
            </div>
            <p>所属团队：李明明专科团队</p>
            <p>所属机构：北京市怀柔区洛西社区卫生服务站</p>
        </div>
        <div class="imgbox">
            <img src="../assets/logo.png" alt="">
            <p>扫一扫，快速签约医生团队</p>
        </div>
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
.box {
  background-color: #eee;
  height: 100%;
}
.top {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  span {
    width: 60px;
  }
  p {
    flex: 1;
    font-size: 18px;
    text-align: center;
  }
}
.userinfo {
  margin: 40px 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  .top {
    display: flex;

    img {
      width: 80px;
      height: 80px;
    }
    .right {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      flex: 1;

      .up {
        display: flex;

        p {
          font-size: 20px;
          color: #000;
        }
        button {
          border-radius: 10px;
          border: none;
          background-color: skyblue;
          padding: 0 5px;
          color: #fff;
        }
      }
    }
  }
  p {
    font-size: 14px;
    color: #999;
  }
}
.imgbox{
    text-align: center;
    p{
        font-size: 14px;
        color: #999;
    }
}
</style>
