console.log('JS connected'); /* <== just a quick check up to make sure js doc is connected
properly */

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById" 
let theCatDiv = document.getElementById('cat');

console.log(theCatDiv); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML" 
theCatDiv.innerHTML = "I'm a cat";

// set the HTML content of "otherElement" to "I'm a cat"
// otherElement.innerHTML = theCatDiv.innerHTML;

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';
/* Note that the property names may differ from CSS; (i.e. backgroundColor instead of
background-color). */

let mice = document.getElementsByClassName('mouse');
console.log(mice); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]

let miceArray = [...mice];
 
console.log(miceArray); // <== [div.mouse, div.mouse, div.mouse]

let divs = document.getElementsByTagName('div');
console.log(divs); // <== [div#cat, div.mouse, div.mouse, div.mouse]

let firstMouse = document.querySelector('.mouse');
let firstDiv = document.querySelector('div');

console.log(firstMouse); // <== <div class="mouse"></div>
console.log(firstDiv);
// <== <div id="cat" style="background-color: red; border: 2px solid green; font-size: 50px; margin-top: 30px; padding-bottom: 30px;">I'm a cat</div>

let allDivs = document.querySelectorAll('.mouse, #cat');

console.log(allDivs); // <== NodeList(4) [div#cat, div.mouse, div.mouse, div.mouse]

// let firstMouse = document.querySelector('.mouse');
console.log(firstMouse.className); // <== mouse

// let theCatDiv = document.getElementById('cat');
console.log(theCatDiv.id);