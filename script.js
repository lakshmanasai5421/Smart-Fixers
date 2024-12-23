document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById("confirmation").style.display = "block";
});


  document.getElementById("driverbooking-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
      document.getElementById("confirmation").style.display = "block";
  });

/* for services */
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});




