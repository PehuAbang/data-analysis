<template>
  <div >
    <div >
      <button v-on:click="back">返回</button>
      <button v-on:click="download">匯出 PDF</button>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js'

import ReportParam from './ReportParam.js'

export default {
	methods : {
    back : function(){
      router.back()
    },
    download : function(){
      var downloadFile = location.href.split('8080')[0]+'8080/getpdf?city=' + ReportParam.getCity();
      location.href = downloadFile;
    }
  },
  components: {
  }
}
</script>

<style>

</style>
