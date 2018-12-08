function rem () {
  document.documentElement.style.fontSize = window.screen.availWidth / 20 + 'px';
}
rem();
window.onresize = () => {
  rem();
}

// 判断是否登录
if(!window.sessionStorage.getItem('toKen')) {
  let _thishref = window.location.href;
  if(_thishref.slice(_thishref.lastIndexOf('/')+1, _thishref.length-5) != 'index') {
    window.location.href= '../../index.html';
  }
}

// 弹窗
class pop {
  constructor ( item = {text: 'undefined', time: '1000'} ) {
    this.text = item.text;
    this.time = item.time;
  }
  upPop ( item = {bgc: '#17a95f', color: '#fff'} ) {
    let {bgc: bgc, color: color} = item,
        div = document.createElement('div'),
        span = document.createElement('span');
    span.innerText = this.text;
    div.appendChild(span);
    div.style.cssText = `
      padding: 10px 25px; 
      color: ${color};
      background-color: ${bgc};
      position: fixed;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 5px;
    `;

    document.querySelector('body').appendChild(div);
  }
}

const apis = {
  home: './home'
}

class setAjax {
  constructor ( item={} ) {
    this.url = item.url;
    this.item = item;
  }
  static ajax ( item = {type: 'get' , url: '', data: '', success: ()=>{}, error: ()=>{} } ) {
    new setAjax( item ).ajax;
  }
  get ajax() {
    for(let key in apis) {
      if(apis[key] == this.url) {
        api[key](this.item);
      }
    }
  }
}

const api = {
  home(options) {
    const item = {
      subject: [
        {url: '../images/navIcon/shuxue.png', name: '数学'},
        {url: '../images/navIcon/yinyu.png', name: '英语'},
        {url: '../images/navIcon/yuwen.png', name: '语文'},
        {url: '../images/navIcon/wuli.png', name: '物理'},
        {url: '../images/navIcon/zaixianke.png', name: '在线课'},
        {url: '../images/navIcon/huaxue.png', name: '化学'},
        {url: '../images/navIcon/aoshu.png', name: '奥数'},
        {url: '../images/navIcon/dili.png', name: '地理'},
        {url: '../images/navIcon/kexue.png', name: '科学'},
        {url: '../images/navIcon/lishi.png', name: '历史'},
        {url: '../images/navIcon/shengwu.png', name: '生物'},
        {url: '../images/navIcon/zhengzhi.png', name: '政治'}
      ]
    }
    return options.success(JSON.stringify(item));
  },
}



setAjax.ajax({
  type: 'get',
  url: './home',
  success: function (data) {
    console.log(data)
  }
})





