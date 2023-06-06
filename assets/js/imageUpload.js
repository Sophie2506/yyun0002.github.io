/**
* Template Name: Logis
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => 
{
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Uploading Images in Object Detection page
   */
  var uploadButton = document.getElementById('upload-button');
  var uploadedImage = document.getElementById('uploaded-image');
  var previewImage = document.getElementById('preview-image');

  uploadButton.addEventListener('click', function() {
    // add functionality to send POST request to API gateway in here

    alert("Upload button gets clicked");
    var image = uploadedImage.files[0];
    alert("FIle name" + image.name + ". File URL " + URL.createObjectURL(image));
    //uploadImageToS3(image);

  });

  uploadedImage.addEventListener('change', function() {
    var image = uploadedImage.files[0];
    let outputHTML = `<div class="image">
    <img src="${URL.createObjectURL(image)}" alt="image">
    </div>`;
    previewImage.innerHTML = outputHTML;
  });

});

// Assuming you have already configured the AWS SDK with valid credentials

  /**
   * Uploading Images in Object Detection page
   */
// 3.2 Function to handle image upload -- WIP
function uploadImageToS3(file) {

  const axios = require('axios');

  // Specify the API Gateway endpoint URL
  const apiEndpoint = '';

  // Specify the S3 bucket name
  const bucketName = 'assignment2-v1';

  // Specify the object key (file name)
  const objectKey = file.name;

  // Read the image file
  const fs = require('fs');
  const imageData = fs.readFileSync(URL.createObjectURL(image));

  // Convert the image data to base64
  const base64Image = imageData.toString('base64');

  // Prepare the request payload
  const payload = {
    bucket: bucketName,
    key: objectKey,
    image: base64Image
  };

  // Send a POST request to the API Gateway endpoint
  axios.post(`${apiEndpoint}/upload`, payload)
    .then(response => {
      console.log('Image uploaded successfully.');
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });

}

