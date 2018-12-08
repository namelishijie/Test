var activePhone = false, activePassword = false,
    phoneVal = '', passwordVal = '',
    user = 'aaa', password = '123';

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

document.querySelector('.index-login > button').onclick = function () {
  if(this.classList.contains('active')) {
    if(phoneVal == user && passwordVal == password) {
      window.location.href = './src/html/home.html'
    }
  }
}
var pop1 = new pop();
pop1.upPop()