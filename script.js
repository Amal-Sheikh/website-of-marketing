console.log("hello")
// yeh ari or choti images wala code hai
// Get references to the main product image and all small thumbnail images
var MainImg = document.getElementById("MainImg");
var smallImgs = document.querySelectorAll(".small-img");

// Loop through each small thumbnail image and attach a click event listener
smallImgs.forEach(function(smallImg) {
    smallImg.addEventListener("click", function() {
        MainImg.src = smallImg.src; // Update the main image source to the clicked small image source
    });
});

// yeh shop.html wali image ko maiimage pr display krwadaywala code hai
function setImage(imageSrc) {
    // Set main image
    document.getElementById('MainImg').src = imageSrc;
    // Store image source in session storage
    sessionStorage.setItem('selectedImage', imageSrc);
  }
// yeh vhi shop.html wali image ko maiimage pr display krwadaywala code hai

  document.addEventListener('DOMContentLoaded', function() {
    // Retrieve image source from session storage
    var selectedImage = sessionStorage.getItem('selectedImage');
    if (selectedImage) {
      // Set main image
      document.getElementById('MainImg').src = selectedImage;
    }
  });
  // yeh vhi shop.html wali image ko maiimage pr display krwaday wala code hai
  function setMainImage(imageSrc) {
    // Set main image
    document.getElementById('MainImg').src = imageSrc;
    // Update session storage with selected image
    sessionStorage.setItem('selectedImage', imageSrc);
  }

    // yeh cart.html ko shop.html ki maiimg ppr display krwaday wala code hai

    // Function to parse URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Update MainImg based on selectedImage parameter
document.addEventListener('DOMContentLoaded', function() {
    var selectedImage = getParameterByName('selectedImage');
    if (selectedImage) {
        document.getElementById('MainImg').src = selectedImage;
    }
});

// Additional functions specific to shop.html if needed
