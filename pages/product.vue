<template>
  <div class="container">
    <el-row class="top">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="grid-content bg-purple-dark">
          BACI CABINETS BACI CABINETS BACI CABINETS BACI CABINETS BACI CABINETS
          BACI CABINETS
        </div></el-col
      >
    </el-row>
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <tt-culmn :title="Product"></tt-culmn>
          <tt-company-info></tt-company-info>
          <tt-footer></tt-footer>
          <div class="footer" style="padding-top:50px"></div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
import ttCulmn from "../components/tt-culmn.vue";
import ttCompanyInfo from "../components/tt-company-info.vue";
import { fetchSeo } from "../api/seo";
@Component({
  // head: {
  //   titleTemplate: "product",
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },

  //     {
  //       hid: "description",
  //       name: "description",
  //       content: "product============="
  //     }
  //   ]
  // },
  asyncData({ params }) {
    return fetchSeo(0).then((res: any) => {
      console.log(res);
      return {
        title: "res.title"
      };
    });
  },
  components: {
    ttNav,
    ttCompanyInfo,
    ttCulmn
  }
})
export default class Blog extends Vue {
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
