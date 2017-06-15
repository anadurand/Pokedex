"use strict";

const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });

  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
};
