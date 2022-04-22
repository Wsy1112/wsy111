
<template>
    <div class="box">
        <div class="top">
            <span @click="$router.back()">&lt;</span>
            <p>群发消息</p>
            <span></span>
        </div>
        <div class="kong">
            您有两条群发历史消息
        </div>
        <div class="count">
            <p><span class="a1">群发时间</span> <span>2020/09/09/ 10:09:09</span></p>
            <p><span class="a1">接收人</span> <span>李明明，王梦然，王倩等三人</span></p>
            <p><span class="a1">群发内容</span> <span>您好，请您于本周五上午10:00至石角街社区门诊进行健康随访，如果有情况不能按时到达，请提前通知下，谢谢配合</span></p>
            <p class="a"><span class="a2">再次发送</span></p>
        </div>
        <div class="count">
            <p><span class="a1">群发时间</span> <span>2020/09/09/ 10:09:09</span></p>
            <p><span class="a1">接收人</span> <span>李明明，王梦然，王倩等三人</span></p>
            <p><span class="a1">群发内容</span> <span>您好，请您于本周五上午10:00至石角街社区门诊进行健康随访，如果有情况不能按时到达，请提前通知下，谢谢配合</span></p>
            <p class="a"><span class="a2">再次发送</span></p>
        </div>
        <div class="btnbox">
            <button>新建群发</button>
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
.box{
    background-color: #eee;
    height: 100%;
}
.top {
  display: flex;
  align-items: center;
  padding:10px ;
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
.kong{
    padding: 10px;
    background-color: aquamarine;
    font-size: 14px;
    color: #999;
}
.count{
    margin: 20px;
    background-color: #fff;
    padding: 20px 20px 40px 20px;
    .a{
        margin-top: 10px;
        border-top: 1px solid #eee;
    }
    .a1{
        color: #999;
    }
    .a2{
        float: right;
        color: aqua;
        margin-top: 10px;
    }
}
.btnbox{
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #ccc;
    padding: 10px 10px 20px 10px;
    button{
        width: 100%;
        border: none;

        height: 40px;
        background-color: aquamarine;
        color: #fff;
        font-size: 16px;
    }
}
</style>
