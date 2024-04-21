let guest_list: string[] =['fatima','usama','mehak','areen fatima'];
console.log("I would like to inform you that we found a big dinner table.");

// Add arrays in beginning, middle and end.
guest_list.unshift("Sanam");
guest_list.push("Sumaira");
let middleIndex: number = Math.floor(guest_list.length / 2);
guest_list.splice(middleIndex, 0, "Samina");

for(let i=0; i<guest_list.length; i++) {
    console.log(`Dear, ${guest_list[i]}, \nYou are invited for dinner taday.\n \nYour Friend\n \nIQRA USAMA VOHRA\n`)
}
export{guest_list}

