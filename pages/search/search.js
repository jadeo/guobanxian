// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      value:'',
      search_his:[],
      search_result:true,
      search_history:false,
      hot_search:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var getSearch = wx.getStorageSync('searchData');
    console.log(getSearch)
    this.setData({
      search_his: getSearch,
      inputValue: ''
    })
  },
  get_value:function(e){
      let value=e.detail.value;
      this.setData({
        value:value,
      })
  },
  // 搜索
  search_result: function () {
    let search_his = this.data.search_his;
    this.setData({
      search_result: false,
      search_history: true,
      hot_search: true,
    })
    let localStorageValue = [];
    if (this.data.value != '') {
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(this.data.value)
      console.log(searchData)
      wx.setStorageSync('searchData', searchData)
    } else {
      return
    }
  },
  // 清除搜索
  clear_search:function(){
    console.log('gfthg')
    let value=this.data.value;
      if(value){
        this.setData({
          value:'',
        })
      }
  },
  // 清除历史
  clear_his:function(){
    let that = this;
    let search_his = this.data.search_his;
    if (search_his!==[]){
      wx.showModal({
        title: '提示',
        content: '确认删除吗？',
        success: function (res) {
          if (res.confirm) {
            wx.removeStorageSync('searchData')
            that.setData({
              search_his: [],
            })
          }
        },
        fail: function () {

        },
      })
    }else{
      return
    }
  },
})
