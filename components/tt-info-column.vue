<template>
  <div class="container" v-if="show">
    <div v-for="(item, index) in list" :key="index">
      <el-row class="wrap" v-if="index % 2 === 0">
        <el-col class="pc" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="intro">
              {{ item.intro }}
            </div>
            <div class="button">
              <NuxtLink
                class="link"
                :to="`detail?id=${item._id}&infoType=${infoType}`"
                >READ MORE</NuxtLink
              >
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image :src="item.image_uri" :fit="fits[2]"></el-image>
        </el-col>
        <el-col class="move" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="intro">
              {{ item.intro }}
            </div>
            <div class="button">
              <NuxtLink
                class="link"
                :to="`detail?id=${item._id}&infoType=${infoType}`"
                >READ MORE</NuxtLink
              >
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="wrap" v-if="index % 2 !== 0">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-image class="pic" :src="item.image_uri" :fit="fits[2]"></el-image>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="content right">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="intro">
              {{ item.intro }}
            </div>
            <div class="button">
              <NuxtLink
                class="link"
                :to="`detail?id=${item._id}&infoType=${infoType}`"
                >READ MORE</NuxtLink
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchList } from "../api/blog";
import { fetchList as blogList } from "../api/blog";
import { fetchList as productList } from "../api/product";
import ttProductList from "./tt-product-list.vue";
@Component({
  components: {
    ttProductList
  }
})
export default class InfoColumn extends Vue {
  @Prop() infoType: any;
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
  private list: any = [];
  private show = false;
  private created() {
    switch (this.infoType) {
      case 1:
        productList().then((res: any) => {
          this.list = res.items;
          this.show = true;
          console.log(this.list);
        });
        break;
      case 2:
        blogList().then((res: any) => {
          this.list = res.items;
          this.show = true;
        });
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .move {
    display: none;
  }
  .pc {
    display: block;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    .pic {
      width: 100%;
    }
  }
}

@media (max-width: 1600px) {
  .move {
    display: none;
  }
  .pc {
    display: block;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
  }
}
@media (max-width: 1200px) {
  .move {
    display: none;
  }
  .pc {
    display: block;
  }
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
  }
}
@media (max-width: 768px) {
  .wrap {
    display: block;
    padding: 0;
    margin-bottom: 20px;
    .title {
      font-size: 18px !important;
    }
    .intro {
      font-size: 12px;
      color: #555;
    }
    .right {
      padding: 10px;
      margin-left: 0 !important;
    }
    .move {
      display: block;
    }
    .pc {
      display: none;
    }
  }
}

.container {
  background-color: #e6e6e6;
  padding-bottom: 50px;
  .wrap {
    .content {
      .title {
        font-size: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .intro {
        font-size: 16px;
      }
      .button .link {
        display: inline-block;
        margin-top: 25px;
        padding: 10px 15px;
        color: #fff;
        background-color: #000;
        cursor: pointer;
        text-decoration: none;
      }
      .link:hover {
        background-color: #888e96;
      }
    }
    .right {
      margin-left: 60px;
    }
  }
  .sub-title {
    margin: 20px;
    padding: 0 20px;
    font-size: 30px;
  }
}
</style>
