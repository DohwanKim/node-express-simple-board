import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import postView from "../views/postView.js";
import postModel from "../models/postModel.js"
import { getPostData, uploadPostData } from "../api/postAPI.js"

export default {
  init() {
    submitBtnView.setup(document.getElementById('post_summit'))
      .on('@submit', (evt)=>{
        this.submitPost();
      });
    cancelBtnView.setup(document.getElementById('post_cancel')).on('@cancel', (evt)=>{
      this.clearPost();
    });
    postView.setup(document.getElementById('post_area'));
    this.getAllPostData();
  },
  getAllPostData() {
    getPostData(function (data) {
      console.log(data);
      postView.render(data);
    });
  },
  submitPost() {
    let res = submitBtnView.getInputPostData();
    cancelBtnView.clear();
    postModel.setInputPost(res);
    uploadPostData(postModel.getData(),function () {
      getPostData(function (data) {
        postView.render(data);
      });
    });
  },
  clearPost() {
    cancelBtnView.clear();
  },
}