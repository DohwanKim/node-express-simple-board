import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import deleteBtnView from "../views/deleteBtnView.js";
import postView from "../views/postView.js";
import postModel from "../models/postModel.js"
import { getPostData, uploadPostData } from "../api/postAPI.js"


// TODO : 삭제 기능, 수정 기능, <- (해당 글의 비밀번호 일치 검사) 글 올렸을때 다시 렌더링 잘 되는지.
// TODO : 비밀번호 암호화, 될 수 있으면 테스트 작성 까지. (jest)
// TODO : 프론트 단에서 유효성 검사 해주기. -> 아이디, 비밀번호 양

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
      postView.render(data);

      for(let i=0; i<data.length; i++) {
        deleteBtnView.setup(i+1); //add events multi delete buttons
      }
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

  postViewDelBtn() {

  }
}