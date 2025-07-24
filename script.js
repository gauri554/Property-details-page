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
