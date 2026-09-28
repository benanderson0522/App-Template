export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const searchText = Vue.ref('');
    const searchableFields = [
      'name',
      'description',
      'location',
      'difficulty',
      'distance',
      'elevationGain',
      'pointsOfInterest',
      'conditions',
      'amenities',
      'rating',
      'reviews',
    ];
    const filteredItems = Vue.computed(() => {
      const query = searchText.value.trim().toLowerCase();
      if (!query) {
        return itemsStore.items;
      }

      return itemsStore.items.filter((item) =>
        searchableFields.some((field) => {
          const value = String(item[field] || '').trim();
          return value && value !== 'Information unavailable' && value.toLowerCase().includes(query);
        }),
      );
    });

    return {
      itemsStore,
      searchText,
      filteredItems,
    };
  },
  template: /* html */ `
    <section class="trail-collection">
      <div class="container py-5">
        <div class="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <p class="trail-collection__eyebrow mb-2">Bloomington, Indiana</p>
            <h1 class="trail-collection__heading mb-0">Explore trails</h1>
          </div>
          <span class="trail-collection__count">{{ filteredItems.length }} trails</span>
        </div>

        <div class="trail-search mb-4">
          <label class="trail-search__label" for="trail-search">Search trails</label>
          <input
            id="trail-search"
            v-model="searchText"
            class="trail-search__input"
            type="search"
            placeholder="Search by trail name, location, or details" />
        </div>

        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading trails...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
          No trails found.
        </div>

        <div v-else class="row g-3 g-lg-4">
          <div class="col-12 col-md-6 col-lg-4" v-for="item in filteredItems" :key="item.id">
            <article class="trail-card h-100">
              <img
                v-if="item.imageUrl"
                :src="item.imageUrl"
                :alt="item.name"
                class="trail-card__image object-fit-cover" />

              <div class="trail-card__body">
                <h2 class="trail-card__title">{{ item.name }}</h2>

                <dl class="trail-card__details">
                  <div>
                    <dt>Difficulty</dt>
                    <dd>{{ item.difficulty || 'Information unavailable' }}</dd>
                  </div>
                  <div>
                    <dt>Distance</dt>
                    <dd>{{ item.distance ? item.distance + ' mi' : 'Information unavailable' }}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{{ item.location || 'Information unavailable' }}</dd>
                  </div>
                </dl>

                <router-link :to="'/items/' + item.id" class="trail-card__link">
                  View trail
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
};
