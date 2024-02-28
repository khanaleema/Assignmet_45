function make_great(magicians: string[]) : void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] +  ' the great'
        console.log(magicians[i])
    }
}

const magicians: string[] = ["Harry Porter", "Ron Weasly", "David Copperfield"];
make_great(magicians)
