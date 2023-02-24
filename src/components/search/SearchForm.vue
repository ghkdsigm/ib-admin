<template>
  <div class="searchWrap">
    <input
      class="search-input"
      type="text"
      placeholder="카테고리, 이벤트명으로 검색 하실 수 있습니다."
      :value="writing"
      @input="searchGroup"
    />
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
  border-radius: 55px;
  border: 1px solid #ccc;
}
.searchWrap input:focus {
  outline: none !important;
  border-color: #4b9aff;
  box-shadow: 0 0 5px #4b9aff;
}
</style>
