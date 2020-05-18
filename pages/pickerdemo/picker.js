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
    'objectMultiArray': [{
        "name": "河北省",
        "code": "130000",
        "city": [{
            "name": "石家庄市",
            "code": "130100",
            "area": [{
                "name": "长安区",
                "code": "130102"
              },
              {
                "name": "桥西区",
                "code": "130104"
              },
              {
                "name": "新华区",
                "code": "130105"
              }
            ]
          },
          {
            "name": "唐山市",
            "code": "130200",
            "area": [{
                "name": "路南区",
                "code": "130202"
              },
              {
                "name": "路北区",
                "code": "130203"
              },
              {
                "name": "古冶区",
                "code": "130204"
              }
            ]
          },
          {
            "name": "秦皇岛市",
            "code": "130300",
            "area": [{
                "name": "海港区",
                "code": "130302"
              },
              {
                "name": "山海关区",
                "code": "130303"
              },
              {
                "name": "北戴河区",
                "code": "130304"
              }
            ]
          }
        ]
      },
      {
        "name": "河南省",
        "code": "410000",
        "city": [{
            "name": "郑州市",
            "code": "410100",
            "area": [{
                "name": "中原区",
                "code": "410102"
              },
              {
                "name": "二七区",
                "code": "410103"
              },
              {
                "name": "管城回族区",
                "code": "410104"
              }
            ]
          },
          {
            "name": "开封市",
            "code": "410200",
            "area": [{
                "name": "龙亭区",
                "code": "410202"
              },
              {
                "name": "顺河回族区",
                "code": "410203"
              },
              {
                "name": "鼓楼区",
                "code": "410204"
              }
            ]
          },
          {
            "name": "洛阳市",
            "code": "410300",
            "area": [{
                "name": "老城区",
                "code": "410302"
              },
              {
                "name": "西工区",
                "code": "410303"
              },
              {
                "name": "瀍河回族区",
                "code": "410304"
              }
            ]
          }
        ]
      }
    ],
    "multiIndex": [0, 0, 0],
    "multiArray": []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //TODO 待处理
    var objectMultiArray = this.data.objectMultiArray;
    var oneColumnValue = [];
    var sencondColumnValue = [];
    var thridColumnValue = [];
    for (let i = 0; i < objectMultiArray.length; i++) {
      oneColumnValue.push(objectMultiArray[i].name);
    }

    for (let i = 0; i < objectMultiArray[0].city.length; i++) {
      sencondColumnValue.push(objectMultiArray[0].city[i].name);
    }

    for (let i = 0; i < objectMultiArray[0].city[0].area.length; i++) {
      thridColumnValue.push(objectMultiArray[0].city[0].area[i].name);
    }

    this.setData({
      "multiArray": [oneColumnValue, sencondColumnValue, thridColumnValue]
    });
    console.log(this.data.multiArray);
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
    var column = detail.column;
    var value = detail.value;

    var objectMultiArray = this.data.objectMultiArray;

    var oneColumnValue = this.data.multiArray[0];
    var sencondColumnValue = this.data.multiArray[1];
    var thridColumnValue = this.data.multiArray[2];

    var oneValue = this.data.multiIndex[0];
    var sencondValue = this.data.multiIndex[1];
    var thridValue = this.data.multiIndex[2];
    switch (column) {
      case 0:
        var sencondColumnValue = [];
        var thridColumnValue = [];
        for (let i = 0; i < objectMultiArray[value].city.length; i++) {
          sencondColumnValue.push(objectMultiArray[value].city[i].name);
        }

        for (let i = 0; i < objectMultiArray[value].city[0].area.length; i++) {
          thridColumnValue.push(objectMultiArray[value].city[0].area[i].name);
        }
        oneValue = value;
        sencondValue = 0;
        thridValue = 0;
        break;
      case 1:
        var thridColumnValue = [];
        for (let i = 0; i < objectMultiArray[oneValue].city[value].area.length; i++) {
          thridColumnValue.push(objectMultiArray[oneValue].city[value].area[i].name);
        }
        sencondValue = value;
        thridValue = 0;
        break;
      case 2:
        thridValue = value;
        break;
    }
    this.setData({
      "multiArray": [oneColumnValue, sencondColumnValue, thridColumnValue],
      "multiIndex": [oneValue, sencondValue, thridValue]
    });
  },
})