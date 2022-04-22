
<template>
  <div class="bigbox">
    <h4>居民</h4>
    <div class="inputbox">
      <input
        type="text"
        placeholder="搜索居民姓名/电话"
      >
    </div>
    <ul class="title">
      <li @click="$router.push('/wqyjm')">
        <img
          src="../assets/logo.png"
          alt=""
        >
        <p>未签约居民</p>
      </li>
      <li @click="$router.push('/biaoqian')">
        <img
          src="../assets/logo.png"
          alt=""
        >
        <p>标签</p>
      </li>
      <li @click="$router.push('/qfxx')">
        <img
          src="../assets/logo.png"
          alt=""
        >
        <p>群发消息</p>
      </li>
    </ul>
    <div class="box">
      <p class="key">A</p>
      <ul class="list">
        <li @click="$router.push('/jmxq')">
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王嫣然 <span>26岁</span></p>
            <div class="span">
              <span class="a1">低血糖</span>
              <span class="a2">颈椎病</span>
            </div>
          </section>
        </li>
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王梦 <span>58岁</span></p>
            <div class="span">
              <span class="a1">高血压</span>

            </div>
          </section>
        </li>
      </ul>
    </div>
    <div class="box">
      <p class="key">A</p>
      <ul class="list">
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王嫣然 <span>26岁</span></p>
            <div class="span">
              <span class="a1">低血糖</span>
              <span class="a2">颈椎病</span>
            </div>
          </section>
        </li>
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王梦 <span>58岁</span></p>
            <div class="span">
              <span class="a1">高血压</span>

            </div>
          </section>
        </li>
      </ul>
    </div>
    <div class="box">
      <p class="key">A</p>
      <ul class="list">
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王嫣然 <span>26岁</span></p>
            <div class="span">
              <span class="a1">低血糖</span>
              <span class="a2">颈椎病</span>
            </div>
          </section>
        </li>
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王梦 <span>58岁</span></p>
            <div class="span">
              <span class="a1">高血压</span>

            </div>
          </section>
        </li>
      </ul>
    </div>
    <div class="box">
      <p class="key">A</p>
      <ul class="list">
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王嫣然 <span>26岁</span></p>
            <div class="span">
              <span class="a1">低血糖</span>
              <span class="a2">颈椎病</span>
            </div>
          </section>
        </li>
        <li>
          <img
            src="../assets/logo.png"
            alt=""
          >
          <section>
            <p>王梦 <span>58岁</span></p>
            <div class="span">
              <span class="a1">高血压</span>

            </div>
          </section>
        </li>
      </ul>
    </div>

    <aside>
      <p>a</p>
      <p>b</p>
      <p>c</p>
      <p>d</p>
      <p>e</p>
    </aside>
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
aside{
  position: fixed;
  right: 15px;
  top: 50%;
  transform: translate(0,-50%);
  p{
    line-height: 40px;
  }
}
.bigbox {
  background-color: rgb(157, 225, 229);
  h4 {
    padding: 20px;
    background-color: #fff;
  }
  .inputbox{
     padding:0 20px;

     background-color: #fff;
  }
  input {
     padding: 20px;
   
    border: 1px solid #eee;
    width: 100%;
    height: 30px;
    padding: 0 20px;
    box-sizing: border-box;
    outline: none;
    margin: 10px 0;
  }
  .title {
    padding: 20px;
    background-color: #fff;
    li {
      display: flex;
      height: 50px;
      align-items: center;
      border-bottom: 1px solid #eee;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      
    }
  }
  .box {
    .key {
      width: 100%;
      margin: 10px;
    }
    .list{
      background-color: #fff;
      li{
        padding: 10px 20px;
        display: flex;
        align-items: center;
        img{
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
        section{
        .span{
          
         .a1{
            color: orange;
            background-color: yellow;
            font-size: 12px;
            border-radius: 5px;
            margin: 5px;
          }
          .a2{
            color: red;
            background-color: pink;
            font-size: 12px;
            border-radius: 5px;
             margin: 5px;
          }
        }
      }
      }
    }
  }
}
</style>
