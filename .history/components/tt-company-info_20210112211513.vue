<template>
  <div class="container" v-if="show">
    <el-row :gutter="60" class="wrap">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="title">
          Zuzunaga’s Pixel Collection Is Far From Square
        </div>
        <div class="intro">
          Zuzunaga's Pixel Collection stands out for its timeless, non-gender
          specific, sustainable home and fashion in great color combos!
        </div>
        <div class="button">READ MORE</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-image :src="data.image_uri" :fit="fits[2]"></el-image>
      </el-col>
    </el-row>
    <div>The Pixel Collection</div>
    <tt-product-list></tt-product-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchData } from "../api/companyInfo";
import ttProductList from "./tt-product-list.vue";
@Component({
  components: {
    ttProductList
  }
})
export default class CompanyInfo extends Vue {
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
  private data: any = {};
  private show = false;
  private created() {
    fetchData().then((res: any) => {
      this.data = res;
      this.show = true;
      console.log(res);
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #e6e6e6;
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    .title {
      font-size: 30px;
    }
    .intro {
      font-size: 16px;
    }
    .button {
      display: inline-block;
      margin-top: 15px;
      padding: 10px 15px;
      color: #fff;
      background-color: #000;
      cursor: pointer;
    }
    .button:hover {
      background-color: #888e96;
    }
  }
}
</style>
