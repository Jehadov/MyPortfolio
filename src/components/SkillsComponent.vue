<template>
  <section class="container my-5 py-5 mb-5" id="SkillsSection">
    <h1 class="text-center mb-4 text-light mt-5">
      My <strong class="text-danger">Skills</strong>
    </h1>

    <div class="row justify-content-center g-4 mt-5">
      <div
        class="col-5 col-md-4 col-lg-2"
        v-for="(skill, index) in skills"
        :key="skill.name"
        :ref="el => skillRefs[index] = el"
      >
        <div
          class="card h-100 text-center shadow-sm skill-card"
          :class="[
            visibleCards[index]
              ? (index % 2 === 0 ? 'slide-in-top-left' : 'slide-in-bottom-right')
              : (index % 2 === 0 ? 'slide-out-top-left' : 'slide-out-bottom-right')
          ]"
        >
          <img
            :src="skill.image"
            :alt="skill.name"
            class="card-img-top p-3"
            style="height: 100px; object-fit: contain;"
          />
          <div class="card-body">
            <h5 class="card-title text-light">{{ skill.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: 'SkillsComponent',
  data() {
    return {
      skills: [],
      skillRefs: [],
      visibleCards: [],
    };
  },
  async mounted() {
    await this.fetchSkills();
    this.$nextTick(() => {
      this.observeCards();
    });
  },
  methods: {
    async fetchSkills() {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      this.skills = querySnapshot.docs.map(doc => doc.data());
      this.visibleCards = new Array(this.skills.length).fill(false);
    },
    observeCards() {
      this.skillRefs.forEach((el, index) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            this.visibleCards[index] = entry.isIntersecting;
          },
          { threshold: 0.3 }
        );
        if (el) observer.observe(el);
      });
    },
  },
};
</script>

<style scoped>
.skill-card {
  transition: transform 0.6s ease, opacity 0.6s ease;
  border-radius: 15px;
  border: 1px solid rgb(164, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transform: translate(0, 0);
}

/* Slide IN animations */
.slide-in-top-left {
  opacity: 1;
  transform: translate(0, 0); /* reset to normal */
}

.slide-in-bottom-right {
  opacity: 1;
  transform: translate(0, 0); /* reset to normal */
}

/* Slide OUT animations */
.slide-out-top-left {
  opacity: 0;
  transform: translate(-40px, -40px);
}

.slide-out-bottom-right {
  opacity: 0;
  transform: translate(40px, 40px);
}

/* On hover */
.skill-card:hover {
  transform: scale(1.05);
}

/* Mobile */
@media (max-width: 576px) {
  .skill-card {
    padding: 10px;
  }
  .card-title {
    font-size: 0.95rem;
  }
}
</style>
