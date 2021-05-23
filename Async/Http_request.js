//making a request
const getTodos = (callback)=>{


const request = new XMLHttpRequest();//creating a request object

request.addEventListener('readystatechange',()=>{
    console.log(request, request.readyState);//current state of the request

    if (request.readyState === 4 && request.status ===200){//200=everything went well //we have to check status to make sure the link is correct and everything went perfectly fine
        //console.log(request.responseText);//getting the actual content
        const data = JSON.parse(request.responseText);
        callback(undefined,data);


    }
    else if (request.readyState===4){
        console.log(request.status,'has occured and could not fetch the data');
        callback('could not fetch data',undefined);
    }

} )//when there is a state change in the request (4 in total)
request.open('GET','https://jsonplaceholder.typicode.com/todos/');//GET = Get data, POST = upload data, PUT = update data
//WE CAN ALSO OPEN LOCAL JSON by MAKING A REFERNECE TO THE FOLDER 'todos.json'
request.send();//sending the request here and above sets it up
};

getTodos((err, data)=>{
    console.log("callback fired");
    console.log(err,data);
    if (err){
        console.log('There was an error',err);
    }
    else{
        console.log(data);
        console.log(data.length);
    }
});

//FETCH API
fetch("wajdan.json").then((response)=>{//Rejection is only based on network error

    console.log('resolved: ',response);
    return response.json();//this is a promise
})
.then(data=>{
    console.log('This is the data: ',data);
})
.catch((err)=>{
    console.log("Rejected",err);
});