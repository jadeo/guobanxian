// var request=require('../../request/request.js')
let urlBase='';
// 登录
// var login=login =>{
//   wx.login({
//     success:function(res){
//         if(red.code){

//         }
//     },
//     fail:function(){

//     },
//   })
// }

// 确定
let sure =(mask_hidden, model_hidden) =>{
  this.setData({
    mask_hidden:true,
    model_hidden:true,
  })
}

// 预览图片
let prew = ()=>{
  wx.previewImage({
    // cu
    urls: [],
  })
}

// 上传照片
let uploadImg = (filePath, formData) =>{
  wx.uploadFile({
    url: urlBase+ '',
    filePath: filePath,
    formData: formData,
    success: function(res){
      
    },
    fail:failCb,
    complete: completeCb,
  })
}

module.exports={
  sure:sure,
  prew: prew,
  uploadImg: uploadImg,
}