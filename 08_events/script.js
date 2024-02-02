// Code in javascript runs syncronously/sequentially


// Ways to attach Events

// 1. inline : within the element itself
// -> It is not good way to attach events as it can cause issues when our app scales



// 2. This way is good but is does not provide us much options/information to work with
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }





// 3. addEventListener('event', callbackFxn(e){}, false);

// document.getElementById('owl').addEventListener('click', (e) => {
//     console.log(e);
// })
// Topics to study 
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// GOOD TO KNOW THEY EXIST
// attachEvent()
// jQuery - on

// Event Bubbling : andr se bahar
// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log("owl clicked");
// }, false)


// Event Capturing : top se bottom
// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("clicked inside the ul");
// }, true)

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log("owl clicked");
// }, true)




// Scenario : We don't want the propagation to occur
// We can use stopPropagation() method
// document.getElementById('images').addEventListener('click', function (e) {
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false)


// Scenario : We want to change the default behaviour of any element
// We can use stopPropagation() method
// document.getElementById('google').addEventListener('click', function (e) {
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)




// ACTIVITY TIME 
// GOAL : remove images on clicking them
document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})

//removeIt.parentNode.removeChild(removeIt)





// Event Propagation

// There are two types of event propagation
// 1) Event Bubbling : This is default and used mostly. From bottom to top
// 2) Event Capturing : From top to bottom