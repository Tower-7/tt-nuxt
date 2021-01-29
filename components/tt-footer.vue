<template>
  <div class="container">
    <div class="line1"></div>
    <div>
      <el-row class="web-site">
        <el-col>
          <div>WEB SITE</div>
          <div>HOME</div>
          <div>PRODUCT</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </el-col>
        <el-col>
          <div>CONTACT</div>
          <div>phone:{{ data.phone }}</div>
          <div>e-mail: {{ data.email }}</div>
          <div>adress: {{ data.adress }}</div>
        </el-col>
      </el-row>
    </div>
    <div class="line2"></div>
    <div class="instruction">
      Photo copyright retained by photo owners, everything else © 2021 Design
      Milk®.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchData } from "../api/companyInfo";
@Component({})
export default class Footer extends Vue {
  private data: any = "";
  private created() {
    fetchData().then((res: any) => {
      this.data = res;
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  .line1 {
    width: 100%;
    height: 10px;
    margin-bottom: 20px;
    border-top: 4px solid #000;
    border-bottom: 1px solid #000;
  }
  .line2 {
    width: 100%;
    height: 10px;
    margin-top: 20px;
    border-top: 1px solid #000;
    border-bottom: 4px solid #000;
  }
  .web-site {
    display: flex;
    line-height: 30px;
    font-weight: 700;
  }
  .instruction {
    margin: 40px;
    display: flex;
    font-size: 14px;
    color: #555;
    justify-content: center;
  }
}
</style>
