const home = {
  data(options) {
    const item = {
      'province': data.province,
      'subject': data.subject,
      'activity': data.activity
    }
    return options.success(item);
  }
}