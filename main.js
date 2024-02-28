function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
        console.log(magicians[i]);
    }
}
var magicians = ["Harry Porter", "Ron Weasly", "David Copperfield"];
make_great(magicians);
