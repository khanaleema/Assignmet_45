function sandwich(...items: string[]) : void {
    console.log("Sandwich Order:")
     for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
     }
}
console.log("enjoy your club sandwich aleema khan")

sandwich('capsicum', 'chicken', 'cheese')
sandwich('mayo sauce', 'beef')
sandwich('garlic chicken', 'tomato')