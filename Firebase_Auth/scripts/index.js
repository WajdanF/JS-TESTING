const guideList = document.querySelector(".guides");
const logout_list = document.querySelectorAll('.logged-out');
const login_list = document.querySelectorAll('.logged-in');

const setupUI= user=>{
    if (user){//if were logged in we show certain links
        login_list.forEach((item) => (item.style.display = "block"));
        logout_list.forEach((item) => (item.style.display = "none"));
    }
    else{//we are logged out and show certain links
        login_list.forEach((item) => (item.style.display = "none"));
        logout_list.forEach((item) => (item.style.display = "block"));
    }
}
const setupGuides = (data) => {
    let html = ``;
    data.forEach((doc) => {
        const guide = doc.data();
        const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${guide.title}</div>
            <div class="collapsible-body white">${guide.content}</div>
        </li>
        `;
        html += li;
    });
    guideList.innerHTML = html;
    
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);

    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);
});
