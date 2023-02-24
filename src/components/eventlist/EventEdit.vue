<template>
  <div class="login-wrapper">
    <div class="content">
      <img
        src="https://www.itembaycorp.com/resources/images/common/ico_logo.png"
        alt="아이템베이 로고"
        @click="toHome"
      />
      <h2>레퍼런스 수정</h2>
      <div id="loginForm">
        <form>
          <div>
            <label for=""><em class="important">*</em>상시여부</label>
            <select @change="selectSel($event)">
              <option value="상시">상시</option>
              <option value="비상시">비상시</option>
            </select>
          </div>
          <div>
            <label for=""><em class="important">*</em>웹 퍼블 url</label>
            <input
              type="text"
              id=""
              placeholder="ex) resources/event/2022/1229_dk/index.html"
              v-model="registerList.thumbnail"
            />
          </div>
          <div>
            <label for=""><em class="important">*</em>모바일 퍼블 url</label>
            <input
              type="text"
              id=""
              placeholder="ex) event/2022/1229_dk/index.html"
              v-model="registerList.Mthumbnail"
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
              v-model="registerList.newTb"
            />
          </div>
          <div>
            <label for=""
              >신규SP<br /><span class="addSP"
                >내용 입력 후 Enter를 누르시면 추가가 됩니다.</span
              ></label
            >
            <input
              type="text"
              id=""
              placeholder="ex) up_Event_202211FIFA2022_GetCompetitionDate -- 경기 일자 조회"
              v-model="addnewsp"
              @keyup.enter="addNewSps"
            />
          </div>
          <div v-if="this.registerList.newSp.length > 0">
            <label for=""></label>
            <ul class="newspon">
              <li v-for="(item, i) in registerList.newSp" :key="i">
                {{ item }} <b @click="delSp(i)">❌</b>
              </li>
            </ul>
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
              v-model="registerList.editSp"
            />
          </div>
          <div>
            <label for="">비고</label>
            <input type="text" id="" v-model="registerList.etc" />
          </div>
          <div>
            <span
              type="submit"
              class="button w3-green w3-round"
              @click="registerReference"
            >
              레퍼런스 수정
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/api/data.json";

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
        newTb: "",
        newSp: [],
        etc: "",
        Mthumbnail: "",
        permanent: "상시",
      },
      addnewsp: "",
      eventList: data,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    delSp(e) {
      this.registerList.newSp.forEach((v, i) => {
        if (e === i) {
          this.registerList.newSp.splice(e, 1);
        }
      });
    },
    selectSel(event) {
      console.log(event.target.value); //value값 출력
      this.registerList.permanent = event.target.value;
    },
    addNewSps() {
      this.$nextTick(() => {
        if (this.addnewsp) {
          if (this.registerList.newSp.length < 10) {
            this.registerList.newSp.push(this.addnewsp);
          } else {
            // eslint-disable-next-line no-alert
            alert("신규 SP 항목은 최대 10개까지 등록 가능합니다.");
          }
        } else {
          // eslint-disable-next-line no-alert
          alert("내용을 입력하세요");
        }
        this.addnewsp = "";
      });
    },
    registerReference() {
      const vm = this.registerList;
      if (
        vm.permanent !== "" &&
        vm.thumbnail !== "" &&
        vm.category !== "" &&
        vm.code !== "" &&
        vm.eventName !== "" &&
        vm.content !== "" &&
        vm.functions !== "" &&
        vm.realserver !== "" &&
        vm.redmineurl !== "" &&
        vm.sourceplace !== "" &&
        vm.Mthumbnail
      ) {
        // eslint-disable-next-line no-alert
        if (confirm("레퍼런스를 수정 하시겠습니까?")) {
          // eslint-disable-next-line no-alert
          const registerlist = {
            permanent: this.permanent,
            thumbnail: this.thumbnail,
            category: this.category,
            code: this.code,
            eventName: this.eventName,
            content: this.content,
            functions: this.functions,
            realserver: this.realserver,
            redmineurl: this.redmineurl,
            sourceplace: this.sourceplace,
            Mthumbnail: this.Mthumbnail,
          };
          var currentTime = new Date();
          var thisYear = currentTime.getFullYear();
          /*** json 등록 구현 필요 ***/
          // this.eventList[thisYear].map((v, i) => {
          //   v.push(registerlist);
          // });
          // eslint-disable-next-line no-alert
          alert("수정이 완료되었습니다.");
          this.$router.push("/");
        }
      } else {
        // eslint-disable-next-line no-alert
        alert("레퍼런스 필수 항목을 입력해주세요.");
      }
    },
  },
  mounted() {
    const vm = this.registerList;
    const routeVm = this.$route.params.registerList;
    vm.permanent = routeVm.permanent;
    vm.thumbnail = routeVm.localPageUrl;
    vm.category = routeVm.category.name;
    vm.code = routeVm.code;
    vm.eventName = routeVm.name;
    vm.content = routeVm.content;
    vm.functions = routeVm.function;
    vm.realserver = routeVm.pageUrl;
    vm.redmineurl = routeVm.workUrl;
    vm.sourceplace = routeVm.place;
    vm.newTb = routeVm.tableSp.newTb;
    vm.newSp = routeVm.tableSp.newSp;
    vm.etc = routeVm.etc;
    vm.Mthumbnail = routeVm.mobilelocalPageUrl;
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
.content > img {
  cursor: pointer;
}
h2 {
  font-size: 24px;
  color: #6a24fe;
  margin-bottom: 20px;
  font-weight: bold;
}
#loginForm select {
  width: 30%;
  height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #f3f3f3;
  border: none;
}
#loginForm input {
  width: 100%;
  height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #f3f3f3;
  border: none;
}
#loginForm textarea {
  width: 100%;
  min-height: 135px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #f8f8f8;
  border: none;
}

#loginForm input::placeholder {
  color: #b3b3b3;
  font-weight: 100;
  font-size: 13px;
}
#loginForm textarea::placeholder {
  color: #b3b3b3;
  font-weight: 100;
  font-size: 13px;
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
  background-color: #6a24fe;
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
  min-width: 200px;
  font-size: 14px;
}
.important {
  color: red;
  padding-right: 3px;
}
.newspon {
  font-size: 12px;
  text-align: left;
  padding: 2px;
}
.newspon b {
  cursor: pointer;
  padding-left: 5px;
}
span.addSP {
  color: red;
  font-size: 10px;
  font-weight: 400;
}
</style>
