<!-- TOC --><!-- /TOC -->
# 获取ajax
  ```
    setAjax.ajax({
      type: get/post
      url: './index'
      data: data,
      success: function () {},
      error: function () {}
    })
  ```
# 接口
## 登录
    请求地址 " ./index "
  返回参数|作用
  --|--:
  url|跳转地址
### 登录获取验证码
    请求地址 " ./index/code "
  返回参数|作用
  --|--:
  code|验证码
## 主页
    请求地址 " ./home "
  返回参数|作用
  --|--:
  province|地区
  subject|科目
  activity|选择老师
## 我的
    请求地址 " ./mine "
  返回参数|作用
  --|--:
  user|用户名称
# 公共组件
  ## 提示弹窗
  ```
    var p = new pop({
      text: '提示文字',
      time: 1000 //关闭弹窗时间
    })
    p.upPop({
      bgc: '#ff7b0f', //背景颜色,
      color: '#fff', //文字颜色
      success: function () {
        //弹窗消失回调
      }
    })
  ```
  ## 提示弹窗(带按钮事件)
  ```
    var p = new btnPop({
      text: '提示文字'
    })
    p.upPop({
      //可不带按钮则不写btn参数，也可带其中一个按钮
      btn: {
        btn1: 消失按钮文字,
        btn2: 确定按钮文字
      },
      btn1Success: function () {
        //取消/关闭 按钮点击回调事件
      },
      btn2Success: function () {
        //确定按钮点击回调事件
      }
    })
    //手动关闭弹窗(dom-弹窗元素, callback()-关闭回调函数)
    p.deletePop(dom, callback())
  ```
  ## 倒计时
  ```
    var p = new getCodeTime()
    p.startTime({
      success: function (data) {
        //倒计时返回时间
      }
    })
  ```
  ## 底部导航栏
  ```
    setFooter({
      active: 1, //当前位置
      success: function (data) {
        //点击回调
      }
    })
  ```