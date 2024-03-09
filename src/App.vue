<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template >
<div class="flex flex-col bg-green-500 w-[100%]">

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
</div>

</template>

<style >

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
