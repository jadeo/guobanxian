// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      item:{
        src:'../../imgs/1.png',
        group_name:'群名字',
        group_num:'已发起了3个排行',
        btn_name:'查看全部',
      },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  look_all:function(){
      console.log('fff')
     wx.navigateTo({
       url: '../all_rank/rank',
     })
  },
})