const URLS = ['1.jpg', '2.jpg', '3.gif', '4.webp', '5.gif', '6.jpg', '7.jpg', '8.jpg', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png']

const photosSection = document.querySelector('.photos-section');
const catGalery = photosSection.querySelector('img');
const backButton = document.querySelector('.stretched-button-back');
const nextButton = document.querySelector('.stretched-button-forward');
const audio = document.querySelector('audio');
const video = document.querySelector('.videoPlayer');
audio.volume = '0.15';
video.volume = '0.3';
let index = 0;
function getPhoto() {
    index++;
    
    if (index > URLS.length - 1) {
        index = 0;
    }
    catGalery.src = `/folder/img/pics/${URLS[index]}`;
    

}

function backPhoto() {
    --index;
    
    if (index <= 0) {
        index = URLS.length - 1;
    }

    catGalery.src = `/folder/img/pics/${URLS[index]}`;
    
}

nextButton.addEventListener('click', getPhoto);
backButton.addEventListener('click', backPhoto);

function checkAudioPlaying() {    
    // Если аудио воспроизводится (не приостановлено и не в конце)
    if (!audio.paused && !audio.ended) {
        video.style.display = 'none';
        video.pause();


    } else {
        video.style.display = '';


    }
}

window.onload = function() {    
    // Проверяем состояние при изменении воспроизведения
    audio.onplay = checkAudioPlaying;
    audio.onpause = checkAudioPlaying;
    audio.onended = checkAudioPlaying;
}
audio.play();   
