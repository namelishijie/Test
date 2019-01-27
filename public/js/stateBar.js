/**
 * 顶部样式
 */
class stateBar {
  constructor ({left = '', center = '', right = '', id, background = '#20E581'}) {
    this.left = left
    this.center = center
    this.right = right
    this.dom = id
    this.bgc = background
    this.body()
  }
  body () {
    let html = `
      <div id="stateBar" class='areaPadding' 
        style='
          background-color: ${this.bgc};
          display: flex;
          justify-content: space-between;
          padding: 14px 17px;
          color: #fff;
          overflow: hidden;
          position: relative;'
      >
        <div>${this.left}</div>
        <div 
          style='  
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;'
        >
          ${this.center}
        </div>
        <div>${this.right}</div>
      </div>
    `
    document.getElementById(this.dom).innerHTML = html
  }
}