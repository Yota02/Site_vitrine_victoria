<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo et titre -->
      <router-link to="/" class="navbar-brand">
        <span class="brand-text">
          <img :src="logoUrl" alt="VictorIA Logo" class="brand-icon" />
          <span class="brand-name">VictorIA</span>
        </span>
      </router-link>

      <!-- Menu burger (mobile) -->
      <button 
        class="mobile-menu-toggle"
        :class="{ 'active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>

      <!-- Menu principal (desktop) -->
      <div class="navbar-menu desktop-menu">
        <div class="navbar-nav">
          <router-link 
            to="/" 
            class="nav-item" 
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
            to="/contact" 
            class="nav-item" 
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

      <!-- Menu mobile (overlay) -->
      <div 
        class="mobile-menu-overlay" 
        :class="{ 'active': isMobileMenuOpen }"
        @click="closeMobileMenu"
      ></div>
      
      <div class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
        <div class="mobile-nav">
          <router-link 
            to="/" 
            class="mobile-nav-item" 
            :class="{ 'active': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            <div class="mobile-nav-icon-wrapper">
              <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9.5L12 4l9 5.5v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <span class="mobile-nav-text">Accueil</span>
          </router-link>
          
          <router-link 
            to="/plugins" 
            class="mobile-nav-item" 
            :class="{ 'active': $route.path.startsWith('/plugin') }"
            @click="closeMobileMenu"
          >
            <div class="mobile-nav-icon-wrapper">
              <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="M21 15.5c-1.33 0-2.67-.5-3.5-1.33"/>
                <circle cx="15" cy="15" r="2"/>
              </svg>
            </div>
            <span class="mobile-nav-text">Plugins</span>
          </router-link>
          
          <router-link 
            to="/research" 
            class="mobile-nav-item" 
            :class="{ 'active': $route.path === '/research' }"
            @click="closeMobileMenu"
          >
            <div class="mobile-nav-icon-wrapper">
              <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
                <circle cx="11" cy="11" r="3"/>
              </svg>
            </div>
            <span class="mobile-nav-text">Recherches</span>
          </router-link>
          
          <router-link 
            to="/contact" 
            class="mobile-nav-item" 
            :class="{ 'active': $route.path === '/contact' }"
            @click="closeMobileMenu"
          >
            <div class="mobile-nav-icon-wrapper">
              <svg class="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span class="mobile-nav-text">Contact</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logoImage from '/victoria_icone.png'

const logoUrl = logoImage

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Empêcher le scroll du body quand le menu est ouvert
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Fermer le menu mobile quand on change de route
const handleRouteChange = () => {
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Nettoyer au démontage
})

// Watcher pour fermer le menu quand on change de route
import { watch } from 'vue'
watch(() => route.path, handleRouteChange)
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

/* Menu burger */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  transition: all 0.3s ease;
}

.burger-line {
  width: 20px;
  height: 2px;
  background: var(--color-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.burger-line:not(:last-child) {
  margin-bottom: 4px;
}

.mobile-menu-toggle.active .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}

.mobile-menu-toggle.active .burger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-menu-toggle.active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Menu desktop */
.desktop-menu {
  display: block;
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

/* Menu mobile */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(37, 99, 235, 0.1);
}

.mobile-menu.active {
  right: 0;
}

.mobile-nav {
  padding: 80px 0 2rem 0;
  display: flex;
  flex-direction: column;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(37, 99, 235, 0.05);
}

.mobile-nav-item:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.mobile-nav-item.active {
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-left: 4px solid var(--color-primary);
}

.mobile-nav-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.1);
  flex-shrink: 0;
}

.mobile-nav-icon {
  width: 20px;
  height: 20px;
  stroke-width: 2.5;
}

.mobile-nav-text {
  flex: 1;
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
.navbar-brand:focus-visible,
.mobile-menu-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Media queries pour le responsive */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .navbar-container {
    padding: 0 1rem;
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
  
  .brand-icon {
    width: 22px;
    height: 22px;
  }
  
  .mobile-menu {
    width: 100%;
    max-width: 320px;
  }
  
  .mobile-nav-item {
    padding: 1.2rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .navbar-container {
    padding: 0 0.5rem;
  }
  
  .brand-text {
    font-size: 1rem;
  }
  
  .brand-name {
    display: none;
  }
  
  .mobile-menu {
    width: 100%;
  }
  
  .mobile-nav-item {
    padding: 1rem;
    font-size: 0.95rem;
  }
}

/* Gestion de l'orientation landscape sur mobile */
@media screen and (max-height: 500px) and (orientation: landscape) {
  .navbar-container {
    height: 50px;
  }
  
  .scrolled .navbar-container {
    height: 45px;
  }
  
  .mobile-nav {
    padding: 60px 0 1rem 0;
  }
  
  .mobile-nav-item {
    padding: 0.8rem 1.5rem;
  }
}
</style>