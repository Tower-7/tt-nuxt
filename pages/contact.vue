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
          <tt-footer></tt-footer>
          <div class="footer" style="padding-top:50px"></div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
@Component({
  components: {
    ttNav
  }
})
export default class Blog extends Vue {}
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
