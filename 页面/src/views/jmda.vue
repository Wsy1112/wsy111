
<template>
  <div class="boxs">
    <div class="top">

      <span @click="$router.back()"> &lt;</span>
      <p>居民信息档案</p>
      <span></span>
    </div>
    <div class="title">居民基本信息</div>
    <ul class="form">
      <li>
        <section>
          <p>真实姓名<span>*</span></p><input
            type="text"
            placeholder="请填写居民真实姓名"
          ><b></b>
        </section>
      </li>
      <li>
        <section>
          <p>身份证号<span>*</span></p><input
            type="text"
            placeholder="请填写居民的身份证号"
          ><b></b>
        </section>
      </li>
      <li>
        <section>
          <p>性别<span>*</span></p><input
            type="text"
            placeholder="请选择居民性别"
          ><b>&gt;</b>
        </section>
      </li>
      <li>
        <section>
          <p>出生日期<span>*</span></p><input
            type="text"
            placeholder="请选择居民出生日期"
          ><b>&gt;</b>
        </section>
      </li>
      <li>
        <section>
          <p>手机号码<span>*</span></p><input
            type="text"
            placeholder="居民登录账号，请正确填写"
          ><b></b>
        </section>
      </li>
      <li>
        <section>
          <p>登录密码<span>*</span></p><input
            type="text"
            placeholder="8位以上的数组和字母组合"
          ><b></b>
        </section>
      </li>
      <li>
        <section>
          <p>现居地<span></span></p><input
            type="text"
            placeholder="请填写现居地"
          ><b></b>
        </section>
      </li>
      <li>
        <section>
          <p>居民标签<span></span></p><input
            type="text"
            placeholder="点击选择居民标签"
          ><b></b>
        </section>
        <ul class="item">
          <li>高血压</li>
          <li>冠心病</li>
          <li>高血糖</li>
          <li>高血脂</li>
          <li>高血压</li>
          <li>冠心病</li>
          <li>高血糖</li>
          <li>高血脂</li>
        </ul>
      </li>
      <li>
        <section>

          <p>关联家人<span></span></p><input
            type="text"
            placeholder="请选择该居民家人信息"
          ><b>&gt;</b>
        </section>
      </li>
      <li>
        <section>

          <p>立即签约<span></span></p><input
            type="text"
            placeholder=""
          ><b></b>
        </section>
      </li>
    </ul>
    <button>下一步</button>
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
.boxs {
  padding: 0 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  font-size: 18px;
  span {
    text-align: center;
  }
  p {
    flex: 1;
    text-align: center;
  }
}
.title {
  font-size: 18px;
  margin: 10px 0;
}
button {
  width: 100%;
  margin: 10px 0;
  color: #fff;
  background-color: aquamarine;
  line-height: 40px;
  border: none;
  border-radius: 10px;
}
.form {
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    // padding: 0 10px;
    box-sizing: border-box;
    section{
      width: 100%;
      display: flex;
    }
    .item {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 5px;
        border-radius: 5px;
        // width: 25%;
        margin: 10px;
        // text-align: center;
        border: 1px solid #999;
        line-height: 30px;
      }
    }
    input {
      border: none;
      padding: 0 25px;
      outline: none;
    }
    span {
      color: red;
    }
  }
}
</style>
