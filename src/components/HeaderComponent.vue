<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand text-light fs-2" href="#">
          <strong class="text-danger">Jehadov</strong>
        </a>
        <button class="navbar-toggler text-light bg-danger" type="button" @click="toggleSidebar">
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div :class="['custom-sidebar', { 'show': sidebarVisible }]" id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item" v-for="link in links" :key="link.name">
              <a
                class="nav-link custom-underline ms-2 red"
                :href="link.href"
                @click="closeSidebar"
                :class="{ active: currentSection === link.name }"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="backdrop" v-if="sidebarVisible" @click="closeSidebar"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['currentSection'],
  data() {
    return {
      sidebarVisible: false,
      links: [
        { name: 'Home', href: '#Homesection' },
        { name: 'About', href: '#Aboutsection' },
        { name: 'Portfolio', href: '#Portfoliosection' },
        { name: 'Skills', href: '#SkillsSection' },
        { name: 'Contact', href: '#Conract' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    closeSidebar() {
      this.sidebarVisible = false;
    },
  },
};
</script>

<style scoped>
.custom-sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  height: 100vh;
  width: 250px;
  background-color: #212529;
  z-index: 1050;
  transition: right 0.3s ease-in-out;
  padding-top: 60px;
}
.custom-sidebar.show {
  right: 0;
}
@media (min-width: 992px) {
  .custom-sidebar {
    position: static !important;
    height: auto;
    width: auto;
    background-color: transparent;
    padding-top: 0;
    right: 0 !important;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.custom-underline {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.custom-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 4px;
  background-image: radial-gradient(circle at 1px 2px, #dc3545 1px, transparent 0);
  background-size: 6px 6px;
  background-repeat: repeat-x;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
}
.custom-underline:hover::after {
  transform: scaleX(1);
}

.red {
  color: white;
  font-family: sans-serif;
  font-weight: bolder;
}
.red:hover {
  color: #dc3545;
}

.nav-link.active {
  color: #dc3545 !important;
  border-bottom: 2px solid #dc3545;
}
</style>
