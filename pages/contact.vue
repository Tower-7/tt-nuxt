<template>
  <div class="container">
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <div class="bgWrap">
            <el-image
              class="bgImg"
              :src="CompanyInfo.background_image_uri"
            ></el-image>
            <div class="bg-cover">
              THAI MEGACAB x GOLDENHOME
            </div>
          </div>

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
import { fetchData } from "../api/companyInfo";
import ttCompanyInfo from "../components/tt-company-info.vue";
@Component({
  components: {
    ttNav,
    ttCompanyInfo
  }
})
export default class Blog extends Vue {
  private CompanyInfo: any = {};
  private created() {
    fetchData().then((res: any) => {
      console.log(res);
      this.CompanyInfo = res;
    });
  }
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
    .bgWrap {
      position: relative;
      .bgImg {
        width: 100%;
        height: 550px;
      }
      .bg-cover {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        font-size: 45px;
        color: #000;
        padding: 70px 0;
        text-align: center;
        background-color: rgba($color: #fff, $alpha: 0.7);
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
