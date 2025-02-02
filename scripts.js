
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger Functionality
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Preload images
const images = [
  'images/scottish-food-1.jpg',
  'images/scottish-food-2.jpg',
  'images/scottish-food-3.jpg'
];

function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

preloadImages(images);

// Smooth transitions
const backgroundLayers = document.querySelectorAll('.background-layer');
let currentImageIndex = 0;
let activeLayerIndex = 0; // Track which layer is currently active

function changeBackgroundImage() {
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  
  // Determine inactive layer
  const inactiveLayerIndex = activeLayerIndex === 0 ? 1 : 0;
  
  // Set next image on inactive layer
  backgroundLayers[inactiveLayerIndex].style.backgroundImage = `url(${images[nextImageIndex]})`;
  
  // Toggle active class
  backgroundLayers[activeLayerIndex].classList.remove('active');
  backgroundLayers[inactiveLayerIndex].classList.add('active');
  
  // Update indexes
  activeLayerIndex = inactiveLayerIndex;
  currentImageIndex = nextImageIndex;
}

// Initialize
backgroundLayers[0].style.backgroundImage = `url(${images[0]})`;
backgroundLayers[0].classList.add('active');

// Start transitions
setInterval(changeBackgroundImage, 3000);

// Reservation Modal
const reservationModal = document.getElementById('reservationModal');
const closeModal = document.querySelector('.close-modal');
const reservationForm = document.getElementById('reservationForm');

// Open modal when "Book a Table" button is clicked
document.querySelector('.cta-buttons .btn[href="#contact"]').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  reservationModal.style.display = 'flex';
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
  reservationModal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === reservationModal) {
    reservationModal.style.display = 'none';
  }
});

// Handle form submission
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(reservationForm);
  const reservation = {
    name: formData.get('name'),
    email: formData.get('email'),
    date: formData.get('date'),
    time: formData.get('time'),
    guests: formData.get('guests')
  };

  // Log reservation data (for demonstration purposes)
  console.log('Reservation Details:', reservation);

  // Close the modal
  reservationModal.style.display = 'none';

  // Reset the form
  reservationForm.reset();
});

// Follow-Up Modal
const followUpModal = document.getElementById('followUpModal');
const closeFollowUpModal = followUpModal.querySelector('.close-modal');

// Handle form submission
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(reservationForm);
  const reservation = {
    name: formData.get('name'),
    email: formData.get('email'),
    date: formData.get('date'),
    time: formData.get('time'),
    guests: formData.get('guests')
  };

  // Log reservation data (for demonstration purposes)
  console.log('Reservation Details:', reservation);

  // Close the reservation modal
  reservationModal.style.display = 'none';

  // Show the follow-up modal
  followUpModal.style.display = 'flex';

  // Reset the form
  reservationForm.reset();
});

// Close follow-up modal when close button is clicked
closeFollowUpModal.addEventListener('click', () => {
  followUpModal.style.display = 'none';
});

// Close follow-up modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === followUpModal) {
    followUpModal.style.display = 'none';
  }
});