// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
//     video.pause();
//     trailer.classList.toggle('active');
// }

// function changeBg(bg, title) {
//     const banner = document.querySelector('.banner');
//     const contents = document.querySelectorAll('.content');
//     banner.style.background = `url("./images/movies/${bg}")`;
//     banner.style.backgroundSize = 'cover';
//     banner.style.backgroundPosition = 'center'; // Corrected typo in property name

//     contents.forEach(content => {
//         content.classList.remove('active');
//         if (content.classList.contains(title)) {
//             content.classList.add('active');
//         }
//     });
// }
// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
//     video.pause();
//     trailer.classList.toggle('active');
// }

// function changeContent(bg, title, videoUrl) {
//     const banner = document.querySelector('.banner');
//     const contents = document.querySelectorAll('.content');
//     const video = document.querySelector('.trailer video');

//     banner.style.backgroundImage = `url("./images/movies/${bg}")`;
//     banner.style.backgroundSize = 'cover';
//     banner.style.backgroundPosition = 'center';

//     contents.forEach(content => {
//         content.classList.remove('active');
//         if (content.classList.contains(title)) {
//             content.classList.add('active');
//         }
//     });

    
//     // Change video source
//     video.src = `./assets/${videoUrl}`;
//     video.play();
// }

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('#trailer-video');
    video.pause();
    trailer.classList.toggle('active');
}

function changeContent(bg, title, videoUrl) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.backgroundImage = `url("./images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

    // Change video source
    const video = document.querySelector('#trailer-video');
    video.src = `./assets/${videoUrl}`;
}

function playVideo() {
    const video = document.querySelector('#trailer-video');
    video.play();
}
