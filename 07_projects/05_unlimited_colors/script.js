// TASK 1 : is to generate random colors based on hex codes

const randomColor = function () {
    const hex = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

let intervalId;

const startChangingColor = function () {
    // Think About the edge cases
    if(!intervalId) {
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randomColor()
        }, 100);
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

