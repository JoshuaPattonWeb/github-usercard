import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/JoshuaPattonWeb')
.then(result => {
  console.log(result.data)
})
.catch(error => {
  console.error(error)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

followersArray.forEach(people => {
  cardMaker(people)
})

cardMaker('JoshuaPattonWeb')
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
//function
    const card = document.querySelector('.cards')
    function cardMaker(info) {

// elements
    const wholeCard = document.createElement('div')
    const profileImg = document.createElement('img')
    const content = document.createElement('div')
    const loginName = document.createElement('h3')
    const userName = document.createElement('p')
    const userLocation = document.createElement('p')
    const profile = document.createElement('p')
    const profileLink = document.createElement('a')
    const userFollowers = document.createElement('p')
    const userFollowing = document.createElement('p')
    const userBio = document.createElement('p')

// appends
    wholeCard.appendChild(profileImg)
    wholeCard.appendChild(content)
    content.appendChild(loginName)
    content.appendChild(userName)
    content.appendChild(userLocation)
    content.appendChild(profile)
    profile.appendChild(profileLink)
    content.appendChild(userFollowers)
    content.appendChild(userFollowing)
    content.appendChild(userBio)

// element data
    wholeCard.classList.add('card')
    content.classList.add('card-info')
    loginName.classList.add('name')
    userName.classList.add('username')

// text addition
  axios.get(`https://api.github.com/users/${info}`)
    .then(result => {
      profileImg.src = result.data.avatar_url
      loginName.textContent = result.data.name
      userName.textContent = 'Username: ' + result.data.login
      userLocation.textContent = 'Location: ' + result.data.location
      profile.textContent = 'Profile:'
      profileLink.href = result.data.html_url
      profileLink.textContent = result.data.html_url
      userFollowers.textContent = 'Followers: ' + result.data.followers
      userFollowing.textContent = 'Following: ' + result.data.following
      userBio.textContent = 'Bio: ' + result.data.bio
    })
    .catch(error => {
      console.error(error)
    })
    const pullCard = card.appendChild(wholeCard)
    return pullCard
}


  // const cards = document.querySelector('.cards')
  // follow step 4
  // get the element with a class of cards from teh DOM, document.querySelector('cards')
  // append the user card to the element we just querySelected
//receiving error and i looked over it numerous times and I cannot seem to find the issue https://prnt.sc/1xoo8kc
// its really stressing me out and its not portraying any code. Its not showing where error is located.
