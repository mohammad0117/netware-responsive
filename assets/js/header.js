const dropDownIcon=document.querySelector('.drop-icon');
dropDownIcon.addEventListener('click',(e)=>{
    e.currentTarget.children[0].style.transform='rotate(45deg)';
    e.currentTarget.children[0].style.top='-1px';
    e.currentTarget.children[1].style.visibility='hidden'
    e.currentTarget.children[2].style.transform='rotate(-45deg)';
    e.currentTarget.children[2].style.top='-1px';
})
