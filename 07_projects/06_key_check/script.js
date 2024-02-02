window.addEventListener('keydown', function (e) {
    document.querySelector('#keyPressed').innerHTML = `You Pressed ${e.key === ' ' ? 'Space' : e.key}`;
})