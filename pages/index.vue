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
  name: "baciCabinetsIndex",

  components: {
    ttNav,
    ttBanner,
    ttCulmn,
    ttProductList,
    ttCompanyInfo,
    ttInfoColumn,
    ttBlog,
    ttFooter
  },
  async asyncData() {
    let detail = await fetchSeo(0);
    return { detail: detail };
  },
  head() {
    return {
      title: (this as any).detail.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this as any).detail.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: (this as any).detail.title
        }
      ]
    };
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
