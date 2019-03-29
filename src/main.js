import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// 引入公共样式文件
import './assets/statics/site/css/style.css';
// 导入发送请求的组件
import axios from 'axios';
Vue.prototype.$axios = axios;
// 设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/';
// 引入MUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入时间处理组件
import moment from 'moment';
// 引入全局的过滤器
Vue.filter('capitalize', function (value,valuea) {
    if(valuea==""){
      return moment(value).format("YYYY年MM月DD日");
    }else{
      return moment(value).format(valuea);
    }
})

new Vue({
  // ...
})
// 引入组件
// 导入商品列表的组件
import homepage from './components/goodslist.vue';
//导入购物车的组件
import buycar from './components/buycar.vue';
// 导入商品详情组件
import goodsdetail from './components/goodsdetail.vue';
//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 路由规则
const routes = [
  {path:'/homepage',component:homepage},
  {path:'/',component:homepage},
  {path:'/buycar',component:buycar},
  {path:'/goodsdetail/:id',component:goodsdetail},
];

// 实例路由对象
const router = new VueRouter(
  {routes}
);

new Vue({
  el:"#app",
  render: h => h(App),
  router,

})
