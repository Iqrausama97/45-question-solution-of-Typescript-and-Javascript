var current_users = ['sehrish', 'samina', 'ilma', 'mehwish', 'shumaila'];
var new_users = ['fatima', 'muntaha', 'sehrish', 'ilma', 'noor'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) { //loop through new_users 
    var new_user = new_users_1[_i];
    var lowercase_new_user = new_user.toLowerCase(); //For case insensitive
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("The username ".concat(new_user, " is not available. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
}
