<template>
  <div class="kodutudloomad">
    <Navbarsecond />
    
    <section class="eestiekspress">
      <div class="kadunud">
      <img class="profile-img" src="../assets/dog.jpg" alt="An image of pet in shelter">
      <p> Tema on kadunud </p>
      </div>

      <div class="kadunud2">
      <img class="profile-img" src="../assets/dog.jpg" alt="An image of pet in shelter">
      <p> Tema on kadunud </p>  
      </div>

      <form class="wannabemylove">
<ul class="form-style-1">
    
    <li>
      <h1> Kadunud/leitud loomast teavitamine </h1>
        <label>E-post <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        <label>Subject</label>
        <select name="field4" class="field-select">
        <option value="#">Leitud</option>
        <option value="#">Kadunud</option>
        </select>
    </li>
    <li>

        <label>Kadunud/leitud looma kirjeldus<span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
      <label for="file-upload" class="custom-file-upload">
    Lae loomast pilt
</label>
<input id="file-upload" type="file"/>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>


    </section>
  

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
