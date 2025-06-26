/*

console.log(8 + "8");  // 88
console.log(8 + +"8"); // 16
//  +"" is the shorthand notation to convert string into number
let num = +"12345";
console.log(num + 5); // 12350
console.log(+"95" + 5);
console.log("5" + "5");
console.log(+"20"+ +"30");
console.log("2" + +"5");

*/

// Below two functions are very similar, observe them carefully
/*

function balanceCheck(amount){
    let balance = amount;
    return balance || "Not valid";
}
console.log(balanceCheck(50));
console.log(balanceCheck(0));
console.log(balanceCheck(-20));


function checkBalance(amount){
    let balance = amount;
    return balance ?? "Not valid";   // this line won't return invalid for zero balance like above one
}
console.log(checkBalance(50));
console.log(checkBalance(0));
console.log(checkBalance(-10));

*/

/*

            // Important Array concept

let arr = [1,2,[3,4,5],6];
// console.log(arr.length);  // 4
// console.log(arr[2].length);  // 3

// can you make a copy of all values of  the array?

// let copyArr = arr;
// console.log(copyArr);
// console.log(arr);
// copyArr.push(7);
// console.log(copyArr);
// console.log(arr);

// It means let copyArr = arr    is not a copy but just a reference of array bcz original array is getting changed if any operation done on copyArr

                // Spread Operator   makes a shallow copy 
// let arrCopy = [...arr];  // A shallow copy hai, sirf first level ko copy krta hai. Nested array ka reference hi copy krega
// console.log(arrCopy);
// console.log(arr);
// arrCopy.push(7);
// console.log(arrCopy);
// console.log(arr);
// arrCopy[2].push(10);
// console.log(arrCopy);
// console.log(arr);

let copy = JSON.parse(JSON.stringify(arr));     // Deep Copy 
console.log(copy);
console.log(arr);
copy.push(7);
copy[2].push(10);
console.log(copy);
console.log(arr);

*/
