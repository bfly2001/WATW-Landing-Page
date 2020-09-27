const sidebar = document.getElementById('mySidebar');
const main = document.getElementById('main');

function closeNav() {
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    sidebar.classList.remove('open');
}

function openNav() {
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    sidebar.classList.add('open');
}