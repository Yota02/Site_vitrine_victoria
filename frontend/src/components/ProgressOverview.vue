<template>
  <section class="progress-overview">
    <div class="section-header">
      <h2>Performance & Capacités</h2>
      <p class="section-subtitle">Surveillance en temps réel de votre IA locale VictorIA</p>
    </div>
    
    <div class="progress-stats">
      <div class="stat-card featured">
        <div class="card-icon">🎯</div>
        <div class="stat-number">{{ overallProgress }}%</div>
        <div class="stat-label">Fonctionnalités Actives</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: overallProgress + '%' }"></div>
        </div>
        <div class="trend-indicator positive">
          <span class="trend-arrow">↗</span>
          <span>+12% ce mois-ci</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">⚡</div>
        <div class="stat-number">{{ responseTime }}ms</div>
        <div class="stat-label">Temps de Réponse</div>
        <div class="stat-detail">moyenne locale</div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">🛠️</div>
        <div class="stat-number">{{ activePlugins }}</div>
        <div class="stat-label">Plugins Actifs</div>
        <div class="stat-detail">sur {{ totalPlugins }} disponibles</div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">💾</div>
        <div class="stat-number">{{ memoryUsage }}MB</div>
        <div class="stat-label">Mémoire Utilisée</div>
        <div class="stat-detail">optimisé pour local</div>
      </div>
    </div>
    
    <div class="additional-stats">
      <div class="mini-stat">
        <div class="mini-stat-icon">🔒</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">100%</div>
          <div class="mini-stat-label">Confidentialité</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">🏠</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">0</div>
          <div class="mini-stat-label">Connexions externes</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">⚡</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">{{ processingSpeed }}</div>
          <div class="mini-stat-label">Requêtes/sec</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">🎯</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">{{ accuracy }}%</div>
          <div class="mini-stat-label">Précision globale</div>
        </div>
      </div>
    </div>
    
    <div class="performance-indicators">
      <div class="indicator-card">
        <div class="indicator-header">
          <h3>🔋 Efficacité Énergétique</h3>
          <span class="indicator-status excellent">Excellente</span>
        </div>
        <p>VictorIA est optimisé pour fonctionner efficacement sur votre machine locale sans surcharger votre système.</p>
      </div>
      
      <div class="indicator-card">
        <div class="indicator-header">
          <h3>🛡️ Sécurité & Confidentialité</h3>
          <span class="indicator-status excellent">Maximale</span>
        </div>
        <p>Aucune donnée transmise vers l'extérieur. Tout le traitement s'effectue localement sur votre ordinateur.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

// Données simulées pour l'IA locale
const modules = [
  { name: 'Traitement du Langage Naturel', progress: 95, completed: true },
  { name: 'Reconnaissance Vocale', progress: 85, completed: false },
  { name: 'Génération de Réponses', progress: 100, completed: true },
  { name: 'Apprentissage Contextuel', progress: 75, completed: false },
  { name: 'Interface Utilisateur', progress: 90, completed: false }
]

// Métriques de performance
const responseTime = ref(45)
const memoryUsage = ref(245)
const processingSpeed = ref(127)
const accuracy = ref(94)
const totalPlugins = ref(9)
const activePlugins = ref(7)

const overallProgress = computed(() => {
  const total = modules.reduce((sum, module) => sum + module.progress, 0)
  return Math.round(total / modules.length)
})
</script>

<style scoped>
.progress-overview {
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  color: var(--color-heading);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-soft));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: var(--color-text);
  font-size: 1.1rem;
  opacity: 0.8;
}

.progress-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-soft));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.15);
  border-color: var(--color-primary-light);
}

.stat-card.featured {
  background: linear-gradient(135deg, var(--color-primary-light), rgba(59, 130, 246, 0.05));
  border: 2px solid var(--color-primary);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.stat-detail {
  color: var(--color-text);
  font-size: 0.9rem;
  opacity: 0.7;
}

.progress-bar {
  background: var(--color-background-mute);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem 0;
}

.progress-fill {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-soft));
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
  animation: progressAnimation 2s ease-in-out;
}

@keyframes progressAnimation {
  from { width: 0; }
}

.trend-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 20px;
  margin-top: 1rem;
}

.trend-indicator.positive {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
}

.trend-arrow {
  font-weight: bold;
}

.additional-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.mini-stat {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.mini-stat:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 64, 175, 0.1);
}

.mini-stat-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.mini-stat-content {
  flex: 1;
}

.mini-stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.mini-stat-label {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
}

.performance-indicators {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.indicator-card {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.indicator-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
}

.indicator-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.indicator-header h3 {
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.indicator-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.indicator-status.excellent {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.indicator-card p {
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .progress-stats {
    grid-template-columns: 1fr;
  }
  
  .additional-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .performance-indicators {
    grid-template-columns: 1fr;
  }
  
  .indicator-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .additional-stats {
    grid-template-columns: 1fr;
  }
  
  .mini-stat {
    flex-direction: column;
    text-align: center;
  }
}
</style>
