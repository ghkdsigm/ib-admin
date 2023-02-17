<template>
  <div class="searchWrap">
    <input
      class="search-input"
      type="text"
      placeholder="카테고리, 이벤트명으로 검색 하실 수 있습니다."
      :value="writing"
      @input="searchGroup"
    />
    <!-- <ul class="group-list">
      <li class="group-list-header">
        <span>카테고리</span>
        <span>이벤트명</span>
      </li>
      <li v-for="group in groupList" :key="group" class="group-item">
        <span>{{ group.name }}</span>
        <span>{{ group.debut }}</span>
      </li>
    </ul> -->
    <!-- <ul class="group-list">
      <li class="group-list-header">
        <span>그룹명</span>
        <span>데뷔년도</span>
        <span>멤버수</span>
      </li>
      <li v-for="(group, idx) in groupList" :key="idx" class="group-item">
        <span>{{ group.name }}</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  props: {
    selectedTab: Array,
  },
  data() {
    return {
      groupList: [],
      writing: "",
    };
  },
  mounted() {
    this.groupList.push(...this.selectedTab);
    this.$store.state.searchList = this.groupList.length;
  },
  methods: {
    searchGroup(event) {
      this.writing = event.target.value;
      this.$store.dispatch("toggleStateUser", this.writing);
    },
  },
};
</script>

<style scoped>
.searchWrap input {
  padding: 10px;
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.searchWrap input:focus {
  outline: none !important;
  border-color: #4b9aff;
  box-shadow: 0 0 5px #4b9aff;
}
</style>
