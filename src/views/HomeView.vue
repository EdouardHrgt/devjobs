<template>
  <div class="home">
    <HeaderBar />
    <section class="searchbar"></section>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderBar,
  },
};
</script>

<style scoped>
.searchbar {
  max-width: 1110px;
  margin: auto;
  height: 80px;
  background-color: lightcoral;
  position: relative;
  top: -40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  .searchbar {
    max-width: 90%;
  }
}
</style>
