const postData = {
  id: '',
  nick: '',
  pw: '',
  title: '',
  contents: ''
};

postData.post = function () {
  this.id = document.getElementById('userData_id').value;
  this.nick = document.getElementById('userData_nick').value;
  this.pw = document.getElementById('userData_pw').value;
  this.title = document.getElementById('post_summit').value;
  this.contents = document.getElementById('post_cancel').value;
};

postData.get = function () {

};

export default postData;