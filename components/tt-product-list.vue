<template>
  <div class="container">
    <div class="top">
      <div>\\\PRODUCT</div>
      <div>MORE</div>
    </div>
    <el-row :gutter="20" class="product-wrap">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        class="product"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="pic">
          <el-image
            style="width: 100%; height: 260px"
            :src="item.image_uri"
          ></el-image>
          <div class="button">
            <span>SHOP</span> <i class="el-icon-arrow-right"></i>
          </div>
        </div>

        <div class="title">{{ item.title }}</div>
        <div class="intro">{{ item.intro }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchList } from "../api/product";
@Component({})
export default class ProductList extends Vue {
  private list = [];
  private created() {
    fetchList().then((res: any) => {
      console.log(res);
      this.list = res.items;
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
  .product-wrap {
    padding: 0 20px;
    .product {
      height: 400px;
      .pic {
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
        }
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            height: 25px;
            color: #fff;
            background-color: #475669;
            transition: 0.3s;
          }

          i {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 5px;
            height: 25px;
            color: #fff;
            background-color: #a3aab4;
          }
        }
      }
      .title {
        margin: 10px 0;
        font-size: 20px;
      }
    }
    .product:hover .button span {
      padding: 0 15px;
    }
  }
}
</style>
