var tablink = window.location.href;
var [aa, ab, domain] = tablink.split('/');
var [a, room] = tablink.split('=/');
window.open(`http://${domain}/${room}?proto=true` ,"_self")