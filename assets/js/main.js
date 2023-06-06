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
   * Display the correct query section
   */
  var tagButton = document.getElementById('using-tags-button');
  var tagOfImageButton = document.getElementById('using-tag-of-image-button');
  var removeOrAddButton = document.getElementById('add-or-remove-tag-button');
  var tagOfImageSection = document.getElementById('query-using-image');
  var deleteImageButton = document.getElementById('delete-image-button')
  var addOrRemoveTagsSection = document.getElementById('add-or-remove-tags');
  var findImageBasedOnTagSection = document.getElementById('intro-to-query');
  var deleteImageSection = document.getElementById('delete-image-section');

  deleteImageButton.addEventListener('click', function() {
    alert("Delete image button gets clicked");
    if (deleteImageSection.classList.contains('content-to-hide')) {
      deleteImageSection.classList.remove('content-to-hide');
      deleteImageSection.classList.add('content-to-show');
      deleteImageButton.textContent = "Collapse";
    } else {
      deleteImageSection.classList.remove('content-to-show');
      deleteImageSection.classList.add('content-to-hide');
      deleteImageButton.textContent = "Try out now";
    }
  });
  
  tagOfImageButton.addEventListener('click', function() {
    alert("Tag of an image gets clicked");
    if (tagOfImageSection.classList.contains('content-to-hide')) {
      tagOfImageSection.classList.remove('content-to-hide');
      tagOfImageSection.classList.add('content-to-show');
      tagOfImageButton.textContent = "Collapse";
    } else {
      tagOfImageSection.classList.remove('content-to-show');
      tagOfImageSection.classList.add('content-to-hide');
      tagOfImageButton.textContent = "Try out now";
    }
  });

  removeOrAddButton.addEventListener('click', function() {
    alert("Add or remove tags gets clicked");
    if (addOrRemoveTagsSection.classList.contains('content-to-hide')) {
      addOrRemoveTagsSection.classList.remove('content-to-hide');
      addOrRemoveTagsSection.classList.add('content-to-show');
      removeOrAddButton.textContent = "Collapse";
    } else {
      addOrRemoveTagsSection.classList.remove('content-to-show');
      addOrRemoveTagsSection.classList.add('content-to-hide');
      removeOrAddButton.textContent = "Try out now";
    }
  });

  tagButton.addEventListener('click', function() {
    // display the section of "Finding images based on tags and object count"
    alert("Tags button gets clicked");
    if (findImageBasedOnTagSection.classList.contains('content-to-hide')) {
      findImageBasedOnTagSection.classList.remove('content-to-hide');
      findImageBasedOnTagSection.classList.add('content-to-show');
      tagButton.textContent = "Collapse";
    } else {
      findImageBasedOnTagSection.classList.remove('content-to-show');
      findImageBasedOnTagSection.classList.add('content-to-hide');
      tagButton.textContent = "Try out now";
    }
  });

  /**
   * 3.3.1 Plus button in Section: Query images using tag names
   */
  var plusButton = document.getElementById('plus-button');
  
  plusButton.addEventListener('click', function() {
    alert("Plus button gets clicked");

    var div = document.createElement('DIV');
    div.innerHTML = '<div class="row"> ' + '<input class="minus-button" type="button" value="-" onclick = "removeThisLine(this.parentNode)"/>' + '<div class="col-md-6 form-group mt-3 mt-md-0"> ' + '<input type="text" name="tag-name" class="form-control" id="tag-name" placeholder="Object name" required> ' + '</div> ' + '<div class="col-md-5 form-group mt-3 mt-md-0">' + '<input type="number" min="1" max="20" class="form-control" value="1" name="tag-count" id="tag-count" placeholder="Count" required> ' + '</div>';
    document.getElementById("query-using-tag-form").appendChild(div);
  });

  /**
   * 3.3.2 Query images using tag names of an image
   */

  var uploadedImage = document.getElementById('image-path');
  var previewImage = document.getElementById('preview-image-3.3.2');
  var sendQueryButton = document.getElementById('send-image-query-button');


  uploadedImage.addEventListener('change', function() {
    var image = uploadedImage.files[0];
    let outputHTML = `<div class="image">
    <img src="${URL.createObjectURL(image)}" alt="image">
    </div>`;
    previewImage.innerHTML = outputHTML;
  });

    /**
   * 3.3.2 Query images using tag names of an image: After sending query - WIP
   */
  sendQueryButton.addEventListener('click', function() {
    alert("send query button gets clicked");

    // API gateway endpoint
    const apiUrl = ""; 

    
    //const param1 = 'value1';
    var image = uploadedImage.files[0];

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
    axios.post(`${apiEndpoint}/queryUsingImage`, payload)
      .then(response => {
        console.log('Query sent successfully.');
      })
      .catch(error => {
        console.error('Error sending query:', error);
      });


    });

  var queryUsingTagForm = document.getElementById('query-using-tag-form');

  queryUsingTagForm.addEventListener('submit', function() {
    alert("queryUsingTagForm has been clicked");
  });

  /**
   * 3.3.3 When user clicks on plus button in Section: Addition or Removal of tags
   */
  var plusButton333 = document.getElementById('plus-button-3.3.3');

  plusButton333.addEventListener('click', function() {
    alert("Plus button gets clicked");

    var div = document.createElement('DIV');
    div.innerHTML = '<div class="row">' + 
        '<input class="minus-button" type="button" value="-" onclick="removeThisLinePart333(this.parentNode)"/>' +
      '<div class="col-md-6 form-group mt-3 mt-md-0">' + 
        '<input type="text" name="tag-name" class="form-control" id="tag-name" placeholder="Tag name" required>' +
      '</div>' +
      '<div class="col-md-5 form-group mt-3 mt-md-0">' +
        '<input type="number" min="1" max="20" class="form-control" value="1" name="tag-count" id="tag-count" placeholder="Count" required>' + 
      '</div>' + 
    '</div>';
    document.getElementById("remove-or-add-tags-form").appendChild(div);
  });





});

  /**
   * 3.3.1 When user clicks on minus button in Section: Query images using tag names
   */
function removeThisLine(div)
{
  alert("Minus button gets clicked");
  document.getElementById("query-using-tag-form").removeChild(div.parentNode);
}

/**
* 3.3.3 When user clicks on minus button in Section: Addition or Removal of tags
*/
  function removeThisLinePart333(div)
  {
    alert("Minus button gets clicked");
    document.getElementById("remove-or-add-tags-form").removeChild(div.parentNode);
  }



