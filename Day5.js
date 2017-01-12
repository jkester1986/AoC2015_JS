function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

	var pat1 = /.*[aeiou].*[aeiou].*[aeiou].*/;
	var pat2 = /.*(\w)\1.*/;
	var pat3 = /.*(ab|cd|pq|xy).*/;

	var tot = 0;

	for(var i = 0; i < lines.length; i++){
		if(lines[i].match(pat1) != null && lines[i].match(pat2) != null && lines[i].match(pat3) === null){
			tot++;
		}
	}

	console.log("The total number of nice words in part 1 is: " + tot);

	pat1 = /.*(\w\w).*\1.*/;
	pat2 = /.*(\w)\w\1.*/;

	tot = 0;

	for(var i = 0; i < lines.length; i++){
		if(lines[i].match(pat1) != null && lines[i].match(pat2) != null){
			tot++;
		}
	}

	console.log("The total number of nice words in part 2 is: " + tot);
}
