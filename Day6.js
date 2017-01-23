function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var lights = new Array(1000);
	for(var i = 0; i < 1000; i++){
		lights[i] = new Array(1000);
	}

	var brightness = new Array(1000);
	for(var i = 0; i < 1000; i++){
		brightness[i] = new Array(1000);
	}

	for(var y = 0; y <= 999; y++){
		for(var x = 0; x <= 999; x++){
			brightness[x][y] = 0;
		}
	}

	var pat = /.*(off|on|toggle)\s(\d+),(\d+)\sthrough\s(\d+),(\d+)$/;

	for(var i = 0; i < lines.length; i++){
		//console.log(lines[i]);
		var match = lines[i].match(pat);

		switch(match[1]){
			case "on":
				for(var y = match[3]; y <= match[5]; y++){
					for(var x = match[2]; x <= match[4]; x++){
						lights[x][y] = true;
						brightness[x][y]++;
					}
				}
				break;
			case "off":
				for(var y = match[3]; y <= match[5]; y++){
					for(var x = match[2]; x <= match[4]; x++){
						lights[x][y] = false;
						if(brightness[x][y] > 0) brightness[x][y]--;
					}
				}
				break;
			case "toggle":
				for(var y = match[3]; y <= match[5]; y++){
					for(var x = match[2]; x <= match[4]; x++){
						if(lights[x][y] === 'undefined') {
							lights[x][y] = true;
						}
						else {
							//console.log("light was: " + lights[x][y]);
							lights[x][y] = !lights[x][y];
							//console.log("light is now:" + lights[x][y]);
						}
						brightness[x][y] += 2;
					}
				}
				break;
			default:
				console.log("direction not recognized");
				break;
		}
	}


	var tot = 0;

	for(var y = 0; y <= 999; y++){
		for(var x = 0; x <= 999; x++){
			if(lights[x][y] == true){
				tot++;
			}
		}
	}
	console.log("total lights on: " + tot);

	var totBrightness = 0;

	for(var y = 0; y <= 999; y++){
		for(var x = 0; x <= 999; x++){
			totBrightness += brightness[x][y];
		}
	}
	console.log("total brightness: " + totBrightness);

}
