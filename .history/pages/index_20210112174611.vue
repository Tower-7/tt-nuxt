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
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>
          <tt-banner style="margin-top:30px"></tt-banner>
          <tt-product-list style="margin-top:30px"></tt-product-list></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
import ttBanner from "../components/tt-banner.vue";
import ttProductList from "../components/tt-product-list.vue";
@Component({
  components: {
    ttNav,
    ttBanner,
    ttProductList
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.container {
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
