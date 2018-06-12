var { common } = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotMovieList:[],
    top250MovieList:[],
    coming_soonMovieList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotMovieList('/v2/movie/in_theaters',{  //请求正在热映电影列表
      start: 0,
      count: 3
    },'hotMovieList');
    this.getHotMovieList('/v2/movie/top250', {  //请求正在热映电影列表
      start: 0,
      count: 3
    }, 'top250MovieList');
    this.getHotMovieList('/v2/movie/coming_soon', {  //请求正在热映电影列表
      start: 0,
      count: 3
    }, 'coming_soonMovieList');
  },

  getHotMovieList: function(url,data,list) {
    wx.showLoading({
      title: '正在加载中',
    })
    var _this = this;
    common.request({
      url:url,
      data:data,
      success: function(res){
        console.log(res);
        var obj={};
        obj[list]={
          movies: res.data.subjects,
          title:res.data.title
        };
        _this.setData(obj);
        wx.hideLoading();
      }
    });
  },

  handleClickMore: function (event) {
    var type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: './movie-more/movie-more?type='+type,
    })
  },

  getMovieDetail: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: './movie-detail/movie-detail?id='+id
    })
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