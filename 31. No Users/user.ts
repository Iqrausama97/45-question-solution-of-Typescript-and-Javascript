// Make an array
let usernames: string [] = [ ];

if (usernames.length > 0) {
    for (let username of usernames){
        if(username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, Thank you for logging in again.`)
    }
    }
} else {
    console.log("We need to find some users.")
}