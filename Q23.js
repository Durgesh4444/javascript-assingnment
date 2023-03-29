//23. Write a program to check that the number given by the user is a prime number or not.

// 5 
// 5*1=5
// 1*5 =5

// 6
// 1*6
// 6*1
// 2*3
// 3*2

// let num =45;
// let sum = 0;

// for( let i=0; i<num; i++){
//     if(number%i==0){sum++;}
    
// }
// if(sum == 2){
//     console.log(num + "is prime number");
// }
// else{
//     console.log(num + "is not prime number");
// }


// program to check if a number is prime or not

// take input from the user
const number = 65;
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}