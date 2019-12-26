<template>
<div><div class="container">
<div class="header">
	<select name="select" id="select" >
		<option value="option1">서울</option>
		<option value="option2">경기</option>
		<option value="option3">대구</option>
		<option value="option4">부산</option>
	</select>
	<input class="form-control mr-sm-2" type="text" placeholder="어디로 떠날까요?" aria-label="Search" size="100">
<div class="calendar-container"><span class="time-tab"><label class="in">체크인</label><input type="text" class="focus-input show-hightlight" readonly="" value="12월 8일 (일)" data-key="2019/12/08"></span><span class="nights"><span>   1박   </span></span><span class="time-tab"><label class="out">체크아웃</label><input type="text" class="focus-input show-hightlight out-time" readonly="" value="12월 9일 (월)" data-key="2019/12/09">
<span class="time-tab"><label class="in">숙박인원</label><input type="text" class="focus-input show-hightlight" readonly="" value="객실 1개, 2명" data-key="2019/12/08"></span>
	<button class="btn" type="submit" style="height:100%">검색</button></span></div>

</div>
<div class="side">
	<section><strong>호텔 유형</strong><ul><li><input type="checkbox" id="grade_0" name="grade[]" class="inp_chk" value="STAR5"><label for="grade_0" class="label_chk">5성급</label></li><li><input type="checkbox" id="grade_1" name="grade[]" class="inp_chk" value="S1"><label for="grade_1" class="label_chk">특1급</label></li><li><input type="checkbox" id="grade_2" name="grade[]" class="inp_chk" value="S"><label for="grade_2" class="label_chk">특급</label></li></ul></section>
	<section><strong>베드 타입</strong><div class="room_type"><p><input type="checkbox" class="inp_room_01" name="bed_type[0]" id="bed_type_S" value="S"><label for="bed_type_S" class="label_room_01">싱글</label></p><p><input type="checkbox" class="inp_room_02" name="bed_type[1]" id="bed_type_D" value="D"><label for="bed_type_D" class="label_room_02">더블</label></p><p><input type="checkbox" class="inp_room_03" name="bed_type[2]" id="bed_type_T" value="T"><label for="bed_type_T" class="label_room_03">트윈</label></p><p><input type="checkbox" class="inp_room_04" name="bed_type[3]" id="bed_type_O" value="O"><label for="bed_type_O" class="label_room_04">온돌</label></p></div></section>
<section><strong>공용시설</strong>
<ul class="hide_type half">
	<li><input type="checkbox" id="tmino_0" name="tmino[]" class="inp_chk" value="41"><label for="tmino_0" class="label_chk">피트니스</label></li>
	<li><input type="checkbox" id="tmino_1" name="tmino[]" class="inp_chk" value="42"><label for="tmino_1" class="label_chk">수영장</label></li>
	<li><input type="checkbox" id="tmino_2" name="tmino[]" class="inp_chk" value="44"><label for="tmino_2" class="label_chk">사우나</label></li>
	<li><input type="checkbox" id="tmino_3" name="tmino[]" class="inp_chk" value="45"><label for="tmino_3" class="label_chk">골프장</label></li>
	<li><input type="checkbox" id="tmino_4" name="tmino[]" class="inp_chk" value="46"><label for="tmino_4" class="label_chk">레스토랑</label></li>
	<li><input type="checkbox" id="tmino_5" name="tmino[]" class="inp_chk" value="112"><label for="tmino_5" class="label_chk">엘레베이터</label></li>
	</ul></section>
<section><strong>객실 내 시설</strong>
<ul class="hide_type half">
	<li><input type="checkbox" id="tmino_24" name="tmino[]" class="inp_chk" value="43"><label for="tmino_24" class="label_chk">객실스파</label></li>
	<li><input type="checkbox" id="tmino_25" name="tmino[]" class="inp_chk" value="50"><label for="tmino_25" class="label_chk">미니바</label></li>
	<li><input type="checkbox" id="tmino_26" name="tmino[]" class="inp_chk" value="47"><label for="tmino_26" class="label_chk">와이파이</label></li>
	<li><input type="checkbox" id="tmino_27" name="tmino[]" class="inp_chk" value="49"><label for="tmino_27" class="label_chk">욕실용품</label></li>
	<li><input type="checkbox" id="tmino_28" name="tmino[]" class="inp_chk" value="197"><label for="tmino_28" class="label_chk">TV</label></li>
	<li><input type="checkbox" id="tmino_29" name="tmino[]" class="inp_chk" value="198"><label for="tmino_29" class="label_chk">에어컨</label></li>
	<li><input type="checkbox" id="tmino_30" name="tmino[]" class="inp_chk" value="199"><label for="tmino_30" class="label_chk">냉장고</label></li>
	<li><input type="checkbox" id="tmino_31" name="tmino[]" class="inp_chk" value="200"><label for="tmino_31" class="label_chk">객실샤워실</label></li>
	<li><input type="checkbox" id="tmino_32" name="tmino[]" class="inp_chk" value="201"><label for="tmino_32" class="label_chk">욕조</label></li>
	</ul></section>

	<section><strong>기타</strong><ul class="hide_type half">
		<li><input type="checkbox" id="tmino_36" name="tmino[]" class="inp_chk" value="54"><label for="tmino_36" class="label_chk">반려견동반</label></li>
		<li><input type="checkbox" id="tmino_37" name="tmino[]" class="inp_chk" value="51"><label for="tmino_37" class="label_chk">조식포함</label></li>
		<li><input type="checkbox" id="tmino_38" name="tmino[]" class="inp_chk" value="52"><label for="tmino_38" class="label_chk">객실내흡연</label></li>
		<li><input type="checkbox" id="tmino_39" name="tmino[]" class="inp_chk" value="53"><label for="tmino_39" class="label_chk">발렛파킹</label></li>
		<li><input type="checkbox" id="tmino_40" name="tmino[]" class="inp_chk" value="134"><label for="tmino_40" class="label_chk">금연</label></li>
		<li><input type="checkbox" id="tmino_41" name="tmino[]" class="inp_chk" value="55"><label for="tmino_41" class="label_chk">객실내취사</label></li>
		<li><input type="checkbox" id="tmino_42" name="tmino[]" class="inp_chk" value="131"><label for="tmino_42" class="label_chk">프린터사용</label></li></ul></section>

</div>
<div class="main">
<div id="main1">

		<a href="#" style="">A 호텔</a><br><br><br>
		★4.8<br>
		호텔 소개<br>
		59%~<br>
		132,000won<br>

</div>
<div id="main2">

		<a href="#" style="">B 호텔</a><br><br><br>
		★4.6<br>
		호텔 소개<br>
		47%~<br>
		116,000won<br>
</div>
<div id="main3">

	<h1><a href="#" style="">C 호텔</a><br><br><br></h1>
		★4.2<br>
		호텔 소개<br>
		62%~<br>
		108,000won<br>
</div>
</div>

</div>
</div>
</template>
<script>
</script>
<style scoped>
.container{
display: grid;
grid-template-columns: 20% 1fr;
grid-template-rows: 50px 909px 50px;
height: 100%;
border: 1px solid #bcbcbc; 
grid-template-areas: 
"header header"
"side main"
"footer footer"

}
.header{
grid-area: header;
margin: 0 auto;
border: 1px solid #bcbcbc; 
}
.side{
grid-area: side;
border: 1px solid #bcbcbc; 
}
.main{
grid-area: main;
display: grid;
grid-template-rows: 303px 303px 303px;
border: 1px solid #bcbcbc; 
}

#main1 {
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEPYMboeEyilqkvLgtrprHHQBCfg2IzOB2W7KNTnsn403MUKN&s');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
	font-weight: bold;
	text-align: center;
background-color: rgba(255);
/*         opacity: 0.9; */
border: 1px solid #bcbcbc; 

}
#main2 {
background-image: url('https://secure.cdn5.wdpromedia.com/resize/mwImage/1/480/360/90/wdpromedia.disney.go.com/media/wdpro-hkdl-assets/prod/ko-intl/system/images/hkdl-hotel-disneys-hollywood-hotel-overview-hero-01.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;	
	font-weight: bold;
	text-align: center;
background-color: #ffffff;
opacity: 0.9;
border: 1px solid #bcbcbc; 
}
#main3 {
	background-image: url('https://www.hanjinkal.co.kr/common/images/icon/tour_roll_img4.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
font-weight: bold;
	text-align: center;
background-color: #ffffff;
opacity: 0.9;
border: 1px solid #bcbcbc; 
}
</style>