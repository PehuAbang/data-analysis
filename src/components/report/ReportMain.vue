<template>
  <div >
    <div v-if="enableCtrl">
      <button v-on:click="back">返回</button>
      <button v-on:click="download">匯出 PDF</button>
    </div>
    <page1></page1>
    <page2></page2>
    <page3></page3>
  </div>
</template>

<script>
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import router from '../router'

var data = {
  enableCtrl : location.href.indexOf('pdf') == -1 
}

export default {
  data : function(){
    return data
  },
	methods : {
    back : function(){
      router.back()
    },
    download : function(){
      location.href = 'http://localhost:8080/pdf/12'
    }
  },
  components: {
    Page1,
    Page2,
    Page3
  }
}
</script>

<style>

</style>
