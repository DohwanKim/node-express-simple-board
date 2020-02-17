let postModifyModel = {
  postModifyData: {
    idPost: '',
    title: '',
    contents: '',
  }
};

postModifyModel.setModifyPost = function (idPost) {
  let titleData = document.getElementById('post_modify_title_'+idPost).value;
  let contentsData = document.getElementById('contents_modify_'+idPost).value;
  let verifyData = this.checkData(titleData, contentsData);

  if(verifyData) {
    this.postModifyData.idPost = idPost;
    this.postModifyData.title = titleData;
    this.postModifyData.contents = contentsData;
  } else {
    console.log('유효성 검사 통과 실패');
  }

  return verifyData;
};

postModifyModel.getModifyData = function() {
  return this.postModifyData;
};

postModifyModel.checkData = function (titleData, contentsData) {
  let verifyData = false;

  if(titleData === "") {
    alert('제목에 아무것도 없음');
  }else if(contentsData === "") {
    alert('내용에 아무것도 없음');
  } else {
    verifyData = true;
  }

  return verifyData;
};

export default postModifyModel;