let paragraph = document.getElementById('paragraph');
 
console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');

console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection

let divs = document.getElementsByTagName('div');

console.log(divs);

let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); // <== paragraph

paragraph.setAttribute('id', 'info-paragraph');

/* Practice: Set the href attribute of the a element identified as google-link to
http://www.google.com. */
let googleLink = document.getElementById('google-link');
googleLink.setAttribute('href', 'http://www.google.com');

/* Practice: Complete your a element with a target attribute. Set the value to "_blank"
to open the new page in a new tab of your browser. */
googleLink.setAttribute('target', '_blank');

paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');

// Practice: Remove the class attribute from the paragraph element.
paragraph.removeAttribute('class');

let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>

h2Tag.innerHTML = 'Elephant';

// Let’s add an element into a parent element:
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

// Create a text node
let text = document.createTextNode('This text is created dynamically  ');
 
parent.appendChild(text);

/* Practice: Create two nodes in your JavaScript file:
* A p element.
* A text node. It will have “Hi there! I am using JavaScript” as value.
* Then, add the text into the p tag and finally add it to the DOM */
let pTag = document.createElement('p');
let pTagText = document.createTextNode('Hi there! I am using JavaScript');
pTag.appendChild(pTagText);
parent.appendChild(pTag);

// Let’s add “h1” tag before our “h2” tag.
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

// Practice: Insert a input node before the button with the id=“add-item-button”.
let inputTag = document.createElement("INPUT");
inputTag.setAttribute("type", "text");
let buttonTag = document.getElementById('add-item-button');
parent.insertBefore(inputTag, buttonTag);

// Remove paragraph
parent.removeChild(paragraph);

// Practice: Remove the previous h2 node you inserted before.
parent.removeChild(h2Tag);

// Let’s remove all the content of our div with id=“content”:
let contentDiv = document.getElementById('content');
contentDiv.innerHTML = ''; // clears the whole element

// Practice: Add the following code to your html and afterward remove it from the DOM.
let list = document.querySelector('.super-list');
list.innerHTML = '';
parent.removeChild(list);

// Events:
buttonTag.onclick = function() {
    console.log('adding an element to the list');
  };

/* Practice: Create a click event for the button#add-item-button. This event will add a li
element with "Item number " + item number. Your DOM suppose to look something like this: */
let buttonList = document.createElement('ul');
buttonList.setAttribute('id', 'items-list');
parent.insertBefore(buttonList, buttonTag);

let createList = () => {
    let liTag = document.createElement('li');

    for (let i = 1; i < buttonList.children.length + 1; i += 1) {
        liTag.innerText = 'Item number ' + i;
    };

    return buttonList.appendChild(liTag);
};

buttonTag.onclick = createList;

/* Getting a current value from the input field
<form action="" method="post">
<label for="username">Name</label>
<input name="username" type="text" />
<button id="send-btn">Send</button> */
let inputLabel = document.createElement('label');
inputLabel.setAttribute('for', 'username');
inputLabel.innerText = 'Name';

let inputSpace = document.createElement('input');
inputSpace.setAttribute('name', 'username');
inputSpace.setAttribute('type', 'text');

let sendButton = document.createElement('button');
sendButton.setAttribute('id', 'send-btn');
sendButton.innerText = 'Send';

parent.appendChild(inputLabel);
parent.appendChild(inputSpace);
parent.appendChild(sendButton);

// Let’s create a click event for the button:
sendButton.onclick = () => {
    console.log(inputSpace.value);
}
/* For now, use the inputs without no form tag. Otherwise, the page will be refreshed and
all your operations will be lost. We will learn how to deal with this a bit later. */

/* Practice: Let’s add the following code to our index.html, after everything that’s already
in there:
<ul class="list">
  <li>Ana</li>
  <li>Alex</li>
  <li>Mat</li>
</ul> */
let nameList = document.createElement('ul');
nameList.setAttribute('class', 'list');

let name1 = document.createElement('li');
name1.innerText = 'Ana';
let name2 = document.createElement('li');
name2.innerText = 'Alex';
let name3 = document.createElement('li');
name3.innerText = 'Mat'

parent.appendChild(nameList);
nameList.appendChild(name1);
nameList.appendChild(name2);
nameList.appendChild(name3);

/* we will target the ul tag using its class attribute and then we will access to its
children elements. Afterwards, we will attacg the onclick function to each li element and
print in our console the text of the element we just clicked on
let nameListChildren = document.querySelectorAll('.list li');
let nameListChildrenInArray = [...nameListChildren];

nameListChildrenInArray.forEach(li => {
    li.onclick = () => {console.log(li.innerHTML)};
});
*/
/* Practice: Okay, now please, moderate the code above and, instead of printing the text of
the clicked element, remove that element from the DOM. */
let nameListChildren = document.querySelectorAll('.list li');
let nameListChildrenInArray = [...nameListChildren];

nameListChildrenInArray.forEach(li => {
    li.onclick = () => {nameList.removeChild(li)};
});