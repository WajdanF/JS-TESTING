console.log("dom file");

const body = document.querySelector("body");

export const styleBody = () => {
    body.style.background = "grey";
};

export const addTitle = (text) => {
    const title = document.createElement("h1");
    title.textContent = text;
    body.appendChild(title);
};

styleBody();
addTitle("Hello world from dom file");
