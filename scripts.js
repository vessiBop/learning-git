let box1Element = document.getElementById('box1');
let box2Element = document.getElementById('box2');

box1Element.addEventListener('mouseover', () => {
    box2Element.style.backgroundColor = 'magenta';
    box1Element.style.backgroundColor = 'black';
});

box2Element.addEventListener('mouseover', () => {
    box1Element.style.backgroundColor = 'magenta';
    box2Element.style.backgroundColor = 'black';
});



/* function changeToRed(event) {
    event.target.style.backgroundColor = 'red';
} */

/* box1Element.addEventListener('mouseover', changeToRed);
box2Element.addEventListener('mouseover', changeToRed); */

/* let inputElement = document.getElementById('input1');
inputElement.addEventListener('input', (event) => {
    console.log(event.target.value);
}); */

let letterCountInputElement = document.getElementById('input1');
letterCountInputElement.addEventListener('input', (event) => {
    let message = letterCountInputElement.event.target.value;
    let wordLength = message.length;
    console.log(message.length);
    updateLetterCount(wordLength);   
})

function updateLetterCount(wordLength) {
    const letterCountElement = document.querySelector('p');
    letterCountElement.innerText = `Character Count: ${message.length}`;
}

 let firstValue = document.getElementById('num1');
let secondValue = document.getElementById('num2');
let sum = document.getElementById('btn2');

sum.addEventListener('click', calculateSum);

function calculateSum() {
    let firstValue = document.getElementById('inputNumberOne').value;
    let secondValue = document.getElementById('inputNumberTwo').value;
    const num1 = parseInt(firstValue);
    const num2 = parseInt(secondValue);
    const result = num1 + num2;
    updateResult(result);


function updateResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Result: ' + result;

   }

}




/* const sumButton = document.getElementById('btn2');
sumButton.addEventListener("click", () => {
    let num1, num2, sum, result;
    num1 = parseInt(document.getElementById("inputNumberOne").value);
    num2 = parseInt(document.getElementById("inputNumberTwo").value);
    result = document.getElementById("result");
    sum = num1 + num2;
    result.innerHTML = `Result: ${num1} + ${num2} = ${sum}`; 
}) */

