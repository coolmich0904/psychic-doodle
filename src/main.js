const toggleBtn = document.querySelector('.navbar_toggleBtn');

const frame = document.querySelector('navbar_frame');
const menubar = document.querySelector('navbar_menu');
const menu_list = document.querySelector('navbar_icons');
const donateBtn = document.querySelector('navbar_donate');
// const lists = document.querySelectorAll('li');

toggleBtn.addEventListener('click', ()=> {
    
    frame.classList.toggle('active');
    menubar.classList.toggle('active');
    menu_list.classList.toggle('active');
    donateBtn.classList.toggle('active');
    // lists.classList.toggle('active');
    
});
