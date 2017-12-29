// pages/test_list/test_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_name:'精选',
    all_compare:['按人气','按时间'],
    idx:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  tab:function(e){
    var curIndex = e.currentTarget.dataset.index;
    this.setData({
      idx: curIndex,
    })
  }
})