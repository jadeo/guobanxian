// pages/test_result/result.js
let request=require('../../request/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      item:{
        tuijian2:'测试匹配度',
        change2:'',
        tuijian:'猜你想测',
        change:'换一批'
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  share:function(){
    wx.navigateTo({
      url: '../share_test/share',
    })
  },
  
  reword:function(){
    wx.navigateTo({
      url: '../hongbao/hongbao',
    })
  },
  all_match:function(){
    wx.navigateTo({
      url: '../group_rank/rank',
    })
  },

  onShareAppMessage:function(){
    return{
      title:'',
      path:'pages/share_test/share',
    }
  },
})

function result(){
  
}