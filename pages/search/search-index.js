// pages/search/search-index.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: ''
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
    this.getHotWords();
    this.setData({
      keyword:''
    })
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
  toCoursePage: function() {
    wx.navigateTo({
      url: '/pages/book/course/course',
    })
  },

  getHotWords: function() {
    var that = this;
    wx.request({
      url: 'https://wt.tjrckj.net/book/getHotWords',
      success: function(res) {
        // console.log(res)
        that.setData({
          hotwords: res.data.data
        })
      }
    })
  },

  setHotWordByTap: function(e) {
    var hotword = e.currentTarget.dataset.hotword;
    // console.log(hotword);
    this.setData({
      keyword: hotword
    })
  },

  changeKeyword: function(e) {
    var word = e.detail.value;
    this.setData({
      keyword: word
    })
  },

  searchKeyword: function() {
    var keyword = this.data.keyword;
    if (keyword.trim() == '') {
      wx.showToast({
        title: '关键字不能为空',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: 'searching',
    })

    app.globalData.keyword = keyword;

    wx.navigateTo({
      url: '/pages/book/searchresult/result-list',
    })

    
  }
})