<template>
  <div class="tableWrap">
    <table class="11">
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
          <th>기능명</th>
          <th>내용</th>
          <th>기능</th>
          <th>실서버</th>
          <th>일감</th>
          <th>상세</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="previewPop"></div>
  </div>
</template>

<script>
export default {};
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
  display: block;
}
.tableWrap table tbody tr td a:hover {
  color: red;
}
.tableWrap table tbody tr td a:first-child {
  padding-bottom: 5px;
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
  background-color: red;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  padding: 1px 3px;
  color: #fff;
  top: 20px;
  left: 50%;
  border-radius: 5px;
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
