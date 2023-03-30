<template>
  <div class="job">
    <HeaderBar />
    <section class="banner">
      <div class="banner-img">
        <p class="logo">Scoot</p>
      </div>
      <div class="banner-txt">
        <h1>Scoot</h1>
        <p>scoot.com</p>
      </div>
      <button>Company Site</button>
    </section>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';
import DataList from '/data.json';
export default {
  name: 'JobView',
  components: {
    HeaderBar,
  },
  data() {
    return {
      jobs: DataList,
    };
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
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-txt {
  margin: 0 3rem;
  flex: 1;
}

.banner-txt h1 {
  color: var(--clr-midnight);
  font-size: var(--l-font);
  line-height: var(--l-line);
  margin: 0 0 0.8rem 0;
}

.banner-txt p {
  color: var(--clr-dark-grey);
  font-size: var(--body-font);
}

.banner button {
  width: 147px;
  height: 48px;
  border-radius: 7px;
  cursor: pointer;
  color: var(--clr-violet);
  background-color: var(--clr-light-grey);
  font-size: var(--body-font);
  font-weight: 600;
  margin: 0 3rem 0 0;
}

.banner button:hover {
  opacity: 0.7;
}
</style>
