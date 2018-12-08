var activePhone = false, activePassword = false,
    phoneVal = '', passwordVal = '';

document.querySelectorAll('input').forEach( (item, index) => {
  item.oninput = function () {
    switch(index) {
      case 0:
        activePhone = this.value.length >= 3 ? true : false;
        phoneVal = this.value;
        break;
      case 1:
        activePassword = this.value.length >= 4 ? true : false;
        passwordVal = this.value;
        break;
    }
    activePhone && activePassword ? 
    document.querySelector('.index-login>button').classList.add('active') : 
    document.querySelector('.index-login>button').classList.remove('active');
  }
});

document.querySelector('.index-code').onclick = function () {
  setAjax.ajax({
    type: 'get',
    url: './index/code',
    success: function (data) {
      console.log(data)
    }
  })
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
