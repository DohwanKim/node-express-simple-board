let postModel = {
  postData : {
    idPost: 0,
    postId: '',
    postPw: '',
    postNick: '',
    postTitle: '',
    postContents: '',
    createdAt: '',
    updatedAt: '',
  }
};

postModel.setInputPost = function (data) {
  console.log('data연결: ', data);
  this.postData.postId = data[0];
  this.postData.postPw = data[1];
  this.postData.postNick = data[2];
  this.postData.postTitle = data[3];
  this.postData.postContents = data[4];
};

postModel.getData = function() {
  return this.postData;
};

postModel.DataClear = function () {
  this.postData.postId = '';
  this.postData.postPw = '';
  this.postData.postNick = '';
  this.postData.postTitle = '';
  this.postData.postContents = '';
};

export default postModel;