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


// Problem 5 solution: Intersection Types for Book and Read Status

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


// Problem 6 solution: Class Inheritance for Person and Student

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
