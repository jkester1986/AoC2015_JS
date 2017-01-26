function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var totChars = 0;
	var totData = 0;
	var totExpanded = 0;

	for(line of lines){
		totChars += line.length;

		var shortened = line.replace(/\\x[0-9a-f]{2}/g, "'");
		shortened = shortened.replace(/\\./g, "'");
		shortened = shortened.replace(/^\"/, "");
		shortened = shortened.replace(/\"$/, "");
		totData += shortened.length;

		var lengthened = line.replace(/[\"\\]/g, "''" );
		lengthened = "\"" + lengthened + "\"";
		totExpanded += lengthened.length;
	}

	console.log("difference between original and shortened: " + (totChars - totData));
	console.log("difference between original and lengthened: " + (totExpanded - totChars));

}
