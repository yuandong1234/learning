// pages/listGroup/listGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "list": [{
        "id": 0,
        "title": "分组一",
        "open": false,
        "sublist": ["成员1-1", "成员1-2", "成员1-2"]
      },
      {
        "id": 1,
        "title": "分组二",
        "open": false,
        "sublist": ["成员2-1", "成员2-2"]
      },
      {
        "id": 2,
        "title": "分组三",
        "open": false,
        "sublist": ["成员3-1", "成员3-2", "成员3-3"]
      }
    ]
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
   * 分组列表展开收起
   */
  sublistToggle: function (e) {
    var index = e.currentTarget.dataset.id;
    var list = this.data.list;
    for (var i = 0; i < list.length; i++) {
      if (index == i) {
        list[i].open = !list[i].open;
        break;
      }
    }
    this.setData({
      "list": list
    });
  }
})