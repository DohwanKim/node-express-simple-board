let postCheckModel = {
  postCheckData: {
    idPost: 0,
    pw: '',
  }
};

postCheckModel.setCheckPost = function (pwPrompt, idPost) {
  this.postCheckData.pw = pwPrompt;
  this.postCheckData.idPost = idPost;
};

postCheckModel.getCheckData = function() {
  return this.postCheckData;
};

export default postCheckModel;