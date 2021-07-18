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
