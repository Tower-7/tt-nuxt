<template>
  <div class="container">
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <tt-banner style="margin-top:30px"></tt-banner>
          <tt-culmn :title="Product"></tt-culmn>
          <tt-info-column :infoType="1" />
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
import ttInfoColumn from "../components/tt-info-column.vue";
import ttBlog from "../components/tt-blog.vue";
import ttFooter from "../components/tt-footer.vue";
import { fetchSeo } from "../api/seo";
@Component({
  name: "BACI CABINETS",
  head: {
    titleTemplate: "BACI CABINETS",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "product============="
      }
    ]
  },
  // asyncData({ params }) {
  //   return fetchSeo(0).then((res: any) => {
  //     return {
  //       title: "res.title"
  //     };
  //   });
  // },
  components: {
    ttNav,
    ttBanner,
    ttCulmn,
    ttProductList,
    ttCompanyInfo,
    ttInfoColumn,
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
  overflow: hidden;

  .wrap {
    display: flex;
    justify-content: center;
  }
}
</style>
