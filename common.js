(()=>{const require=(()=>{const require=exports=>{exports=(url=>{return{url,xhr:new XMLHttpRequest()}})(exports);exports.xhr.open('GET',exports.url,false);exports.xhr.send();if(exports.xhr.status!=200)throw new Error(`Cannot require module ${exports.url}: ${exports.xhr.status} (${exports.xhr.statusText})`);else{try{let module={exports:{}};eval(`(({__filename,__dirname,exports})=>{${exports.xhr.responseText}})({__filename:${JSON.stringify(exports.url)},__dirname:${JSON.stringify((a=>{a.pop();return a.join('/')})(exports.url.split('/')))},exports:new Proxy(module.exports,{})})`);return module.exports}catch(e){throw e}}};return exports=>{exports=(url=>{return{url,xhr:new XMLHttpRequest()}})(exports);return new Promise((__filename,__dirname)=>{exports.xhr.open('GET',exports.url,true);exports.xhr.send();exports.xhr.onreadystatechange=()=>{if(exports.xhr.readyState!=4)return;if(exports.xhr.status!=200)__dirname(new Error(`Cannot require module ${exports.url}: ${exports.xhr.status} (${exports.xhr.statusText})`));else{try{let module={exports:{}};eval(`(({__filename,__dirname,exports})=>{${exports.xhr.responseText}})({__filename:${JSON.stringify(exports.url)},__dirname:${JSON.stringify((a=>{a.pop();return a.join('/')})(exports.url.split('/')))},exports:new Proxy(module.exports,{})})`);__filename(module.exports)}catch(e){__dirname(e)}}}})}})(),__filename=(a=>{return `${a[a.length-3]}://${a[a.length-2]}`})((new Error('')).stack.split(/(\w+):\/\/(\S+):\d+:\d+/)),__dirname=(a=>{a.pop();return a.join('/')})(__filename.split('/'));(()=>{
    // A nonstandard implementation of the require function is available, which returns Promise object, which resolves into exported object of the specified module.
    // Example: require('https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js').then($=>{console.log($('body'))})
    // Synchronous implementation of the same function is used inside the modules (look require in Node.js (CommonJS))
    require('common_module.js').then(module => {
        alert('I have load selected module! Check the console')
        console.log(module)
    })
})()})()
