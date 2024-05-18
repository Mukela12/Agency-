function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="text-body col py-5">
    <h2 class="title fw-bold">
      Manage all projects from your mobile
    </h2>
    <p>
      Download the app to manage your projects, keep track of the
      progress and complete tasks without procastinating. Stay on track
      and complete on time!
    </p>
    <div class="badges mt-5">
      <p>Get the App</p>
      <div class="badges-items me-3 d-none d-sm-block">
      </div>
    </div>
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
