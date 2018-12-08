function rem () {
  document.documentElement.style.fontSize = window.screen.availWidth / 20 + 'px';
}
rem();
window.onresize = () => {
  rem();
}
var _thishref = window.location.href;
// 判断是否登录
if(!window.sessionStorage.getItem('toKen')) {
  if(_thishref.slice(_thishref.lastIndexOf('/')+1, _thishref.length-5) != 'index') {
    window.location.href= '../../index.html';
  }
}

var new_element=document.createElement("script");
new_element.setAttribute('type','text/javascript');

if(_thishref.slice(_thishref.lastIndexOf('/')+1, _thishref.length-5) != 'index') {
  new_element.setAttribute('src','../../public/api/api.js');
  document.querySelector('head').appendChild(new_element);
}else {
  new_element.setAttribute('src','./public/api/api.js');
  document.querySelector('head').appendChild(new_element);
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
    setTimeout(()=> {
      for(let key in apis) {
        if(apis[key] == this.url) {
          api[key](this.item);
        }
      }
    },200)
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