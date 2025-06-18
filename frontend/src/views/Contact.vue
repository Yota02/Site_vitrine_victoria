<template>
  <div class="contact">
    <div class="hero-section">
      <div class="container">
        <h1>Contactez-Nous</h1>
        <p class="hero-subtitle">Proposez vos idées de plugins, devenez testeur ou obtenez plus d'informations</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Restons en Contact</h2>
            <p class="info-description">
              Nous sommes là pour vous écouter et répondre à toutes vos questions.
            </p>
            
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>contact@victoria-plugins.com</p>
                <p class="info-note">Réponse sous 24h</p>
              </div>
            </div>
            
            <!-- <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Localisation</h3>
                <p>France</p>
                <p class="info-note">Support en français</p>
              </div>
            </div> -->
            
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3>Communauté</h3>
                <p>Rejoignez notre Discord</p>
                <p class="info-note">Échanges en temps réel</p>
              </div>
            </div>
            
            <!-- <div class="contact-stats">
              <div class="stat-item">
                <span class="stat-number">500+</span>
                <span class="stat-label">Messages traités</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">24h</span>
                <span class="stat-label">Temps de réponse</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">98%</span>
                <span class="stat-label">Satisfaction</span>
              </div>
            </div> -->
          </div>
          
          <div class="contact-form">
            <h2>Envoyez-nous un Message</h2>
            <form @submit.prevent="submitForm" class="form-container">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nom complet</label>
                  <input type="text" id="name" v-model="form.name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" required>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="idee-plugin">💡 Proposer une idée de plugin</option>
                  <option value="devenir-testeur">🧪 Devenir testeur</option>
                  <option value="informations">ℹ️ Demander des informations supplémentaires</option>
                  <option value="bug-report">🐛 Signaler un bug</option>
                  <option value="autre">📝 Autre</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required 
                  :placeholder="getMessagePlaceholder()"></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                  </svg>
                  Envoyer le Message
                </span>
                <span v-else>
                  <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Envoi en cours...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const getMessagePlaceholder = () => {
  switch (form.subject) {
    case 'idee-plugin':
      return 'Décrivez votre idée de plugin : fonctionnalités souhaitées, cas d\'usage, etc.'
    case 'devenir-testeur':
      return 'Parlez-nous de votre expérience et de votre motivation pour devenir testeur...'
    case 'informations':
      return 'Quelles informations souhaitez-vous obtenir ?'
    case 'bug-report':
      return 'Décrivez le problème rencontré, les étapes pour le reproduire...'
    default:
      return 'Votre message...'
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  alert('Message envoyé avec succès!')
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
}
</script>

<style scoped>
.contact {
  padding-top: 60px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.hero-section > .container {
  position: relative;
  z-index: 1;
}

.hero-section h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #e0e7ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1.6;
}

.content {
  padding: 5rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;
}

.contact-info, .contact-form {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
}

.contact-info:hover, .contact-form:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06);
}

.contact-info h2, .contact-form h2 {
  color: var(--color-heading);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-description {
  color: var(--color-text);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius: 12px;
  border-left: 4px solid var(--color-primary);
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateX(4px);
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
}

.info-icon {
  font-size: 1.5rem;
  min-width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), #3b82f6);
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
}

.info-item h3 {
  color: var(--color-heading);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 0.25rem;
}

.info-note {
  font-size: 0.9rem;
  color: var(--color-primary);
  font-weight: 500;
}

.contact-stats {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border-radius: 12px;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: var(--color-heading);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  transform: translateY(-1px);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #1e40af, var(--color-primary));
  transform: translateY(-2px);
  box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .content {
    padding: 3rem 1rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info, .contact-form {
    padding: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .info-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-section {
    padding: 2rem 0.75rem;
  }
  
  .content {
    padding: 2rem 0.75rem;
  }
  
  .contact-info, .contact-form {
    padding: 1.5rem;
  }
  
  .info-item {
    padding: 0.875rem;
    gap: 1rem;
  }
  
  .info-icon {
    min-width: 2.5rem;
    height: 2.5rem;
  }
  
  .info-item h3 {
    font-size: 1.1rem;
  }
  
  .contact-info h2, .contact-form h2 {
    font-size: 1.6rem;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
  
  .submit-btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 360px) {
  .hero-section h1 {
    font-size: 1.75rem;
  }
  
  .hero-section {
    padding: 1.5rem 0.5rem;
  }
  
  .content {
    padding: 1.5rem 0.5rem;
  }
  
  .contact-info, .contact-form {
    padding: 1.25rem;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
    padding: 0.75rem;
  }
  
  .info-icon {
    align-self: center;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.6rem 0.75rem;
  }
  
  .submit-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
