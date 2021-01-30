<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">签到</block>
		</cu-custom>
		<un-login v-if="unLogin"></un-login>
		<view v-else>
			<Calendar :sendYear="toYear" :sendMonth="toMonth" :dataSource="signData" @dateChange="getData" @clickChange="clickSign" />
			<view class='count'>
				<text>截至目前，已坚持打卡</text>
				<view class='daynumber'>
					<text class='number'>{{sumCount}}</text>
					<text class='day'>天</text>
				</view>

				<view>{{toMonth}}月累积打卡<text class="monthSum">{{signData.length}}</text>天</view>
				<text>请再接再厉，继续努力!</text>
			</view>
		</view>
		<mt-footer tab="friend"></mt-footer>
	</view>
</template>

<script>
	import mtFooter from "../../components/footer.vue";
	import Calendar from '@/components/Calendar.vue'
	export default {
		components: {
			mtFooter,
			Calendar
		},
		data: function() {
			return {
				unLogin: true,
				ssuserid: "",
				sumCount: 0,
				toYear: new Date().getFullYear(),
				toMonth: new Date().getMonth() + 1,
				signData: [],
			}
		},
		onLoad(option) {
			//start 检测登录
			this.ssuserid = getApp().globalData.ssuserid;
			this.unLogin = getApp().globalData.unLogin;
			if (this.ssuserid == '') {
				return false;
			}
			//End 检测是否登录 
			this.getData(this.toYear+"-"+this.toMonth)
		},
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '测试小程序分享',
		      path: '/pages/friend/index'
		    }
		  },
		  onShareTimeline(res) {
		      return {
		        title: "测试小程序分享朋友圈", // 自定义标题 (default:当前小程序名称) // 自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG (default:当前小程序LOGO)
		        query: '/pages/friend/index', // 自定义页面路径中携带的参数 (default:当前页面路径携带的参数)
		        success:(res)=> {
		          console.log(res);
		        }
		      }
		  },
		methods: {
			clickSign(day) {
				console.log("在模版页签到了", day)
				let val = day.split('-')
				uniCloud.callFunction({
					name: 'sign_in',
					data: {
						action: 'add',
						data: {
							ssuserid: this.ssuserid,
							year: Number(val[0]),
							month: Number(val[1]),
							sign_in_date: day
						}
					},
					success: (res) => {
						this.getData(val[0]+"-"+val[1])
					}
				})
			},
			//获取当前用户该任务的签到信息
			getData(val) {
				this.toMonth = Number(val.split('-')[1])
				uniCloud.callFunction({
					name: 'sign_in',
					data: {
						action: 'get',
						data: {
							ssuserid: this.ssuserid,
							year: Number(val.split('-')[0]),
							month: Number(val.split('-')[1])
						}
					},
					success: (res) => {
						let list = res.result.data.data.map(date => date.sign_in_date)
						this.sumCount = res.result.total
						this.signData = list
					}
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.count .daynumber {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.count .daynumber .day {
		margin-top: 50rpx;
	}

	.count {
		margin: 20rpx;
		padding: 30rpx;
		display: flex;
		text-align: center;
		border-radius: 10px;
		flex-direction: column;
		justify-content: center;
		background-color: #fff;
		align-items: center;
	}

	.count .number {
		color: #fff;
		font-size: 60rpx;
		background-color: #94db98;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 20rpx;
	}

	.monthSum {
		color: red;
		font-size: 40rpx;
	}

	.count text {
		margin: 10rpx;
	}
</style>
