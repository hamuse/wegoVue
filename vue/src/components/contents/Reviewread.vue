<template>
<div>
 <div id="reviewImg">사진</div>
      <span id="reviewImg2">사진</span>
      <span id="reviewImg2">사진</span>
      <span id="reviewImg2">사진</span>
     <fieldset id="reviewRead">
        <legend>리뷰</legend>
           
                    <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
<div id="listbtn">
<button @click="list">목록가기</button>
</div>
</div>
</fieldset>
</div>
</template>
<script>
export default{
	methods:{
		list(){
			this.$router.push({path:'/review'})
		}
	}
}
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

.checked {
  color: orange;
}
#rating{
  float: left;
}
#reviewImg{
width: 135px;
        height: 155.7px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#reviewImg2{
width: 135px;
        height: 155.7px;
        padding: 20px;
        margin-left:  5px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#reviewRead{
  width: 677.5px;
        height: 265px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#listbtn{
	margin-top: 260%;
	float: right;
}

</style>