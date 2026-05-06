// Solution to Problem 1: Filter Even Numbers

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}


// Solution to Problem 2: Reverse a String

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}


// Solution to Problem 3: Type Guard for String or Number

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}


// Solution to Problem 4: Generic Function to Get Property Value

const getProperty = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key];
};


// Solution to Problem 5: Intersection Types for Book and Read Status

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

type BookWithReadStatus = Book & { isRead: boolean };

function toggleReadStatus(book: Book, isRead: boolean = true): BookWithReadStatus {
    return {
        ...book,
        isRead
    };
}


// Solution to Problem 6: Class Inheritance for Person and Student

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// Solution to Problem 7: Intersection of Two Arrays

function getIntersection(arr1: number[], arr2: number[]): number[] {
    const result = new Set(arr2);
    return arr1.filter(num => result.has(num));
}
