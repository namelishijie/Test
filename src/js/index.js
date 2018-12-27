var activePhone = false, activePassword = false,
    phoneVal = '', passwordVal = '', getCode = true;

document.querySelectorAll('input').forEach( (item, index) => {
  item.oninput = function () {
    switch(index) {
      case 0:
        activePhone = this.value.length >= 3 ? true : false;
        phoneVal = this.value;
        break;
      case 1:
        activePassword = this.value.length >= 3 ? true : false;
        passwordVal = this.value;
        break;
    }
    activePhone && activePassword ? 
    document.querySelector('.index-login>button').classList.add('active') : 
    document.querySelector('.index-login>button').classList.remove('active');
  }
});

document.querySelector('.goRegister').onclick = function () {
  window.location.href = './src/html/register.html'
}

document.querySelector('.index-code').onclick = function () {
  if(getCode && phoneVal.length >= 3) {
    getCode = false;
    let _this = this;
    let code = new getCodeTime();
    code.startTime({
      success: function (data) {
        _this.innerText = `再次获取${data}`;
        data < 1 ? (getCode = true, _this.innerText = '获取验证码') : ''
      }
    });
    setAjax.ajax({
      type: 'get',
      url: './index/code',
      success: function (data) {
        let getPop = new pop({text: data});
        getPop.upPop();
      }
    })
  }
}

document.querySelector('.index-login > button').onclick = function () {
  if(this.classList.contains('active')) {
    let obj = {'user': phoneVal, 'password': passwordVal};
    setAjax.ajax({
      type: 'POST',
      url: './index',
      data: obj,
      success: function (data) {
        data.code == 200 ? window.location.href = data.url : '';
      }
    })
  }
}
