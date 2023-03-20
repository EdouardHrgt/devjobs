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
        <label for="fulltime">Full Time Only</label>
        <input type="checkbox" name="fulltime" id="fulltime" />
        <input type="submit" value="Search" class="submit-btn" />
      </div>
    </form>
    <!-- Main section -->
    <main>
      <section class="grid">
        <a href="#" class="jobs" v-for="job in jobs" :key="job.id">
          <div class="logo" :style="{ background: job.logoBackground }">
            <img :src="job.logo" :alt="job.position" />
          </div>
          <p class="time"><span>5h ago . </span>{{ job.contract }}</p>
          <h2></h2>
          <p class="company">{{ job.company }}</p>
          <p class="location"></p>
        </a>
      </section>
      <button>Load More</button>
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
      jobs: null,
    };
  },
  mounted() {
    fetch('http://localhost:8080/data.json')
      .then((res) => {
        return res.json();
      })
      .then((dataList) => {
        console.log(dataList);
        this.jobs = dataList;
      })
      .catch((e) => {
        console.warn(e);
      });
  },
};
</script>

<style scoped>
.searchbar {
  max-width: 1110px;
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
}

input::placeholder {
  font-size: var(--body-font);
  color: var(--clr-grey);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}

.jobs {
  border: 1px solid red;
  border-radius: 7px;
  position: relative;
  transition: 0.3s;
}

.jobs:hover {
  opacity: 0.7;
}

button {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--clr-white);
  font-size: var(--body-font);
  background-color: var(--clr-violet);
  border-radius: 5px;
  margin: 2rem auto 0;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .searchbar {
    max-width: 90%;
  }
}
</style>
