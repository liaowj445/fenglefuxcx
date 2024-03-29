//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userName:'',
    pwd:'',
    code:'',
    openid:'',
    sessionkey:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  test: function () {
    console.log('测试方法')
  },
  login: function () {
    this.test();
    // wx.switchTab({
    //   url: '../home/home',
    // });
    console.log('code值' + this.data.code);
    // wx.request({
    //   url: 'https://api.weixin.qq.com/sns/jscode2session'
    //     + '?appid=wx35e87f3059bc3171'
    //     + '&secret=947e43818c1e29bf7e77b57e00e81813'
    //     + '&js_code=' + this.data.code
    //     + '&grant_type=authorization_code',
    //   // data:{
    //   //   appid:'wx35e87f3059bc3171',
    //   //   secret:'947e43818c1e29bf7e77b57e00e81813',
    //   //   js_code:this.data.code,
    //   //   grant_type:'authorization_code'
    //   // },
    //   method: 'POST',
    //   success: function (res) {
    //     console.log(res);
    //     this.setData({
    //       openid: res.data.openid,
    //       sessionkey: res.data.sessionkey
    //     })
    //   }
    // });
    wx.request({
      url: 'https://localhost:8080/flf/app/AppLogin',
      method: 'POST',
      data: {
        loginId: this.data.userName,
        password: this.data.pwd
      },
      header: {
        'content-type': 'application/json',
        'Cookie': ''
      },
      success: res => {
        console.log(res.data)//打印到控制台
        var msg = res.data;
        if (msg == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else if(msg.success){
          wx.setStorageSync('sessionId', msg.token);
          app.globalData.user = msg.user
          console.log(app.globalData.user)
          wx.showToast({
            title: msg.msg,
            icon: '',
            duration: 2000
          });
          wx.switchTab({
            url: '../home/home',
          });
        } else{
          wx.showToast({
            title: msg.msg,
            icon: '',
            duration: 2000
          });
        }
      }
    })
  },

  onLoad: function () {
    wx.login({
      success: res => {
        console.log(res);
        this.setData({
          code: res.code
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getUser: function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  getPwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  }
})
