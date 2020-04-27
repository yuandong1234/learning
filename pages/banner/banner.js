// pages/banner/banner.js
var bannerSerice = require('./bannerService.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData: [],
    imgheights: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = bannerSerice.getBannerData();
    console.log(data);
    this.setData({
      bannerData: data,
      current: 0
    });
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
  /**
   * 图片加载完成
   * @param {*} e 
   */
  imageLoad: function (e) { //获取图片真实宽度  
    console.log(e);
    var imgwidth = e.detail.width;
    var imgheight = e.detail.height;
    //宽高比  
    var ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },

  bindchange: function (e) { // current 改变时会触发 change 事件
    this.setData({
      current: e.detail.current
    })
  },
})