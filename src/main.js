// 入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import app from './App.vue';
import router from './router.js';


// 引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


//模块
import VueResource from 'vue-resource';
Vue.use(VueResource);

// 配置根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

Vue.http.options.emulateJSON = true;


// 格式化日期的过滤器（全局）
const moment = require('moment');
Vue.filter('dateFormat', function (dataStr) {
    return moment(dataStr).format('YYYY年MM月DD HH:mm:ss');
  })

// import { Header, Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);




var vm = new Vue({
    el: '#app',
    data: {
    },
    render: c => c(app),
    router
});