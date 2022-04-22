
<template>
<div>
    <h4>消息</h4>
    <ul>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>服务消息</p> <span>2021-04-30</span></div>
          <div class="bottom">您有一条新的签约申请</div>
        </section>
      </li>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>系统消息</p> <span>2021-04-30</span></div>
          <div class="bottom">评价通知</div>
        </section>
      </li>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>李明明</p> <span>2021-04-30</span></div>
          <div class="bottom">周五上午您有空吗</div>
        </section>
      </li>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>李明明</p> <span>2021-04-30</span></div>
          <div class="bottom">周五上午您有空吗</div>
        </section>
      </li>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>李明明</p> <span>2021-04-30</span></div>
          <div class="bottom">周五上午您有空吗</div>
        </section>
      </li>
      <li>
        <img src="../assets/logo.png" alt="">
        <section>
          <div class="top"><p>李明明</p> <span>2021-04-30</span></div>
          <div class="bottom">周五上午您有空吗</div>
        </section>
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
  h4{
    padding: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  ul{
    li{
      padding:10px 20px;
      border-bottom: 1px solid #999;
      display: flex;
      align-items: center;
      img{
        width: 40px;
        height: 40px;
        margin-right: 20px;
      }
      section{
        flex: 1;
        .top{
          
          display: flex;

          justify-content: space-between;
          span{
            color: #ccc;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
