<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{
  height: 100%;
}
body {
  background-image: url('~@/assets/backgr.jpg');
  background-size: cover;
  height: 100%;
  *{
    font-family: "Open Sans",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
}
</style>
