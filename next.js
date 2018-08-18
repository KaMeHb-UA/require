(() => {
    'use strict';
    function add(name, value){
        Object.defineProperty(window, name, {
            writable: false,
            configurable: false,
            enumerable: true,
            value
        })
    }
    const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor,
        absolutePath = /^(\w+):\/\//,
        __filename = (_ => {
            return `${_[_.length-3]}://${_[_.length-2]}`
        })((new Error('')).stack.split(/(\w+):\/\/(\S+):\d+:\d+/)),
        __dirname = (fname => {
            fname.pop();
            return fname.join('/')
        })(__filename.split('/'));
    function httpGet(url){
        var xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) reject(new Error(`Cannot get requested module from ${url}. Error ${xhr.status}: ${xhr.statusText}`)); else resolve(xhr.responseText);
            };
            xhr.send()
        })
    }
    async function require(url){
        var script,
            dir = url.split('/'),
            baseDir = this.constructor === String ? `${this}` : __dirname;
        dir.pop(); // removes last element (filename)
        try{
            script = await httpGet(absolutePath.test(url) ? url : `${baseDir}/${url}`);
        } catch(e){
            console.warn('Download error [[Need to handle next error]]:');
            throw e
        }
        return await (new AsyncFunction(`
            const [__filename,__dirname]=${JSON.stringify([
                    url,
                    dir.join('/')
                ])}, module = {
                    exports: {},
                },
                exports = new Proxy(module.exports, {}),
                require = url => window.require.apply(__dirname, [url]);
            try{
                await(async()=>{\n${script}\n})();
            } catch(e){
                console.warn('Eval error [[Need to handle next error]]:');
                throw e
            }
            return module.exports
        `))();
    }
    add('require', require);
    add('__filename', __filename);
    add('__dirname', __dirname);
})();
