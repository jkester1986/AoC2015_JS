function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

    var pat1 = /^(\d+|\w+)\s->\s(\w+)$/;
    var patAnd = /^(\d+|\w+)\sAND\s(\d+|\w+)\s->\s(\w+)$/;
    var patOr = /^(\d+|\w+)\sOR\s(\d+|\w+)\s->\s(\w+)$/;
    var patNot = /^NOT\s(\d+|\w+)\s->\s(\w+)$/;
    var patRight = /^(\d+|\w+)\sRSHIFT\s(\d+)\s->\s(\w+)$/;
    var patLeft = /^(\d+|\w+)\sLSHIFT\s(\d+)\s->\s(\w+)$/;

    var dict = {};
	var whatsLeft = [];

    while(lines.length > 0){//will remove the line when the direction is able to be followed
        for (line of lines){
            if(pat1.test(line)){//direct insertion
                var match = pat1.exec(line);
                if(isNaN(match[1])){//if first group is not a number
                    if(match[1] in dict){//if the match is in the dictionary, we can do something
						var val = dict[match[1]];
						dict[match[2]] = match[1];

                    }
					else whatsLeft.push(line);//can't follow directions yet
                }
                else{//first group is a number
                    dict[match[2]] = match[1];
                }
            }
            else if(patAnd.test(line)){//AND
                var match = patAnd.exec(line);
				if(isNaN(match[1] || isNaN(match[2]))){//if either first two groups is not a number
					if(match[1] in dict && match[2] in dict){//if the match is in the dictionary, we can do something
						var val1 = dict[match[1]];
						var val2 = dict[match[2]];

						var finVal = val1 & val2;//perform AND

						dict[match[3]] = finVal;

                    }
					else whatsLeft.push(line);
				}
				else if(isNaN(match[1])){
					if(match[1] in dict){
						var val1 = dict[match[1]];
						var val2 = match[2];

						var finVal = val1 & val2;//perform AND

						dict[match[3]] = finVal;
					}
					else whatsLeft.push(line);
				}
				else if(isNaN(match[2])){
					if(match[2] in dict){
						var val1 = match[1];
						var val2 = dict[match[2]];

						var finVal = val1 & val2;//perform AND

						dict[match[3]] = finVal;
					}
					else whatsLeft.push(line);
				}
				else{//both values are numbers
					dict[match[3]] = match[1] & match[2];
				}
            }
            else if(patOr.test(line)){
                var match = patOr.exec(line);
				if(isNaN(match[1] || isNaN(match[2]))){//if either first two groups is not a number
					if(match[1] in dict && match[2] in dict){//if the match is in the dictionary, we can do something
						var val1 = dict[match[1]];
						var val2 = dict[match[2]];

						var finVal = val1 | val2;//perform AND

						dict[match[3]] = finVal;

                    }
					else whatsLeft.push(line);
				}
				else if(isNaN(match[1])){
					if(match[1] in dict){
						var val1 = dict[match[1]];
						var val2 = match[2];

						var finVal = val1 | val2;//perform AND

						dict[match[3]] = finVal;
					}
					else whatsLeft.push(line);
				}
				else if(isNaN(match[2])){
					if(match[2] in dict){
						var val1 = match[1];
						var val2 = dict[match[2]];

						var finVal = val1 | val2;//perform AND

						dict[match[3]] = finVal;
					}
					else whatsLeft.push(line);
				}
				else{//both values are numbers
					dict[match[3]] = match[1] | match[2];
				}
            }
            else if(patNot.test(line)){
                var match = patNot.exec(line);
				if(isNaN(match[1])){
					if(match[1] in dict){
						var val =  ~(dict[match[1]] & 0xFFFF);//converts to 16-bit;
						dict[match[2]] = val;
						console.log("not val: " + val);
					}
					else whatsLeft.push(line);
				}
				else{
					var val = ~(match[1] & 0xFFFF);//converts to 16-bit
					dict[match[2]] = val;
					console.log("not val: " + val);
				}
            }
            else if(patRight.test(line)){
                var match = patRight.exec(line);
				if(isNaN(match[1])){
					if(match[1] in dict){
						var val = dict[match[1]] & 0xFFFF;
						val = val >> match[2];

						dict[match[2]] = val;
						console.log("right shift val: " + val);
					}
					else whatsLeft.push(line);
				}
				else{
					var val = match[1] & 0xFFFF;
					val = val >> match[2];
					dict[match[2]] = val;
					console.log("right shift val: " + val);
				}
            }
            else if(patLeft.test(line)){
                var match = patLeft.exec(line);
				if(isNaN(match[1])){
					if(match[1] in dict){
						var val = dict[match[1]] & 0xFFFF;
						val = val << match[2];
						dict[match[2]] = val;
						console.log("right shift val: " + val);
					}
					else whatsLeft.push(line);
				}
				else{
					var val = match[1] & 0xFFFF;
					val = val << match[2];
					dict[match[2]] = val;
					console.log("right shift val: " + val);
				}
            }
            else{
                console.log("did not find a matching pattern for the provided command");
                console.log("command: " + line);
            }
        }

        for(i in dict) {
            console.log (i, dict[i]);
        }

		lines = whatsLeft;
		console.log("Lines left: " + lines.length);
		whatsLeft = [];
    }


}
