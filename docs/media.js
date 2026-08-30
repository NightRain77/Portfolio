// Gallery data
const galleryData = [
   {
    id: 1,
    image:
      "images/nightrainposter.png",
  },
   {
    id: 2,
    image:
      "images/businesscard1.png",
  },
   {
    id: 3,
    image:
      "images/businesscard2.png",
  },
   {
    id: 4,
    image:
      "images/liliesinthegarden.png",
  },
    {
    id: 5,
    image:
      "images/HSS_main%20(1).png",
  },  
   {
    id: 6,
    image:
      "images/HSS_j.png",
  },  
   {
    id: 7,
    image:
      "images/cyclone1.png",
  },  
   {
    id: 8,
    image:
      "images/cyclone2.png",
  },  
   {
    id: 9,
    image:
      "images/cyclone3.png",
  },  
   {
    id: 10,
    image:
      "images/Gamenight.png",
  }, 
   {
    id: 11,
    image:
      "images/SpeedDate.png",
  },  
   {
    id: 12,
    image:
      "images/Senior%20Spotlight.png",
  }, 
   {
    id: 13,
    image:
      "images/LinkedInBanner.png",
  }, 
   {
    id: 14,
    image:
      "images/welcome.png",
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