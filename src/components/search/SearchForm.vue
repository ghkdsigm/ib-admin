<template>
  <div class="searchWrap">
    <input
      class="search-input"
      type="text"
      placeholder="카테고리, 이벤트명으로 검색 하실 수 있습니다."
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.searchWrap input {
  padding: 10px;
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
