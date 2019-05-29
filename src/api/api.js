import wepy from 'wepy';
import apiConfigList from './api.config';


export default {
    request(data, tryagain){
        return new Promise((resolve,reject) => {
            wepy.request(data).then(res => {
                console.log('输出',res);
                if(res.statusCode == '401'){
                    //用户没有登录
                    console.log('用户没有登录',data);
                    // let result = this.getTokenByOpenId();
                    // wepy.setStorage({
                    //   key: 'access_grant',
                    //   value: result
                    // });
                    // debugger;
                    // return  this.request(data,true); //重新加载
                    
                }
                resolve(res.data)
            })
            .catch(reject);
        })
    },
    getAddressList(url = apiConfigList.User.addressListUrl){
        let data = {
            url:url
        }
        return this.request(data);
    },
    getTokenByOpenId(url = apiConfigList.Login.openIdLoginUrl){
        let data = {
            url:url,
            data:{
                openid: 'oMNIe1dqHQeip41D2fEL5iAsdWPU' 
            },
            method: 'POST',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        }
        return this.request(data);
    }
}