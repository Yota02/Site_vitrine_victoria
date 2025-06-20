<template>
  <div class="plugin-detail" v-if="plugin">
    <div class="hero-section">
      <div class="hero-background-icon">
        <img :src="plugin.image" :alt="`Icône ${plugin.name}`" />
      </div>
      <div class="container">
        <div class="plugin-hero">
          <h1>{{ plugin.name }}</h1>
          <p class="hero-subtitle">{{ plugin.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="plugin-content">
          <div class="main-content">
            <section class="overview">
              <h2>Vue d'ensemble</h2>
              <p>{{ plugin.overview }}</p>
            </section>
            
            <section class="features-detail">
              <h2>Fonctionnalités détaillées</h2>
              <div class="features-grid">
                <div v-for="feature in plugin.detailedFeatures" :key="feature.name" class="feature-item">
                  <div class="feature-icon">{{ feature.icon }}</div>
                  <h3>{{ feature.name }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </section>
            
            <section class="technical-specs">
              <h2>Spécifications techniques</h2>
              <div class="specs-grid">
                <div class="spec-item" v-for="spec in plugin.technicalSpecs" :key="spec.label">
                  <strong>{{ spec.label }}:</strong> {{ spec.value }}
                </div>
              </div>
            </section>
            
            <!-- <section class="use-cases">
              <h2>Cas d'usage</h2>
              <div class="use-cases-list">
                <div v-for="useCase in plugin.useCases" :key="useCase.title" class="use-case">
                  <h3>{{ useCase.title }}</h3>
                  <p>{{ useCase.description }}</p>
                </div>
              </div>
            </section> -->
          </div>
          
          <div class="sidebar">
            <div class="info-card">
              <h3>Informations</h3>
              <div class="info-item">
                <strong>Version:</strong> {{ plugin.version }}
              </div>
              <div class="info-item">
                <strong>Dernière mise à jour:</strong> {{ plugin.lastUpdate }}
              </div>
              <div class="info-item">
                <strong>Développeur:</strong> {{ plugin.developer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="error">
    <div class="container">
      <h1>Plugin non trouvé</h1>
      <p>Le plugin demandé n'existe pas.</p>
      <router-link to="/plugins" class="btn-back">Retour aux plugins</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()

const pluginsData = {
  musique: {
    id: 9,
    name: "Plugin Musique",
    description: "Victoria peut jouer a des instruments et lire des partitions musicales",
    icon: "🎵",
    image: musiqueImg,
    category: "Créatif",
    version: "0.1.0",
    lastUpdate: "16 Juin 2025",
    developer: "NeoNekoTech",
    status: "development",
    progress: 60,
    overview: "Notre plugin Musique utilise l'intelligence artificielle pour révolutionner la création musicale. L'IA peut jouer différents instruments et interpréter des partitions musicales avec une précision remarquable.",
    detailedFeatures: [
      {
        name: "Jeu aux instruments",
        icon: "🎹",
        description: "Victoria peut jouer virtuellement différents instruments de musique avec une technique avancée."
      },
      {
        name: "Lecture de partitions",
        icon: "🎼",
        description: "Interprétation et lecture automatique de partitions musicales dans différents formats."
      },
    ],
    technicalSpecs: [
      { label: "Formats supportés", value: "MIDI, WAV, MP3, FLAC" },
      { label: "Instruments virtuels", value: "Piano / Violon" },
    ],
    useCases: [
      {
        title: "Compositeurs professionnels",
        description: "Accélérez votre processus créatif avec des suggestions harmoniques intelligentes et des arrangements automatiques."
      },
      {
        title: "Producteurs de musique",
        description: "Créez rapidement des démos et explorez de nouvelles idées musicales avec l'IA comme partenaire créatif."
      },
      {
        title: "Éducation musicale",
        description: "Outil pédagogique pour enseigner la théorie musicale et la composition avec des exemples interactifs."
      }
    ]
  },
  chant: {
    id: 2,
    name: "Plugin Chant",
    description: "Victoria peut chanter des chansons et créer des performances vocales",
    icon: "🎤",
    image: chantImg,
    category: "Créatif",
    price: "19€/mois",
    version: "0.0.0",
    lastUpdate: "A definir",
    developer: "NeoNekoTech",
    status: "development",
    progress: 0,
    overview: "Le plugin Chant permet à l'IA de chanter des chansons et de créer des performances vocales expressives.",
    detailedFeatures: [
      {
        name: "Chant par l'IA",
        icon: "🎤",
        description: "L'IA peut interpréter vocalement différents styles de chansons avec expression."
      },
      {
        name: "Performance vocale",
        icon: "🎭",
        description: "Création de performances vocales complètes avec dynamiques et émotions."
      },
    ],
    technicalSpecs: [
      { label: "Analyse fréquentielle", value: "20Hz - 20kHz" },
      { label: "Précision pitch", value: "±1 cent" },
      { label: "Formats audio", value: "WAV, MP3, M4A" }
    ],
    useCases: [
      {
        title: "Chanteurs débutants",
        description: "Apprenez les bases du chant avec un feedback immédiat et des exercices adaptés à votre niveau."
      },
      {
        title: "Artistes professionnels",
        description: "Perfectionnez votre technique vocale et préparez vos performances avec des analyses détaillées."
      },
      {
        title: "Professeurs de chant",
        description: "Outil pédagogique pour objectiver l'enseignement et suivre les progrès de vos élèves."
      }
    ]
  },
  gaming: {
    id: 3,
    name: "Plugin Gaming",
    description: "L'IA peut jouer à différents jeux vidéo et défier les utilisateurs",
    icon: "🎮",
    image: gamingImg,
    category: "Divertissement",
    price: "29€/mois",
    version: "0.0.0",
    lastUpdate: "A definir",
    developer: "NeoNekoTech",
    status: "development",
    progress: 0,
    overview: "Le plugin Gaming permet à Victoria de jouer à différents jeux vidéo et de défier les utilisateurs. Une expérience de jeu avec une IA compétitive.",
    detailedFeatures: [
      {
        name: "Jeu par l'IA",
        icon: "🎮",
        description: "L'IA peut jouer activement à différents types de jeux vidéo avec stratégie."
      },
      {
        name: "Stratégies adaptatives",
        icon: "🧠",
        description: "Développement de stratégies intelligentes qui s'adaptent au style de jeu."
      },
      {
        name: "Défis multijoueurs",
        icon: "⚔️",
        description: "Possibilité de défier les utilisateurs dans des matchs compétitifs."
      }
    ],
    technicalSpecs: [
      { label: "Plateforme", value: "PC " },
      { label: "API intégration", value: "REST, WebSocket" }
    ],
    useCases: [
      {
        title: "Développeurs indépendants",
        description: "Créez des jeux complexes avec des ressources limitées grâce à la génération automatique de contenu."
      },
      {
        title: "Studios de développement",
        description: "Optimisez votre pipeline de développement et améliorez l'engagement des joueurs."
      },
      {
        title: "Game designers",
        description: "Prototypez rapidement vos idées et testez l'équilibrage de vos mécaniques de jeu."
      }
    ]
  },
  peinture: {
    id: 4,
    name: "Plugin Peinture",
    description: "Victoria peut créer des œuvres d'art et peindre dans différents styles",
    icon: "🎨",
    image: peintureImg,
    category: "Créatif",
    price: "24€/mois",
    version: "0.0.0",
    lastUpdate: "A definir",
    developer: "NeoNekoTech",
    status: "development",
    progress: 0,
    overview: "Le plugin Peinture permet à Victoria de créer des œuvres d'art originales et de peindre dans différents styles artistiques. Un compagnon créatif pour l'art numérique.",
    detailedFeatures: [
      {
        name: "Peinture par l'IA",
        icon: "🎨",
        description: "Création automatique d'œuvres picturales avec techniques artistiques variées."
      },
      {
        name: "Styles artistiques",
        icon: "🖼️",
        description: "Maîtrise de différents styles artistiques classiques et contemporains."
      },
      {
        name: "Création d'œuvres",
        icon: "✨",
        description: "Génération d'œuvres d'art originales avec composition et harmonie des couleurs."
      }
    ],
    technicalSpecs: [

      { label: "Formats d'image", value: "PNG, JPG, PSD, AI, SVG" },
      { label: "Résolution max", value: "8K (7680×4320)" },
      { label: "Modèles IA", value: "Réseaux de neurones convolutifs" }
    ],
    useCases: [
      {
        title: "Artistes débutants",
        description: "Apprenez les fondamentaux de la peinture avec un guide intelligent et bienveillant."
      },
      {
        title: "Illustrateurs professionnels",
        description: "Explorez de nouveaux styles et accélérez votre processus créatif avec l'IA."
      },
      {
        title: "Enseignants d'art",
        description: "Outil pédagogique pour démontrer les principes artistiques et suivre les progrès des élèves."
      }
    ]
  },
  meteo: {
    id: 5,
    name: "Plugin Météo",
    description: "Victoria vous informe de la météo du jour et de la semaine",
    icon: "🌤️",
    image: meteoImg,
    category: "Utilitaire",
    price: "Gratuit",
    version: "0.1.0",
    lastUpdate: "15 Juin 2025",
    developer: "NeoNekoTech",
    status: "development",
    progress: 40,
    overview: "Le plugin Météo permet à l'IA d'avoir conscience des conditions météorologiques et de vous informer avec des annonces personnalisées sur le temps qu'il fait.",
    detailedFeatures: [
      {
        name: "Annonce météo par l'IA",
        icon: "📻",
        description: "L'IA annonce la météo avec conscience des conditions climatiques actuelles."
      },
      {
        name: "Prévisions personnalisées",
        icon: "🎯",
        description: "Prévisions adaptées à vos activités avec conseils personnalisés."
      },
    ],
    technicalSpecs: [
      { label: "Fréquence MAJ", value: "Toutes les 15 minutes" },
      { label: "Couverture", value: "Mondiale" },
    ],
    useCases: [
      {
        title: "Particuliers",
        description: "Planifiez vos activités quotidiennes avec des prévisions précises et personnalisées."
      },
      {
        title: "Agriculteurs",
        description: "Optimisez vos pratiques agricoles grâce aux prévisions détaillées et aux alertes."
      },
      {
        title: "Organisateurs d'événements",
        description: "Planifiez vos événements en extérieur avec confiance grâce aux prévisions fiables."
      }
    ]
  },
  calendrier: {
    id: 6,
    name: "Plugin Calendrier",
    description: "Gestion intelligente du temps et planification automatisée",
    icon: "📅",
    image: calendrierImg,
    category: "Productivité",
    price: "15€/mois",
    version: "0.0.0",
    lastUpdate: "A definir",
    developer: "NeoNekoTech",
    status: "development",
    progress: 0,
    overview: "Le plugin Calendrier permet la gestion du temps en utilisant l'IA pour optimiser automatiquement votre planning. Il apprend de vos habitudes et propose des créneaux optimaux pour vos activités.",
    detailedFeatures: [
      {
        name: "Planification IA",
        icon: "🤖",
        description: "Planification automatique optimisée selon vos priorités et contraintes."
      },
      {
        name: "Rappels intelligents",
        icon: "🔔",
        description: "Système de rappels adaptatif qui apprend de vos comportements."
      },
      {
        name: "Optimisation d'agenda",
        icon: "⚡",
        description: "Réorganisation intelligente de votre emploi du temps pour maximiser votre productivité."
      },
      {
        name: "Analyse temporelle",
        icon: "📈",
        description: "Analyse de votre utilisation du temps avec suggestions d'amélioration."
      }
    ],
    technicalSpecs: [
      { label: "Synchronisation", value: "Google, Outlook, Apple" },
      { label: "Plateformes", value: "Web, iOS, Android" },
      { label: "Intégrations", value: "Slack, Teams, Zoom" },
    ],
    useCases: [
      {
        title: "Professionnels",
        description: "Optimisez votre emploi du temps professionnel et maximisez votre productivité."
      },
      {
        title: "Étudiants",
        description: "Gérez efficacement vos cours, révisions et activités extra-scolaires."
      },
      {
        title: "Freelances",
        description: "Équilibrez parfaitement vie professionnelle et personnelle avec une planification intelligente."
      }
    ]
  },
  convertisseur: {
    id: 7,
    name: "Plugin Convertisseur",
    description: "Conversion universelle d'unités, devises et formats",
    icon: "🔄",
    image: convertisseurImg,
    category: "Utilitaire",
    price: "Gratuit",
    version: "0.0.0",
    lastUpdate: "A definir",
    developer: "NeoNekoTech",
    status: "development",
    progress: 0,
    overview: "Le plugin Convertisseur offre des capacités de conversion universelle pour les unités, devises et formats de fichiers avec une précision maximale.",
    detailedFeatures: [
      {
        name: "Multi-devises",
        icon: "💱",
        description: "Conversion de devises en temps réel avec taux de change actualisés."
      },
      {
        name: "Unités physiques",
        icon: "📏",
        description: "Conversion complète d'unités de mesure physiques et scientifiques."
      },
      {
        name: "Formats de fichiers",
        icon: "📄",
        description: "Conversion entre différents formats de fichiers et encodages."
      }
    ],
    technicalSpecs: [
      { label: "Types d'unités", value: "500+ unités" },
      { label: "Devises", value: "180+ monnaies" },
      { label: "Formats fichiers", value: "100+ formats" },
    ]
  },
  reve: {
    id: 8,
    name: "Plugin Rêve",
    description: "L'IA fait des rêves et gère sa mémoire à travers des expériences oniriques",
    icon: "💭",
    image: reveImg,
    category: "Bien-être",
    price: "12€/mois",
    version: "0.2.0",
    lastUpdate: "13 Juin 2025",
    developer: "NeoNekoTech",
    status: "development",
    progress: 45,
    overview: "Le plugin Rêve permet à l'IA de faire des rêves artificiels et de gérer sa mémoire à travers des expériences oniriques simulées.",
    detailedFeatures: [
      {
        name: "Rêves de l'IA",
        icon: "💭",
        description: "Simulation d'expériences oniriques artificielles pour l'IA avec narratifs complexes."
      },
      {
        name: "Gestion mémoire",
        icon: "🧠",
        description: "Optimisation de la mémoire de l'IA à travers les processus de rêve simulés."
      },
    ],
    technicalSpecs: [
      { label: "Stockage", value: "Chiffré local" },
      { label: "Modèles IA", value: "Traitement du langage naturel" }
    ]
  },
  emotion: {
    id: 1,
    name: "Plugin Émotion",
    description: "L'IA simule et affiche des émotions de manière expressive",
    icon: "😊",
    image: emotionImg,
    category: "Psychologie",
    price: "18€/mois",
    version: "1.0.0",
    lastUpdate: "12 Juin 2025",
    developer: "NeoNekoTech",
    status: "completed",
    overview: "Le plugin Émotion permet à l'IA de simuler et d'afficher des émotions de manière expressive, créant des interactions plus naturelles et empathiques.",
    detailedFeatures: [
      {
        name: "Simulation d'émotions",
        icon: "🎭",
        description: "Simulation réaliste d'états émotionnels variés avec expressions authentiques."
      },
      {
        name: "Affichage expressif",
        icon: "😊",
        description: "Manifestation visuelle et comportementale des émotions de l'IA."
      },
      {
        name: "Réactions émotionnelles",
        icon: "💝",
        description: "Réactions émotionnelles adaptatives aux situations et interactions."
      }
    ],
    technicalSpecs: [
      { label: "Précision détection", value: "98% exactitude" },
      { label: "Émotions détectées", value: "15 émotions" },
    ]
  }
}

const plugin = computed(() => {
  return pluginsData[route.params.slug] || null
})
</script>

<style scoped>
.plugin-detail {
  padding-top: 60px;
}

.hero-section {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-background-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
}

.hero-background-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.container {
  position: relative;
  z-index: 2;
}

.plugin-hero {
  max-width: 800px;
  margin: 0 auto;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.content {
  padding: 4rem 2rem;
}

.plugin-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.main-content section {
  margin-bottom: 3rem;
}

.main-content h2 {
  color: var(--color-heading);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.overview p {
  color: var(--color-text);
  line-height: 1.8;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--color-border);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: var(--color-heading);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.feature-item p {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.9rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.spec-item {
  background: var(--color-background-soft);
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid var(--color-primary);
}

.spec-item strong {
  color: var(--color-heading);
}

.use-cases-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.use-case {
  background: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.use-case h3 {
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.use-case p {
  color: var(--color-text);
  line-height: 1.6;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.action-card, .info-card {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.action-card h3, .info-card h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.action-card p {
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.btn-install, .btn-demo {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 0.75rem;
}

.btn-install {
  background: var(--color-primary);
  color: white;
}

.btn-install:hover {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
}

.btn-demo {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-demo:hover {
  background: var(--color-primary-light);
}

.info-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

.info-item:last-child {
  border-bottom: none;
}

.info-item strong {
  color: var(--color-heading);
}

.error {
  padding: 4rem 2rem;
  text-align: center;
}

.error h1 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.error p {
  color: var(--color-text);
  margin-bottom: 2rem;
}

.btn-back {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .plugin-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .plugin-meta {
    flex-direction: column;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .specs-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-background-icon {
    width: 400px;
    height: 400px;
    opacity: 0.12;
  }
}
</style>
