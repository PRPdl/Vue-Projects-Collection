<template>
  <div id="home">
    <h1 v-if="show">This is home.</h1>

    <button @click="getLocation">Get Location </button>
 
  </div>
</template>

<script>


export default {
 
 
  data() {
    return {
     show: true
    };
  },
  methods: {
    getLocation() {
      fetch('http://ip-api.com/json')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.city);
 })
 .catch((data, status) => {
    console.log('Request failed');
 })
    }
  }

}

</script>