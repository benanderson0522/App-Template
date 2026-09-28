export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="trail-navbar" aria-label="Primary navigation">
      <div class="container trail-navbar__inner">
        <router-link class="trail-navbar__brand" to="/" aria-label="Hiking Trail Explorer home">
          Hiking Trail Explorer
        </router-link>

        <div class="trail-navbar__links">
          <router-link class="trail-navbar__link" to="/">Home</router-link>
          <router-link class="trail-navbar__link" to="/items">Explore Trails</router-link>
          <router-link class="trail-navbar__link" to="/about">About</router-link>
        </div>
      </div>
    </nav>
  `,
};
