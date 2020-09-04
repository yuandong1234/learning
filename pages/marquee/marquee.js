// pages/marquee/marquee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intervalId: null,
    content: '侵华日军南京大屠杀遇难同胞纪念馆于1985年8月15日建成开放。',
    pace: 1.5, //滚动速度
    interval: 20, //时间间隔
    length: 0, //字体宽度
    offsetLeft: 0,
    windowWidth: 0,
    isRunning: false
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
  onShow: function () {},

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

  //开始跑马灯
  startMarquee: function () {
    var that = this;
    that.stopMarquee();
    this.setData({
      isRunning: true
    });
    console.log("开始跑马灯");
    console.log("isRunning : " + that.data.isRunning);
    //初始化数据
    that.data.windowWidth = wx.getSystemInfoSync().windowWidth;
    that.queryViewWidth('marquee-text').then(function (resolve) {
      that.data.length = resolve;
      console.log(that.data.length + "/" + that.data.windowWidth);
      that.runMarquee();
    });
  },

  //停止跑马灯
  stopMarquee: function () {
    this.setData({
      isRunning: false
    });
    //清除旧的定时器
    console.log("intervalId : " + this.data.intervalId);
    if (this.data.intervalId) {
      console.log("清除旧的定时器");
      clearInterval(this.data.intervalId);
    }
  },
  //执行跑马灯动画
  runMarquee: function () {
    var that = this;
    if (that.data.length > that.data.windowWidth) {
      var intervalId = setInterval(function () {
        if (!that.data.isRunning) {
          return;
        }
        //文字一直移动到末端
        if (-that.data.offsetLeft < that.data.length) {
          that.setData({
            offsetLeft: that.data.offsetLeft - that.data.pace,
          });
        } else {
          clearInterval(intervalId);
          that.setData({
            offsetLeft: that.data.windowWidth
          });
          that.runMarquee();
        }
      }, that.data.interval);
      that.setData({
        intervalId: intervalId
      });
    }
  },

  //根据viewId查询view的宽度
  queryViewWidth: function (viewId) {
    //创建节点选择器
    return new Promise(function (resolve) {
      var query = wx.createSelectorQuery();
      var that = this;
      query.select('.' + viewId).boundingClientRect(function (rect) {
        resolve(rect.width);
      }).exec();
    });
  }
})