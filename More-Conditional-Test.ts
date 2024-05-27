// • Tests for equality and inequality with strings test 01
console.log("Equality test with strings: ","Apple" === "Apple");

// • Tests for equality and inequality with strings test 02
console.log("Inequality test with strings: ",("Apple" as string )!= "orange");

// • Tests using the lower case function test 03
console.log("lower case function test:", "HELLO" .toLowerCase() === "hello");

// • Numerical tests involving equality 
console.log("Equality test with number" , 26 === 26);
// Numerical tests involving inequality
console.log("inequality test with number" , (26 as number) != 35);

//  greater than test
console.log("Greater than test: " , 10 > 5);
// less than test
console.log("less than test: " , 5 < 10);

//  greater than or equal to test 06
console.log("Greanter than and equal to test: " , 10 >= 10);
// less than or equal to
console.log("Less than or equal to test: " , 5 <= 10);

// • Tests using "and" operators
console.log("And operator test: " , 5 ===5 && 10 > 5);
// • Tests using "or" operator
console.log("Or operator test: " , 5 ===5 ||  false);

// • Test whether an item is in a array
const fruits :string[] = ['banana', 'apple' ,'mango'];
console.log('test "banana" in the array :' , fruits.includes("banana"));

// • Test whether an item is not in a array
console.log('testing "nashpati" is not in array:' ,!fruits.includes("nashpati"))
