<template>
  <div class="hello">
        <header id="banner">
    <nav id="navbar">
        <h1 id="logo"> Grigori varjupaik MTÜ </h1>

    <ul>
       <li><router-link to="/loomad">Loomad</router-link></li>
       <li><router-link to="/toetus">Toetus</router-link></li>
       <li><router-link to="/kaotatudloomad">Kaotatud loomad</router-link></li>
       <li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
       <li><router-link to="/home">Avaleht</router-link></li>
       
    </ul>

  </nav>
  <section class="hero">
        <h1>Meile meeldivad loomad..</h1>
        <p>Igal loomal oma kodu</p>

     </section>
</header>
  <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
