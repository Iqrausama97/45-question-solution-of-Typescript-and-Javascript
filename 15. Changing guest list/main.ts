let guestList: string[] =['Amna','Sehrish','Anum','Sidra'];
for(let i=0; i<guestList.length; i++) {
    console.log(`Salam! ${guestList[i]} \n Hope, you are doing well.\n \n We are invited you for dinner today.\n \nRegards,\n \n Iqra Khan \n`);
}

let absent_guest: string = "Sidra";
let new_guest: string = "Yasmeen Imran Khan";
guestList[3] = new_guest;

for(let i=0; i<guestList.length; i++) {
    console.log(`Salam! ${guestList[i]} \n Hope, you are doing well.\n \n We are invited you for dinner today.\n \nRegards,\n \n Iqra Khan \n`);
}
console.log(`Ms.${absent_guest} will not attend today's dinner`);
export{guestList}