
const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
const userText = e.target.value;
if(userText !== ""){
  github.getUser(userText)
  .then(users => { 
    if(users.profile.message === 'Not Found')
    {

    } 
    else {
      ui.showProfile(users.profile);
      ui.showRepos(users.repos);
    }
  })
} 
});
