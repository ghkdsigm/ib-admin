<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <div class="header">
      <h3>아이템베이 이벤트 프로모션 레퍼런스 페이지</h3>
      <div>
        <img
          src="https://www.itembaycorp.com/resources/images/common/ico_logo.png"
          alt="아이템베이 로고"
        />
      </div>
      <router-link to="/login" v-if="this.loginActive !== true" class="loginbt"
        >로그인</router-link
      >
      <span class="loginbt" v-else @click="logout"
        ><em>관리자님 환영합니다.</em> 로그아웃</span
      >
    </div>
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
      <Search :selected-tab="selectedTab" />
      <div style="display: flex; width: 196px; justify-content: flex-end">
        <button type="button" @click="excelDown()" class="excelBt">
          엑셀 다운로드
        </button>
        <button type="button" class="excelBt" @click="registerRef">
          레퍼런스 등록
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
      loginActive: "",
    };
  },
  created() {
    var currentTime = new Date();
    var thisYear = currentTime.getFullYear();
    data[thisYear].forEach((v, i) => {
      this.selectedTab.push(data[2023][i]);
    });
    this.isActive = true;
  },
  mounted() {
    const lastTab = this.$refs.tab;
    lastTab.forEach((v, i) => {
      if (lastTab.length - 1 === i) {
        lastTab[i].classList.add("on");
      }
    });
    this.loginActive = this.$store.state.loginActive;
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

      const dataWS = XLSX.utils.json_to_sheet(this.excel);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS, "Event References");
      XLSX.writeFile(wb, "ItembayEventReferences.xlsx");
    },
    logout() {
      // eslint-disable-next-line no-alert
      if (confirm("정말 로그아웃 하시겠습니까?")) {
        this.loginActive = false;
        this.$store.dispatch("loginUser", false);
        // eslint-disable-next-line no-alert
        alert("로그아웃 되었습니다.");
        this.$router.go(0);
      }
    },
    registerRef() {
      this.$nextTick(() => {
        if (this.loginActive) {
          this.$router.push("/register");
        } else {
          // eslint-disable-next-line no-alert
          alert("로그인이 필요합니다.");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  top: 0;
  padding: 22px 0 0;
  z-index: 9999;
}
.header h3 {
  display: flex;
  position: relative;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
  color: rgb(68, 99, 213);
}
.header .loginbt {
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  min-width: 200px;
  text-align: right;
}
.header .loginbt:hover {
  color: #4463d5;
  cursor: pointer;
}
.header .loginbt em {
  padding-right: 15px;
  color: #6a24fe;
  font-weight: 300;
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
  z-index: 9999;
  padding: 22px 0;
}
.eventTab {
  min-width: 305px;
  text-align: left;
}
.eventTab li:first-child {
  margin-left:0;
}
.eventTab li {
  display: inline-block;
  margin: 0 15px;
  font-weight: 500;
}
.eventTab li:hover {
  cursor: pointer;
  font-weight: 500;
}
.eventTab li.on {
  color: #4463d5;
  font-weight: 500;
}
.eventTab li:hover {
  color: #4463d5;
  font-weight: 500;
}
.tbHeader {
  z-index: 9999;
}
.excelBt {
  color: #fff;
  background-color: #9da0ab;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  padding: 5px;
  margin-left: 5px;
}
.excelBt:hover {
  cursor: pointer;
  background-color: #34406a;
}
</style>
