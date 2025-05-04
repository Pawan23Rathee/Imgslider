const images = [
    "images/img1.jpg",
    "images/img2.webp",
    "images/img3.jpg",
    
  ];
  
  let current = 0;
  const imageElement = document.getElementById("slider-image");
  
  function showImage(index) {
    imageElement.src = images[index];
  }
  
  document.querySelector(".prev").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });
  
  document.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
  
  // Auto slideshow
  setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
  }, 3000);
  
  // Initial load
  showImage(current);
  