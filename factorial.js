function obtainFactorial(n) {
    if(n == 1) { // Base case
        return 1;
    } else {
        return n * obtainFactorial(n - 1);
    }
}

console.log(obtainFactorial("4"));