import SquareView from '../views/SquareView.js';

export default {
    init() {
        SquareView.setup(document.getElementById('id__test')).on('@print', (evt)=>{
            console.log('print');
        });
    }
}