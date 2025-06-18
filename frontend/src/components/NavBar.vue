<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="navbar-container">
      <!-- Logo et titre -->
      <router-link to="/" class="navbar-brand" @click="closeMenu">
        <span class="brand-text">
          <img src="../assets/victoria_icone.png" alt="VictorIA Logo" class="brand-icon" />
          <span class="brand-name">VictorIA</span>
        </span>
      </router-link>

      <!-- Menu principal -->
      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-nav">
          <router-link 
            to="/" 
            class="nav-item" 
            @click="closeMenu"
            :class="{ 'active': $route.path === '/' }"
          >
            <div class="nav-icon-wrapper">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9.5L12 4l9 5.5v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <span class="nav-text">Accueil</span>
            <div class="nav-indicator"></div>
          </router-link>
          
          <router-link 
            to="/plugins" 
            class="nav-item" 
            @click="closeMenu"
            :class="{ 'active': $route.path.startsWith('/plugin') }"
          >
            <div class="nav-icon-wrapper">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="M21 15.5c-1.33 0-2.67-.5-3.5-1.33"/>
                <circle cx="15" cy="15" r="2"/>
              </svg>
            </div>
            <span class="nav-text">Plugins</span>
            <div class="nav-indicator"></div>
          </router-link>
          
          <router-link 
            to="/research" 
            class="nav-item" 
            @click="closeMenu"
            :class="{ 'active': $route.path === '/research' }"
          >
            <div class="nav-icon-wrapper">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
                <circle cx="11" cy="11" r="3"/>
              </svg>
            </div>
            <span class="nav-text">Recherches</span>
            <div class="nav-indicator"></div>
          </router-link>
          
          <router-link 
            to="/publications" 
            class="nav-item" 
            @click="closeMenu"
            :class="{ 'active': $route.path === '/publications' }"
          >
            <div class="nav-icon-wrapper">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <span class="nav-text">Publications</span>
            <div class="nav-indicator"></div>
          </router-link>
          
          <router-link 
            to="/contact" 
            class="nav-item" 
            @click="closeMenu"
            :class="{ 'active': $route.path === '/contact' }"
          >
            <div class="nav-icon-wrapper">
              <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span class="nav-text">Contact</span>
            <div class="nav-indicator"></div>
          </router-link>
        </div>
      </div>

      <!-- Menu burger pour mobile -->
      <button 
        class="navbar-burger" 
        @click="toggleMenu" 
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Menu de navigation"
        aria-expanded="false"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
    
    <!-- Overlay pour mobile -->
    <div 
      class="navbar-overlay" 
      :class="{ 'is-active': isMenuOpen }" 
      @click="closeMenu"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Empêche le scroll du body quand le menu est ouvert
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Reset body overflow
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 32px rgba(37, 99, 235, 0.08);
  border-bottom-color: rgba(37, 99, 235, 0.15);
}

.navbar.menu-open {
  background: rgba(255, 255, 255, 1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 70px;
  transition: height 0.3s ease;
}

.scrolled .navbar-container {
  height: 60px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--color-heading);
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 1001;
}

.navbar-brand:hover {
  transform: scale(1.02);
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  letter-spacing: -0.025em;
}

.brand-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-name {
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-soft));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary-light), rgba(37, 99, 235, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item:hover {
  color: var(--color-primary);
  transform: translateY(-2px);
}

.nav-item.active,
.nav-item.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-light);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}

.nav-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-item:hover .nav-icon-wrapper {
  background: rgba(37, 99, 235, 0.1);
}

.nav-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
  stroke-width: 2.5;
}

.nav-item:hover .nav-icon {
  transform: scale(1.1);
}

.nav-text {
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.nav-item.active .nav-indicator,
.nav-item.router-link-active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

.navbar-burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.75rem;
  gap: 4px;
  background: none;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1001;
}

.navbar-burger:hover {
  background: var(--color-background-soft);
}

.burger-line {
  width: 22px;
  height: 2px;
  background: var(--color-heading);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  transform-origin: center;
}

.navbar-burger.is-active .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.navbar-burger.is-active .burger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.navbar-burger.is-active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.navbar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.navbar-overlay.is-active {
  opacity: 1;
  visibility: visible;
}

/* Animation d'entrée */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-burger {
    display: flex;
  }
  
  .navbar-container {
    padding: 0 1rem;
    height: 60px;
  }

  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background);
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    overflow-y: auto;
  }

  .navbar-menu.is-active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 0.5rem;
    align-items: stretch;
  }

  .nav-item {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem 1.25rem;
    font-size: 1.1rem;
    border-radius: 16px;
  }

  .nav-item .nav-icon-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .nav-item .nav-icon {
    width: 20px;
    height: 20px;
  }

  .nav-indicator {
    display: none;
  }

  .brand-text {
    font-size: 1.2rem;
  }

  .brand-icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 0.75rem;
  }
  
  .brand-text {
    font-size: 1.1rem;
  }
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus visible pour l'accessibilité */
.nav-item:focus-visible,
.navbar-burger:focus-visible,
.navbar-brand:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
