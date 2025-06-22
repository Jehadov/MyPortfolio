<template>
  <section id="Homesection" class="py-3 text-light">
    <div class="hero-section">
      <div class="container position-relative">

        <!-- Hero Content -->
        <div class="text-center mb-5">
          <h1
            ref="mainHeading"
            :class="{ 'scroll-hidden-title': !headingVisible, 'scroll-visible-title': headingVisible }"
            class="transition-title"
          >
            <strong>Welcome</strong> to <strong class="text-danger">My Website</strong>
          </h1>
        </div>

        <div class="row align-items-center flex-column-reverse flex-md-row">
          <!-- Text -->
          <div
            ref="textBlock"
            :class="{ 'scroll-hidden': !textVisible, 'scroll-visible': textVisible }"
            class="col-md-6 mt-5  text-center text-md-start transition-scroll"
          >
            <h1 class="fw-bold">Hi, I'm <span class="text-danger">Jehad Taha</span></h1>
            <h3>
              <span class="text-danger">I'm a </span>
              <span id="typed-text" class="typed-text"></span>
            </h3>
            <button
              class="btn btn-danger mt-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#Sidebar"
            >
              Learn More
            </button>
          </div>

          <!-- Image -->
          <div
            ref="imageBlock"
            :class="{ 'scroll-hidden-Img': !imageVisible, 'scroll-visible-Img': imageVisible }"
            class="col-md-6 text-center cute-image-wrapper transition-scroll mb-4 mb-md-0"
          >
            <img
              src="https://i.postimg.cc/ncGTqBQy/Clipped-image-20250420-170145.png"
              class="img-fluid cute-image"
              alt="Hero Image"
              style="max-height: 250px"
            />
          </div>
        </div>

      </div>

      <!-- Sidebar -->
      <div
        class="offcanvas offcanvas-start text-bg-dark"
        id="Sidebar"
        style="background-image: url('https://wallpapercave.com/wp/wp2757874.gif'); background-size: cover;"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-danger">Information</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Welcome to my personal portfolio. This space is designed to present my projects, showcase my skills, and share a bit about who I am.
          </p>
          <p>
            My journey began at Yarmouk University, where I studied Computer Engineering and developed a strong interest in programming.
          </p>
          <p>
            Feel free to explore and discover more about me and the work I'm passionate about.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: "HomeSection",
  data() {
    return {
      textVisible: false,
      imageVisible: false,
      headingVisible: false, // ✅ Now it’s correctly declared
      titles: [],
    };
  },
  async mounted() {
    await this.loadTitles();
    this.typeTitle();
    this.observeScroll(this.$refs.textBlock, "textVisible");
    this.observeScroll(this.$refs.imageBlock, "imageVisible");
    this.observeScroll(this.$refs.mainHeading, "headingVisible"); // ✅ This now runs correctly
  },
  methods: {
    async loadTitles() {
      const snapshot = await getDocs(collection(db, 'titles'));
      this.titles = snapshot.docs.map(doc => doc.data().title);
    },
    typeTitle() {
      let index = 0;
      let charIndex = 0;
      const typedText = document.getElementById("typed-text");
      const type = () => {
        if (!this.titles.length) return;
        if (charIndex < this.titles[index].length) {
          typedText.textContent += this.titles[index].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 1500);
        }
      };
      const erase = () => {
        if (charIndex > 0) {
          typedText.textContent = this.titles[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          index = (index + 1) % this.titles.length;
          setTimeout(type, 200);
        }
      };
      type();
    },
    observeScroll(element, dataProperty) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this[dataProperty] = entry.isIntersecting;
        });
      }, { threshold: 0.3 });
      observer.observe(element);
    },
  },
};
</script>


<style scoped>
.bg-dark {
  background-color: #111 !important;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding-top: 40px;
}

.transition-scroll {
  transition: opacity 0.6s ease, transform 1s ease;
}
.scroll-hidden {
  opacity: 0;
  transform: translateY(60px);
}
.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-hidden-Img {
  opacity: 0;
  transform: translateX(-100px);
}
.scroll-visible-Img {
  opacity: 1;
  transform: translateX(0);
}

.cute-image-wrapper {
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(255, 182, 193, 0.2);
}
.cute-image {
  border-radius: 16px;
  transition: transform 0.4s ease;
}
.cute-image:hover {
  transform: scale(1.05);
}
.transition-title {
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.scroll-hidden-title {
  opacity: 0;
  transform: translateY(-40px);
}
.scroll-visible-title {
  opacity: 1;
  transform: translateY(0);
}


@media (max-width: 576px) {
  .cute-image {
    max-height: 180px;
  }
  h2 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  .btn {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
}
</style>
