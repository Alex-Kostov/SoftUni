function requestValidator(obj) {

  let rgxUri = /^[A-z0-9\.]*$/gm;
  let rgxMsg = /^[-_*/%:.?!A-z ]*$/gm;
  let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

  let isItCorrectUri = rgxUri.test(obj.uri);
  let isItCorrectMgs = rgxMsg.test(obj.message);

  if (obj.uri == '*') {
    isItCorrectUri = true;
  }


  if (!obj.hasOwnProperty('method')) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else if (!obj.hasOwnProperty('uri')) {
    throw new Error(`Invalid request header: Invalid URI`);
  } else if (!obj.hasOwnProperty('version')) {
    throw new Error(`Invalid request header: Invalid Version`);
  } else if (!obj.hasOwnProperty('message')) {
    throw new Error(`Invalid request header: Invalid Message`);
  }


  if (!validMethods.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else if (!isItCorrectUri) {
    throw new Error(`Invalid request header: Invalid URI`);
  } else if (!validVersions.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  } else if (!isItCorrectMgs) {
    throw new Error(`Invalid request header: Invalid Message`);
  }


  return obj;
}

requestValidator({
  method: 'GET',
  uri: 'kkk jjjj',
  version: 'HTTP/0.8',
  message: ''
}
);
