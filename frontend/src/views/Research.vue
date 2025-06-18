<template>
  <div class="research">
    <div class="hero-section">
      <div class="container">
        <h1>Nos Recherches</h1>
        <p class="hero-subtitle">Exploration des frontières de l'intelligence artificielle conversationnelle</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="research-areas">
          <div class="research-card">
            <div class="card-icon">🧠</div>
            <h3>Traitement du Langage Naturel</h3>
            <p>Développement d'algorithmes avancés pour la compréhension et la génération de langage naturel.</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
            <span class="progress-text">85% complété</span>
          </div>
          
          <div class="research-card">
            <div class="card-icon">🎯</div>
            <h3>Apprentissage Contextuel</h3>
            <p>Méthodes d'apprentissage permettant à l'IA de s'adapter au contexte conversationnel.</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 45%"></div>
            </div>
            <span class="progress-text">45% complété</span>
          </div>
          
          <div class="research-card">
            <div class="card-icon">🔊</div>
            <h3>Reconnaissance Vocale</h3>
            <p>Systèmes de reconnaissance et de synthèse vocale multilingues haute précision.</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
            <span class="progress-text">70% complété</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Logique de la page si nécessaire
</script>

<style scoped>
.research {
  padding-top: 60px;
}

.hero-section {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.content {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.research-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.research-card h3 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.research-card p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.progress-bar {
  background: var(--color-background-mute);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  background: var(--color-primary);
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: var(--color-text);
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .content {
    padding: 2rem 1rem;
  }
  
  .research-areas {
    grid-template-columns: 1fr;
  }
}
</style>
