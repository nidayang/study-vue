<!--  -->
<template>
  <div>
	<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
<!-- 子给父传递事件 -->
	<!-- 通过props实现传递数据 -->
    <School :getSchoolName="getSchoolName"/>
		<hr>
		<!-- 绑定自定义事件来实现 的俩种写法-->
	<!-- <Student @atguigu="getStudentName" v-on:demo="m1"/> -->
	<!-- @click.native在一个组件上面的点击事件 -->
	<Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				this.studentName = name;
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params){
				console.log('App收到了学生名：',name,params);
				console.log(params);
				this.studentName = name;
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			console.log('绑定自定义事件');
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>
