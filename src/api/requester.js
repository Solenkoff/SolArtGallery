import { getUserSession } from '../utils/userSession';

const host = 'https://parseapi.back4app.com';

async function requester(url, dataset, method, data) {
  const userSessioin = getUserSession();

  const options = {
    method,
    headers: {},
  };

  if (dataset == 'users') {
    options.headers['X-Parse-Application-Id'] =
      '9rY5OBmpwedRM1aXIGOKn7txClO5HtxjyweoJ9KC';
    options.headers['X-Parse-REST-API-Key'] =
      'UN6l0s8lQcBlLNyuQo1BpmShvqUDbKQhdSfbyuL7';
    options.headers['X-Parse-Revocable-Session'] = 1;
  }
  if (userSessioin) {
    options.headers['X-Parse-Session-Token'] = userSessioin._token;
  }
  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const res = await fetch(host + url, options);

  if (res.ok == false) {
    const err = await res.json();
    throw new Error(err.error);
  }
  if (res.status === 202) {
    const err = await res.json();
    throw new Error(err.error);
  }

  return res.json();
}

function get(url, dataset) {
  return requester(url, dataset, 'GET');
}
function post(url, dataset, data) {
  return requester(url, dataset, 'POST', data);
}
function put(url, dataset, data) {
  return requester(url, dataset, 'PUT', data);
}
function del(url, dataset) {
  return requester(url, dataset, 'DELETE');
}

export { get, post, put, del };