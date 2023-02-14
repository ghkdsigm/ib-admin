<template>
  <div class="tableWrap">
    <table v-if="selectedTab[0] !== ''">
      <colgroup>      
        <col width="10%" />
        <col width="15%" />
        <col width="20%" />
        <col width="20%" />
        <col width="18%" />
        <col width="7%" />
        <col width="5%" />
        <col width="5%" />
      </colgroup>
      <thead>
        <tr class="tbHeader">
          <th>썸네일</th>
          <th>카테고리</th>
          <th>이름</th>
          <th>내용</th>
          <th>기능</th>
          <th>실서버</th>
          <th>일감</th>
          <th>상세</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedTab" :key="index">
          <td>
            <div class="thumbnail-container previewWrapper" title="Thumbnail Image of designcode.io" @click="doMouseOver(localUrl + item.localPageUrl)">
              <div class="thumbnail">
                <iframe :src="item.localPageUrl !== '' ?  localUrl + item.localPageUrl : item.pageUrl" frameborder="0" onload="this.style.opacity = 1"></iframe>
              </div>
            </div>
          </td>
          <td style="color: #4463d5">
            {{ item.category.name }}
          </td>
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.content }}
          </td>
          <td>
            {{ item.function }}
          </td>
          <td>
            <a :href="item.pageUrl" target="_blank">바로가기</a>
          </td>
          <td>
            <a :href="item.workUrl" target="_blank">redmine</a>
          </td>
          <td>
            <a href="javascript:;" @click="eventDetail(item)">보기</a>
          </td>
        </tr>
      </tbody>
    </table>
    <table v-else>
      <thead>
        <tr>
          <th>1depth</th>
          <th>2depth</th>
          <th>Link</th>
          <th>작업일</th>
          <th>업데이트일</th>
          <th>작업일</th>
          <th>업데이트일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in defaultSelectTab" :key="index">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.content }}
          </td>
          <td>
            {{ item.place }}
          </td>
          <td>
            {{ item.function }}
          </td>
          <td>
            {{ item.pageUrl }}
          </td>
          <td>
            {{ item.workUrl }}
          </td>
          <td>
            <ul>
              <li v-for="(sp, i) in item.tableSp.newSp" :key="i">
                {{ sp }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="previewPop">
      <div class="previewWrap">
        <button @click="fullpage">전체보기</button>
        <button @click="closePreviewPop">미리보기 닫기</button>
      </div>
      <Iframe :sel-page-url="selPageUrl" />
    </div>

    <div id="layer" class="layer-wrap">
      <a href="#" class="btn-layerClose" @click="closeDetailPop"
        >상세보기 닫기</a
      >
      <div class="pop-layer">
        <div class="pop-container">
          <div class="pop-conts">
            <!--content //-->
            <EventPop :detail-info="detailInfo" />
            <!--// content-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Iframe from '@/components/iframe/Iframe';
import EventPop from '@/components/common/EventDetailPop';

export default {
  props: {
    selectedTab: Array,
    defaultSelectTab: Array,
  },
  data() {
    return {
      preview: this.selectedTab,
      selpreview: '',
      selPageUrl: '',
      detailInfo: {},
      url: '',
      localUrl: 'http://jbiz.itembay.co.kr/'
    };
  },
  components: {
    Iframe,
    EventPop,
  },
  mounted() {},
  methods: {
    doMouseOver(e) {
      this.$nextTick(() => {
        const target = document.querySelector('.previewPop');
        this.selPageUrl = e;
        target.style.display = 'block';
      });
    },
    fullpage() {
      this.$nextTick(() => {
        const doc = document.querySelector('.previewPop');
        if (doc.requestFullscreen) doc.requestFullscreen();
        else if (doc.webkitRequestFullscreen)
          // Chrome, Safari (webkit)
          doc.webkitRequestFullscreen();
        else if (doc.mozRequestFullScreen)
          // Firefox
          doc.mozRequestFullScreen();
        else if (doc.msRequestFullscreen)
          // IE or Edge
          doc.msRequestFullscreen();
      });
    },
    closePreviewPop(e) {
      this.$nextTick(() => {
        const doc = document.querySelector('.previewPop');
        const target = e.target.parentElement.parentElement;
        target.style.display = 'none';
        if (doc.requestFullscreen) {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.webkitExitFullscreen)
            // Chrome, Safari (webkit)
            document.webkitExitFullscreen();
          else if (document.mozCancelFullScreen)
            // Firefox
            document.mozCancelFullScreen();
          else if (document.msExitFullscreen)
            // IE or Edge
            document.msExitFullscreen();
        }
      });
    },
    closeDetailPop(e) {
      this.$nextTick(() => {
        const target = e.target.parentElement;
        target.style.display = 'none';
      });
    },
    eventDetail(e) {
      this.detailInfo = e;

      console.log('bb', this.detailInfo);

      this.$nextTick(() => {
        const target = document.querySelector('.layer-wrap');
        // const el = e.currentTarget.parentElement
        target.style.display = 'flex';
      });
    },
  },
};
</script>

<style scoped>
.tableWrap {
  display: flex;
  width: 100%;
}
.tableWrap table {
  margin: 0 auto;
  min-width: 1200px;
}
.tableWrap table th {
  border-bottom: 1px solid rgb(230, 230, 230);
  color: rgb(66 66 66);
  text-align: center;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 6px 5px 6px;
  background: whitesmoke;
}
.tableWrap table tbody tr {
  box-sizing: border-box;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
}
.tableWrap table tbody tr:hover {
  background: #f9f9f9;
}
.tableWrap table tbody tr td {
  vertical-align: inherit;
  /* white-space: nowrap; */
  font-size: 0.8em;
  padding: 2px 6px 2px 6px;
  height: 22px;
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.tableWrap table tbody tr td a {
  text-decoration: none;
}
.tbHeader {
  position: sticky;
  top: 0;
  z-index: 1;
}
.area {
}
.area > iframe {
  width: 300px;
  height: 200px;
  resize: both;
}
.selectedFrame {
  position: absolute;
  left: 150px;
  width: 1000px;
  height: 1000px;
}
.previewPop {
  position: fixed;
  left: calc(50% - 385px);
  top: 160px;
  width: 1200px;
  height: 78vh;
  overflow: hidden;
  display: none;
  text-align: right;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 2px 2px 10px #727272;
  z-index: 9999;
  border-radius: 5px;
}
.previewWrap {
  display: flex;
  height: 40px;
  align-items: center;
  border: 2px solid transparent;
}
.previewWrapper:hover {
  cursor: pointer;
  border: 2px solid #4463d5;
}
.previewPop button {
  width: 50%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #ccc;
}
.previewPop button:nth-of-type(1):hover {
  background: #4463d5;
  color: #fff;
}
.previewPop button:nth-of-type(2):hover {
  background: #5c5c5c;
  color: #fff;
}
.previewPop button:hover {
  cursor: pointer;
}
.eventDetailPop {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.eventDetailPop .popBg {
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 65%);
  z-index: 1;
  position: absolute;
}
.eventDetailPop button {
  z-index: 22;
  position: absolute;
}
.eventDetailPop > div {
  z-index: 22;
  position: absolute;
}
.layer-wrap {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);  
  z-index: 3;
}
.layer-wrap:before {
  content: '';
  display: flex;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em;
  position: absolute;
}
.pop-layer {
  display: flex;
  vertical-align: middle;
  width: min-content;
  height: auto;
  background-color: #fff;
  border: 5px solid #3571b5;
  z-index: 10;
  font-family: Tahoma;
  border-radius: 10px;
}
.pop-layer .pop-container {
  padding: 20px 25px;
}
a.btn-layerClose {
  display: flex;
  height: 25px;
  padding: 5px 14px;
  background-color: #000;
  font-size: 13px;
  color: #fff;
  line-height: 25px;
  text-decoration: none;
}


/* 썸네일 */

/* This container helps the thumbnail behave as if it were an unscaled IMG element */
.thumbnail-container {
  width: calc(800px * 0.25);
  height: calc(400px * 0.25);
  display: inline-block;
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  border: 2px solid transparent;
  z-index: 0;
}
.thumbnail-containe:hover {
  cursor:pointer;
  border: 2px solid red;
}

/* Image Icon for the Background */
.thumbnail-container::before {
  position: absolute;
  left: ~"calc(50% - 16px)";
  top: ~"calc(50% - 18px)";
  opacity: 0.2;
  display: block;
  -ms-zoom: 2;
  -o-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  content: url("");
}

/* This is a masking container for the zoomed iframe element */
.thumbnail {
  -ms-zoom: 0.25;
  -moz-transform: scale(0.26);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.26);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.26);
  -webkit-transform-origin: 0 0;
}

/* This is our screen sizing */
.thumbnail, .thumbnail iframe {
  width: 1000px;
  height: 600px;
  bottom: 25px;
  left:-23px;
  position: relative;
}

/* This facilitates the fade-in transition instead of flicker. It also helps us maintain the illusion that this is an image, since some webpages will have a preloading animation or wait for some images to download */
.thumbnail iframe {
  opacity: 0;
  transition: all 300ms ease-in-out;
}

/* This pseudo element masks the iframe, so that mouse wheel scrolling and clicking do not affect the simulated "screenshot" */
.thumbnail:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
</style>
