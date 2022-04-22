
<template>
<div class="box">
    <h4>我的</h4>
    <div class="userinfo">
      <div class="top">
        <div class="left">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="right">
          <div class="up">
            <p>李明明</p>
            <button>切换团队</button>
          </div>
          <p>护理医师</p>
        </div>
      </div>
      <p>所属团队：李明明专科团队</p>
      <p>所属机构：北京市怀柔区洛西社区卫生服务站</p>
    </div>

    <ul>
      <li>
        <p>我的医生团队</p>
        <p>&gt;</p>
      </li>
      <li>
        <p>签约管理</p>
        <p>&gt;</p>
      </li>
      <li>
        <p>服务管理</p>
        <p>&gt;</p>
      </li>
      <li>
        <p>使用指南</p>
        <p>&gt;</p>
      </li>
      <li>
        <p>设置</p>
        <p>&gt;</p>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.box{
  background-color: #f3f0f0;
}
 h4{
    padding: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  .userinfo{
    margin: 40px 20px;
    background-color: #fff;
    padding: 20px;
    .top{
      display: flex;
      
      img{
        width: 100px;
        height: 100px;
      }
      .right{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        flex: 1;
        .up{
          display: flex;
          justify-content: space-between;
          p{
            font-size: 20px;
            color: #000;
          }
          button{
            border-radius: 10px;
            border: none;
            background-color: skyblue;
            padding: 0 5px;
            color: #fff;
          }
        }
      }
    }
    p{
      font-size: 14px;
      color: #999;
    }
  }
  ul{
    li{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
  }
</style>
