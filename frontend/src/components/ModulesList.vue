<template>
  <section class="modules-list">
    <div class="section-header">
      <h2>Comment Fonctionne VictorIA ?</h2>
      <p class="section-subtitle">Une IA locale spécialisée avec des capacités modulaires pour préserver votre confidentialité</p>
    </div>
    
    <div class="working-principles">
      <div class="principle-item">
        <div class="principle-icon">🏠</div>
        <div class="principle-content">
          <h3>Traitement 100% Local</h3>
          <p>VictorIA fonctionne entièrement sur votre machine. Aucune donnée n'est envoyée vers des serveurs externes, garantissant une confidentialité absolue.</p>
        </div>
      </div>
      
      <div class="principle-item">
        <div class="principle-icon">🧩</div>
        <div class="principle-content">
          <h3>Architecture Modulaire</h3>
          <p>Chaque capacité est un module spécialisé qui peut être activé selon vos besoins, optimisant les ressources de votre ordinateur.</p>
        </div>
      </div>
      
      <div class="principle-item">
        <div class="principle-icon">⚡</div>
        <div class="principle-content">
          <h3>Optimisation Matérielle</h3>
          <p>VictorIA s'adapte automatiquement aux capacités de votre machine pour offrir les meilleures performances possibles.</p>
        </div>
      </div>
    </div>
    
    <div class="capabilities-grid">
      <div 
        v-for="capability in capabilities" 
        :key="capability.id"
        class="capability-card"
      >
        <div class="capability-header">
          <div class="capability-icon">{{ capability.icon }}</div>
          <h3>{{ capability.name }}</h3>
        </div>
        
        <p class="capability-description">{{ capability.description }}</p>
        
        <div class="how-it-works">
          <h4>🔧 Comment ça fonctionne :</h4>
          <ul class="working-steps">
            <li v-for="step in capability.workingSteps" :key="step">{{ step }}</li>
          </ul>
        </div>
        
        <div class="privacy-focus">
          <div class="privacy-badge">
            <span class="privacy-icon">🔒</span>
            <span>{{ capability.privacyNote }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- <div class="technical-explanation">
      <h3>💻 Fonctionnement Technique</h3>
      <div class="tech-steps">
        <div class="tech-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Installation Locale</h4>
            <p>VictorIA s'installe directement sur votre ordinateur avec tous ses modèles IA intégrés</p>
          </div>
        </div>
        
        <div class="tech-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Traitement en Temps Réel</h4>
            <p>Vos requêtes sont traitées instantanément par les modèles locaux sans connexion internet</p>
          </div>
        </div>
        
        <div class="tech-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Stockage Sécurisé</h4>
            <p>Toutes vos données restent chiffrées localement, vous gardez le contrôle total</p>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
// Capacités explicatives de VictorIA
const capabilities = [
  {
    id: 1,
    name: 'Assistant Conversationnel',
    icon: '💬',
    description: 'Interface de dialogue naturel pour interagir avec tous les modules de VictorIA de manière intuitive.',
    workingSteps: [
      'Analyse du langage naturel en temps réel',
      'Compréhension du contexte de votre demande',
      'Activation du module approprié',
      'Génération de réponse personnalisée'
    ],
    privacyNote: 'Vos conversations ne quittent jamais votre machine'
  },
  {
    id: 2,
    name: 'Traitement de Documents',
    icon: '📄',
    description: 'Analyse, résumé et extraction d\'informations de vos documents de manière complètement privée.',
    workingSteps: [
      'Lecture des formats PDF, Word, TXT',
      'Analyse du contenu par IA locale',
      'Extraction des informations clés',
      'Génération de résumés structurés'
    ],
    privacyNote: 'Vos documents restent sur votre disque dur'
  },
  /* {
    id: 3,
    name: 'Assistant Créatif',
    icon: '🎨',
    description: 'Aide à la création de contenu, rédaction et brainstorming avec une IA qui apprend vos préférences.',
    workingSteps: [
      'Analyse de votre style et préférences',
      'Génération d\'idées créatives',
      'Assistance à la rédaction',
      'Amélioration et optimisation du contenu'
    ],
    privacyNote: 'Votre style créatif reste confidentiel'
  }, */
  {
    id: 4,
    name: 'Organisateur Personnel',
    icon: '📅',
    description: 'Gestion intelligente de vos tâches et planning avec apprentissage de vos habitudes de travail.',
    workingSteps: [
      'Analyse de vos patterns de productivité',
      'Planification optimale des tâches',
      'Rappels contextuels intelligents',
      'Adaptation aux changements de planning'
    ],
    privacyNote: 'Votre emploi du temps reste privé'
  },
  /* {
    id: 5,
    name: 'Analyse de Données',
    icon: '📊',
    description: 'Traitement et analyse de vos données personnelles ou professionnelles en toute confidentialité.',
    workingSteps: [
      'Import de vos fichiers de données',
      'Analyse automatique des patterns',
      'Génération de visualisations',
      'Insights et recommandations personnalisées'
    ],
    privacyNote: 'Vos données sensibles ne sortent pas de chez vous'
  } */
]
</script>

<style scoped>
.modules-list {
  margin-bottom: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 600px;
  margin: 0 auto;
}

.working-principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.principle-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.principle-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
}

.principle-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.principle-content h3 {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.principle-content p {
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.capability-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.capability-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
  border-color: var(--color-primary-light);
}

.capability-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.capability-icon {
  font-size: 2.5rem;
}

.capability-header h3 {
  color: var(--color-heading);
  font-size: 1.4rem;
  font-weight: 700;
}

.capability-description {
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.how-it-works {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.how-it-works h4 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-weight: 600;
}

.working-steps {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.working-steps li {
  color: var(--color-text);
  padding-left: 1.5rem;
  position: relative;
}

.working-steps li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.privacy-focus {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.privacy-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
  padding: 0.75rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.privacy-icon {
  font-size: 1.1rem;
}

.technical-explanation {
  background: var(--color-background-soft);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
}

.technical-explanation h3 {
  color: var(--color-heading);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.tech-steps {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  background: var(--color-primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .working-principles {
    grid-template-columns: 1fr;
  }
  
  .principle-item {
    flex-direction: column;
    text-align: center;
  }
  
  .principle-icon {
    align-self: center;
  }
  
  .technical-explanation {
    padding: 2rem 1rem;
  }
  
  .tech-step {
    flex-direction: column;
    text-align: center;
  }
}
</style>