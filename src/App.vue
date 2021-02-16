<template>
  <div id="app">
    <div class="nav">
      <router-link class="menu-item" to="/">Home </router-link>
      
      <router-link class="menu-item" to="/about">About</router-link>
      
      <router-link class="menu-item" to="/weather">Weather </router-link>
      
      <Dropdown title="Services" :items="services"/>
    </div>
    <router-view />
  </div>
</template>

<script>
import Dropdown from './views/components/Dropdown.vue';
export default {
  components: { Dropdown },
  data() {
    return {
      services: [
        {
          title: "Web",
          link: "#",
        },
        {
        title: 'Design',
        link: '#'
      },
      {
        title: 'Videos',
        link: '#'
      }
      ],
    };
  },
};
</script>

<style>
#app {
  height: 100vh;
}
.nav {
  display: flex;
  justify-content: center;
  background-color: royalblue;
}

.nav .menu-item {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  transition: 0.4s;
}

.nav .menu-item.active,
.nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
  border-radius: 10px 10px 10px 10px;
}

</style>