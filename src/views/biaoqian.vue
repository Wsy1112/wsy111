
<template>
    <div>
         <div class="top">
            <span @click="$router.back()">&lt;</span>
            <p>标签</p>
            <span>新增标签</span>
        </div>
        <ul>
      <li>
        <p>高血压</p>
        <p>300人</p>
      </li>
      <li>
        <p>糖尿病</p>
        <p>20人</p>
      </li>
      <li>
        <p>高血糖</p>
        <p>38人</p>
      </li>
      <li>
        <p>高血脂</p>
        <p>20人</p>
      </li>
      <li>
        <p>颈椎病</p>
        <p>120人</p>
      </li>
      <li>
        <p>孕产妇</p>
        <p>24人</p>
      </li>
      <li>
        <p>儿童</p>
        <p>0人</p>
      </li>
    </ul>
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
.top {
  display: flex;
  align-items: center;
  padding:10px ;
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
ul{
    li{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid #eee;
      p:nth-child(2){
          color: #999;
          font-size: 14px;
      }
    }
  }
</style>
