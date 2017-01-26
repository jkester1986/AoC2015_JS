function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var pat = /^(\w+)\sto\s(\w+)\s.*\s(\d+)$/;

	var distances = {};

	for(line of lines){
		var match = line.match(pat);
		var locations = [match[1], match[2]];

		distances[match[3]] = locations;

	}

	console.dir(distances);

}
