var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';

let add= document.querySelector('.title')
add.style.fontWeight='bold';
add.style.color='green'
let item=document.getElementsByClassName('list-group-item')
item[2].style.backgroundColor='green';
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight='bold'
}
let li=document.getElementsByTagName('li');
li[4].style.fontWeight='bold'

let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green'
let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
//************************************* */
let itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4'
itemlist.children[1].style.backgroundColor='grey'

console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.color="red"

//last child

// console.log(itemlist.lastChild);

// console.log(itemlist.lastElementChild);

itemlist.lastElementChild.className='list-group-item'

// Siblings

let h2=document.querySelectorAll('.container .title');
// console.log( h2.nextElementSibling)
h2[0].nextElementSibling.style.backgroundColor='red'

//previous sibling

let listgroup=document.querySelector('.container #items')
console.log(listgroup.previousElementSibling);
listgroup.previousElementSibling.style.color="aqua"



let newdiv=document.createElement('div')
newdiv.className='new'
newdiv.setAttribute('title','hello word')
let text=document.createTextNode("hello this is new div")
newdiv.appendChild(text)
console.log(newdiv);


let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')
container.insertBefore(newdiv,h1)


h2[1].insertAdjacentElement("afterend",newdiv)
