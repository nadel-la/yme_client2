<script>
import Quotes from '../components/Quotes.vue'
import ProductView from './ProductView.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Quotes,
    ProductView,
    Footer
  }
}
</script>

<template>
  <div class="carousel relative container mx-auto" style="max-width: 1600px">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div class="carousel-item absolute opacity-0" style="height: 75vh">
        <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center">
          <video class="absolute top-0 left-0 w-full h-full object-cover z-0" autoplay muted loop>
            <source
              src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/website_hero_master_v2.mp4"
              type="video/mp4"
            />
          </video>
          <div class="container mx-auto relative z-10">
            <div
              class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
            >
              <h1 class="text-white text-6xl font-bold w my-4">
                Unlock Your Potential, Find The Best Mentor
              </h1>
              <RouterLink to="/mentors">
                <div
                  class="text-xl inline-block no-underline border-b border-yellow-600 leading-relaxed hover:text-white hover:border-white"
                  href="#"
                  style="color: white"
                >
                  Find Mentor
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!--Slide 2-->
    </div>
  </div>
  <!-- END HERO -->

  <!-- LOGO IMAGE -->
  <div
    class="carousel relative container my-auto mx-auto bg-black py-8 px-9"
    style="max-width: 1600px"
  >
    <div
      class="press-content block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center justify-around"
    >
      <div class="press-image">
        <img
          decoding="async"
          data-src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/NYT-Logo.png"
          class="lazyloaded"
          src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/NYT-Logo.png"
        /><noscript
          ><img
            decoding="async"
            src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/NYT-Logo.png"
        /></noscript>
      </div>
      <div class="press-image">
        <img
          decoding="async"
          data-src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/LAT-Logo.png"
          class="lazyloaded"
          src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/LAT-Logo.png"
        /><noscript
          ><img
            decoding="async"
            src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/LAT-Logo.png"
        /></noscript>
      </div>
      <div class="press-image">
        <img
          decoding="async"
          data-src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/USA-Today-Logo.png"
          class="lazyloaded"
          src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/USA-Today-Logo.png"
        /><noscript
          ><img
            decoding="async"
            src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/USA-Today-Logo.png"
        /></noscript>
      </div>
      <div class="press-image">
        <img
          decoding="async"
          data-src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/Dance-Media-Logo.png"
          class="lazyloaded"
          src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/Dance-Media-Logo.png"
        /><noscript
          ><img
            decoding="async"
            src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/press/Dance-Media-Logo.png"
        /></noscript>
      </div>
    </div>
  </div>

  <Quotes />
  <ProductView />
  <!-- About us -->
  <section class="bg-white py-8">
    <div class="container py-8 px-6 mx-auto">
      <a
        class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
        href="#"
      >
        About
      </a>

      <p class="mb-8 mt-4">
        Our website is a platform that facilitates finding the right mentor for your needs. We
        believe that a good mentor can help you achieve better life and career goals. Using the
        latest technology, we connect you with quality mentors who have experience and expertise in
        the field you're interested in. We also provide features to help you choose the right
        mentor, such as reviews from previous users and customizable search criteria based on your
        needs. We hope to help you develop yourself and reach your full potential through good
        mentorship.
      </p>
    </div>
  </section>

  <!-- TESTIMONI -->
  <section class="text-gray-600 body-font dance-students-section bg-black">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12 section-title" style="color: white">
        What our student are saying
      </h1>
      <div class="dance-student-carousel" style="color: white">
        <div class="slick-slide">
          <div class="student-container">
            <div class="dance-student">
              <div class="student-image">
                <img
                  src="https://d22g5lrmqfbqur.cloudfront.net/assets/clistudios_homepage_dark/dance_students/Kennedy.webp"
                  alt="Kennedy T."
                  class="rounded-full w-20 h-20 object-cover mx-auto"
                />
              </div>
              <div class="student-feedback text-center mt-8">
                <p class="text-lg font-medium mb-4">
                  Yme Studios classes have helped me grow in picking up choreography while learning
                  from some of the best choreographers in the business!
                </p>
                <p class="text-lg font-medium">Kennedy T.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END TESTIMONI  -->

  <!-- FOOTER -->
  <Footer />
</template>

<style>
.poppin-sans {
  font-family: 'Poppins Sans', sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
.press-image {
  width: 200px;
}

.rounded-t-lg img {
  height: 200px;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
