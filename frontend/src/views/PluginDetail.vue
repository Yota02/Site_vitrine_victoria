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
            
            <section class="use-cases">
              <h2>Cas d'usage</h2>
              <div class="use-cases-list">
                <div v-for="useCase in plugin.useCases" :key="useCase.title" class="use-case">
                  <h3>{{ useCase.title }}</h3>
                  <p>{{ useCase.description }}</p>
                </div>
              </div>
            </section>
          </div>
          
          <div class="sidebar">
            <div class="action-card">
              <h3>Commencer</h3>
              <p>Essayez ce plugin dès maintenant</p>
              <button class="btn-install">Installer le plugin</button>
              <button class="btn-demo">Voir la démo</button>
            </div>
            
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
              <div class="info-item">
                <strong>Support:</strong> {{ plugin.support }}
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

const route = useRoute()

const pluginsData = {
  musique: {
    id: 1,
    name: "Plugin Musique",
    description: "Lecture et composition de partitions avec piano virtuel",
    icon: "🎵",
    image: "/src/assets/icone_plugins/musique.png",
    category: "Créatif",
    price: "Gratuit",
    version: "2.1.0",
    lastUpdate: "15 Décembre 2024",
    developer: "VictorIA Team",
    support: "24/7",
    overview: "Notre plugin Musique utilise l'intelligence artificielle pour révolutionner la création musicale. Que vous soyez compositeur débutant ou expert, cet outil vous accompagne dans toutes les étapes de la création musicale, de la génération d'idées à l'arrangement final.",
    detailedFeatures: [
      {
        name: "Composition automatique",
        icon: "🎼",
        description: "Génération de mélodies, harmonies et arrangements complets basés sur vos préférences stylistiques."
      },
      {
        name: "Analyse harmonique",
        icon: "🔍",
        description: "Analyse détaillée de vos compositions avec suggestions d'amélioration et de progression harmonique."
      },
      {
        name: "Génération de mélodies",
        icon: "🎹",
        description: "Création de mélodies originales dans différents styles musicaux avec personnalisation avancée."
      },
      {
        name: "Orchestration intelligente",
        icon: "🎺",
        description: "Arrangement automatique pour différents instruments avec respect des règles d'orchestration."
      }
    ],
    technicalSpecs: [
      { label: "Formats supportés", value: "MIDI, WAV, MP3, FLAC" },
      { label: "Instruments virtuels", value: "200+ instruments" },
      { label: "Styles musicaux", value: "50+ genres" },
      { label: "Intégration DAW", value: "Compatible VST/AU" }
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
    description: "Analyse vocale et assistance pour l'amélioration du chant",
    icon: "🎤",
    image: "/src/assets/icone_plugins/chant.png",
    category: "Créatif",
    price: "19€/mois",
    version: "1.8.3",
    lastUpdate: "10 Décembre 2024",
    developer: "VictorIA Team",
    support: "Lun-Ven 9h-18h",
    overview: "Le plugin Chant est votre coach vocal personnel alimenté par l'IA. Il analyse votre voix en temps réel, identifie les points d'amélioration et propose des exercices personnalisés pour développer votre technique vocale.",
    detailedFeatures: [
      {
        name: "Analyse de la voix",
        icon: "📊",
        description: "Analyse spectrale complète de votre voix avec détection des fréquences, vibrato et dynamiques."
      },
      {
        name: "Correction de pitch",
        icon: "🎯",
        description: "Détection automatique des notes fausses avec suggestions de correction en temps réel."
      },
      {
        name: "Exercices vocaux",
        icon: "💪",
        description: "Programme d'exercices personnalisé basé sur votre niveau et vos objectifs vocaux."
      },
      {
        name: "Coaching IA",
        icon: "🤖",
        description: "Assistant vocal intelligent qui vous guide dans votre progression avec des conseils personnalisés."
      }
    ],
    technicalSpecs: [
      { label: "Analyse fréquentielle", value: "20Hz - 20kHz" },
      { label: "Latence", value: "< 10ms" },
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
    description: "Outils de développement et d'assistance pour les jeux vidéo",
    icon: "🎮",
    image: "/src/assets/icone_plugins/gaming.png",
    category: "Divertissement",
    price: "29€/mois",
    version: "3.2.1",
    lastUpdate: "20 Décembre 2024",
    developer: "VictorIA Team",
    support: "24/7",
    overview: "Le plugin Gaming révolutionne le développement de jeux vidéo en intégrant l'IA à chaque étape. De la génération procédurale de contenu à l'analyse comportementale des joueurs, cet outil complet accompagne les développeurs et les joueurs.",
    detailedFeatures: [
      {
        name: "IA de jeu",
        icon: "🧠",
        description: "Création d'IA adverses intelligentes et adaptatives pour des expériences de jeu dynamiques."
      },
      {
        name: "Génération de niveaux",
        icon: "🏗️",
        description: "Génération procédurale de niveaux, terrains et donjons avec équilibrage automatique."
      },
      {
        name: "Analytics de gameplay",
        icon: "📈",
        description: "Analyse comportementale des joueurs avec optimisation de l'expérience utilisateur."
      },
      {
        name: "Assistant de développement",
        icon: "⚙️",
        description: "Outils de développement intelligents pour la programmation et le debug de jeux."
      }
    ],
    technicalSpecs: [
      { label: "Moteurs supportés", value: "Unity, Unreal, Godot" },
      { label: "Langages", value: "C#, C++, Python, GDScript" },
      { label: "Plateforme", value: "PC, Console, Mobile" },
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
    description: "Assistance créative pour la peinture digitale et traditionnelle",
    icon: "🎨",
    image: "/src/assets/icone_plugins/peinture.png",
    category: "Créatif",
    price: "24€/mois",
    version: "2.5.0",
    lastUpdate: "18 Décembre 2024",
    developer: "VictorIA Team",
    support: "Lun-Sam 8h-20h",
    overview: "Le plugin Peinture est votre mentor artistique numérique. Il analyse votre style, propose des améliorations et vous guide dans l'exploration de nouvelles techniques picturales, que vous peigniez sur toile ou sur écran.",
    detailedFeatures: [
      {
        name: "Palette de couleurs intelligente",
        icon: "🌈",
        description: "Génération automatique de palettes harmonieuses basées sur la théorie des couleurs."
      },
      {
        name: "Analyse de style",
        icon: "🔍",
        description: "Reconnaissance et analyse de votre style artistique avec suggestions d'évolution."
      },
      {
        name: "Assistant composition",
        icon: "📐",
        description: "Aide à la composition avec règles de proportion, perspective et équilibre visuel."
      },
      {
        name: "Critique constructive",
        icon: "💬",
        description: "Feedback intelligent sur vos œuvres avec conseils d'amélioration personnalisés."
      }
    ],
    technicalSpecs: [
      { label: "Logiciels compatibles", value: "Photoshop, Illustrator, Procreate" },
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
    description: "Prévisions météorologiques avancées et analyses climatiques",
    icon: "🌤️",
    image: "/src/assets/icone_plugins/meteo.png",
    category: "Utilitaire",
    price: "Gratuit",
    version: "4.1.2",
    lastUpdate: "22 Décembre 2024",
    developer: "VictorIA Team",
    support: "Communauté",
    overview: "Le plugin Météo utilise l'intelligence artificielle pour fournir des prévisions météorologiques ultra-précises. En analysant des milliers de données climatiques, il prédit les conditions météo avec une précision inégalée.",
    detailedFeatures: [
      {
        name: "Prévisions IA",
        icon: "🔮",
        description: "Prévisions météorologiques basées sur l'apprentissage automatique avec précision de 95%."
      },
      {
        name: "Alertes intelligentes",
        icon: "⚠️",
        description: "Système d'alerte personnalisé selon vos activités et votre localisation."
      },
      {
        name: "Analyse climatique",
        icon: "📊",
        description: "Analyse des tendances climatiques à long terme avec visualisations interactives."
      },
      {
        name: "Microclimats",
        icon: "🏠",
        description: "Prévisions hyper-locales avec analyse des microclimats urbains et ruraux."
      }
    ],
    technicalSpecs: [
      { label: "Sources de données", value: "50+ stations météo" },
      { label: "Fréquence MAJ", value: "Toutes les 15 minutes" },
      { label: "Couverture", value: "Mondiale" },
      { label: "Historique", value: "10 ans de données" }
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
    image: "/src/assets/icone_plugins/calendrier.png",
    category: "Productivité",
    price: "15€/mois",
    version: "3.0.4",
    lastUpdate: "16 Décembre 2024",
    developer: "VictorIA Team",
    support: "24/7",
    overview: "Le plugin Calendrier révolutionne la gestion du temps en utilisant l'IA pour optimiser automatiquement votre planning. Il apprend de vos habitudes et propose des créneaux optimaux pour vos activités.",
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
      { label: "Stockage", value: "Cloud sécurisé" }
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
    image: "/src/assets/icone_plugins/convertisseur.png",
    category: "Utilitaire",
    price: "Gratuit",
    version: "2.3.1",
    lastUpdate: "14 Décembre 2024",
    developer: "VictorIA Team",
    support: "Communauté",
    overview: "Le plugin Convertisseur est votre outil universel de conversion. Alimenté par l'IA, il reconnaît automatiquement les unités et formats, propose des conversions contextuelles et maintient une précision maximale.",
    detailedFeatures: [
      {
        name: "Reconnaissance automatique",
        icon: "🧠",
        description: "Détection intelligente des unités et formats à partir du contexte."
      },
      {
        name: "Conversions contextuelles",
        icon: "🎯",
        description: "Suggestions de conversions pertinentes selon votre domaine d'activité."
      },
      {
        name: "Taux en temps réel",
        icon: "⚡",
        description: "Taux de change et données financières mis à jour en temps réel."
      },
      {
        name: "Historique intelligent",
        icon: "📊",
        description: "Mémorisation de vos conversions fréquentes avec suggestions proactives."
      }
    ],
    technicalSpecs: [
      { label: "Types d'unités", value: "500+ unités" },
      { label: "Devises", value: "180+ monnaies" },
      { label: "Formats fichiers", value: "100+ formats" },
      { label: "Précision", value: "15 décimales" }
    ],
    useCases: [
      {
        title: "Professionnels techniques",
        description: "Convertissez rapidement les unités techniques dans vos projets d'ingénierie."
      },
      {
        title: "Voyageurs",
        description: "Convertissez facilement les devises et unités locales lors de vos déplacements."
      },
      {
        title: "Étudiants",
        description: "Outil indispensable pour les exercices de physique, chimie et mathématiques."
      }
    ]
  },
  reve: {
    id: 8,
    name: "Plugin Rêve",
    description: "Analyse et interprétation des rêves avec IA",
    icon: "💭",
    image: "/src/assets/icone_plugins/reve.png",
    category: "Bien-être",
    price: "12€/mois",
    version: "1.6.7",
    lastUpdate: "12 Décembre 2024",
    developer: "VictorIA Team",
    support: "Lun-Ven 10h-16h",
    overview: "Le plugin Rêve explore l'univers mystérieux de vos songes. Utilisant l'IA et la psychologie moderne, il analyse vos rêves, identifie les patterns récurrents et propose des interprétations personnalisées.",
    detailedFeatures: [
      {
        name: "Journal de rêves intelligent",
        icon: "📔",
        description: "Enregistrement et catégorisation automatique de vos rêves avec analyse des émotions."
      },
      {
        name: "Interprétation symbolique",
        icon: "🔮",
        description: "Analyse des symboles oniriques basée sur la psychanalyse et les archétypes universels."
      },
      {
        name: "Patterns récurrents",
        icon: "🔄",
        description: "Détection des thèmes récurrents et évolution de votre univers onirique."
      },
      {
        name: "Méditation guidée",
        icon: "🧘",
        description: "Séances de méditation personnalisées pour améliorer la qualité de vos rêves."
      }
    ],
    technicalSpecs: [
      { label: "Base de symboles", value: "5000+ symboles" },
      { label: "Langues supportées", value: "12 langues" },
      { label: "Stockage", value: "Chiffré local" },
      { label: "Modèles IA", value: "Traitement du langage naturel" }
    ],
    useCases: [
      {
        title: "Développement personnel",
        description: "Explorez votre inconscient et développez votre connaissance de soi à travers vos rêves."
      },
      {
        title: "Créatifs",
        description: "Puisez l'inspiration dans vos rêves pour vos créations artistiques et littéraires."
      },
      {
        title: "Thérapeutes",
        description: "Outil d'accompagnement pour l'analyse des rêves en thérapie psychanalytique."
      }
    ]
  },
  emotion: {
    id: 9,
    name: "Plugin Émotion",
    description: "Reconnaissance et analyse des émotions en temps réel",
    icon: "😊",
    image: "/src/assets/icone_plugins/emotion.png",
    category: "Psychologie",
    price: "18€/mois",
    version: "2.9.3",
    lastUpdate: "19 Décembre 2024",
    developer: "VictorIA Team",
    support: "24/7",
    overview: "Le plugin Émotion est votre compagnon émotionnel intelligent. Il analyse vos expressions, votre voix et vos textes pour comprendre votre état émotionnel et vous propose des stratégies d'amélioration de votre bien-être.",
    detailedFeatures: [
      {
        name: "Détection faciale",
        icon: "😊",
        description: "Reconnaissance des micro-expressions et analyse émotionnelle par vision par ordinateur."
      },
      {
        name: "Analyse vocale",
        icon: "🎙️",
        description: "Détection des émotions dans la voix avec analyse prosodique avancée."
      },
      {
        name: "Suivi émotionnel",
        icon: "📊",
        description: "Monitoring continu de votre état émotionnel avec tendances et insights personnalisés."
      },
      {
        name: "Coaching émotionnel",
        icon: "🤗",
        description: "Suggestions personnalisées pour améliorer votre régulation émotionnelle."
      }
    ],
    technicalSpecs: [
      { label: "Précision détection", value: "94% exactitude" },
      { label: "Latence", value: "< 100ms" },
      { label: "Émotions détectées", value: "27 émotions" },
      { label: "Caméra requise", value: "HD 720p minimum" }
    ],
    useCases: [
      {
        title: "Bien-être personnel",
        description: "Développez votre intelligence émotionnelle et améliorez votre gestion du stress."
      },
      {
        title: "Professionnels RH",
        description: "Évaluez le bien-être des équipes et optimisez l'environnement de travail."
      },
      {
        title: "Recherche comportementale",
        description: "Outil d'analyse pour les études en psychologie et sciences comportementales."
      }
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
