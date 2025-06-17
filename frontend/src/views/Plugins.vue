<template>
  <div class="plugins">
    <div class="hero-section">
      <div class="container">
        <h1>Plugins de Développement</h1>
        <p class="hero-subtitle">Découvrez nos plugins spécialisés pour différents domaines créatifs et utilitaires</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="selection-summary" v-if="selectedPlugins.length > 0">
          <h3>Plugins sélectionnés ({{ selectedPlugins.length }})</h3>
          <div class="selected-tags">
            <span v-for="plugin in selectedPlugins" :key="plugin.id" class="selected-tag">
              {{ plugin.name }}
              <button @click="deselectPlugin(plugin.id)" class="remove-btn">×</button>
            </span>
          </div>
          <button @click="confirmSelection" class="confirm-btn">Confirmer la sélection</button>
        </div>

        <div class="plugins-grid">
          <div 
            class="plugin-card" 
            v-for="plugin in availablePlugins" 
            :key="plugin.id"
            :class="{ 'selected': isSelected(plugin.id) }"
          >
            <div class="plugin-header">
              <div class="plugin-icon">
                <img :src="plugin.image" :alt="`Icône ${plugin.name}`" />
              </div>
              <div class="plugin-status">
                <input 
                  type="checkbox" 
                  :checked="isSelected(plugin.id)"
                  @click.stop
                  @change="togglePlugin(plugin)"
                >
              </div>
            </div>
            <h3 class="plugin-name">{{ plugin.name }}</h3>
            <p class="plugin-description">{{ plugin.description }}</p>
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
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedPluginIds = ref([])

const availablePlugins = ref([
  {
    id: 1,
    name: "Plugin Musique",
    slug: "musique",
    description: "Création, composition et analyse musicale assistée par IA",
    icon: "🎵",
    image: "./src/assets/icone_plugins/musique.png",
    category: "Créatif",
    features: ["Composition automatique", "Analyse harmonique", "Génération de mélodies"]
  },
  {
    id: 2,
    name: "Plugin Chant",
    slug: "chant",
    description: "Analyse vocale et assistance pour l'amélioration du chant",
    icon: "🎤",
    image: "./src/assets/icone_plugins/chant.png",
    category: "Créatif",
    features: ["Analyse de la voix", "Correction de pitch", "Exercices vocaux"]
  },
  {
    id: 3,
    name: "Plugin Gaming",
    slug: "gaming",
    description: "Outils de développement et d'assistance pour les jeux vidéo",
    icon: "🎮",
    image: "./src/assets/icone_plugins/gaming.png",
    category: "Divertissement",
    features: ["IA de jeu", "Génération de niveaux", "Analytics de gameplay"]
  },
  {
    id: 4,
    name: "Plugin Peinture",
    slug: "peinture",
    description: "Assistance créative pour la peinture digitale et traditionnelle",
    icon: "🎨",
    image: "./src/assets/icone_plugins/peinture.png",
    category: "Créatif",
    features: ["Palette de couleurs", "Styles artistiques", "Critiques constructives"]
  },
  {
    id: 5,
    name: "Plugin Météo",
    slug: "meteo",
    description: "Prévisions météorologiques avancées et analyses climatiques",
    icon: "🌤️",
    image: "./src/assets/icone_plugins/meteo.png",
    category: "Utilitaire",
    features: ["Prévisions précises", "Alertes météo", "Analyse climatique"]
  },
  {
    id: 6,
    name: "Plugin Calendrier",
    slug: "calendrier",
    description: "Gestion intelligente du temps et planification automatisée",
    icon: "📅",
    image: "./src/assets/icone_plugins/calendrier.png",
    category: "Productivité",
    features: ["Planification IA", "Rappels intelligents", "Optimisation d'agenda"]
  },
  {
    id: 7,
    name: "Plugin Convertisseur",
    slug: "convertisseur",
    description: "Conversion universelle d'unités, devises et formats",
    icon: "🔄",
    image: "./src/assets/icone_plugins/convertisseur.png",
    category: "Utilitaire",
    features: ["Multi-devises", "Unités physiques", "Formats de fichiers"]
  },
  {
    id: 8,
    name: "Plugin Rêve",
    slug: "reve",
    description: "Analyse et interprétation des rêves avec IA",
    icon: "💭",
    image: "./src/assets/icone_plugins/reve.png",
    category: "Bien-être",
    features: ["Interprétation symbolique", "Journal de rêves", "Analyse psychologique"]
  },
  {
    id: 9,
    name: "Plugin Émotion",
    slug: "emotion",
    description: "Reconnaissance et analyse des émotions en temps réel",
    icon: "😊",
    image: "./src/assets/icone_plugins/emotion.png",
    category: "Psychologie",
    features: ["Détection faciale", "Analyse vocale", "Suivi émotionnel"]
  }
])

const selectedPlugins = computed(() => {
  return availablePlugins.value.filter(plugin => 
    selectedPluginIds.value.includes(plugin.id)
  )
})

const isSelected = (pluginId) => {
  return selectedPluginIds.value.includes(pluginId)
}

const togglePlugin = (plugin) => {
  const index = selectedPluginIds.value.indexOf(plugin.id)
  if (index > -1) {
    selectedPluginIds.value.splice(index, 1)
  } else {
    selectedPluginIds.value.push(plugin.id)
  }
}

const deselectPlugin = (pluginId) => {
  const index = selectedPluginIds.value.indexOf(pluginId)
  if (index > -1) {
    selectedPluginIds.value.splice(index, 1)
  }
}

const confirmSelection = () => {
  if (selectedPlugins.value.length > 0) {
    alert(`Vous avez sélectionné ${selectedPlugins.value.length} plugin(s) :\n${selectedPlugins.value.map(p => p.name).join('\n')}`)
  }
}
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

.selection-summary {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.selection-summary h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.selected-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
}

.remove-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
}

.confirm-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.confirm-btn:hover {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
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
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.plugin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
}

.plugin-card.selected {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.plugin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.plugin-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-background-mute);
  padding: 0.5rem;
}

.plugin-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.plugin-status input[type="checkbox"] {
  width: 20px;
  height: 20px;
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

.plugin-image {
  margin-top: 1rem;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
}

.plugin-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.plugin-card:hover .plugin-image img {
  transform: scale(1.05);
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
  }
  
  .selected-tags {
    flex-direction: column;
  }
  
  .plugin-icon {
    width: 60px;
    height: 60px;
  }
}
</style>
