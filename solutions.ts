// Problem 1 solution: Filter Even Numbers

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}


// Problem 2 solution: Reverse a String

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}


// Problem 3 solution: Type Guard for String or Number

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}


// Problem 4 solution: Generic Function to Get Property Value

const getProperty = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key];
};
