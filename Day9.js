function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var pat = /^(\w+)\sto\s(\w+)\s.*\s(\d+)$/;

	var distances = {};
	var locations = [];

	for(line of lines){
		var match = line.match(pat);
		var currentLocs = [match[1], match[2]];

		distances[match[3]] = currentLocs;
		if(!locations.includes(match[1])) locations.push(match[1]);
		if(!locations.includes(match[2])) locations.push(match[2]);

	}
	console.log(locations);

	for(loc in locations){//for every location
		navPaths(0, loc, locations);
	}

}

function navPaths(totDistance, currentLoc, remaining){
	//first remove currentLoc from list of remaining
	remaining.pop(currentLoc);
}
