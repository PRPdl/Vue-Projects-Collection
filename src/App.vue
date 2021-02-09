<template>
  <div id="app">
    <div class="nav">
      <router-link class="navigation" to="/">Home </router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/weather">Weather </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

a {
  text-decoration: none;
  color: aliceblue;
  margin-left: 20px;
  font-size: 20px;
  padding: 5px;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 5px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);

}

a:visited {
  color: aliceblue;
}

a:hover {
  color: aqua;
}


</style>