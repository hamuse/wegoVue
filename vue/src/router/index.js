import Vue from 'vue'
import Router from 'vue-router'
import Hotel from '@/components/contents/Hotel.vue'
import Restaurant from '@/components/contents/Restaurant.vue'
import Review from '@/components/contents/Review.vue'
import Reviewread from '@/components/contents/Reviewread.vue'
import Reviewwrite from '@/components/contents/Reviewwrite.vue'
import Tourism from '@/components/contents/Tourism.vue'
import Traffic from '@/components/contents/Traffic.vue'
import Chatbot from '@/components/contents/Chatbot.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
		{path:'/hotel', name:'hotel', component: Hotel},
		{path:'/restaurant', name:'restaurant', component: Restaurant},
		{path:'/review', name:'review', component: Review},
		{path:'/reviewread', name:'reviewread', component: Reviewread},
		{path:'/reviewwrite', name:'reviewwrite', component: Reviewwrite},
		{path:'/tourism', name:'tourism', component: Tourism}, 
		{path:'/traffic', name:'traffic', component: Traffic},
		{path:'/chatbot', name:'chatbot', component: Chatbot}  
	]
})