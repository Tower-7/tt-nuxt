<template>
  <div class="container">
    <div class="fiexd-container">
      <el-row class="top">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
          ><div class="grid-content bg-purple-dark">
            BACI CABINETS BACI CABINETS BACI CABINETS BACI CABINETS BACI
            CABINETS BACI CABINETS
          </div></el-col
        >
      </el-row>
      <el-row class="nav-wrap">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"
          ><div class="logo">
            <img :src="require('../static/logo.jpg')" alt="" />
            <span><b>BACI</b> CABINETS</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="navs">
            <div class="nav" v-for="(item, index) in navs" :key="index">
              <NuxtLink class="link" :to="item.link">{{ item.name }}</NuxtLink>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="norm-container"></div>
    <div class="move-container">
      <div class="header">
        <el-image class="logo" :src="require('../static/logo.jpg')"></el-image>
        <span><b>BACI</b> CABINETS</span>
      </div>
      <div class="footer">
        <div class="nav" v-for="(item, index) in navs" :key="index">
          <NuxtLink class="link" :to="item.link">
            <div class="icon"><i :class="item.class"></i></div>
            <div class="txt">{{ item.name }}</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class TtNav extends Vue {
  private activeIndex = "1";
  private activeIndex2 = "2";
  private navs = [
    {
      link: "/",
      name: "HOME",
      class: "el-icon-house"
    },
    {
      link: "/blog",
      name: "BLOG",
      class: "el-icon-news"
    },
    {
      link: "contact",
      name: "CONTACT",
      class: "el-icon-office-building"
    }
  ];
  private handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1700px) {
  .move-container {
    display: none;
  }
  .fiexd-container {
    display: block;
  }
  .nav-wrap {
    width: 75%;
    .navs {
      font-size: 25px;
    }
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1700px) {
  .move-container {
    display: none;
  }
  .fiexd-container {
    display: block;
  }
  .nav-wrap {
    width: 92%;
    .navs {
      font-size: 20px;
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 1200px) {
  .move-container {
    display: none;
  }
  .fiexd-container {
    display: block;
  }
  .nav-wrap {
    width: 92%;
    .navs {
      font-size: 16px;
    }
  }
}

@media only screen and (max-width: 767px) and (max-width: 1200px) {
  .move-container {
    display: block;
  }
  .fiexd-container {
    display: none;
  }
  .norm-container {
    display: none;
  }
}
.norm-container {
  width: 100%;
  height: 110px;
}
.fiexd-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  .top .bg-purple-dark {
    display: flex;
    height: 30px;
    color: #fff;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }
  .nav-wrap {
    margin: 0 auto;
    font-size: 25px;
    background-color: #fff;
    border-bottom: 2px solid #000;
    .logo {
      display: flex;
      height: 80px;
      align-items: center;
      img {
        width: 40px;
      }
      span {
        margin-left: 20px;
        b {
          font-weight: normal;
          color: #57a780;
        }
      }
    }
    .navs {
      display: flex;
      .nav {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        line-height: 80px;
        cursor: pointer;
        .link {
          color: #000;
          text-decoration: none;
          border-bottom: 6px solid transparent;
        }
        :hover {
          color: #ccc;
          border-bottom: 6px solid #000;
        }
      }
    }
  }
}
.move-container {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .logo {
      width: 30px;
    }
    b {
      margin-left: 10px;
      font-weight: normal;
      color: #57a780;
    }
  }
  .footer {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff;
    border-top: 1px solid #ccc;
    .nav {
      flex: 1;
      padding: 10px 0;
      text-align: center;
      .link {
        color: #000;
        text-decoration: none;
        .icon {
          font-size: 18px;
          margin-bottom: 5px;
        }
        .txt {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
