// pages/index/index.js
var indexSerice = require('./listService.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		"newsList": [],
		"hasMore": true,
		"showLoading": false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		/**
		 * 加载本地数据
		 */
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
		this.refreshIndexData();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		wx.showToast({
			title: "滑到底部了~"
		});
		if (!this.data.showLoading && this.data.hasMore) {
			this.loadMoreIndexData();
		}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},

	/**
	 * 刷新首页数据
	 */
	refreshIndexData: function () {
		var that = this;
		that.setData({
			"newsList": [],
			"hasMore": true,
			"showLoading": false
		});

		// wx.showNavigationBarLoading() //在标题栏中显示加载
		wx.showLoading({
			title: '玩命加载中...',
		});

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
	 * 加载更多首页数据
	 */
	loadMoreIndexData: function () {
		var that = this;
		that.setData({
			"showLoading": true
		});
		indexSerice.rquestIndexData(function (res) {
				//请求成功
				that.setData({
					newsList: that.data.newsList.concat(res.result.data),
					hasMore: false,
					showLoading: false
				});
			},
			function () {
				// 请求完成
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