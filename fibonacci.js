// This code returns the nth fibonnaci number and the entire sequence.
function getNthFib(n) {
    var first = 0;
    var second = 1;
    var third;
    var counter;
    var sequence = [];
      
    if(n == 1) { 
        sequence.push(first);
    } else if (n == 2){
        sequence.push(first);
        sequence.push(second);
    } else {
           sequence.push(first);
        sequence.push(second);
      
        for(counter = 3; counter <= n; counter++) {
              third = first + second;
              sequence.push(third);
              first = second;
              second = third;
      }
    }
    return n + ", (" + sequence + ")"; 
  }

// This code returns the nth fibonacci number
// function getNthFib(n) {
//     var first = 0;
//     var second = 1;
//     var third;
//     var counter;
//     var sequence = [];
	
//     if(n == 1) { 
//         return first;
//     } else if (n == 2){
//         return second;
//     } else {
//         sequence.push(first);
//         sequence.push(second);
        
//         for(counter = 3; counter <= n; counter++) {
//             third = first + second;
//             sequence.push(third);
//             first = second;
//             second = third;
//         }
//     }

//     return sequence[sequence.length - 1]; 
// }


console.log(getNthFib("5"));