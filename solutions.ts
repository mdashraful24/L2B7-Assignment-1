// Problem 1 solution: Filter Even Numbers

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}


// Problem 2 solution: Reverse a String

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}
