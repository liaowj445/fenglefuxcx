// pages/insertContract/insertContract.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    zodiacHidden: true,
    nationHidden: true,
    constellation:'请选择星座',
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
    zodiacs:[
      '鼠',
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
      '猪'
    ],
    nations:[
      '汉族',
      '蒙古族',
      '回族',
      '藏族',
      '维吾尔族',
      '苗族',
      '彝族',
      '壮族',
      '布依族',
      '朝鲜族',
      '满族',
      '侗族',
      '瑶族',
      '白族',
      '土家族',
      '哈尼族',
      '哈萨克族',
      '傣族',
      '黎族',
      '傈僳族',
      '佤族',
      '畲族',
      '高山族',
      '拉祜族',
      '水族',
      '东乡族',
      '纳西族',
      '景颇族',
      '柯尔克孜族',
      '土族',
      '达斡尔族',
      '仫佬族',
      '羌族',
      '布朗族',
      '撒拉族',
      '毛南族',
      '仡佬族',
      '锡伯族',
      '阿昌族',
      '普米族',
      '塔吉克族',
      '怒族',
      '乌孜别克族',
      '俄罗斯族',
      '鄂温克族',
      '德昴族',
      '保安族',
      '裕固族',
      '京族',
      '塔塔尔族',
      '独龙族',
      '鄂伦春族',
      '赫哲族',
      '门巴族',
      '珞巴族',
      '基诺族',
    ],
    nation:'民族',
    zodiac:'请选择属相',
    //性别
    sex:'',
    //是否海外人士
    country:'',
    //家政员姓名
    name:'',
    //发证机关
    police:'',
    //有效期
    activity:'',
    //身份证地址
    address:'',
    //身份证号码
    card_id:''
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

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.setData({
      sex: e.detail.value
    });
  },

  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.setData({
      country: e.detail.value
    });
  },

  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  }, 

  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
    console.log(this.data.constellation);
  },

  bindChange: function(e){
    var val = e.detail.value;
    var index = val[0];
    this.setData({
      constellation: this.data.items[index]
    });
  },

  modalTap1: function (e) {
    this.setData({
      zodiacHidden: false
    })
  },

  modalChange1: function (e) {
    this.setData({
      zodiacHidden: true
    })
    console.log(this.data.zodiac);
  },

  bindChange1: function (e) {
    var val = e.detail.value;
    var index = val[0];
    this.setData({
      zodiac: this.data.zodiacs[index]
    });
  },

  modalTap2: function (e) {
    this.setData({
      nationHidden: false
    })
  },

  modalChange2: function (e) {
    this.setData({
      nationHidden: true
    })
    console.log(this.data.nation);
  },

  bindChange2: function (e) {
    var val = e.detail.value;
    var index = val[0];
    this.setData({
      nation: this.data.nations[index]
    });
  },

  getName: function(e){
    console.log("家政员名字"+e.detail.value);
    this.setData({
      name: e.detail.value
    });
  },

  getAge: function(e){
    console.log("家政员年龄" + e.detail.value);
    this.setData({
      age: e.detail.value
    });
  },

  getPolice: function(e){
    console.log("发证机关" + e.detail.value);
    this.setData({
      police: e.detail.value
    });
  },

  getActivity: function(e){
    console.log("有效期" + e.detail.value);
    this.setData({
      activity: e.detail.value
    });
  },

  getAddress: function(e){
    console.log("身份证地址" + e.detail.value);
    this.setData({
      address: e.detail.value
    });
  },

  getIdNumber: function(e){
    console.log("身份证号码" + e.detail.value);
    this.setData({
      card_id: e.detail.value
    });
  },

  next: function(e){
    console.log(wx.getStorageSync("sessionId"))
    wx.request({
      url: 'https://13.13.13.15:8443/flf/app/insertContract',
      method: 'POST',
      data: {
        constellation: this.data.constellation
      },
      header: {
        'content-type': 'application/json', // 默认值
        'Cookie': wx.getStorageSync("sessionId")
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
    });
    wx.navigateTo({
      url: '../step2/insertContract2',
    })
  }

})