<template>
  <div class="home">
    <HeaderBar />
    <!-- Search bar -->
    <form class="searchbar">
      <div class="form-group">
        <label for="filter">
          <img src="../assets/desktop/icon-search.svg" alt="search icon" />
        </label>
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div class="form-group group-location">
        <label for="location">
          <img src="../assets/desktop/icon-location.svg" alt="location icon" />
        </label>
        <input type="text" name="location" id="location" placeholder="Filter by location..." />
      </div>
      <div class="form-group last-group">
        <div class="last-group-checkbox">
          <label for="fulltime" class="last-group-label">{{ texts.label }}</label>
          <input type="checkbox" name="fulltime" id="fulltime" />
        </div>

        <input type="submit" value="Search" class="submit-btn" />
      </div>
    </form>
    <!-- Main section -->
    <main>
      <section class="grid">
        <a
          href="#"
          class="jobs"
          v-for="job in myJobs"
          :key="job.id"
          @click="toJob(job.company, job.id)"
        >
          <div class="logo" :style="{ background: job.logoBackground }">
            <img src="../assets/logos/blogr.svg" :alt="job.position" />
          </div>
          <div class="jobs-text">
            <p class="time"><span>5h ago . </span>{{ job.contract }}</p>
            <h2>{{ job.position }}</h2>
            <p class="company">{{ job.company }}</p>
            <p class="location">{{ job.location }}</p>
          </div>
        </a>
      </section>
      <button>Load More</button>
    </main>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
//import DataList from '/data.json';
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
    };
  },
  computed: {
    myJobs() {
      return this.$store.state.jobsList;
    },
  },
  created() {
    window.addEventListener('resize', this.debounce);
  },
  destroyed() {
    window.removeEventListener('resize', this.debounce);
  },
  methods: {
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
  padding: 0.5rem 0;
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

.jobs:hover .jobs-text {
  opacity: 0.7;
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

@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3rem;
  }
}
</style>
