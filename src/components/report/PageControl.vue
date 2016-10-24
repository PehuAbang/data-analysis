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
      location.href = 'http://localhost:8080/getpdf?city=' + ReportParam.getCity()
    }
  },
  components: {
  }
}
</script>

<style>

</style>
