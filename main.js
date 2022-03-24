// ambil element
const user_place = document.getElementById('user');

// ES5
/*
const user_logged = "Tony";
user_place.innerHTML = "Hi, " + user_logged + " Apa kabar?";
console.log(user_logged);
*/

// ES6
const user_logged = "Tony";
user_place.innerHTML = `Hi, ${user_logged} Apa kabar?`;