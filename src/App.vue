<template>
  <div id="app" class="page-background d-flex flex-column min-vh-100">
    <HeaderComponent :current-section="currentSection" />

    <!-- Main content -->
    <main class="flex-grow-1">
      <div id="Homesection" ref="Homesection">
        <HomeSection />
      </div>
      <div id="Aboutsection" class="scroll-slide-in" v-scroll-reveal ref="Aboutsection">
        <AboutSection />
      </div>
      <div id="Portfoliosection" ref="Portfoliosection">
        <PortfolioSection />
      </div>
      <div id="SkillsSection" ref="SkillsSection">
        <SkillsComponent />
      </div>
    </main>
    <div id="Conract" ref="Conract">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import SkillsComponent from './components/SkillsComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    HomeSection,
    AboutSection,
    PortfolioSection,
    SkillsComponent,
  },
  data() {
    return {
      currentSection: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.detectSection);
    this.detectSection(); // call initially
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.detectSection);
  },
  methods: {
    detectSection() {
      const sectionIds = ['Homesection', 'Aboutsection', 'Portfoliosection', 'SkillsSection', 'Conract'];
      let maxVisibleArea = 0;
      let mostVisibleSection = '';

      sectionIds.forEach((id) => {
        const el = this.$refs[id];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleArea && visibleHeight > 50) {
          maxVisibleArea = visibleHeight;
          mostVisibleSection = id;
        }
      });

      this.currentSection = this.mapSectionIdToName(mostVisibleSection);
    },

    mapSectionIdToName(id) {
      switch (id) {
        case 'Homesection':
          return 'Home';
        case 'Aboutsection':
          return 'About';
        case 'Portfoliosection':
          return 'Portfolio';
        case 'SkillsSection':
          return 'Skills';
        case 'Conract':
          return 'Contact';
        default:
          return '';
      }
    },
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
      },
    },
  },
};
</script>

<style>
html,
body {
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

@media (max-width: 768px) {
  .page-background {
    background-size: contain;
    background-position: top;
    background-attachment: scroll;
  }
}

* {
  color: white;
  font-family: 'Roboto', sans-serif;
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

.scroll-slide-in {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-slide-in.visible {
  opacity: 1;
  transform: translateX(0);
}

.scroll-slide-in-out {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

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
