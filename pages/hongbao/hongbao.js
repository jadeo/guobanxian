// pages/hongbao/hongbao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: [2, 5, 20,50,100,200],
    curIndex:0,
    session3rd:'',
    count:2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'session',
      success: function (res) {
        that.setData({
          session3rd: res.data,
        })
      }
    })
  },

  go_pay:function(e){
    console.log(e)
    

  },

  get_money:function(e){
    let count=e.detail.value;
    this.setData(
      {
        count: count,
      }
    )
  },
  reword_any:function(e){
    const index = e.currentTarget.dataset.index;
    let count = e.currentTarget.dataset.num ? e.currentTarget.dataset.num : this.data.count;
    let session3rd = this.data.session3rd;
    console.log(session3rd)
    console.log(count)
    wx.request({
      url: 'https://xiong.suxcx.com/index.php?s=/addon/Fans/Xpay/payweixinx',//改成你自己的链接  
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        session3rd: session3rd,
        money: count
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
        wx.requestPayment({
          'timeStamp': res.data.timeStamp,
          'nonceStr': res.data.nonceStr,
          'package': res.data.package,
          'signType': 'MD5',
          'paySign': res.data.paySign,
          success: function (res) {
            console.log(res);
          }
        })
      }
    })
  },
})

