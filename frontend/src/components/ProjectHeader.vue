<template>
  <header class="project-header">
    <div class="hero-background">
      <div class="floating-elements">
        <div class="floating-icon">🤖</div>
        <div class="floating-icon">💬</div>
        <div class="floating-icon">🧠</div>
        <div class="floating-icon">⚡</div>
      </div>
    </div>
    <div class="container">
      <div class="header-content">
        <h1 class="title">VictorIA</h1>
        <p class="subtitle">Intelligence Artificielle Conversationnelle de Nouvelle Génération</p>
        <p class="description">
          Découvrez l'avenir de l'IA conversationnelle avec VictorIA, une plateforme révolutionnaire 
          qui transforme la façon dont nous interagissons avec l'intelligence artificielle.
        </p>
        <div class="header-stats">
          <div class="stat-item">
            <span class="stat-number">9</span>
            <span class="stat-label">Plugins</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">95%</span>
            <span class="stat-label">Précision</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Disponible</span>
          </div>
        </div>
        <div class="status-badge">
          <span class="status-indicator"></span>
          Système Opérationnel
        </div>
        <div class="cta-buttons">
          <router-link to="/plugins" class="btn-primary">Découvrir les Plugins</router-link>
          <router-link to="/contact" class="btn-secondary">Nous Contacter</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.project-header {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
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

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
  opacity: 0.3;
}

.floating-icon:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.floating-icon:nth-child(2) {
  top: 60%;
  right: 15%;
  animation-delay: 1.5s;
}

.floating-icon:nth-child(3) {
  bottom: 30%;
  left: 20%;
  animation-delay: 3s;
}

.floating-icon:nth-child(4) {
  top: 30%;
  right: 25%;
  animation-delay: 4.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
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

.header-stats {
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
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

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@media (max-width: 768px) {
  .project-header {
    padding: 3rem 1rem;
    min-height: 60vh;
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
  
  .header-stats {
    gap: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
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
    font-size: 2rem;
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
}
</style>
