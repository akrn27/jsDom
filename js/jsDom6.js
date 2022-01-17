// DOM Manipulation
// Create Element and TextNode
const p = document.createElement('p');
const pText = document.createTextNode('Hello, ini P baru');

// Combine both between Element and TextNode
p.appendChild(pText);

// 
const sectionA = document.querySelector('section#a');
sectionA.appendChild(p);


// 2 insertBefore
const liBaru = document.createElement('li');
const liText = document.createTextNode('Li Baru Nih Bozz');
liBaru.appendChild(liText);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);


// 3 removeChild
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// 4 replaceChild
const h2Baru = document.createElement('h2');
const h2TextBaru = document.createTextNode('Judul Baru');
h2Baru.appendChild(h2TextBaru);

const sectionB = document.querySelector('section#b');
const p4 = document.querySelector('section#b p');
sectionB.replaceChild(h2Baru, p4);