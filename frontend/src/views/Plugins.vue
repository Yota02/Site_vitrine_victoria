<template>
  <div class="plugins">
    <div class="hero-section">
      <div class="container">
        <h1>Plugins en Développement</h1>
        <p class="hero-subtitle">Découvrez nos plugins spécialisés pour différents domaines créatifs et utilitaires</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <!-- Filtres par statut -->
        <div class="filters-section">
          <h3>Filtrer par statut :</h3>
          <div class="status-filters">
            <button 
              class="filter-btn" 
              :class="{ active: statusFilter === 'all' }"
              @click="statusFilter = 'all'"
            >
              Tous ({{ availablePlugins.length }})
            </button>
            <button 
              class="filter-btn" 
              :class="{ active: statusFilter === 'completed' }"
              @click="statusFilter = 'completed'"
            >
              Terminés ({{ completedPlugins.length }})
            </button>
            <button 
              class="filter-btn" 
              :class="{ active: statusFilter === 'development' }"
              @click="statusFilter = 'development'"
            >
              En développement ({{ developmentPlugins.length }})
            </button>
          </div>
        </div>

        <div class="plugins-grid">
          <div 
            class="plugin-card" 
            v-for="plugin in filteredPlugins" 
            :key="plugin.id"
          >
            <div class="plugin-banner">
              <div class="plugin-icon">
                <img :src="plugin.image" :alt="`Icône ${plugin.name}`" />
              </div>
              <!-- Badge de statut -->
              <div class="status-badge" :class="plugin.status">
                <span class="status-icon">{{ plugin.status === 'completed' ? '✅' : '🚧' }}</span>
                <span class="status-text">{{ plugin.status === 'completed' ? 'Terminé' : 'En développement' }}</span>
              </div>
            </div>
            <div class="plugin-content">
              <h3 class="plugin-name">{{ plugin.name }}</h3>
              <p class="plugin-description">{{ plugin.description }}</p>
              
              <!-- Barre de progression pour les plugins en développement -->
              <div v-if="plugin.status === 'development'" class="progress-section">
                <div class="progress-label">
                  <span>Progression</span>
                  <span class="progress-percentage">{{ plugin.progress }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: plugin.progress + '%' }"></div>
                </div>
              </div>
              
              <div class="plugin-features">
                <span v-for="feature in plugin.features" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
              <div class="plugin-footer">
                <span class="plugin-category">{{ plugin.category }}</span>
              </div>
              <div class="plugin-actions">
                <router-link :to="`/plugin/${plugin.slug}`" class="btn-details">
                  Voir les détails
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const statusFilter = ref('all')

const availablePlugins = ref([
  {
    id: 1,
    name: "Plugin Émotion",
    slug: "emotion",
    description: "L'IA simule et affiche des émotions de manière expressive",
    icon: "😊",
    image: emotionImg,
    category: "Psychologie",
    features: ["Simulation d'émotions", "Affichage expressif", "Réactions émotionnelles"],
    status: "completed",
    /* status: "development",
    progress: 85 */
  },
  {
    id: 2,
    name: "Plugin Chant",
    slug: "chant",
    description: "L'IA peut chanter des chansons et créer des performances vocales",
    icon: "🎤",
    image: chantImg,
    category: "Créatif",
    features: ["Chant par l'IA", "Performance vocale", "Interprétation musicale"],
    /* status: "completed", */
    status: "development",
    progress: 0
  },
  {
    id: 3,
    name: "Plugin Gaming",
    slug: "gaming",
    description: "L'IA peut jouer à différents jeux vidéo et défier les utilisateurs",
    icon: "🎮",
    image: gamingImg,
    category: "Divertissement",
    features: ["Jeu par l'IA", "Stratégies adaptatives", "Défis multijoueurs"],
    status: "development",
    progress: 0
  },
  {
    id: 4,
    name: "Plugin Peinture",
    slug: "peinture",
    description: "L'IA peut créer des œuvres d'art et peindre dans différents styles",
    icon: "🎨",
    image: peintureImg,
    category: "Créatif",
    features: ["Peinture par l'IA", "Styles artistiques", "Création d'œuvres"],
    /* status: "completed", */
    status: "development",
    progress: 0
  },
  {
    id: 5,
    name: "Plugin Météo",
    slug: "meteo",
    description: "L'IA vous informe de la météo du jour et de la semaine avec conscience du temps qu'il fait",
    icon: "🌤️",
    image: meteoImg,
    category: "Utilitaire",
    features: ["Annonce météo par l'IA", "Prévisions personnalisées", "Conscience climatique"],
    /* status: "completed", */
    status: "development",
    progress: 40
  },
  {
    id: 6,
    name: "Plugin Calendrier",
    slug: "calendrier",
    description: "Gestion intelligente du temps et planification automatisée",
    icon: "📅",
    image: calendrierImg,
    category: "Productivité",
    features: ["Planification IA", "Rappels intelligents", "Optimisation d'agenda"],
    /* status: "completed", */
    status: "development",
    progress: 0
  },
  {
    id: 7,
    name: "Plugin Convertisseur",
    slug: "convertisseur",
    description: "Conversion universelle d'unités, devises et formats",
    icon: "🔄",
    image: convertisseurImg,
    category: "Utilitaire",
    features: ["Multi-devises", "Unités physiques", "Formats de fichiers"],
    /* status: "completed", */
    status: "development",
    progress: 0
  },
  {
    id: 8,
    name: "Plugin Rêve",
    slug: "reve",
    description: "L'IA fait des rêves et gère sa mémoire à travers des expériences oniriques",
    icon: "💭",
    image: reveImg,
    category: "Bien-être",
    features: ["Rêves de l'IA", "Gestion mémoire", "Expériences oniriques"],
    /* status: "completed", */
    status: "development",
    progress: 45
  },
  {
    id: 9,
    name: "Plugin Musique",
    slug: "musique",
    description: "L'IA peut jouer a des instruments et lire des partitions musicales",
    icon: "🎵",
    image: musiqueImg,
    category: "Créatif",
    features: ["Jeu au instruments", "Lecture de partitions", "Interprétation musicale"],
    /* status: "completed", */
    status: "development",
    progress: 60
  },
])

const filteredPlugins = computed(() => {
  if (statusFilter.value === 'all') return availablePlugins.value
  return availablePlugins.value.filter(plugin => plugin.status === statusFilter.value)
})

const completedPlugins = computed(() => 
  availablePlugins.value.filter(plugin => plugin.status === 'completed')
)

const developmentPlugins = computed(() => 
  availablePlugins.value.filter(plugin => plugin.status === 'development')
)
</script>

<style scoped>
.plugins {
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

.filters-section {
  margin-bottom: 3rem;
  text-align: center;
}

.filters-section h3 {
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.status-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.filter-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.plugin-card {
  background: var(--color-background-soft);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.plugin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
}

.plugin-banner {
  background: var(--color-background-mute);
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  overflow: hidden;
  position: relative;
}

.plugin-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0;
  background: none;
  backdrop-filter: none;
  padding: 0;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

.plugin-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  border-radius: 0;
  filter: none;
}

.status-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.status-badge.completed {
  background: rgba(34, 197, 94, 0.9);
  color: white;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
}

.status-badge.development {
  background: rgba(251, 191, 36, 0.9);
  color: white;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
}

.status-icon {
  font-size: 1rem;
}

.progress-section {
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(251, 191, 36, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-heading);
}

.progress-percentage {
  color: var(--color-primary);
  font-weight: 700;
}

.progress-bar {
  background: var(--color-background-mute);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s ease;
}

.plugin-content {
  padding: 2rem;
}

.plugin-name {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.plugin-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.plugin-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-background-mute);
  color: var(--color-text);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.plugin-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plugin-category {
  padding: 0.25rem 0.75rem;
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.plugin-actions {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

.btn-details {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  text-align: center;
  width: 100%;
}

.btn-details:hover {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
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
  
  .plugins-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .plugin-banner {
    min-height: 100px;
  }
  
  .plugin-icon {
    padding: 0;
  }
  
  .plugin-content {
    padding: 1.5rem;
  }
  
  .status-filters {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .filter-btn {
    width: 100%;
    max-width: 250px;
  }
  
  .status-badge {
    top: 8px;
    right: 8px;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .progress-section {
    margin: 1rem 0;
    padding: 0.8rem;
  }
  
  .plugin-features {
    gap: 0.4rem;
  }
  
  .feature-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-section {
    padding: 1.5rem 0.75rem;
  }
  
  .content {
    padding: 1.5rem 0.75rem;
  }
  
  .plugin-content {
    padding: 1.25rem;
  }
  
  .plugin-name {
    font-size: 1.2rem;
  }
  
  .plugin-description {
    font-size: 0.9rem;
  }
  
  .filters-section h3 {
    font-size: 1.1rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .status-badge {
    position: static;
    margin-bottom: 0.5rem;
    align-self: flex-start;
  }
  
  .plugin-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
    min-height: 80px;
  }
  
  .plugin-icon {
    position: relative;
    width: 100%;
    height: 60px;
  }
  
  .plugin-icon img {
    height: 60px;
    object-fit: contain;
  }
}

@media (max-width: 360px) {
  .hero-section h1 {
    font-size: 1.5rem;
  }
  
  .plugin-content {
    padding: 1rem;
  }
  
  .feature-tag {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }
  
  .btn-details {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
}
</style>