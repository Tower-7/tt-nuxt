<template>
  <div class="container">
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <tt-info-column :infoType="2" />
          <tt-footer></tt-footer>
          <div class="footer" style="padding-top:50px"></div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
import ttCulmn from "../components/tt-culmn.vue";
import ttInfoColumn from "../components/tt-info-column.vue";
import { fetchSeo } from "../api/seo";
@Component({
  name: "blog",
  components: {
    ttNav,
    ttCulmn,
    ttInfoColumn
  },
  async asyncData() {
    let detail = await fetchSeo(2);
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
export default class Blog extends Vue {
  private Blog = "BLOG";
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
