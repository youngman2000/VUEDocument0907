const code = {
  code1: `import {createApp} from vue

createApp(){
  data(){
    return {
      count:0
    }
  }
}
  `,
  code2: `<div>
  <button @click="count++">
    Count is :{{count}}
  </button>
</div>`,
  code3: `<script>
export default {
  data(){
    return {
      count:0
    }
  }
}
</script>
<template>
  <button @click="count++"> Count is:{{count}}</button>
</template>
<style scoped>
  button{
    font-weight:bold;
  }
</style>
`,
  code4: `<script>
  export default{
    //data()返回的属性将会成为响应式转态
    //并且暴露在‘this’上
    data(){
      return{
        count:0
      }
    }
    //methods 是一些用来改变状态与触发更新的函数
    //它们可以在模板中作为事件监听器绑定
    methods:{
      increment(){
        this.count++
      }
    }
    //生命周期钩子会在组件生命周期的各个不同阶段被调用
    //例如这个函数就会在组件挂在完成后被调用
    mounted(){
      console.log('The initial count is $ {this.count}.')
    }
  }
</script>
<template>
  <button @click="increment">Count is: {{count}}</button>
</template>
`,
  code5: `<script setup>
import { ref, onMounted } from 'vue'

//响应式状态
const count = ref(0)  

//用来修改转态，触发更新的函数
function increment(){
  count.value++
}
onMounted(()=>{
  console.log('The initial count is $ {count.value}')
})
</script>
<template>
  <button @click="increment" >Count is : {{count}}</button>
</template>
`
};

export { code };