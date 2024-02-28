let guest_list : string[] =['aain', 'aalam', 'hanzala', 'hoor', 'aleema'];
// for(let i = 0; i<guest_list.length; i++) {
//      console.log( 'Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
let not_present : string = 'hanzala';
let new_guest : string = 'maleeka';
guest_list[1] = new_guest;
// for(let i = 0; i<guest_list.length; i++) {   
//       console.log( 'Respected sir/Madam'  + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
guest_list.unshift('ilzam', 'gullalai', 'alif');
// for(let i = 0; i<guest_list.length; i++) {   
//     console.log( 'Respected sir/Madam'  + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more \nThank You\n')
// }
console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for(let i = 0; i<guest_list.length; i++) {   
    console.log( 'Respected sir/Madam'  + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank You\n')
}
guest_list.splice(0,2)
console.log(guest_list)