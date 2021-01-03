//index.js
//获取应用实例
const app = getApp()
const request = require('../../utils/request')

Page({
  data: {
    autoImgList: [],
    categoryList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getAutoImg()
    this.getCategory()
  },
  /**
   * @description 获取轮播图资源
   */
  getAutoImg() {
    request.get('/api/public/v1/home/swiperdata')
    .then((res) => {
      this.setData({
        autoImgList: res.data.message
      })
    })
    .catch(err => {
      console.error(err);
    })
  },
  /**
   * @description 获取分类导航
   */
  getCategory() {
    request.get('/api/public/v1/home/catitems')
    .then(res => {
      this.setData({
        categoryList: res.data.message
      })
    })
    .catch(err => {
      console.error(err);
    })
  },
  /**
   * @description 轮播图点击事件
   */
  autoplayHandler(e) {
    console.log(e.target.dataset.navurl);
    // wx.navigateTo({
    //   url: e.target.dataset.navurl
    // })
  },
  /**
   * @description 分类导航点击事件
   */
  categoryHandler(e) {
    console.log(e.target.dataset.navurl);
    // wx.navigateTo({
    //   url: e.target.dataset.navurl
    // })
  }
})
