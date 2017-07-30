import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import msg from '@/components/page/msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
      {path:'',redirect:'msg'},
      {
      	path:'msg',
      	name:'msg',
      	component: msg
      },
      
      ]
    }, 
    

   ]
})
