const logo = document.getElementById('logo');
const ancorasArray = document.querySelectorAll('.ancoras');
const headerButton = document.getElementById('header-button');

function fillHeader() {
    logo.src = header.logo;
    headerButton.textContent = header.button;
    for (let i = 0; i < ancorasArray.length; i++) {
        ancorasArray[i].textContent = header.a[i];
    }
}