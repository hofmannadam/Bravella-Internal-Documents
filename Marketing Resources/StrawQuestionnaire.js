//Q1 JS

const q1_1 = document.getElementById('q1_1');
const q1_2 = document.getElementById('q1_2');
const q1_3 = document.getElementById('q1_3');
const q1_4 = document.getElementById('q1_4');
const q1_5 = document.getElementById('q1_5');

const q1checkbox = document.getElementsByClassName("q1checkbox");
for (let i = 0; i < q1checkbox.length; i++) {
    q1checkbox[i].addEventListener('change', displayQ1Answer);
}

function displayQ1Answer() {
    let q1answer;
if (q1_1.checked) {
    q1answer = 1;
    console.log(`q1answer = ${q1answer}`);
} else if (q1_2.checked) {
    q1answer = 2;
    console.log(`q1answer = ${q1answer}`);
} else if (q1_3.checked) {
    q1answer = 3;
    console.log(`q1answer = ${q1answer}`);
} else if (q1_4.checked) {
    q1answer = 4;
    console.log(`q1answer = ${q1answer}`);
} else if (q1_5.checked){
    q1answer = 5;
    console.log(`q1answer = ${q1answer}`);
}

const q1a1 = document.getElementById('q1a1');
const q1a2 = document.getElementById('q1a2');
const q1a3 = document.getElementById('q1a3');
const q1a4 = document.getElementById('q1a4');
const q1a5 = document.getElementById('q1a5');

        switch (q1answer) {
            case 1:
                q1a1.classList.toggle("visible");
                break;
            case 2:
                q1a2.classList.toggle("visible");
                break;
            case 3:
                q1a3.classList.toggle("visible");
                break;
            case 4:
                q1a4.classList.toggle("visible");
                break;
            case 5:
                q1a5.classList.toggle("visible");
                break;
            default:
                break;
        }
}
