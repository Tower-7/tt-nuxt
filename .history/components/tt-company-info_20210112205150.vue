<template>
  <div class="container">
    <div class="top">
      <div>\\\COMPANYINFO</div>
      <div>MORE</div>
    </div>
    <el-row :gutter="30" class="wrap">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div>
          {{ data.title }}
        </div>
        <div>
          Zuzunaga’s Pixel Collection Is Far From Square
        </div>
        <div>
          Zuzunaga's Pixel Collection stands out for its timeless, non-gender
          specific, sustainable home and fashion in great color combos!
        </div>
        <div>READ MORE</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-image :src="data.image_uri" :fit="fits[2]"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchData } from "../api/companyInfo";
@Component({})
export default class CompanyInfo extends Vue {
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
  private data: any = {};
  private created() {
    fetchData().then((res: any) => {
      this.data = res;
      console.log(res);
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #e6e6e6;
  .top {
    display: flex;
    width: 100%;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    justify-content: space-between;
    background-color: #000;
    margin-bottom: 20px;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
