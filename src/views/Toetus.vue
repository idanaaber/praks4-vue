<template>
  <div class="toetus">
    <Navbarsecond />
   

    <section class="toekas">

<h1>Siin lehel saab Grigorit aidata</h1>

<div class="donation">

<p>Grigori aitab OY</p>
<p>MTÜ Grigori kodutute varjupaik IBAN: EE22222222222222222222222</p>
<p>Tartu linn toetab varjupaika töötajate töötasude ja elementaarsete üldkulude osas (küte, prügivedu, elekter jms). 
Lisaks linna toetusele aitavad varjupaigal toime tulla linna ja teiste kohalike omavalitsuste poolt tellitud avalik teenus  - hulkuvate loomade püüdmine, püütud loomade 14 päeva hoidmine ja Tartu linna territooriumil hukkunud loomade avalikust ruumist eemaldamine.

Enamus omanikuta loomi viibib varjupaigas rohkem, kui 14 päeva - nende hoidmiseks on vaja toitu, ravimeid, hooldus- ja puhastusvahendeid. Samuti on kulukad erakorralise abi juhtumid, kus loom vajab näiteks trauma tõttu vältimatut operatiivset ravi, mille jaoks ühegi toetaja eelarves raha pole ette nähtud.
Hoiupaigad varjupaigas nõuavad remonti ja hoiutingimused parendamist.</p>

</div>


</section>

    <Footersecond />
  </div>
</template>

<script>
// @ is an alias to /src
import Footersecond from '@/components/Footersecond.vue';
import Navbarsecond from '@/components/Navbarsecond.vue';

export default {
  name: 'toetus',
  components: {
    Footersecond,
    Navbarsecond,
  },
};
</script>
