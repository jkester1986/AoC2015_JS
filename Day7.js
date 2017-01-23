function parseInput(){
	var text = document.getElementById("text").value;
	var lines = text.split('\n');

    var pat1 = /^(\d+|\w+)\s->\s(\w+)$/;
    var patAnd = /^(\d+|\w+)\sAND\s(\d+|\w+)\s->\s(\w+)$/;
    var patOr = /^(\d+|\w+)\sOR\s(\d+|\w+)\s->\s(\w+)$/;
    var patNot = /^NOT\s(\d+|\w+)\s->\s(\w+)$/;
    var patRight = /^(\d+|\w+)\sRSHIFT\s(\d+)\s->\s(\w+)$/;
    var patLeft = /^(\d+|\w+)\sLSHIFT\s(\d+)\s->\s(\w+)$/;

    for (line of lines){
        if(pat1.test(line)){
            var match = pat1.exec(line);
            if(isNaN(match[1])){//if first group is not a number

            }
            else{//first group is a number

            }
        }
        else if(patAnd.test(line)){
            var match = patAnd.exec(line);
        }
        else if(patOr.test(line)){
            var match = patOr.exec(line);
        }
        else if(patNot.test(line)){
            var match = patNot.exec(line);
        }
        else if(patRight.test(line)){
            var match = patRight.exec(line);
        }
        else if(patLeft.test(line)){
            var match = patLeft.exec(line);
        }
        else{
            console.log("did not find a matching pattern for the provided command");
            console.log("command: " + line);
        }
    }
}
