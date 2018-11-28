<template>
    <nav id="navbarsecond">
        <h1>Grigori varjupaik MTÜ</h1>
         <ul>
       <li><router-link to="/loomad">Loomad</router-link></li>
       <li><router-link to="/toetus">Toetus</router-link></li>
       <li><router-link to="/kaotatudloomad">Kaotatud loomad</router-link></li>
       <li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
       <li><router-link to="/">Avaleht</router-link></li>

    </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbarsecond',

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
