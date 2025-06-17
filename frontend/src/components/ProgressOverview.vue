<template>
  <section class="progress-overview">
    <div class="section-header">
      <h2>Tableau de Bord du Projet</h2>
      <p class="section-subtitle">Suivi en temps réel de l'avancement de VictorIA</p>
    </div>
    
    <div class="progress-stats">
      <div class="stat-card featured">
        <div class="card-icon">📊</div>
        <div class="stat-number">{{ overallProgress }}%</div>
        <div class="stat-label">Progression Globale</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: overallProgress + '%' }"></div>
        </div>
        <div class="trend-indicator positive">
          <span class="trend-arrow">↗</span>
          <span>+5% cette semaine</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">✅</div>
        <div class="stat-number">{{ completedModules }}</div>
        <div class="stat-label">Modules Terminés</div>
        <div class="stat-detail">sur {{ totalModules }} modules</div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">⚡</div>
        <div class="stat-number">{{ activeModules }}</div>
        <div class="stat-label">Modules Actifs</div>
        <div class="stat-detail">en développement</div>
      </div>
      
      <div class="stat-card">
        <div class="card-icon">🎯</div>
        <div class="stat-number">{{ upcomingModules }}</div>
        <div class="stat-label">Modules Prévus</div>
        <div class="stat-detail">prochainement</div>
      </div>
    </div>
    
    <div class="additional-stats">
      <div class="mini-stat">
        <div class="mini-stat-icon">🔥</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">15</div>
          <div class="mini-stat-label">Jours d'activité</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">💡</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">47</div>
          <div class="mini-stat-label">Fonctionnalités</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">🚀</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">99.9%</div>
          <div class="mini-stat-label">Disponibilité</div>
        </div>
      </div>
      
      <div class="mini-stat">
        <div class="mini-stat-icon">⭐</div>
        <div class="mini-stat-content">
          <div class="mini-stat-number">4.9</div>
          <div class="mini-stat-label">Note moyenne</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Données simulées - à remplacer par vos vraies données
const modules = [
  { name: 'Traitement du Langage Naturel', progress: 85, completed: false },
  { name: 'Reconnaissance Vocale', progress: 70, completed: false },
  { name: 'Génération de Réponses', progress: 100, completed: true },
  { name: 'Apprentissage Contextuel', progress: 45, completed: false },
  { name: 'Interface Utilisateur', progress: 90, completed: false }
]

const totalModules = computed(() => modules.length)
const completedModules = computed(() => modules.filter(m => m.completed).length)
const activeModules = computed(() => modules.filter(m => !m.completed && m.progress > 0).length)
const upcomingModules = computed(() => modules.filter(m => m.progress === 0).length)
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
