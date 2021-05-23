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
console.log('timestamp:',now.getTime());//since Jan 1,1970 (12am) - ms

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//MORE TIMESTMAPS

//time between 2 dates
const before = new Date('February 1 2019 7:30:59');//creates this date
console.log(now.getTime(),before.getTime());
const diff = now.getTime()-before.getTime();//getting differene between 2 dates
console.log(diff);

const mins =Math.round(diff/1000/60)//minutes
console.log(mins);

const hours = Math.round(mins/60)//hours
console.log(hours);

const days = Math.round(hours/24)//days
console.log(days);

console.log('The blog was written:',days,'days ago');

//converting timestamps into date objects
const timestamp = 1040214012401;
console.log(new Date(timestamp));//converts timestamp into date

//DATE-FNS LIBRARY!
const now_time = new Date();
console.log(dateFns.isToday(now_time));