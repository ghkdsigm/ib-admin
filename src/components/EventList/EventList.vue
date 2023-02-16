<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <h3>아이템베이 이벤트 프로모션 레퍼런스 페이지</h3>
    <div class="eventSearchWrap">
      <ul class="eventTab">
        <li
          v-for="(item, index) in eventTab"
          :key="index"
          @click="tabBt(item, index)"
          ref="tab"
        >
          {{ item }}
        </li>
      </ul>
      <Search />
      <div style="display: flex; width: 196px; justify-content: flex-end">
        <button type="button" @click="excelDown()" class="excelBt">
          엑셀 다운로드
        </button>
      </div>
    </div>
    <EventTable
      v-if="selectedTab.length > 0"
      :selected-tab="selectedTab"
      :is-active="isActive"
    />
  </div>
</template>

<script>
import EventTable from "@/components/eventlist/EventTable";
import data from "@/api/data.json";
import Search from "@/components/search/SearchForm";
import XLSX from "xlsx";

export default {
  components: {
    EventTable,
    Search,
  },
  data() {
    return {
      excel: [],
      eventList: data,
      eventTab: Object.keys(data),
      selectedTab: [],
      isActive: false,
      categoryList: [],
    };
  },
  created() {
    var currentTime = new Date();
    var thisYear = currentTime.getFullYear();
    data[thisYear].forEach((v, i) => {
      this.selectedTab.push(data[2023][i]);
    });
    this.isActive = true;
    //console.log(data)
  },
  mounted() {
    const lastTab = this.$refs.tab;
    lastTab.forEach((v, i) => {
      if (lastTab.length - 1 === i) {
        lastTab[i].classList.add("on");
      }
    });
  },
  methods: {
    tabBt(eventYear, tabIndex) {
      this.selectedTab = [];
      this.eventList[eventYear].map((v, i) => {
        this.selectedTab.push(this.eventList[eventYear][i]);
      });
      const tab = this.$refs.tab;
      tab.map((v, i) => {
        if (i === tabIndex) {
          tab[i].classList.add("on");
        } else {
          tab[i].classList.remove("on");
        }
      });
    },
    excelDown() {
      for (const excel of this.selectedTab) {
        const excelLogs = {
          category: {},
          code: "",
          content: "",
          etc: "",
          function: "",
          localPageUrl: "",
          name: "",
          pageUrl: "",
          place: "",
          seaseon: "",
          tableSp: "",
          workUrl: "",
        };
        excelLogs.category = excel.category.name;
        excelLogs.code = excel.code;
        excelLogs.content = excel.content;
        excelLogs.etc = excel.etc;
        excelLogs.function = excel.function;
        excelLogs.localPageUrl = excel.localPageUrl;
        excelLogs.name = excel.name;
        excelLogs.pageUrl = excel.pageUrl;
        excelLogs.place = excel.place;
        excelLogs.seaseon = excel.seaseon;
        excelLogs.tableSp = excel.newSp;
        excelLogs.workUrl = excel.workUrl;

        this.excel.push(excelLogs);
      }

      // 엑셀 워크시트로 json 내보내기, 배열만 가능
      const dataWS = XLSX.utils.json_to_sheet(this.excel);
      // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다
      const wb = XLSX.utils.book_new();
      // workbook에 워크시트 추가, 시트명은 'peopleData'
      XLSX.utils.book_append_sheet(wb, dataWS, "peopleData");
      // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'people.xlsx'
      XLSX.writeFile(wb, "infinitychallenge.xlsx");
    },
  },
};
</script>

<style>
h3 {
  margin: 15px auto 0;
}
.eventSearchWrap {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 15px 0;
}
.eventTab li {
  display: inline-block;
  margin: 0 15px;
}
.eventTab li:hover {
  cursor: pointer;
}
.eventTab li.on {
  color: #4463d5;
  font-weight: bold;
}
.eventTab li:hover {
  color: #4463d5;
  font-weight: bold;
}
.excelBt {
  color: #fff;
  background-color: #9da0ab;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 5px;
}
.excelBt:hover {
  cursor: pointer;
  background-color: #34406a;
}
</style>
