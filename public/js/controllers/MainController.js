import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import deleteBtnView from "../views/deleteBtnView.js";
import postView from "../views/postView.js";
import postModel from "../models/postModel.js"
import {getPostData, uploadPostData, getPostDataPromise} from "../api/postAPI.js"

// TODO : 프론트 단에서 작성시 유효성 검사 해주기. (o)
// TODO : 글 올렸을때 다시 렌더링 잘 되는지 (?)
// TODO : 삭제 기능 -> 해당 글의 비밀번호 일치 검사 ()
// TODO : 수정 기능 -> 해당 글의 비밀번호 일치 검사 ()
// TODO : 비밀번호 암호화 ()
// TODO : 될 수 있으면 jest로 프론트 테스트 작성 까지 ()

export default {
  init() {
    submitBtnView.setup(document.getElementById('post_summit'))
      .on('@submit', (evt) => {
        this.submitPost();
      });
    cancelBtnView.setup(document.getElementById('post_cancel'))
      .on('@cancel', (evt) => {
        this.clearPost();
      });
    postView.setup(document.getElementById('post_area'));
    this.getAllPostData();
  },
  getAllPostData() {
    getPostDataPromise().then(data => {
      postView.render(data);
      for (let i = 1; i < data.length+1; i++) {
        document.getElementById('btn_'+i).addEventListener('click', () => {
          console.log('hello :', this);
        });
      }
    }).catch(function (err) {
      console.error(err); // Error 출력
    });
  },
  submitPost() {
    let res = submitBtnView.getInputPostData();
    let verifyData = postModel.setInputPost(res);

    if(verifyData){
      cancelBtnView.clear();
      uploadPostData(postModel.getData(), function () {
        getPostData(function (data) {
          postView.render(data);
        });
      });
    } else {
      console.log('컨트롤러 부분 데이터 업로드 거부');
    }
  },
  clearPost() {
    cancelBtnView.clear();
  },
}