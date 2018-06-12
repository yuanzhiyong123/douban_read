var {common} = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.getMovieDetail(id);
  },

  getMovieDetail: function(id) {
    wx.showLoading({
      title: '正在加载中',
    })
    var _this = this;
    common.request({
      url:'/v2/movie/subject/'+id,
      success: function(res) {
        _this.setData({
          movieDetail: res.data
        });
        wx.hideLoading();
      }
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
    
  }
})