<template>
	<div id="main">
		<router-view></router-view>
		<onClick></onClick>
	</div>
</template>
<script>
	import onClick from '../components/common/onClick.vue'
	export default {
		name:'main',
		components:{
			onClick
		}
	}
</script>