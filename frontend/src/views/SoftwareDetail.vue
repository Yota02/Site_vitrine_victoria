<template>
  <div class="software-detail" v-if="software">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="software-logo">
            <img :src="software.logo" :alt="`Logo ${software.name}`" />
          </div>
          <div class="hero-text">
            <h1>{{ software.name }}</h1>
            <p class="hero-subtitle">{{ software.description }}</p>
            <div class="status-badge" :class="software.status.toLowerCase()">
              {{ software.statusText }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="software-info">
          <div class="info-grid">
            <div class="main-info">
              <h2>À propos de {{ software.name }}</h2>
              <p>{{ software.longDescription }}</p>
              
              <h3>Fonctionnalités disponibles</h3>
              <ul class="features-list">
                <li v-for="feature in software.features" :key="feature">{{ feature }}</li>
              </ul>

              <div v-if="software.installation" class="installation-guide">
                <h3>Guide d'installation</h3>
                <div class="installation-steps">
                  <div v-for="(step, index) in software.installation" :key="index" class="step">
                    <div class="step-number">{{ index + 1 }}</div>
                    <p>{{ step }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar">
              <div class="info-card">
                <h4>Informations techniques</h4>
                <div class="tech-info">
                  <div class="tech-item">
                    <span class="label">Catégorie :</span>
                    <span class="value">{{ software.category }}</span>
                  </div>
                  <div class="tech-item">
                    <span class="label">Plateforme :</span>
                    <span class="value">{{ software.platform }}</span>
                  </div>
                  <div class="tech-item">
                    <span class="label">Version requise :</span>
                    <span class="value">{{ software.version || 'N/A' }}</span>
                  </div>
                </div>
              </div>

              <div v-if="software.links" class="links-card">
                <h4>Liens utiles</h4>
                <div class="links-list">
                  <a v-for="link in software.links" :key="link.url" :href="link.url" target="_blank" class="link-item">
                    {{ link.title }}
                    <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="back-navigation">
          <router-link to="/compatibility" class="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
            Retour à la compatibilité
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>Logiciel non trouvé</h1>
      <router-link to="/compatibility" class="back-btn">Retour à la compatibilité</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const software = ref(null)

// Base de données des logiciels
const softwareDatabase = {
  discord: {
    name: 'Discord',
    slug: 'discord',
    description: 'Intégration native via bot Discord',
    longDescription: 'VictorIA s\'intègre parfaitement à Discord grâce à un bot dédié qui permet aux utilisateurs d\'interagir avec l\'assistante IA directement dans leurs serveurs Discord.',
    category: 'Communication',
    platform: 'Web/Desktop',
    status: 'supported',
    statusText: '✅ Supporté',
    logo: '/logos/discord.png',
    features: [
      'Commandes slash intégrées',
      'Réponses en temps réel',
      'Support des fils de discussion',
      'Gestion des permissions par rôle',
      'Intégration avec les webhooks'
    ],
    installation: [
      'Invitez le bot VictorIA sur votre serveur Discord',
      'Configurez les permissions appropriées',
      'Utilisez /victoria pour commencer à interagir',
      'Personnalisez les paramètres via /settings'
    ],
    links: [
      { title: 'Inviter le bot', url: '#' },
      { title: 'Documentation Discord', url: '#' }
    ]
  },
  slack: {
    name: 'Slack',
    slug: 'slack',
    description: 'Bot Slack pour équipes professionnelles',
    longDescription: 'L\'intégration Slack de VictorIA est conçue spécialement pour les environnements professionnels, offrant une collaboration fluide entre les équipes.',
    category: 'Communication',
    platform: 'Web/Desktop',
    status: 'planned',
    statusText: '🔄 Prévu',
    logo: '/logos/slack.png',
    features: [
      'Commandes slash personnalisées',
      'Intégration avec les workflows',
      'Notifications intelligentes',
      'Rapport d\'activité',
      'Intégration calendrier'
    ],
    installation: [
      'Installation prévue pour Q2 2024',
      'Inscription à la liste d\'attente disponible',
      'Documentation en préparation'
    ],
    links: [
      { title: 'Liste d\'attente', url: '#' }
    ]
  },
  teams: {
    name: 'Microsoft Teams',
    slug: 'teams',
    description: 'Intégration pour environnements d\'entreprise',
    longDescription: 'VictorIA pour Microsoft Teams apporte l\'intelligence artificielle directement dans votre environnement de travail Microsoft 365.',
    category: 'Communication',
    platform: 'Web/Desktop',
    status: 'planned',
    statusText: '🔄 Prévu',
    logo: '/logos/teams.png',
    features: [
      'Intégration native Teams',
      'Support des réunions',
      'Synchronisation Office 365',
      'Gestion des documents',
      'Compliance entreprise'
    ],
    installation: [
      'Développement prévu pour Q3 2024',
      'Partenariat Microsoft en cours',
      'Beta privée disponible sur demande'
    ],
    links: [
      { title: 'Demande de beta', url: '#' }
    ]
  },
  windows: {
    name: 'Windows',
    slug: 'windows',
    description: 'Application native pour Windows 10 et 11',
    longDescription: 'L\'application Windows de VictorIA offre une expérience native optimisée pour les utilisateurs de Windows 10 et 11.',
    category: 'Système d\'exploitation',
    platform: 'Desktop',
    status: 'supported',
    statusText: '✅ Supporté',
    logo: '/logos/windows.png',
    version: 'Windows 10 v1909+',
    features: [
      'Interface native Windows',
      'Notifications système',
      'Raccourcis clavier globaux',
      'Intégration système tray',
      'Démarrage automatique'
    ],
    installation: [
      'Téléchargez l\'installateur depuis notre site',
      'Exécutez le fichier .msi en tant qu\'administrateur',
      'Suivez l\'assistant d\'installation',
      'Lancez VictorIA depuis le menu Démarrer'
    ],
    links: [
      { title: 'Télécharger', url: '#' },
      { title: 'Guide d\'installation', url: '#' }
    ]
  },
  chrome: {
    name: 'Chrome',
    slug: 'chrome',
    description: 'Extension Chrome/Chromium',
    longDescription: 'L\'extension Chrome de VictorIA permet d\'accéder à l\'assistante IA directement depuis votre navigateur pour une productivité accrue.',
    category: 'Navigateur',
    platform: 'Web',
    status: 'planned',
    statusText: '🔄 Prévu',
    logo: '/logos/chrome.png',
    version: 'Chrome 88+',
    features: [
      'Popup d\'accès rapide',
      'Intégration avec les pages web',
      'Synchronisation multi-appareils',
      'Mode hors ligne limité',
      'Raccourcis clavier'
    ],
    installation: [
      'Disponible prochainement sur Chrome Web Store',
      'Installation en un clic',
      'Configuration automatique'
    ],
    links: [
      { title: 'Chrome Web Store', url: '#' }
    ]
  },
  api: {
    name: 'REST API',
    slug: 'api',
    description: 'API REST pour intégrations personnalisées',
    longDescription: 'L\'API REST de VictorIA permet aux développeurs de créer des intégrations personnalisées dans leurs applications existantes.',
    category: 'API',
    platform: 'Multiplateforme',
    status: 'supported',
    statusText: '✅ Supporté',
    logo: '/logos/api.png',
    version: 'v1.0',
    features: [
      'Endpoints RESTful complets',
      'Authentification OAuth 2.0',
      'Documentation OpenAPI',
      'Webhooks en temps réel',
      'Rate limiting configurable'
    ],
    installation: [
      'Obtenez vos clés API depuis le dashboard',
      'Consultez la documentation technique',
      'Implémentez les endpoints nécessaires',
      'Testez avec notre environnement sandbox'
    ],
    links: [
      { title: 'Documentation API', url: '#' },
      { title: 'Dashboard développeur', url: '#' },
      { title: 'Exemples de code', url: '#' }
    ]
  }
}

onMounted(() => {
  const slug = route.params.slug
  software.value = softwareDatabase[slug] || null
  
  // Mise à jour du titre de la page
  if (software.value) {
    document.title = `${software.value.name} - Compatibilité - IA Conversationnelle`
  }
})
</script>

<style scoped>
.software-detail {
  padding-top: 60px;
}

.hero-section {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 2rem;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
}

.software-logo {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.software-logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
}

.status-badge.supported {
  background: rgba(34, 197, 94, 0.2);
  color: #10b981;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-badge.planned {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.status-badge.development {
  background: rgba(251, 191, 36, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.content {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.main-info h2 {
  color: var(--color-heading);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.main-info h3 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
}

.main-info p {
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  color: var(--color-text);
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  position: relative;
  padding-left: 2rem;
}

.features-list li:before {
  content: "✓";
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.installation-guide {
  margin-top: 2rem;
}

.installation-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.step-number {
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.step p {
  margin: 0;
  color: var(--color-text);
  line-height: 1.6;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card, .links-card {
  background: var(--color-background-soft);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.info-card h4, .links-card h4 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.tech-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.tech-item:last-child {
  border-bottom: none;
}

.label {
  color: var(--color-text);
  font-weight: 500;
}

.value {
  color: var(--color-heading);
  font-weight: 600;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 500;
  transition: all 0.3s ease;
}

.link-item:hover {
  background: var(--color-primary-light);
  transform: translateX(4px);
}

.external-icon {
  width: 16px;
  height: 16px;
}

.back-navigation {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: var(--color-primary-soft);
  transform: translateY(-2px);
}

.back-btn svg {
  width: 20px;
  height: 20px;
}

.not-found {
  padding: 4rem 2rem;
  text-align: center;
}

.not-found h1 {
  color: var(--color-heading);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .software-logo {
    width: 100px;
    height: 100px;
  }
  
  .software-logo img {
    width: 60px;
    height: 60px;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content {
    padding: 2rem 1rem;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
  }
}
</style>
