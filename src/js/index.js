const lists = document.querySelectorAll('.list-stack-1')

for (let list of lists) {

    list.addEventListener('click',(e)=>{
        e.preventDefault()
        
        const parent = list.parentElement.parentElement;
        parent.classList.toggle('list-selected')

        const icon = list.querySelector('.icon-list').children[0];
        icon.classList.toggle('icon-rotate')
    
        const sublist = list.nextElementSibling.matches('.sub-list') ? list.nextElementSibling : undefined;
        sublist.classList.toggle('list-expand')
    })

}

const sublists = document.querySelectorAll('.list-stack-2')

for(let sublist of sublists){
    sublist.addEventListener('click',(e)=>{
        e.preventDefault()

        // const parent = sublist.parentElement.parentElement;
        // parent.classList.toggle('list-selected')

        const icon = sublist.querySelector('.icon-list').children[0];
        icon.classList.toggle('icon-rotate')

        const subSubList = sublist.nextElementSibling.matches('.sub-sub-list') ? sublist.nextElementSibling : undefined;
        subSubList.classList.toggle('list-expand')
    })
}