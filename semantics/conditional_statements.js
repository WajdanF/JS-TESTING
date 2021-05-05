//if statements
const age = 20;
if (age != 20) {
  console.log(age);
} else if (age === 20) {
  console.log(age + 1);
} else {
  console.log("lol");
}

const names = ["a", "b", "c"];

if (names.length < 3) {
  console.log("lol");
}

//logical operators -> OR = || , AND = &&

if (age !== 21 || age === 20) {
  console.log("lol");
}

//switch statement -> use instead of else if statements with one variables
const grade = "D";
switch (grade) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got an B");
    break;
  case "C":
    console.log("you got an C");
    break;
  case "D":
    console.log("you got an D");
    break;
  default:
    console.log("not a grade");
}
