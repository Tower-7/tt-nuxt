<template>
  <div class="container">
    <el-row class="top">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="grid-content bg-purple-dark">
          PICO CABINETS PICO CABINETS PICO CABINETS PICO CABINETS PICO CABINETS
          PICO CABINETS
        </div></el-col
      >
    </el-row>
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <tt-banner style="margin-top:30px"></tt-banner>
          <tt-culmn :title="Product"></tt-culmn>
          <tt-product-list style="padding-top:20px"></tt-product-list>
          <tt-culmn :title="CompanyInfo"></tt-culmn>
          <tt-company-info></tt-company-info>
          <tt-culmn :title="CompanyInfo"></tt-culmn>
          <tt-footer></tt-footer>
          <div class="footer" style="padding-top:50px"></div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
import ttBanner from "../components/tt-banner.vue";
import ttCulmn from "../components/tt-culmn.vue";
import ttProductList from "../components/tt-product-list.vue";
import ttCompanyInfo from "../components/tt-company-info.vue";
import ttBlog from "../components/tt-blog.vue";
import ttFooter from "../components/tt-footer.vue";
@Component({
  components: {
    ttNav,
    ttBanner,
    ttCulmn,
    ttProductList,
    ttCompanyInfo,
    ttBlog,
    ttFooter
  }
})
export default class Index extends Vue {
  private Product = "PRODUCT";
  private CompanyInfo = "COMPANY INFO";
}
</script>

<style lang="scss" scoped>
.container {
  cursor: default;
  .top .bg-purple-dark {
    display: flex;
    height: 30px;
    color: #fff;
    justify-content: center;
    align-items: center;
    background: #000;
  }
  .wrap {
    display: flex;
    justify-content: center;
  }
}
</style>
