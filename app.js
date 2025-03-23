/////// object inherit from other object :::

//// parent object
// const Person = {

//     init (firstName , lastName , birthYear) {
//         this.firstName = firstName ;
//         this.lastName = lastName ;
//         this.birthYear = birthYear ;
//     }
// }

// ///// child object :::

// const jhon = Object.create(Person) ;
// // jhon.firstName = "jhon" ;
// // jhon.lastName = "shmedman"
// // jhon.birthYear = 1220
// jhon.init("jhon" , "jackson" , 1995)
// console.log(jhon)

////////////////////  class inherit from another class  //////////////////////////// ::

// class Personc {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   introduce() {
//     console.log(
//       `my name is ${this.firstName} ${this.lastName} and i study ${this.courses}`
//     );
//   }
// }

// class Student extends Personc {
//   constructor(firstName, lastName, courses) {
//     super(firstName, lastName);
//     this.courses = courses;
//   }
// }

// const martha = new Student("martha", "smith", "computer scinece");
// console.log(martha.introduce());


////////////////////////////


class Account { 
    constructor (owner , currency , pin ){
   this.mouleh = owner ; 
   this.omla = currency ; 
   this._motdepasse = pin ; 
   this._flouss = [] //// fixed
   console.log(`thanks for opening an account ${owner}`)
    }

    deposit (val){
    this._flouss.push(val)
    }

    withdraw (val){
        // this.flouss.push(-val)
        this.deposit(-val)
    }
}





const acc5 = new Account("ali" , "euro" , 5555)
// acc5.flouss.push(100)
// acc5.flouss.push(200)
// acc5.flouss.push(300)
// acc5.flouss.push(-50)
// console.log(acc5.flouss)

// console.log(acc1)
acc5.deposit(200)
acc5.deposit(500)
acc5.withdraw(80)
console.log(acc5)



















