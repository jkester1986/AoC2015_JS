function parseInput(){
	var text = document.getElementById("text").value;
	//var lines = text.split('\n');

	var x = 0;
	var y = 0;

	var visited = [];
	var startCoords = [0, 0];
	visited.push(startCoords);

	for(var i = 0; i < text.length; i++){
		switch(text[i]){
		    case '^':
			     y++;
			     break;
		    case 'v':
				 y--;
			     break;
			case '>':
				 x++;
				 break;
			case '<':
				 x--;
				 break;
		}
		//console.log(x + ", " + y);
		var coords = [x, y];

		if(searchForArray(coords, visited) == -1){
			visited.push(coords);
		}
		//else console.log("already visited");
	}
	console.log("There were " + visited.length + " houses visited");

	this.parseInputBot();
}

function searchForArray(needle, haystack){
	var i, j, current;
	for(i = 0; i < haystack.length; ++i){
    current = haystack[i];
		if(current[0] === needle[0] && current[1] === needle[1]){
			return i;
		}
  }
  return -1;
}
