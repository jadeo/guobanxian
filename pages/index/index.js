//index.js
//获取应用实例
var request=require('../../request/request.js');
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    classify: [{ img: '../../imgs/fenleiicon_011.png', text: '精选' }, { img: '../../imgs/fenleiicon_022.png', text: '热门' }, { img: '../../imgs/fenleiicon_033.png', text: '情感' }, { img: '../../imgs/fenleiicon_044.png', text: '趣味' }, { img: '../../imgs/fenleiicon_055.png', text: '事业' }, { img: '../../imgs/fenleiicon_066.png', text: '职业' }, { img: '../../imgs/fenleiicon_077.png', text: '性格' }, { img: '../../imgs/fenleiicon_088.png', text: '综合' }
    ],
    item:{
      tuijian:'半仙推荐',
      change:'换一批',
      pay:false,
      newsList: [],
    },
    all_compare:['按人气','按时间'],
    idx:[],
    banner:[],
    mask_hidden:true,
    select_time:0,
    limit:5,
    free:true,
  },
  onLoad: function () {
    var that=this;
    let limit = this.data.limit;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500,
    })
    // 请求banner
    request.requestBanner({},data => {
      that.setData({
        banner:data,
      })
    })
    // 请求最新列表
    test_list.call(that)
  },

  // 跳转到测试管理
  manage:function(){
      wx.navigateTo({
        url: '../test_manage/manage',
      })
  },
  // 跳转测试详情
  test_des:function(e){
    // 是免费的还是付费的
    let free=this.data.free;
    console.log(e)
    let test_id = e.currentTarget.dataset.id
    if(free){
      wx.navigateTo({
        url: '../test_des_free/test_des?test_id=' + test_id,
      })
    }else{
      wx.navigateTo({
        url: '../test_des_money/test_des?test_id='+test_id,
      })
    }
  },
  // 跳转到收费测试详情
  // test_des: function () {
  //   
  // },
 

  // 跳转到搜索
  search:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  // 跳转到分类详情
  test_list:function(){
      wx.navigateTo({
        url: '../test_list/test_list',
      })
  },
  // 按时间，按人气
  tabab:function(e){
    var curIndex=e.currentTarget.dataset.index;
    this.setData({
      idx: curIndex,
    })
  },
  // 个人中心
  my_center:function(){
    wx.navigateTo({
      url: '../my_center/my',
    })
  },
  onReachBottom: function () {    //上拉加载
    // console.log('loading...')
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500,
    })
    console.log('上拉加载')
    test_list.call(this);
  },
  // onPullDownRefresh: function () {      //下拉刷新
  //   var that = this;
  //   requests.requestBannerList(    //请求banner、每日推荐
  //     {}, (data) => {
  //       console.log(data)
  //       setTimeout(function () {
  //         wx.hideToast()
  //       }, 1000)
  //       that.setData({
  //         bannerData: data
  //       })
  //     }, () => {
  //       //请求失败
  //     }, () => {
  //       //请求完成
  //     }
  //   )
  //   refreshNewsListData.call(that);   //请求最新试题列表
  // },
})

function test_list(){
  let select_time = this.data.select_time;
  let limit = this.data.limit;
  let newsList = this.data.item.newsList;
  console.log(select_time)
  console.log(limit)
  request.requestNewsList({
    select_time: select_time,
    limit: limit,
  }, (data) => {
    console.log(data)
    this.setData({
      'item.newsList': newsList.concat(data.list),
      select_time: data.select_time,
    })
    wx.hideToast()
  })
}

