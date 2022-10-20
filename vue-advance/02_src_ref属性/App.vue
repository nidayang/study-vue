<!--  -->
<template>
  <div>
    <img src="./assets/logo.png" alt="logo"/>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
//引入组件
//ref 父组件访问子组件的一些信息
import School from "./components/School";
export default {
  name: "App",
  components: { School },
  methods : {
    showDOM(){
      console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象
    }
  }
};
</script>
