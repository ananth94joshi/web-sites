//script for adding bootstrap classes


const selectBody = document.querySelector('body');

  function toggleScrolled() {
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  
  var footerContainer = document.querySelector("body > footer > div > div > div > div");
  footerContainer.classList.add('container');
  var footerRow = document.querySelector("body > footer > div > div > div > div > div");
  footerRow.classList.add('row', 'gy-4');
  var footerAbout = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(1)");
  footerAbout.classList.add('col-lg-5', 'col-md-12');
  var footerUsefulLinks = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(2)");
  footerUsefulLinks.classList.add('col-lg-2', 'col-6');
  var footerServices = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(3)");
  footerServices.classList.add('col-lg-2', 'col-6');
  var footerContactUs = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(4)");
  footerContactUs.classList.add('col-lg-3', 'col-md-12');
  
  var testimonialContainer = document.querySelector("body > main > div:nth-child(13) > div");
  var testimonialsTitle = document.querySelector("body > main > div:nth-child(13) > div.default-content-wrapper > h2#testimonials");
  var testimonialDesc = document.querySelector("body > main > div:nth-child(13) > div.default-content-wrapper > p:nth-child(2)");
  var testimonialCaro = document.querySelector("body > main > div:nth-child(13) > div > p:nth-child(3)");
  var testimonialNewRow = document.createElement('div');
  testimonialNewRow.classList.add('col-lg-5');
  testimonialNewRow.appendChild(testimonialsTitle);
  testimonialNewRow.appendChild(testimonialDesc);
  testimonialContainer.appendChild(testimonialNewRow);
  var testimonialNewCarousal = document.createElement('div');
  testimonialNewCarousal.classList.add('col-lg-7');
  testimonialNewCarousal.appendChild(testimonialCaro);
  testimonialContainer.appendChild(testimonialNewCarousal);
  testimonialContainer.classList.add('row');
