var postData = require('../../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: '',  //帖子id
    postDetail: {},  //帖子数据
    isCollected: false,  //是否收藏
    isPlayMusic: false  //是否播放音乐
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      postDetail: postData.postList[id]
    });
    this.setData({
      postId: id
    });
    // var collection = {
    //   1: true,
    //   2:false
    // }
    var collection = wx.getStorageSync('collection');
    if (collection) {  //  如果已经存在此字段
      this.setData({
        isCollected: collection[id] ? collection[id] : false
      });
    } else {
      var collection = {};
      collection[id] = false;
      wx.setStorageSync('collection', collection);
      this.setData({
        isCollected: false
      });
    }
  },

  handleClickShare: function (event) {
    var list = [
      '分享到朋友圈',
      '分享到群组'
    ];
    wx.showActionSheet({
      itemList: list,
      success: function (res) {
        wx.showToast({
          title: list[res.tapIndex] + '成功！',
        })
      }
    })
  },

  handleClickCollect: function (event) {
    var collection = wx.getStorageSync('collection');
    if (this.data.isCollected) {
      collection[this.data.postId] = false;
    } else {
      collection[this.data.postId] = true;
    }
    this.setData({
      isCollected: !this.data.isCollected
    });
    wx.setStorageSync('collection', collection);
    wx.showToast({
      title: this.data.isCollected ? '收藏成功' : '取消成功'
    })
  },

  handleClickMusic: function (event) {
    var postId = this.data.postId;
    var postDetail = postData.postList[postId];
    if (!this.data.isPlayMusic) {
      wx.playBackgroundAudio({
        dataUrl: postDetail.music.url,
        title: postDetail.music.title,
        coverImgUrl: postDetail.music.coverImg
      })
    } else {
      wx.stopBackgroundAudio();
    }
    this.setData({
      isPlayMusic: !this.data.isPlayMusic
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