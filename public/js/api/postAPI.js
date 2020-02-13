const BASE_URL = 'http://localhost:4000/';

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