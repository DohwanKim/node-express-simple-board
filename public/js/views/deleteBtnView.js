import View from './View.js';

const cancelBtnView = Object.create(View);

cancelBtnView.setup = function (el) {
  this.init(el);

  return this
};


cancelBtnView.bindEachEvent = function (i) {
  document.getElementById('btn_'+i).addEventListener('click', () => {
    let res = '@delete_' + i;
    this.emit(res);
  });
};


export default cancelBtnView;