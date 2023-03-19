<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root {
  /* colors */
  --clr-violet: hsl(27, 22%, 51%);
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
}
</style>
