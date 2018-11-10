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
import photoList from './components/photo/photoList.vue';
import photoInfo from './components/photo/photoInfo.vue';
import goodsList from './components/goods/goodsList.vue';
import goodsInfo from './components/goods/goodsInfo.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},    
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path: '/search', component: SearchContainer },
    {path:'/home/NewsList',component:NewsList},
    {path:'/home/newsInfo/:id',component:newsInfo},
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoInfo/:id',component:photoInfo},
    {path:'/home/goodsList',component:goodsList},
    {path:'/home/goodsInfo/id',component:goodsInfo,name:"goodsInfo"},
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router