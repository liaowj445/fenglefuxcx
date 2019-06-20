// pages/addClient/test1/addMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    selectAunt:"atHome",
    selectmc:"people",
    selectIfSc:"source",
    selectStore: "store",
    selectBranch:"branch",
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectShow1: false,//售后跟单人
    selectShow2: false,//信息来源
    selectShow3: false,//所属分店
    selectShow4: false,//所属部门
    selectAtHome: [{text:'没有选中任何项'}],//下拉列表的数据
    selectPeople: [{ userName: '没有选中任何项' }],
    selectSource: [{ text: '没有选中任何项' }],
    selectShop: [{ name: '没有选中任何项' }],
    selectDepart: [{ name: '没有选中任何项' }],
    index: 0,//选择的下拉列表下标
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    consultDate: '',//咨询日期
    pleaseAunt: '',//是否请过阿姨
    atHome: '',//是否有阿姨在家
    peopleId:'',//跟单人ID
    infSource: '',//信息来源
    wechatBinding: '',//微信绑定
    store: '',//分店ID
    dept:'',//部门ID
    wechatDate:'',//微信绑定时间
    csmCall:'',//客户称呼
    csmCard:'',//客户身份证
    rgt:'',//登记人
    phone:'',//联系电话
    introducer:'',//介绍人
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

  handleSelecteDate(e) {
    wx.showToast({ title: `${e.detail.date}`, icon: false })
  },

  //日期选择
  consultDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      consultDate: e.detail.value
    })
    this.verify();
  },

  //微信绑定时间
  wechatDateChange: function(e){
    this.setData({
      wechatDate: e.detail.value
    })
    this.verify();
  },

  // 点击下拉显示框
  selectTap(e) {
    var state = e.currentTarget.dataset.tap;
    var _this = this;
    if (state == 'atHome'){
      //初始化是否有阿姨在家
      wx.request({
        url: 'https://localhost:8080/flf/app/options/ayzj',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            selectAtHome: res.data.data,
            atHome: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow: !this.data.selectShow,
      });
    } else if (state == 'people'){
      //初始化跟单人
      wx.request({
        url: 'https://localhost:8080/flf/app/user/all',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            selectPeople: res.data.data,
            people: res.data.data[0].userName,
          })
        }
      })
      this.setData({
        selectShow1: !this.data.selectShow1,
      });
    } else if (state == 'source'){
      //初始化信息来源
      wx.request({
        url: 'https://localhost:8080/flf/app/options/xxly',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            selectSource: res.data.data,
            infSource: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow2: !this.data.selectShow2,
      });
    } else if (state == 'store'){
      //初始化分店
      wx.request({
        url: 'https://localhost:8080/flf/app/subbranch/all',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            selectShop: res.data.data,
            store: res.data.data[0].name,
          })
        }
      })
      this.setData({
        selectShow3: !this.data.selectShow3
      });
    } else if (state == 'branch') {
      //初始化部门
      wx.request({
        url: 'https://localhost:8080/flf/app/dept/all',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            selectDepart: res.data.data,
            dept: res.data.data[0].name,
          })
        }
      })
      this.setData({
        selectShow4: !this.data.selectShow4
      });
    }
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow,
      atHome: e.currentTarget.id, //是否在家
    });
    this.verify();
  },

  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index1: Index,
      selectShow1: !this.data.selectShow1,
      peopleId: e.currentTarget.id,//跟进人
    });
    this.verify();
  },

  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index2: Index,
      selectShow2: !this.data.selectShow2,
      infSource: e.currentTarget.id, //信息来源
    });
    this.verify();
  },

  optionTap3(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index3: Index,
      selectShow3: !this.data.selectShow3,
      store: e.currentTarget.id, //所属分店
    });
    this.verify();
  },

  optionTap4(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index4: Index,
      selectShow4: !this.data.selectShow4,
      dept: e.currentTarget.id,//所属部门
    });
    this.verify();
  },

  pleaseChange:function(e){
    this.setData({
      pleaseAunt: e.detail.value,//是否请过阿姨
    });
    this.verify();
  },

  bindingChange:function(e){
    this.setData({
      wechatBinding: e.detail.value,//是否绑定过微信
    });
    this.verify();
  },

  customersCall:function(e){
    this.setData({
      csmCall: e.detail.value,//客户称呼
    });
    this.verify();
  },
  
  customersCard: function(e) {
    // console.log(e.detail.value)
    this.setData({
      csmCard: e.detail.value,//客户身份证
    });
  },

  registrant:function(e){
    // console.log(e.detail.value)
    this.setData({
      rgt: e.detail.value,//登记人
    });
  },

  phone: function (e) {
    // console.log(e.detail.value)
    this.setData({
      phone: e.detail.value,//联系电话
    });
    this.verify();
  },

  introducer: function (e) {
    // console.log(e.detail.value)
    this.setData({
      introducer: e.detail.value,//介绍人
    });
  },

  verify: function () {
    if (this.data.consultDate != '' && this.data.consultDate != null &&
      this.data.csmCall != '' && this.data.csmCall != null &&
      this.data.pleaseAunt != '' && this.data.pleaseAunt != null &&
      this.data.atHome != '' && this.data.atHome != null &&
      this.data.phone != '' && this.data.phone != null &&
      this.data.peopleId != '' && this.data.peopleId != null &&
      this.data.infSource != '' && this.data.infSource != null &&
      this.data.wechatBinding != '' && this.data.wechatBinding != null ) {
        this.setData({
          flag: true,
        });
    }
  },
  //下一步
  next: function (e) {
    wx.setStorageSync('client_consultDate', this.data.consultDate);//存入本地缓存
    wx.setStorageSync('client_pleaseAunt', this.data.pleaseAunt);
    wx.setStorageSync('client_atHome', this.data.atHome);
    wx.setStorageSync('client_people', this.data.peopleId);
    wx.setStorageSync('client_infSource', this.data.infSource);
    wx.setStorageSync('client_wechatBinding', this.data.wechatBinding);
    wx.setStorageSync('client_store', this.data.store);
    wx.setStorageSync('client_dept', this.data.dept);
    wx.setStorageSync('client_wechatDate', this.data.wechatDate);
    wx.setStorageSync('client_csmCall', this.data.csmCall);
    wx.setStorageSync('client_csmCard', this.data.csmCard);
    wx.setStorageSync('client_rgt', this.data.rgt);
    wx.setStorageSync('client_phone', this.data.phone);
    wx.setStorageSync('client_introducer', this.data.introducer);
    wx.navigateTo({
      url: '../test2/addSerive',
    })
  }
})