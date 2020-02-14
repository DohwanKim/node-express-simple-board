import View from './View.js';

// TODO : 여러 인자를 위한 뷰를 새로 만들어야 할듯
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