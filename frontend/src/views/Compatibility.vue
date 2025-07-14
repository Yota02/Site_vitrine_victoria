<template>
  <div class="compatibility">
    <div class="hero-section">
      <div class="container">
        <h1>Compatibilité Logicielle</h1>
        <p class="hero-subtitle">Découvrez avec quels logiciels et plateformes VictorIA peut s'intégrer</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <!-- Introduction -->
        <div class="intro-section">
          <h2>Une intégration polyvalente</h2>
          <p>VictorIA est conçue pour s'adapter à votre environnement de travail existant. Notre assistante IA peut fonctionner avec une large gamme de logiciels et plateformes.</p>
        </div>

        <!-- Catégories de compatibilité -->
        <div class="compatibility-categories">
          
          <!-- Plateformes de communication -->
          <div class="category-section">
            <div class="category-header">
              <div class="category-icon">💬</div>
              <h3>Plateformes de Communication</h3>
            </div>
            <div class="software-grid">
              <router-link to="/software/discord" class="software-card">
                <div class="software-logo">
                  <img :src="logos.discord" alt="Discord Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Discord</h4>
                  <p>Intégration native via bot Discord</p>
                  <span class="status supported">✅ Supporté</span>
                </div>
              </router-link>
              <router-link to="/software/slack" class="software-card">
                <div class="software-logo">
                  <img :src="logos.slack" alt="Slack Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Slack</h4>
                  <p>Bot Slack pour équipes professionnelles</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </router-link>
              <router-link to="/software/teams" class="software-card">
                <div class="software-logo">
                  <img :src="logos.teams" alt="Microsoft Teams Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Microsoft Teams</h4>
                  <p>Intégration pour environnements d'entreprise</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Applications de bureau -->
          <div class="category-section">
            <div class="category-header">
              <div class="category-icon">🖥️</div>
              <h3>Applications de Bureau</h3>
            </div>
            <div class="software-grid">
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.starguardian" alt="Starguardian App Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Application StarGuardian</h4>
                    <p>Application StarGuardian pour bureau</p>
                  <span class="status development">🚧 En développement</span>
                </div>
              </div>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.electron" alt="Electron Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Electron App</h4>
                  <p>Version Electron multiplateforme</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Systèmes d'exploitation -->
          <div class="category-section">
            <div class="category-header">
              <div class="category-icon">⚙️</div>
              <h3>Systèmes d'Exploitation</h3>
            </div>
            <div class="software-grid">
              <router-link to="/software/windows" class="software-card">
                <div class="software-logo">
                  <img :src="logos.windows" alt="Windows Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Windows</h4>
                  <p>Windows 10 et 11</p>
                  <span class="status supported">✅ Supporté</span>
                </div>
              </router-link>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.macos" alt="macOS Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>macOS</h4>
                  <p>macOS 11 et versions ultérieures</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </div>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.linux" alt="Linux Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Linux</h4>
                  <p>Distributions principales</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigateurs web -->
          <!-- <div class="category-section">
            <div class="category-header">
              <div class="category-icon">🌐</div>
              <h3>Navigateurs Web</h3>
            </div>
            <div class="software-grid">
              <router-link to="/software/chrome" class="software-card">
                <div class="software-logo">
                  <img :src="logos.chrome" alt="Chrome Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Chrome</h4>
                  <p>Extension Chrome/Chromium</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </router-link>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.firefox" alt="Firefox Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Firefox</h4>
                  <p>Add-on Firefox</p>
                  <span class="status planned">🔄 Prévu</span>
                </div>
              </div>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.web" alt="Web Interface Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>Interface Web</h4>
                  <p>Accès via navigateur web</p>
                  <span class="status supported">✅ Supporté</span>
                </div>
              </div>
            </div>
          </div> -->

          <!-- API et intégrations -->
          <!-- <div class="category-section">
            <div class="category-header">
              <div class="category-icon">🔌</div>
              <h3>API et Intégrations</h3>
            </div>
            <div class="software-grid">
              <router-link to="/software/api" class="software-card">
                <div class="software-logo">
                  <img :src="logos.api" alt="REST API Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>REST API</h4>
                  <p>API REST pour intégrations personnalisées</p>
                  <span class="status supported">✅ Supporté</span>
                </div>
              </router-link>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.websocket" alt="WebSocket Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>WebSocket</h4>
                  <p>Communication temps réel</p>
                  <span class="status supported">✅ Supporté</span>
                </div>
              </div>
              <div class="software-card non-clickable">
                <div class="software-logo">
                  <img :src="logos.python" alt="Python SDK Logo" @error="handleImageError" />
                </div>
                <div class="software-info">
                  <h4>SDK Python</h4>
                  <p>Kit de développement Python</p>
                  <span class="status development">🚧 En développement</span>
                </div>
              </div>
            </div>
          </div> -->

        </div>

        <!-- Configuration requise -->
        <div class="requirements-section">
          <h2>Configuration Requise</h2>
          <div class="requirements-grid">
            <div class="requirement-card">
              <h4>Configuration Minimale</h4>
              <ul>
                <li>RAM : 4 GB</li>
                <li>Processeur : Intel i3 ou équivalent</li>
                <li>Connexion Internet stable</li>
                <li>Espace disque : 1 GB</li>
              </ul>
            </div>
            <div class="requirement-card">
              <h4>Configuration Recommandée</h4>
              <ul>
                <li>RAM : 8 GB ou plus</li>
                <li>Processeur : Intel i5 ou équivalent</li>
                <li>Connexion Internet haut débit</li>
                <li>Espace disque : 2 GB</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Guide d'installation -->
        <div class="installation-section">
          <h2>Guide d'Installation</h2>
          <div class="installation-steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Téléchargement</h4>
                <p>Téléchargez la version appropriée selon votre plateforme</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Installation</h4>
                <p>Suivez l'assistant d'installation adapté à votre système</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Configuration</h4>
                <p>Configurez VictorIA selon vos préférences et besoins</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Activation</h4>
                <p>Activez votre assistante et commencez à l'utiliser</p>
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

// Image de fallback (placeholder générique)
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y1RjVGNSIvPgo8cGF0aCBkPSJNMjAgMTJDMTYuNjg2MyAxMiAxNCAxNC42ODYzIDE0IDE4QzE0IDIxLjMxMzcgMTYuNjg2MyAyNCAyMCAyNEMyMy4zMTM3IDI0IDI2IDIxLjMxMzcgMjYgMThDMjYgMTQuNjg2MyAyMy4zMTM3IDEyIDIwIDEyWk0yMCAyMkMyMS4xMDQ2IDIyIDIyIDIxLjEwNDYgMjIgMjBDMjIgMTguODk1NCAyMS4xMDQ2IDE4IDIwIDE4QzE4Ljg5NTQgMTggMTggMTguODk1NCAxOCAyMEMxOCAyMS4xMDQ2IDE4Ljg5NTQgMjIgMjAgMjJaIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik0yOCAyOEgxMkMxMS40NDc3IDI4IDExIDI4LjQ0NzcgMTEgMjlDMTEgMjkuNTUyMyAxMS40NDc3IDMwIDEyIDMwSDI4QzI4LjU1MjMgMzAgMjkgMjkuNTUyMyAyOSAyOUMyOSAyOC40NDc3IDI4LjU1MjMgMjggMjggMjhaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo='

// URLs des logos depuis le dossier public
const logos = ref({
  discord: '/logos/discord.png',
  slack: '/logos/slack.png',
  teams: '/logos/teams.png',
  starguardian: '/logos/starguardian.png',
  electron: '/logos/electron.png',
  windows: '/logos/windows.png',
  macos: '/logos/mac.png',
  linux: '/logos/linux.png',
  chrome: '/logos/chrome.png',
  firefox: '/logos/firefox.png',
  web: '/logos/web.png',
  api: '/logos/api.png',
  websocket: '/logos/websocket.png',
  python: '/logos/python.png'
})

// Gestionnaire d'erreur pour les images
const handleImageError = (event) => {
  event.target.src = placeholderImage
}
</script>

<style scoped>
.compatibility {
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

.intro-section {
  text-align: center;
  margin-bottom: 4rem;
}

.intro-section h2 {
  color: var(--color-heading);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro-section p {
  font-size: 1.1rem;
  color: var(--color-text);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.compatibility-categories {
  margin-bottom: 4rem;
}

.category-section {
  margin-bottom: 3rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: var(--color-primary-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-header h3 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin: 0;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.software-card {
  background: var(--color-background-soft);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.software-card:not(.non-clickable):hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.15);
  border-color: var(--color-primary);
}

.software-card.non-clickable {
  cursor: default;
}

.software-card.non-clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
  border-color: var(--color-primary-light);
}

.software-logo {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.software-logo img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.software-info {
  text-align: center;
}

.software-info h4 {
  color: var(--color-heading);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.software-info p {
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.status.supported {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status.development {
  background: rgba(251, 191, 36, 0.1);
  color: #d97706;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.status.planned {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.requirements-section {
  margin-bottom: 4rem;
}

.requirements-section h2 {
  color: var(--color-heading);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.requirement-card {
  background: var(--color-background-soft);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
}

.requirement-card h4 {
  color: var(--color-heading);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.requirement-card ul {
  list-style: none;
  padding: 0;
}

.requirement-card li {
  color: var(--color-text);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  position: relative;
  padding-left: 1.5rem;
}

.requirement-card li:before {
  content: "▸";
  color: var(--color-primary);
  position: absolute;
  left: 0;
}

.requirement-card li:last-child {
  border-bottom: none;
}

.installation-section h2 {
  color: var(--color-heading);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.installation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--color-text);
  line-height: 1.6;
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
  
  .category-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .software-grid {
    grid-template-columns: 1fr;
  }
  
  .requirements-grid {
    grid-template-columns: 1fr;
  }
  
  .installation-steps {
    grid-template-columns: 1fr;
  }
  
  .intro-section h2 {
    font-size: 1.5rem;
  }
  
  .category-header h3 {
    font-size: 1.3rem;
  }
  
  .requirements-section h2,
  .installation-section h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .content {
    padding: 1.5rem 0.75rem;
  }
  
  .software-card,
  .requirement-card {
    padding: 1.25rem;
  }
  
  .category-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .intro-section {
    margin-bottom: 2rem;
  }
  
  .category-section {
    margin-bottom: 2rem;
  }
  
  .requirements-section {
    margin-bottom: 2rem;
  }
}
</style>
