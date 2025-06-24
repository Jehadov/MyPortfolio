<template>
  <section class="py-5 text-white">
    <div class="text-center mb-5">
      <h1 class="titles">
        <strong>Po<strong class="text-danger">rtfo</strong>lio</strong>
      </h1>
      <p class="lead">A showcase of my latest projects and works</p>
    </div>

    <div class="container">
      <div class="row gy-4 justify-content-center">
        <div
          v-for="(project, index) in projects"
          :key="index"
          ref="projectRefs"
          :class="['col-12 col-sm-10 col-md-6 col-lg-4', { 'visible': visibleCards[index] }]"
        >
          <div class="card bg-dark border-0 shadow project-card h-100 scale-anim">
            <img :src="project.image" alt="Project" class="card-img-top custom-img" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-danger">{{ project.title }}</h5>
              <p class="card-text text-light flex-grow-1">{{ project.description }}</p>
              <button
                type="button"
                class="btn btn-outline-danger mt-2"
                data-bs-toggle="modal"
                :data-bs-target="'#modal' + index"
              >
                More Info
              </button>
            </div>
          </div>

          <!-- Modal -->
          <div class="modal fade" :id="'modal' + index" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content bg-dark text-white border-0">
                <div class="modal-header border-0">
                  <h5 class="modal-title">{{ project.title }}</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <img
                    :src="project.image"
                    class="img-fluid rounded modal-project-image"
                    alt="Project Detail"
                  />
                  <p class="mt-3">{{ project.modalContent }}</p>

                  <div v-if="project.tech && project.tech.length" class="mb-3">
                    <strong>Technologies:</strong>
                    <span
                      v-for="(tag, tagIndex) in project.tech"
                      :key="tagIndex"
                      class="badge bg-secondary me-1"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <div class="d-flex gap-2 flex-wrap">
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      class="btn btn-sm btn-outline-light"
                    >
                      GitHub
                    </a>
                    <a
                      v-if="project.demo"
                      :href="project.demo"
                      target="_blank"
                      class="btn btn-sm btn-outline-danger"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Modal -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default {
  name: 'PortfolioSection',
  setup() {
    const projects = ref([]);
    const projectRefs = ref([]);
    const visibleCards = ref([]);

    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        projects.value = querySnapshot.docs.map(doc => doc.data());
        visibleCards.value = new Array(projects.value.length).fill(false);
        await nextTick();
        observeCards();
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    const observeCards = () => {
      projectRefs.value.forEach((el, index) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            visibleCards.value[index] = entry.isIntersecting;
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
      });
    };

    onMounted(fetchProjects);

    return { projects, visibleCards, projectRefs };
  }
};
</script>

<style scoped>
.titles {
  font-size: 2.5rem;
}

.project-card {
  transition: transform 0.4s ease, opacity 0.4s ease;
  border-radius: 12px;
  opacity: 0;
  transform: scale(0);
}

.visible .project-card {
  opacity: 1;
  transform: scale(1);
}

.custom-img {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.modal-project-image {
  max-height: 300px;
  width: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

@media (max-width: 576px) {
  .titles {
    font-size: 1.8rem;
  }

  .custom-img {
    height: 180px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .btn {
    font-size: 0.85rem;
  }

  .modal-project-image {
    max-height: 200px;
  }
}

@media (max-width: 768px) {
  .modal-project-image {
    max-height: 300px;
  }
}
</style>
