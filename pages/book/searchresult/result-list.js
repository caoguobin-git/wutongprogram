// pages/book/searchresult/result-list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    result: {},
    showSearchBox: false,
    researchWord: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    wx.showLoading({
      title: '搜索中，请稍候'
    })
    var keyword = app.globalData.keyword;
    var that = this;
    var url = 'https://wt.tjrckj.net/book/searchKeyWords?course&pageSize=100&keyWords=' + keyword;
    wx.request({
      url: url,
      success: function(res) {
        var result = res.data.data;

        that.setData({
          result: result,
          keyword: keyword
        });
        var title = keyword + ": 共" + result.numFound + "条"
        wx.setNavigationBarTitle({
          title: title,
        })
        wx.hideLoading();
      }
    })


    // var result = app.globalData.searchResult;


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  displaySearchInResultBox: function() {
    this.setData({
      showSearchBox: true
    })
  },

  cancleResearch: function() {
    this.setData({
      showSearchBox: false,
      researchWord: ''
    })
  },

  changeResearchWord: function(e) {
    var word = e.detail.value;
    this.setData({
      researchWord: word
    })
  },


  rearchKeyword: function() {

    var keyword = this.data.researchWord;
    if (keyword.trim() == '') {
      wx.showToast({
        title: '关键字不能为空',
        icon: 'none'
      });
      return;
    }

    this.setData({
      showSearchBox: false,
    })

    wx.showLoading({
      title: 'searching',
    })
    var lastKeyword = app.globalData.keyword
    var newWord = lastKeyword + keyword;
    var that=this;
    this.setData({
      result:null
    })


    var url = 'https://wt.tjrckj.net/book/searchKeyWords?course&pageSize=100&keyWords=' + newWord;
    // app.globalData.keyword = newWord;
    wx.request({
      url: url,
      success: function(res) {
        var result = res.data.data;

        that.setData({
          result: result,
        });
        var title = lastKeyword+"-->"+keyword + ": 共" + result.numFound + "条"
        wx.setNavigationBarTitle({
          title: title,
        })
        wx.hideLoading();
        that.setData({
          researchWord:''
        })
      }
    })
    
  }
})