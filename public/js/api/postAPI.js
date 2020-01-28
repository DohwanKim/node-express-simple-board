const BASE_URL = 'http://localhost:4000/';

// TODO : 벡 제작 후 작동 연결 해 주기
export const getPostData = (successFunc) => {
  const ajaxOptions = {
    url: BASE_URL + 'post/get',
    method: 'get',
    timeout: 3000,
    error : function(error) {
      console.log("Error!");
    },
    success : successFunc,
    complete : function() {
      console.log("complete!");
    }
  };
  $.ajax(ajaxOptions);
};

export const uploadPostData = (Data, successFunc) => {
  const ajaxOptions = {
    url: BASE_URL + 'post/create',
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    data: Data,
    timeout: 3000,
    error : function(error) {
      console.log("Error!");
    },
    success : successFunc,
    complete : function() {
      console.log("complete!");
    }
  };
  $.ajax(ajaxOptions);
};