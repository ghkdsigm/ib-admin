<template>
  <div>
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
          <th>이름</th>
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
            <div class="previewWrap" @mouseover="doMouseOver(item.pageUrl)">
              <a href="javascript:;">미리보기</a>
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
      showSearch: false,
    };
  },
  components: {
    Iframe,
  },
  //   created() {
  //     window.addEventListener('click', this.closepop);
  //   },
  //   destroyed() {
  //     window.removeEventListener('click', this.closepop);
  //   },
  methods: {
    doMouseOver(e) {
      // const target = document.querySelector(`.area${e}`)
      // target.classList.add('selectedFrame')
      const target = document.querySelector('.previewPop');
      this.selPageUrl = e;
      target.style.display = 'block';
      //const eachFrame = e.target;
      //console.log(eachFrame)
      //eachFrame.classList.add('selectedFrame')
    },
    closePreviewPop(e) {
      this.showSearch = true;
      const target = e.target.parentElement;
      target.style.display = 'none';
    },
    closepop() {
      //   const target = document.querySelector('.previewPop');
      //   console.log(target);
      //   target.style.display = 'none';
    },
  },
};
</script>

<style scoped>
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
  position: absolute;
  left: 150px;
  width: 1100px;
  height: 50vh;
  display: none;
  text-align: right;
}
.previewWrap {
  z-index: 9999;
}
</style>
