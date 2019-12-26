<template>
<div id="reviewRead">
         <h1>Review</h1>
        
          <div id="review"><router-link to="/reviewread">Review1</router-link>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div>
          </div>
          <span id="review2"><a href="#">Review2</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
         <span id="review2"><a href="#">Review3</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
         <span id="review2"><a href="#">Review4</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
            <!-- <textarea name="info" id="review" placeholder="리뷰를 입력해주세요" cols="30" rows="10"></textarea><span id="imgupload" height: 80px; border: solid 2px #ccc; " >사진등록</span><br/> -->
 <div id="review"><a href="#">Review5</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div>
          </div>
          <span id="review2"><a href="#">Review6</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
         <span id="review2"><a href="#">Review7</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
         <span id="review2"><a href="#">Review8</a>
                              <div id="rating">    
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star checked">*</span>
<span class="fa fa-star">*</span>
<span class="fa fa-star">*</span>
</div></span>
<div class="pagination">
  <a id="aid" href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
<span><button id="reviewWrite" @click="reviewWrite">리뷰 쓰기</button></span>
</div>
</template>
<script>
export default{
	methods:{
		reviewWrite(){
			this.$router.push({path:'/reviewWrite'})
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
#reviewRead{
  margin-top: 2%;
}

.checked {
  color: orange;
}
#rating{
  float: left;
}
#review{
  width: 135px;
        height: 155.7px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}
#review2{
   width: 135px;
        height: 155.7px;
        padding: 20px;
        margin-left: 5px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
        text-align: center;
}

.pagination {
  display: inline-block;
   width: 70%; 

}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;

}
#reviewWrite{
  margin-left: 10%; 
}
#aid{
  margin-left: 30%;
}
</style>