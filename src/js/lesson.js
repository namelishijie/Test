new stateBar({
  left: '<div class="seleClick"><span>不限年级</span><i class="iconfont icon-icon11"></i></div>',
  center: '<span>公开课</span>',
  right: '<i class="iconfont icon-iconfontmark"></i>',
  id: 'bar'
})

setAjax.ajax({
  url: './lesson',
  type: 'get',
  success: data => {
    for( var key in data) {
      
    }
  }
})