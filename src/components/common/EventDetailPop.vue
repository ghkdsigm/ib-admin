<template>
  <div>
    <!-- <h4>{{detailInfo.name}}</h4> -->
    <table>
      <colgroup>
        <col width="5%">
        <col width="5%">
        <col width="5%">
        <col width="5%">
        <col width="5%">
        <col width="5%">
      </colgroup>
      <thead>
        <tr>
          <th>카테고리</th>
          <th>코드</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in detailInfo" :key="index">
          <td>{{item[0]}}</td>
          <td>{{item[1]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo: Array
    },
    data(){
      return {
        // detail : {
        //   category: "카테고리",
        //   code: "카테고리",
        //   content: "카테고리",
        //   etc: "카테고리",
        //   function: "카테고리",
        //   name: "카테고리",
        //   pageUrl: "카테고리",
        //   place: "카테고리",
        //   season: "카테고리",
        //   tableSp: {
        //     first: "신규테이블",
        //     second: "신규SP",
        //     third: "수정SP"
        //   },
        //   workUrl: "카테고리",
        // }
        newDetail: []
      }
    },
    // mounted(){
    //   this.$nextTick(() => {
    //     if(this.detailInfo !== ''){
    //       let res = Object.entries(this.detailInfo)
    //       console.log('vv',res)
    //     }        
    //   }) 
    // }
}
</script>

<style>

</style>