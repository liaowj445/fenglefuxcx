Page({
  data: {
    flag: false,
    client: [],
    showModalStatus: false,
    items: [
      { name: '月嫂', value: '月嫂', checked: false },
      { name: '保姆', value: '保姆', checked: false },
    ],
    serveType: [],
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['跟进状态','跟进中', '无跟进'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    createPaixu : 'sort',
    updatePaixu : 'sort'
  },
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'https://localhost:8080/flf/app/getClient',
      method: 'POST',
      data: {
        context: ""
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          client: res.data
        })
      }
    })
  },
  context: function (e) {
    this.setData({
      context: e.detail.value
    })
  },

  click:function(){
    this.setData({
      flag: true
    })
  },

  find: function (e) {
    var _this = this;
    this.setData({
      flag: false
    })
    wx.request({
      url: 'https://localhost:8080/flf/app/getClient', 
      method:'POST',
      data: {
        context: this.data.context
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          client: res.data
        })
      }
    })
  },

  findServeType:function (){
    this.setData({
      showModalStatus: true,
      title: "服务类型"
    })
  },

  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
    
    var flag = false;
    var _this = this;
    var serveType = this.data.serveType;
    this.data.items.forEach(function (item,index){
      if (item.checked == 'true'){
          flag = true;
      }
    })
    if (flag){
      this.data.items.forEach(function (item, index) {
        item.checked = false;
      })
      wx.request({
        url: 'https://localhost:8080/flf/app/getClient',
        method: 'POST',
        data: {
          serveType: this.data.serveType
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          _this.setData({
            client: res.data
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请选择服务类型',
        success: function (res) {
          if (res.confirm) {
            _this.findServeType();
          }
        }
      })
    }
  },

  closeServe:function(e){
    this.setData(
        {
          showModalStatus: false
        }
      );
  },

  util: function (currentStatu) {
    //关闭
    if (currentStatu == "close") {
      this.setData(
        {
          showModalStatus: false
        }
      );
    }
    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },

  checkboxChange: function (e) {
    var arr = [];
    e.detail.value.forEach(current => {
      for (var value of this.data.items) {
        if (current === value.name) {
          value.checked = "true";
          arr.push(value.value);
          break;
        }
      }
    });
    this.setData({ serveType: arr });
  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });

    var _this = this;
    wx.request({
      url: 'https://localhost:8080/flf/app/getClient',
      method: 'POST',
      data: {
        followResult: this.data.selectData[Index]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          client: res.data
        })
      }
    })
  },

  createSort: function(e){
    var _this = this;
    if (this.data.createPaixu == 'sort'){
      this.setData({
        createPaixu: 'sort-asc'
      });
    } else if (this.data.createPaixu == 'sort-asc'){
      this.setData({
        createPaixu: 'sort-desc'
      });
    }else{
      this.setData({
        createPaixu: 'sort'
      });
    }
    
    wx.request({
      url: 'https://localhost:8080/flf/app/getClient',
      method: 'POST',
      data: {
        createDateSort: this.data.createPaixu
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          client: res.data
        })
      }
    })
  },

  updateSort: function (e) {
    var _this = this;
    if (this.data.updatePaixu == 'sort') {
      this.setData({
        updatePaixu: 'sort-asc'
      });
    } else if (this.data.updatePaixu == 'sort-asc') {
      this.setData({
        updatePaixu: 'sort-desc'
      });
    } else {
      this.setData({
        updatePaixu: 'sort'
      });
    }

    wx.request({
      url: 'https://localhost:8080/flf/app/getClient',
      method: 'POST',
      data: {
        updateDateSort: this.data.updatePaixu
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.setData({
          client: res.data
        })
      }
    })
  },

  addClient: function (e) {
    wx.navigateTo({
      url: '../addClient/test1/addMessage',
    })
  } 
})
