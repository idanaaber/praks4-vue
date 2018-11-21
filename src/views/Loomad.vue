<template>
  <div class="loomad">
    <Navbarsecond />
    <h1>Loomad varjupaigas</h1>

    <div class="flexbox-animals">
      <div class="dog">
        <img src="dog.jpg" alt="Doggo">
        </div>
      <div class="cat">
        <img src="cat.jpg" alt="Pussy">
        </div>  
    </div>

    <Footersecond />
  </div>
</template>

<script>
// @ is an alias to /src
import Footersecond from '@/components/Footersecond.vue';
import Navbarsecond from '@/components/Navbarsecond.vue';

export default {
  name: 'loomad',
  components: {
    Footersecond,
    Navbarsecond,
  },
};
</script>
