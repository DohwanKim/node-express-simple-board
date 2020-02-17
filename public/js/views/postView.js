import View from "./View.js";

const postView = Object.create(View);

postView.setup = function (el) {
  this.init(el);

  return this;
};

postView.eventNum = 0;

postView.render = function (data) {
  this.el.innerHTML = this.getPostMarkUpData(data);
};

postView.getPostMarkUpData = function (data) {
  let res = ``;
  for (let i=0; i<data.length; i++){
    let date = data[i].createdAt.substr(0, 10) + ' ' + data[i].createdAt.substr(11, 5);
    let eachData = `
      <div class="row comment-grid-out">
        <div class="col comment-grid shadow">
          <div class="row border-bottom" style="padding-bottom: 5px">
            <div class="col" style="margin-bottom: 5px">
              <textarea placeholder="${data[i].postTitle}" id="post_modify_title_${data[i].idPost}" class="modify-title" style="display: none;">${data[i].postTitle}</textarea>
              <h2 id="title_${data[i].idPost}">${data[i].postTitle}</h2>
            </div>
            <div class="col-3">
              <div class="row">
                <div class="col">
                  <span class="text-primary">nick: </span>
                  <span class="text-secondary">${data[i].postNick}</span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span class="text-info">id: </span>
                  <span class="text-secondary">${data[i].postId}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-sm-6 num-a" style="padding: 0">
              <span class="text-info">글번호:</span>
              <span class="text-secondary num" style="margin-right: 20px">${data[i].idPost}</span>
              <span class="text-info">작성일: </span>
              <span class="text-secondary">${date}</span>
            </div>
            <div class="col-md-4 col-sm-6 text-right" style="padding-right: 0">
              <button class="btn btn-info comment-button" id="btn_m_${data[i].idPost}">수정</button>
              <button class="btn btn-info comment-button" id="btn_${data[i].idPost}">삭제</button>
              <button class="btn btn-info comment-button comment-button_modify" id="btn_m_c_${data[i].idPost}" style="display: none">수정하기</button>
              <button class="btn btn-info comment-button comment-button_modify" id="btn_c_${data[i].idPost}" style="display: none">수정취소</button>
            </div>
          </div>
          <div class="row">
            <div class="col" style="margin-bottom: 5px">
              <textarea placeholder="${data[i].postContents}" id="contents_modify_${data[i].idPost}" class="modify-contents" style="display: none;">${data[i].postContents}</textarea>
              <span id="contents_${data[i].idPost}">${data[i].postContents}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    res += eachData;
  }
  return res;
};


export default postView;