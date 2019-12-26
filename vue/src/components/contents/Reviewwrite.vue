<template>
<div>
   <div id="reviewContent">
        <fieldset>
        <legend>리뷰</legend>
            <textarea name="info" id="review" placeholder="리뷰를 입력해주세요" cols="30" rows="10"></textarea>
			<span id="imgupload" style="height: 80px; border: solid 2px #ccc; " >사진등록</span><br/>
            <button style="float: right; margin-right: 7%;">사진업로드</button><br/><br/>
                    <div id="rating">    
		<span class="fa fa-star checked">*</span>
	<span class="fa fa-star checked">*</span>
	<span class="fa fa-star checked">*</span>
	<span class="fa fa-star">*</span>
	<span class="fa fa-star">*</span>
	</div>
        </fieldset>

        <div class="btnfield" style="text-align: center">
            <input type="submit" @click="submit" value="저장">
        </div>
 
</div>	
</div>
</template>
<script>
export default{
	methods:{
		submit(){
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
 #review {
        width: 480px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
      }
      #imgupload {
        width: 135px;
        height: 155.7px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
      }
#reviewContent{
  margin-top: 15%;
}

.checked {
  color: orange;
}
#rating{
  float: left;
}
</style>