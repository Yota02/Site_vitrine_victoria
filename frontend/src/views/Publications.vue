<template>
  <div class="publications">
    <div class="hero-section">
      <div class="container">
        <h1>Publications Scientifiques</h1>
        <p class="hero-subtitle">Nos contributions à la recherche en intelligence artificielle</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="publications-list">
          <div class="publication-card" v-for="pub in publications" :key="pub.id">
            <div class="pub-meta">
              <span class="pub-year">{{ pub.year }}</span>
              <span class="pub-type">{{ pub.type }}</span>
            </div>
            <h3 class="pub-title">{{ pub.title }}</h3>
            <p class="pub-authors">{{ pub.authors }}</p>
            <p class="pub-venue">{{ pub.venue }}</p>
            <div class="pub-actions">
              <a href="#" class="btn-primary">Lire</a>
              <a href="#" class="btn-secondary">Citer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const publications = ref([
  {
    id: 1,
    title: "Advanced Neural Architectures for Conversational AI",
    authors: "Marie Dubois, Jean Dupont, Sophie Martin",
    venue: "International Conference on Machine Learning (ICML) 2024",
    year: 2024,
    type: "Conférence"
  },
  {
    id: 2,
    title: "Contextual Understanding in Multi-turn Dialogues",
    authors: "Jean Dupont, Marie Dubois",
    venue: "Journal of Artificial Intelligence Research",
    year: 2024,
    type: "Journal"
  },
  {
    id: 3,
    title: "Multilingual Speech Recognition for Conversational Systems",
    authors: "Sophie Martin, Pierre Legrand, Marie Dubois",
    venue: "European Conference on Artificial Intelligence (ECAI) 2023",
    year: 2023,
    type: "Conférence"
  }
])
</script>

<style scoped>
.publications {
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
  max-width: 800px;
  margin: 0 auto;
}

.publications-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.publication-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.publication-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.1);
}

.pub-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.pub-year, .pub-type {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.pub-year {
  background: var(--color-primary);
  color: white;
}

.pub-type {
  background: var(--color-background-mute);
  color: var(--color-text);
}

.pub-title {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.pub-authors {
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.pub-venue {
  color: var(--color-text);
  font-style: italic;
  margin-bottom: 1.5rem;
}

.pub-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-soft);
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary-light);
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
  
  .pub-actions {
    flex-direction: column;
  }
}
</style>
