<template>
  <div>
    <table v-if="selectedTab[0] !== ''">
        <colgroup>
            <col width="20%">
            <col width="20%">
            <col width="5%">
            <col width="15%">
            <col width="10%">
            <col width="10%">
            <col width="5%">
            <col width="5%">
            <!-- <col width="10%">
            <col width="10%"> -->
        </colgroup>
        <thead>
            <tr>
                <th>이름</th>
                <th>내용</th>
                <th>이벤트코드</th>
                <th>소스위치</th>
                <th>기능</th>
                <th>미리보기</th>
                <th>바로가기</th>
                <th>일감</th>
                <!-- <th>sp</th>
                <th>비고</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in selectedTab" :key="index">
                <td>
                    {{item.name}}
                </td>
                <td>
                    {{item.content}}
                </td>
                <td>
                    {{item.code}}
                </td>
                <td>
                    {{item.place}}
                </td>
                <td>
                    {{item.function}}
                </td>
                <td>
                    <div 
                        :class="`area${index}`" 
                        @click="doMouseOver(index)" 
                    >
                        <iframe :src="item.pageUrl" frameborder="0" height ="100%" width="100%"></iframe>
                    </div>
                </td>
                <td>
                    <a :href="item.pageUrl" target="_blank">index.html</a>
                </td>
                <td>
                    <a :href="item.workUrl" target="_blank">redmine</a>
                </td>
                <!--<td>
                    <ul>
                        <li v-for="(sp, i) in item.tableSp.newSp" :key="i">
                            {{sp}}
                        </li>
                    </ul>
                </td>      
                <td>{{item.etc}}</td>           -->
            </tr>
        </tbody>
    </table>    
    <table v-else>
        <thead>
            <tr>
                <th>1depth</th>
                <th>2depth</th>
                <th>Link</th>
                <th>작업일</th>
                <th>업데이트일</th>
                <th>작업일</th>
                <th>업데이트일</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in defaultSelectTab" :key="index">
                <td>
                    {{item.name}}
                </td>
                <td>
                    {{item.content}}
                </td>
                <td>
                    {{item.place}}
                </td>
                <td>
                    {{item.function}}
                </td>
                <td>
                    {{item.pageUrl}}
                </td>
                <td>
                    {{item.workUrl}}
                </td>
                <td>
                    <ul>
                        <li v-for="(sp, i) in item.tableSp.newSp" :key="i">
                            {{sp}}
                        </li>
                    </ul>
                </td>                
            </tr>
        </tbody>
    </table>
    <!-- <div class="previewPop">
        <iframe :src="item.pageUrl" frameborder="0" height ="100%" width="100%"></iframe>
    </div> -->
  </div>
</template>

<script>
export default {
    props:{
        selectedTab: Array,
        defaultSelectTab: Array
    },
    data(){
        return {
            preview:this.selectedTab,
            selpreview:''
        }
    },
    mounted(){
        // console.log(this.defaultSelectTab)
        console.log(this.preview)     
    },
    methods:{
        // previewEvent(){
        //     $('a').on({
        //     mouseenter :function(){
        //         var $this = $(this);
        //         var href = $this.attr('href');
        //         var html = '<iframe src="'+href+'" frameborder="0" width="1240" height="1500" class="sitemapIframe"></iframe>';
        //         $this.append(html)
        //     },
        //     mouseleave : function(){
        //         $(this).find('.sitemapIframe').remove();
        //     }
        // })
        // }
        doMouseOver(e){
            const target = document.querySelector(`.area${e}`)
            target.classList.add('selectedFrame')
            //const eachFrame = e.target;
            //console.log(eachFrame)
            //eachFrame.classList.add('selectedFrame')
        },
    }
}
</script>

<style scoped>
.area {
}
.area > iframe {
    width: 300px; 
    height: 200px; 
    resize: both; 
}
.selectedFrame {
    position: absolute;
    left: 150px;
    width: 1000px;
    height: 1000px;
}
.previewPop {
    position: absolute;
    left: 150px;
    width: 1000px;
    height: 1000px;
}
</style>