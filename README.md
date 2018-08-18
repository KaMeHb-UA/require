# Require — async CommonJS-like module system for browser environment
## Get Started
Just connect it to your page like this:
```html
<sctipt src="https://cdn.jsdelivr.net/gh/KaMeHb-UA/require@{TARGET_VERSION}/next.min.js"></script>
```
It will create `require`, `__dirname` and `__filename` constants in global scope (`window`)
## API
```javascript
require(url:String):Promise<any>
```
`url` can be relative.
