// pages/my_center/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 测试管理
  test_mange:function(){
      wx.navigateTo({
        url: '../test_manage/manage',
      })
  },

  // 
  group_map_rank:function(){
    wx.navigateTo({
      url: '../match/match',
    })
  },

  feedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  custom:function(){

  },
  more:function(){
    wx.navigateTo({
      url: '../more/more',
    })
  },

})