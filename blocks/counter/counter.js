// Assuming you want to update the content with the provided HTML
var updatedHTML = `
<section id="stats" class="stats">
  <img src="" alt="" data-aos="fade-in" class="aos-init aos-animate">
  <div class="container position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">
      <div class="col-lg-3 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
          <p>Clients</p>
        </div>
      </div><!-- End Stats Item -->
      <div class="col-lg-3 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
          <p>Projects</p>
        </div>
      </div><!-- End Stats Item -->
      <div class="col-lg-3 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter">1453</span>
          <p>Hours Of Support</p>
        </div>
      </div><!-- End Stats Item -->
      <div class="col-lg-3 col-md-6">
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter">32</span>
          <p>Workers</p>
        </div>
      </div><!-- End Stats Item -->
    </div>
  </div>
</section>
`;

// Select the element with the class name 'counter-wrapper'
var counterWrapper = document.querySelector('.counter-wrapper');

// Update the innerHTML of the selected element with the updated HTML content
counterWrapper.innerHTML = updatedHTML;
