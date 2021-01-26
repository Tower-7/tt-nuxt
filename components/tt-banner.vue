<template>
  <div class="container">
    <el-row :gutter="30">
      <el-col :span="24">
        <el-carousel
          trigger="click"
          class="banner"
          @change="
            pre => {
              change(pre);
            }
          "
        >
          <el-carousel-item v-for="(item, index) in list" :key="index">
            <!-- <img :src="item.image_uri" alt="" /> -->
            <el-image
              style="width: 100%; height: 100%"
              :src="item.image_uri"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { fetchList } from "../api/banner";
@Component({})
export default class TtBanner extends Vue {
  private list: any = [];
  private fits: any = ["fill", "contain", "cover", "none", "scale-down"];
  private title = "";
  private intro = "";
  private created() {
    fetchList().then((res: any) => {
      this.list = res.items;
      this.title = this.list[0].title;
      this.intro = this.list[0].intro;
    });
  }
  private change(pre: any) {
    this.title = this.list[pre].title;
    this.intro = this.list[pre].intro;
  }
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 1700px) {
  .banner {
    height: 550px;
    ::v-deep .el-carousel__container {
      height: 550px;
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1700px) {
  .banner {
    height: 500px;
    ::v-deep .el-carousel__container {
      height: 500px;
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1200px) {
  .banner {
    height: 450px;
    ::v-deep .el-carousel__container {
      height: 450px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .banner {
    height: 200px;
    ::v-deep .el-carousel__container {
      height: 200px;
    }
  }
}
.container {
  cursor: default;
}

.banner-wrap {
  background-color: #e6e6e6;
  .content {
    margin-top: 20px;
    padding: 40px;
    background-color: #fff;
    .title {
      font-size: 30px;
      font-weight: normal;
    }
    .intro {
      margin-top: 20px;
      font-size: 14px;
      color: #888;
    }
  }
}
.right-tool {
  .space {
    width: 100%;
    height: 32vh;
    background-color: #e6e6e6;
  }
  .content {
    margin-top: 20px;
    color: #fff;
    padding: 10px;
    background-color: #000;
    .button {
      display: inline-block;
      margin-top: 15px;
      padding: 10px 15px;
      background-color: #475669;
      cursor: pointer;
    }
    .button:hover {
      background-color: #888e96;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
