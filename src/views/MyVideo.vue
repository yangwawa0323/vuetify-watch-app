<template>
  <div class="player">
    <div class="player-title">
      <h3>Using Html5 to play m3u8 media file</h3>
    </div>
    <div class="player-detail">
      <video-player
        ref="videoPlayer"
        class="vjs-custom-skin vjs-layout-large"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ready="onPlayerReady($event)"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import VideoPlayer from "vue-videojs7/src/components/VideoPlayer.vue";
import Chapter from  "../components/Chapter"

export default {
  name: "MyVideo",
  components: {
    VideoPlayer
  },
  data() {
    return {
      paused: true,

      playerOptions: {
        autoplay : false,
        width: 680,
        height: 400,
        language: "zh-CN",
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        children: {
          bigPlayButton: {}
        },
        breakpoints: {
          large: 700
        }
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      }
    };
  },
  computed: {
  
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {

    onPlayerPlay(player) {
      // console.log("player play!", player);
      // this.paused = this.player.paused()? true : false
      let bigPlayButton = document.querySelector('.vjs-big-play-button');

      bigPlayButton.classList.remove('paused');
    },
    onPlayerPause(player){
let bigPlayButton = document.querySelector('.vjs-big-play-button');

      bigPlayButton.classList.add('paused');
    },
    onPlayerReady(player) {
      // console.log("player ready!", player);
      // this.player.play();
      // this.addChapterComponent()
      new Chapter(player)
      // .addChapterComponent(player)     
    },
    playVideo: function(source) {
      const video = {
        withCredentials: false,
        type: "application/x-mpegurl",
        src: source
      };
      this.player.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video);

      // this.player.load()
      // this.player.play();
    }
  },
  mounted() {
    videojs.addLanguage("zh-CN", {
      Hello: "Hola",
      Play: "播放",
      Pause: "暂停",
      Mute: "静音",
      Unmute: "消除静音",
      Fullscreen: "全屏播放",

      "Picture-in-Picture": "画中画", // Use ' not working
      "Play Video": "开始学习吧"
    });

    this.player.bigPlayButton.controlText("开始学习吧");
    const src =
      "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";
    this.playVideo(src);
  }
};
</script>

<style scope>
.player {
  /* position: absolute !important; */
  width: calc(100vw - 80px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 10rem 2rem;
}

.vjs-big-play-button{
  
}

.vjs-big-play-button.paused{
  display: block;
}


.player .player-title {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 500;
}
.vjs-custom-skin {
  /* height: 60% !important; */
  /* display: flex; */
}

.vjs-custom-skin /deep/ .video-js {
  /* height: 480px;
  width: 680px; */
  /* display: flex; */
}

.vjs-custom-skin .vjs-big-play-button {

  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  color: red;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  font-size: 5rem;
  line-height: 5.6rem;
  box-shadow: 3px 3px 2px 2px rgb(230, 127, 101);
}

.vjs-controls-disabled .vjs-big-play-button, .vjs-has-started .vjs-big-play-button, .vjs-using-native-controls .vjs-big-play-button, .vjs-error .vjs-big-play-button {

  transition: all 4s ease-in-out !important;
}


.vjs-chapter-overlay {
  margin: auto;
  background: gray;
  width: 3rem;
  border-radius: 12px;
  height: 80%;
  display: flex;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  transition: all .5s ease-in-out;

}

.vjs-chapter-overlay:hover{
  opacity: 1;
  font-size: .72rem;
  font-weight: 500;
  color: yellow;
}

.video-js{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:  center;
}

.video-js .vjs-big-play-button {
  top: initial;
  left: initial;
  position: relative;
}
</style>
