/* for resposive menu */
var menu = document.getElementById("menu");
var oIcon = document.getElementById("open-icon");
var xIcon = document.getElementById("close-icon");

function openMenu() {
    menu.style.display = "block";
    oIcon.style.display = "none";
    xIcon.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
    xIcon.style.display = "none";
    oIcon.style.display = "block";
}


