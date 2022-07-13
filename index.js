//Function Declaration
function walk(){

    console.log('walk');
}

//Anonimous Function Expression

let run = function(){
console.log('run');
};

//Arguements 
console.log('NORMAL=>',sum(5,45,4,5,3));
function sum(){
    let total = 0 ;
    for(let value of arguments)
    total += value;
    return total;
}
// Using The Rest Operator
console.log('REST=>',sum2(5,45,4,5,3));
function sum2(...args){
    let total = 0 ;
    for(let value of arguments)
    total += value;
    return total;
}


//Using the reduce method

console.log('REDUCE',sumReduce(5,45,4,5,3));
function sumReduce(...args){
    return args.reduce((a , b) => a + b);// This is the simplest way to give a summation 
}

//Using the reduce method with shopping cart to calculate discounts


function sumReduceD(discount,...prices){

    const total = prices.reduce((a , b) => a + b);// This is the simplest way to give a summation 

    return total * ( 1 - discount);
}
console.log('REDUCE + DISCOUNT',sumReduceD(0.1, 20, 30));

//Default Values

function interest(principal , rate = 3.5, years = 5 ){
    // rate = rate || 3.5 ;// Truthy values
    // years = years || 5;
    return principal * rate /100 * years;
}

console.log('Interest is ',interest(10000));

// Getters & Setters

// const person = {
//     firstName : 'Michael',
//     lastName :'Okello',
//     fullname(){
//       return `${person.firstName}`+' '+`${person.lastName}`;
//     }
// };

// console.log('Full Name :',person.fullname());

//Solution above is before using getters and setters
// Getters => used to access properties in an object
//Setters => used to change / mutate properties in an object

const person = {
    firstName : 'Michael',
    lastName :'Okello',
    get fullName(){
      return `${person.firstName}`+' '+`${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Kevin Samuels';
console.log(person);