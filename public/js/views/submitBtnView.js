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

submitBtnView.getInputPostData = function () {
  let res = [];
  res.push(document.getElementById('userData_id').value);
  res.push(document.getElementById('userData_pw').value);
  res.push(document.getElementById('userData_nick').value);
  res.push(document.getElementById('post_title').value);
  res.push(document.getElementById('post_contents').value);

  return res;
};

export default submitBtnView;