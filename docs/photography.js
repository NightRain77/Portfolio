// Gallery data
const galleryData = [
   {
    id: 1,
    title: "Gooseneck",
    image:
      "images/photography/Gooseneck.JPG",
    description: "July 2026"
  },  
    {
    id: 2,
    title: "Eastern Tiger Swallowtail",
    image:
      "images/photography/1.JPG",
    description: "July 2026"
  },
  {
    id: 3,
    title: "Whitetail Deer",
    image:
      "images/photography/2.JPG",
    description: "May 2026"
  },
    {
    id: 4,
    title: "Penn State Behrend Graduation",
    image:
      "images/photography/DSC_0455.JPG",
    description: "May 2026"
  },
  {
    id: 5,
    title: "Penn State Behrend Graduation",
    image:
      "images/photography/DSC_0576_edited.JPG",
    description: "May 2026"
  },
  {
    id: 6,
    title: "Penn State Behrend Graduation",
    image:
      "images/photography/DSC_0605.JPG",
    description: "May 2026"
  },
  {
    id: 7,
    title: "Penn State Behrend Graduation",
    image:
      "images/photography/DSC_0673.JPG",
    description: "May 2026"
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
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
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