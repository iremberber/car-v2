document.addEventListener('DOMContentLoaded', function() {
    var box1 = document.querySelector('.box.box-1');
    var container = document.querySelector('.container');
    
    if(box1 && container) {
        box1.addEventListener('click', function() {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});