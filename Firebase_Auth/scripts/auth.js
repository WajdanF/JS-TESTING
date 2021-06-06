//LISTENING FOR AUTH status CHANGES -> Actively checking

auth.onAuthStateChanged((user) => {
    //user is null if person is signed out otherwise its the user object
    console.log(user);
    if (user) {
        //if user is logged in
        //Getting data
        db.collection("guides").get()
            .then((snapshot) => {
                setupGuides(snapshot.docs); 
                setupUI(user)
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        //if user is logged out
        setupGuides([]);    

        setupUI();
    }
});

//sign up

const signup = document.querySelector("#signup-form");

//SIGING UP
signup.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signup["signup-email"].value;
    const password = signup["signup-password"].value;

    //singing up the user using firebase
    auth.createUserWithEmailAndPassword(email, password) //this functino returns the credentials of a user
        .then((cred) => {
            console.log(cred);

            const modal = document.querySelector("#modal-signup");
            M.Modal.getInstance(modal).close();
            signup.reset();
        })
        .catch((err) => {
            console.log(err);
        });
});

//logout

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();

    //Signout method
    auth.signOut().then(() => {
        //signout is a async function

        console.log("The user has signed out");
    });
});

//LOGING IN A PERSON
const login = document.querySelector("#login-form");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = login["login-email"].value;
    const password = login["login-password"].value;

    //LOGING IN
    auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
            console.log(cred, cred.user, cred.uid);
        })
        .catch((err) => {
            console.log(err);
        });

    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    login.reset();
});
