<template>
  <div class="home-container">
    <div class="top">
      <div class="container">
        <div class="word">{{ levelName }}以上等级专属福利</div>
      </div>
      <img src="../assets/top_label.png" />
    </div>
    <div class="install-container" v-show="this.code">
      <div class="container">
        <div class="operate-content">
          <div>
            <div class="operate-top" v-show="this.code">
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
      <div class="container">
        <div class="content">
          <div>1.凡财富等级到达【{{ levelName }}】及以上账号，可获得领取机会；</div>
          <div>2.每个账号最多只可在3个设备上领取安装码并安装；</div>
          <div>3.安装码只可对1个设备使用哦，安装后安装码自动失效；</div>
        </div>
      </div>
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
      skipUrl: "",
      levelName: "-",
    };
  },
  mounted() {
    //test:这个id有效: 110018313
    //http://localhost:8081/#/?platformId=my&sessionId=ACADA9894C4F3EA9EF435291FDEB7F06&version=1.0.0.100&h5Server=https://h5-ddos.1kyou.cn
    //http://localhost:8080/#/?platformId=my&sessionId=BAE3779EA012BED67CDA5186DCC917AB
    //test 请求 id: http://activity-test.jiaoyoushow.com/testApi/sessionId?userId=110013764
    // http://h5web-test.jiaoyoushow.com/h5/superlabel/index.html
    //http://h5web-test.jiaoyoushow.com/h5/superlabel/index.html#/
    // https://h5web-ddos.1kyou.cn/h5/superlabel/index.html
    //
    //
    const reqUrl =normalUtil.getMsg('h5Server')
    const sessionId = normalUtil.getMsg("sessionId");
    const product = normalUtil.getMsg("platformId");
    const version = normalUtil.getMsg("version");
    if (sessionId) {
      this.sessionId = sessionId;
      this.product = product;
      this.version = version;
      this.getCode_util(product, sessionId,reqUrl);
      this.getUser_util(product, sessionId,reqUrl);
    } else {
      this.$toast("没有找到sessionId");
    }
  },
  methods: {
    getCode(data,reqUrl) {
      const { product, sessionId } = data;
      let actualUrl =""
      if(reqUrl){
        actualUrl=reqUrl
        // console.log("Url",actualUrl)
      }else{
        actualUrl = API_BASE
      }
      const url = `${actualUrl}/activity-center/supersign/getInstallCode?product=${product}&sessionId=${sessionId}`;
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
    getUser(data,reqUrl) {
      const { product, sessionId } = data;
      let actualUrl =""
      if(reqUrl){
        actualUrl=reqUrl
      }else{
        actualUrl = API_BASE
      }
      // console.log("Url",actualUrl)
      const url = `${actualUrl}/activity-center/supersign/getSuperSignInfo?product=${product}&sessionId=${sessionId}`;
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
    async getCode_util(product, sessionId,reqUrl) {
      const data = {
        product,
        sessionId,
      };
      const res = await this.getCode(data,reqUrl);
      if (res.code === 1) {
        // console.log("res---->",res.data);
        const { installCode, skipUrl } = res.data;
        this.code = installCode;
        this.skipUrl = skipUrl;
      } else {
        this.msg = res.msg;
        this.$toast(res.msg);
      }
    },
    async getUser_util(product, sessionId,reqUrl) {
      const data = {
        product,
        sessionId,
      };
      const res = await this.getUser(data,reqUrl);
      if (res.code === 1) {
        // console.log("res---->",res.data);
        const { levelName } = res.data;
        this.levelName = levelName;
      } else {
        this.msg = res.msg;
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
      if (!this.version) {
        this.$toast("更新到最新版本后才能使用本功能噢");
        return;
      }
      if (!this.skipUrl) {
        this.$toast(this.msg);
        return;
      }
      let result = JSON.stringify({
        type: "openAppDownload",
        data: { downloadUrl: this.skipUrl },
      });
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
    position: relative;
    .container {
      position: absolute;
      bottom: 46px;
      right: 22px;
      width: 200px;
      height: 36px;
      background-image: url("../assets/word.png");
      background-size: cover;
      .word {
        line-height: 36px;
        color: #000000;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
      }
    }
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
    position: relative;
    height: auto;
    width: 100%;
    background-size: cover;
    img {
      width: 100%;
      // height: auto;
      // height: 134px;
      height: 190px;
    }
    .container {
      position: absolute;
      height: 134px;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      .content {
        // margin-top: 26px;
        width: 90%;
        margin-top: 90px;
        margin-left:25px;
        font-size: 13px;
        // line-height: 18px;
        font-weight: 700;
      }
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
