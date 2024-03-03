document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    var title718 = document.querySelector('.title718');
    var information = document.querySelector('.information1');
    var carimg = document.querySelector('.carimg');

    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            information.scrollIntoView({ behavior: 'smooth', block: 'start' });
            carimg.style.left = '0px';
            title718.style.left = '100px';
        });
    });
});