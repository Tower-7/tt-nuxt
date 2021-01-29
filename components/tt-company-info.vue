<template>
  <div class="container" v-if="show">
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="content">
          <div class="title">
            Zuzunaga’s Pixel Collection Is Far From Square
          </div>
          <div class="intro">
            Zuzunaga's Pixel Collection stands out for its timeless, non-gender
            specific, sustainable home and fashion in great color combos!
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-image :src="data.image_uri" :fit="fits[2]"></el-image>
      </el-col>
    </el-row>
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 300px"
        >
          <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          /> -->
        </GmapMap>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="content">
          <div class="title">
            Contact Us
          </div>
          <div class="intro">
            <div class="list">
              <div>adress:</div>
              <div>China</div>
            </div>
            <div class="list">
              <div>adress:</div>
              <div>China</div>
            </div>
            <div class="list">
              <div>adress:</div>
              <div>China</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchData } from "../api/companyInfo";
import ttProductList from "./tt-product-list.vue";
import { gmapApi } from "vue2-google-maps";
console.log(gmapApi);
@Component({
  components: {
    ttProductList
  },
  computed: {
    google: gmapApi
  }
})
export default class CompanyInfo extends Vue {
  private fits = ["fill", "contain", "cover", "none", "scale-down"];
  private data: any = {};
  private show = false;
  private created() {
    fetchData().then((res: any) => {
      this.data = res;
      this.show = true;
      console.log(res);
    });
  }
  private mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #e6e6e6;
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      margin-left: 50px;
      .title {
        font-size: 35px;
      }
      .intro {
        font-size: 16px;
        .list {
          display: flex;
        }
      }
      .button {
        display: inline-block;
        margin-top: 15px;
        padding: 10px 15px;
        color: #fff;
        background-color: #000;
        cursor: pointer;
      }
      .button:hover {
        background-color: #888e96;
      }
    }
  }
  .sub-title {
    margin: 20px;
    padding: 0 20px;
    font-size: 30px;
  }
}
</style>
