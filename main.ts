let users : string [] = ["admin" , "aleema" , "saeer" , "hoor"]
for(let user of users) {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(` Hello ${user}, Thank you for logging in again`)
    }
}