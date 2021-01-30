'use strict';
const db = uniCloud.database()
const collection = db.collection('sign-in')
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const action = event.action
	const data = event.data
	switch(action){
		case 'add':   //签到
		     var res = await collection.add(data)
			 return {
				 code:200,
				 data:null,
				 msg:'签到成功'
			 }
	    break;
		case 'get':  //获取用户签到信息
		     var res = await collection.where({
				 ssuserid:data.ssuserid,
				 year:data.year,
				 month:data.month
			 }).get()
			 var {total} = await collection.where({
				 ssuserid:data.ssuserid,
			 }).count()
			 return {
				 code:200,
				 data:res,
				 msg:'查询成功',
				 total
			 }
	    break;
	}
	return event
	//返回数据给客户端
};

