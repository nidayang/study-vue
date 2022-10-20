<!--  -->
<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name: "盐城工学院",
      address: "盐城",
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
.demo {
  background-color: orange;
}
</style>
