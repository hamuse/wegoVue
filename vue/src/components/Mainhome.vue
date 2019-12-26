<template>
<div class="layout" id="wrapper">
    <header>
      <div id="wegohome">
      <slot name="header" :title="header"><a href="/mainhome">WeGo</a></slot> 
      </div>
      <div>
        <div id="logo">
      <span ><a href="#">로고</a></span> 
      </div>
      <div id="loginbtn"> 
      <span><a href="#">로그인</a></span>
      <span><a href="#">회원가입</a></span><!-- 슬롯은 무조건 
      name을 가져야 한다. -->
      </div>
      </div>
    </header>
    <aside id="sidebar">  <!-- 시멘틱 -->
      <slot name="sidebar"></slot> <!-- 슬롯은 무조건 name을 가져야 한다. -->
    <div id="textid">
     <div  v-for="i of sidebars" :key= "i.menu">
       <router-link :to="i.link">{{i.menu}}</router-link>

     </div>
    </div>
    </aside>
    <section id="content">
      <slot name="content" :title="content"></slot> <!-- 슬롯은 무조건 name을 가져야 한다. -->
      <router-view/>
    </section>
    <footer id="footer">
      <slot name="footer" :title="footer"></slot> <!-- 슬롯은 무조건 name을 가져야 한다. -->
    </footer>
  </div>
</template>
<script>
export default{
  data(){
    return{
      sidebars:[
        {menu:"호텔", link:"/hotel"},
        {menu:"맛집", link:"/restaurant"},
        {menu:"교통", link:"/traffic"},
        {menu:"관광", link:"/tourism"},
        {menu:"리뷰", link:"/review"},
        {menu:"챗봇", link:"/chatbot"}
      ]
    }
  }
}
</script>
<style scoped>
/* 전체 구조 */
#wrapper {
     padding: 5px;
     width: 1000px;
     margin: 20px auto;
}
header {
     height: 100px;
     padding: 0 15px;
  background-color:'#bbdefb';
     border-radius:0.5em;
  font-size: xx-large;
     color: black;
}
#content {
     width: 735px;
     float: left;
     padding: 5px 15px;
    min-height: 550px;
    border-radius:0.5em;
}
#sidebar {
     width: 200px;
     padding: 5px 15px;
    min-height: 550px;
     float: left;
     border-radius:0.5em;
}
footer {
     clear: both;
     padding: 0 15px;
     border-radius:0.5em;
}
/* 가로폭 980보다 작을 때 사용할 @media query */
@media screen and (max-width: 980px) {     
     #pagewrap {
           width: 94%;
     }
     #content {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     #sidebar {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     header, footer {
           padding: 1% 4%;
     }
}
/* 공통 */
#content {
     background-color:'#bbdefb';
}
#sidebar {
     background-color:'#bbdefb';
}
header, #content, #middle, #sidebar {
     margin-bottom: 5px;
  
}
#pagewrap, header, #content, #middle, #sidebar, footer {
     border: solid 1px #ccc;
}
#textid{
  text-align: center;
  font-size: xx-large;
  color: black;
}
#loginbtn{
  text-align: right;
  font-size: medium;
}
#joinbtn{
  text-align: right;
  font-size: medium;
}
#logo{
  text-align: left;
  font-size: medium;
}
#wegohome{
text-align: center;
}
</style>