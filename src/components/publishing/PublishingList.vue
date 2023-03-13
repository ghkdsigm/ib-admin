<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      loginActive: "",
    };
  },
  mounted() {
    this.loginActive = this.$store.state.loginActive;
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
</style>
