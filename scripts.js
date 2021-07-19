'use strict';

const container = document.querySelector('#container');

const pText = document.createElement('p');
pText.style.color = 'red';
pText.textContent = "Hey I'm Red!";


const headerBlue = document.createElement('h3');
headerBlue.style.color = 'blue';
headerBlue.textContent = "I'm a blue h3";

const newContainer = document.createElement('div');
newContainer.style.border = '3px solid';
newContainer.style.backgroundColor = '#D26AC7';
// newContainer also houses headerOne and p2Text

const headerOne = document.createElement('h1');
headerOne.textContent = "I'm in a div";
newContainer.appendChild(headerOne);

const p2Text = document.createElement('p');
p2Text.textContent = "ME TOO!";
newContainer.appendChild(p2Text);


container.appendChild(pText);
container.appendChild(headerBlue);
container.appendChild(newContainer);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // for each button 'buttons' iterated through, add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

// // second event method script
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

// // third event method script
// const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', () => {
//     alert('Hello World');
// })

// // named function event listener | METHOD 1
// function alertFunction() {
//     alert('YAY! YOU DID IT!');
// }

// // METHOD 2 -- NOTE lowercase 'c' on the 'onclick'
// // btn4.onclick = alertFunction; 

// // METHOD 3
// // btn4.addEventListener('click', alertFunction);

// // event properties and abilities practice section
// btn4.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// })