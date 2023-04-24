<template>
  <div class="home">
    <div class="global-filter" v-if="modal" @click="modal = !modal"></div>
    <HeaderBar />
    <!-- Search bar -->
    <form class="searchbar">
      <div class="form-group mobile-input">
        <label for="filter">
          <img src="../assets/desktop/icon-search.svg" alt="search icon" class="search-icon" />
        </label>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Filter by company"
          v-model="filters.company"
        />
      </div>

      <div class="form-group group-location group-location-pc">
        <label for="location">
          <img src="../assets/desktop/icon-location.svg" alt="location icon" />
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Filter by location..."
          v-model="filters.location"
        />
      </div>

      <div class="form-group last-group">
        <div class="last-group-checkbox last-group-checkbox-pc">
          <label for="fulltime" class="last-group-label">{{ texts.label }}</label>
          <input
            class="check"
            type="checkbox"
            name="fulltime"
            id="fulltime"
            v-model="filters.fulltime"
          />
        </div>

        <input type="submit" value="Search" class="submit-btn submit-pc" />
        <div class="modal-mobile" @click="modal = !modal">
          <img src="../assets/mobile/icon-filter.svg" alt="open the modal" />
        </div>
        <input type="submit" value="" class="submit-btn-mobile" />
      </div>

      <!-- Mobile form modal -->
      <div class="modal-view" v-if="modal">
        <div class="form-group group-location">
          <label for="location">
            <img src="../assets/desktop/icon-location.svg" alt="location icon" />
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Filter by location..."
            v-model="filters.location"
          />
        </div>

        <div class="last-group-checkbox">
          <label for="fulltime" class="last-group-label">{{ texts.label }}</label>
          <input type="checkbox" name="fulltime" id="fulltime" v-model="filters.fulltime" />
        </div>

        <p class="submit-btn" @click="modal = !modal">Search</p>
      </div>
    </form>
    <!-- Main section -->
    <main>
      <section class="grid">
        <router-link
          class="jobs"
          v-for="job in filterBy"
          :key="job.id"
          :to="{ path: 'job/' + job.company + '/' + job.id }"
        >
          <div class="logo" :style="{ background: job.logoBackground }">
            <img :src="require('../assets/logos/' + job.logo)" :alt="job.position" />
          </div>

          <div class="jobs-text">
            <p class="time"><span>5h ago . </span>{{ job.contract }}</p>
            <h2>{{ job.position }}</h2>
            <p class="company">{{ job.company }}</p>
            <p class="location">{{ job.location }}</p>
          </div>
        </router-link>
      </section>
      <button @click="doubleJobList(list)">Load More</button>
    </main>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderBar,
  },
  data() {
    return {
      texts: {
        label: 'FullTime Only',
        LargeLabel: 'FullTime Only',
        SmallLabel: 'FullTime',
      },
      timeout: null,
      modal: false,
      filters: {
        location: null,
        company: null,
        fulltime: null,
      },
    };
  },
  computed: {
    filterBy() {
      const list = this.$store.state.jobsList;
      if (this.filters.location) {
        return list.filter((job) => job.location == this.filters.location);
      } else if (this.filters.company) {
        return list.filter((job) => job.company == this.filters.company);
      } else if (this.filters.fulltime) {
        return list.filter((job) => job.contract == 'Full Time');
      } else {
        return list;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.debounce);
  },
  destroyed() {
    window.removeEventListener('resize', this.debounce);
  },
  methods: {
    doubleJobList() {
      const storedList = this.$store.state.jobsList;
      if (storedList.length >= 50) {
        return;
      } else {
        const arr1 = storedList;
        const arr2 = storedList;
        this.$store.state.jobsList = arr1.concat(arr2);
      }
    },
    debounce() {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.ChangeText();
      }, 100);
    },
    ChangeText() {
      if (window.innerWidth <= 1024) {
        this.texts.label = this.texts.SmallLabel;
      } else {
        this.texts.label = this.texts.LargeLabel;
      }
    },
    toJob(company, jobId) {
      const name = company;
      const id = jobId;
      this.$router.push(`job/${name}/${id}`);
    },
  },
};
</script>

<style scoped>
.filteredJob {
  background-color: lightgreen;
  margin: 0 auto 3rem;
  max-width: 1000px;
}
main {
  padding-bottom: 1rem;
}
.home {
  max-width: 1440px;
  margin: auto;
}
.global-filter {
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 9;
  cursor: pointer;
}
.searchbar {
  max-width: var(--bar-width);
  margin: auto;
  height: 80px;
  position: relative;
  top: -40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-white);
}

.group-location {
  border-right: 3px solid var(--clr-light-grey);
  border-left: 3px solid var(--clr-light-grey);
}

.form-group {
  flex: 1;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

label {
  margin: 0 1rem 0 0;
}

input[type='text'] {
  width: 90%;
  padding: 0.5rem 0 0.5rem 0.5rem;
  text-overflow: ellipsis;
  background-color: var(--clr-white);
  color: var(--clr-midnight);
}

input[type='text']:focus {
  outline: 1px solid var(--clr-dark-grey);
}

input::placeholder {
  font-size: var(--body-font);
  color: var(--clr-grey);
}

.last-group-checkbox {
  display: flex;
}

.last-group-label {
  color: var(--clr-midnight);
  font-size: var(--m-font);
  font-weight: 600;
  order: 2;
}

.submit-btn-mobile,
.modal-mobile,
.modal-view {
  display: none;
}

#fulltime {
  margin: 0 1rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  max-width: var(--bar-width);
  margin: auto;
}

.jobs {
  border-radius: 5px;
  position: relative;
  transition: 0.3s;
  padding: 2rem;
  background-color: var(--clr-white);
}

.jobs:hover {
  background-color: var(--clr-violet);
}

.jobs:hover .location {
  color: var(--clr-white);
}

.jobs .logo {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(-2rem + -25px);
}

.jobs-text {
  padding: 1rem 0;
}

.jobs h2 {
  color: var(--clr-midnight);
  font-size: var(--m-font);
  line-height: var(--m-line);
  padding: 0.5rem 0;
}

.time,
.company {
  color: var(--clr-grey);
}

.location {
  color: var(--clr-violet);
  padding-top: 2rem;
  font-weight: bold;
}

.time,
.company,
.location {
  font-size: var(--body-font);
}

button,
.submit-btn {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--clr-white);
  font-size: var(--body-font);
  background-color: var(--clr-violet);
  border-radius: 5px;
  margin: 2rem auto;
  transition: 0.4s;
  cursor: pointer;
  text-align: center;
}

button:hover,
.submit-btn:hover {
  opacity: 0.7;
}

@media screen and (max-width: 1024px) {
  .searchbar {
    max-width: 90%;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 90%;
  }
}

@media screen and (max-width: 650px) {
  .form-group {
    flex: 0;
  }
  .mobile-input {
    min-width: 155px;
    flex-grow: 1;
  }
  .search-icon {
    display: none;
  }
  .last-group {
    justify-content: end;
  }
  .modal-mobile {
    display: block;
    margin: 0 1rem;
    cursor: pointer;
  }

  .group-location-pc,
  .last-group-checkbox-pc {
    display: none;
  }

  .submit-pc {
    display: none;
  }
  .submit-btn-mobile {
    background-color: var(--clr-violet);
    background-image: url('../assets/mobile/icon-search.svg');
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.3s;
  }
  .submit-btn-mobile:hover {
    background-color: var(--clr-light-violet);
  }
  .modal-view {
    display: block;
    border-radius: 7px;
    background-color: var(--clr-white);
    position: fixed;
    z-index: 10;
    top: 50%;
    transform: translate(0, -50%);
    left: 5%;
    right: 5%;
    overflow: hidden;
  }
  .modal-view .group-location {
    border-bottom: 1px solid var(--clr-dark-grey);
    padding: 2rem 1rem;
  }
  .modal-view .last-group-checkbox {
    padding: 2rem 1rem;
  }
  .modal-view .submit-btn {
    width: calc(100% - 2rem);
    padding: 1rem 0;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
}
</style>
