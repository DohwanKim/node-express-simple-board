import submitBtnView from "../views/submitBtnView.js";
import cancelBtnView from "../views/cancelBtnView.js";
import postView from "../views/postView.js";
import { getPostData } from "../api/postAPI.js"

let POST_DATA = [];
const EX_DATA = [
  {
    id: 'windboy',
    nick: 'donggle',
    title: '이게 맞나요?',
    contents: 'ㄴㄴㅇㄹㄴㅇㄹㄹ럴이ㅏㅓㅣㅏㄴ러ㅣㅏㄴ어ㅣ린어리ㅓㄴ이라ㅣㄴ얼'
  },
  {
    id: 'tkdgjs',
    nick: 'winnig',
    title: 'tips',
    contents: 'ㄴㄴㅇㄹㄴㅇㄹㄹ럴이ㅏㅓㅣㅏㄴ러ㅣㅏㄴ어ㅣ린어리ㅓㄴ이라ㅣsfdsfㄴ얼'
  },
  {
    id: 'ehdn',
    nick: 'dow',
    title: '질문있음요',
    contents: 'sfdfsdfㄴㄴㅇㄹㄴㅇㄹㄹ럴이ㅏㅓㅣㅏㄴ러ㅣㅏㄴ어ㅣ린어리ㅓㄴ이라ㅣㄴ얼'
  }
];

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
    getPostData('/get', function (data) {
      POST_DATA = data;
      postView.render(POST_DATA);
    });
  },
  submitPost() {
  },
  clearPost() {
    cancelBtnView.clear();
    console.log('cancel and clear all form data');
  },
  renderPost() {

  },
}