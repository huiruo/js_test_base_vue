<template>
  <div class="home-container">
    <div class="top">
      <img src="../assets/top_label.png" />
    </div>
    <div class="install-container" v-show="this.code">
      <div class="container">
        <div class="operate-content">
          <div>
            <div class="operate-top"  v-show="this.code">
            <!--<div class="operate-top">-->
              <div class="content">
                <span class="text">安装码：</span>
                <span class="code">{{ code }}</span>
                <!--<span class="code">{{ "QWERYUUIIOJHH" }}</span>-->
              </div>
              <div>
                <img
                  @click="handleClipboard($event, code)"
                  class="copy-img"
                  src="../assets/copy.png"
                />
              </div>
            </div>
            <div class="operate-bottom">
              <img
                @click="handleInstall"
                class="install-img"
                src="../assets/install.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/operate.png" />
    </div>
    <div class="step-container">
      <!-- 步骤 -->
      <img src="../assets/step_label.png" />
    </div>
    <div class="details-content">
      <!--详情 -->
      <img src="../assets/details.png" />
    </div>
    <div class="help-content">
      <div class="content">
        如有疑问请联系<span @click="helpClick">24小时在线客服：10100</span>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
import normalUtil from "../utils/index";
import API_BASE from "../api/config.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      code: "",
      sessionId: "",
      skipUrl:""
    };
  },
  mounted() {
    //test:这个id有效: 110018313
    //http://localhost:8080/#/?platformId=my&sessionId=BAE3779EA012BED67CDA5186DCC917AB&version=1.0.0.100
    //http://localhost:8080/#/?platformId=my&sessionId=BAE3779EA012BED67CDA5186DCC917AB
    //test 请求 id: http://activity-test.jiaoyoushow.com/testApi/sessionId?userId=110013764
    // http://h5web-test.jiaoyoushow.com/h5/superlabel/index.html
    //http://h5web-test.jiaoyoushow.com/h5/superlabel/index.html#/
    const sessionId = normalUtil.getMsg("sessionId");
    const product = normalUtil.getMsg("platformId");
    const version = normalUtil.getMsg("version")
    if (sessionId) {
      this.sessionId = sessionId;
      this.product = product;
      this.version = version
      this.getCode_util(product, sessionId);
    } else {
      this.$toast("没有找到sessionId");
    }
  },
  methods: {
    getCode(data) {
      const { product, sessionId } = data;
      const url = `${API_BASE}/activity-center/supersign/getInstallCode?product=${product}&sessionId=${sessionId}`;
      return new Promise((resolve, reject) => {
        this.axios
          .get(url)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getCode_util(product, sessionId) {
      const data = {
        product,
        sessionId,
      };
      const res = await this.getCode(data);
      if (res.code === 1) {
        // console.log("res---->",res.data);
        const {installCode,skipUrl} = res.data
        this.code = installCode;
        this.skipUrl = skipUrl
      } else {
        this.msg = res.msg
        this.$toast(res.msg);
      }
    },
    helpClick() {
      let result = JSON.stringify({ type: "customerService", data: {} });
      window.ReactNativeWebView &&
        window.ReactNativeWebView.postMessage &&
        window.ReactNativeWebView.postMessage(result);
    },
    handleInstall() {
      if(!this.version){
        this.$toast("更新到最新版本后才能使用本功能噢");
        return
      }
      if(!this.skipUrl){
        this.$toast(this.msg);
        return 
      }
      let result = JSON.stringify({ type: "openAppDownload", data: {downloadUrl:this.skipUrl} });
      window.ReactNativeWebView &&
        window.ReactNativeWebView.postMessage &&
        window.ReactNativeWebView.postMessage(result);
    },
    handleClipboard(e, text) {
      if (!text) {
        this.$toast("没有要复制的安装码");
        return;
      }
      const clipboard = new Clipboard(e.target, { text: () => text });
      clipboard.on("success", (e) => {
        console.log("e:", e);
        this.$toast("复制成功");
        // 释放内存
        clipboard.off("error");
        clipboard.off("success");
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        console.log("e:", e);
        this.$toast("该浏览器不支持自动复制");
        // 释放内存
        clipboard.off("error");
        clipboard.off("success");
        clipboard.destroy();
      });
      clipboard.onClick(e);
    },
  },
};
</script>
<style lang="less" scoped>
.home-container {
  min-height: 100%;
  background: #41ceff;
  .top {
    img {
      height: auto;
      width: 100%;
    }
  }
  .install-container {
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
    .container {
      position: absolute;
      width: 100%;
      z-index: 99;
    }
    .operate-content {
      display: flex;
      height: 120px;
      align-items: center;
      justify-content: center;
      .operate-top {
        display: flex;
        align-items: center;
        img {
          // height: 30px;
          height: 28px;
          width: 70px;
        }
        .content {
          display: flex;
          align-items: center;
          .code {
            font-family: PingFang-SC-Bold;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            padding-right: 8px;
            color: #0a0909;
            font-weight: bold;
          }
          .text {
            color: #0a0909;
            font-family: PingFang-SC-Medium;
            font-size: 16px;
          }
        }
      }
      .operate-bottom {
        display: flex;
        justify-content: center;
        img {
          height: 40px;
          width: 111px;
        }
      }
    }
  }
  .step-container {
    height: auto;
    width: 100%;
    background-size: cover;
    img {
      width: 100%;
      height: auto;
    }
  }
  .details-content {
    img {
      width: 100%;
      height: auto;
    }
  }
  .help-content {
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      margin-top: -8px;
      padding-bottom: 10px;
    }
    span {
      color: #1334ff;
    }
  }
}
</style>
