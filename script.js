var images = document.getElementsByClassName('moving-image');

function moveImage(img) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    img.style.left = x + 'px';
    img.style.top = y + 'px';
}

// Move each image to a random position when the page loads
for (var i = 0; i < images.length; i++) {
    moveImage(images[i]);
}

setInterval(function() {
    for (var i = 0; i < images.length; i++) {
        moveImage(images[i]);
    }
}, 2000);