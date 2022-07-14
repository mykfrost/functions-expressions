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
        // Error Handling
        if (typeof value !== 'string') 

        throw new Error('Undefined : Value is Not A String');

        const parts = value.split(' ');
        //Error Handling
        if(parts.length !== 2)
            throw new Error('Enter A First & Last Name');


        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'John Smith';
} catch (error) {
    //sconsole.log(error);
    alert(error);
}

console.log(person);

//This keyword
// This references the object that is referencing  the current function
 const video = {
    title: 'My Title',
    play(){
        console.log(this);
    }
 };

 //Lets add a stop method to the video object


 video.stop = function(){
    console.log(this);
 }

 video.stop();
 //Second example with this as a global object
 function playVideo(){

    console.log(this);

}

playVideo();

// The same using a constructor function

function Video (title){
    this.title = title;
    console.log(this);
}

const vidz = new Video('Jack Beanstalk');
//another example  with more objects in video 
// This references the object that is referencing  the current function
// const video2 = {
//     title: 'My Title',
//     tags:['Tag a','Tag b','Tag c','Tag d'],

//     showTags(){
//       this.tags.forEach(function(tag ){
//         console.log(this.title,tag);
//       },this);
//     }
//  };

// const video2 = {
//     title: 'Bind My Title',
//     tags:['Tag a','Tag b','Tag c','Tag d'],

//     showTags(){
//       this.tags.forEach(function(tag ){
//         console.log(this.title,tag);
//       }.bind(this));
//     }
//  };

//this is the most preferred way of doing this

//Arrow functions inherit the This parameter
const video2 = {
    title: ' My Title',
    tags:['Tag a','Tag b','Tag c','Tag d'],

    showTags(){
      this.tags.forEach( tag =>{
        console.log(this.title,tag);
      });
    }
 };
  video2.showTags();
//SECOND SOLUTION FOR CHANGING THIS
// This references the object that is referencing  the current function
//  const video2 = {
//         title: 'My Title',
//         tags:['Tag a','Tag b','Tag c','Tag d'],
    
//         showTags(){

//         const self = this ;//this will reference the video object

//           this.tags.forEach(function(tag ){
//             console.log(self.title,tag);
//           },this);
//         }
//      };

//Dont use the approach bovSe

// //changin this
// function playVideo2(a , b){
//     console.log('Play Video 2',this);
// }

// playVideo2.call({name: 'Okello Call'}, 1,2);
// playVideo2.apply({name: 'Okello Apply'}, [1,2]);//another way but this takes second arg as an array

// //Store result in an object
// const fn = playVideo2.bind({name : 'Okello Bind'});
// fn();

// //playVideo2();