const apis = {
  index: './index',
  indexCode: './index/code',
  register: './register',
  home: './home'
}
var new_element=document.createElement("script");
new_element.setAttribute('type','text/javascript');
var head = document.querySelector('head');
var script = document.querySelector('script');

// function getApi

const api = {
  index (options) {
    new_element.setAttribute('src','./public/api/index.js');
    head.insertBefore(new_element, script);
    setTimeout(function() {
      index.login(options)
    },100);
  },
  indexCode (options) {
    new_element.setAttribute('src','./public/api/index.js');
    head.insertBefore(new_element, script);
    setTimeout(function() {
      index.code(options)
    },100);
  },
  register (options) {
    new_element.setAttribute('src','./public/api/register.js');
    head.insertBefore(new_element, script);
    setTimeout(function() {
      index.code(options)
    },100);
  },
  home (options) {
    new_element.setAttribute('src','../../public/api/home.js');
    head.insertBefore(new_element, script);
    setTimeout(function() {
      home.data(options)
    },100)
  },
}