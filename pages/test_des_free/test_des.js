// pages/test_des/test_des.js
var request=require('../../request/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      tuijian:'猜你想测',
      change:'换一批',
    },
    test_id:'',
    test_des:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      test_id: options.test_id,
    })
    start_test.call(this)
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

  start_test:function(){
    let test_id=this.data.test_id;
    wx.navigateTo({
      url: '../start_test/start_test?test_id=' + test_id,
    })
  },
  
})

function start_test(){
  let test_id = this.data.test_id;
  request.requestStartTest({ test_id: test_id},(data) =>{
      console.log(data)
      this.setData({
        test_des:data,
      })
  })
}