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
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  const searchText = searchInput.value.trim(); // Get the typed text and remove leading/trailing whitespace
  
  if (searchText.length > 0) {
    // Redirect user to the search results page with the search query as a parameter
    window.location.href = `/search?q=${encodeURIComponent(searchText)}`;
  } else {
    // Handle empty search query case
    alert('Please enter a search query.');
  }
});
