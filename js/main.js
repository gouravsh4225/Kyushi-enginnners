
document.getElementById('bar_icon').addEventListener('click',(e)=>{
    const navList = document.querySelectorAll('.navigation__list');
    console.log(navList)
    if(navList[0].classList.contains('nav_show')) {
        navList[0].classList.remove('nav_show')
    } else {    
        navList[0].classList.add('nav_show')
    }
})