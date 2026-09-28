export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const hasOptionalValue = (value) => {
      const normalizedValue = String(value || '').trim();
      return normalizedValue && normalizedValue !== 'Information unavailable';
    };

    return {
      itemsStore,
      selectedItem,
      hasOptionalValue,
    };
  },
  template: /* html */ `
    <section class="trail-detail">
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
            <h1 class="trail-detail__title">{{ selectedItem.name }}</h1>
            <p class="trail-detail__description">
              {{ selectedItem.description }}
            </p>

            <section class="trail-detail__section" aria-labelledby="trail-overview-heading">
              <h2 id="trail-overview-heading" class="trail-detail__heading">Trail overview</h2>
              <dl class="trail-detail__details">
                <div>
                  <dt>Difficulty</dt>
                  <dd>{{ selectedItem.difficulty }}</dd>
                </div>
                <div>
                  <dt>Distance</dt>
                  <dd>{{ selectedItem.distance }} mi</dd>
                </div>
                <div>
                  <dt>Elevation gain</dt>
                  <dd>{{ selectedItem.elevationGain }}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{{ selectedItem.location }}</dd>
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
          </div>
        </article>
      </div>
    </section>
  `,
};
