<template>
  <div class="container">
    <el-row class="wrap">
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="18"
        ><div class="grid-content bg-purple-light">
          <tt-nav></tt-nav>

          <el-row class="banner-wrap">
            <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
              <el-image class="coverPic" :src="coverPic" fit="cover"></el-image>
            </el-col>
            <el-col :offset="1" :xs="24" :sm="24" :md="24" :lg="9" :xl="9">
              <div class="content">
                <h2 class="title">{{ title }}</h2>
                <p class="intro">
                  {{ intro }}
                </p>
              </div>
            </el-col>
          </el-row>
          <tt-culmn :title="title"></tt-culmn>
          <el-row class="content">
            <el-col :span="18">
              <div v-html="content"></div>
            </el-col>
            <el-col :offset="1" :span="5">
              <div
                class="contact-box"
                :class="fiexdContactBox ? 'contact-box-fiexd' : ''"
                ref="contactBox"
              >
                <div>Contact US</div>
                <div>E-mail</div>
                <div>E-mail</div>
              </div>
            </el-col>
          </el-row>
          <tt-footer></tt-footer>
          <div class="footer" style="padding-top:50px"></div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ttNav from "../components/tt-nav.vue";
import ttCulmn from "../components/tt-culmn.vue";
import { fetchDetail } from "../api/product";
@Component({
  components: {
    ttNav
  }
})
export default class ProductDetail extends Vue {
  private title: any = "";
  private intro: any = "";
  private content: any = "";
  private coverPic: any = "";
  private fiexdContactBox: any = "";

  private mounted() {
    fetchDetail(this.$route.query.id).then((res: any) => {
      this.title = res.title;
      this.intro = res.intro;
      this.coverPic = res.image_uri;
      this.content = res.content;
    });
    (window as any).addEventListener("scroll", this.handleScroll);
  }
  private handleScroll() {
    const ele: Element = this.$refs.contactBox as Element;
    // if (ele.getBoundingClientRect) {
    //   let top = ele.getBoundingClientRect().top;
    //   if (top < 110) {
    //     this.fiexdContactBox = true;
    //   } else if (top > 115) {
    //     this.fiexdContactBox = false;
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
  cursor: default;
  .contact-box-fiexd {
    position: fixed;
    top: 120px;
  }
  .contact-box {
    width: 100%;
    div {
      width: 100%;
      color: #fff;
      background-color: #000;
      padding: 5px 10px;
      margin-top: 2px;
      text-align: center;
    }
  }
  .banner-wrap {
    background-color: #e6e6e6;

    .content {
      height: 55vh;
      margin-top: 20px;
      padding: 40px;
      padding-top: 100px;
      background-color: #fff;

      .title {
        font-size: 30px;
        font-weight: normal;
      }
      .intro {
        margin-top: 20px;
        font-size: 22px;
        color: #888;
      }
    }
  }
  .wrap {
    display: flex;
    justify-content: center;
  }
  .coverPic {
    width: 100%;
    height: 60vh;
  }
  .content {
    color: #555;
    line-height: 30px;
    ::v-deep img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
