<template>
  <div class="home">
    <EventList />
  </div>
</template>

<script>
import EventList from "@/components/eventlist/EventList";

export default {
  name: "Home",
  components: {
    EventList,
  },
};
</script>
