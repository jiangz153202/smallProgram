import wepy from 'wepy';
class Wechat {

    static getUserInfo(){
        return new Promise(async (resolve,reject)=> {
            resolve(wepy.getUserInfo())
        })
    }
    /**
     * 发起网络请求
     * @param {string} url  
     * @param {object} params 
     * @return {Promise} 
     */
    static request(url, params, method = "GET", type = "json") {
        console.log("向后端传递的参数", params);
        return new Promise((resolve, reject) => {
            let opts = {
                url: url,
                data: Object.assign({}, params),
                method: method,
                header: { 'Content-Type': type }
            }
            console.log("请求的URL", opts.url);
            resolve(wepy.request(opts));
        });
    };

    static getCryptoData(){
        return new Promise(async (resolve,reject) => {
            try {
               
                let data = await wepy.login()
                let code = data.code;
                console.log('login接口获取的code',code);
                console.log('getUserInfo接口',data);
                let obj = {
                    js_code:code
                }
                resolve(obj);
            } catch (error) {
                reject(error);
            }
        })
    }

    /**
     * 从后端获取openid
     * @param { object } params
     */
    static getOpenid(params){
        let url = 'http://localhost:3000/openid';
        return this.request(url,params,"POST","application/x-www-form-urlencoded");
    }
}

module.exports = Wechat;