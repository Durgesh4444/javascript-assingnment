// //12. Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm

//- YYYY-MM-DD HH:mm

const date = new Date();

const first = date.getFullYear()+ "-" + (date.getMonth() + 1)+ "-" + date.getDate()+ " " + date.getHours() + ":" + date.getMinutes() ;
const second =date.getDate() + "-" + (date.getMonth() + 1) + "-"  + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() ;
const third =date.getDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear() + " " + date.getHours() + ":" +date.getMinutes();
console.log(first);
console.log(second);
console.log(third);



