<template>
  <div class="container">
    <el-row class="nav-wrap">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"
        ><div class="logo">
          <img :src="require('../static/logo.jpg')" alt="" />
          <span>PICO CABINETS</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="navs">
          <div class="nav" v-for="(item, index) in navs" :key="index">
            {{ item }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class TtNav extends Vue {
  private activeIndex = "1";
  private activeIndex2 = "2";
  private navs = ["HOME", "PRODUCTS", "BLOG", "CONTACT"];
  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style lang="scss" scoped>
.container {
  .nav-wrap {
    font-size: 30px;
    border-bottom: 2px solid #000;
    .logo {
      display: flex;
      height: 120px;
      align-items: center;
      img {
        width: 140px;
      }
      span {
        margin-left: 50px;
      }
    }
    .navs {
      display: flex;
      .nav {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        line-height: 120px;
        cursor: pointer;
        border-bottom: 6px solid transparent;
      }
      :hover {
        color: #ccc;
        border-bottom: 6px solid #000;
      }
    }
  }
}
</style>
