function parseInput(){
	var text = document.getElementById("text").value;
	//var lines = text.split('\n');
	
	var floor = 0;
	var found = false;
	
	for(var i = 0; i < text.length; i++){
		switch(text[i]){
		    case '(':
			     floor++;
			     break;
		    case ')':
				 floor--;
			     break;
		}
		if(floor == -1 && !found){
			console.log("The floor that first goes below ground level is: " + (i+1));
			found = true;
		}
	}
	console.log("Santa ends on floor: " + floor);
}