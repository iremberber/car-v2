document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    var information1 = document.querySelector('.information1');
    var information2 = document.querySelector('.information2');
    var information3 = document.querySelector('.information3');
    var information4 = document.querySelector('.information4');
    var information5 = document.querySelector('.information5');
    var cartitle1 = document.querySelector('.carstitle1');
    var cartitle2 = document.querySelector('.carstitle2');
    var cartitle3 = document.querySelector('.carstitle3');
    var cartitle4 = document.querySelector('.carstitle4');
    var cartitle5 = document.querySelector('.carstitle5');
    var carimg1 = document.querySelector('.carimg1');
    var carimg2 = document.querySelector('.carimg2');
    var carimg3 = document.querySelector('.carimg3');
    var carimg4 = document.querySelector('.carimg4');
    var carimg5 = document.querySelector('.carimg5');

    boxes.forEach(function(box, index) {
        box.addEventListener('click', function() {
            switch (index) {
                case 0:
                    information1.style.display = 'block';
                    information1.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    carimg1.style.left = '0px';
                    cartitle1.style.left = '5%';
                    break;
                case 1:
                    information2.style.display = 'block';
                    information2.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    carimg2.style.left = '0px';
                    cartitle2.style.left = '5%';
                    break;
                case 2:
                    information3.style.display = 'block';
                    information3.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    carimg3.style.left = '0px';
                    cartitle3.style.left = '5%';
                    break;
                case 3:
                    information4.style.display = 'block';
                    information4.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    carimg4.style.left = '0px';
                    cartitle4.style.left = '5%';
                    break;
                case 4:
                    information5.style.display = 'block';
                    information5.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    carimg5.style.left = '0px';
                    cartitle5.style.left = '5%';
                    break;
            }
        });
    });
});