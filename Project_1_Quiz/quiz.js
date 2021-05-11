const correct_answer = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
let score = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user_answer = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    for (let i = 0; i < user_answer.length; i++) {
        if (user_answer[i] === correct_answer[i]) {
            score += 25;
        }
    }
    scrollTo(0, 0);
    //show results on page
    const results = document.querySelector(".result");
    const span = document.querySelector(".result span");

    results.classList.remove("d-none");

    let i = 0;
    const timer = setInterval(() => {
        span.textContent = `${i}%`;

        if (i === score) {
            clearInterval(timer);
        }
        else{
            i++;
        }
    }, 25);
});

//Set Interval -> Runs the block of code every 1000 ms

// let i = 0;
// const timer = setInterval(() => {
//     console.log("hello");
//     i++;
//     if (i === 5) {
//         clearInterval(timer); // to stop the timer
//     }
// }, 1000);
