# Blog 2

## How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

### ভূমিকা

Object Oriented Programming (OOP) হলো এমন একটি programming style, যা বড় software project গুলোকে organized, structured এবং manageable রাখতে সাহায্য করে।

দেখা যায়, যখন আমাদের project বড় হতে থাকে, তখন code ধীরে ধীরে জটিল হয়ে যায়। এই complexity কমানোর জন্য OOP আমাদের চারটি গুরুত্বপূর্ণ concept দেয়:

* Inheritance
* Polymorphism
* Abstraction
* Encapsulation

---

### 1. Inheritance (উত্তরাধিকার)

Inheritance মানে হলো একটি class অন্য একটি class এর property এবং method ব্যবহার করতে পারে। অর্থাৎ, এক class আরেক class এর উপর ভিত্তি করে তৈরি হতে পারে।

উদাহরণস্বরূপ:

```ts
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
}
```

এখানে `Student` class, `Person` class কে extend করেছে। তাই `Student` automatically `name` এবং `age` property পেয়ে যাচ্ছে।

এছাড়া `super()` ব্যবহার করে আমরা parent class এর constructor call করছি। এর ফলে:

* একই code বারবার লিখতে হয় না
* code reuse করা যায়
* structure clean থাকে

---

### 2. Polymorphism (একই জিনিস, ভিন্ন আচরণ)

Polymorphism মানে হলো একই method ভিন্ন class এ ভিন্ন আচরণ দেখাতে পারে। অর্থাৎ, একই নামের method থাকলেও, সেটি পরিস্থিতি বা class অনুযায়ী ভিন্নভাবে কাজ করতে পারে।

উদাহরণস্বরূপ:

```ts
class Animal {
  sound(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  sound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  sound(): string {
    return "Meow";
  }
}
```

এখানে `Animal` class-এ একটি `sound()` method আছে। কিন্তু `Dog` এবং `Cat` class সেই একই method override করে ভিন্ন output দিচ্ছে। অর্থাৎ:

* `Dog` → "Bark"
* `Cat` → "Meow"

এটাই Polymorphism — একই method, কিন্তু ভিন্ন ভিন্ন behavior। এর ফলে কোড নমনীয় হয় এবং ভবিষ্যতে নতুন class যোগ করা হলেও সহজে নতুন আচরণ যোগ করা যায়, বিদ্যমান কোড পরিবর্তন করেই।

---

### 3. Abstraction (জটিলতা লুকানো)

Abstraction মানে হলো ভিতরের complex logic hide করে শুধু প্রয়োজনীয় অংশ দেখানো। User শুধু ব্যবহার করবে, ভিতরের কাজ কিভাবে হচ্ছে সেটা জানার দরকার নেই।

উদাহরণস্বরূপ:

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

এখানে user শুধু `getArea()` ব্যবহার করবে, ভিতরের calculation নিয়ে ভাবতে হবে না।

---

### 4. Encapsulation (ডেটা সুরক্ষা)

Encapsulation মানে হলো data কে secure রাখা এবং বাইরে থেকে direct access বন্ধ করা। অর্থাৎ Encapsulation ব্যবহার করে আমরা data private রাখতে পারি।

উদাহরণস্বরূপ:

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

বাইরে থেকে balance সরাসরি change করা যাবে না, শুধু method দিয়ে access করা যাবে।

---

### বাস্তব প্রকল্পে OOP কেন গুরুত্বপূর্ণ?

OOP (Object Oriented Programming) বড় এবং complex project গুলো manage করার জন্য খুবই গুরুত্বপূর্ণ। যখন project ছোট থাকে, তখন simple code দিয়েই কাজ চলে। কিন্তু project বড় হলে code অনেক complex হয়ে যায়। তখন OOP structure ব্যবহারে কাজ সহজ হয়।

উদাহরণস্বরূপ:

ধরা যাক আপনি একটা বড় system বানাচ্ছেন। যা হতে পারে: school management system বা e-commerce app।
এখানে অনেক ধরনের data এবং logic থাকে। যার ফলে code অনেক complex এবং manage করা কঠিন হয়ে যায়।

Oএই ক্ষেত্রে আমরা OOP ব্যবহার করে বড় system কে ছোট ছোট class এ ভাগ করে সহজে কাজ করতে পারি। ফলস্বরূপ:

* code organized থাকে
* বড় project manage করা সহজ হয়
* code reuse করা যায়
* bug কম হয়
* maintain করা সহজ হয়

---

### উপসংহার

OOP এর চারটি pillar একসাথে কাজ করে complex system কে সহজ এবং manageable করে তোলে। যার ফলে বড়-scale project গুলোকে সহজভাবে manage করা যায় এবং professional, scalable code লেখা সম্ভব হয়।

তাই এই concepts গুলো ভালোভাবে জানা, বুঝা এবং সঠিকভাবে ব্যবহার করা খুবই গুরুত্বপূর্ণ। কারণ এগুলোই আমাদের clean, reusable এবং professional মানের TypeScript code লিখতে সাহায্য করে।

---
