<template>
  <div class="container">
    <div class="culmn">
      <div>\\\PRODUCT</div>
      <div>MORE</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class TtCulmn extends Vue {}
</script>

<style lang="scss" scoped>
.culmn {
  margin-top: 30px;
  display: flex;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  justify-content: space-between;
  background-color: #000;
  margin-bottom: 20px;
}
</style>
