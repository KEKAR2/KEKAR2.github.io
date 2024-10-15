const URLS = ['1.jpg', '2.jpg', '3.gif', '4.webp', '5.gif', '6.jpg', '7.jpg', '8.jpg',
     '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png']

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
    indexCheck(index);
 


}

function backPhoto() {
    --index;

    if (index <= 0) {
        index = URLS.length - 1;
    }

    catGalery.src = `/folder/img/pics/${URLS[index]}`;
    indexCheck(index);
    

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


function rainbowText() {
    // Цвета для каждой буквы
    const colors = ["#ff6b6b", "#ffa94d", "#ffe066", "#8ce99a", "#74c0fc", "#b197fc", "#f783ac"];

    // Получаем все элементы с классом .rainbow-text
    const textElements = document.querySelectorAll(".rainbow-text");

    textElements.forEach((element) => {
        const html = element.innerHTML;

        // Очищаем исходный текст
        element.innerHTML = "";

        // Создаем временный контейнер для обработки HTML-контента
        let tempContainer = document.createElement("div");
        tempContainer.innerHTML = html;

        // Проходим по узлам (включая теги)
        Array.from(tempContainer.childNodes).forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                // Обрабатываем только текстовые узлы
                const text = node.textContent;

                // Проходим по каждой букве и создаем <span> с цветом
                text.split("").forEach((letter, index) => {
                    const span = document.createElement("span");

                    // Если это пробел, добавляем неразрывный пробел
                    if (letter === " ") {
                        span.innerHTML = "&nbsp;";
                    } else {
                        span.innerText = letter;
                        span.style.color = colors[index % colors.length];  // Используем цвета по кругу
                    }

                    // Добавляем span в исходный элемент
                    element.appendChild(span);
                });
            } else {
                // Если это не текстовый узел (например, <br> или другие теги), клонируем и вставляем его
                element.appendChild(node.cloneNode(true));
            }
        });
    });
}


rainbowText();

function indexCheck(index) {

    const photosSection = document.querySelector('.photos-section ').querySelector('img');
    const forAddingText = document.querySelector('.for-adding-text');

    const p = document.createElement('p');
    document.querySelector('.for-adding-text').append(p);

    const createdTag = document.querySelector('p');

    createdTag.classList.add('added-text');
    createdTag.classList.add('rainbow-text');


    switch (index) {
        
        case 10:

            createdTag.innerHTML = "";
             createdTag.innerHTML ='День, когда мы залезли в дискорд';
            break;
        case 11:

            createdTag.innerHTML = "";
             createdTag.innerHTML ='День, когда мы познакомились';
            break;

        case 12:
            createdTag.innerHTML = "";
            createdTag.innerHTML ='Я как был пидорам так и остался';
            break;

        case 13:
            createdTag.innerHTML = "";
            photosSection.style.width = '550px';
            createdTag.innerHTML ='По моему ты что-то знал ещё в 2018';
            break;

        case 14:
            createdTag.innerHTML = "";
            photosSection.style.width = '1000px';
            break;

        case 15:
            forAddingText.innerHTML = "";
            photosSection.style.width = '550px';
            break;

        case 16:
            createdTag.innerHTML = "";
            createdTag.innerHTML ='Классика';
            
            break;
            
        default:
            forAddingText.innerHTML = "";
            photosSection.style.width = '550px';
            break;
    }

    rainbowText()
        
}



document.addEventListener('DOMContentLoaded', function() {
    const figure = document.querySelector('#audioFigure');
    const audio = document.querySelector('audio');

    // Когда аудио начинает проигрываться
    audio.addEventListener('play', function() {
        // Убираем fullscreen и возвращаем к исходному виду
        figure.classList.remove('fullscreen-figure');
        figure.classList.add('minimized-figure');
    });
});