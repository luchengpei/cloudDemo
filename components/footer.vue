<template>
	<view class="padding-tb-xl margin-top-xl">
		<view class="cu-bar tabbar bg-white foot">
			<view class="action" :class="[isActive.home ? 'text-blue' : 'text-gray']" @click="goHome()">
				<view class="cuIcon-home"></view> 首页
			</view>
			<view class="action" :class="[isActive.video ? 'text-blue' : 'text-gray']" @click="goVideo()">
				<view class="cuIcon-video"></view> 视频
			</view>
			<view class="action text-gray add-action" @click="goAdd()">
				<button class="cu-btn cuIcon-add bg-gradual-blue shadow"></button>
				发布
			</view>
			<view class="action" :class="[isActive.friend ? 'text-blue' : 'text-gray']" @click="goFriend()">
				<view class="cuIcon-friend" ></view>
				签到
			</view>
			<view class="action" :class="[isActive.user ? 'text-blue' : 'text-gray']" @click="goUser()">
				<view class="cuIcon-my" ></view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tab:''
		},
		mounted() {
			if(this.tab == 'home'){
				this.isActive.home = true
				this.isActive.user = false
				this.isActive.video = false
				this.isActive.friend = false
			}else if(this.tab == 'user'){
				this.isActive.home = false
				this.isActive.user = true
				this.isActive.video = false
				this.isActive.friend = false
			}else if(this.tab == 'video'){
				this.isActive.home = false
				this.isActive.user = false
				this.isActive.video = true
				this.isActive.friend = false
			}else if(this.tab == 'friend'){
				this.isActive.home = false
				this.isActive.user = false
				this.isActive.video = false
				this.isActive.friend = true
			}
		},
		data() {
			return {
				isActive:{
					home:false,
					user:false,
					video:false,
					friend:false
				}
			};
		},
		methods:{
			goVideo(){
				uni.redirectTo({
					url:"/pages/video/index"
				})
			},
			goFriend(){
				uni.redirectTo({
					url:"/pages/friend/index"
				})
			},
			goHome:function(){
				// console.log("goHome")
				uni.redirectTo({
					url:"/pages/index/index"
				})
			},
			goAdd:function(){
				// console.log("add")
				uni.redirectTo({
					url:"/bbs/topic/add",
					fail:function(e){
						console.log(e)
					} 
				}) 
			},
			goUser:function(){
				uni.redirectTo({
					url:"/pages/user/index"
				})				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
