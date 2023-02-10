<template>
  <div class="tableWrap">
    <table v-if="selectedTab[0] !== ''">
      <colgroup>
        <col width="20%" />
        <col width="20%" />
        <col width="5%" />
        <col width="15%" />
        <col width="10%" />
        <col width="5%" />
        <col width="5%" />
        <col width="5%" />
        <!-- <col width="10%">
            <col width="10%"> -->
      </colgroup>
      <thead>
        <tr>
          <th>이벤트 프로모션명</th>
          <th>내용</th>
          <th>이벤트코드</th>
          <th>소스위치</th>
          <th>기능</th>
          <th>미리보기</th>
          <th>바로가기</th>
          <th>일감</th>
          <!-- <th>sp</th>
                <th>비고</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedTab" :key="index">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.content }}
          </td>
          <td>
            {{ item.code }}
          </td>
          <td>
            {{ item.place }}
          </td>
          <td>
            {{ item.function }}
          </td>
          <td>
            <div class="previewWrap" @click="doMouseOver(item.pageUrl)">
              <a href="javascript:;" class="previewWrapbt">미리보기</a>
            </div>
          </td>
          <td>
            <a :href="item.pageUrl" target="_blank">index.html</a>
          </td>
          <td>
            <a :href="item.workUrl" target="_blank">redmine</a>
          </td>
          <!--<td>
                    <ul>
                        <li v-for="(sp, i) in item.tableSp.newSp" :key="i">
                            {{sp}}
                        </li>
                    </ul>
                </td>      
                <td>{{item.etc}}</td>           -->
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
    <div class="previewPop" ref="popup">
      <button @click="closePreviewPop">X</button>
      <Iframe :sel-page-url="selPageUrl" />
    </div>
  </div>
</template>

<script>
import Iframe from '@/components/iframe/Iframe';

export default {
  props: {
    selectedTab: Array,
  },
  data() {
    return {
      preview: this.selectedTab,
      selpreview: '',
      selPageUrl: '',
      closepopboolean: false,
    };
  },
  components: {
    Iframe,
  },
  // destroyed() {
  //   window.removeEventListener('click', this.aa);
  // },
  // created(){
  //   window.addEventListener('click', this.aa);
  // },
  methods: {
    doMouseOver(e) {
      // const target = document.querySelector(`.area${e}`)
      // target.classList.add('selectedFrame')
      const target = document.querySelector('.previewPop');
      this.selPageUrl = e;
      target.style.display = 'block';
      this.closepopboolean = true;
      //const eachFrame = e.target;
      //console.log(eachFrame)
      //eachFrame.classList.add('selectedFrame')
    },
    closePreviewPop(e) {
      const target = e.target.parentElement;
      target.style.display = 'none';
      this.closepopboolean = false;
      //window.addEventListener('click', this.aa);
    },
    closepop() {
      const target = document.querySelector('.previewPop');
      target.style.display = 'none';
      this.closepopboolean = false;
    },
    aa(e) {
      if (this.closepopboolean && e) {
        const target = document.querySelector('.previewPop');
        target.style.display = 'none';
      }
    },
  },
  watch: {
    closepopboolean() {
      //window.addEventListener('click', this.aa);
      // console.log(e);
      // if (e === true) {
      //   window.addEventListener('click', this.aa);
      // } else if (e === false) {
      //   window.removeEventListener('click', this.aa);
      // }
      document.querySelector('body').addEventListener('click', function (e) {
        if (
          e.target.className ==
          e.currentTarget.querySelector('.previewWrapbt').className
        ) {
          console.log('correct');
        } else {
          this.aa;
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
}
.tableWrap table th {
  border-bottom: 1px solid rgb(230, 230, 230);
  color: rgb(130, 130, 130);
  text-align: center;
  font-size: 0.75em;
  font-weight: 700;
  padding: 16px 6px 16px 6px;
}
.tableWrap table tbody tr {
  box-sizing: border-box;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
}
.tableWrap table tbody tr td {
  vertical-align: inherit;
  white-space: nowrap;
  font-size: 0.8em;
  padding: 16px 6px 16px 6px;
  height: 22px;
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
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
  right: 575px;
  top: 130px;
  width: 1200px;
  height: 78vh;
  overflow: hidden;
  display: none;
  text-align: right;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
}
.previewPop button {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
}
.previewPop button:hover {
  cursor: pointer;
}
.previewWrap {
  z-index: 9999;
}
</style>
