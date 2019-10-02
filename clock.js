/*To add clock to the page, create an element with ID myClock.
 *In the body tag add onload="startClock()"
 */

function startClock() {
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();
		currentMinutes = normalize(currentMinutes);
		currentSeconds = normalize(currentSeconds);

		var timeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
		document.getElementById('myClock').innerText = timeString;
		setTimeout(startClock, 500);
}

function normalize(i) {
		if (i < 10) {i = "0" + i}; //Add leading zero to minutes and seconds
		return i;
}
