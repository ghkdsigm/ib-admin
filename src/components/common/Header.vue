<template>
  <div>
    <div>
      <div class="header">
        <h3>
          {{
            userLevel === "admin" || userLevel === ""
              ? "아이템베이 이벤트 프로모션 레퍼런스 페이지"
              : "아이템베이 퍼블리싱 가이드 3.0"
          }}
        </h3>
        <div>
          <img
            src="https://www.itembaycorp.com/resources/images/common/ico_logo.png"
            alt="아이템베이 로고"
            class="homeLogo"
            @click="toHome"
          />
        </div>
        <router-link
          to="/login"
          v-if="this.loginActive !== true"
          class="loginbt"
          ><span>로그인</span></router-link
        >
        <span class="loginbt" v-else
          ><em
            >{{ userLevel === "admin" ? "관리자" : "퍼블리셔" }}님
            환영합니다.</em
          >
          <span @click="logout">로그아웃</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLevel: "",
      loginActive: false,
    };
  },
  //   props: {
  //     loginActive: Boolean,
  //     isLogin: Boolean,
  //   },
  methods: {
    logout() {
      this.$nextTick(() => {
        // eslint-disable-next-line no-alert
        if (confirm("정말 로그아웃 하시겠습니까?")) {
          // eslint-disable-next-line no-alert
          alert("로그아웃 되었습니다.");
          // reload
          this.$router.go(this.$router.currentRoute);
          // if (this.$router.currentRoute.path !== "/") {
          //   this.$router.push("/");
          // }
          this.loginActive = false;
          this.$store.dispatch("loginUser", false);
          // this.$router.go(0);
          this.$store.dispatch("userLevel", "admin");
        }
      });
    },
    toHome() {
      this.$nextTick(() => {
        // eslint-disable-next-line prettier/prettier
        if(this.$router.currentRoute.path !== "/"){
          this.$router.push("/");
          this.$router.go(this.$router.currentRoute);
        }
      });
    },
  },
  mounted() {
    this.loginActive = this.$store.state.loginActive;
    console.log((this.userLevel = this.$store.state.userLevel));
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
.header .loginbt span:last-child:hover {
  color: red;
  cursor: pointer;
}
.header .loginbt em {
  padding-right: 15px;
  color: #6a24fe;
  font-weight: 300;
}
.homeLogo {
  cursor: pointer;
}
</style>
