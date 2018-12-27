let data = {
  activePhone: '',
  activePassword: '',
  activeCode: '',
  activeaffirmPassword: '',

  phone: '',
  password: '',
  code: '',
  affirmPassword: '',
  upSubmit: true
}
let item = {
  items: [
    {'name': '手机号', 'codeName': '发送验证码'},
    {'name': '验证码', 'class': 'code'},
    {'name': '密码', 'password': 'password'},
    {'name': '确认密码', 'password': 'password'}
  ]
}
document.querySelector('.index-content').innerHTML = template('input', item);

document.getElementsByClassName('goLogin')[0].onclick = ()=> {
  window.location.href = '../../index.html';
}

document.querySelectorAll('input').forEach( (item, index) => {
  item.oninput = function () {
    switch(index) {
      case 0:
        data.activePhone = this.value.length >= 3 ? true : false;
        data.phone = this.value;
        break;
      case 2:
        data.activePassword = this.value.length >= 3 ? true : false;
        data.password = this.value;
        break;
      case 1:
        data.activeCode = this.value.length == 4 ? true : false;
        data.code = this.value;
        break;
      case 3:
        data.activeaffirmPassword = this.value.length >= 3 ? true : false;
        data.affirmPassword = this.value;
        break;
    }
    data.activePhone && data.activePassword && data.activeCode && data.activeaffirmPassword && data.password == data.affirmPassword ? 
    (document.querySelector('.index-login>button').classList.add('active'), data.upSubmit = false ): 
    (document.querySelector('.index-login>button').classList.remove('active'), data.upSubmit = true );
  }
});

document.getElementsByClassName('register')[0].onclick = () => {
  if(data.upSubmit)return;
  let arrInput = Array.prototype.slice.call(document.querySelectorAll('.content-input input')),
      isInput = true;
  arrInput.forEach( (item, index) => {
    if(item.value == 0) {
      return isInput = false;
    }
  });
  if(isInput) {
    let obj = {
      phone: data.phone,
      password: data.password,
      code: data.code,
      affirmPassword: data.affirmPassword
    }
    setAjax.ajax({
      type: 'post',
      url: './register',
      data: obj,
      success: function () {
        
      }
    })
  }
}
