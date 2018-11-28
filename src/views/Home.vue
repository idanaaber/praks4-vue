<template>
  <div class="home">
    <Navbar />
    <div class="content">

    <section class="wooden">
    <div class="kontakttekst">
    <h1> Kontakt </h1>
    </div>

    <div class="box">
    <p>Grigoriaitab@hot.ee</p>
    <p>+372 52 67 849</p>
    </div>

    <div class="liitu">
        <h2> Liitu uudiskirjaga </h2>
    </div>

    <div class="epost">
        <h2> E-post </h2>
    </div>

    <div class="joinme">
    <h3> Saada </h3>
    </div>

    <div class="clearfix"></div>

    <section class="social">
    <p> Sotsiaalvõrgustikes näete meie tegevusi </p>
    <div class="clearfix"></div>
                <i class="icon ion-logo-googleplus gp"></i>
                <i class="icon ion-logo-facebook fb"></i>
                <i class="icon ion-logo-twitter tw"></i>
    </section>

    </section>

  <section class="location">
      <div id="maps">
         <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.6054081752854!2d26.71191935169235!3d58.34945819614565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3747db90ed05%3A0x387b666bb555e743!2sKopli+1%2C+50115+Tartu!5e0!3m2!1sen!2see!4v1540967788421" width="100%" height="100%" style="border:0" allowfullscreen></iframe>
      </div>
    <div class="loco">
    <h1> Asukoht </h1>
    <h2> Grigori kodutud MTÜ </h2>
    <h2> Väänaviti tee 69a, Männamaa, 6780 </h2>
    <h2> Varjupaik on avatud 12.00 - 19.00 </h2>
    </div>
  </section>
      </div>
    <Footer />
 </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>
