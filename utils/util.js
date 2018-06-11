const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var common = {
  request: function (param) {
    wx.request({
      url: 'http://127.0.0.1:3000/' + param.url, //仅为示例，并非真实的接口地址
      data: param.data || '',
      header: {
        'content-type': '' // 默认值
      },
      success: function (res) {
        param.success(res);
      },
      fail: function (err) {
        param.error(err);
      }
    });
  }
};

module.exports = {
  formatTime: formatTime,
  common
}
