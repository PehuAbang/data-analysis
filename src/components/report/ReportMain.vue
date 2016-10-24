<template>
  <div>
    <page-control></page-control>
    <page1></page1>
    <page2></page2>
    <page3></page3>
  </div>
</template>

<script>
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import PageControl from './PageControl.vue'
import router from '../router/index.js'


export default {
	methods : {
    back : function(){
      router.back()
    },
    download : function(){

     // location.href = 'http://localhost:8080/pdf/12'
    }
  },
  components: {
    PageControl,
    Page1,
    Page2,
    Page3
  }
}
</script>

<style>

</style>
