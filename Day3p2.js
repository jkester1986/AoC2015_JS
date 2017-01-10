function parseInputBot(){
	var text = document.getElementById("text").value;
	//var lines = text.split('\n');

	var x = 0;
	var y = 0;

	var botx = 0;
	var boty = 0;

	var toggle = true;

	var newvisited = [];
	var coords = [0, 0];
	newvisited.push(coords);

	for(var i = 0; i < text.length; i++){
		switch(text[i]){
	    case '^':
		     if(toggle) y++;
				 else boty++;
		     break;
	    case 'v':
			 	 if(toggle) y--;
				 else boty--;
		     break;
			case '>':
				 if(toggle)x++;
				 else botx++;
				 break;
			case '<':
				 if(toggle)x--;
				 else botx--;
				 break;
		}

		if(toggle) {
			coords = [x, y];
		}
		else {
			coords = [botx, boty];
		}

		if(searchForArray(coords, newvisited) == -1){
			newvisited.push(coords);
		}
		toggle = !toggle;
	}

	console.log("There were " + newvisited.length + " houses visited with the bot");
}
