// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


function makesandwich (item: string[]){
    console.log('Making Your Sendwich With:');

    item.forEach(element => console.log("- " + element));

    console.log('Enjoy your sandwich !');
};

makesandwich(['Ham' , 'cheese', 'lettuce']);

makesandwich(['Turkey', 'Bacon']);

makesandwich(['Peanut Butter' , 'Jelly']);