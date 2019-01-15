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
    for( var key in data.data) {
      let details = document.createElement('div');
      details.classList.add('details');
      details.innerHTML = `
        <div class="details-video">
          <div class="video-time">
            <p>${data.data[key].date}&nbsp;&nbsp;${data.data[key].timeStart}-${data.data[key].timeEnd}</p>
          </div>
        </div>
        <div class="details-user">
          <div class="user-left"></div>
          <div class="user-right">
            <p>${data.data[key].name}</p>
            <p>参与人数${data.data[key].person}人</p>
          </div>
        </div>
      `
      document.querySelector('.detailsBox').appendChild(details)
    }
  }
})

setFooter({
  active: 2
})
document.querySelector('.detailsBox').style.cssText = 'margin-bottom:' + document.querySelector('footer').offsetHeight + 'px';