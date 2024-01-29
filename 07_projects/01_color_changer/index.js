// Brute Force Approach

// const canvas = document.querySelector('.canvas');

// const grey = document.querySelector('#grey');
// const white = document.querySelector('#white');
// const blue = document.querySelector('#blue');
// const yellow = document.querySelector('#yellow');

// function changeColor(element, color) {
//     element.addEventListener('click', () => {
//         canvas.style.backgroundColor = color;
//     })
// }

// changeColor(grey, 'grey');
// changeColor(white, 'white');
// changeColor(blue, 'blue');
// changeColor(yellow, 'yellow');


// A better Way

const body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {

        switch (e.target.id) {
            case 'grey': body.style.backgroundColor = e.target.id;
                break;
            case 'white': body.style.backgroundColor = e.target.id;
                break;
            case 'blue': body.style.backgroundColor = e.target.id;
                break;
            case 'yellow': body.style.backgroundColor = e.target.id;
                break;
            default: console.log('Oops!! some error occured.');
                break;
        }
    })
})