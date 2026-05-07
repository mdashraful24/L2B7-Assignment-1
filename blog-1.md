<!-- # Blog 1 -->

## How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

### ভূমিকা

TypeScript-এ আমরা যখন বড় বড় object বা data structure নিয়ে কাজ করি, তখন প্রায়ই একই ধরনের properties বারবার ব্যবহার করতে হয়। এতে code অনেক বড় হয়ে যায় এবং maintain করাও অনেক কঠিন হয়ে পড়ে।

এই সমস্যা সমাধান করার জন্য TypeScript আমাদের কিছু useful utility types দিয়ে থাকে, যেমন `Pick` এবং `Omit`। এগুলো ব্যবহার করে আমরা সহজে একটি বড় interface থেকে প্রয়োজন অনুযায়ী ছোট অংশে আলাদা করতে পারি।

---

### `Pick` বলতে কী বোঝায়?

`Pick` হলো TypeScript-এর একটি utility type, যেটা ব্যবহার করে আমরা কোনো বড় object বা interface থেকে শুধু কিছু নির্দিষ্ট property বেছে নিতে পারি।

আরও সহজভাবে বললে:
`Pick` মানে হলো “আমি পুরো object না নিয়ে শুধু দরকারি অংশটা নিতে চাই।”

উদাহরণস্বরূপ:

ধরুন আমাদের একটা User interface আছে:

```ts id="u1"
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
```

এখন যদি আমাদের শুধু `name` এবং `email` দরকার হয়, তাহলে আমরা পুরো User ব্যবহার না করে খুব সহজে `Pick` এর সাহায্যে `name` এবং `email` ব্যবহার করতে পারি। যেমনঃ 

```ts id="u2"
type UserPreview = Pick<User, "name" | "email">;
```

এখানে আমরা পুরো User ব্যবহার না করে শুধু দরকারি অংশটাই নিচ্ছি।

---

### `Omit` বলতে কী বোঝায়?

`Omit` হলো TypeScript-এর একটি utility type, যেটা ব্যবহার করে আমরা কোনো object বা interface থেকে কিছু নির্দিষ্ট property বাদ দিতে পারি।

আরও সহজভাবে বললে:
`Omit` হলো ঠিক `Pick` এর উল্টো। মানে হলো “আমি পুরো object থেকে কিছু অংশ বাদ দিতে চাই।”

উদাহরণস্বরূপ:

```ts id="u3"
type UserWithoutId = Omit<User, "id">;
```

এখানে আমরা বলছি: “আমরা User থেকে id বাদ দিতে চাই।”

---

### এটি কেন দরকারি?

বাস্তব project এ আমরা অনেক সময় একই interface থেকে বিভিন্ন জায়গায় different version বানাই। যেমন:

* কোথাও শুধু name দরকার
* কোথাও password বাদ দিতে হয়
* কোথাও limited info show করতে হয়

যদি আমরা এসব ক্ষেত্রে বারবার নতুন interface লিখি, তাহলে আমাদের:

* code duplicate হয়
* mistake হওয়ার chance বাড়ে
* maintain করা কঠিন হয়

---

### এটি কীভাবে DRY নীতি অনুসরণ করে?

DRY মানে হলো “Don’t Repeat Yourself” — অর্থাৎ একই জিনিস বারবার না লিখে যতটা সম্ভব reuse করা।

যদি আমরা DRY follow না করি, তাহলে আমাদের বারবার নতুন interface লিখতে হয়. তাই `Pick` এবং `Omit` ব্যবহার করলে আমরা একই interface বারবার লিখি না। বরং:

* একটাই master interface থাকে
* সেখান থেকে ছোট ছোট প্রয়োজন অনুযায়ী অংশ নেওয়া হয়

এর ফলে code clean থাকে, duplicate লেখা কমে, এবং maintain করা সহজ হয়। এছাড়া error কম হয় এবং ভবিষ্যতে পরিবর্তন করাও অনেক সহজ হয়।

---

### উপসংহার

`Pick` এবং `Omit` ছোট মনে হলেও এগুলো বড় project এ খুব গুরুত্বপূর্ণ ভূমিকা রাখে। এগুলো ব্যবহার করলে:

* code duplication কমে
* structure clean থাকে
* maintainability বাড়ে

তাই TypeScript শেখার সময় এই concepts গুলো ভালোভাবে বুঝে নেওয়া খুবই জরুরি। এগুলো জানলে আপনি সহজে clean এবং professional code লিখতে পারবেন।

---
