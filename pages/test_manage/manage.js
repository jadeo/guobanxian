// pages/test_manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test_list_name: ['未完成', '已完成', '待支付','想测'],
    idx:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tab:function(e){
    var curIndex=e.currentTarget.dataset.index;
    this.setData({
      idx: curIndex,
    })
  }
})