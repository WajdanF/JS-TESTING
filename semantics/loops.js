//for loops
for (let i = 0; i < 5; i++) {
  //setting up a forloop -> (starting, condition,step)
  console.log(i);
}

const names = ["wajdan", "phil", "mashrur"];
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

//while loops
let i = 0;
while (i < names.length) {
  //condition
  console.log(names[i], "name");
  i++;
}

//do while -> will run the loop atleast once
i = 5;
do {
  console.log(i);
} while (i < 5);

//break and continue
const score = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < score.length; i++) {
  if (score[i] == 1) {
    continue; //doesnt run anything else
  }
  if (score[i] === 5) {
    console.log("congrats");
    break; //breaks out
  }
}
