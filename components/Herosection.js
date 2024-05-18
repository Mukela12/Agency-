function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
              Where Email Leads Become Revenue Streams
              </h1>
              <p class="mt-3">
              From Cold Leads to Raving Fans:
              We Elevate Your Email Marketing Game.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="#">Get Started</a>
              <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/x2mate.com-Break The Cycle | Update The System-(1080p).MOV" alt="" id="" />
            <video width="320" height="240" controls>
              <source src="x2mate.com-Break The Cycle | Update The System-(1080p).MOV" type="video/MOV">
                 Your browser does not support the video tag.
               </video>
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
