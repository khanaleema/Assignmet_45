let guest_list : string[] =['aain', 'aalam', 'hanzala', 'hoor', 'aleema'];
// for(let i = 0; i<guest_list.length; i++) {
//      console.log( 'Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
let not_present : string = 'hanzala';
let new_guest : string = 'maleeka';
guest_list[1] = new_guest;
for(let i = 0; i<guest_list.length; i++) {   
      console.log( 'Respected sir/Madam'  + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
guest_list.unshift('ilzam', 'gullalai', 'alif');
for(let i = 0; i<guest_list.length; i++) {   
    console.log( 'Respected sir/Madam'  + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more \nThank You\n')
}