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
    }, {
      "id": 3,
      "title": "标签4",
      "isCheck": false
    }
  ],
    "tabIndex": 0
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
    var index = e.currentTarget.dataset.index;
    var tabList = this.data.tabList;
    for (var i = 0; i < tabList.length; i++) {
      tabList[i].isCheck = (index == i);
    }
    this.setData({
      "tabList": tabList,
      "tabIndex": index
    });
  },

  /**
   * 页面切换监听
   */
  swiperTab: function (e) {
    console.log(e);
    var index = e.detail.current;
    var tabList = this.data.tabList;
    for (var i = 0; i < tabList.length; i++) {
      tabList[i].isCheck = (index == i);
    }
    this.setData({
      "tabList": tabList,
    });
  },

  /**
   * 禁止页面手动滑动
   */
  stopTouchMove: function () {
    return false;
  }
})