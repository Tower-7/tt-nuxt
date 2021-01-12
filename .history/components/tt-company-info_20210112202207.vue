<template>
  <div class="container">
    <div class="top">
      <div>\\\COMPANYINFO</div>
      <div>MORE</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class CompanyInfo extends Vue {}
</script>

<style lang="scss" scoped>
.container {
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
}
</style>
