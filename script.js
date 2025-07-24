  function scrollSlider(direction) {
      const slider = document.getElementById('hotspotSlider');
      const scrollAmount = 200; // Adjust scroll distance
      slider.scrollLeft += direction * scrollAmount;
    }

     cards = document.querySelectorAll('.property-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active')); // remove from all
    card.classList.add('active'); // add to clicked one
  });
});

  const cards = document.querySelectorAll('.property-card');
    const scrollContainer = document.getElementById('cardScroll');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });

    scrollLeftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });


    function scrollLeft() {
  document.getElementById("cardContainer").scrollBy({
    left: -270,
    behavior: "smooth"
  });
}

function scrollRight() {
  document.getElementById("cardContainer").scrollBy({
    left: 270,
    behavior: "smooth"
  });
}


 function scrollCards(direction) {
    const container = document.getElementById('scrollContainer');
    const scrollAmount = 320; // adjust as per card width + gap
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }


  function scrollLeft() {
  document.getElementById('toolsContainer').scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function scrollRight() {
  document.getElementById('toolsContainer').scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slides img');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide and update dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Start auto-sliding
  function startCarousel() {
    slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  }

  // Stop auto-sliding when hovering over the carousel
  const carousel = document.querySelector('.carousel-container');
  carousel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    startCarousel();
  });

  // Add click event for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });

  // Initialize the carousel
  showSlide(0);
  startCarousel();
});