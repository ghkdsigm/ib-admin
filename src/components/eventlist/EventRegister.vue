<template>
  <div class="login-wrapper">
    <div class="content">
      <h2 @click="toHome">레퍼런스 등록</h2>
      <div id="loginForm">
        <form>
          <div>
            <label for=""><em class="important">*</em>썸네일 url</label>
            <input
              type="text"
              id=""
              placeholder="ex) resources/event/2022/1229_dk/index.html"
              v-model="registerList.thumbnail"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>카테고리</label>
            <input
              type="text"
              id=""
              placeholder="ex) 게임 전용 쿠폰팩 지급"
              v-model="registerList.category"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>코드</label>
            <input
              type="text"
              id=""
              placeholder="ex) 1365"
              v-model="registerList.code"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>이벤트명</label>
            <input
              type="text"
              id=""
              placeholder="ex) 토스페이 첫결제 3천원 지원 이벤트 페이지 제작"
              v-model="registerList.eventName"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>내용</label>
            <input
              type="text"
              id=""
              placeholder="ex) 이벤트 기간 동안 추가 마일리지가 적립되는 이벤트"
              v-model="registerList.content"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>기능</label>
            <input
              type="text"
              id=""
              placeholder="ex) 마일리지 충전 하기"
              v-model="registerList.functions"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>실서버 url</label>
            <input
              type="text"
              id=""
              placeholder="ex) https://www.itembay.com/evt/com/2022/0822_DKMobileTheOrigin/DKMobileTheOrigin"
              v-model="registerList.realserver"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>레드마인(일감) url</label>
            <input
              type="text"
              id=""
              placeholder="ex) http://redmine.itembay.co.kr/issues/9774"
              v-model="registerList.redmineurl"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>소스위치</label>
            <input
              type="text"
              id=""
              placeholder="ex) WEB-INF\view_event\20221205_tosspay"
              v-model="registerList.sourceplace"
            />
          </div>
          <div>
            <label for="">신규테이블</label>
            <input
              type="text"
              id=""
              placeholder="
ex) 
tbEvent_202106OdinBingoLog -- 빙고 로그"
            />
          </div>
          <div>
            <label for="">신규SP</label>
            <textarea
              type="text"
              id=""
              placeholder="
ex)
up_Event_202211FIFA2022_GetCompetitionDate -- 경기 일자 조회 
up_Event_202211FIFA2022_ArrCommentList -- 댓글 조회 
up_Event_202211FIFA2022_AddComment -- 댓글 입력 
up_Event_202211FIFA2022_CommentCheck -- 댓글 삭제"
            />
          </div>
          <div>
            <label for="">수정SP</label>
            <input
              type="text"
              id=""
              placeholder="
ex) 
불확실하여 이름 표시X
                                                                                                                                                                                                                                                                up_Coupon_AddCouponStock
up_Coupon_AddCouponStockByDtRegDate
up_Admin_Coupon_AddCouponBulk
up_Admin_Coupon_AddCouponCatalog
up_Batch_SetCouponByLimitDate"
            />
          </div>
          <div>
            <label for="">비고</label>
            <input type="text" id="" />
          </div>
          <div>
            <span
              type="submit"
              class="button w3-green w3-round"
              @click="registerReference"
            >
              레퍼런스 등록
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerList: {
        thumbnail: "",
        category: "",
        code: "",
        eventName: "",
        content: "",
        functions: "",
        realserver: "",
        redmineurl: "",
        sourceplace: "",
      },
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    registerReference() {
      const vm = this.registerList;
      if (
        vm.thumbnail !== "" &&
        vm.category !== "" &&
        vm.code !== "" &&
        vm.eventName !== "" &&
        vm.content !== "" &&
        vm.functions !== "" &&
        vm.realserver !== "" &&
        vm.redmineurl !== "" &&
        vm.sourceplace !== ""
      ) {
        // eslint-disable-next-line no-alert
        if (confirm("레퍼런스를 등록 하시겠습니까?")) {
          // eslint-disable-next-line no-alert
          vm.thumbnail = "";
          vm.category = "";
          vm.code = "";
          vm.eventName = "";
          vm.content = "";
          vm.functions = "";
          vm.realserver = "";
          vm.redmineurl = "";
          vm.sourceplace = "";
          // eslint-disable-next-line no-alert
          alert("등록이 완료되었습니다.");
          this.$router.push("/");
        }
      } else {
        // eslint-disable-next-line no-alert
        alert("레퍼런스 필수 항목을 입력해주세요.");
      }
    },
  },
};
</script>

<style scpoed>
.login-wrapper {
  width: 800px;
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
  height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #F8F8F8;
  border: none;
}
#loginForm textarea {
  width: 100%;
  min-height: 135px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #F8F8F8;
  border: none;
}

#loginForm input::placeholder {
  color: #b3b3b3;
  font-weight: 100;
}
#loginForm textarea::placeholder {
  color: #b3b3b3;
  font-weight: 100;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  cursor: pointer;
}
form div {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
form div label {
  margin-right: 15px;
  min-width: 150px;
}
.important {
  color: red;
  padding-right: 2px;
}
</style>