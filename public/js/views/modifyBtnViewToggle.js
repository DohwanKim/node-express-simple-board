let modifyBtnViewToggle = {};

modifyBtnViewToggle.modifyToggleOn = function (postIndex) {
  document.getElementById('post_modify_title_'+postIndex).style.display = '';
  document.getElementById('btn_m_c_'+postIndex).style.display = '';
  document.getElementById('btn_c_'+postIndex).style.display = '';
  document.getElementById('contents_modify_'+postIndex).style.display = '';
  document.getElementById('contents_'+postIndex).style.display = 'none';
  document.getElementById('title_'+postIndex).style.display = 'none';
  document.getElementById('btn_m_'+postIndex).style.display = 'none';
  document.getElementById('btn_'+postIndex).style.display = 'none';
};

modifyBtnViewToggle.modifyToggleOff = function(postIndex) {
  document.getElementById('post_modify_title_'+postIndex).style.display = 'none';
  document.getElementById('btn_m_c_'+postIndex).style.display = 'none';
  document.getElementById('btn_c_'+postIndex).style.display = 'none';
  document.getElementById('contents_modify_'+postIndex).style.display = 'none';
  document.getElementById('contents_'+postIndex).style.display = '';
  document.getElementById('title_'+postIndex).style.display = '';
  document.getElementById('btn_m_'+postIndex).style.display = '';
  document.getElementById('btn_'+postIndex).style.display = '';

  this.modifyClear(postIndex);
};

modifyBtnViewToggle.modifyClear = function(postIndex) {
  document.getElementById('post_modify_title_'+postIndex).value = document.getElementById('title_'+postIndex).innerHTML;
  document.getElementById('contents_modify_'+postIndex).value = document.getElementById('contents_'+postIndex).innerHTML;
};

export default modifyBtnViewToggle;