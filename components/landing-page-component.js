export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="home-hero">
      <div class="container home-hero__content">
        <p class="home-hero__location">Bloomington, Indiana</p>
        <h1 class="home-hero__heading">Find your next trail.</h1>
        <p class="home-hero__description">
          Explore local trails and review their distance, location, and available details.
        </p>
        <router-link to="/items" class="home-hero__action">Explore Trails</router-link>
      </div>
    </section>
  `,
};
