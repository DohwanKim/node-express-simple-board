import View from './View.js';

const cancelBtnView = Object.create(View);

cancelBtnView.setup = function (i) {
  this.bindEvent(i);
  return this
};

cancelBtnView.bindEvent = function (i) {
  document.getElementById('btn_'+i).addEventListener('click', function () {
    console.log(this.id);
  })
};


export default cancelBtnView;