<template>
  <section class="local-advantages">
    <div class="section-header">
      <h2>Pourquoi Choisir une IA Locale ?</h2>
      <p class="section-subtitle">VictorIA révolutionne votre productivité tout en préservant votre vie privée</p>
    </div>
    
    <div class="comparison-grid">
      <div class="comparison-card local">
        <div class="card-header">
          <div class="card-icon">🏠</div>
          <h3>VictorIA (Local)</h3>
          <span class="badge recommended">Recommandé</span>
        </div>
        
        <div class="features-list">
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Données 100% privées</span>
          </div>
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Réponse instantanée (&lt;50ms)</span>
          </div>
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Aucune connexion requise</span>
          </div>
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Utilisation illimitée</span>
          </div>
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Coût unique d'installation</span>
          </div>
          <div class="feature-item positive">
            <span class="feature-icon">✅</span>
            <span>Personnalisation avancée</span>
          </div>
        </div>
      </div>
      
      <div class="comparison-card cloud">
        <div class="card-header">
          <div class="card-icon">☁️</div>
          <h3>IA Cloud (Autres)</h3>
          <span class="badge standard">Standard</span>
        </div>
        
        <div class="features-list">
          <div class="feature-item negative">
            <span class="feature-icon">❌</span>
            <span>Données envoyées vers serveurs</span>
          </div>
          <div class="feature-item neutral">
            <span class="feature-icon">⚠️</span>
            <span>Latence réseau (200ms+)</span>
          </div>
          <div class="feature-item negative">
            <span class="feature-icon">❌</span>
            <span>Connexion internet obligatoire</span>
          </div>
          <div class="feature-item negative">
            <span class="feature-icon">❌</span>
            <span>Limitations d'usage</span>
          </div>
          <div class="feature-item negative">
            <span class="feature-icon">❌</span>
            <span>Abonnements mensuels</span>
          </div>
          <div class="feature-item neutral">
            <span class="feature-icon">⚠️</span>
            <span>Personnalisation limitée</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="stats-showcase">
      <div class="stat-showcase-item">
        <div class="stat-big">0</div>
        <div class="stat-label">Données transmises</div>
        <div class="stat-description">Vos informations restent chez vous</div>
      </div>
      
      <div class="stat-showcase-item">
        <div class="stat-big">&lt;50ms</div>
        <div class="stat-label">Temps de réponse</div>
        <div class="stat-description">10x plus rapide que le cloud</div>
      </div>
      
      <div class="stat-showcase-item">
        <div class="stat-big">∞</div>
        <div class="stat-label">Requêtes par jour</div>
        <div class="stat-description">Aucune limite d'utilisation</div>
      </div>
      
      <div class="stat-showcase-item">
        <div class="stat-big">€0</div>
        <div class="stat-label">Coût mensuel</div>
        <div class="stat-description">Après installation initiale</div>
      </div>
    </div>
    
    <div class="security-focus">
      <div class="security-header">
        <h3>🛡️ Sécurité & Confidentialité Maximales</h3>
      </div>
      <div class="security-grid">
        <div class="security-item">
          <div class="security-icon">🔒</div>
          <h4>Chiffrement Local</h4>
          <p>Toutes vos données sont chiffrées localement sur votre machine</p>
        </div>
        <div class="security-item">
          <div class="security-icon">🚫</div>
          <h4>Zéro Télémétrie</h4>
          <p>Aucune donnée d'usage ou statistique n'est collectée</p>
        </div>
        <div class="security-item">
          <div class="security-icon">🏠</div>
          <h4>Traitement Local</h4>
          <p>100% du traitement IA s'effectue sur votre ordinateur</p>
        </div>
        <div class="security-item">
          <div class="security-icon">🎯</div>
          <h4>Contrôle Total</h4>
          <p>Vous maîtrisez entièrement vos données et leur utilisation</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.local-advantages {
  margin: 4rem 0;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.05) 100%);
  border-radius: 24px;
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
  font-size: 1.2rem;
  opacity: 0.8;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.comparison-card {
  background: var(--color-background);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.comparison-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.comparison-card.local::before {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.comparison-card.cloud::before {
  background: linear-gradient(135deg, #6b7280, #9ca3af);
}

.comparison-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.card-icon {
  font-size: 2.5rem;
}

.card-header h3 {
  color: var(--color-heading);
  font-size: 1.5rem;
  font-weight: 700;
  flex: 1;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.badge.recommended {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}

.badge.standard {
  background: #6b7280;
  color: white;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 500;
}

.feature-item.positive {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
}

.feature-item.negative {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.feature-item.neutral {
  background: rgba(251, 191, 36, 0.1);
  color: #d97706;
}

.feature-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.stats-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.stat-showcase-item {
  text-align: center;
  padding: 1.5rem;
}

.stat-big {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
}

.security-focus {
  background: var(--color-background);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.security-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.security-header h3 {
  color: var(--color-heading);
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.security-item {
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.security-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
  border-color: var(--color-primary-light);
}

.security-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.security-item h4 {
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.security-item p {
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .local-advantages {
    margin: 2rem 0;
    padding: 2rem 1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .stats-showcase {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .security-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-big {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-showcase {
    grid-template-columns: 1fr;
  }
  
  .comparison-card {
    padding: 1.5rem;
  }
  
  .security-focus {
    padding: 2rem 1rem;
  }
}
</style>
