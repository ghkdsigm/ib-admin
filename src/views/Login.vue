<template>
  <div class="login-wrapper">
    <div class="content">
      <h2 @click="toHome">레퍼런스 로그인</h2>
      <p>
        *아이템베이 이벤트 프로모션 레퍼런스 등록을 위한 로그인 화면입니다.<br />권한
        관련 문의는 담당 관리자<em>(황승현대리/손정완주임)</em>에게 문의하세요
      </p>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input
              class="w3-input"
              name="uid"
              placeholder="아이디"
              v-model="user_id"
            /><br />
          </p>
          <p>
            <input
              name="password"
              class="w3-input"
              placeholder="패스워드"
              v-model="user_pw"
              type="password"
            />
          </p>
          <p>
            <button type="submit" class="button w3-green w3-round">
              로그인
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_id: "",
      user_pw: "",
      loginActive: false,
    };
  },
  methods: {
    fnLogin() {
      if (this.user_id !== "" && this.user_pw !== "") {
        if (this.user_id === "test" && this.user_pw === "pw123") {
          // eslint-disable-next-line no-alert
          alert("로그인 되었습니다.");
          this.$router.push("/");
          this.login = true;
          this.$store.dispatch("loginUser", true);
        } else {
          // eslint-disable-next-line no-alert
          alert("아이디 또는 패스워드가 올바르지 않습니다. 다시 입력해주세요");
          this.user_id = "";
          this.user_pw = "";
        }
      } else {
        // eslint-disable-next-line no-alert
        alert("아이디 또는 패스워드를 입력해주세요!");
      }
    },
    toHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.loginActive = false;
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 400px;
  height: 350px;
  padding: 40px;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.login-wrapper .content p {
  font-size: 12px;
}
.login-wrapper .content p em {
  font-size: 10px;
  color: #6A24FE;
  font-style: normal;
}
#loginForm {
  margin: auto;
}
h2 {
  font-size: 24px;
  color: #6A24FE;
  margin-bottom: 20px;
  cursor: pointer;
}
#loginForm input {
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #F8F8F8;
  border: none;
}

#loginForm input::placeholder {
  color: #D2D2D2;
}

.button {
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  background-color: #6A24FE;
  margin-top: 20px;
  border: none;
}
.button:hover {
  cursor: pointer;
}
</style>
