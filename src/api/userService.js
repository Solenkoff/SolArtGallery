import { get, del, post } from './requester';

function registerUser(input) {
  const { username, email, password, passConfirm } = input;

  if (username.length < 2) {
    throw new Error('Username must be at least 2 characters long!');
  }
  if (email.length < 8) {
    throw new Error('Email must be at least 8 characters long!');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long!');
  }
  if (password !== passConfirm) {
    throw new Error('Passwords do not match!');
  }
  return post('/users', 'users', { username, email, password });
}

function loginUser({ username, password }) {
  return post('/login', 'users', { username, password });
}

async function logoutUser() {
  const token = await get('/classes/_Session', 'users');
  const objectId = token.results[0].objectId;
  return del('/sessions/' + objectId, 'users');
}

export default {
  registerUser,
  loginUser,
  logoutUser,
};