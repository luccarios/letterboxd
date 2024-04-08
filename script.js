const movieImages = document.querySelectorAll('.favorite-movies .movie img, .recent-movies .movie img, .reviews .movie img');

movieImages.forEach(image => {
    image.addEventListener('mouseover', function() {
    
        this.classList.add('border-highlight');
    });

    image.addEventListener('mouseout', function() {
        
        this.classList.remove('border-highlight');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const tooltipText = movie.dataset.tooltip;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipText;
        movie.appendChild(tooltip);

        movie.addEventListener('mouseover', () => {
            tooltip.style.visibility = 'visible';
        });

        movie.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
        });
    });
});