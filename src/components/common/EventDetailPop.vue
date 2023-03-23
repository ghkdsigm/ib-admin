<template>
  <div>
    <h4>{{ detailInfo?.name }}</h4>
    <table>
      <colgroup>
        <col width="15%" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th>상시여부</th>
          <td>
            {{ detailInfo?.permanent }}
          </td>
        </tr>
        <tr>
          <th>카테고리</th>
          <td>
            {{ detailInfo?.category?.name }}
          </td>
        </tr>
        <tr>
          <th>코드</th>
          <td>
            {{ detailInfo?.code }}
          </td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            {{ detailInfo?.content }}
          </td>
        </tr>
        <tr>
          <th>소스위치</th>
          <td>
            {{ detailInfo?.place }}
          </td>
        </tr>
        <tr>
          <th>신규테이블</th>
          <td>
            {{ detailInfo?.tableSp?.newTable }}
          </td>
        </tr>
        <tr v-if="auth">
          <th>신규SP</th>
          <td>
            <ul>
              <li
                v-for="(item, index) of detailInfo?.tableSp?.newSp"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>수정SP</th>
          <td>
            {{ detailInfo?.tableSp?.editSp }}
          </td>
        </tr>
        <tr>
          <th>모바일 바로가기</th>
          <td>
            <span v-if="detailInfo.mobilelocalPageUrl">
              <a
                :href="fronMobilurl + detailInfo.mobilelocalPageUrl"
                target="_blank"
              >
                {{ detailInfo.mobilelocalPageUrl }}
              </a>
            </span>
            <span v-else style="color: #cd0606">
              모바일 링크 URL이 존재하지않습니다.
            </span>
          </td>
        </tr>
        <tr>
          <th>비고</th>
          <td>
            {{ detailInfo?.etc }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="!auth" class="auth">
      * 로그인을 하시면 더 많은 정보를 확인하실 수 있습니다.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: Object,
  },
  data() {
    return {
      fronMobilurl: "http://ds-mb.itembay.co.kr/resources/event",
      auth: this.$store.state.loginActive,
    };
  },
  mounted() {
    this.auth = this.$store.state.loginActive;
  },
};
</script>

<style scoped>
h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: bold;
}
table {
  min-width: 750px;
}
table tbody tr th {
  border-bottom: 1px solid rgb(230, 230, 230);
  color: rgb(66 66 66);
  text-align: center;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 6px 5px 6px;
  background: whitesmoke;
  vertical-align: middle;
}
table tbody tr:nth-of-type(1) td {
  border-top: 1px solid #eee;
}
table tbody tr td {
  vertical-align: inherit;
  white-space: nowrap;
  font-size: 0.8em;
  padding: 5px 6px 5px 6px;
  height: 22px;
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.auth {
  font-size: 11px;
  margin-top: 15px;
  text-align: right;
  color: #ff5555;
}
</style>
