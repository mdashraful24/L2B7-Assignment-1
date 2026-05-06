# Blog 1

## How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

### Introduction

TypeScript-এ আমরা যখন বড় বড় object বা data structure নিয়ে কাজ করি, তখন প্রায়ই একই ধরনের properties বারবার ব্যবহার করতে হয়। এতে code অনেক বড় হয়ে যায় এবং maintain করাও কঠিন হয়ে পড়ে।

এই সমস্যা সমাধান করার জন্য TypeScript আমাদের দেয় কিছু useful utility types, যেমন `Pick` এবং `Omit`। এগুলো ব্যবহার করে আমরা সহজে একটি বড় interface থেকে প্রয়োজন অনুযায়ী ছোট অংশ আলাদা করতে পারি।

---

### What is `Pick`?

`Pick` ব্যবহার করা হয় যখন আমরা কোনো বড় interface থেকে কিছু নির্দিষ্ট property আলাদা করে নিতে চাই।

ধরুন আমাদের একটা User interface আছে:

```ts id="u1"
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
```

এখন যদি আমরা শুধু `name` এবং `email` দরকার হয়, তাহলে আমরা `Pick` ব্যবহার করতে পারি:

```ts id="u2"
type UserPreview = Pick<User, "name" | "email">;
```

এখানে আমরা পুরো User ব্যবহার না করে শুধু দরকারি অংশটা নিচ্ছি।

---

### What is `Omit`?

`Omit` ঠিক এর উল্টো কাজ করে। এটা কোনো property বাদ দেয়।

```ts id="u3"
type UserWithoutId = Omit<User, "id">;
```

এখানে আমরা বলছি: “আমরা User থেকে id বাদ দিতে চাই।”

---

### Why is this useful?

বাস্তব project এ আমরা অনেক সময় একই interface থেকে বিভিন্ন জায়গায় different version বানাই।

যেমন:

* কোথাও শুধু name দরকার
* কোথাও password বাদ দিতে হয়
* কোথাও limited info show করতে হয়

যদি আমরা বারবার নতুন interface লিখি, তাহলে:

* code duplicate হয়
* mistake হওয়ার chance বাড়ে
* maintain করা কঠিন হয়

---

### How it follows DRY principle

DRY মানে: Don’t Repeat Yourself

`Pick` এবং `Omit` ব্যবহার করলে আমরা একই interface বারবার লিখি না। বরং:

* একটাই master interface থাকে
* সেখান থেকে ছোট ছোট প্রয়োজন অনুযায়ী অংশ নেওয়া হয়

এতে code clean থাকে এবং future changes করা সহজ হয়।

---

### Conclusion

`Pick` এবং `Omit` ছোট মনে হলেও এগুলো বড় project এ খুব গুরুত্বপূর্ণ ভূমিকা রাখে। এগুলো ব্যবহার করলে:

* code duplication কমে
* structure clean থাকে
* maintainability বাড়ে

TypeScript শেখার সময় এগুলো বুঝে গেলে আপনি definitely more professional code লিখতে পারবেন.

---
