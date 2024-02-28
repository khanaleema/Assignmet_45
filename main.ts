interface item {
    name:string
    price:number
}
// lets create two object
const book: item ={
    name: 'PEER E KAMIL',
    price:1500
}
const cloth: item ={
    name: 'abbaya',
    price:2500
}
console.log(`book name: ${book.name}, price: $${book.price}`);
console.log(`cloth name: ${cloth.name}, price: $${cloth.price}`);