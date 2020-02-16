let postDeleteModel = {
  postDeleteData: {
    idPost: 0,
  }
};

postDeleteModel.setDeletePost = function (data) {
  this.postDeleteData.idPost = data;
};

postDeleteModel.getDeleteData = function() {
  return this.postDeleteData;
};

export default postDeleteModel;