const magicianNames: string[] = ["Harry Porter", "Ron Weasly", "David Copperfield"];
function showMagicians (magicians: string[]) : void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians : string[]) : string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
const greatMagicianNames: string[] = make_great(magicianNames);

console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);