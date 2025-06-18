<template>
  <section class="modules-list">
    <div class="section-header">
      <h2>Plugins & Capacités Utilitaires</h2>
      <p class="section-subtitle">Des outils IA spécialisés qui fonctionnent 100% en local pour préserver votre confidentialité</p>
    </div>
    
    <div class="utility-highlights">
      <div class="highlight-item">
        <div class="highlight-icon">🔒</div>
        <div class="highlight-content">
          <h3>Confidentialité Absolue</h3>
          <p>Tous les traitements s'effectuent sur votre machine. Vos données personnelles ne quittent jamais votre ordinateur.</p>
        </div>
      </div>
      
      <div class="highlight-item">
        <div class="highlight-icon">⚡</div>
        <div class="highlight-content">
          <h3>Performance Optimale</h3>
          <p>Aucune latence réseau, traitement instantané adapté à votre matériel pour une expérience fluide.</p>
        </div>
      </div>
      
      <div class="highlight-item">
        <div class="highlight-icon">🛠️</div>
        <div class="highlight-content">
          <h3>Outils Spécialisés</h3>
          <p>Chaque plugin est conçu pour une tâche spécifique : productivité, créativité, analyse, communication.</p>
        </div>
      </div>
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
                Opérationnel
              </span>
              <span v-else-if="module.progress > 0" class="status-badge in-progress">
                <span class="badge-icon">⚡</span>
                En développement
              </span>
              <span v-else class="status-badge planned">
                <span class="badge-icon">📋</span>
                Planifié
              </span>
              <span v-if="module.isCore" class="core-badge">
                <span class="badge-icon">⭐</span>
                Essentiel
              </span>
            </div>
          </div>
          <div class="module-icon">{{ module.icon }}</div>
        </div>
        
        <p class="module-description">{{ module.description }}</p>
        
        <div class="utility-focus">
          <h4>💡 Cas d'usage pratiques:</h4>
          <ul class="use-cases">
            <li v-for="useCase in module.useCases" :key="useCase">
              <span class="use-case-icon">→</span>
              {{ useCase }}
            </li>
          </ul>
        </div>
        
        <div class="module-progress">
          <div class="progress-header">
            <span>État de développement</span>
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
            <span class="performance-info">{{ module.performanceInfo }}</span>
          </div>
        </div>
        
        <div class="module-tech">
          <h4>🔧 Technologies:</h4>
          <div class="tech-tags">
            <span v-for="tech in module.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="module-actions">
          <button class="action-btn primary" :disabled="module.progress === 0">
            <span class="btn-icon">🔍</span>
            {{ module.completed ? 'Utiliser' : 'Aperçu' }}
          </button>
          <button class="action-btn secondary" :disabled="!module.completed">
            <span class="btn-icon">📊</span>
            Performance
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
  { label: 'Tous les outils', value: 'all' },
  { label: 'Opérationnels', value: 'completed' },
  { label: 'En développement', value: 'in-progress' },
  { label: 'Essentiels', value: 'core' }
]

// Modules mis à jour avec focus utilitaire
const modules = [
  {
    id: 1,
    name: 'Assistant Textuel Intelligent',
    icon: '✍️',
    progress: 100,
    completed: true,
    priority: false,
    isCore: true,
    description: 'Aide à la rédaction, correction, reformulation et amélioration de tous vos textes avec une IA locale.',
    useCases: [
      'Correction orthographique et grammaticale',
      'Réécriture et amélioration de style',
      'Résumé automatique de documents',
      'Génération de contenu personnalisé'
    ],
    technologies: ['Transformers', 'spaCy', 'NLTK', 'Local LLM'],
    timeEstimate: 'Opérationnel',
    performanceInfo: 'Traitement: <50ms'
  },
  {
    id: 2,
    name: 'Transcription Vocale Locale',
    icon: '🎤',
    progress: 85,
    completed: false,
    priority: true,
    isCore: true,
    description: 'Convertit votre voix en texte instantanément, sans envoyer d\'audio vers internet.',
    useCases: [
      'Dictée de documents longs',
      'Transcription de réunions',
      'Prise de notes vocales',
      'Commandes vocales système'
    ],
    technologies: ['Whisper Local', 'WebRTC', 'PyTorch', 'ONNX'],
    timeEstimate: '2 semaines',
    performanceInfo: 'Temps réel: 1x vitesse'
  },
  {
    id: 3,
    name: 'Analyseur de Documents',
    icon: '📄',
    progress: 95,
    completed: true,
    priority: false,
    isCore: true,
    description: 'Analyse, extrait et résume le contenu de vos documents PDF, Word, Excel localement.',
    useCases: [
      'Extraction de données clés',
      'Résumé de rapports longs',
      'Analyse de contrats',
      'Classification automatique'
    ],
    technologies: ['PyPDF2', 'python-docx', 'pandas', 'scikit-learn'],
    timeEstimate: 'Opérationnel',
    performanceInfo: 'Documents: <2s'
  },
  {
    id: 4,
    name: 'Assistant Code & Développement',
    icon: '💻',
    progress: 75,
    completed: false,
    priority: true,
    isCore: false,
    description: 'Aide au développement avec suggestions de code, debugging et documentation automatique.',
    useCases: [
      'Génération de code personnalisé',
      'Détection et correction de bugs',
      'Création de documentation',
      'Optimisation de performance'
    ],
    technologies: ['Code-T5', 'Tree-sitter', 'AST', 'Local CodeLLM'],
    timeEstimate: '3-4 semaines',
    performanceInfo: 'Suggestions: <100ms'
  },
  {
    id: 5,
    name: 'Organisateur Personnel IA',
    icon: '📋',
    progress: 60,
    completed: false,
    priority: false,
    isCore: false,
    description: 'Gestion intelligente de vos tâches, calendrier et projets avec apprentissage de vos habitudes.',
    useCases: [
      'Planification automatique de tâches',
      'Rappels intelligents contextuels',
      'Priorisation adaptive',
      'Analyse de productivité'
    ],
    technologies: ['scikit-learn', 'pandas', 'SQLite', 'FastAPI'],
    timeEstimate: '4-5 semaines',
    performanceInfo: 'Sync: instantanée'
  }
]

const filteredModules = computed(() => {
  switch (activeFilter.value) {
    case 'completed':
      return modules.filter(m => m.completed)
    case 'in-progress':
      return modules.filter(m => !m.completed && m.progress > 0)
    case 'core':
      return modules.filter(m => m.isCore)
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

.utility-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
  border-color: var(--color-primary-light);
}

.highlight-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.highlight-content h3 {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.highlight-content p {
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
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

.core-badge {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
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

.utility-focus {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.utility-focus h4 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.use-cases {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.use-cases li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  padding: 0.5rem 0;
  font-weight: 500;
}

.use-case-icon {
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.1rem;
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
  flex-wrap: wrap;
  gap: 0.5rem;
}

.performance-info {
  color: var(--color-primary);
  font-weight: 600;
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
  
  .utility-highlights {
    grid-template-columns: 1fr;
  }
  
  .highlight-item {
    flex-direction: column;
    text-align: center;
  }
  
  .highlight-icon {
    align-self: center;
    font-size: 2.5rem;
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
