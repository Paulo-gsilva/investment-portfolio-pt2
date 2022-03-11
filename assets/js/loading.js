const load = document.querySelector('.preload-box');
const content = document.querySelector('.all-content');

function loading(){
    window.addEventListener('load', () => {
        load.style.display = "none";
        content.style.display = "block";
    });
}

loading();