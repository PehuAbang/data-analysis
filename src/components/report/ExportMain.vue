<template>
  <div>
    <page1></page1>
    <page2></page2>
    <page3></page3>
  </div>
</template>

<script>
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import ReportParam from './ReportParam.js'

ReportParam.setCity(location.href.split('city=')[1]);

export default {
  components: {
    Page1,
    Page2,
    Page3
  }
}
</script>

<style>

</style>
