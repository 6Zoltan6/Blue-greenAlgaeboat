import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import index from '../components/index.vue'

Vue.use(VueRouter)
//路由与组件映射
const routes=[
    {path:'/HelloWorld',components:HelloWorld},
    {path:'/index',components:index}
]
const router= new VueRouter({
    routes
})
export default router
