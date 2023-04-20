

const toggleBtn = document.getElementsByClassName('toggle-btn');
const crossBtn = document.getElementsByClassName('cross-btn');
const dropdonwMenu = document.getElementsByClassName('dropdown-menu');
window.addEventListener('resize', checkMediaQuery);

function checkMediaQuery() {
    if (window.innerWidth > 992) {
        toggleBtn[0].style.display = "none";
        crossBtn[0].classList.add('hidden');
        dropdonwMenu[0].classList.remove('open');
    } else {
        if (crossBtn[0].classList.contains('hidden')) {
            toggleBtn[0].style.display = "block";
        } else {
            toggleBtn[0].style.display = "none";
        }
    }
}

toggleBtn[0].onclick = function () {
    dropdonwMenu[0].classList.add('open');
    crossBtn[0].classList.remove('hidden');
    toggleBtn[0].style.display = "none";
}
crossBtn[0].onclick = function () {
    dropdonwMenu[0].classList.remove('open');
    crossBtn[0].classList.add('hidden');
    toggleBtn[0].style.display = "block";
}