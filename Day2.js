function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');
	
	var pat = /^(\d+)x(\d+)x(\d+)$/;
	
	var tot = 0;
	var ribTot = 0;
	
	for(var i = 0; i < lines.length; i++){
		var matches = pat.exec(lines[i]);
		var side1 = matches[1];
		var side2 = matches[2];
		var side3 = matches[3];
		
		var areaS1 = side1*side2;
		var areaS2 = side2*side3;
		var areaS3 = side3*side1;
		
		var smallest = 0;
		
		
		if(areaS1 <= areaS2 && areaS1 <= areaS3){
			smallest = areaS1;
		}
		else if(areaS2 <= areaS1 && areaS2 <= areaS3){
			smallest = areaS2;
		}
		else smallest = areaS3;
		
		var wrappingNeeded = 2*areaS1 + 2*areaS2 + 2*areaS3 + smallest;
		
		tot += wrappingNeeded;
		
		var ribbonNeeded = 0;
		
		var per1 = 2*side1+2*side2;
		var per2 = 2*side2+2*side3;
		var per3 = 2*side3+2*side1;
		
		if(per1 <= per2 && per1 <= per3){
			ribbonNeeded = per1;
		}
		
		else if(per2 <= per1 && per2 <= per3){
			ribbonNeeded = per2;
		}
		
		else ribbonNeeded = per3;
		
		ribbonNeeded += side1*side2*side3;
		ribTot += ribbonNeeded;
	}
	
	console.log("Total wrapping needed: " + tot);
	console.log("Total ribbon needed: " + ribTot);
}