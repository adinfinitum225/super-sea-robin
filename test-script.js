var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = "This list can be whatever you want it to be, click anywhere and add to it.";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
	var listItem = document.createElement('li');
	var listContent = prompt("What do you want to add to the list?");
	listItem.textContent = listContent;
	list.appendChild(listItem);

	listItem.onclick = function(e) {
		e.stopProgagation();
		var listContent = prompt("What is your new list item?");
		this.textContext = listContent;
	}
}
