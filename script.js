
document.onclick = function(e) {
    if(e.target.id == 'mySidebar') {
        return false;
    }
    closeNav();
}

function openNav() {
    document.getElementById('mySidebar').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById('mySidebar').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
}
