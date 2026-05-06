# Blog 2

## How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

### Introduction

Object Oriented Programming (OOP) হলো এমন একটা programming style, যেটা বড় software project গুলোকে organized এবং manageable রাখতে সাহায্য করে।

যখন project বড় হতে থাকে, তখন code messy হয়ে যায়। এই problem solve করার জন্য OOP চারটা গুরুত্বপূর্ণ concept দেয়:

* Inheritance
* Polymorphism
* Abstraction
* Encapsulation

---

### 1. Inheritance (উত্তরাধিকার)

Inheritance মানে হলো এক class আরেক class এর property এবং behavior use করতে পারে।

ধরুন আমাদের একটা base class আছে:

```ts id="o1"
class Person {
  name: string;
  age: number;
}
```

এখন Student class যদি Person এর সব কিছু use করে:

```ts id="o2"
class Student extends Person {
  grade: string;
}
```

এখানে Student automatically Person এর name এবং age পেয়ে যায়। এতে বারবার same code লিখতে হয় না।

---

### 2. Polymorphism (একই জিনিস, ভিন্ন আচরণ)

Polymorphism মানে হলো একই function বা method different context এ different behavior দেখাতে পারে।

একটা simple example:

একই method “sound()” কিন্তু animal অনুযায়ী different output হতে পারে।

উদাহরণ:

```ts id="o1"
class Animal {
  sound(): void {
    console.log("Some sound");
  }
}
```

* কুকুর ঘেউ ঘেউ করবে
* বিড়াল মিউ মিউ করবে

এটাই polymorphism।

---

### 3. Abstraction (জটিলতা লুকানো)

Abstraction মানে হলো ভিতরের complex logic hide করে শুধু প্রয়োজনীয় অংশ দেখানো। User শুধু ব্যবহার করবে, ভিতরের কাজ কিভাবে হচ্ছে সেটা জানার দরকার নেই।

এটা real life example এর মতো:

আপনি mobile ব্যবহার করেন, কিন্তু ভিতরের circuit জানেন না।

---

### 4. Encapsulation (data protection)

Encapsulation মানে হলো data কে secure রাখা এবং বাইরে থেকে direct access বন্ধ করা।

উদাহরণ:

```ts id="o3"
class BankAccount {
  private balance: number = 0;
}
```

এখানে balance সরাসরি change করা যাবে না। এতে data safe থাকে।

---

### Why OOP is important in real projects?

OOP ব্যবহার করলে:

* code organized থাকে
* large project manage করা সহজ হয়
* bug কম হয়
* code reuse করা যায়

---

### Conclusion

OOP এর চারটা pillar একসাথে কাজ করে বড় project কে simple এবং structured রাখতে। এই concepts ভালোভাবে বুঝতে পারলে আপনি শুধু TypeScript না, real-world software development এও অনেক confident হয়ে উঠবেন।

---
