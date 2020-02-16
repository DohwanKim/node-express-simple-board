import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import deleteBtnView from "../views/deleteBtnView.js";
import postView from "../views/postView.js";
import postModel from "../models/postModel.js"
import postDeleteModel from "../models/postDeleteModel.js"
import {getPostDataPromise, deletePostDataPromise, uploadPostDataPromise} from "../api/postAPI.js"

// TODO : 프론트 단에서 작성시 유효성 검사 해주기. (o)
// TODO : 글 올렸을때 다시 렌더링 잘 되는지 (o)
// TODO : 삭제 기능 -> 해당 글의 비밀번호 일치 검사 (o)
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
      this.setDeleteButton(data);
    }).catch(function (err) {
      console.error(err); // Error 출력
    });
  },
  setDeleteButton(data) {
    for (let i = 0; i < data.length; i++) {
      let postIndex = data[i].idPost;
      document.getElementById('btn_'+postIndex).addEventListener('click', () => {
        let deletePrompt = prompt("해당 댓글의 비밀번호를 입력해주세요", "");
        getPostDataPromise().then(res => {
          data[i].pw
        });
        if(deletePrompt) {
          postDeleteModel.setDeletePost(postIndex);
          let res = postDeleteModel.getDeleteData();
          deletePostDataPromise(res).then(res => {
            getPostDataPromise().then(data => {
              postView.render(data);
              this.setDeleteButton(data);
            });
          });
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
    }
  },
  submitPost() {
    let res = submitBtnView.getInputPostData();
    let verifyData = postModel.setInputPost(res);

    if(verifyData){
      cancelBtnView.clear();
      uploadPostDataPromise(postModel.getData()).then(res => {
        getPostDataPromise().then(data => {
          postView.render(data);
          this.setDeleteButton(data);
        })
      });
    } else {
      console.log('컨트롤러 부분 데이터 업로드 거부');
    }
  },
  clearPost() {
    cancelBtnView.clear();
  },
}