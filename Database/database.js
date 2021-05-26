const ul = document.querySelector("ul");
const addRecipe = (recipe) => {
    let html = `
    <li>
    <div>${recipe.title}</div>
    </li>
    `;
    return html;
};
db.collection("recipes")
    .get()
    .then((snapshot) => {
        //database.collection to get desried collection.get to get documents which returns a promise
        //when we have data
        //console.log(snapshot.docs[0].data()); gets the data for the first document in the collection

        snapshot.docs.forEach((doc) => {
            console.log(doc.data().title);
            ul.innerHTML += addRecipe(doc.data());
        });
    })
    .catch((err) => {
        console.log(err);
    });
