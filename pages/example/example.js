// pages/example/example.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exampleData: [{
        id: 0,
        title: '列表'
      },
      {
        id: 1,
        title: '轮播图'
      },
      {
        id: 2,
        title: '网格列表'
      },
      {
        id: 3,
        title: '模板使用'
      },
      {
        id: 4,
        title: '底部滚动选择器'
      },
      {
        id: 5,
        title: '自定义dialog'
      },
      {
        id: 6,
        title: '自定义tab'
      },
      {
        id: 7,
        title: '文本单行、多行、收起展开'
      },
      {
        id: 8,
        title: '列表展开收起'
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
   * 跳转界面
   */
  goPage: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id);
    let path = "";
    switch (id) {
      case 0: //列表
        path = "../list/list"
        break;
      case 1: //轮播图
        path = "../banner/banner"
        break;
      case 2: //网格列表
        path = "../girdlist/girdlist"
        break;
      case 3: //模板使用
        path = "../templatedemo/templatedemo"
        break;
      case 4: //底部滚动选择器
        path = "../pickerdemo/picker"
        break;
      case 5: //自定义view
        path = "../dialogdemo/dialog"
        break;
      case 6: //自定义tab
        path = "../tabdemo/tab"
        break;
      case 7: //文本单行、多行、收起展开
        path = "../expandCollapse/expandCollapse"
        break;
      case 8: //列表展开收起
        path = "../listGroup/listGroup"
        break;
    }
    wx.navigateTo({
      url: path
    })
  }
})