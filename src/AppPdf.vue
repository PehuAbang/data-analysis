<template>

  <div id="app" >
  asss
    <export-main></export-main>
  </div>
</template>

<script>
import ExportMain from './components/report/ExportMain.vue'



var data = {ok : location.href.indexOf('pdf') == -1 } 

export default {
  data : function(){return data},
  components : {
    ExportMain
  }
}
</script>

<style>

</style>
