<template>
  <div class="home-container">
    <div class="top">
      <div class="container">
        <!-- <img src="../assets/top.png" /> -->
      </div>
    </div>
    <div class="video1-container">
      <div class="video1">
        <div class="video1-content">
          <video
            id="refV1"
            @click="videoPlay(1)"
            autoplay="autoplay"
            :loop="true"
            :muted="true"
            name="media"
            style="width: 100%; height: 100%"
          >
            <source
              :src="cdnDomain + '/h5web/video/anti-spoofing/1video_1.mp4'"
              type="video/mp4"
            />
            <!--<source
              src="https://cdn-app-pro.1kyou.cn/h5web/video/anti-spoofing/1video_1.mp4"
              type="video/mp4"
            />-->
          </video>
          <div></div>
        </div>
      </div>
    </div>
    <!-- 图片不一样，需要另外排版 -->
    <div class="video2-container">
      <div class="video2">
        <div class="video2-content">
          <div class="v2-content">
            <!--style="background: green" -->
            <div class="v2-itemleft v2-item">
              <div class="play">
                <video
                  id="refV2"
                  @click="videoPlay(2)"
                  :autoplay="false"
                  :loop="true"
                  :muted="true"
                  name="media"
                  style="width: 100%; height: 100%"
                >
                  <source
                    :src="cdnDomain + '/h5web/video/anti-spoofing/2video_1.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">陌生电话不要信</span>
              </div>
            </div>
            <!--style="background: yellow" -->
            <div class="v2-item">
              <div class="play">
                <video
                  id="refV3"
                  @click="videoPlay(3)"
                  :autoplay="false"
                  :loop="true"
                  :muted="true"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                >
                  <source
                    :src="cdnDomain + '/h5web/video/anti-spoofing/2vieo_2.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">短信链接勿点击</span>
              </div>
            </div>
          </div>
          <div class="v2-content v2-botoom">
            <!--style="background: yellow" -->
            <div class="v2-itemleft v2-item">
              <div class="play">
                <video
                  id="refV4"
                  @click="videoPlay(4)"
                  :autoplay="false"
                  :loop="true"
                  :muted="true"
                  name="media"
                  style="width: 100%; height: 100%"
                >
                  <source
                    :src="cdnDomain + '/h5web/video/anti-spoofing/2video_3.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">短信链接勿点击</span>
              </div>
            </div>
            <!--style="background: green" -->
            <div class="v2-item">
              <div class="play">
                <video
                  id="refV5"
                  @click="videoPlay(5)"
                  :autoplay="false"
                  :loop="true"
                  :muted="true"
                  name="media"
                  style="width: 100%; height: 100%; border-radius: 6px"
                >
                  <source
                    :src="cdnDomain + '/h5web/video/anti-spoofing/2video_4.mp4'"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="text-content">
                <span class="text">教你会怼诈骗分子</span>
              </div>
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
            <div class="play">
              <video
                id="refV6"
                @click="videoPlay(6)"
                :autoplay="false"
                :loop="true"
                :muted="true"
                name="media"
                style="width: 100%; height: 100%; border-radius: 6px"
              >
                <source
                  :src="cdnDomain + '/h5web/video/anti-spoofing/3video_1.mp4'"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="text-content">
              <span class="text">《刷单非兼职》</span>
            </div>
          </div>
          <div class="v3-item">
            <div class="play">
              <video
                id="refV7"
                @click="videoPlay(7)"
                :autoplay="false"
                :loop="true"
                :muted="true"
                name="media"
                style="width: 100%; height: 100%; border-radius: 6px"
              >
                <source
                  :src="cdnDomain + '/h5web/video/anti-spoofing/3video_2.mp4'"
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
  </div>
</template>

<script>
// import Clipboard from "clipboard";
// import normalUtil from "../utils/index";
// import {API_BASE,IS_APP2} from "../api/config.js";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      cdnDomain: "https://cdn-app-pro.1kyou.cn",
      // video1Url:
      //   "https://cdn-app-pro.1kyou.cn/app/vv/video/110936339/110936339_cc8272e4-a4d6-4e9e-9383-258358c6b440.mp4",
      // video2Url:
      //   "https://cdn-app-pro.1kyou.cn/app/vv/video/87164574/87164574_3c6b495d-002f-4005-8905-96a907b6107e.mp4",
      playingList: [],
      video1: false,
      video2: false,
      video3: false,
      video4: false,
      video5: false,
      video6: false,
      video7: false,
    };
  },
  mounted() {},
  methods: {
    // test:
    // https://cdn-app-pro.1kyou.cn/app/vv/video/110936339/110936339_cc8272e4-a4d6-4e9e-9383-258358c6b440.mp4
    // https://cdn-app-pro.1kyou.cn/app/vv/video/87164574/87164574_3c6b495d-002f-4005-8905-96a907b6107e.mp4
    videoPlay(index) {
      const video = document.getElementById("refV" + index);
      video.play();
      console.log("muted", video.muted);
      console.log("是否在播放：paused", video.paused);
      video.muted = false; //播放声音
      let arrIndex = this.playingList.indexOf(index);
      if (arrIndex > -1) {
        console.log("单击-在数组");
      } else {
        console.log("单击-不在数组");
        this.playingList.push(index);
      }
      console.log("播放数组", this.playingList);
    },
    // videoPlay6() {
    //   const video = document.getElementById("refV6");
    //   video.play();
    //   console.log("muted", video.muted);
    //   video.muted = false; //播放声音
    // },
  },
};
</script>
<style lang="less" scoped>
.home-container {
  min-height: 100%;
  background: #171c5e;
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
    margin-top: -28px;
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
        background: ghostwhite;
        width: 90%;
        height: 220px;
        margin-top: -10px;
        margin-left: 8px;
      }
    }
  }
  .video2-container {
    margin-top: 20px;
    margin-right: 15px;
    // margin-left:15px;
    margin-left: 6px;
    .video2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      // height: 325px;
      height: 420px;
      // padding-left: 7px;
      background-image: url("../assets/video2_bg.png");
      background-size: 100% 100%;
      .video2-content {
        // width: 90%;
        width: 88%;
        // height: 300px;
        // height: 275px;
        height: auto;
        margin-top: -20px;
        margin-left: 20px;
        background: ghostwhite;
        .v2-top {
          margin-top: 18px;
        }
        .v2-botoom {
          margin-top: 10px;
        }
        .v2-content {
          display: flex;
          height: 50%;
          // background: #171c5e;
          .v2-itemleft {
            margin-right: 10px;
          }
          .v2-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .play {
              // height: 80px;
              height: 98px;
              width: 100%;
              // background: red;
            }
            .text-content {
              // text-align: center;
              margin-top: 10px;
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
}
</style>
