let menuIcon = document.querySelectorAll('.menu-icons');

menuIcon.forEach(elem=> {
    elem.addEventListener('click',function(){
        let activeItem = document.querySelector('.menu-icons.active-icon');

        if(activeItem){
            activeItem.classList.remove('active-icon');
        }
        this.classList.add('active-icon');
    })
})

let sortingBtn = document.querySelector('.sorting-btn');
sortingBtn.addEventListener('click', function(){
    let sortingList = sortingBtn.nextElementSibling;
    if(sortingList.style.height == '0px'){
    sortingList.style.height = 200+'px';
    
    }else{
    sortingList.style.height = 0+'px';
    console.log(sortingList.style.height);
    }
})

let perPageBtn = document.querySelector('.per-page-btn');
perPageBtn.addEventListener('click', function(){
    let perPageList = perPageBtn.nextElementSibling;
    if(perPageList.style.height == '0px'){
    perPageList.style.height = 200+'px';
    }else{
        perPageList.style.height = 0+'px';
        console.log(perPageList.style.height);
    }
})


