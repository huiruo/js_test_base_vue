<template>
  <div class="home">
    <div>
      <p class="title">Home</p>
      <p class="desc">
        各种测试入口、代码探究
      </p>
    </div>
    <div>
      <div class="demo-home-nav">
        <p>test1:有赞</p>
        <div>
          <div @click="handleClick(1)" class="demo-home-nav__block">
            Button 按钮
          </div>
        </div>
      </div>
      <div class="demo-home-nav">
        <p>test2:lodash</p>
        <div>
          <div @click="handleClick(2)" class="demo-home-nav__block">
            lodash test
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  methods: {
    handleClick(index) {
      let routerPath = ''
      switch (index) {
        case 1:
          routerPath = 'vanttest01'
          break
        case 2:
          routerPath = 'lodash02'
          break
        default:
          break
      }
      this.$router.push({
        path: routerPath
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  padding: 16px;
  .title {
    margin: 0 0 16px;
    font-size: 32px;
  }
  .desc {
    // padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  .demo-home-nav {
    .demo-home-nav__block {
      position: relative;
      display: flex;
      margin: 0 0 12px;
      padding-left: 20px;
      color: #323233;
      font-weight: 500;
      font-size: 14px;
      line-height: 40px;
      background: #f7f8fa;
      border-radius: 99px;
      transition: background 0.3s;
    }
  }
}
</style>
