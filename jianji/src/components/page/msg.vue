<template>
<div class="msg">
    <div class="right">
    	<input v-model="input" class="input_tile" placeholder="请输入关键字"></input>
	<button class="el-button el-button--primary" type="primary">搜索</button>
	<table class="table_th" border="0" cellspacing="0" align="center">
		<tr><td class="cell"  bgcolor="#20a0ff" v-for='info in infous'>{{info.th}}</td></tr>
		<tr v-for='item in items'>
		<td colspan="0" border="1" v-for='main in mains.items'>{{main.text}}</td>
		<tr v-for='item in items'>
		<td colspan="0" border="1" v-for='main in mains.items'>{{main.text}}</td>
		<td colspan="0" border="1">2017.02.03
		</td>
		<td colspan="0" border="1" v-show='!flage' @click='chang'>已提交</td><td colspan="0" border="1" v-show='flage'>未提交</td>
		<td colspan="0" border="1">2014.03.05</td>
		<td colspan="0" border="1">北京云总财科技有限公司</td>
		<td colspan="0" border="1">123456789</td>
		<td colspan="0" border="1">200.00</td>
		<td colspan="0" border="1">cxy@163.com</td>
		<td colspan="0" border="1">152456789</td>
		<td colspan="0" border="1">聪明</td>
		<td colspan="0" border="1">IDy</td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
		<td colspan="0" border="1"></td>
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
	
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		<tr>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		<td colspan="0" border="1"></td>
		
	
		</tr>
		

	</table>
    
    
<script>   
import axios from 'axios';
//import http from '../../assets/js/http.js';
  export default {

    data() {
      return {
       input:'',
       infous:[
       		{th:'序号'},
       		{th:'提交日期'},
       		{th:'发票状态'},
       		{th:'开票日期'},
       		{th:'公司名称'},
       		{th:'纳税人号'},
       		{th:'金额'},
       		{th:'邮箱'},
       		{th:'联系人'},
       		{th:'联系电话'},
       		{th:'发票号'},
       	]   
      }
    },

   
    mounted() {

    	axios({
    		    	url:'/api/invoices',
    		    	menthod:'GET',
    		    	header:{'Authorization': 
    						    	'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ'}}).then((res) => {
    		    		console.log(res)}
	    	)
    		/*$.ajax({
				url: 'http://192.168.8.177:4210/api/invoices/',
				type: 'GET',
				dataType: 'json',
				headers: {
					Authorization: 
				    	'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODQwMTU3MTc2NyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDEzOTczMTd9.qp7wxWMpguDyGf6acDAcrsVl1Mk7sDAtjT20LBJ8eYBszYZjaMWXgRqUJKI35cMZ91-RssaleCgUJSxaMzHYDQ'
				    },
				success: function (res) {
					console.log(res)
				},
			});
    	
    }

  }
</script>
<style scoped lang='less'>
.msg{
	position: absolute;
	left: 200px;
	top:70px;
	width: 80%;
}
	.input_tile{
		 -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    background-color: #fff;
	    background-image: none;
	    box-sizing: border-box;
	    color: #1f2d3d;
	    font-size: 12px;
	    height: 30px;
	    line-height: 1;
	    outline: 0;
	    padding: 3px 10px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);

	  
	}
	.el-button el-button--primary{
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c4c4c4; 
    color: #1f2d3d;
    margin: 0; 
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    border-radius: 4px;
	}
	.table_th{
		border-right: 1px solid #ccc; 
		margin-top: 15px;
		width:100%;
	}
	.table_th .cell{
		font-size: 14px;
		color:#fff;
		border-left: 1px solid #ccc;
		background: #20a0ff;
		height:30px;
		line-height: 30px;
	}
	.table_th td{
		font-size:14px; 
		height:25px;
		background-color: rgb(251, 253, 255);
		border-left: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
</style>