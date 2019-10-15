; + function(window, undefined) {
	// window.basePath = "https://api.nimeiyo.com"
	window.basePath = "http://127.0.0.1:8081"
	// window.basePath = "http://192.168.1.113"
	window.project = "/settingLocal"
	
	
	window.app_request = function(url, data, type, success = (data) => {
			top.App.$notify({
				title: "请求提示",
				type: "success",
				message: '请求成功',
				position: 'top-left',
				duration: 1000
			})
		}, error = (xhr, type, errorThrown) => top.App.$notify({
			title: "网络错误",
			type: "error",
			message: xhr.response,
			position: 'top-left'
		}), dataType = 'json', contentType =
		'application/json', beforeSend = (XMLHttpRequest) => XMLHttpRequest.setRequestHeader('Authorization', window.localStorage
			.getItem(
				'token'))
	) {
		return $.ajax({
			url: url,
			data: data, //服务器返回json格式数据
			type: type, //HTTP请求类型
			timeout: 60000, //超时时间设置为10秒；
			contentType: contentType,
			success: function(data) {
				if (data.status !== 200) {
					top.App.$notify({
						title: "错误",
						type: "error",
						message: data.message
					})
					// appAlert({title:"错误", type:"error", description:data.message})
					return
				}
				success(data.data)
			},
			beforeSend: beforeSend,
			error: function(xhr, type, errorThrown) {
				error(xhr, type, errorThrown)
			}
		});
	}

	window.app_get = (url, data, success) => {
		return app_request(url, data, 'GET', success)
	}

	window.app_post = (url, data, success) => {
		return app_request(url, data, 'POST', success)
	}
	window.appAlert = function({
		title,
		type,
		description,
		duration,
		closeText = '关闭',
		closable = true,
		center = false
	}) {
		window.App.messages.push({
			title: `${type} 时间:${dataFormat()}`,
			type: type,
			description: description,
			duration: duration,
			closeText: closeText,
			closable: closable,
			center: center
		})
	}

	window.urls = {
		story_url:`${basePath}/story`,
		story_list_url:`${basePath}/story/list`,
		edit_path:`${project}/index2.html`
	}

	window.dataFormat = (time = new Date(), formart = 'yyyy-MM-dd HH:mm:ss') => {
		return formart.replace('yyyy', time.getFullYear()).replace('MM', time.getMonth())
			.replace('dd', time.getDate()).replace("HH", time.getHours()).replace("mm", time.getMinutes()).replace("ss", time.getSeconds())

	}

	window.GetQueryString = (name) => {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return decodeURIComponent(r[2]);
		}
		return null;
	}
	window.router = (url, window = window) => {
		window.location.href = url
	}
	window.iv = "tEJksWqSUzAeAN2Q"
	window.key = "hbE0MmHbhdE3wBav"
}(window, undefined)
