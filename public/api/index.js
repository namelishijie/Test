const index = {
  login(options) {
    let user = 'aaa', code = this.codeNum;
    if(options.type.toLowerCase() == 'post' && options.data) {
      if(options.data.user == user && options.data.password == code) {
        window.sessionStorage.setItem('toKen', true);
        return options.success({code: 200, url: './src/html/home.html'});
      }
    }else {
      throw '类型错误'
    }
  },
  code(options) {
    do {
      this.codeNum = parseInt(Math.random()*10000);
    }while (String(this.codeNum).length != 4) {
      return options.success(this.codeNum);
    }
  }
}