<template>
  <div class="about">
    <Navbar />
    <h1>test</h1>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'about',
  components: {
    Navbar,
    Footer,
  },
};
</script>
