// private properties & methods

/*
class Customer
{
    customerId;
    customerName;
    #customerAge;
    customerSalary;
    #cardNumber;


    constructor(customerId,customerName,age,salary,card)
    {
        this.customerId = customerId;
        this.customerName = customerName;
        this.#customerAge = age;
        this.customerSalary = salary;
        this.#cardNumber = card;
    }

    getCustomerAge()
    {
        return this.#customerAge;
    }
    #getCardNumber()
    {
        return this.#cardNumber;
    }
}

let cust1 = new Customer(100,"Scott",50,30000,34567);
console.log(cust1);
console.log(cust1.getCustomerAge());

*/

// set method and get method

/*

class Person {
  #personName;
  #age;

  setPersonName(value) {
    if (value == null || value == undefined) {
      console.error("Null or undefined is not allowed for person name");
    } else {
      if (value.length >= 30) {
        console.error("Name length can't be of 30 or more character");
      } else {
        this.#personName = value;
      }
    }
  }

  getPersonName() {
    return this.#personName;
  }

  getAge() {
    return this.#age;
  }

  setAge(val) {
    if (val < 0 ) {
      console.error("Negative age is not allowed");
    } else {
      this.#age = val;
    }
  }
}

let man = new Person();
man.setPersonName("John Smith");
man.setAge(50);
console.log(man.getPersonName());
console.log(man.getAge());

*/

// Accessor Properties

/*

class Person {
  #personName;
  #age;

  set PersonName(value) {
    if (value == null || value == undefined) {
      console.error("Null or undefined is not allowed for person name");
    } else {
      if (value.length >= 30) {
        console.error("Name length can't be of 30 or more character");
      } else {
        this.#personName = value;
      }
    }
  }

  get PersonName() {
    return this.#personName;
  }

  get Age() {
    return this.#age;
  }

  set Age(val) {
    if (val < 0 ) {
      console.error("Negative age is not allowed");
    } else {
      this.#age = val;
    }
  }
}

let man = new Person();
man.PersonName = "John Smith";
man.Age = 50;
console.log(man.PersonName);
console.log(man.Age);

*/

// Class Inheritance

/*
class Teacher{
    teacherName;
    teacherAge;

    constructor(teacherName,age){
        this.teacherName = teacherName;
        this.teacherAge = age;
    }
}

class PhysicsTeacher extends Teacher{
    subject;
    city;


    constructor(subject,city){
        super("Smith",30);
        this.subject = subject;
        this.city = city;

    }

    getDetails(){
        return `Teachername: ${this.teacherName}, City: ${this.city}`
    }
}

let teacher1 = new Teacher("Scott",25);
console.log(teacher1);
let teacher2 = new PhysicsTeacher("Physics","India");
console.log(teacher2);
console.log(teacher2.getDetails());
console.log(teacher2.__proto__); // object.__proto__ hai to parent ka reference rakhega
console.log(teacher2.__proto__.__proto__); // parent.__proto__ hai to empty ko refer krega

*/


//  Class polymorphism

/*
class Person{
    personName;
    personAge;

    constructor(personName,personAge){
        this.personName = personName;
        this.personAge =  personAge;
    }

    getDetails(){
        return `Name: ${this.personName}, Age: ${this.personAge}`;
    }
}

class Teacher extends Person{
    subject;
    city;

    constructor(subject,city){
        super("Scott",60);
        this.subject = subject;
        this.city = city;
    }

    getDetails(){
        return `${super.getDetails()}, Subject: ${this.subject}, City: ${this.city}`;
            // getDetails() methods get override using super.getDetails()
    }
}

let person1 = new Person("John",90);
console.log(person1);
console.log(person1.getDetails());
let teacher1 = new Teacher("Maths","USA");
console.log(teacher1);
console.log(teacher1.getDetails());
*/

//  Abstract Classes

/*

class Person{
  personName;
  age;

  constructor(personName,age){
    if(this.constructor == Person){           // new.target === Person
      throw new Error ("Abstract class person can't be instantiated")
    }

    this.personName = personName;
    this.age = age;
  }

  getDetails(){
    return `PersonName: ${this.personName}, PersonAge: ${this.age}`;
  }
}

class Teacher extends Person{
  subject;
  city;

  constructor(sub,city){
    super("Scott",40);

    this.subject = sub;
    this.city = city;
  }

  getDetails(){
    return `Subject: ${this.subject}, City: ${this.city}`;
  }

  getData(){
    return `${super.getDetails()},Subject: ${this.subject}, City: ${this.city}`;  // method override
  }
}

// let man = new Person();  // throw error bcz of abstract class
// console.log(man);

let guru = new Teacher("Math","USA");
console.log(guru);
console.log(guru.getDetails());
console.log(guru.getData());

*/

//  Static Properties and Methods

class User{

  userName;
  userRole;

  static userCount = 0;

  constructor(userName,userRole){
    this.userName = userName;
    this.userRole = userRole;
    User.userCount++;
    
  }

  getDetails(){
    return `${this.userName} is ${this.userRole}`;
  }

  static getUserCount(){
    return User.userCount;
    
  }
}

let user1 = new User("John","Admin");
let user2 = new User("Josh","VP");
let user3 = new User("Joseph","Captain");
console.log(user1);
console.log(user1.getDetails());
console.log(user2);
console.log(user2.getDetails());
console.log(user3);
console.log(user3.getDetails());

console.log(User.getUserCount());  // call on class level
