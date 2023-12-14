const body = document.querySelector('body');

let listOfSquares = [];

addToListOfSquares(16);


const mySquares = document.querySelectorAll('.square');

mySquares.forEach(square => {
    square.addEventListener('mouseover', function (e){
        e.target.style.backgroundColor = "yellow";
    })
})


function addToListOfSquares(number) {
    for (let j = 0; j < number; j++) {

        const container = document.createElement('div');
        container.classList.add('container');
        body.appendChild(container);
        container.style.display = "flex";

        for (let i = 0; i < number; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            setStyleOfSquare(square);
            container.appendChild(square);
        }
    }
}

function setStyleOfSquare(square) {
    square.style.backgroundColor = "red";
    square.style.width = "20px";
    square.style.height = "20px";
}
