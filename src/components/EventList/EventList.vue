<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <ul class="eventTab">
        <li v-for="(item, index) in eventTab" :key="index" @click="tabBt(item)">
            {{ item }}
        </li>
    </ul>
    <EventTable :selected-tab="selectedTab" :default-selecttab="defaultSelectTab" :is-active="isActive" />
  </div>
</template>

<script>
import EventTable from '@/components/EventList/EventTable.vue'
import data from '@/api/data.json'

export default {
    components:{
        EventTable
    },
    data(){
        return {
            eventList: data,
            eventTab: Object.keys(data),
            selectedTab: [],
            isActive: false,
            defaultSelectTab: []
        }
    },
    created(){
        //console.log(this.eventList[2022])
        //console.log(Object.keys(data))
        this.defaultSelectTab.push(data[2023][0])
    },    
    methods:{
        tabBt(eventYear){
            this.selectedTab = []
            this.eventList[eventYear].map((v,i) => {
                this.selectedTab.push(this.eventList[eventYear][i])
            })  
        }
    }
};
</script>

<style>
.eventTab li {
    display: inline-block;
    margin:0 15px;
}
</style>
