// component/search-result/search-result.js
var WxParse = require('../../wxParse/wxParse.js');
const app=getApp();
Component({
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      var article = this.data.searchResult.chapterdetailcontent;
       /**
        * WxParse.wxParse(bindName , type, data, target,imagePadding)
        * 1.bindName绑定的数据名(必填)
        * 2.type可以为html或者md(必填)
        * 3.data为传入的具体数据(必填)
        * 4.target为Page对象,一般为this(必填)
        * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        */
       var that = this;

      // //执行转换方法  然后就应该成功了

       WxParse.wxParse('article', 'html', article, that, 20);
    },

    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    searchResult: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBookDetail:function(){

      wx.showLoading({
        title: '加载中，请稍候'
      })

      app.globalData.bookId = this.data.searchResult.bookid;
      app.globalData.chapterDetailId = this.data.searchResult.chapterdetailid;
      wx.navigateTo({
        url: '/pages/book/book-detail/book-detail',
      })
    }
      
  }
})
