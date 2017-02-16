var distances = {};
var shortest = 100000000;

function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var pat = /^(\w+)\sto\s(\w+)\s.*\s(\d+)$/;

	var locations = [];

	for(line of lines){
		var match = line.match(pat);
		var currentLocs = [match[1], match[2]];

		distances[match[3]] = currentLocs;
		if(!locations.includes(match[1])) locations.push(match[1]);
		if(!locations.includes(match[2])) locations.push(match[2]);

	}

	for(loc in locations){
		console.log("starting location is: " + locations[loc]);
		navPaths(0, locations[loc], locations);
	}

	console.log("shortest distance is: " + shortest);

}

function navPaths(totDistance, currentLoc, whatsLeft){
	//first remove currentLoc from list of remaining;

	var remaining = whatsLeft.slice();
	var index = remaining.indexOf(currentLoc);
	remaining.splice(index, 1);

	console.log("");
	console.log("remaining locations: " + remaining);

	console.log("totDistance: " + totDistance);

	//get all locations that currentLoc could go to (remaining),
	//and for each one, navPaths again with new remaining and new distance

	if(remaining.length == 0){
		if(totDistance < shortest){
			shortest = totDistance;
		}
	}
	else if(totDistance < shortest){
		for(next in remaining){
			console.log("next location is: " + remaining[next]);
			//get distance from currentLoc
			//how to check if both values are in dictionary of distance?
			var distance = 0;
			Object.keys(distances).forEach(function(key) {
			    value = distances[key];
			    if(value.includes(currentLoc) && value.includes(remaining[next])){
					console.log("distance between " + currentLoc + " and " + remaining[next] + " is: " + key);
					distance = parseInt(key);
				}
			});
			navPaths((totDistance + distance), remaining[next], remaining);
		}
	}
	else{
		//there are remaining locations, but the distance is already greater than the shortest current distance found
	}


}
