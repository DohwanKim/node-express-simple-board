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
    let eachData = `
      <div class="row border-bottom">
        <div class="col" style="margin-bottom: 5px">
          <textarea placeholder="${data[i].postTitle}" id="post_modify_title_${data[i].idPost}" style="height: 3px; display: none;">${data[i].postTitle}</textarea>
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
        <div class="col num-a">
          <span class="text-info"></span>
          <span class="text-secondary num" style="margin-right: 20px">${data[i].idPost}</span>
          <span class="text-info">id: </span>
          <span class="text-secondary">${data[i].createdAt}</span>
        </div>
        <div class="col-4 text-right">
          <button class="btn btn-info modify" id="btn_m_${data[i].idPost}">수정</button>
          <button class="btn btn-danger delete" id="btn_${data[i].idPost}">삭제</button>
          <button class="btn btn-info modify" id="btn_m_c_${data[i].idPost}" style="display: none">수정하기</button>
          <button class="btn btn-danger delete" id="btn_c_${data[i].idPost}" style="display: none">수정취소</button>
        </div>
      </div>
      <div class="row">
        <div class="col" style="margin-bottom: 30px">
          <textarea placeholder="${data[i].postContents}" id="contents_modify_${data[i].idPost}" style="height: 3px; display: none">${data[i].postContents}</textarea>
          <span id="contents_${data[i].idPost}">${data[i].postContents}</span>
        </div>
      </div>
    `;

    res += eachData;
  }
  return res;
};


export default postView;