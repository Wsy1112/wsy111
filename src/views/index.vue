
<template>
    <div class="index">
        <div class="top">
            <p><img
                    src="../assets/logo.png"
                    alt=""
                >王明伟医生</p>
            <p><img
                    @click="$router.push('/smqy')"
                    src="../assets/logo.png"
                    alt=""
                ></p>
        </div>
        <div class="nav">
            <ul class="ul1">
                <li>
                    <p>已签约数据</p>
                    <h4>1000</h4>
                </li>
                <li>
                    <p>待签约人数</p>
                    <h4>20</h4>
                </li>
                <li>
                    <p>居民总数</p>
                    <h4>1020</h4>
                </li>
                <li>
                    <p>待处理服务量</p>
                    <h4>10</h4>
                </li>
                <li>
                    <p>服务总量</p>
                    <h4>100</h4>
                </li>
                <li>
                    <p>服务评价</p>
                    <h4>4.9</h4>
                </li>
            </ul>
            <div class="ul2">
                <li @click="$router.push('/jmda')">
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                    <p>新建档案</p>
                </li>
                <li  @click="$router.push('/qygl')">
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                    <p>签约管理</p>
                </li>
                <li @click="$router.push('/fwgl')">
                    <img
                        src="../assets/logo.png"
                        alt=""
                    >
                    <p>服务管理</p>
                </li>
            </div>
        </div>
        <div class="content">
            <div class="top">
                <p @click="$router.push('/jm')">签约申请(3)</p>
                <span @click="$router.push('/dclqysq')">查看全部&gt;</span>
            </div>
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
        <div class="content">
            <div class="top">
                <p>服务申请(8)</p>
                <span>查看全部&gt;</span>
            </div>
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
.index {
    padding:0 20px;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;
    p {
      display: flex;
      align-items: center;
    }
    img {
      width: 30px;
      height: 30px;
    }
    span{
        color: gray;
        font-size: 14px;
    }
  }
  .nav {
    // padding: 20px;
    position: relative;
    box-sizing: border-box;
    .ul1 {
      border-radius: 20px 20px 0 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: rgb(43, 145, 140);
      padding-bottom: 100px;
      li {
        width: 33%;
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: center;
        color: #fff;
        h4 {
          margin-top: 10px;
        }
      }
    }
    .ul2 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      //   padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      background-color: #fff;
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
  }
  .content{
      ul{
          li{
              padding: 20px;
              border: 1px solid #eee;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
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
  }
}
</style>
