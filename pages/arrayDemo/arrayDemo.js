// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "arrayList": [{
      "id": 0,
      "name": "小张",
      "sex": "男"
    }, {
      "id": 1,
      "name": "小黄",
      "sex": "男"
    }, {
      "id": 2,
      "name": "小孙",
      "sex": "女"
    }],
    "newArrayList": []
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
   * 转换数据 
   */
  convertData: function () {
    var originList = this.data.arrayList;
    var newList = this.data.newArrayList;
    console.log("源数据：");
    console.log(originList);
    console.log("新数据" + newList);
    console.log(newList);
    var tempArray = new Array();
    for (var i = 0; i < originList.length; i++) {
      var temp = {};
      temp.id = originList[i].id;
      temp.name = originList[i].name;
      temp.sex = originList[i].sex;
      temp.age = (i + 1) * 10;
      tempArray[i] = temp;
    }
    this.setData({
      "newArrayList": tempArray
    });
    console.log("转换数据：");
    console.log(this.data.newArrayList);
  }
})