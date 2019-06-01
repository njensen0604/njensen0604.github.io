let normal = document.getElementById("nav-menu");
let reverse = document.getElementById("nav-menu-left");

let icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
    let navRight = document.getElementById("nav");
    let navLeft = document.getElementById("nav-left");
    let nav = navRight !== null ? navRight : navLeft;

    let button = document.getElementById("menu");
    let site = document.getElementById("wrap");

    if (nav.className == "menu-open" || nav.className == "menu-open-left") {
        nav.className = "";
        button.className = "";
        site.className = "";
    } else if (reverse !== null) {
        nav.className += "menu-open-left";
        button.className += "btn-close";
        site.className += "fixed";
    } else {
        nav.className += "menu-open";
        button.className += "btn-close";
        site.className += "fixed";
    }
}

// Ensures backward compatibility with IE old versions
function menuClick() {
    if (document.addEventListener && icon !== null) {
        icon.addEventListener('click', toggle);
    } else if (document.attachEvent && icon !== null) {
        icon.attachEvent('onclick', toggle);
    } else {
        return;
    }
}

menuClick();