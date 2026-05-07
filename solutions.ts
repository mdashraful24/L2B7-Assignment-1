function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}



function reverseString(inputStr: string): string {
    return `"${inputStr.split("").reverse().join("")}";`;
}



type StringOrNumber = string | number;

function checkType(inputStr: StringOrNumber): string {
    if (typeof inputStr === "string") {
        return `"String";`;
    } else {
        return `"Number";`;
    }
}



const getProperty = <O, K extends keyof O>(obj: O, key: K) => {
    return `"${obj[key]}";`;
};



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
        return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`;
    }
}



function getIntersection(array1: number[], array2: number[]): number[] {
    const commonElements = [...new Set(array1)];
    const resultArr = new Set(array2);
    return commonElements.filter(number => resultArr.has(number));
}
