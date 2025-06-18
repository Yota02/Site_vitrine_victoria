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
        <div class="plugins-grid">
          <div 
            class="plugin-card" 
            v-for="plugin in availablePlugins" 
            :key="plugin.id"
          >
            <div class="plugin-banner">
              <div class="plugin-icon">
                <img :src="plugin.image" :alt="`Icône ${plugin.name}`" />
              </div>
            </div>
            <div class="plugin-content">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  transition: all 0.2s ease;
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
}
</style>