 
var getInput = function(n) {
	var arr = []
	for(var t =0; t < n; t++) {
		arr.push(t+1)
	}
	return arr;
}
var getKilled = function(n) {
	var input = getInput(n);
	var counter = 0;
	while(input.length > 1) {
		var currentElem = input[counter]
		input.push(currentElem)//survivor
		input.shift()
		var nextElem = input[counter]
		input.shift()//killed 
		console.log('element '+ currentElem +' killed ' + nextElem)
		//counter = counter + 1;
	}
	console.log('Survivor is '+ input[0])
}

getKilled(100)