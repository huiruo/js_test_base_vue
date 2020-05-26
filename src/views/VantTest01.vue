<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
    </van-tabs>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-checkbox name="a">复选框 a</van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
      <van-checkbox name="c">复选框 c</van-checkbox>
    </van-checkbox-group>
    <van-button type="primary" @click="checkAll">全选</van-button>
    <van-button type="info" @click="cloneTest">test</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import _ from 'lodash'
export default {
  name: 'VantTest01',
  components: {
    // HelloWorld
  },
  data() {
    return {
      active: 3,
      checked: true,
      result: [],
      //
      testArr: [
        { id: 1, obj1: 12, obj2: 13, obj3: 14 },
        { id: 2, obj1: 13, obj2: 14, obj3: 15 },
        { id: 3, obj1: 12, obj2: 13, obj3: 19 }
      ]
    }
  },
  methods: {
    checkAll() {
      console.log('all')
      // this.$refs.checkboxGroup.toggleAll(true)
    },
    toggleAll() {
      console.log('all2')
      // this.$refs.checkboxGroup.toggleAll()
    },
    onClick(name, title) {
      // this.Toast(title);
      console.log(name, title)
    },
    cloneTest() {
      let deep = _.cloneDeep(this.testArr)
      console.log('clone:', deep)
    }
  }
}
</script>
