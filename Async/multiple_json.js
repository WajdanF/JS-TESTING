const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); //creating a request object

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Error getting resource');
            }
        }); //when there is a state change in the request (4 in total)
        request.open("GET", resource); //GET = Get data, POST = upload data, PUT = update data

        request.send(); //sending the request here and above sets it up
    });

};
//promise example
getTodos('todos.json').then((data)=>{
    console.log('promse resolve:',data);

}).catch((err)=>{
console.log('promise rejected');
})

//CHAINING PROMISES
getTodos("todos.json")
    .then((data) => {
        console.log("promse resolve:", data);
        return getTodos('wajdan.json')
    })
    .then((data)=>{
        console.log("promise resolve:",data);
        return getTodos('wajdan1.json')
    }).then((data)=>{
        console.log("promise resolve:",data);
    })
    .catch((err) => {
        console.log("promise rejected");
    });

//This method is not that good so see below "promises" for proper technique
// getTodos('todos.json',(err, data) => {
//     console.log("callback fired");
//     console.log(err, data);
//     getTodos('wajdan.json',(err,data)=>{
//         console.log(err, data);
//         getTodos('wajdan1.json',(err,data)=>{
//             console.log(err,data);
//         })
//     })
// });

//PROMISE
const getSomething=()=>{
return new Promise((resolve,reject)=>{
    //fetch some data
    resolve('some data');//data if succeed -> set up with an if statment to check if it succeeds or not
    reject('error')//if its rejected/error 
});
}

getSomething().then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
});//the ".then()" fires when the promises resolves something
//first in .then is resolve and second function is reject


getSomething().then((data)=>{
    console.log('data');
}).catch((err)=>{
    console.log(err);
}) //catches an error
