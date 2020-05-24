function isPalindrome(string) {
	var rvrsdWord;
	var rvrsdArray = [];
	var word = string;
	var wordArray = Array.from(word);
	var result = false;
    
	while(wordArray.length != 0) {
		rvrsdArray.push(wordArray.pop());
	}
	
	rvrsdWord = rvrsdArray.toString();
    rvrsdWord = rvrsdWord.replace(/,/g, "");
	
	return result = true ? word == rvrsdWord : result;
}

var test = isPalindrome("seres");
console.log(test);