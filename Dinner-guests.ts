let guest_list: string[] = ["Ruksana", "Yasmeen", "Nasreen"];

//for (let i=0; i<guest_list.length; i++ )
//{console.log('Dear Miss. ' + guest_list[i] +',\n\n It is our pleasure to invite
// you in our party.\n\nThank you!\n\n');}

let absent_guest: string = "Ruksana";

let new_guest: string = "farzana";

guest_list[0] = new_guest;

// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       guest_list[i] +
//       ",\n\n It is our pleasure to invite you in our party.\n\nThank you!\n\n"
//   );
// }

// console.log(`Miss. ${absent_guest} is not coming to tha party.\n\n `);
// console.log("Good News! we find Big Table so we are inviting 3 more guests. ");
// array ma 3 guest add kiya hain.
guest_list.unshift("fatima");
guest_list.splice(2, 0, "Hooram ali");
guest_list.push("Minahil Ali");
// yaha per mena 6 guest ka array ko print karaya he.
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       guest_list[i] +
//       ",\n\n It is our pleasure to invite you in our party.\n\nThank you!\n\n"
//   );
// }
// sorry message to guest for not inviting.
// console.log('\n sorry we can not arrange big table, only Two peoples will be invited. ');
// yaha par mene guest remove kiya hain.
while(guest_list.length > 2){
 let remove_guest = guest_list.pop();
//  console.log(`sorry Miss. ${remove_guest}, you are not invited for dinner`);
}
// hamare bache howe 2 invited guest.
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       guest_list[i] +
//       ",\n\n you are still invited .\n\nThank you!\n\n"
//   );
// }
// mene sara guest array sa ramove kar diya.
guest_list.splice(0, 2);
console.log (guest_list);

// exercise  19
//  print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are : ${guest_list.length}`);