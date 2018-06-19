// components/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getMovieDetail: function (event) {
      var id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/movies/movie-detail/movie-detail?id=' + id
      })
    }
  }
})
