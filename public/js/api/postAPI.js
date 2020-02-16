const BASE_URL = 'http://localhost:4000/';

export const getPostDataPromise = () => {
  return new Promise(function (resolve, reject) {
    $.get(BASE_URL + 'post/get', function (response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
};

export const deletePostDataPromise = (data) => {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: BASE_URL + 'post/delete',
      type: 'post',
      data: data,
      contentType: 'application/x-www-form-urlencoded',
      success: function(response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      }
    })
  });
};

export const checkPostPWPromise = (data) => {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: BASE_URL + 'post/check_pw',
      type: 'post',
      data: data,
      contentType: 'application/x-www-form-urlencoded',
      success: function(response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      }
    })
  });
};

export const uploadPostDataPromise = (data) => {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: BASE_URL + 'post/create',
      type: 'post',
      data: data,
      contentType: 'application/x-www-form-urlencoded',
      success: function(response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      }
    })
  });
};

//callback
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