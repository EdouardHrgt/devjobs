<template>
  <div class="header">
    <header>
      <h1 @click="toHome">devjobs</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    toHome() {
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped>
header {
  border-radius: 0 0 0 120px;
  background-image: url('../assets/desktop/bg-pattern-header.svg');
  padding: 2.5rem 10.2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 162px;
  max-width: 1440px;
  margin: auto;
}
h1 {
  color: hsl(0, 0%, 100%);
  font-size: var(--xl-font);
  cursor: pointer;
  z-index: 100;
}

@media screen and (max-width: 1024px) {
  header {
    padding: 2.5rem 3rem;
  }
}

@media screen and (max-width: 375px) {
  header {
    background-image: url('../assets/mobile/bg-pattern-header.svg');
    padding: 2.5rem 1rem;
    background-repeat: no-repeat;
  }
}
</style>
