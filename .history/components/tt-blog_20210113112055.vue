<template>
  <div class="container" v-if="show">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <tt-culmn :title="Blog"></tt-culmn>
        <el-row :gutter="20">
          <el-col
            class="blog"
            :xs="{ span: 20, offset: 2 }"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="pic-wrap">
              <el-image
                class="pic"
                style="width: 100%;"
                :fit="fits[2]"
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
      </el-col>
      <el-col class="hidden-md-and-down" :lg="6" :xl="6">
        <div class="space"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchList } from "../api/blog";
import ttCulmn from "../components/tt-culmn.vue";
import "element-ui/lib/theme-chalk/display.css";
@Component({})
export default class TtBlog extends Vue {
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
  private Blog = "BLOG";
  private list = [];
  private show = false;
  private created() {
    fetchList().then((res: any) => {
      console.log(res);
      this.list = res.items;
      this.show = true;
    });
  }
}
</script>

<style lang="scss" scoped>
.space {
  width: 100%;
  height: 40px;
  margin-top: 30px;
  background-color: #e6e6e6;
}
.pic-wrap {
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
      color: #000;
      background-color: #fff;
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
.pic-wrap:hover .button span {
  padding: 0 15px;
}
@media (max-width: 1920px) {
  .blog {
    height: 450px;
    .pic {
      height: 350px;
    }
  }
}
@media (max-width: 1200px) {
  .blog {
    height: 400px;
    .pic {
      height: 300px;
    }
  }
}
@media (max-width: 992px) {
  .blog {
    height: 550px;
    .pic {
      height: 450px;
    }
  }
}
</style>
