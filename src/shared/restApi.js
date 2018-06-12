

/**
 * Making http call
 * @param - params{object}:url{string}, method{string}, headers{object}, body{object}
 */
var httpCall = (_params) => {
  return new Promise((resolve, reject) => {
    fetch(_params.url, _params.httpObj).then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  })

}

export { httpCall };

/*
module.exports = {
  httpCall : async (_params) => {
    console.log("_params: ", _params)
    try {
      let response = await fetch(_params.url, _params.httpObj);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw Error(error);
    }
  }

}
*/
