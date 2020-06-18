const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', showAnswer)
}

function showAnswer(eventObj) {
    const image = eventObj.target;

    let name = image.id;
    name = 'img/' + name + '.jpg';
    image.src = name;

    setTimeout(reblur, 2000, image);
}

function reblur(image) {
    let name = image.id;
    name = 'img/' + name + 'blur.jpg';
    image.src = name;
}






