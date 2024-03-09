<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
<NavBar />

  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/myimg.jpeg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Hi! Ashraf ali" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    border-radius: 50%;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
