import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import modifyBtnViewToggle from "../views/modifyBtnViewToggle.js";
import postView from "../views/postView.js";
import postModel from "../models/postModel.js"
import postDeleteModel from "../models/postDeleteModel.js"
import postCheckModel from "../models/postCheckModel.js";
import postModifyModel from "../models/postModifyModel.js";
import {getPostDataPromise, deletePostDataPromise, uploadPostDataPromise, checkPostPWPromise, modifyDataPromise} from "../api/postAPI.js"

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
      this.setRenderedButton(data);
    }).catch(function (err) {
      console.error(err);
    });
  },
  setRenderedButton(data) {
    for (let i = 0; i < data.length; i++) {
      let postIndex = data[i].idPost;

      this.setModifyButton(postIndex);
      this.setDeleteButton(postIndex);
    }
  },
  setModifyButton(postIndex) {
    document.getElementById('btn_m_'+postIndex).addEventListener('click', () => {
      let pwPrompt = prompt("해당 댓글의 비밀번호를 입력해주세요", "");

      postCheckModel.setCheckPost(pwPrompt, postIndex);
      checkPostPWPromise(postCheckModel.getCheckData()).then(res => {
        if(res === 'confirm') {
          modifyBtnViewToggle.modifyToggleOn(postIndex);
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
    });
    document.getElementById('btn_c_'+postIndex).addEventListener('click', () => {
      modifyBtnViewToggle.modifyToggleOff(postIndex);
    });
    document.getElementById('btn_m_c_'+postIndex).addEventListener('click', () => {
      let verifyData = postModifyModel.setModifyPost(postIndex);

      if(verifyData) {
        modifyDataPromise(postModifyModel.getModifyData()).then(res => {
          alert('수정완료');
          getPostDataPromise().then(data => {
            postView.render(data);
            this.setRenderedButton(data);
            modifyBtnViewToggle.modifyToggleOff(postIndex);
          });
        });
      } else {
        console.log('컨트롤러 부분 데이터 업로드 거부');
      }
    });
  },
  setDeleteButton(postIndex) {
    document.getElementById('btn_'+postIndex).addEventListener('click', () => {
      let pwPrompt = prompt("해당 댓글의 비밀번호를 입력해주세요", "");

      postCheckModel.setCheckPost(pwPrompt, postIndex);
      checkPostPWPromise(postCheckModel.getCheckData()).then(res => {
        if(res === 'confirm') {
          postDeleteModel.setDeletePost(postIndex);
          let res = postDeleteModel.getDeleteData();

          deletePostDataPromise(res).then(res => {
            getPostDataPromise().then(data => {
              postView.render(data);
              this.setRenderedButton(data);
              alert('삭제되었습니다.');
            });
          });
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
    });
  },
  submitPost() {
    let res = submitBtnView.getInputPostData();
    let verifyData = postModel.setInputPost(res);

    if(verifyData){
      cancelBtnView.clear();
      uploadPostDataPromise(postModel.getData()).then(res => {
        getPostDataPromise().then(data => {
          alert('작성완료');
          postView.render(data);
          this.setRenderedButton(data);
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