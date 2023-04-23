<template>
  <div class="header">
    <header>
      <h1 @click="toHome">devjobs</h1>
      <div class="switcher" @click="switchTheme()">
        <img src="../assets/desktop/icon-sun.svg" alt="light theme" />
        <div class="switch">
          <div class="switch-ball" :class="{ active: darkTheme }"></div>
        </div>
        <img src="../assets/desktop/icon-moon.svg" alt="dark theme" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      theme: null,
      darkTheme: false, // Activate css ball moving
    };
  },
  methods: {
    switchTheme() {
      this.theme = !this.theme;
      this.theme ? (this.darkTheme = true) : (this.darkTheme = false);
      this.$store.state.theme = this.theme
    },
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
}
h1 {
  color: var(--clr-white);
  font-size: var(--xl-font);
  cursor: pointer;
}

.switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.switch {
  background-color: var(--clr-white);
  width: 48px;
  height: 24px;
  border-radius: 20px;
  position: relative;
  margin: 0 1rem;
}

.switch-ball {
  width: 14px;
  height: 14px;
  background-color: var(--clr-violet);
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  transition: 0.3s;
}

.active {
  left: calc(48px - 19px);
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
