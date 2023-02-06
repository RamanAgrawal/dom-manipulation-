var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
console.log("madarchod");
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
