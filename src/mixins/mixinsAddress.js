import wepy from 'wepy';

export default class addressMinxins extends wepy.mixin{
    data = {
        address:'',
        name:'',
        longitude:'',
        latitude:''

    }

    methods = {
        minxinsTap(){
            wepy.chooseLocation()
            .then((res) => {
                console.log('调用授权成功',res);
                this.address = res.address;
                this.name = res.name || "未知地名";
                this.longitude = res.longitude;
                this.latitude = res.latitude;
                this.$apply();
            })
            .catch((err) => {
                console.log('发生错误');
                wepy.getSetting()
                .then((res) => {
                    let status = res.authSetting;
                    if(!status['scope.userLocation']){
                        wx.showModal({
                          title: '是否授权当前位置', //提示的标题,
                          content: '需要获取您的地址位置，请确认授权,否则地图功能讲无法使用', //提示的内容,
                          showCancel: true, //是否显示取消按钮,
                          cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
                          cancelColor: '#000000', //取消按钮的文字颜色,
                          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                          confirmColor: '#3CC51F', //确定按钮的文字颜色,
                          success:function(res){
                            if(res.confirm){
                                wepy.openSetting()
                                .then((res) => {
                                    if(res.authSetting["scope.userLocation"] === true){
                                        wepy.showToast({
                                          title: '授权成功', //提示的内容,
                                          icon: 'success', //图标,
                                          duration: 2000, //延迟时间,
                                        });
                                        wepy.chooseLocation()
                                        .then((res) => {
                                            console.log('调用授权成功',res);
                                            this.address = res.address;
                                            this.name = res.name;
                                            this.longitude = res.longitude;
                                            this.latitude = res.latitude;
                                        })

                                    }else{
                                        wepy.showToast({
                                            title: '授权失败', //提示的内容,
                                            icon: 'success', //图标,
                                            duration: 2000, //延迟时间,
                                        });
                                    }
                                })
                                .catch((err) => {
                                    console.log('授权发生错误');
                                })
                                
                            }
                          },
                          fail:function(){
                            wepy.showToast({
                                title: '调用授权窗口失败', //提示的内容,
                                icon: 'fail', //图标,
                                duration: 2000, //延迟时间,
                            });
                          }
                        })
                      
                    }

                })
                .catch((err) => {
                    wepy.showToast({
                      title: '调用授权失败', //提示的内容,
                      icon: 'success', //图标,
                      duration: 1000, //延迟时间,
                    });
                })
                
            })
        }
    }
}