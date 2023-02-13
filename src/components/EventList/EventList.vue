<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
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
    <Search

    />
    <EventTable
      v-if="selectedTab.length > 0"
      :selected-tab="selectedTab"
      :is-active="isActive"
    />
  </div>
</template>

<script>
import EventTable from '@/components/eventlist/EventTable';
import data from '@/api/data.json';
import Search from '@/components/search/SearchForm';

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
      categoryList: []
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
        lastTab[i].classList.add('on');
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
          tab[i].classList.add('on');
        } else {
          tab[i].classList.remove('on');
        }
      });
    },
  },
};
</script>

<style>
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
