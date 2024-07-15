function firstNonRepeatedChar(str) {
	let n = str.length;
    
    for (let i = 0; i < n; ++i) {
        let found = true;
        for (let j = 0; j < n; ++j) {
            if (i !== j && str[i] === str[j]) {
                found = false;
                break;
            }
        }
        
        if (found) {
            return i;
        }
    }
    return -1;

}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
