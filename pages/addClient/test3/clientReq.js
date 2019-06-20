// pages/addClient/test3/clientReq.js 
//获取应用实例
const app = getApp()

Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    ageSelete: 'age',
    languageSelect: 'language',
    rankSelect: 'rank',
    zodiacSelect: 'zodiac',
    itemsSelect: 'items',
    selectShow: false,
    selectShow1: false,
    selectShow2: false,
    selectShow3: false,
    showModalStatus:false,
    age: [{ text: '没有选中任何项' }],//年龄 
    language: [{ text: '没有选中任何项' }],//语言 
    rank: [{ text: '没有选中任何项' }],//保姆级别 
    zodiac: ['没有选中任何项'],//属相集合 
    items: ['没有选中任何项'],//星座集合 
    index: 0,
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    ageName: '',//年龄 
    languageName: '',//语言 
    rankName: '',//保姆级别 
    zodiacName: '',//属相 
    itemsName: '',//星座 
    interviewDate: '',//邀约面试日期 
    interviewTime: '',//邀约面试时间 
    interviewDateAndTime: '',//邀约面试+时间 
    arriveDate: '',//到岗日期 
    arriveTime: '',//到岗时间 
    arriveDateAndTime: '',//到岗时间+日期 
    nativePlace: '',//籍贯 
    salary_min: '',//最小薪资 
    salary_max: '',//最大薪资 
    restNumOfDay: '',//休息天数 
    problem: '',//最关心的问题 
    workContent: '',//工作内容 
    showMsg:'',//报错内容
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

  //邀约面试日期 
  interviewDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var date = e.detail.value + ' ' + this.data.interviewTime
    this.setData({
      interviewDate: e.detail.value,
      interviewDateAndTime: date
    })
  },

  //邀约面试日期 
  interviewTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var date = this.data.interviewDate + ' ' + e.detail.value
    this.setData({
      interviewTime: e.detail.value,
      interviewDateAndTime: date
    })
  },

  //到岗日期 
  arriveDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var date = e.detail.value + ' ' + this.data.arriveTime
    this.setData({
      arriveDate: e.detail.value,
      arriveDateAndTime: date
    })
  },

  //到岗时间 
  arriveTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var date = this.data.arriveDate + ' ' + e.detail.value
    this.setData({
      arriveTime: e.detail.value,
      arriveDateAndTime: date
    })
  },

  nativePlace: function (e) {
    this.setData({
      nativePlace: e.detail.value
    })
  },

  salary_min: function (e) {
    this.setData({
      salary_min: e.detail.value
    })
  },

  salary_max: function (e) {
    this.setData({
      salary_max: e.detail.value
    })
  },

  restNumOfDay: function (e) {
    this.setData({
      restNumOfDay: e.detail.value
    })
  },

  problem: function (e) {
    this.setData({
      problem: e.detail.value
    })
  },

  workContent: function (e) {
    this.setData({
      workContent: e.detail.value
    })
  },

  // 点击下拉显示框 
  selectTap(e) {
    var state = e.currentTarget.dataset.tap;
    var _this = this;
    if (state == 'age') {
      //初始化年龄 
      wx.request({
        url: 'https://localhost:8080/flf/app/options/nl',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            age: res.data.data,
            ageName: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow: !this.data.selectShow,
      });
    } else if (state == 'language') {
      //初始化语言 
      wx.request({
        url: 'https://localhost:8080/flf/app/options/fwyy',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            language: res.data.data,
            languageName: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow1: !this.data.selectShow1,
      });
    } else if (state == 'rank') {
      //初始化保姆级别 
      wx.request({
        url: 'https://localhost:8080/flf/app/options/bmjb',
        method: 'POST',
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值 
        },
        success(res) {
          console.log(res.data.data)
          _this.setData({
            rank: res.data.data,
            rankName: res.data.data[0].text,
          })
        }
      })
      this.setData({
        selectShow2: !this.data.selectShow2,
      });
    } else if (state == 'zodiac') {
      this.setData({
        zodiac: ['鼠',
          '牛',
          '虎',
          '兔',
          '龙',
          '蛇',
          '马',
          '羊',
          '猴',
          '鸡',
          '狗',
          '猪'],
        selectShow3: !this.data.selectShow3,
      });
    } else if (state == 'items') {
      this.setData({
        items: [
          '白羊座',
          '金牛座',
          '双子座',
          '巨蟹座',
          '狮子座',
          '处女座',
          '天秤座',
          '天蝎座',
          '射手座',
          '摩羯座',
          '水瓶座',
          '双鱼座',
        ],
        selectShow4: !this.data.selectShow4,
      });
    }
  },
  // 点击下拉列表 
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow,
      ageName: e.currentTarget.id, //年龄ID 
    });
  },

  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index1: Index,
      selectShow1: !this.data.selectShow1,
      languageName: e.currentTarget.id, //语言ID 
    });
  },

  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index2: Index,
      selectShow2: !this.data.selectShow2,
      rankName: e.currentTarget.id, //级别ID 
    });
  },

  optionTap3(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index3: Index,
      selectShow3: !this.data.selectShow3,
      zodiacName: e.currentTarget.id, //属相名字 
    });
  },

  optionTap4(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标 
    this.setData({
      index4: Index,
      selectShow4: !this.data.selectShow4,
      itemsName: e.currentTarget.id, //星座名字 
    });
  },

  closeServe: function (e) {
    this.setData(
      {
        showModalStatus: false
      }
    );
  },

  //保存 
  save: function (e) {
    var _this = this;
    var client_consultDate = wx.getStorageSync('client_consultDate');//存入本地缓存 
    var client_pleaseAunt = wx.getStorageSync('client_pleaseAunt');
    var client_atHome = wx.getStorageSync('client_atHome');
    var client_people = wx.getStorageSync('client_people');
    var client_infSource = wx.getStorageSync('client_infSource');
    var client_wechatBinding = wx.getStorageSync('client_wechatBinding');
    var client_store = wx.getStorageSync('client_store');
    var client_dept = wx.getStorageSync('client_dept');
    var client_wechatDate = wx.getStorageSync('client_wechatDate');
    var client_csmCall = wx.getStorageSync('client_csmCall');
    var client_csmCard = wx.getStorageSync('client_csmCard');
    var client_rgt = wx.getStorageSync('client_rgt');
    var client_phone = wx.getStorageSync('client_phone');
    var client_introducer = wx.getStorageSync('client_introducer');
    var serve_serveTypeName = wx.getStorageSync('serve_serveTypeName');
    var serve_serveModeName = wx.getStorageSync('serve_serveModeName');
    var serve_foodStyleName = wx.getStorageSync('serve_foodStyleName');
    var serve_serveAddress = wx.getStorageSync('serve_serveAddress');
    var serve_homeArea = wx.getStorageSync('serve_homeArea');
    var serve_taste = wx.getStorageSync('serve_taste');
    var user = app.globalData.user;
    console.log(client_consultDate)
    console.log(client_pleaseAunt)
    console.log(client_atHome)
    console.log(client_people)
    console.log(client_infSource)
    console.log(client_wechatBinding)
    console.log(client_store)
    console.log(client_dept)
    console.log(client_wechatDate)
    console.log(client_csmCall)
    console.log(client_csmCard)
    console.log(client_rgt)
    console.log(client_phone)
    console.log(client_introducer)
    console.log(serve_serveTypeName)
    console.log(serve_serveModeName)
    console.log(serve_foodStyleName)
    console.log(serve_serveAddress)
    console.log(serve_homeArea)
    console.log(serve_taste)
    console.log(this.data.ageName)
    console.log(this.data.languageName)
    console.log(this.data.rankName)
    console.log(this.data.zodiacName)
    console.log(this.data.itemsName)
    console.log(this.data.interviewDateAndTime)
    console.log(this.data.arriveDateAndTime)
    console.log(this.data.nativePlace)
    console.log(this.data.salary_min)
    console.log(this.data.salary_max)
    console.log(this.data.restNumOfDay)
    console.log(this.data.problem)
    console.log(this.data.workContent)
    wx.request({
      url: 'https://localhost:8080/flf/app/aunt/save',
      method: 'POST',
      data: {
        askTime: client_consultDate,
        auntHis: client_pleaseAunt,
        auntHome: client_atHome,
        documentary: client_people,
        infoFrom: client_infSource,
        bindWechat: client_wechatBinding,
        branchId: client_store,
        deptId: client_dept,
        bindTime: client_wechatDate,
        name: client_csmCall,
        cardId: client_csmCard,
        registerName: client_rgt,
        phone: client_phone,
        introducer: client_introducer,
        serverType: serve_serveTypeName,
        serverMode: serve_serveModeName,
        foodStyle: serve_foodStyleName,
        address: serve_serveAddress,
        area: serve_homeArea,
        taste: serve_taste,
        age: this.data.ageName,//年龄 
        language: this.data.languageName,//语言 
        auntLevel: this.data.rankName,//保姆级别 
        zodiac: this.data.zodiacName,//属相 
        constellation: this.data.itemsName,//星座 
        interviewTime: this.data.interviewDateAndTime,//邀约面试时间 
        arriveTime: this.data.arriveDateAndTime,//到岗时间 
        nativePlace: this.data.nativePlace,//籍贯 
        salaryMin: this.data.salary_min,//最小薪资 
        salaryMax: this.data.salary_max,//最大薪资 
        restDay: this.data.restNumOfDay,//休息天数 
        question: this.data.problem,//最关心的问题 
        mainWork: this.data.workContent,//工作内容
        user:user,
      },
      header: {
        'content-type': 'application/json' // 默认值 
      },
      success(res) {
        if (!res.data.hasOwnProperty('success')){
          _this.setData({
            showModalStatus: true,
            showMsg: res.data.msg,
          });
        }else{
          wx.switchTab({
            url: '../../client/client',
          })
        }
        console.log(res.data)
      }
    })
  }
})