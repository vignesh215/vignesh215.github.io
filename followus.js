document.querySelectorAll('.icon-card').forEach(card => {
    card.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.2)';
    });
    card.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  