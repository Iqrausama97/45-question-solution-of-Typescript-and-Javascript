let current_users: string[] = ['sehrish','samina','ilma','mehwish','shumaila'];
let new_users: string[] = ['fatima','muntaha','sehrish','ilma','noor'];

for (let new_user of new_users){ //loop through new_users 

    let lowercase_new_user = new_user.toLowerCase(); //For case insensitive
    
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)){
        console.log(`The username ${new_user} is not available. Please enter a new username.`)
    }else{
        console.log(`The username ${new_user} is available.`)
    }
}