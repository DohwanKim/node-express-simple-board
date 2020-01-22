import View from "./View.js";

const postView = Object.create(View);

postView.setup = function (el) {
  this.init(el);

  return this;
};

postView.render = function (data) {
  this.el.innerHTML = this.getPostData(data);
};

postView.getPostData = function (data) {
  let res = ``;
  for (let i=0; i<data.length; i++){
    let eachData = `
      <div class="row border-bottom">
        <div class="col" style="margin-bottom: 5px">
          <h2>${data[i].title}</h2>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col">
              <span class="text-primary">nick: </span>
              <span class="text-secondary">${data[i].nick}</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span class="text-info">id: </span>
              <span class="text-secondary">${data[i].id}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" style="margin-bottom: 30px">
          ${data[i].contents}
        </div>
      </div>
    `;

    res += eachData;
  }

  return res;
};

export default postView;