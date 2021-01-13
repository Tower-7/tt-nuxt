<template>
  <div class="container">
    <el-row :gutter="50">
      <el-col>
        <el-row>
          <div class="pic">
            <el-image
              style="width: 100%; height: 260px"
              :fit="fits[2]"
              :src="item.image_uri"
            ></el-image>
            <div class="button">
              <span>SHOP</span> <i class="el-icon-arrow-right"></i>
            </div>
          </div>

          <div class="title">{{ item.title }}</div>
          <div class="intro">{{ item.intro }}</div>
        </el-row>
      </el-col>
      <el-col> </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class TtBlog extends Vue {}
</script>

<style lang="scss" scoped></style>
