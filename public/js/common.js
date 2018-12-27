//设置rem
function rem () {
  document.documentElement.style.fontSize = window.screen.availWidth / 20 + 'px';
}
rem();
window.onresize = () => {
  rem();
}

//dom节点数据
var dom = {
  _thishref: window.location.href,
  new_element: document.createElement("script")
}

// 判断是否登录
if(!window.sessionStorage.getItem('toKen')) {
  let last = dom._thishref.slice(dom._thishref.lastIndexOf('/')+1, dom._thishref.length-5);
  if( last != 'register' ) {
    if( last != 'index' ) {
      window.location.href= '../../index.html';
    }
  }
}

dom.new_element.setAttribute('type','text/javascript');
if(dom._thishref.slice(dom._thishref.lastIndexOf('/')+1, dom._thishref.length-5) != 'index') {
  dom.new_element.setAttribute('src','../../public/api/api.js');
  document.querySelector('head').appendChild(dom.new_element);
}else {
  dom.new_element.setAttribute('src','./public/api/api.js');
  document.querySelector('head').appendChild(dom.new_element);
}

/**
 * 获取ajax
 */
class setAjax {
  constructor ( item = {} ) {
    this.url = item.url;
    this.item = item;
  }
  /**
   * 设置ajax
   * @param type 类型
   * @param url 地址
   * @param data 传参
   * @param success 成功回调
   * @param error 失败回调
   */
  static ajax ({type = 'get' , url = '', data = '', success = () =>{}, error = () =>{} } = {} ) {
    let item = {
      type: type,
      url: url,
      data: data,
      success: success,
      error: error
    }
    new setAjax( item ).ajax;
  }
  get ajax() {
    setTimeout(() => {
      for(let key in apis) {
        if(apis[key] == this.url) {
          api[key](this.item);
        }
      }
    },200)
  }
}

/**
 * 提示弹窗
 * @param text 提示文字
 * @param time 定时关闭时间
 */
class pop {
  constructor ( {text = 'undefined', time = '1000'} = {} ) {
    this.text = text;
    this.time = time;
  }
  /**
   * 弹窗
   * @param bgc 背景颜色
   * @param color 文字颜色
   * @param success 弹窗消失回调 
   */
  upPop ({bgc = '#ff7b0f', color = '#fff', success = ()=>{}} = {}) {
    let div = document.createElement('div'),
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
      border-radius: 5px;
      box-shadow: 2px 2px 5px 1px #a7a6a6;
      animation: pop .28s forwards;
    `;
    document.body.appendChild(div);
    setTimeout(() => {
      document.body.removeChild(div);
      success();
    },this.time)
  }
}

/**
 * 弹窗
 * @param pop 弹窗
 * @param deletePop 关闭弹窗 
 */
class btnPop extends pop {
  constructor () {
    super();
  }
  /**
   * 按钮弹窗(点击x 关闭事件为btn1事件)
   * @param btn 按钮数组 
   * @param btn1 取消按钮 
   * @param btn2 确定按钮 
   * @param btn1Success 取消/关闭 回调函数 
   * @param btn2Success 确定回调函数 
   */
  pop ({btn = { btn1: 0, btn2: 0}, btn1Success = () => {}, btn2Success = () => {}} = {}) {
    let shade = document.createElement('div');
    shade.style.cssText = 'background:rgba(0,0,0,0.5);position: fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;';
    let html = `
      <div style="width:180px;max-width:80%;background-color:#fff;border:1px solid #e8e8e8;border-radius:5px;">
      <div style="padding:2px 10px 0 10px;text-align:right;"><span data-name="deleteIcon">x<span></div>
      <div style="padding:0 10px 5px 10px;text-align:center;height:40px;max-height:60px;overflow-x:auto;">${this.text}</div>
      <div style="width:100%;display:flex;">`;
    btn.btn1 ? html += `<button data-name="delete" style="flex:1;background-color:#fff;padding:6px 0;border:0;outline:none;border-top:1px solid #e8e8e8">${btn.btn1}</button><div style="border-left:1px solid #e8e8e8"></div>`:'';
    btn.btn2 ? html += `<button data-name="ensure" style="flex:1;background-color:#fff;color:#00b5ff;padding:6px 0;border:0;outline:none;border-top:1px solid #e8e8e8">${btn.btn2}</button>`:'';    
    html += `</div></div>`;
    shade.innerHTML = html;
    document.body.appendChild(shade);
    shade.onclick = e => {
      let ev = e || window.enent,
          target = ev.target || ev.srcElement;
      switch(target.getAttribute('data-name')) {
        case 'delete':
          this.deletePop(shade, btn1Success);
          break;
        case 'ensure':
          this.deletePop(shade, btn2Success);
          break;
        case 'deleteIcon':
          this.deletePop(shade, btn1Success);
          break;
      }
    }
  }
  deletePop (shade, success) {
    document.body.removeChild(shade);
    return success({code: 200});
  }
}

/**
 * 倒计时
 * @param time 倒计时时间
 * @param sport 倒计时速度
 */
class getCodeTime {
  constructor ({time = 10, sport = 1000} = {} ) {
    this.time = time;
    this.sport = sport;
  }
  /**
   * 倒计时开始
   * @param success 返回时间 
   */
  startTime ({success = () => {}} = {}) {
    this.success = success;
    let time = setInterval( ()=> {
      if (this.time < 0) {
        clearTimeout(time);
        return 'success';
      } else {
        this.success(this.time)
      }
      this.time--;
    },this.sport)
  }
}

/**
 * 底部导航栏
 * @param active 当前位置
 * @param success 点击回调 
 */
function setFooter ({active, success = () => {}} = {}) {
  if(active == undefined || active < 1 || active > 5 || typeof(active) != 'number') {
    throw '请传底部导航栏active位置,类型为Number,不小于1且不大于5'
  }
  let html = document.createElement('footer'),
      ul = '<ul>';
  html.id = 'footer';
  let arr = [
    {name:'首页', class:'icon-iconfonticon-shouye'},
    {name:'公开课', class:'icon-iconfontshu'},
    {name:'帮我选', class:'icon-iconfontmark'},
    {name:'学习', class:'icon-iconfontshu'},
    {name:'我的', class:'icon-iconfontren1'}
  ];
  for(var key in arr) {
    ul += `<li class="${active == Number(key)+1 ? 'active' : ''}"}><div><i class="iconfont ${arr[key].class}"></i></div><div><span>${arr[key].name}</span></div></li>`;
  }
  ul += '</ul>';
  html.innerHTML = ul;
  document.body.appendChild(html);
  html.onclick = e => {
    let ev = e || window.event,
        target = ev.target || ev.srcElement,
        name = target.nodeName.toLowerCase();
    if( name == 'i' || name == 'span' ) {
      let li = target.parentNode.parentNode;
      Array.prototype.slice.call(li.parentNode.children).forEach( item => {
        if( li == item ) {
          item.classList.add('active');
          success({
            dom: item,
            name: li.querySelector('span').innerText
          });
        } else {
          item.classList.remove('active');
        }
      })
    }
  }
}
