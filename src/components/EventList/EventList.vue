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
    <EventTable
      v-if="selectedTab.length > 0"
      :selected-tab="selectedTab"
      :is-active="isActive"
    />
  </div>
</template>

<script>
import EventTable from '@/components/EventList/EventTable.vue';
import data from '@/api/data.json';

export default {
  components: {
    EventTable,
  },
  data() {
    return {
      eventList: data,
      eventTab: Object.keys(data),
      selectedTab: [],
      isActive: false,
    };
  },
  created() {
    var currentTime = new Date();
    var thisYear = currentTime.getFullYear();
    data[thisYear].forEach((v, i) => {
      return this.selectedTab.push(data[2023][i]);
    });
    this.isActive = true;
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
  color: red;
}
</style>
