/***********************************************************************
Write a function, 'manyArgs' that accepts an arbitrary number of arguments!
What does this mean? Well sometimes your function could be given 20 arguments,
sometimes it could be given 1. Each argument will be a number. Your function
should return an integer representing every argument multiplied together.


Assumption:
Your function will always be passed at LEAST one argument.


Examples:

manyArgs(1, 2, 3, 4, 5, 6, 7) // 5040
manyArgs(1, 2, 5, 6, 7) // 420
manyArgs(1, 2, 5, 6) // 60




***********************************************************************/
// 
// const manyArgs = (...args) => {
//     let integer = 0;
//     for (let i = 0; i < args.length; i++) {
//         let arg = args[i];
//         for (let j = 1; j < args.length; j++) {
//             let nextArg = args[j];
//             integer = arg *= nextArg;
//         }
//         
//     }
//     console.log(integer);
// }

const manyArgs = (...args) => {
    let product = 1;
    args.forEach(arg => {
        product *= arg;
    });
    return product;
}

manyArgs(1, 2, 3, 4, 5, 6, 7) // 5040
manyArgs(1, 2, 5, 6, 7) // 420
manyArgs(1, 2, 5, 6) // 60

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = manyArgs;
} catch(e) {
    module.exports = null;
}