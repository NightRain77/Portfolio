// Gallery data
const galleryData = [
   {
    id: 1,
    image:
      "images/Sketch1_Week1_AW.jpg",
  },  
    {
    id: 2,
    image:
      "images/IronManpic.jpg",
  },
   {
    id: 3,
    image:
      "images/Sketch2_Week2_AW_Fairy.jpg",
  },  
    {
    id: 4,
    image:
      "images/SugarRush.jpg",
  },
   {
    id: 5,
    image:
      "images/Week11Project.jpg",
  },  
    {
    id: 6,
    image:
      "images/navarresketch.jpg",
  },
   {
    id: 7,
    image:
      "images/BACKGROUND_Space.jpg",
  },  
    {
    id: 8,
    image:
      "images/BACKGROUND_dog.jpg",
  },
   {
    id: 9,
    image:
      "images/flowergirl.jpg",
  },  
    {
    id: 10,
    image:
      "images/BACKGROUND_flowergirl2_AW.jpg",
  },
   {
    id: 11,
    image:
      "images/BLACKBACKGROUND_drawing_AW.jpg",
  },  
    {
    id: 12,
    image:
      "images/BLACKBACKGROUND_purple_AW.jpg",
  },
    {
    id: 13,
    image:
      "images/BLACKBACKGROUND_red_AW.jpg",
  },
   {
    id: 14,
    image:
      "images/BACKGROUND_witch_AW.jpg",
  },  
    {
    id: 15,
    image:
      "images/BACKGROUND_water_AW.jpg",
  },
  {
    id: 16,
    image:
      "images/ball-animation.gif",
  },  
    {
    id: 17,
    image:
      "images/Animation.gif",
  },
];

// DOM elements
const tabs = document.querySelectorAll(".tab");
const galleryContainer = document.getElementById("gallery");

// Function to generate gallery items
function generateGalleryItems(items) {
  galleryContainer.innerHTML = "";

  if (items.length === 0) {
    galleryContainer.innerHTML =
      '<div class="no-results">No images found in this category.</div>';
    return;
  }

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
                    <img src="${item.image}" alt="">
                `;

    galleryContainer.appendChild(galleryItem);
  });
}

// Function to filter gallery by category
function filterGallery(category) {
  if (category === "all") {
    generateGalleryItems(galleryData);
  } else {
    const filteredItems = galleryData.filter(
      (item) => item.category === category
    );
    generateGalleryItems(filteredItems);
  }
}

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Filter gallery
    const category = this.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initialize gallery with all items
generateGalleryItems(galleryData);

// Back to Top button behavior
const backToTop = document.getElementById('backToTop');
function handleScroll() {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}
window.addEventListener('scroll', handleScroll);
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});