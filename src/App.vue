<template>

  <div id="app" >
    
    <nav v-if="ok" class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">数据分析-白皮书产出</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/home">白皮书建立</router-link>
            </li>
            <!-- <li><router-link to="/report">report</router-link></li> -->
            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>  
    
    <transition name="fade" mode="out-in">
      <router-view class="view container"></router-view>
    </transition>
  </div>
</template>

<script>

var data = {ok : location.href.indexOf('pdf') == -1 } 

export default {
  data : function(){return data}
}
</script>

<style>

</style>
