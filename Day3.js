function parseInput(){
	var text = document.getElementById("text").value;
	//var lines = text.split('\n');
	
	var x = 0;
	var y = 0;
	
	var visited = [];
	
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
		var coords = [x, y];
		
		if(visited.indexOf(coords) === -1){
			visited.push(coords);
		}
	}
	console.log("There were " + visited.length + " houses visited);
}
