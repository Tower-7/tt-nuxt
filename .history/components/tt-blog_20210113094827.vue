<template>
  <div class="container" v-if="show">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <el-row v-for="(item, index) in list" :key="index">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="pic">
              <el-image
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
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">1111111111</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchList } from "../api/blog";
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

<style lang="scss" scoped></style>
