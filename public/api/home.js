const home = {
  data(options) {
    const item = {
      'province': apiData.province,
      'subject': apiData.subject,
      'activity': apiData.activity
    }
    return options.success(item);
  }
}