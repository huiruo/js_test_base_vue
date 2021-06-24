<template>
  <div class="index">
    <div class="home-container" v-if="cdnDomain !== ''">
      <div class="top">
        <div class="container">
          <!-- <img src="../assets/top.png" /> -->
        </div>
      </div>
      <div class="video1-container">
        <div class="video1">
          <div class="video1-content" style="position: relative">
            <!--autoplay="autoplay" :muted="true" -->
            <video
              id="refV1"
              controls
              name="media"
              style="width: 100%; height: 100%"
              poster="../assets/bg_v1.png"
              x5-video-player-type="h5"
              preload="auto"
              playsinline="true"
              webkitPlaysinline="true"
            >
              <source
                :src="cdnDomain + 'h5web/video/anti-spoofing/1video_1.mp4'"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <!-- 图片不一样，需要另外排版 -->
      <div class="video2x-container">
        <div class="video2x">
          <div class="video2x-content">
            <div class="v3-item v3-itme-top">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV2"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v2.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/2video_1x.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">陌生电话不轻信</span>
              </div>
            </div>
            <!-- 2 -->
            <div class="v3-item v3-itme-top">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV3"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v3.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/2vieo_2x.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">短信链接勿点击</span>
              </div>
            </div>
            <!-- 3 -->
            <div class="v3-item v3-itme-top">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV4"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v4.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/2video_3x.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">验证信息不外泄</span>
              </div>
            </div>
            <!-- 4 -->
            <div class="v3-item">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV5"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v5.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/2video_4.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">教你回怼诈骗分子</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 图片不一样，需要另外排版 -->
      <div class="video3-container">
        <div class="video3">
          <div class="video3-content">
            <div class="v3-item v3-itme-top">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV6"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v6.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/3video_1.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">《刷单非兼职》</span>
              </div>
            </div>
            <div class="v3-item">
              <div class="play" style="position: relative">
                <video
                  controls
                  id="refV7"
                  :autoplay="false"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                  poster="../assets/bg_v7.png"
                >
                  <source
                    :src="cdnDomain + 'h5web/video/anti-spoofing/3video_2.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">《未见面的新“老师”》</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <!-- <span>本活动与苹果公司无关，最终解释权归{{ appName }}所有</span> -->
      </div>
    </div>
    <div v-else>
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import normalUtil from "../utils/index";
import { API_BASE } from "../api/config.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // cdnDomain: "https://cdn-app-pro.1kyou.cn/",
      cdnDomain: "",
      appName: "",
      video1: false,
      // videomuted1: false,
      video2: false,
      // videomuted2: false,
      video3: false,
      // videomuted3: false,
      video4: false,
      // videomuted4: false,
      video5: false,
      // videomuted5: false,
      video6: false,
      // videomuted6: false,
      video7: false,
      // videomuted7: false,
      videos: [],
    };
  },
  mounted() {
    const product = normalUtil.getMsg("platformId");
    const reqUrl = normalUtil.getMsg("h5Server");
    //测试链接
    //http://localhost:8080/#/?userId=92083482&isInApp=true&roomId=LP112115865&sessionId=370B0164543CEECF9506BB0BFF335FCE&isPc=true&platformId=pc_user
    // 访问链接
    // http://h5web-test.jiaoyoushow.com/h5/antiFraud/index.html
    // https://h5web-ddos.1kyou.cn/h5/antiFraud/index.html
    this.getUser_util(product, reqUrl);
  },
  methods: {
    //请求相关start
    //请求相关start
    async getUser_util(product, reqUrl) {
      const data = {
        product,
      };
      const res = await this.getUser(data, reqUrl);
      if (res.code === 1) {
        const { cdnDomain, appName } = res.data;
        this.cdnDomain = cdnDomain || "https://cdn-app-pro.1kyou.cn/";
        this.appName = appName;
        console.log("this.cdnDomain---->", this.cdnDomain);
        setTimeout(() => {
          const videos = document.getElementsByTagName("video"); //获取所有video
          this.videos = videos;
          let that = this;
          // console.log("this.cdnDomain---->", this.videos);
          //====
          //循环给所有video添加监听事件 当前的video开始播时  调用pauseAll 将当前播放的video的索引传值过去
          for (var i = videos.length - 1; i >= 0; i--) {
            (function (n) {
              videos[n].addEventListener("play", function () {
                console.log("当前播放======》", n);
                that.pauseAll(n);
                //不用监听
                // that["video" + (n + 1)] = true;
              });
            })(i);
          }
          //====
        }, 2000);
      } else {
        this.cdnDomain = "https://cdn-app-pro.1kyou.cn/";
        this.$toast(res.msg);
      }
    },
    getUser(data, reqUrl) {
      const { product } = data;
      let actualUrl = "";
      if (reqUrl) {
        actualUrl = reqUrl;
      } else {
        actualUrl = API_BASE;
      }
      // console.log("Url---->", actualUrl);
      const url = `${actualUrl}/cms/getAppShellInfo?product=${product}`;
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
    //
    pauseAll(index) {
      for (let j = this.videos.length - 1; j >= 0; j--) {
        if (j != index) {
          this.videos[j].pause();
          this.videos[j].load();
        }
      }
    },
    //请求相关end
    //请求相关end
  },
};
</script>
<style lang="less" scoped>
.home-container {
  min-height: 100%;
  background: #171c5e;
  .footer {
    height: 36px;
    margin-top: 8px;
    text-align: center;
    font-size: 2.666667vw;
    color: #fff;
  }
  .top {
    img {
      width: 100%;
    }
    .container {
      width: 100%;
      height: 325px;
      background-image: url("../assets/top.png");
      background-size: 100% 100%;
    }
  }
  .video1-container {
    margin-top: -54px;
    margin-right: 15px;
    margin-left: 15px;
    .video1 {
      //position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 325px;
      background-image: url("../assets/video1_bg.png");
      background-size: 100% 100%;
      .video1-content {
        // position: absolute;
        // top: 28px;
        // left: 0;
        // background: ghostwhite;
        width: 90%;
        height: 240px;
        margin-top: -20px;
        margin-left: 8px;
      }
      .seting-content {
        position: absolute;
        bottom: -2px;
        right: 10px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .video-bg {
        position: absolute;
        top: 0;
        // top: 40%;
        // left: 50%;
        // margin-left: -20px;
        img {
          width: 100%;
          height: 80%;
        }
      }
      .botton {
        position: absolute;
        top: 40%;
        left: 50%;
        margin-left: -20px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  .video2x-container {
    margin-top: 20px;
    margin-right: 15px;
    // margin-left:15px;
    margin-left: 6px;
    .video2x {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      // height: 325px;
      height: 420px;
      // padding-left: 7px;
      // background-image: url("../assets/video2_bg.png");
      background-size: 100% 100%;
    }
  }

  //2x
  //2x
  //2x
  .video2x-container {
    margin-left: -4px;
    .video2x {
      display: flex;
      // align-items: center;
      justify-content: center;
      width: 100%;
      height: 1075px;
      background-image: url("../assets/video2_bg.png");
      background-size: 100% 100%;
      .video2x-content {
        // background: ghostwhite;
        // width: 90%;
        width: 88%;
        margin-left: 34px;
        .v3-itme-top {
          margin-bottom: 10px;
        }
        .v3-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .play {
            // height: 80px;
            height: 200px;
            width: 100%;
            // background: red;
          }
          .text-content {
            margin-top: 8px;
            .text {
              padding: 4px;
              border-radius: 4px;
              font-size: 14px;
              background: #2065cd;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
//2x end
//2x end
//2x end
.video3-container {
  margin-top: 20px;
  // margin-right:15px;
  margin-right: 6px;
  margin-left: 15px;
  .video3 {
    display: flex;
    // align-items: center;
    justify-content: center;
    width: 100%;
    height: 610px;
    background-image: url("../assets/video3_bg.png");
    background-size: 100% 100%;
    .seting-content {
      position: absolute;
      bottom: 10px;
      right: 2px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .botton {
      position: absolute;
      top: 40%;
      left: 50%;
      margin-left: -20px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .video3-content {
      // background: ghostwhite;
      // width: 90%;
      width: 88%;
      // height: 220px;
      height: 80%;
      margin-top: 60px;
      margin-left: -5px;
      .v3-itme-top {
        margin-bottom: 18px;
      }
      .v3-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .play {
          // height: 80px;
          height: 200px;
          width: 100%;
          // background: red;
        }
        .text-content {
          margin-top: 15px;
          .text {
            padding: 4px;
            border-radius: 4px;
            font-size: 14px;
            background: #2065cd;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
