let regex = new RegExp([0 - 9]);
let number = 0;

function getNumber() {
    number = document.getElementById('phone').value;
}

function myButtonFunction() {
    if (regex.test(number) == true) {
        window.alert(number);
    } else {
        window.alert('Only numbers!');
    }
}