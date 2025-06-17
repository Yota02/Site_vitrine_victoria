<template>
  <section class="modules-list">
    <div class="section-header">
      <h2>Modules de Développement</h2>
      <p class="section-subtitle">Architecture modulaire pour une IA conversationnelle complète</p>
    </div>
    
    <div class="filter-tabs">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        @click="activeFilter = filter.value"
        :class="['filter-tab', { active: activeFilter === filter.value }]"
      >
        {{ filter.label }}
      </button>
    </div>
    
    <div class="modules-grid">
      <div 
        v-for="module in filteredModules" 
        :key="module.id"
        class="module-card"
        :class="{ 'completed': module.completed, 'priority': module.priority }"
      >
        <div class="module-header">
          <div class="module-title-section">
            <h3>{{ module.name }}</h3>
            <div class="module-badges">
              <span v-if="module.completed" class="status-badge completed">
                <span class="badge-icon">✓</span>
                Terminé
              </span>
              <span v-else-if="module.progress > 0" class="status-badge in-progress">
                <span class="badge-icon">⚡</span>
                En cours
              </span>
              <span v-else class="status-badge planned">
                <span class="badge-icon">📋</span>
                Planifié
              </span>
              <span v-if="module.priority" class="priority-badge">
                <span class="badge-icon">🔥</span>
                Priorité
              </span>
            </div>
          </div>
          <div class="module-icon">{{ module.icon }}</div>
        </div>
        
        <p class="module-description">{{ module.description }}</p>
        
        <div class="module-progress">
          <div class="progress-header">
            <span>Progression</span>
            <span class="progress-percentage">{{ module.progress }}%</span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: module.progress + '%' }"
            ></div>
          </div>
          <div class="progress-details">
            <span class="time-estimate">{{ module.timeEstimate }}</span>
            <span class="last-update">{{ module.lastUpdate }}</span>
          </div>
        </div>
        
        <div class="module-features">
          <h4>Fonctionnalités clés:</h4>
          <ul>
            <li v-for="feature in module.features" :key="feature" class="feature-item">
              <span class="feature-icon">→</span>
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="module-tech">
          <h4>Technologies:</h4>
          <div class="tech-tags">
            <span v-for="tech in module.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="module-actions">
          <button class="action-btn primary" :disabled="module.progress === 0">
            <span class="btn-icon">👁️</span>
            Voir Détails
          </button>
          <button class="action-btn secondary" :disabled="module.completed">
            <span class="btn-icon">📊</span>
            Statistiques
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Terminés', value: 'completed' },
  { label: 'En cours', value: 'in-progress' },
  { label: 'Planifiés', value: 'planned' }
]

// Données des modules enrichies
const modules = [
  {
    id: 1,
    name: 'Traitement du Langage Naturel',
    icon: '🧠',
    progress: 85,
    completed: false,
    priority: true,
    description: 'Analyse et compréhension du langage humain pour une communication naturelle et contextuelle.',
    features: ['Analyse syntaxique avancée', 'Reconnaissance d\'entités nommées', 'Analyse de sentiment multi-niveau', 'Tokenisation intelligente'],
    technologies: ['Python', 'spaCy', 'Transformers', 'BERT'],
    timeEstimate: '2-3 semaines restantes',
    lastUpdate: 'Il y a 2 jours'
  },
  {
    id: 2,
    name: 'Reconnaissance Vocale',
    icon: '🎤',
    progress: 70,
    completed: false,
    priority: false,
    description: 'Conversion de la parole en texte avec haute précision et adaptation multi-locuteurs.',
    features: ['Reconnaissance multi-langues', 'Suppression de bruit adaptatif', 'Adaptation au locuteur', 'Traitement temps réel'],
    technologies: ['TensorFlow', 'WebRTC', 'Whisper', 'PyTorch'],
    timeEstimate: '3-4 semaines restantes',
    lastUpdate: 'Il y a 1 jour'
  },
  {
    id: 3,
    name: 'Génération de Réponses',
    icon: '💬',
    progress: 100,
    completed: true,
    priority: false,
    description: 'Système de génération de réponses contextuelles et pertinentes avec personnalité adaptative.',
    features: ['Réponses contextuelles', 'Ton adaptatif', 'Cohérence conversationnelle', 'Personnalisation utilisateur'],
    technologies: ['GPT-4', 'LangChain', 'FastAPI', 'Redis'],
    timeEstimate: 'Terminé',
    lastUpdate: 'Il y a 1 semaine'
  },
  {
    id: 4,
    name: 'Apprentissage Contextuel',
    icon: '🎯',
    progress: 45,
    completed: false,
    priority: true,
    description: 'Amélioration continue basée sur les interactions utilisateur et l\'historique conversationnel.',
    features: ['Mémoire conversationnelle', 'Adaptation comportementale', 'Apprentissage incrémental', 'Préférences utilisateur'],
    technologies: ['MLflow', 'MongoDB', 'Kafka', 'scikit-learn'],
    timeEstimate: '5-6 semaines restantes',
    lastUpdate: 'Il y a 3 jours'
  },
  {
    id: 5,
    name: 'Interface Utilisateur',
    icon: '🖥️',
    progress: 90,
    completed: false,
    priority: false,
    description: 'Interface intuitive et responsive pour une expérience utilisateur optimale sur tous les appareils.',
    features: ['Design responsive', 'Chat en temps réel', 'Notifications push', 'Personnalisation UI'],
    technologies: ['Vue.js', 'Socket.io', 'Tailwind', 'PWA'],
    timeEstimate: '1 semaine restante',
    lastUpdate: 'Il y a 6 heures'
  }
]

const filteredModules = computed(() => {
  switch (activeFilter.value) {
    case 'completed':
      return modules.filter(m => m.completed)
    case 'in-progress':
      return modules.filter(m => !m.completed && m.progress > 0)
    case 'planned':
      return modules.filter(m => m.progress === 0)
    default:
      return modules
  }
})
</script>

<style scoped>
.modules-list {
  margin-bottom: 4rem;
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-tab:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.filter-tab.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.module-card {
  background: var(--color-background-soft);
  border: 2px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.module-card::before {
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

.module-card:hover::before {
  opacity: 1;
}

.module-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.15);
  border-color: var(--color-primary-light);
}

.module-card.completed {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.03);
}

.module-card.priority {
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.03);
}

.module-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.module-title-section h3 {
  color: var(--color-heading);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.module-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.status-badge, .priority-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.completed {
  background: #22c55e;
  color: white;
}

.status-badge.in-progress {
  background: var(--color-primary);
  color: white;
}

.status-badge.planned {
  background: var(--color-background-mute);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.priority-badge {
  background: #f59e0b;
  color: white;
}

.badge-icon {
  font-size: 0.9rem;
}

.module-icon {
  font-size: 3rem;
  opacity: 0.8;
}

.module-description {
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1rem;
}

.module-progress {
  margin-bottom: 2rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.progress-percentage {
  color: var(--color-primary);
  font-size: 1.1rem;
}

.progress-bar {
  background: var(--color-background-mute);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.progress-fill {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-soft));
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.8;
}

.module-features {
  margin-bottom: 2rem;
}

.module-features h4, .module-tech h4 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.module-features ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  padding: 0.5rem 0;
}

.feature-icon {
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.1rem;
}

.module-tech {
  margin-bottom: 2rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.module-actions {
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn.primary {
  background: var(--color-primary);
  color: white;
}

.action-btn.primary:hover:not(:disabled) {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
}

.action-btn.secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.action-btn.secondary:hover:not(:disabled) {
  background: var(--color-primary-light);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .modules-grid {
    grid-template-columns: 1fr;
  }
  
  .module-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .module-icon {
    align-self: center;
    font-size: 2.5rem;
  }
  
  .filter-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .action-btn {
    font-size: 0.9rem;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .module-actions {
    flex-direction: column;
  }
  
  .module-badges {
    justify-content: flex-start;
  }
  
  .progress-details {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
