var request = require("request")

module.exports = function getAPI(apiMethod, options, callback) {
	var baseUrl = "https://api.twitch.tv/kraken/"

	if (typeof options === "function") {
		callback = options
		options = null
	}

	options = options || {}

	baseUrl = options.baseUrl || baseUrl

	var headers = {
		"User-Agent": options.ua || "node.js twitch.tv by mediremi",
		"Accept": "application/vnd.twitchtv.v" + (options.apiVersion || "2") + "+json",
		"Client-ID": options.clientID || ""
	}

	request({
		url: baseUrl + apiMethod,
		headers: headers
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			// TODO: What if JSON.parse throws an error?
			callback(null, JSON.parse(body))
		} else {
			callback(error, null)
		}
	})
}
