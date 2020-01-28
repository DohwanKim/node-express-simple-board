import View from "./View.js";

const postView = Object.create(View);

postView.setup = function (el) {
  this.init(el);

  return this;
};

postView.render = function (data) {
  this.el.innerHTML = this.getPostMarkUpData(data);
};

postView.getPostMarkUpData = function (data) {
  console.log(data);
  let res = ``;
  for (let i=0; i<data.length; i++){
    let eachData = `
      <div class="row border-bottom">
        <div class="col" style="margin-bottom: 5px">
          <h2>${data[i].postTitle}</h2>
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
        <div class="col" style="">
          <span class="text-info">게시글 고유번호: </span>
          <span class="text-secondary" style="margin-right: 20px">${data[i].idPost}</span>
          <span class="text-info">id: </span>
          <span class="text-secondary">${data[i].createdAt}</span>
        </div>
      </div>
      <div class="row">
        <div class="col" style="margin-bottom: 30px">
          ${data[i].postContents}
        </div>
      </div>
    `;

    res += eachData;
  }
  console.log('render');
  return res;
};

export default postView;