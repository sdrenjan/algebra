//intro logo animation
anime({
    targets: '.line-logo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

//setTimeout(() => {
//    document.getElementsByClassName('loading')[0].style.display = 'none';
//}, 3000);


//modal
var modal = document.getElementById('modal');
var button = document.getElementById('button');
var span = document.getElementsByClassName('close-modal')[0];

button.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


//footer
const year = new Date().getFullYear();
document.getElementById('year').innerText = year;


//greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];

let welcomeText = '';

if (hour < 12) {
    welcomeText = welcomeTypes[0];
} else if (hour < 18) {
    welcomeText = welcomeTypes[1];
} else {
    welcomeText = welcomeTypes[2];
}

greeting.innerHTML = welcomeText;


//date
const options = { weekday: 'long', month: 'long', day:'numeric' };
let date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString('en-US', options);

//set user
function setUser() {
    let name = document.getElementById('name').value;
    localStorage.setItem('user', name);
    let modal = document.getElementById('modal');
    modal.style.display = 'none'; 
}

(function showUser() {
    let user = localStorage.getItem('user');
    document.getElementById('user').innerText = `${user}`;
})()
