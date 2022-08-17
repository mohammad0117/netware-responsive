const dropDownIcon=document.querySelector('.drop-icon');
const menu=document.querySelector('.drop-menu');
const header=document.querySelector('header')
dropDownIcon.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('toggle');
    menu.classList.toggle('d-block')
})
if(document.body.clientWidth > 610 && document.body.clientWidth < 767)
header.style.padding='100px' 
