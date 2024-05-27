let guest_list: string[] = ["Ruksana", "Yasmeen", "Nasreen"];

//for (let i=0; i<guest_list.length; i++ )
//{console.log('Dear Miss. ' + guest_list[i] +',\n\n It is our pleasure to invite
// you in our party.\n\nThank you!\n\n');}

let absent_guest: string = "Ruksana";

let new_guest: string = "farzana";

guest_list[0] = new_guest;

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      guest_list[i] +
      ",\n\n It is our pleasure to invite you in our party.\n\nThank you!\n\n"
  );
}

console.log(`Miss. ${absent_guest} is not coming to tha party.\n\n `);

console.log("Good News! we find Big Table so we are inviting 3 more guests. ");

guest_list.unshift("fatima");
guest_list.splice(2, 0, "Hooram ali");
guest_list.push("Minahil Ali");

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      guest_list[i] +
      ",\n\n It is our pleasure to invite you in our party.\n\nThank you!\n\n"
  );
}
