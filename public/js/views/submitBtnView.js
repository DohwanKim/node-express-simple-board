import View from './View.js';

const submitBtnView = Object.create(View);

submitBtnView.setup = function (el) {
  this.init(el);
  this.bindEvent();

  return this
};

submitBtnView.bindEvent = function () {
  let submitBtn = this.el;
  submitBtn.addEventListener('click', ()=>{
    this.emit('@submit');
  })
};

export default submitBtnView;