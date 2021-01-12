<template>
  <div class="container">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <el-row :gutter="20" class="banner-wrap">
          <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
            <el-carousel
              trigger="click"
              height="50vh"
              @change="
                pre => {
                  change(pre);
                }
              "
            >
              <el-carousel-item v-for="(item, index) in list" :key="index">
                <img :src="item.image_uri" alt="" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <div class="content">
              <h2 class="title">{{ title }}</h2>
              <p class="intro">
                {{ intro }}
              </p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <div class="right-tool">
          <div class="space"></div>
          <div class="content">
            <div>ARIUMA Releases Pantone</div>
            <p>
              Explore our newest collection of modern lighting looks to refresh
              your home. Free Shipping on orders over $50!
            </p>
            <div class="button">SUB SCRIBE</div>
          </div>
        </div>
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
.container {
  cursor: default;
}
.banner-wrap {
  background-color: #e6e6e6;
  .content {
    height: 45vh;
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
