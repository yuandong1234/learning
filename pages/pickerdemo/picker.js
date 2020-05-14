// pages/pickerdemo/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'selecorArray': ['男', '女'],
    'sex': -1,
    'sexIndex': 0,
    'time': '',
    'date': "",
    'region': ['广东省', '深圳市', '罗湖区'],
    'objectMultiArray': [
      [{
          "id": 0,
          "name": "无脊柱动物"
        },
        {
          "id": 1,
          "name": "脊柱动物"
        }
      ],
      [{
          "id": 0,
          "name": "扁性动物"
        },
        {
          "id": 1,
          "name": "线形动物"
        },
        {
          "id": 2,
          "name": "环节动物"
        },
        {
          "id": 3,
          "name": "软体动物"
        },
        {
          "id": 3,
          "name": "节肢动物"
        }
      ],
      [{
          "id": 0,
          "name": "猪肉绦虫"
        },
        {
          "id": 1,
          "name": "吸血虫"
        }
      ]
    ],
    "multiIndex": [0, 0, 0],
    "multiArray": []
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
  bindSexChange: function (e) {
    var value = e.detail.value;
    this.setData({
      'sex': parseInt(value),
      'sexIndex': parseInt(value)
    });
  },
  bindTimeChange: function (e) {
    var value = e.detail.value;
    this.setData({
      'time': value
    });
  },

  bindDateChange: function (e) {
    var value = e.detail.value;
    this.setData({
      'date': value
    });
  },

  bindRegionChange: function (e) {
    var value = e.detail.value;
    console.log(value);
    this.setData({
      'region': value
    });
  },

  bindMultiDataChange: function (e) {
    var value = e.detail.value;
    console.log(value);
    this.setData({
      multiIndex: value
    });
  },

  bindMultiColumnChange: function (e) {
    var detail = e.detail;
    console.log(detail);
    this.setData({
     
    });
  },
})