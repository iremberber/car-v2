document.addEventListener('DOMContentLoaded', function() {
    var box1 = document.querySelector('.box.box-1');
    var title718 = document.querySelector('.title718');
    var information = document.querySelector('.information1')
    var carimg = document.querySelector('.carimg')
    
    if(box1 && information) {
        box1.addEventListener('click', function() {
            information.scrollIntoView({ behavior: 'smooth', block: 'start' });
            carimg.style.left = ('0px')
            title718.style.left = ('100px')
        });
    }

});

