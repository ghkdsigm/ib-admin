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
        <tr>
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
          <th>비고</th>
          <td>
            {{ detailInfo?.etc }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: Object,
  },
  data() {
    return {};
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
</style>
