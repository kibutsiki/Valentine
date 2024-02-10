document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const appear = document.querySelector('.appear');

    heart.addEventListener('click', function() {
        appear.style.display = 'none'; // Hide the appear div
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const letter = document.querySelector('.letter');

    heart.addEventListener('click', function() {
        letter.classList.toggle('roll-out'); // Toggle the 'roll-out' class to trigger the animation
    });
});