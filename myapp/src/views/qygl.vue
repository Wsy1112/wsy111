
<template>
    <div>
        <div class="top">
            <span @click="$router.back()">&lt;</span>
            <p>签约管理</p>
            <span></span>
        </div>
        <div class="tab">
            <ul>
                <li class="active">全部</li>
                <li>待审核</li>
                <li>待支付</li>
                <li>生效中</li>
            </ul>
        </div>
        <div class="count">
            <ul class="item_a">
                <li>
                    <div class="left">
                        <p>王小明</p>
                        <p>服务包</p>
                        <p>服务项目</p>
                        <p>申请时间</p>
                    </div>
                    <div class="center">
                        <p>58岁</p>
                        <p>565645*****65465</p>
                        <p>李明明团队</p>
                        <p>老年服务包</p>
                    </div>
                    <div class="right">
                        <p>待审核</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <p>王小明</p>
                        <p>身份证号</p>
                        <p>签约团队</p>
                        <p>服务包</p>
                    </div>
                    <div class="center">
                        <p>58岁</p>
                        <p>565645*****65465</p>
                        <p>李明明团队</p>
                        <p>老年服务包</p>
                    </div>
                    <div class="right">
                        <p>待审核</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <p>王小明</p>
                        <p>身份证号</p>
                        <p>签约团队</p>
                        <p>服务包</p>
                    </div>
                    <div class="center">
                        <p>58岁</p>
                        <p>565645*****65465</p>
                        <p>李明明团队</p>
                        <p>老年服务包</p>
                    </div>
                    <div class="right">
                        <p>待审核</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </li>
            </ul>
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
.top {
  display: flex;
  align-items: center;
  padding:10px 20px;
  span {
    width: 60px;
  }
  p {
    flex: 1;
    font-size: 18px;
    text-align: center;
  }
}
.tab{
    ul{
        display: flex;
        justify-content: space-around;
        li{
            // width: 25%;
            text-align: center;
            line-height: 40px;
        }
        .active{
            color: green;
            border-bottom: 2px solid green;
        }
    }
}
.count{
    background-color: #eee;
    padding: 20px;
}
 .item_a{
          li{
            //   margin: 10px 0;
            margin-bottom: 10px;
              padding: 20px;
              border: 1px solid #eee;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              background-color: #fff;
              border-radius: 10px;
              .left{
                  width: 80px;
                  p{
                      line-height: 40px;
                  }
              }
              .center{
                  flex: 1;
                    p{
                      line-height: 40px;
                  }
              }
              .right{
                  width: 60px;
                    p{
                      line-height: 40px;
                      color: red;
                  }
              }
          }
      }
      
  
</style>
