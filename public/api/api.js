const apis = {
  index: './index',
  indexCode: './index/code',
  register: './register',
  registerCode: './register/code',
  home: './home',
  lesson: './lesson'
}
var new_element=document.createElement("script");
new_element.setAttribute('type','text/javascript');
var head = document.querySelector('head');
var script = document.querySelector('script');

function setScript (url, callback) {
  new_element.setAttribute('src',url);
  head.insertBefore(new_element, script);
  setTimeout(function() {
    callback()
  },100);
}

const api = {
  index (options) {
    setScript('./public/api/index.js', () => index.login(options))
  },
  indexCode (options) {
    setScript('./public/api/index.js', () => index.code(options))
  },
  register (options) {
    setScript('../../public/api/register.js', () => register.register(options))
  },
  registerCode (options) {
    setScript('../../public/api/register.js', () => register.code(options))
  },
  home (options) {
    setScript('../../public/api/home.js', () => home.data(options))
  },
  lesson (options) {
    setScript('../../public/api/lesson.js', () => lesson.data(options))
  }
}