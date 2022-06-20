// let button = document.querySelector('#button');
// button.onclick = function() {
//     alert('You pressed me')
// }

// document.querySelector('#button').onclick = function() {
//     alert('You pressed me')
// }


// button.onclick = function() {
//     alert('You pressed me!');
//   };


// let btn = document.getElementsByClassName('btn')
// let search = document.getElementsByClassName('search')
// let input = document.getElementsByClassName('input')

// let btn = document.getElementById('.btn')
// let search = document.getElementById('.search')
// let input = document.getElementById('.input')

// btn.onclick = function() {
//     search.classList.toggle('active');
//     input.focus()
// }


const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});
