<template>
  <div style="height:100%;">
    <iframe :src="selPageUrl" frameborder="0" height ="100%" width="100%"></iframe>
  </div>
</template>

<script>
export default {
    props:{
        selPageUrl:String
    },
    mounted(){
      console.log('zz',this.selPageUrl)
    }
}
</script>

<style>

</style>