const ul = document.querySelector("ul");
const form = document.querySelector('form')
const button = document.querySelector('button');

const addRecipe = (recipe,id) => {
    let html = `
    <li data-id = ${id}>
    <div>${recipe.title}</div>
    <button class='btn btn-danger btn-sm my-2'>delete</button>
    </li> 
    `;
    ul.innerHTML += html;
};

//Getting data from NoSQL database
// db.collection("recipes")
//     .get()
//     .then((snapshot) => {
//         //database.collection to get desried collection.get to get documents which returns a promise
//         //when we have data
//         //console.log(snapshot.docs[0].data()); gets the data for the first document in the collection
//         snapshot.docs.forEach((doc) => {
//             console.log(doc.id);//gets the unique id of the document
//             console.log(doc.data().title);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const deleteRecipe = (id)=>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(i=>{
        if (i.getAttribute('data-id')===id){
            i.remove()
        }
    })
   };
//REAL TIME LISTENER
const unsub =   db.collection('recipes').onSnapshot(snapshot=>{//everytime there is a change in the database
    snapshot.docChanges().forEach(change=>{
        const doc = change.doc;
          if (change.type === "added") {
              addRecipe(doc.data(),doc.id);
          }

          else if (change.type == 'removed'){
              deleteRecipe(doc.id);
          }

    })
    
})


form.addEventListener('submit',e=>{
    e.preventDefault();
    const now = new Date();

    //ADDING to a database
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(()=>{
        console.log('recpie added');
    }).catch(err=>console.log(err));
    form.reset();
});

//REMOVING from a database

ul.addEventListener('click', e=>{
    if (e.target.tagName === "BUTTON"){
        const id = e.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log('deleted');
        })
    }
})

button.addEventListener('click',()=>{
    unsub();
    console.log("unsubbed to changes");
})