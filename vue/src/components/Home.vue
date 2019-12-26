<template>
<div id="app">
  <div id="loginjoin"><component :is="!loginCheck ? 'pre-auth' : 'post-auth'"></component></div><br><br>
  <div id="mainHome"><router-link to="/mainhome">wego</router-link></div>
  <div id="search"><input style="width: 50%" type="text" name="serch"><button>검색</button></div>
  
  <div id="hotel"><a href="">호텔베스트</a></div><div id="eat"><a href="">맛집베스트</a></div>
  
</div>
</template>
<script>
import Mainhome from "@/components/cmm/Mainhome.vue"
import PreAuth from "@/components/cmm/PreAuth.vue"
import PostAuth from "@/components/cmm/PostAuth.vue"
import {store} from "@/store"
export default {
 components:{PreAuth,PostAuth,Mainhome},
 data(){
  return{}
 },
 methods:{
   mainhome(){
    this.$router.push({path:'/mainhome'})}
 },
 computed:{
  loginCheck:function(){
   return store.state.authCheck
  }
 }
}
</script>
<style scoped>
#mainHome{
 border: 1px solid #bcbcbc;
}
#loginjoin{
 margin-right: 10%;
}
#hotel{width: 150px;
height: 155.7px;
padding: 20px;

margin-bottom: 20px;
margin-top: 70px;
margin-left: 36.5%;
float: left;
border: 1px solid #bcbcbc;
text-align: center;
}
#eat{width: 150px;
height: 155.7px;
padding: 20px;

margin-top: 70px;
margin-bottom: 20px;
margin-right: 36.5%;
float: right;
border: 1px solid #bcbcbc;
text-align: center;
}
#search{
 margin-top: 50px;
}
</style>