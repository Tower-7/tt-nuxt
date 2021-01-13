<template>
  <div class="container" v-if="show">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <el-row :gutter="20">
          <el-col
            class="blog"
            :xs="24"
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
      <el-col class="hidden-md-and-down" :lg="6" :xl="6">22222222222</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchList } from "../api/blog";
import "element-ui/lib/theme-chalk/display.css";
@Component({})
export default class TtBlog extends Vue {
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
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
@media only screen and (min-width: 1920px) {
  .blog {
    height: 450px;
    .pic {
      height: 350px;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .blog {
    height: 450px;
    .pic {
      height: 350px;
    }
  }
}
@media only screen and (min-width: 992) {
  .blog {
    height: 450px;
    .pic {
      height: 350px;
    }
  }
}
@media only screen and (min-width: 768) {
  .blog {
    height: 450px;
    .pic {
      height: 350px;
    }
  }
}
</style>
