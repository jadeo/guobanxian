// pages/start_test/start_test.js
 var request=require('../../request/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select_nor:false,
    select_active:true,
    num:-1,
    test_id:'',
    subject:'',
    one:true,
    last:false,
    activeIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let test_id = options.test_id;
    request.requestSubject({ test_id: test_id }, data => {
      console.log(data)
      this.setData({
        subject:data,
      })
    })
  },

  // 查看结果
  look_result:function(){
    let test_id=this.data.test_id;
    wx.redirectTo({
      url: '../test_result/result?test_id='+ test_id,
    })
  },
  select:function(e){
    var curIndex=e.currentTarget.dataset.index;
    let that=this;
    console.log(curIndex)
    this.setData({
      num: curIndex,
    })
    let question_list = this.data.subject.question_list;
    let activeIndex = this.data.activeIndex;
    if (activeIndex < question_list.length-1){
      setTimeout(function(){
        that.setData({
          activeIndex: activeIndex + 1,
          num: -1,
          one:false,
        })
        console.log('继续加' + that.data.activeIndex)
      },300)
    } else if (that.data.activeIndex == question_list.length-1){
          console.log('没有了')
          this.setData({
            last:true,
          })
          return
    }
  },
  // 上一题
  pre:function(){
    let activeIndex = this.data.activeIndex;
    if (this.data.activeIndex<0){
         return
    }else{
      this.setData({
        activeIndex: activeIndex - 1,
      })
      if (this.data.activeIndex==0){
        this.setData({
          one: true,
        })
      }
      console.log('需要减' + this.data.activeIndex)
    }
  },

})