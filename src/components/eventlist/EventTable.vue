<template>
  <div class="tableWrap">
    <table v-if="check_searchVal === ''" class="11">
      <colgroup>
        <col width="10%" />
        <col width="15%" />
        <col width="20%" />
        <col width="23%" />
        <col width="12%" />
        <col width="7%" />
        <col width="5%" />
        <col width="5%" />
        <col width="3%" />
      </colgroup>
      <thead>
        <tr class="tbHeader">
          <th>썸네일</th>
          <th>카테고리</th>
          <th>이벤트명</th>
          <th>내용</th>
          <th>기능</th>
          <th>실서버</th>
          <th>일감</th>
          <th>상세</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedTab" :key="index">
          <td>
            <div
              class="thumbnail-container previewWrapper"
              @click="doMouseOver(localUrl + item.localPageUrl, item)"
            >
              <div class="thumbnail">
                <iframe
                  :src="
                    item.localPageUrl !== ''
                      ? localUrl + item.localPageUrl
                      : item.pageUrl
                  "
                  frameborder="0"
                  onload="this.style.opacity = 1"
                ></iframe>
              </div>
            </div>
          </td>
          <td class="CellWithComment" style="color: #4463d5">
            {{ item.category.name }}
            <span class="CellComment">{{ item.permanent }}</span>
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
          <td>
            <a href="javascript:;" @click="eventEdit(item)">수정</a>
            <a href="javascript:;" @click="eventDel(index)">삭제</a>
          </td>
        </tr>
      </tbody>
    </table>
    <table v-else-if="check_searchVal !== ''" class="22">
      <colgroup>
        <col width="10%" />
        <col width="15%" />
        <col width="20%" />
        <col width="23%" />
        <col width="12%" />
        <col width="7%" />
        <col width="5%" />
        <col width="5%" />
        <col width="3%" />
      </colgroup>
      <thead>
        <tr class="tbHeader">
          <th>썸네일</th>
          <th>카테고리</th>
          <th>이벤트명</th>
          <th>내용</th>
          <th>기능</th>
          <th>실서버</th>
          <th>일감</th>
          <th>상세</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in selectedTab"
          :key="index"
          class="group-item"
        >
          <td>
            <div
              class="thumbnail-container previewWrapper"
              @click="doMouseOver(localUrl + item.localPageUrl, item)"
            >
              <div class="thumbnail">
                <iframe
                  :src="
                    item.localPageUrl !== ''
                      ? localUrl + item.localPageUrl
                      : item.pageUrl
                  "
                  frameborder="0"
                  onload="this.style.opacity = 1"
                ></iframe>
              </div>
            </div>
          </td>
          <td class="CellWithComment" style="color: #4463d5">
            {{ item.category.name }}
            <span class="CellComment">{{ item.permanent }}</span>
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
          <td>
            <a href="javascript:;" @click="eventEdit(item)">수정</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="previewPop">
      <div class="previewWrap">
        <button @click="fullpage">전체보기</button>
        <button v-if="mobileUrl.mobilelocalPageUrl" @click="linkToMobile">
          모바일 보기
        </button>
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
import Iframe from "@/components/iframe/Iframe.vue";
import EventPop from "@/components/common/EventDetailPop.vue";

export default {
  props: {
    selectedTab: Array,
    defaultSelectTab: Array,
  },
  data() {
    return {
      preview: this.selectedTab,
      selpreview: "",
      selPageUrl: "",
      detailInfo: {},
      editInfo: {},
      url: "",
      localUrl: "http://design2.itembay.co.kr",
      searchVal: "",
      searchListNum: "",
      isActive: false,
      mobileUrl: "",
      loginActive: "",
    };
  },
  components: {
    Iframe,
    EventPop,
  },
  mounted() {
    this.searchListNum = this.$store.state.searchList;
    this.loginActive = this.$store.state.loginActive;
  },
  computed: {
    check_searchVal() {
      return this.$store.state.searchVal;
    },
  },
  watch: {
    check_searchVal(val) {
      this.searchVal = val;
      if (this.searchVal !== "") {
        this.searchWord(this.searchVal);
      } else {
        for (let i = 0; i < this.searchListNum; i++) {
          document.querySelectorAll(".group-item")[i].style.display =
            "table-row";
        }
      }
    },
  },
  methods: {
    doMouseOver(e, item) {
      this.$nextTick(() => {
        const target = document.querySelector(".previewPop");
        this.selPageUrl = e;
        target.style.display = "block";
        this.mobileUrl = item;
      });
    },
    linkToMobile() {
      this.$nextTick(() => {
        window.open(
          `http://ds-mb.itembay.co.kr:3002/pb-10186_%E5%85%88%ED%95%A0%EC%9D%B8%ED%98%95_%EC%8B%A0%EA%B7%9C_%EC%BF%A0%ED%8F%B0_IB%ED%8F%AC%EC%9D%B8%ED%8A%B8%EC%BF%A0%ED%8F%B0_%EC%B6%94%EA%B0%80_%EA%B1%B4/event${this.mobileUrl.mobilelocalPageUrl}`,
          "_blank",
        );
      });
    },
    fullpage() {
      this.$nextTick(() => {
        this.isActive = true;
        const doc = document.querySelector(".previewPop");
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
        if (this.isActive === true) {
          const doc = document.querySelector(".previewPop");
          const target = e.target.parentElement.parentElement;
          target.style.display = "none";
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
          this.isActive = false;
        } else {
          const doc = document.querySelector(".previewPop");
          const target = e.target.parentElement.parentElement;
          target.style.display = "none";
          if (doc.requestFullscreen) {
            if (doc.exitFullscreen) doc.exitFullscreen();
          }
        }
      });
    },
    closeDetailPop(e) {
      this.$nextTick(() => {
        const target = e.target.parentElement;
        target.style.display = "none";
      });
    },
    eventDetail(e) {
      this.detailInfo = e;
      this.$nextTick(() => {
        const target = document.querySelector(".layer-wrap");
        // const el = e.currentTarget.parentElement
        target.style.display = "flex";
      });
    },
    eventEdit(e) {
      this.editInfo = e;
      this.$nextTick(() => {
        if (this.loginActive) {
          this.$router.push({ name: "Edit", params: { registerList: e } });
        } else {
          // eslint-disable-next-line no-alert
          alert("로그인이 필요합니다.");
          this.$router.push("/login");
        }
      });
    },
    eventDel(e) {
      this.$nextTick(() => {
        if (this.loginActive) {
          // eslint-disable-next-line no-alert
          if (confirm("정말 삭제하시겠습니까?")) {
            this.selectedTab.map((v, i) => {
              if (i === e) {
                return this.selectedTab.splice(e, 1);
              }
            });
            // eslint-disable-next-line no-alert
            alert("삭제되었습니다.");
          }
        } else {
          // eslint-disable-next-line no-alert
          alert("로그인이 필요합니다.");
          this.$router.push("/login");
        }
      });
    },
    searchWord(event) {
      this.$nextTick(() => {
        for (let i = 0; i < this.searchListNum; i++) {
          if (
            this.selectedTab[i].name.includes(event) === false &&
            this.selectedTab[i].category.name.includes(event) === false
          ) {
            document.querySelectorAll(".group-item")[i].style.display = "none";
          } else {
            document.querySelectorAll(".group-item")[i].style.display =
              "table-row";
          }
        }
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
  max-width: 1200px;
}
.tableWrap table th {
  border-bottom: 1px solid rgb(230, 230, 230);
  color: rgb(66 66 66);
  text-align: center;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 6px 5px 6px;
  background: whitesmoke;
  box-shadow: 0px 1px 0px #93939336;
}
.tableWrap table tbody tr {
  box-sizing: border-box;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
}
.tableWrap table tbody tr:nth-of-type(even) {
  background-color: #f6f6f66e;
}
.tableWrap table tbody tr:hover {
  background: #f9f9f9;
}
.tableWrap table tbody tr td {
  vertical-align: middle;
  /* white-space: nowrap; */
  font-size: 0.8em;
  height: 22px;
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-family: "Noto Sans KR";
}
.tableWrap table tbody tr td a {
  text-decoration: none;
}
.tbHeader {
  position: sticky;
  top: 80px;
  z-index: 1;
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
  border: 2px solid #fff;
}
.previewWrapper:hover {
  cursor: pointer;
  border: 2px solid #4463d5;
}
.previewWrapper:hover .thumbnail {
  filter: grayscale(0%) contrast(1) brightness(100%);
}
.previewPop button {
  flex: 1 1 auto;
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
  z-index: 9999;
}
.layer-wrap:before {
  content: "";
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

/*툴팁*/
.CellWithComment {
  position: relative;
}

.CellComment {
  display: none;
  position: absolute;
  z-index: 100;
  border: 1px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  padding: 3px;
  color: red;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.CellWithComment:hover span.CellComment {
  display: block;
}

/* 썸네일 */
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
  cursor: pointer;
  border: 2px solid red;
}

/* Image Icon for the Background */
.thumbnail-container::before {
  position: absolute;
  left: "calc(50% - 16px)";
  top: "calc(50% - 18px)";
  opacity: 0.2;
  display: block;
  -ms-zoom: 2;
  -o-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
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
  width: 800px;
  height: 400px;
  filter: grayscale(50%) contrast(1) brightness(90%);
}
.thumbnail.on {
  filter: grayscale(0%) contrast(1) brightness(100%);
}

/* This is our screen sizing */
.thumbnail iframe {
  width: 1000px;
  height: 600px;
  bottom: 25px;
  left: -105px;
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
