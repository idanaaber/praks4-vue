<template>
  <div class="kodutudloomad">
    <Navbarsecond />
    <h1>Loomad varjupaigas</h1>
    <Footersecond />
  </div>
</template>

<script>
// @ is an alias to /src
import Footersecond from '@/components/Footersecond.vue';
import Navbarsecond from '@/components/Navbarsecond.vue';

export default {
  name: 'kaotatudloomad',
  components: {
    Footersecond,
    Navbarsecond,
  },
};
</script>
