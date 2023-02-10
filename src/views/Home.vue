<template>
  <div class="home">
    <EventList />
  </div>
</template>

<script>
import EventList from "@/components/EventList/EventList.vue";

export default {
  name: "Home",
  components: {
    EventList,
  },
};
</script>
