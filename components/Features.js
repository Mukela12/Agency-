function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Tailor-made features</h2>
  <p class="">
    Lorem ipsum is common placeholder text used to demonstrate the
    graphic elements of a document or visual presentation.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">100% Focused On Emails</div>
      <div class="description text-center">
      We are the best solution on the market because ALL we do all day
      every day is think about email.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Wizards of Email Management</div>
      <div class="description text-center">
      Established legacy of teaching 700+ professionals in the art of
      email management.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Battle Tested Methodology</div>
      <div class="description text-center">
      We have generated for our clients over $100M in online
      sales, primarily through email.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Zero-Risk Performance Guarantee.</div>
      <div class="description text-center">
      Our performance guarantee is that we will deliver a minimum 2x return
      on your investment or we work for free until you do.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Better components</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Well organised</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
