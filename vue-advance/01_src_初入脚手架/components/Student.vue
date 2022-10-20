<!--  -->
<template>
  <div class="">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 20,
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>
