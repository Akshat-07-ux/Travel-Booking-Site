document.addEventListener('DOMContentLoaded', function() {
  // Check if the page is loaded
  const openFormButton = document.querySelector('.open-form');
  const formContainer = document.querySelector('.form-container');
  const form = document.getElementById('user-form');

  // Add event listener to the Open Form button
  openFormButton.addEventListener('click', function() {
      // Toggle the visibility of the form container
      formContainer.classList.toggle('hidden');

      // Clear the input fields when the form is opened
      if (!formContainer.classList.contains('hidden')) {
          clearFormInputs();
      }
  });

  // Function to clear form inputs
  function clearFormInputs() {
      form.reset(); // This will clear all input fields in the form
  }

  // Add event listener to the form submission
  form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Your code to send data to Firebase goes here
      sendDataToFirebase(getFormData());
      
      // Clear the input fields after submission
      clearFormInputs();
  });

  // Function to get form data as an object
  function getFormData() {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
          data[key] = value;
      });
      return data;
  }
});





    
document.addEventListener('DOMContentLoaded', function() {
  const bestPlaceLink = document.querySelector('.menu-item a[href="#bestPlace"]');
  const contactUsLink = document.querySelector('.menu-item a[href="#contact"]');
  const DestinationLink = document.querySelector('.menu-item a[href="#destination"]');
  const headerHeight = document.querySelector('.header').offsetHeight; // Get the height of your header

  // Add event listener to scroll to the "Best Place" section
  bestPlaceLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the container element for the "Best Place" section
      const bestPlaceSection = document.querySelector('#bestPlace');

      // Scroll to the "Best Place" section with an offset to accommodate the header height
      window.scrollTo({
          top: bestPlaceSection.offsetTop - headerHeight,
          behavior: 'smooth'
      });
  });

  // Add event listener to scroll to the "Contact Us" section
  contactUsLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the container element for the "Contact Us" section
      const contactUsSection = document.querySelector('#contact');

      // Scroll to the "Contact Us" section with an offset to accommodate the header height
      window.scrollTo({
          top: contactUsSection.offsetTop - headerHeight,
          behavior: 'smooth'
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get the "Destination" link in the navigation bar
  const destinationLink = document.querySelector('.menu-item a[href="#destination"]');
  // Get the height of the fixed header if applicable
  const headerHeight = document.querySelector('.header').offsetHeight;

  // Add event listener to the "Destination" link
  destinationLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the container element for the destination section
    const destinationSection = document.getElementById('destination');

    // Scroll to the container with an offset to accommodate the header height
    window.scrollTo({
      top: destinationSection.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
});

