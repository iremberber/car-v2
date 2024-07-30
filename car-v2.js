document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    var informationDivs = document.querySelectorAll('.information');
    var carTitles = document.querySelectorAll('.carstitles');
    var carImgs = document.querySelectorAll('.carimg');

    function resetAll() {
        informationDivs.forEach(function(info) {
            info.style.opacity = '0';
            info.style.left = '-8000px';
        });
        carTitles.forEach(function(title) {
            title.style.left = '-8000px';
            title.style.opacity = '0';
        });
        carImgs.forEach(function(img) {
            img.style.left = '-8000px';
            img.style.opacity = '0';
        });
    }

    boxes.forEach(function(box, index) {
        box.addEventListener('click', function() {
            resetAll();

            var info = informationDivs[index];
            var title = carTitles[index];
            var img = carImgs[index];

            info.style.display = 'block';
            setTimeout(function() {
                info.style.opacity = '1';
                info.style.left = '0';
                title.style.left = '5%';
                title.style.opacity = '1';
                img.style.left = '5%';
                img.style.opacity = '1';
            }, 10); 
            
        });
    });
});