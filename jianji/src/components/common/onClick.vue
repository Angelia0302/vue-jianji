<template>
  <div class="onclick">
    <el-menu :default-active="onRoutes" mode="vertical" default="2" class="el-menu-vertical-demo">
     	<h3>简记后台</h3>
     	<i class="el-icon-date"></i>
     		<template v-for="item in items">
                <template>
                    <el-menu-item :index="item.index">
                        {{ item.title }}
                    </el-menu-item>
                </template>
            </template>   
    </el-menu>  
  </div>
</template>

<script>
export default {
  name: 'onclick',
  data () {
    return {
    	 items: [
                    {
                        index: 'readme',
                        title: '客户管理'
                    },
                    {
                        index: '2',
                        title: '商城订单',
                    },
                    {
                        index: '3',
                        title: '发送通知',
                    },
                    {
                        index: 'basecharts',
                        title: '发票信息'
                    },
                    {  
                        index: 'drag',
                        title: '用户反馈'
                    }
    ],
     // computed:{
     //        onRoutes(){
     //            return this.$route.path.replace('/','');
     //        }
     //    }
  }
}
}  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">   
    .el-icon-date{
    	color:#fff;
    	font-size:50px;
    	padding-top: 20px;
    	padding-bottom: 20px;
    	padding-left: 25px;
    }
    .el-menu{
    	position: absolute;
		top: 0;
		left: 0;
        display: block;
        width: 110px;
        background: #999;
    	background: #999;
    	border-radius: none;
    	height:650px;
    	h3{
			padding-top: 10px;
			text-align: center;
			color:#fff;
		}
    }
    .el-menu-item{
        height:30px;
        color:#fff;
        line-height: 30px;
		
    }
    .el-menu-item:hover{
    	background: none;
    }
    

</style>
