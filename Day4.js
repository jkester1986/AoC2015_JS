function findHash(){
	var secKey = "bgvyzdsv";
	var num = 0;

	var toHash = secKey + num;

	var hash = md5(toHash);
	//note - js handles hashing WAY easier than java

	console.log(hash);
	document.getElementById("hash").innerHTML = hash;

	var pat = /^00000.*/;

	while(!pat.test(hash)){
		num ++;
		toHash = secKey + num;
		hash = md5(toHash);
		document.getElementById("hash").innerHTML = hash;
	}

	document.getElementById("ans1").innerHTML = "the lowest number to give a hash starting with 5 0's is " + num;

	var pat2 = /^000000.*/;

	while(!pat2.test(hash)){
		num ++;
		toHash = secKey + num;
		hash = md5(toHash);
		document.getElementById("hash").innerHTML = hash;
	}

	document.getElementById("ans2").innerHTML = "the lowest number to give a hash starting with 6 0's is " + num;
  }
