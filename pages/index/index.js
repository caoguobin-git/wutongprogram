// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      password:''
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

  getUsernameInputValue:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  getPasswordInputValue:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  login:function(){
    if(this.data.username.trim()==''||this.data.password.trim()==''){
      wx.showToast({
        title: '账号或密码为空',
        icon: 'none',
        image:'/img/background/close.png'
      })
      return;
    }
    // console.log("login")
    var url ='https://wt.tjrckj.net/user/login?username='+this.data.username+'&password='+this.data.password;
    var that=this;
    wx.request({
      url: url,
      success:function(res){
        // console.log(res);
        if(res.data.status==200){
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          })
          setTimeout(function(){
            wx.navigateTo({
              url: '/pages/search/search-index',
            })
          },500)
          setTimeout(function(){
            that.setData({
              username: '',
              password: ''
            })
          },1000)
        }else{
          wx.showToast({
            title: res.data.message,
            icon:'none',
            image: '/img/background/close.png'

          })
        }
      }
    })
  }


})