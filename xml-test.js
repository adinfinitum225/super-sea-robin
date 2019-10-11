async function getFeed() {
/*		fetch('https://xkcd.com/atom.xml', {mode: 'no-cors'})
		.then(response => response.text())
		.then(xml => {
		document.getElementById("xmlText").innerText = xml;
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xml, "text/xml");
		});
*/

	//const response = fetch('https://xkcd.com/info.0.json');
	//console.log
	fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response => response.json())
		.then(commits => alert(commits[0].author.login));
}
