document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    var information = document.querySelector('.information1');
    var title718 = document.querySelector('.carstitles');
    var img718 = document.querySelector('.carimg');

    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            information.style.display = 'block';
            information.scrollIntoView({ behavior: 'smooth', block: 'start' });
            img718.style.left = '0px';
            title718.style.left = '5%';

            var dataText = box.getAttribute('data-text');

            switch (dataText) {
                case '718':
                    img718.src = 'https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png';
                    title718.textContent = '718';
                    break;
                case '911':
                    img718.src = 'https://newsroom.porsche.com/dam/jcr:299c5b34-b460-49c8-9310-443ecb93ca38/911_neu_2023.png';
                    title718.textContent = '911';
                    break;
                case 'Taycan':
                    img718.src = 'https://newsroom.porsche.com/dam/jcr:8e32629f-330d-4e0a-aa0d-975358993b8a/Taycan%202024.png';
                    title718.textContent = 'Taycan';
                    break;
                case 'Panamera':
                    img718.src = 'https://newsroom.porsche.com/dam/jcr:8ae73722-6633-4283-917a-a53678500620/Panamera%202024.png';
                    title718.textContent = 'Panamera';
                    break;
                case 'Macan':
                    img718.src = 'https://newsroom.porsche.com/dam/jcr:17851357-84af-4c6e-ac95-cb5910b3ee0a/Macan%20Electric%202024.png';
                    title718.textContent = 'Macan';
                    break;
                default:
                    img718.src = ''; 
            }
        });
    });
});