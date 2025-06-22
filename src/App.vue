<template>
  <div id="app" class="page-background d-flex flex-column min-vh-100">
    <HeaderComponent />

    <!-- Main content goes here -->
    <main class="flex-grow-1">
      <div>
        <HomeSection />
      </div>
      <div class="scroll-slide-in" v-scroll-reveal>
        <AboutSection />
      </div>
      <div>
        <PortfolioSection />
      </div>
      <div>
        <SkillsComponent />
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import SkillsComponent from './components/SkillsComponent.vue'



export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomeSection,
    AboutSection,
    PortfolioSection,
    SkillsComponent
  },
  directives: {
    scrollReveal: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('visible');
            } else {
              el.classList.remove('visible');
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      }
    }
  }
}
</script>


<style>
html, body {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-background {
  background-image: url('https://wallpapercave.com/wp/wp2757874.gif');
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

/* Optional: make it even more responsive on small screens */
@media (max-width: 768px) {
  .page-background {
    background-size: contain;
    background-position: top;
    background-attachment: scroll;
  }
}

/* Base styles */
* {
  color: white;
  font-family: "Roboto", sans-serif;
}

.fontsizeandhover {
  font-size: medium;
}

.fontsizeandhover:hover {
  color: #dc3545;
}

.text-center {
  text-align: center;
  align-self: center;
}

.t-center {
  text-align: center;
}

.btn:hover {
  background: #dc3545;
}

.text-danger:hover {
  scale: 0.9;
}

.hero-section {
  background-size: auto 100%;
  background-position: right;
  background-repeat: no-repeat;
  color: #fff;
  padding: 100px 0;
  text-align: center;
}

.hero-image {
  text-align: right;
}

.img-fluid {
  max-width: 100%;
  height: 400px;
}

.card-img {
  width: 100%;
  height: 160px;
}

/* Animation styles for scroll */
.scroll-slide-in {
  opacity: 0;
  transform: translateX(-100px); /* Start from the left */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-slide-in.visible {
  opacity: 1;
  transform: translateX(0); /* Slide to its final position */
}

.scroll-slide-in-out {
  opacity: 0;
  transform: translateX(100px); /* Slide out to the right */
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

/* Optional: Add an animation effect when content is fully loaded */
.underline {
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #dc3545;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

.underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.im1 {
  animation-name: immg1;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
}

@keyframes immg1 {
  0% {
    translate: 0 40px;
  }
  50% {
    translate: 0 -40px;
  }
  100% {
    translate: 0 40px;
  }
}
</style>
