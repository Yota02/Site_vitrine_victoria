<template>
  <header class="project-header">
    <div class="hero-background">
      <!-- Image de fond fixe avec rotation -->
      <div class="background-image">
        <img 
          :src="currentImage" 
          alt="Background" 
          :class="{ 'fade-out': isTransitioning }"
          ref="backgroundImg"
        />
        <!-- Particules de bulles pour l'animation -->
        <div class="bubble-particles" ref="bubbleContainer"></div>
      </div>
    </div>
    <div class="container">
      <div class="header-content">
        <h1 class="title">VictorIA</h1>
        <p class="subtitle">Intelligence Artificielle Utilitaire</p>
        <p class="description">
          Découvrez VictorIA, votre assistant IA personnel qui fonctionne entièrement sur votre machine locale. 
          Aucune connexion internet requise, vos données restent privées et sécurisées chez vous.
        </p>
        
        <div class="key-benefits">
          <div class="benefit-item">
            <div class="benefit-icon">🔒</div>
            <div class="benefit-text">
              <strong>100% Privé</strong>
              <span>Vos données ne quittent jamais votre ordinateur</span>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
            <div class="benefit-text">
              <strong>Ultra Rapide</strong>
              <span>Traitement instantané sans latence réseau</span>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🛠️</div>
            <div class="benefit-text">
              <strong>Multi-Utilitaire</strong>
              <span>9 plugins spécialisés pour tous vos besoins</span>
            </div>
          </div>
        </div>
        
        <div class="header-stats">
          <div class="stat-item">
            <span class="stat-number">9</span>
            <span class="stat-label">Plugins Utilitaires</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0MB</span>
            <span class="stat-label">Données Envoyées</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">Local</span>
            <span class="stat-label">Fonctionnement</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">Utilisation</span>
          </div>
        </div>
      
        <div class="cta-buttons">
          <router-link to="/plugins" class="btn-primary">
            <span class="btn-icon">🔧</span>
            Découvrir les Outils
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// Import des images des plugins
import musiqueImg from '/icone_plugins/musique.png'
import chantImg from '/icone_plugins/chant.png'
import gamingImg from '/icone_plugins/gaming.png'
import peintureImg from '/icone_plugins/peinture.png'
import meteoImg from '/icone_plugins/meteo.png'
import calendrierImg from '/icone_plugins/calendrier.png'
import convertisseurImg from '/icone_plugins/convertisseur.png'
import reveImg from '/icone_plugins/reve.png'
import emotionImg from '/icone_plugins/emotion.png'

export default {
  name: 'ProjectHeader',
  data() {
    return {
      currentImageIndex: 0,
      isTransitioning: false,
      rotationTimer: null,
      silhouetteImages: [
        musiqueImg,
        chantImg,
        convertisseurImg,
        emotionImg,
        gamingImg,
        meteoImg,
        calendrierImg,
        peintureImg,
        reveImg
      ]
    }
  },
  computed: {
    currentImage() {
      return this.silhouetteImages[this.currentImageIndex];
    }
  },
  mounted() {
    this.startImageRotation();
  },
  beforeUnmount() {
    if (this.rotationTimer) {
      clearInterval(this.rotationTimer);
    }
  },
  methods: {
    startImageRotation() {
      this.rotationTimer = setInterval(() => {
        this.changeImage();
      }, 10000); // 10 secondes
    },
    
    changeImage() {
      this.isTransitioning = true;
      this.createBubbles();
      
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.silhouetteImages.length;
        this.isTransitioning = false;
      }, 1000);
    },
    
    createBubbles() {
      const container = this.$refs.bubbleContainer;
      if (!container) return;
      
      // Nettoyer les anciennes bulles
      container.innerHTML = '';
      
      // Créer 30 bulles
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Position aléatoire
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 20 + 5; // Taille entre 5px et 25px
        const delay = Math.random() * 0.5; // Délai jusqu'à 0.5s
        
        bubble.style.left = x + '%';
        bubble.style.top = y + '%';
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.animationDelay = delay + 's';
        
        container.appendChild(bubble);
        
        // Supprimer la bulle après l'animation
        setTimeout(() => {
          if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
          }
        }, 2000 + delay * 1000);
      }
    }
  }
}
</script>

<style scoped>
.project-header {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%);
  color: white;
  padding: 4rem 2rem 5rem 2rem; /* Réduction du padding-top de 5rem à 2rem */
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 65vh; /* Réduction de 70vh à 65vh */
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0) invert(1);
  opacity: 0.6;
  transition: opacity 1s ease-in-out;
}

.background-image img.fade-out {
  opacity: 0.2;
}

.bubble-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: bubbleFloat 2s ease-out forwards;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@keyframes bubbleFloat {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-100px) scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-200px) scale(0);
    opacity: 0;
  }
}

/* Masquer les anciens éléments animés */
.floating-elements,
.scrolling-silhouettes {
  display: none;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}

.description {
  font-size: 1.1rem;
  max-width: 700px;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.main-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.15);
  color: #15803d;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(34, 197, 94, 0.3);
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
}

.badge-icon {
  font-size: 1.2rem;
}

.key-benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
  max-width: 900px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.benefit-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.benefit-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.benefit-text strong {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
}

.benefit-text span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.header-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #fbbf24;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(34, 197, 94, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(34, 197, 94, 0.3);
  margin-bottom: 2rem;
  font-weight: 500;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  margin-right: 0.75rem;
  animation: pulse 2s infinite;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #1e40af;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.1rem;
}

.scrolling-silhouettes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  opacity: 0.06;
  pointer-events: none;
}

.silhouette-track {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8rem;
  white-space: nowrap;
  animation: scrollLeft 60s linear infinite;
}

.silhouette-track:first-child {
  top: 20%;
  left: 0;
}

.silhouette-track-reverse {
  top: 60%;
  right: 0;
  animation: scrollRight 45s linear infinite;
}

.silhouette {
  width: 120px;    /* Augmenté de 80px à 120px */
  height: 120px;   /* Augmenté de 80px à 120px */
  flex-shrink: 0;
  user-select: none;
  filter: blur(1px);
}

.silhouette img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@media (max-width: 768px) {
  .project-header {
    padding: 1.5rem 1rem 3rem 1rem; /* Réduction du padding pour mobile */
    min-height: 55vh; /* Réduction pour mobile */
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .key-benefits {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  .benefit-item {
    padding: 1rem;
  }
  
  .benefit-icon {
    font-size: 2rem;
  }
  
  .header-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  .floating-icon {
    width: 70px;   /* Augmenté de 40px à 70px */
    height: 70px;  /* Augmenté de 40px à 70px */
  }
  
  .silhouette {
    width: 80px;   /* Augmenté de 50px à 80px */
    height: 80px;  /* Augmenté de 50px à 80px */
  }
  
  .silhouette-track {
    gap: 4rem;
  }
}

@media (max-width: 480px) {
  .header-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .stat-item {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .silhouette {
    width: 60px;   /* Augmenté de 40px à 60px */
    height: 60px;  /* Augmenté de 40px à 60px */
  }
  
  .silhouette-track {
    gap: 3rem;
  }
}
</style>