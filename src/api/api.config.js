const BASE_URL = 'http://mcapi.dddingjiu.com/';
const AUTH_URL = 'http://wm.dddingjiu.com/'; //登录验证接口
module.exports = {
    Index:{
        basicInfoUrl : BASE_URL + 'api/index'
    },
    User:{
        userInfoUrl : BASE_URL + 'api/user',
        addressListUrl:BASE_URL + 'api/user/listAddresses',
        addressEditUrl: BASE_URL + 'api/user/editAddress',
    },
    Login:{
        openIdLoginUrl : BASE_URL + 'authentication/openid',
        userInfoByAccessUrl : BASE_URL + 'api/user/info',
    },
    Map:{
        getPoisUrl : BASE_URL + 'api/getPois',
    }
}