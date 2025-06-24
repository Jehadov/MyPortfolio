<template>
  <section class="about-section">
    <div class="container">
      <h1 class="text-center text-light mb-5">
        <strong class="text-danger">About</strong> Me
      </h1>

      <div class="row align-items-center justify-content-center">
        <!-- Animated Image -->
        <div
          class="col-12 col-md-5 mb-4 mb-md-0 text-center animate-slide-left"
          ref="imageRef"
        >
          <img
            src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
            alt="About Image"
            class="img-fluid about-img"
          />
        </div>

        <!-- Animated Text Content -->
        <div
          class="col-12 col-md-7 text-light animate-slide-right"
          ref="textRef"
        >
          <p class="lead mb-3">
            I’m a computer engineer with a deep passion for solving real-world problems through technology. My focus is on creating practical, efficient solutions that make a difference.
          </p>
          <p class="mb-3">
            My tech journey began at Yarmouk University, where I studied Computer Engineering. Since then, I’ve been actively building and contributing to a range of projects that reflect both creativity and technical strength.
          </p>
          <p class="mb-3">
            I’ve developed strong skills in programming with languages like C, C++, C#, and web technologies such as HTML, CSS, and Bootstrap. I’ve also explored frameworks like ASP.Net Core, Vue, and Angular, worked with databases, and dived into cloud platforms to build scalable applications.
          </p>
          <p>
            I'm always learning—whether it's new tools, better practices, or different ways to think. I value teamwork, innovation, and the process of turning ideas into impactful digital experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  mounted() {
    this.observeElement(this.$refs.imageRef);
    this.observeElement(this.$refs.textRef);
  },
  methods: {
    observeElement(el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    },
  },
};
</script>

<style scoped>
.about-section {
  padding: 80px 0;
  background-color: #111111b9;
}
html {
  scroll-behavior: smooth;
}

.about-img {
  max-height: 300px;
  border-radius: 20px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
}

.about-img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
}

/* Base animation states */
.animate-slide-left,
.animate-slide-right {
  opacity: 0;
  transform: translateX(20px) scale(0.8);
  transition: all 1s ease;
}

.animate-slide-left {
  transform: translateX(-80px) scale(0.8);
}

/* Visible animation */
.animate-slide-left.visible,
.animate-slide-right.visible {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Text styling */
p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .about-section {
    padding: 40px 20px;
  }

  .about-img {
    max-height: 220px;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
