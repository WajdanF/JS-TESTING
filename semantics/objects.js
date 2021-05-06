//object literals

let user = {
    name:'crystal',
    age:30,
    email:"wajdan@",
    blogs:['name1','name2','name3'],
    login:function(){
        console.log('lol');
    },
    logs: function(){
        this.blogs.forEach(i => {//"this" is for gettin stuff inside the object
            console.log(i);
        });
    },
    logss(){//seperate way of writting methods 
        console.log('lol');
    }
}

console.log(user.name);
console.log(user['name']); //put property in quotes and brackets    

//changing properties
user.name='wajdan';
console.log(user.name);
user['name']='zehnia';
console.log(user['name']);
user.login();

user.logs();

//math objects
console.log(Math.PI);