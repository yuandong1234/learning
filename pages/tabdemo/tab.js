// pages/tabdemo/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "tabList": [{
      "id": 0,
      "title": "标签1",
      "isCheck": true
    }, {
      "id": 1,
      "title": "标签2",
      "isCheck": false
    }, {
      "id": 2,
      "title": "标签3",
      "isCheck": false
    }]
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

  /**
   * 标签选择
   */
  onTabSelected: function (e) {
    console.log(e);
  }
})