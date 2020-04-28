// pages/girdlist/girdlsit.js
var service = require('./girdListService.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    "hasMore": true,
    "showLoading": false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var localData = service.getLocalData();
    console.log(localData);
    this.setData({
      listData: localData
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
    if (!this.data.showLoading && !this.data.hasMore) {
      return;
    }
    this.setData({
      "showLoading": true
    });
    //模拟加载数据
    var moreData = service.getLocalData();
    this.setData({
      listData: this.data.listData.concat(moreData),
      "showLoading": false,
      "hasMore": false
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})