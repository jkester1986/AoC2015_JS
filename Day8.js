function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var hexPat = /\\x../g;

	var totChars = 0;
	var totData = 0;

	for(line of lines){
		console.log("length of the string: " + line.length);
		totChars += line.length;

		var shortened = line.replace(hexPat, "'");
		shortened = shortened.replace(/\\./g, "'");
		shortened = shortened.replace(/^./g, "");
		shortened = shortened.replace(/.$/g, "");
		console.log("shortened: " + shortened);
		console.log("lenght of the shortened string: " + shortened.length);

		totData += shortened.length;

	}

	console.log("difference: " + (totChars - totData));




}
