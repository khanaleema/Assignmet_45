var guest_list = ['aain', 'aalam', 'hanzala', 'hoor', 'aleema'];
// for(let i = 0; i<guest_list.length; i++) {
//      console.log( 'Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
// }
var not_present = 'hanzala';
var new_guest = 'maleeka';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift('ilzam', 'gullalai', 'alif');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more \nThank You\n');
}
