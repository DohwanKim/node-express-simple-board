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

  let verifyData = this.checkData(data);

  if(verifyData) {
    this.postData.postId = data[0];
    this.postData.postPw = data[1];
    this.postData.postNick = data[2];
    this.postData.postTitle = data[3];
    this.postData.postContents = data[4];
  } else {
    console.log('유효성 검사 통과 실패');
  }

  return verifyData;
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

postModel.checkData = function (data) {
  let verifyData = false;

  if(data[0] === "") {
    alert('아이디에 아무것도 없음');
  }else if(data[2] === "") {
    alert('닉네임 아무것도 없음');
  }else if(data[1] === "") {
    alert('패스워드 아무것도 없음');
  }else if(data[3] === "") {
    alert('제목 아무것도 없음');
  }else if(data[4] === "") {
    alert('내용 아무것도 없음');
  } else {
    verifyData = true;
  }

  return verifyData;
};

export default postModel;