import VueRouter from 'vue-router'
// import Vue from 'vue';
// Vue.use(VueRouter);

// 导入对应的路由组件
import HomeContainer from './components/tabar/HomeContainer.vue';
import MemberContainer from './components/tabar/MemberContainer.vue';
import ShopcarContainer from './components/tabar/ShopcarContainer.vue';
import SearchContainer from './components/tabar/SearchContainer.vue';
import NewsList from './components/news/NewsList.vue';
import newsInfo from './components/news/newsInfo.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},    
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path: '/search', component: SearchContainer },
    {path:'/home/NewsList',component:NewsList},
    {path:'/home/newsInfo/:id',component:newsInfo}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router