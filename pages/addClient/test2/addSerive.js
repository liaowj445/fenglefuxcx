// pages/addClient/test2/addSerive.js 
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    flag: false,
    selectType: 'serveType',
    selectMode: 'selectMode',
    foodType: 'foodType',
    selectShow: false,
    selectShow1: false,
    selectShow2: false,
    index: 0,
    index1: 0,
    index2: 0,
    serveType: [{ name: '没有选中任何项' }],//服务类型 
    serveMode: [{ text: '没有选中任何项' }],//服务模式 
    foodStyle: [{ text: '没有选中任何项' }],//菜式 
    serveTypeName: '',//服务类型 
    serveModeName: '',//服务模式 
    foodStyleName: '',//菜式 
    serveAddress: '',//服务地址 
    homeArea: '',//家庭面积 
    taste: '',//口味 
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {

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

  // 点击下拉显示框 
  selectTap(e) {
    var state = e.currentTarget.dataset.tap;
    var _this = this;
    if (state == 'serveType') {
      //初始化服务类型 
      wx.request({
        url: 'https://localhost:8080/flf/app/serve/all',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            serveType: res.data.data,
            serveTypeName: res.data.data[0].name,
          })
        }
      })
      this.setData({
        selectShow: !this.data.selectShow,
      });
    } else if (state == 'selectMode') {
      //初始化服务模式 
      wx.request({
        url: 'https://localhost:8080/flf/app/options/fwms',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            serveMode: res.data.data,
            serveModeName: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow1: !this.data.selectShow1,
      });
    } else if (state == 'foodType') {
      //初始化菜式 
      wx.request({
        url: 'https://localhost:8080/flf/app/options/sccx',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            foodStyle: res.data.data,
            foodStyleName: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow2: !this.data.selectShow2,
      });
    }
  },
  // 点击下拉列表 
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow,
      serveTypeName: e.currentTarget.id, //服务类型 
    });
    // console.log(e.currentTarget.id) 
    this.verify();
  },

  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index1: Index,
      selectShow1: !this.data.selectShow1,
      serveModeName: e.currentTarget.id, //服务模式ID 
    });
    // console.log(e.currentTarget.id) 
    this.verify();
  },

  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index2: Index,
      selectShow2: !this.data.selectShow2,
      foodStyleName: e.currentTarget.id, //菜式 
    });
    // console.log(e.currentTarget.id) 
    this.verify();
  },

  serveAddress: function (e) {
    this.setData({
      serveAddress: e.detail.value
    })
    this.verify();
  },

  homeArea: function (e) {
    this.setData({
      homeArea: e.detail.value
    })
    this.verify();
  },

  taste: function (e) {
    this.setData({
      taste: e.detail.value
    })
    this.verify();
  },

  verify: function () {
    if (this.data.serveTypeName != '' && this.data.serveTypeName != null &&
      this.data.serveAddress != '' && this.data.serveAddress != null &&
      this.data.serveModeName != '' && this.data.serveModeName != null &&
      this.data.homeArea != '' && this.data.homeArea != null) {
      this.setData({
        flag: true,
      });
    }
  },

  //下一步 
  next: function (e) {
    wx.setStorageSync('serve_serveTypeName', this.data.serveTypeName);//存入本地缓存 
    wx.setStorageSync('serve_serveModeName', this.data.serveModeName);
    wx.setStorageSync('serve_foodStyleName', this.data.foodStyleName);
    wx.setStorageSync('serve_serveAddress', this.data.serveAddress);
    wx.setStorageSync('serve_homeArea', this.data.homeArea);
    wx.setStorageSync('serve_taste', this.data.taste);
    wx.navigateTo({
      url: '../test3/clientReq',
    })
  }
})