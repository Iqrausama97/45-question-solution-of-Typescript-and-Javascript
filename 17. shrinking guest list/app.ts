let guest_list: string[] =['fatima','usama','mehak','areen fatima'];
console.log("Sorry, the new dinner table won't arrive in time. I can invite only two people for dinner.");

// Add arrays in beginning, middle and end.
guest_list.unshift("Sanam");
guest_list.push("Sumaira");
let middleIndex: number = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "Samina");

while (guest_list.length > 2) {
    let remove_guest: string = guest_list.pop()!;
    console.log(`Sorry, ${remove_guest}, I'm unable to invite you to dinner.`);
}

for(let i=0; i<guest_list.length; i++) {
    console.log(`Dear, ${guest_list[i]}, you're still invited to dinner.`);
}