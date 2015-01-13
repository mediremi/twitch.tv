# twitch.tv
node.js lib for Twitch.tv's REST API
---

`npm install twitch.tv`

## Example

```js
var twitch = require("twitch.tv")

twitch("streams", function(res) {
  console.log(res)
})
```

## API

### `twitch(apiMethod[, options], callback)`

Default options:
```js
{
  "User-Agent": options.ua || "node.js twitch.tv by mediremi",
  "Accept": "application/vnd.twitchtv.v" + (options.apiVersion || "2") + "+json",
  "Client-ID": options.clientID || ""
}
```
