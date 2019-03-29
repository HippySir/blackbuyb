<template>
  <div id="index">
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li v-for="(item,index) in  catelist" :key="index">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{item.title}}</span>
                    <p>
                      <span v-for="(it,itindex) in item.subcates" :key="itindex">{{it.title}}&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <div id="focus-box" class="focus-box">
                <el-carousel>
                  <el-carousel-item v-for="(item,index) in sliderlist" :key="index">
                      <img :src="item.img_url" alt="" class="slidelist">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item,index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index + 1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                    <router-link :to="`/goodsdetail/${item.id}`">
                        {{item.title}}
                    </router-link>
                  <span>{{item.add_time | capitalize("YYYY-MM-DD")}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="(item,index) in goodslist" :key="index">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a href="/goods/43.html" v-for="(it,indexa) in item.level2catelist" :key="indexa">{{it.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(its,indexs) in item.datas" :key="indexs">
              <a href="#/site/goodsinfo/87" class>
                <div class="img-box">
                  <img
                    :src="its.img_url"
                  >
                </div>
                <div class="info">
                  <h3>{{its.artTitle}}</h3>
                  <p class="price">
                    <b>{{its.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{its.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{its.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
    //商品的列表信息
      goodslist:[],
    };
  },
  methods: {},
  created() {
    //  获取顶部信息请求
    this.$axios.get("site/goods/gettopdata/goods").then(res => {
      this.catelist = res.data.message.catelist;
      this.sliderlist = res.data.message.sliderlist;
      this.toplist = res.data.message.toplist;
    });
    //获取商品信息列表的请求
    this.$axios.get("site/goods/getgoodsgroup").then(res=>{
        console.log(res);
        this.goodslist = res.data.message;
    });

  }
};
</script>

<style>
    .el-carousel__container{
        height:341px;
    }
    .slidelist{
        height: 341px;
    }
</style>
