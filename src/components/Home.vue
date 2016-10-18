<template>
<div >
  <h1>白皮书建立</h1>
  XX市
  <input type="radio" value="a1" v-model="area"/>
  OO市
  <input type="radio" value="a2" v-model="area"/>
  <br>
  <button v-on:click="review">检视</button>
  
</div>
</template>

<script>
import router from './router/index.js'

export default {
  data : function(){
    return {
      area : 'a1'
    }
  },

  methods : {
    review : function(){
      console.log('home review',this.area);
      router.push({path : '/report/'+this.area})
    }
  }
}
</script>

<style>

</style>
