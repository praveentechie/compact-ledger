/**
 * Event listeners
 */
function getById(id) {
  return document.getElementById(id);
}

getById('login').addEventListener('click', () => {
  let userName = getById('userName').value;
  console.log(userName, 'userName')
  // TODO: validate user credentials
  window.userDetails = {
    userName
  };
  // on successful login. move to home page
  getById('content').classList.toggle('hide');
  getById('home').classList.toggle('hide');
});