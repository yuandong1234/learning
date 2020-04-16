// pages/index/index.js
var indexSerice = require('./indexService.js');
Page({

	/**
	 * 	全局变量
	 */
	isLoading: true,

	/**
	 * 页面的初始数据
	 */
	data: {
		"newsList": []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var localdata = indexSerice.getLocalIndexData();
		console.log(localdata);
		this.setData({
			"newsList": localdata,
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
		// this.getIndexData();
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
		console.log('--------下拉刷新-------')
		// wx.showNavigationBarLoading() //在标题栏中显示加载
		wx.showLoading({
			title: '玩命加载中...',
		})
		this.getIndexData();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		console.log('--------上拉加载-------')
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	/**
	 * 获取首页数据
	 */
	getIndexData: function () {
		var that = this;
		indexSerice.rquestIndexData(function (res) {
				that.setData({
					newsList: res.result.data
				});
			},
			function () {
				// wx.hideNavigationBarLoading() //完成停止加载
				wx.hideLoading();
				wx.stopPullDownRefresh() //停止下拉刷新
			});
	},
	/**
	 * 跳转详情
	 * @param {} e 
	 */
	goDetail: function (e) {
		var url = e.currentTarget.dataset.url;
		console.log(url);
		wx.navigateTo({
			url: '../detail/detail?url=' + encodeURIComponent(url),
		})
	}
})