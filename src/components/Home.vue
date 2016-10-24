<template>
<div >
  <h1>白皮书建立</h1>
  南通市
  <input type="radio" value="南通市" v-model="city"/>
  南京市
  <input type="radio" value="南京市" v-model="city"/>
  <br>
  <button v-on:click="review">检视</button>
  
</div>
</template>

<script>
import router from './router/index.js'
import ReportParam from './report/ReportParam.js'

export default {
  data : function(){
    return {
      city : '南通市'
    }
  },

  methods : {
    review : function(){
      
      ReportParam.setCity(this.city);
      router.push({path : '/report/'+this.city})
    }
  }
}
</script>

<style>

</style>
