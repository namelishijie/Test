const register = {
  register (options) {
    let getPop = new pop();
    if(options.data.phone.length < 3) {
      return getPop.upPop({text: '账号有误'});
    } else if (options.data.code != this.codeNum) {
      return getPop.upPop({text: '验证码有误'});
    } else if (options.data.password != options.data.affirmPassword) {
      return getPop.upPop({text: '密码不一致'});
    }
    window.localStorage.setItem('localUser', options.data.phone);
    return options.success({code: 200})
  },
  code(options) {
    do {
      this.codeNum = parseInt(Math.random()*10000);
      window.code = this.codeNum;
    }while (String(this.codeNum).length != 4) {
      return options.success(this.codeNum);
    }
  }
}