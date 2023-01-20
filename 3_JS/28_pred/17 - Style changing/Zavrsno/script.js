//1
const ulEl = document.querySelector('ul');
ulEl.style.listStyleType = 'decimal';

//2
const divPivo = document.querySelector('.info');
divPivo.setAttribute('class', 'hide');

//3
const cssObj = window.getComputedStyle(document.body, null);
const mLeft = cssObj.getPropertyValue("margin-left");
console.log(mLeft);

//4
(function myMove() {
    let id = null;
    let margin = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if (margin == 30) {
        clearInterval(id);
      } else {
        margin++;
        document.body.style.margin = margin + 'px';
      }
    }
  })()
