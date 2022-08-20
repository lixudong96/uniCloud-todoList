'use strict';

const appId = 'wx57034c482655bdc5'
const secret = '3e1f18470227538fe6dc6f328b5782c0'

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const {
		code,
		avatarUrl,
		gender,
		nickName
	} = event
	const URL =
		`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
	const requestOptions = {
		method: 'GET',
		dataType: 'json'
	}
	const res = await uniCloud.httpclient.request(URL, requestOptions)
	console.log('res', res)

	//返回数据给客户端
	return event
};
