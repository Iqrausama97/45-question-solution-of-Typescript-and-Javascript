let usernames: string[] = ['sabreena', 'sophia', 'josh', 'admin', 'zakir'];


for (let username of usernames){
    if(username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, Thank you for logging in again.`)
}
}