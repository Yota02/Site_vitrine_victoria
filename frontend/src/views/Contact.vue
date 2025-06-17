<template>
  <div class="contact">
    <div class="hero-section">
      <div class="container">
        <h1>Contactez-Nous</h1>
        <p class="hero-subtitle">Collaborons ensemble sur les technologies d'IA conversationnelle</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Informations de Contact</h2>
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <h3>Adresse</h3>
                <p>123 Avenue de la Recherche<br>75001 Paris, France</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>contact@ia-research.fr</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>Envoyez-nous un Message</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="subject">Sujet</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="collaboration">Collaboration de recherche</option>
                  <option value="stage">Demande de stage</option>
                  <option value="publication">Question sur nos publications</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message' }}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2, .contact-form h2 {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 1.5rem;
  min-width: 2rem;
}

.info-item h3 {
  color: var(--color-heading);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: var(--color-text);
  line-height: 1.6;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: var(--color-heading);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
