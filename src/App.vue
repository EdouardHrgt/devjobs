<template>
  <div id="app">
    <div class="theme" ref="themeDiv">
      <div class="switcher-positionner">
        <div class="switcher-wrapper">
          <div class="switcher" @click="switchTheme()">
            <img src="./assets/desktop/icon-sun.svg" alt="light theme" />
            <div class="switch">
              <div class="switch-ball" :class="{ active: darkTheme }"></div>
            </div>
            <img src="./assets/desktop/icon-moon.svg" alt="dark theme" />
          </div>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: null,
      darkTheme: false, // Activate css ball moving
    };
  },
  methods: {
    themeSwitcher() {
      if (this.darkTheme) {
        this.$refs.themeDiv.classList.add('dark-theme');
      } else {
        this.$refs.themeDiv.classList.remove('dark-theme');
      }
    },
    switchTheme() {
      this.theme = !this.theme;
      this.theme ? (this.darkTheme = true) : (this.darkTheme = false);
      this.themeSwitcher();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root {
  /* colors */
  --clr-violet: #5964e0;
  --clr-light-violet: hsl(235, 82%, 77%);
  --clr-dark-blue: hsl(219, 29%, 14%);
  --clr-midnight: hsl(220, 29%, 10%);
  --clr-white: hsl(0, 0%, 100%);
  --clr-light-grey: hsl(210, 22%, 96%);
  --clr-grey: hsl(212, 23%, 69%);
  --clr-dark-grey: hsl(214, 17%, 51%);

  /* fonts size */
  --xl-font: 28px;
  --l-font: 24px;
  --m-font: 20px;
  --s-font: 14px;
  --body-font: 16px;

  /* fonts line height */
  --xl-line: 34px;
  --l-line: 29px;
  --m-line: 24px;
  --s-line: 18px;
  --body-line: 26px;

  /* font family */
  --font: 'Kumbh Sans', sans-serif;

  /* Miscs */
  --bar-width: 1110px;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
  font-family: var(--font);
}

.dark-theme {
  --clr-dark-blue: hsl(219, 29%, 14%);
  --clr-midnight: hsl(0, 0%, 100%);
  --clr-white: hsl(219, 29%, 14%);
  --clr-light-grey: hsl(220, 29%, 10%);
}

.theme {
  background-color: var(--clr-light-grey);
}

.switcher-positionner {
  position: absolute;
  width: var(--bar-width);
  top: 2.9rem;
  right: 50%;
  transform: translate(50%, 0);
  display: flex;
  justify-content: flex-end;
}

.switcher-wrapper {
  width: 130px;
  display: flex;
  justify-content: center;
}

.switcher {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.switch {
  background-color: hsl(0, 0%, 100%);
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

@media screen and (max-width: 1111px) {
  .switcher-positionner {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .switcher-positionner {
    width: 90%;
  }
}
</style>
