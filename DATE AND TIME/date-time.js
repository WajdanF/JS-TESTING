//dates and time
const now = new Date();
console.log(now);

//year, month, day, times
console.log('getFullYear:',now.getFullYear());
console.log('getMonth:',now.getMonth());
console.log('getDate:',now.getDate());
console.log('getDay:',now.getDay());
console.log('getHours:',now.getHours());
console.log('getMinutes:',now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//timestamp
console.log('timestamp:',now.getTime());//since Jan 1,1970

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//MORE TIMESTMAPS
