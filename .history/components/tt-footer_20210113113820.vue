<template>
  <div class="container">
    <div class="line"></div>
    <div>
      <el-row class="web-site" type="flex">
        <el-col>
          <div>WEB SITE</div>
          <div>HOME</div>
          <div>PRODUCT</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </el-col>
        <el-col>
          <div>CONTACT</div>
          <div>phone:+86-18158888</div>
          <div>e-mail: lahlhgao@gamil.com</div>
        </el-col>
      </el-row>
    </div>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class xxx extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  .web-site {
    display: flex;
  }
}
</style>
