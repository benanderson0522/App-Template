export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const searchText = Vue.ref('');
    const selectedDifficulty = Vue.ref('');
    const selectedDistance = Vue.ref('');
    const bookmarkedItemIds = String(window.localStorage.getItem('hikingTrailExplorer.bookmarkedItemIds') || '')
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);
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
      return itemsStore.items.filter((item) => {
        const matchesSearch =
          !query ||
          searchableFields.some((field) => {
            const value = String(item[field] || '').trim();
            return value && value !== 'Information unavailable' && value.toLowerCase().includes(query);
          });
        const difficulty = String(item.difficulty || '').trim();
        const matchesDifficulty =
          !selectedDifficulty.value ||
          (selectedDifficulty.value === 'Information unavailable'
            ? !difficulty || difficulty === 'Information unavailable'
            : difficulty.toLowerCase() === selectedDifficulty.value.toLowerCase());
        const distanceValue = String(item.distance || '').trim();
        const distance = Number(distanceValue);
        const matchesDistance =
          !selectedDistance.value ||
          (distanceValue &&
            Number.isFinite(distance) &&
            (selectedDistance.value === 'under-1'
              ? distance < 1
              : selectedDistance.value === '1-to-3'
                ? distance >= 1 && distance <= 3
                : distance > 3));

        return matchesSearch && matchesDifficulty && matchesDistance;
      });
    });

    const isBookmarked = (itemId) => bookmarkedItemIds.includes(itemId);

    return {
      itemsStore,
      searchText,
      selectedDifficulty,
      selectedDistance,
      filteredItems,
      isBookmarked,
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
          <span class="trail-collection__count">
            {{ filteredItems.length }} {{ filteredItems.length === 1 ? 'trail' : 'trails' }}
          </span>
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

        <div v-else>
          <div class="trail-filters mb-4">
            <div class="trail-search">
              <label class="trail-search__label" for="trail-search">Search trails</label>
              <input
                id="trail-search"
                v-model="searchText"
                class="trail-search__input"
                type="search"
                placeholder="Search by trail name, location, or details" />
            </div>

            <div class="trail-filter">
              <label class="trail-search__label" for="difficulty-filter">Difficulty</label>
              <select
                id="difficulty-filter"
                v-model="selectedDifficulty"
                class="trail-filter__select">
                <option value="">All difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
                <option value="Information unavailable">Information unavailable</option>
              </select>
            </div>

            <div class="trail-filter">
              <label class="trail-search__label" for="distance-filter">Distance</label>
              <select
                id="distance-filter"
                v-model="selectedDistance"
                class="trail-filter__select">
                <option value="">All distances</option>
                <option value="under-1">Under 1 mi</option>
                <option value="1-to-3">1–3 mi</option>
                <option value="over-3">Over 3 mi</option>
              </select>
            </div>
          </div>

          <div v-if="filteredItems.length === 0" class="trail-no-results" role="status">
            No matching trails found.
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
                  <div class="trail-card__title-row">
                    <h2 class="trail-card__title">{{ item.name }}</h2>
                    <span
                      v-if="isBookmarked(item.id)"
                      class="trail-card__bookmark"
                      aria-label="Bookmarked trail">
                      <i class="bi bi-bookmark-fill" aria-hidden="true"></i>
                      Bookmarked
                    </span>
                  </div>

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
      </div>
    </section>
  `,
};
