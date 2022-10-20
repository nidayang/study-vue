<!--  -->
<template>
  <div>
		<Student name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
//引入组件
//ref 父组件访问子组件的一些信息
import Student from "./components/Student";
export default {
  name: "App",
  components: { Student },
};
</script>
