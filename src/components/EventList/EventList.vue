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

export default {
  components: {
    EventTable,
    Search,
  },
  data() {
    return {
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
  },
};
</script>

<style>
.eventSearchWrap {
  display: flex;
  max-width: 1200px;
  margin: 15px auto;
  align-items: center;
  justify-content: space-between;
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
</style>
