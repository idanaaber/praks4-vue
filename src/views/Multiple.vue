<template>
  <div class="multiple">
    <Navbarsecond />
    
    <section class="page-content">

    <h1>Loomad varjupaigas</h1>

    <div class="profile-container">

      <div class="profile-img-container">

        <div class="profile-img">

          <img class="profile-img" src="../assets/dog.jpg" alt="An image of pet in shelter">

        </div>

      </div>

      <div class="profile-text-container">

        <h2 class="profile-name">Snella</h2>

        <p class="profile-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum tempus orci eget rhoncus. Sed sit amet nunc odio. Suspendisse in ipsum nisl. Fusce tortor leo, iaculis ut laoreet vitae, congue vitae leo. Donec mattis vel dolor vitae laoreet. Cras et enim non libero semper congue sed sed ligula. Sed porta tellus vel ligula rhoncus, ac varius mauris vulputate.</p>

        <p class="profile-text found-date">Saabub varjupaika alates 07.07.2020</p>

      </div>

    </div>

  </section>


    
    <Footersecond />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbarsecond.vue';
import Footer from '@/components/Footersecond.vue';

export default {
  name: 'about',
  components: {
    Navbar,
    Footer,
  },
};
</script>
