let guest_list : string[] =['aain', 'aalam', 'hanzala', 'hoor', 'aleema'];
for(let i = 0; i<guest_list.length; i++) {
     console.log( 'Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
let not_present : string = 'hanzala';
let new_guest : string = 'maleeka';
for(let i = 0; i<guest_list.length; i++) {   
      console.log( 'Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
console.log(`Mr. ${not_present } will not coming for tomorrow dinner.`)