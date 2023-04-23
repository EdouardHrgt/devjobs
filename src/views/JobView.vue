<template>
  <div class="job">
    <HeaderBar />
    <section class="banner">
      <div class="banner-img" :style="{ background: job.logoBackground }">
        <img :src="require('../assets/logos/' + job.logo)" :alt="job.position" />
      </div>
      <div class="banner-txt">
        <h2>{{ job.company }}</h2>
        <p>{{ job.company }}.com</p>
      </div>
      <button class="company-link">Company Site</button>
    </section>

    <main>
      <div class="job-header">
        <div class="job-title">
          <p class="date">
            <span>{{ job.postedAt }}</span> . <span>{{ job.contract }}</span>
          </p>
          <h1>{{ job.position }}</h1>
          <p class="location">
            <strong>{{ job.location }}</strong>
          </p>
        </div>

        <button class="apply-now">Apply Now</button>
      </div>

      <div class="job-infos">
        <p>{{ job.description }}</p>
      </div>

      <div class="job-requirements">
        <h3>Requirements</h3>
        <p>{{ job.requirements.content }}</p>
        <ul>
          <li v-for="item in job.requirements.items" :key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>

      <div class="job-role">
        <h3>What You Will Do</h3>
        <p>{{ job.role.content }}</p>
        <ul>
          <li v-for="el in job.role.items" :key="el">
            <p>{{ el }}</p>
          </li>
        </ul>
      </div>
    </main>

    <footer>
      <div class="footer-content">
        <div class="footer-text">
          <h3>{{ job.position }}</h3>
          <p>{{ job.company }}</p>
        </div>
        <button class="apply-now">Apply Now</button>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
export default {
  name: 'JobView',
  components: {
    HeaderBar,
  },
  data() {
    return {
      job: null,
      id: this.$route.params.id,
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.job = this.$store.state.jobsList.find((x) => x.id == this.id);
  },
};
</script>

<style scoped>
.banner {
  background-color: var(--clr-white);
  display: flex;
  align-items: center;
  margin: auto;
  max-width: var(--bar-width);
  position: relative;
  top: -40px;
  border-radius: 7px;
  overflow: hidden;
}

.banner-img {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-img img {
  width: 65%;
}

.banner-txt {
  margin: 0 3rem;
  flex: 1;
}

.banner-txt h2 {
  color: var(--clr-midnight);
  font-size: var(--l-font);
  line-height: var(--l-line);
  margin: 0 0 0.8rem 0;
}

.banner-txt p {
  color: var(--clr-grey);
  font-size: var(--body-font);
  font-weight: 500;
}

button {
  font-weight: 700;
  font-size: var(--body-font);
  width: 147px;
  height: 48px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s;
}

.banner button {
  color: var(--clr-violet);
  background-color: var(--clr-light-grey);
  margin: 0 3rem 0 0;
}

/* Main content */
main {
  background-color: var(--clr-white);
  border-radius: 7px;
  padding: 3rem;
  max-width: var(--bar-width);
  margin: auto;
}

.job-header,
.job-infos,
.job-requirements {
  margin-bottom: 2.3rem;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-size: var(--body-font);
  color: var(--clr-grey);
  font-weight: 400;
}

.location {
  font-size: var(--s-font);
  color: var(--clr-violet);
  font-weight: 600;
}

h1 {
  font-size: var(--xl-font);
  color: var(--clr-midnight);
  line-height: var(--xl-line);
  padding: 0.4rem 0;
}

h3 {
  font-size: var(--m-font);
  color: var(--clr-midnight);
  line-height: var(--m-line);
}

.apply-now {
  background-color: var(--clr-violet);
  color: var(--clr-white);
}

.job-infos,
.job-requirements,
.job-role {
  font-size: var(--body-font);
  color: var(--clr-dark-grey);
  line-height: var(--body-line);
  font-weight: 400;
}

.job-requirements h3,
.job-role h3 {
  margin-bottom: 1.5rem;
}

.job-requirements ul,
.job-role ul {
  margin: 1.5rem 0;
}

.job-requirements ul li,
.job-role ul li {
  display: flex;
  margin: 0.8rem 0;
  align-items: baseline;
}

.job-requirements ul li::before {
  content: '';
  background-color: var(--clr-violet);
  min-width: 7px;
  min-height: 7px;
  border-radius: 50%;
}

.job-role ul {
  counter-reset: my-awesome-counter;
}

.job-role ul li {
  counter-increment: my-awesome-counter;
}

.job-role ul li::before {
  content: counter(my-awesome-counter);
  color: var(--clr-violet);
  font-weight: 900;
}

.job-requirements ul li::before,
.job-role ul li::before {
  margin-right: 2rem;
}

footer {
  background-color: var(--clr-white);
  width: 100%;
  margin: 5rem auto 0;
  border-radius: 7px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--bar-width);
  margin: auto;
  padding: 1.5rem 3rem;
}

.footer-text p {
  color: var(--clr-grey);
  font-weight: 500;
  font-size: var(--body-font);
  margin: 0.5rem 0 0 0;
}

.apply-now:hover {
  background-color: var(--clr-light-violet);
}

.company-link:hover {
  background-color: var(--clr-light-violet);
  color: var(--clr-white);
}

@media screen and (max-width: 1110px) {
  main,
  .footer-content,
  .banner {
    max-width: 90%;
  }
}

@media screen and (max-width: 650px) {
  .banner {
    flex-direction: column;
    overflow: unset;
    padding-bottom: 2rem;
  }

  .banner-img {
    width: 55px;
    height: 55px;
    border-radius: 15px;
    position: relative;
    top: -27.5px;
  }

  .banner-img img {
    width: auto;
  }

  .banner-txt {
    margin: 0;
  }

  .banner-txt p {
    margin-bottom: 2rem;
  }

  .banner button {
    margin: auto;
  }

  .job-header {
    flex-direction: column;
    align-items: baseline;
  }

  .job-title {
    margin-bottom: 2.5rem;
  }

  .job-header button {
    width: 100%;
  }

  .footer-text {
    display: none;
  }

  .footer-content button {
    width: 100%;
  }
}
</style>
