//async and await

//async always returns a promise
const getTodos = async () => {
    const response = await fetch("wajdan.json");
    const data = await response.json();
    return data;
};

const test = getTodos()
    .then((data) => {
        console.log('Resolved Data:',data);
    })
    .catch((err) => {
        console.log("An error",err.message);//gives error message
    }); //test is now a promsie
