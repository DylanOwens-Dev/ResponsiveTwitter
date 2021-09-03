var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: '47.9M',
    avatarURL: 'elonmusk.jpg',
    coverPhotoURL: 'elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var header = document.getElementById('header');
header.innerHTML = `
    <img class="back-arrow" src="arrow-left.png">
    <div class="head-user-tweets">
        <p id="head-user">${user1.displayName}</p>
        <p id="tweet-count">13.6K Tweets</p>
    </div>
    <img class="verified" src="download.png">
`;

var profile = document.getElementById('profile');
profile.innerHTML = `
    <img class="cover" src="${user1.coverPhotoURL}"/>
    <img class="profile-pic" src="${user1.avatarURL}"/>
    <button id="follow-btn">Follow</button>
    <div class="profile-name">    
        <p id="profile-user">${user1.displayName}</p>
        <img id="verified" src="download.png">
    </div>    
    <p id="user-name">${user1.userName}</p>
    <p id="joined">📅 Joined ${user1.joinedDate}</p>
    <div class="follower">
        <p id="following">${user1.followingCount}</p>
        <p class="place"> Following</p>
        <p id="followers">${user1.followerCount}</p>
        <p class="place"> Followers</p>
    </div>
`

var tweetBtns = document.getElementById('tweet-btns');
tweetBtns.innerHTML = `
    <div class="btns">   
        <button id="1st" class="tweet-btns active">Tweets</button>
        <button id="2nd" class="tweet-btns">Tweets & Replies</button>
        <button id="3rd" class="tweet-btns">Media</button>
        <button id="4th" class="tweet-btns">Likes</button>
    </div>
`

var tweets = document.getElementById('tweets')
    
for (var i = 0; i < user1.tweets.length; i++) {
    var tweet = user1.tweets[i];
    var tweetvalues = Object.values(tweet);
    var tweetCreated = tweetvalues[1];

    var arr = tweetCreated.split(' ')

    var tweetsDiv = document.createElement('div');
    tweetsDiv.innerHTML = `
    <div class="tweet-cont">   
        <img class="profile-pic2" src="${user1.avatarURL}"/>
        <div class="tweet-info">
            <p id="profile-user2">${user1.displayName}</p>
            <img id="verified2" src="download.png">
            <p id="user-name2">${user1.userName} - ${arr[0]}</p>
        </div>
    </div>
    <p id="tweet-text">${tweetvalues[0]}
`;    
tweets.appendChild(tweetsDiv)    
    
}

tweets.innerHTML = `
        <img class="profile-pic2" src="${user1.avatarURL}"/>
        <p id="profile-user2">${user1.displayName}</p>
        <p id="user-name2">${user1.userName}</p>
        <p id="tweet-text">${Object.values(tweet1)}
    `

let first = document.getElementById('1st')
let second = document.getElementById('2nd')
let third = document.getElementById('3rd')
let forth = document.getElementById('4th')

document.getElementById('1st').addEventListener("click", function(){
    first.classList.add('active')
    second.classList.remove('active')
    third.classList.remove('active')
    forth.classList.remove('active')
})

document.getElementById('2nd').addEventListener("click", function(){
    second.classList.add('active')
    first.classList.remove('active')
    third.classList.remove('active')
    forth.classList.remove('active')
})

document.getElementById('3rd').addEventListener("click", function(){
    third.classList.add('active')
    first.classList.remove('active')
    forth.classList.remove('active')
    second.classList.remove('active')
})

document.getElementById('4th').addEventListener("click", function(){
    forth.classList.add('active')
    first.classList.remove('active')
    third.classList.remove('active')
    second.classList.remove('active')
})

