import axios from "axios";
import qs from "qs";
const FetchUtils = axios.create({
    baseURL:'https://api.chemm.com',
    timeout:60000
})

const request = FetchUtils.request;
FetchUtils.request = function(options){
  let abort;

  if (!options.cancelToken) {
    options.cancelToken = new axios.CancelToken(c => {
      abort = c;
    })
  }

  const callback = request.call(this, ...arguments);
  callback.abort = abort;

  return callback;
}

FetchUtils.init = function(options = {}){

    const {
        domain = 'api',
        token
    } = options;

    if (domain !== 'api'){
        this.defaults.baseURL = `http://${domain}.test.chemm.com/`;
    }

    this.interceptors.request.use(function (config) {

        // config.headers.wx = 'wx-wcjs';
        config.headers.token = token;
        config.headers.timestamp = Date.now();

        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
}

FetchUtils.jsonp = function(url, params = {}){
return new Promise((resolve, reject) => {
    const callbackName = `a${Date.now().toString(36)}`;
    window[callbackName] = function(res){
    resolve(res)
    delete window[callbackName]
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `${url}?${qs.stringify({
    ...params,
    callback: callbackName
    })}`;
    script.onload = function(){
    document.body.removeChild(script);
    }
    script.onerror = function(err){
    reject(err);
    }
    document.body.appendChild(script);
})
}
export default FetchUtils;