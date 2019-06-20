// pages/contracts/contract.js

var app = getApp()

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      user: app.globalData.user
    })
    console.log(that.data.user);
    wx.request({
      url: 'https://localhost:8080/flf/app/getContract',
      method: 'POST',
      data: {
        cardName: '',
        user: that.data.user
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var list = res.data.list;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 页面的初始数据
   */
  data: {
    list: '',
    word: '',
    message: '',
    serachName: '',
    user: null
  },
  serach:function(e){
    this.setData({
      serachName:e.detail.value
    })
  },
  houduanButton1: function () {
    var that = this;
    // const query = wx.createSelectorQuery();
    // var serach = query.select('#serach').fields({ properties: ['serach']});
    wx.request({
      url: 'https://localhost:8080/flf/app/getContract',
      method: 'POST',
      data:{
        cardName: that.data.serachName,
        user: that.data.user
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var list = res.data.list;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  },
  insertContract: function(){
    wx.navigateTo({
      url: '../insertContracts/step1/insertContract',
    })
  }
})