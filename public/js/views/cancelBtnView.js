import View from "./View.js";

const cancelBtnView = Object.create(View);

cancelBtnView.setup = function (el) {
  this.init(el);
  this.bindEvent();

  return this;
};

cancelBtnView.bindEvent = function () {
  let cancelBtn = this.el;
  cancelBtn.addEventListener('click', ()=> {
    this.emit('@cancel');
  });
};

cancelBtnView.clear = function () {
  document.getElementById('userData_id').value = '';
  document.getElementById('userData_nick').value = '';
  document.getElementById('userData_pw').value = '';
  document.getElementById('post_title').value = '';
  document.getElementById('post_contents').value = '';
};

export default cancelBtnView;