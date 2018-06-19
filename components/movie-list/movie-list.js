// components/movie-list/movie-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movies: {
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
    handleClickMore: function (event) {
      var type = event.currentTarget.dataset.type;
      wx.navigateTo({
        url: './movie-more/movie-more?type=' + type,
      })
    }
  }
})
