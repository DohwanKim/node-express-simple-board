import View from './View.js'

const SquareView = Object.create(View);

SquareView.setup = function (el) {
    this.init(el);
    this.bindEvent();
    return this
}

SquareView.bindEvent = function () {
    var squareEl = this.el;
    squareEl.addEventListener('click', ()=>{
        this.emit('@print');
    })
}

export default SquareView;