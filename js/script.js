// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.backgroundColor = "black";
judul.innerHTML = "Muhammad Andika";

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');

for(let i = 0; i <= p.length; i++){
    p[i].style.backgroundColor = "blue";
}