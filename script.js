// JavaScript to add 'active' class to the navigation item when its corresponding section is in view

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    function highlightNavLink() {
      let fromTop = window.scrollY;
  
      sections.forEach((section, index) => {
        if (
          section.offsetTop <= fromTop + 70 &&
          section.offsetTop + section.offsetHeight > fromTop + 70
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          navLinks[index].classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightNavLink);
  });
  


    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            var formData = new FormData(this);

            // Perform asynchronous request (e.g., AJAX)
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/your-submit-url', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Handle successful form submission
                    console.log('Form submitted successfully!');
                } else {
                    // Handle errors
                    console.error('Error submitting form');
                }
            };
            xhr.onerror = function () {
                // Handle errors
                console.error('Error submitting form');
            };
            xhr.send(formData);
        });
    });
