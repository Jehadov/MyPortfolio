<template>
  <footer class="custom-footer text-light">
    <div class="container py-5">
      <div class="row gy-4 align-items-start justify-content-between">
        <!-- Branding -->
        <div class="col-12 col-md-4">
          <h3 class="fw-bold mb-3 text-danger">Jehad Taha</h3>
          <p class="text-muted small">
            Passionate about tech, cloud, and solving real-world problems.
          </p>
        </div>

        <!-- Contact Info -->
        <div class="col-12 col-md-4">
          <h5 class="fw-bold mb-3 text-white">Contact</h5>
          <ul class="list-unstyled small">
            <li class="mb-2">
              <a href="tel:+962790730270" class="footer-link">
                <i class="fas fa-phone-alt me-2 text-danger"></i> +962 7-9073-0270
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:jehad.taha@outlook.com" class="footer-link">
                <i class="fas fa-envelope me-2 text-danger"></i> jehad.taha@outlook.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/+962790730270" target="_blank" class="footer-link">
                <i class="fab fa-whatsapp me-2 text-danger"></i> WhatsApp Me
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="col-12 col-md-3">
          <h5 class="fw-bold mb-3 text-white">Follow Me</h5>
          <div class="d-flex gap-3">
            <a href="https://github.com/Jehadov" target="_blank" class="icon-link" title="GitHub">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/jehad-taha-2543562b2" target="_blank" class="icon-link" title="LinkedIn">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/taha_jehad/" target="_blank" class="icon-link" title="Instagram">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com/share/1FHUTSyEfq/" target="_blank" class="icon-link" title="Facebook">
              <i class="fab fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary" />

      <div class="text-center small text-muted">
        © {{ new Date().getFullYear() }} Designed & Developed by Jehad Taha
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-footer {
  background: #121212;
  border-top: 2px solid #dc3545;
  font-family: 'Segoe UI', sans-serif;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #dc3545;
}

.icon-link {
  color: #ccc;
  transition: color 0.3s ease, transform 0.3s ease;
}

.icon-link:hover {
  color: #dc3545;
  transform: scale(1.2);
}
</style>
