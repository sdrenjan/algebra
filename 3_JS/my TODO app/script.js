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

setTimeout(() => {
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, 3000);


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
const options = { weekday: 'long', month: 'long', day: 'numeric' };
let date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString('en-US', options);


//set user name
function setUser() {
    let name = document.getElementById('name').value;
    localStorage.setItem('user', name);
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

(function showUser() {
    let user = localStorage.getItem('user');
    document.getElementById('user').innerText = !user ? 'Hey there stranger' : user;
})();


//to do list
const myNodeList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodeList.length; i++) {
    const span = document.createElement('span');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

const close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const div = this.parentElement;
        div.remove();
    }
}

//add a checkmark and striketrough for each task
const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false)

function newTask() {
    const li = document.createElement('li');
    let inputValue = document.getElementById('inputField').value;
    const task = document.createTextNode(inputValue);
    const error = document.getElementById('error');
    li.appendChild(task);

    if (inputValue === '') {
        error.style.display = 'inline';
        setTimeout(function () {
            error.style.display = 'none';
        }, 3000)
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('inputField').value = '';

    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.remove();
        }
    }
}

const input = document.getElementById('inputField');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('add').click();
    }
})

function share() {
    const ul = document.getElementById('list');
    const listItems = document.getElementsByTagName('li');
    let objects = {};

    for (i = 0; i <= listItems.length - 1; i++) {
        objects[i] = { task: listItems[i].firstChild.nodeValue }
    }

    (async () => {
        const response = await fetch('https://63d1650b120b32bbe8f7b3e8.mockapi.io/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objects)
        })

        return console.log(response.json());

    })();
}
