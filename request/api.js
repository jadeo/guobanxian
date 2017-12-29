const API_Base = "https://im.17link.cc/PsyFace/";
module.exports={
  // banner
  API_banner: API_Base + 'banner',
  // 开始答题
  API_start_test: API_Base + 'startResponse',
  // 最新列表
  API_newsList: API_Base + 'newsList',
  // 题目列表
  API_subject: API_Base + 'questionList',
  // 查看结果
  API_result: API_Base + 'subResult',
  // 参与打卡
  API_join_punch: API_Base + '/Yjuser/Yjfast/in_punch_clock',
  // 项目设置
  API_punch_set: API_Base + '/Yjuser/Yjfast2/project_set',
  // 评论，回复
  API_comment: API_Base + '/Yjuser/Yjfast/project_comment',
  // 点赞，取消点赞
  API_heart: API_Base + '/Yjuser/Yjfast/project_like',
  //打卡记录
  API_punch_record: API_Base + '/Yjuser/Yjfast2/punchrecording',
  // 个人项目打卡列表
  API_self_task: API_Base + '/Yjuser/Yjfast/lists',
  // 个人项目打卡任务列表
  API_self_task_detail: API_Base + '/Yjuser/Yjfast/lists',
  // 消息列表
  API_news_list: API_Base + '/Yjuser/Yjfast/msglist',
  // 打卡
  API_punch: API_Base + '/Yjuser/Yjfast/normal_punch_clock',
  // 填写地址
  API_address: API_Base + '/Yjuser/Yjfast/add_user_address',
  // 创建打卡项目
  API_addcontent: API_Base + '/Yjuser/Yjfast2/addcontent',
  // 删除打卡项目
  API_del: API_Base + '/Yjuser/Yjfast/deletecontent',
  // 消息列表详情
  API_tuwenDetail: API_Base + '/Yjuser/Yjfast/msglistdetails',
  // 生成项目图片
  API_getCode: API_Base + '/Yjuser/Usercenter/getCode',
  // 参与好友
  API_join: API_Base + '/Yjuser/Yjfast/join',
  // 打卡圈
  API_circle: API_Base +'/Yjuser/Yjfast/punch_cricle',
  // 打卡圈发布
  API_circle_relese: API_Base + '/Yjuser/Yjfast/punch_circle_came',
  // 分享
  API_punch_share: API_Base + '/Yjuser/Yjfast/punch_share',
  // 邀请卡片
  API_getUserImg: API_Base + '/Yjuser/Usercenter/getUserImg',
  // 更多
  API_more: API_Base +'/Yjuser/Yjfast2/more_lists',
}


