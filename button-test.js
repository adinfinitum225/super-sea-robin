var button = document.createElement('BUTTON');
var text = document.createElement('p');
var count = 1;
var title = document.querySelector('h1');

document.body.appendChild(button);
document.body.appendChild(text);
button.textContent = count;
text.textContent = count;
title.textContent = "Testing";

button.onclick = function() {
	count += 1;
	button.textContent = count;
	text.textContent = count;
	title.textContent = "This is your webpage";
}

