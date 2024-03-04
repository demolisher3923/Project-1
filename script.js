//navigation bar

window.addEventListener("scroll",function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

//menuToggle

function toggleMenu(){
    const menubar =document.querySelector('.menuToggle');
    const nav = document.querySelector('.nav');
    menubar.classList.toggle('active');
    nav.classList.toggle('active');
}