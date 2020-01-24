const BASE_URL = 'http://localhost:4000/';

// TODO : 벡 제작 후 작동 연결 해 주기
export const getPostData = (url, success2) => {
  const ajaxOptions = {
    url: 'http://localhost:4000/post' + url,
    method: 'get',
    timeout: 3000,
    error : function(error) {
      console.log("Error!");
    },
    success : success2,
    complete : function() {
      console.log("complete!");
    }
  };
  $.ajax(ajaxOptions);
};

export const uploadPostData = () => {

};