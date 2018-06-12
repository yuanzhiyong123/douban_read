var { common } = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    title: '',
    url: '',
    data: {
      start: 0,
      count: 12
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type;
    this.data.title = type;
    var url;
    switch (type) {
      case '正在上映的电影-北京':
        url = '/v2/movie/in_theaters';
        break;
      case '豆瓣电影Top250':
        url = '/v2/movie/top250';
        break;
      case '即将上映的电影':
        url = '/v2/movie/coming_soon';
        break;
    }
    var obj = {};
    obj.url = url;
    this.setData(obj);
    this.getHotMovieList(url, {
      start: 0,
      count: 12
    }, 'movieList');
  },

  getHotMovieList: function (url, data, list) {
    wx.showLoading({
      title: '正在加载..',
    });
    var _this = this;
    common.request({
      url: url,
      data: data,
      success: function (res) {
        console.log(res);
        var obj = {};
        obj[list] = _this.data.movieList.concat(res.data.subjects);
        _this.setData(obj);
        wx.hideLoading();
      }
    });
  },

  getMovieDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
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
    var obj = {
      data: {}
    };
    obj.data.start = this.data.data.start + this.data.data.count;
    this.setData(obj);
    this.getHotMovieList(this.data.url, this.data.data, 'movieList');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})