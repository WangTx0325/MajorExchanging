var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      "lunbo": [
        { "url":"/static/lunbo1.png" },
        { "url":"/static/lunbo2.png" },
        { "url":"/static/lunbo3.png" }
      ],

      datetoday:'',
      target:['今天的任务是与你的匹配对象相互了解一下，聊聊彼此，聊聊专业'],
      tip:['不会聊天的同学戳这里'],

      isPunch: false
  },

  

  onclockin:function(){
    wx.navigateTo({
      url: '/pages/clockin/clockin'
    })
    // this.setData({
    //   isPunch:!this.data.isPunch
    // })
    // wx.showToast({
    //   title: '打卡成功',
    //   icon:'success',
    //   duration:1000
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    this.setData({
      datetoday:util.formatDate(new Date())
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