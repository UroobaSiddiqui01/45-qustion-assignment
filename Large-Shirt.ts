// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size: string = 'large' ,text :string = 'I love Typescript.'){
    console.log(`cerating a ${size} shirt with the message :${text}`);
}
make_shirt();

make_shirt('Medium');

make_shirt('small' , 'I love python');
