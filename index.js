var request = require("request")

var baseUrl = "https://api.twitch.tv/kraken/"

function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1)
}

function getAPI(apiMethod, options, callback) {
	if (typeof options === "function") {
		callback = options
		options = null
	}

	options = options || {}

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
			callback(null, JSON.parse(body))
		} else {
			callback(error, null)
		}
	})
}

exports = module.exports = getAPI

;["streams", "teams", "games/top"].forEach(function(apiMethod) {
	exports["get" + capitalize(apiMethod)] = getAPI.bind(null, apiMethod)
})
