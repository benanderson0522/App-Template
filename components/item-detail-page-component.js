export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();
    const bookmarkedItemIds = Vue.ref([]);
    const bookmarkStorageError = Vue.ref('');

    try {
      bookmarkedItemIds.value = String(
        window.localStorage.getItem('hikingTrailExplorer.bookmarkedItemIds') || ''
      )
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
    } catch {
      bookmarkStorageError.value =
        'Bookmarks could not be accessed in this browser. Check browser storage settings and try again.';
    }

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const isBookmarked = Vue.computed(() => {
      return selectedItem.value ? bookmarkedItemIds.value.includes(selectedItem.value.id) : false;
    });

    const toggleBookmark = () => {
      if (!selectedItem.value) {
        return;
      }

      const itemId = selectedItem.value.id;
      const nextBookmarkedItemIds = isBookmarked.value
        ? bookmarkedItemIds.value.filter((id) => id !== itemId)
        : [...bookmarkedItemIds.value, itemId];

      try {
        window.localStorage.setItem(
          'hikingTrailExplorer.bookmarkedItemIds',
          nextBookmarkedItemIds.join(',')
        );
        bookmarkedItemIds.value = nextBookmarkedItemIds;
        bookmarkStorageError.value = '';
      } catch {
        bookmarkStorageError.value =
          'This bookmark could not be saved. Check browser storage settings and try again.';
      }
    };

    const displayValue = (value) => {
      const normalizedValue = String(value || '').trim();
      return normalizedValue && normalizedValue !== 'Information unavailable'
        ? normalizedValue
        : 'Information unavailable';
    };

    const displayDistance = (value) => {
      const normalizedValue = displayValue(value);
      return normalizedValue === 'Information unavailable' ? normalizedValue : normalizedValue + ' mi';
    };

    const hasOptionalValue = (value) => {
      const normalizedValue = String(value || '').trim();
      return normalizedValue && normalizedValue !== 'Information unavailable';
    };

    return {
      itemsStore,
      selectedItem,
      isBookmarked,
      toggleBookmark,
      bookmarkStorageError,
      displayValue,
      displayDistance,
      hasOptionalValue,
    };
  },
  template: /* html */ `
    <section class="trail-detail" :aria-busy="itemsStore.isLoading">
      <div class="container py-5">
        <router-link to="/items" class="trail-detail__back mb-4">
          ← Back to trails
        </router-link>

        <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
          Loading trail details...
        </div>

        <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
          {{ itemsStore.error }}
        </div>

        <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
          Trail not found.
        </div>

        <article v-else class="trail-detail__card">
          <img
            v-if="selectedItem.imageUrl"
            :src="selectedItem.imageUrl"
            :alt="selectedItem.name"
            class="trail-detail__image object-fit-cover" />

          <div class="trail-detail__body">
            <p class="trail-detail__eyebrow">Trail details</p>
            <div class="trail-detail__title-row">
              <h1 class="trail-detail__title">{{ selectedItem.name }}</h1>
              <button
                type="button"
                class="trail-detail__bookmark"
                :class="{ 'trail-detail__bookmark--selected': isBookmarked }"
                :aria-label="isBookmarked ? 'Remove bookmark' : 'Bookmark trail'"
                :aria-pressed="isBookmarked"
                :disabled="Boolean(bookmarkStorageError)"
                @click="toggleBookmark">
                <i :class="isBookmarked ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'"></i>
                <span>{{ isBookmarked ? 'Bookmarked' : 'Bookmark trail' }}</span>
              </button>
            </div>
            <div v-if="bookmarkStorageError" class="alert alert-warning" role="alert">
              {{ bookmarkStorageError }}
            </div>
            <p class="trail-detail__description">
              {{ displayValue(selectedItem.description) }}
            </p>

            <section class="trail-detail__section" aria-labelledby="trail-overview-heading">
              <h2 id="trail-overview-heading" class="trail-detail__heading">Trail overview</h2>
              <dl class="trail-detail__details">
                <div>
                  <dt>Difficulty</dt>
                  <dd>{{ displayValue(selectedItem.difficulty) }}</dd>
                </div>
                <div>
                  <dt>Distance</dt>
                  <dd>{{ displayDistance(selectedItem.distance) }}</dd>
                </div>
                <div>
                  <dt>Elevation gain</dt>
                  <dd>{{ displayValue(selectedItem.elevationGain) }}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{{ displayValue(selectedItem.location) }}</dd>
                </div>
              </dl>
            </section>

            <section
              v-if="hasOptionalValue(selectedItem.pointsOfInterest) || hasOptionalValue(selectedItem.conditions) || hasOptionalValue(selectedItem.amenities) || hasOptionalValue(selectedItem.rating) || hasOptionalValue(selectedItem.reviews)"
              class="trail-detail__section"
              aria-labelledby="trail-more-heading">
              <h2 id="trail-more-heading" class="trail-detail__heading">More about this trail</h2>
              <dl class="trail-detail__details">
                <div v-if="hasOptionalValue(selectedItem.pointsOfInterest)">
                  <dt>Points of interest</dt>
                  <dd>{{ selectedItem.pointsOfInterest }}</dd>
                </div>
                <div v-if="hasOptionalValue(selectedItem.conditions)">
                  <dt>Conditions</dt>
                  <dd>{{ selectedItem.conditions }}</dd>
                </div>
                <div v-if="hasOptionalValue(selectedItem.amenities)">
                  <dt>Amenities</dt>
                  <dd>{{ selectedItem.amenities }}</dd>
                </div>
                <div v-if="hasOptionalValue(selectedItem.rating)">
                  <dt>Rating</dt>
                  <dd>{{ selectedItem.rating }}</dd>
                </div>
                <div v-if="hasOptionalValue(selectedItem.reviews)">
                  <dt>Reviews</dt>
                  <dd>{{ selectedItem.reviews }}</dd>
                </div>
              </dl>
            </section>

            <p class="trail-detail__disclaimer">
              Trail information is for planning purposes and may not represent current trail
              conditions. This application is not an emergency, rescue, or official
              trail-management service.
            </p>
          </div>
        </article>
      </div>
    </section>
  `,
};
