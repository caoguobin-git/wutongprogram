// pages/book/book/book.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    course:{}
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
    var that=this;
    var course = app.globalData.course;
    // console.log(course);
    this.setData({
      course:course
    });
    wx.setNavigationBarTitle({
      title: course.courseName
    })
    var url ='https://wt.tjrckj.net/book/getBooksByCourseId?courseId='+course.courseId;
    wx.request({
      url: url,
      success:function(res){
        // console.log(res);
        that.setData({
          books:res.data.data
        })
      }
    })
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
  toBookDetailPage:function(e){
    var book=e.currentTarget.dataset.book;
    // console.log(book);
    var url = book.bookAddr;
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    var fileType = book.bookAddr.substring(book.bookAddr.lastIndexOf('.') + 1);
    wx.downloadFile({
      url: url,
      success: function (res) {
        // console.log(res);
        var filePath1 = res.tempFilePath;
        wx.openDocument({
          filePath: filePath1,
          fileType: fileType,
          success: function (res) {
            // console.log('打开文档成功');
            wx.hideLoading();
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }

    })  

  }
})