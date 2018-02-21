import {httpCall} from '../shared/restApi';

/**
 * Get
 * @param -
 */
var getUsers = (_params) => {
  var params = {
    url: "https://randomuser.me/api/?page=" + _params.page == undefined ? 1 : _params.page + "&results=" + _params.results==undefined ? 20 : _params.results,
    httpObj: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      //body:JSON.stringify({page: _params && _params.page ? _params.page : 1})
    }
  }
  return httpCall(params);
};

var getUsers2 = (_params) => {
  var params = {
    url: "https://randomuser.me/api/?page=" + 1 + "&results=20",
    httpObj: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      //body:JSON.stringify({page: _params && _params.page ? _params.page : 1})
    }
  }
  return httpCall(params);
};

export { getUsers, getUsers2 };
