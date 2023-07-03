function toggleModalTrue() {
    document.body.classList.toggle("modal--open");
    $(".header-container").fadeOut(300);
    $("#home_section").fadeOut(300);
}

function toggleModalFalse() {
    document.body.classList.toggle("modal--open");
    $(".header-container").fadeIn(1000);
    $("#home_section").fadeIn(1000);
}