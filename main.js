"use strict";
let name_1 = "burhan";
let name_2 = "burhan dil";
let name_3 = "burhan dil sher";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 == name_3) {
    console.log("names are equal");
}
let age_1 = 24;
let age_2 = 18;
if (age_2 == 18) {
    console.log("eligible fot vote");
}
if (age_1 == 24) {
    console.log("eligible fot vote in older category");
}
if (age_1 >= age_2) {
    console.log("younger");
}
if (age_2 <= age_1) {
    console.log("older");
}
if (age_1 == 24 && age_2 == 18) {
    console.log(" person is eligible for vote");
}
if (age_1 == 24 || age_2 != 18) {
    console.log(" person is eligible not for vote");
}
let books = ["peer e kamil", "dehshat e wehshat", "abbay e hayat", "namal"];
if (books.includes("dehshat e wehshat")) {
    console.log("dehshat e wehsat is in book list");
}
if (!books.includes("musaaf")) {
    console.log("musaaf in not include in an array");
}
