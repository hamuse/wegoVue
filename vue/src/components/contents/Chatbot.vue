<template>
<div>
	<fieldset id="chatBot">
        <legend>챗봇</legend>
        <div id="chatBtn">
           <a href="#">예약확인</a><br><br>
             <a href="#">예약취소</a><br><br>
             <a href="#">교통편검색</a><br><br>
             <a href="#">QnA</a><br><br>
        </div>
          <span id="chatting">챗봇채팅화면</span>
          
            <input id ="chatSerch" type="text" name="chatSerch1" placeholder="채팅을 입력해주세요" >
             <input type="submit" value="ENTER" style="float: right;margin-right: 16.5px;">
          
            
        </fieldset>
</div>
</template>
<script>
</script>
<style scoped>
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


#chatBot{
  width: 677.5px;
        height: 495px;
        padding: 20px;
        margin-bottom: 2px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#chatting{
    width: 400px;
        height: 200px;
        padding: 20px;
        margin-bottom: 2px;
        margin-top: 20px;
        float: right;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#chatBtn{
  width: 150px;
        height: 200px;
        padding: 20px;
        margin-bottom: 2px;
        margin-top: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#chatSerch{
   width: 600px;
        height: 1px;
        padding: 20px;
        margin-bottom: 2px;
         margin-top: 60px;
        float: center;
        border: 1px solid #bcbcbc;
        text-align: center;
}
</style>